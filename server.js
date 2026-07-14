// Chaos by Ronk — static server + Gmail search backend (zero npm deps, Node 18+)
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = process.env.PORT || 3000;
const CID = process.env.GOOGLE_CLIENT_ID || '';
const CSECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const SB_URL = process.env.SUPABASE_URL || '';
const SB_SERVICE = process.env.SUPABASE_SERVICE_KEY || '';
const GMAIL_SCOPE = 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/userinfo.email';

const types = { '.html':'text/html; charset=utf-8', '.png':'image/png', '.json':'application/json', '.svg':'image/svg+xml', '.ico':'image/x-icon' };
const gmailReady = () => CID && CSECRET && SB_URL && SB_SERVICE;
function baseUrl(req){ return process.env.APP_URL || ('https://' + req.headers.host); }
function send(res, code, body, ct){ res.writeHead(code, { 'Content-Type': ct || 'application/json; charset=utf-8' }); res.end(body); }

async function sbSaveToken(space, refresh_token, email){
  await fetch(SB_URL + '/rest/v1/gmail_tokens', {
    method: 'POST',
    headers: { 'apikey': SB_SERVICE, 'Authorization': 'Bearer ' + SB_SERVICE, 'Content-Type': 'application/json', 'Prefer': 'resolution=merge-duplicates' },
    body: JSON.stringify([{ space, refresh_token, email, updated_at: new Date().toISOString() }])
  });
}
async function sbGetToken(space){
  const r = await fetch(SB_URL + '/rest/v1/gmail_tokens?space=eq.' + encodeURIComponent(space) + '&select=refresh_token,email', {
    headers: { 'apikey': SB_SERVICE, 'Authorization': 'Bearer ' + SB_SERVICE }
  });
  const rows = await r.json();
  return Array.isArray(rows) && rows[0] ? rows[0] : null;
}

async function exchangeCode(code, redirect_uri){
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ code, client_id: CID, client_secret: CSECRET, redirect_uri, grant_type: 'authorization_code' })
  });
  return r.json();
}
async function accessFromRefresh(refresh_token){
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ refresh_token, client_id: CID, client_secret: CSECRET, grant_type: 'refresh_token' })
  });
  return r.json();
}

async function gmailSearch(accessToken, q){
  const list = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=8&q=' + encodeURIComponent(q), {
    headers: { 'Authorization': 'Bearer ' + accessToken }
  }).then(r => r.json());
  const ids = (list.messages || []).map(m => m.id);
  const out = [];
  for (const id of ids) {
    const m = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/' + id + '?format=metadata&metadataHeaders=From&metadataHeaders=Subject&metadataHeaders=Date', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(r => r.json());
    const h = {}; (m.payload && m.payload.headers || []).forEach(x => h[x.name] = x.value);
    out.push({ id, threadId: m.threadId, from: h.From || '', subject: h.Subject || '(ללא נושא)', date: h.Date || '', snippet: m.snippet || '' });
  }
  return out;
}

const server = http.createServer(async (req, res) => {
  let u;
  try { u = new URL(req.url, 'http://x'); } catch(e){ return send(res, 400, 'bad'); }
  const p = u.pathname;

  if (p === '/auth/google') {
    if (!gmailReady()) return send(res, 503, 'Gmail not configured', 'text/plain');
    const space = u.searchParams.get('space') || '';
    const redirect_uri = baseUrl(req) + '/auth/google/callback';
    const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
      client_id: CID, redirect_uri, response_type: 'code', scope: GMAIL_SCOPE,
      access_type: 'offline', prompt: 'consent', state: space
    });
    res.writeHead(302, { Location: authUrl }); return res.end();
  }

  if (p === '/auth/google/callback') {
    try {
      const code = u.searchParams.get('code'); const space = u.searchParams.get('state') || '';
      const redirect_uri = baseUrl(req) + '/auth/google/callback';
      const tok = await exchangeCode(code, redirect_uri);
      if (!tok.refresh_token) throw new Error('no_refresh_token');
      let email = '';
      try {
        const info = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', { headers: { Authorization: 'Bearer ' + tok.access_token } }).then(r => r.json());
        email = info.email || '';
      } catch(e){}
      await sbSaveToken(space, tok.refresh_token, email);
      res.writeHead(302, { Location: '/?gmail=connected' }); return res.end();
    } catch(e){ res.writeHead(302, { Location: '/?gmail=error' }); return res.end(); }
  }

  if (p === '/api/search/gmail') {
    try {
      if (!gmailReady()) return send(res, 503, JSON.stringify({ error: 'not_configured' }));
      const space = u.searchParams.get('space') || ''; const q = u.searchParams.get('q') || '';
      const row = await sbGetToken(space);
      if (!row) return send(res, 200, JSON.stringify({ connected: false, results: [] }));
      const at = await accessFromRefresh(row.refresh_token);
      if (!at.access_token) return send(res, 200, JSON.stringify({ connected: false, results: [] }));
      const results = q ? await gmailSearch(at.access_token, q) : [];
      return send(res, 200, JSON.stringify({ connected: true, email: row.email || '', results }));
    } catch(e){ return send(res, 200, JSON.stringify({ connected: false, results: [], error: String(e) })); }
  }

  if (p === '/api/gmail/status') {
    try {
      if (!gmailReady()) return send(res, 200, JSON.stringify({ configured: false, connected: false }));
      const row = await sbGetToken(u.searchParams.get('space') || '');
      return send(res, 200, JSON.stringify({ configured: true, connected: !!row, email: row ? row.email : '' }));
    } catch(e){ return send(res, 200, JSON.stringify({ configured: true, connected: false })); }
  }

  let rel = decodeURIComponent(p); if (rel === '/') rel = '/index.html';
  const fp = path.join(__dirname, path.normalize(rel));
  if (!fp.startsWith(__dirname)) return send(res, 403, 'Forbidden', 'text/plain');
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(fp)] || 'text/plain' });
    res.end(data);
  });
});

server.listen(PORT, () => console.log('Chaos by Ronk on ' + PORT + ' | Gmail ' + (gmailReady() ? 'configured' : 'not configured')));
