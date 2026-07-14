// Minimal zero-dependency static server for Railway
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const types = { '.html':'text/html; charset=utf-8', '.png':'image/png', '.json':'application/json', '.svg':'image/svg+xml', '.ico':'image/x-icon' };
http.createServer((req, res) => {
  let rel = decodeURIComponent((req.url || '/').split('?')[0]);
  if (rel === '/') rel = '/index.html';
  const fp = path.join(__dirname, path.normalize(rel));
  if (!fp.startsWith(__dirname)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(fp)] || 'text/plain' });
    res.end(data);
  });
}).listen(port, () => console.log('Chaos by Ronk running on port ' + port));
