const express    = require('express');
const http       = require('http');
const { Server } = require('socket.io');
const path       = require('path');
const os         = require('os');

const app    = express();
const server = http.createServer(app);
const io     = new Server(server, { cors: { origin: '*' }, maxHttpBufferSize: 5e6 });

// No-cache headers so phones always get the latest version
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});
app.use(express.static(path.join(__dirname, 'public')));

const PLAYERS = ['רון', 'הדס'];

// ══════════════════════════════════════════
//  BADGES DEFINITION
// ══════════════════════════════════════════
const BADGE_DEFS = [
  { id:'first',     icon:'🎮', label:'ביחד',        desc:'שיחקתם את המשחק הראשון' },
  { id:'romantic',  icon:'💕', label:'רומנטי/ת',    desc:'10 פעמים ❤️' },
  { id:'fire',      icon:'🔥', label:'בוער/ת',       desc:'10 פעמים 🔥' },
  { id:'laughing',  icon:'😂', label:'שמח/ה',        desc:'10 פעמים 😂' },
  { id:'brave',     icon:'🌶️', label:'נועז/ת',       desc:'שיחקתם נועז ואינטימי' },
  { id:'explorer',  icon:'🗺️', label:'חוקר/ת',      desc:'4 קטגוריות שונות' },
  { id:'champion',  icon:'👑', label:'אלוף/ה',       desc:'200 נקודות' },
  { id:'hundred',   icon:'💯', label:'מושלם/ת',      desc:'50 כרטיסים' },
  { id:'synced',    icon:'🌟', label:'מסונכרנ/ת',    desc:'שניכם הגבתם על 10 כרטיסים' },
  { id:'intimate',  icon:'🫦', label:'אינטימי/ת',    desc:'5 פעמים ✨ על כרטיס נועז' },
];

const POINTS = { '❤️':5, '🔥':4, '✨':4, '😂':3, '🥺':2 };

// ══════════════════════════════════════════
//  CARD DATA
// ══════════════════════════════════════════
const CATS = {
  personal: {
    label:'שאלות אישיות', icon:'💬', color:'#e0517a', grad:'linear-gradient(135deg,#e0517a,#9b5de5)',
    cards:[
      {id:'p1',  text:'מה הדבר שהכי אהבת בגיל 10 ועדיין אוהב?',                   tip:'תשובה ישרה, בלי לחשוב יותר מדי', icon:'🧒'},
      {id:'p2',  text:'אם יכולת לשנות רגע אחד מהשנה האחרונה — מה היה?',            tip:'לא חייב להיות רע, אולי רגע שהיית רוצה להאריך', icon:'⏪'},
      {id:'p3',  text:'מה הדבר שאני עושה שממש גורם לך להרגיש אהוב?',              tip:'תהיו ספציפיים — תנועה, מילה, מבט', icon:'💗'},
      {id:'p4',  text:'מה הפחד הכי גדול שלך שעוד לא סיפרת לי עליו?',              tip:'תנשמו. האחד מחזיק את השני', icon:'🌊'},
      {id:'p5',  text:'אם הייתם שני ספרים — איזה סוג ספר היה כל אחד?',            tip:'ז\'אנר, כריכה, כמה עמודים — הכל עולה', icon:'📚'},
      {id:'p6',  text:'מה הדבר שאתה הכי גאה בו בעצמך בשנה האחרונה?',              tip:'גאווה אישית, לא הישג חיצוני', icon:'🌟'},
      {id:'p7',  text:'מתי בפעם האחרונה בכית — ועל מה?',                           tip:'אין תשובה נכונה או לא נכונה', icon:'🥺'},
      {id:'p8',  text:'מה המוזיקה שמכניסה אותך הכי עמוק פנימה?',                  tip:'שיר, אמן, ז\'אנר — מה שעולה ראשון', icon:'🎵'},
      {id:'p9',  text:'איזה גרסה של עצמך אתה מחפש להיות בעוד שנה?',               tip:'לא ברשימה — בתחושה', icon:'🌱'},
      {id:'p10', text:'מה הדבר שהכי קשה לך לבקש עזרה בו?',                         tip:'נשמה לנשמה', icon:'🤝'},
      {id:'p11', text:'מה מייד משפר לך את הרוח גם ביום הכי קשה?',                  tip:'קטן או גדול, הכל תקף', icon:'☀️'},
      {id:'p12', text:'אם היית שולח מכתב לגרסה הצעירה שלך — מה כתבת?',            tip:'שתפו בקול', icon:'✉️'},
      {id:'p13', text:'מה הדבר שאתה הכי אוהב לגבי הקשר שלנו?',                    tip:'תגידו במילים — לא רק ב"הכל"', icon:'💑'},
      {id:'p14', text:'אם יכולת לחיות יום אחד כמישהו אחר — מי ולמה?',              tip:'בן אדם אמיתי, דמות, מישהו מהסביבה', icon:'🦸'},
      {id:'p15', text:'מה גרם לך לדעת שאני "זה"/"זו"?',                             tip:'רגע, תחושה, מחשבה — מתי הבנתם?', icon:'✨'},
    ]
  },
  memories: {
    label:'זיכרונות', icon:'📸', color:'#00c9a7', grad:'linear-gradient(135deg,#00c9a7,#0067b3)',
    cards:[
      {id:'m1',  text:'ספרו על הרגע הראשון שהרגשתם שיש כימיה.',                    tip:'מה בדיוק קרה? מה הייתם לבושים?', icon:'⚡'},
      {id:'m2',  text:'מה הסיפור הכי מצחיק שעבר עליכם יחד?',                      tip:'זה שמביא לכם חיוך מיידי', icon:'😂'},
      {id:'m3',  text:'זכרו יחד את הדייט הראשון — כל אחד מגרסתו.',                tip:'השוו — בטוח יש הבדלים', icon:'🌹'},
      {id:'m4',  text:'מה הטיול הכי בלתי נשכח שלכם?',                             tip:'אפילו אם לא הלכה לפי התוכנית', icon:'✈️'},
      {id:'m5',  text:'זכרו רגע שנלחמתם ואחר כך צחקתם עליו.',                     tip:'מה הפך את הרוגז לצחוק?', icon:'🕊️'},
      {id:'m6',  text:'מה השיר שהוא מיד שלכם?',                                    tip:'ספרו איפה שמעתם אותו יחד בפעם הראשונה', icon:'🎶'},
      {id:'m7',  text:'מה הסוד הראשון ששיתפתם אחד עם השני?',                      tip:'הרגע שהתחלתם להאמין אחד בשני', icon:'🔐'},
      {id:'m8',  text:'מה הסיטואציה שבה הרגשתם הכי "אנחנו"?',                     tip:'יכול להיות רגע שקט לגמרי', icon:'🫂'},
      {id:'m9',  text:'ספרו על פעם שהפתעתם אחד את השני.',                          tip:'הפתעה טובה, לא חייבת להיות מתוכננת', icon:'🎁'},
      {id:'m10', text:'מה הרגע הכי רומנטי שחוויתם יחד?',                           tip:'לפעמים הרגעים הקטנים הם הכי גדולים', icon:'🌙'},
      {id:'m11', text:'מה פחד שאחד מכם עזר לשני להתגבר עליו?',                    tip:'לפעמים נוכחות מספיקה', icon:'🦋'},
      {id:'m12', text:'מה המשפט שאחד אמר שהשני עדיין זוכר?',                      tip:'מצחיק, רציני, או סתם מוזר', icon:'💬'},
    ]
  },
  creative: {
    label:'יצירתיות', icon:'🎨', color:'#f7b731', grad:'linear-gradient(135deg,#f7b731,#e0517a)',
    cards:[
      {id:'c1',  text:'אם הקשר שלנו היה סרט — איזה ז\'אנר ומי הכוכב?',            tip:'כל אחד מציע ז\'אנר — השוו', icon:'🎬'},
      {id:'c2',  text:'בנו יחד את הדייט המושלם עם תקציב אינסופי.',                 tip:'כל אחד מוסיף אלמנט אחד — חלופות', icon:'🌍'},
      {id:'c3',  text:'אם הייתם חיות — מה כל אחד מכם ולמה?',                     tip:'ואם הייתם חיות — האם הייתם מסתדרים?', icon:'🦁'},
      {id:'c4',  text:'תארו את הבית האידיאלי שלכם בעוד 10 שנים.',                  tip:'כל אחד מוסיף חדר — בנו אותו יחד', icon:'🏡'},
      {id:'c5',  text:'3 מקומות בעולם שתרצו לנסוע אליהם — אלו?',                  tip:'כל אחד בוחר מקום + אחד מוחלט יחד', icon:'🗺️'},
      {id:'c6',  text:'כתבו יחד 6 מילים שמתארות את הקשר שלכם.',                   tip:'כל אחד אומר 3 — ראו אם יש חפיפות', icon:'✍️'},
      {id:'c7',  text:'אם יכולתם ליצור סדרה על חייכם — שם הפרק הראשון?',         tip:'חשבו על where it all began', icon:'📺'},
      {id:'c8',  text:'אם הייתם להקה — שם הלהקה והז\'אנר?',                       tip:'ובונוס: שם האלבום הראשון', icon:'🎸'},
      {id:'c9',  text:'בחרו 3 שירים שהם "פסקול" לקשר שלכם.',                     tip:'כל אחד בוחר שיר + אחד מוחלט יחד', icon:'🎵'},
      {id:'c10', text:'אם יכולתם לגור בכל תקופה היסטורית — מתי ואיפה?',          tip:'ומה הייתם עושים שם יחד?', icon:'⏳'},
      {id:'c11', text:'כתבו פרסומת של 3 משפטים למערכת היחסים שלכם.',             tip:'מוכרים מה? לאיזו אוכלוסיית יעד?', icon:'📣'},
      {id:'c12', text:'אם הייתם ממציאים חגיגה חדשה — מה חוגגים?',                tip:'שם, תאריך, מסורת — הכל!', icon:'🎊'},
      {id:'c13', text:'תארו את הארוחה המושלמת שהייתם מכינים זה לזה.',            tip:'כל אחד מתאר ארוחה לשני, בפרטים', icon:'🍽️'},
    ]
  },
  dare: {
    label:'אתגרים', icon:'🔥', color:'#9b5de5', grad:'linear-gradient(135deg,#9b5de5,#e0517a)',
    cards:[
      {id:'d1',  text:'שלחו לחבר/ה טוב/ה: "אתם רוצים לשמוע משהו נחמד עלינו?"',    tip:'ואז ספרו מה הם ענו 😄', icon:'📱', player:'שניהם'},
      {id:'d2',  text:'ספרו זה לזה משהו שמעולם לא ספרתם לשום אדם.',               tip:'זה מרגיש מפחיד — בדיוק בגלל זה שווה', icon:'🔓', player:'כל אחד בתורו'},
      {id:'d3',  text:'שחקו "מה אני אוהב בך" — כל אחד אומר 5 דברים ספציפיים.',   tip:'לא "הכל" — תהיו ספציפיים!', icon:'❤️', player:'כל אחד בתורו'},
      {id:'d4',  text:'בעיניים סגורות — מה אתם חושבים עלי כשקמים?',               tip:'ללא עריכות. מה שעולה ראשון', icon:'😴', player:'שניהם'},
      {id:'d5',  text:'כתבו יחד ב-10 שניות רשימת "הדברים שאנחנו הכי טובים בהם".', tip:'כמה שיותר מהר, ללא מחשבה', icon:'⚡', player:'שניהם'},
      {id:'d6',  text:'תנו לשני ניחוש: מה הייתי רוצה לשמוע עכשיו? ואז — אמרו את זה.', tip:'ההזדמנות הזאת היא עכשיו', icon:'👂', player:'כל אחד בתורו'},
      {id:'d7',  text:'מיני אתגר ריקוד: 60 שניות — כמה שיותר מוגזם.',             tip:'כיף בהחלט 💃', icon:'💃', player:'שניהם'},
      {id:'d8',  text:'כל אחד מעניק לשני תואר כבוד ומסביר אותו.',                 tip:'כמו: "אלוף הניחוחות" או "מלכת הנחמה"', icon:'🏆', player:'כל אחד בתורו'},
      {id:'d9',  text:'מה הייתם עושים אחרת אם הייתם מתחילים את הקשר מחדש?',     tip:'לא ביקורת — רפלקציה אמיתית', icon:'🔄', player:'כל אחד בתורו'},
      {id:'d10', text:'אמרו "אני אוהב אותך" בשלוש שפות — אחת ממוצאת.',            tip:'השפה הממוצאת חייבת להיות הנמתקת ביותר', icon:'🌐', player:'שניהם'},
      {id:'d11', text:'ספרו על הרגע שהרגשתם שאתם ממש רואים אחד את השני.',         tip:'ההבדל הזה חשוב. חשבו עליו.', icon:'👁️', player:'כל אחד בתורו'},
      {id:'d12', text:'שחקו "מי בינינו יותר...?" — כל אחד שואל שאלה.',             tip:'כל תשובה דורשת הסבר!', icon:'🤔', player:'שניהם'},
      {id:'d13', text:'אמרו משהו שתמיד רציתם לומר אבל חיכיתם לרגע הנכון.',        tip:'ההזדמנות הזאת היא עכשיו', icon:'💌', player:'כל אחד בתורו'},
      {id:'d14', text:'צרו יחד ברכה שתשלחו לעצמכם בעוד שנה.',                     tip:'כל אחד כותב משפט אחד — שלחו במייל', icon:'📩', player:'שניהם'},
    ]
  },
  life: {
    label:'רגעי חיים', icon:'🎂', color:'#ff9f43', grad:'linear-gradient(135deg,#ff9f43,#ee5a24)',
    cards:[
      {id:'l1',  text:'איפה חגגנו את יום ההולדת שלך בפעם האחרונה? מה היה הרגע הכי טוב שם?',    tip:'סגרו עיניים ותחזרו לאותו ערב', icon:'🎂'},
      {id:'l2',  text:'מה הארוחה הכי בלתי נשכחת שאכלנו יחד? מה הזמנו?',                        tip:'המסעדה, השולחן, מה לבשתם — הכל', icon:'🍽️'},
      {id:'l3',  text:'איזה חופשה הפתיעה אתכם לטובה יותר מכל ציפייה?',                           tip:'אפילו אם הכל הלך הפוך — מה עשה אותה מיוחדת?', icon:'✈️'},
      {id:'l4',  text:'מה האירוע המשפחתי שדיברתם עליו שנה לאחר מכן?',                           tip:'חתונה, בר מצווה, ברית — מה תפס אתכם?', icon:'👨‍👩‍👧‍👦'},
      {id:'l5',  text:'ספרו על ערב ספונטני לגמרי — בלי תכנון — שיצא מדהים.',                     tip:'מה התחיל אותו? לאן הגעתם בסוף?', icon:'🌃'},
      {id:'l6',  text:'מה הרכישה הכי שמחה שקניתם יחד? האם חרטתם?',                              tip:'גדולה או קטנה — מה הביאה לחייכם?', icon:'🛍️'},
      {id:'l7',  text:'זכרו את הדירה הראשונה שגרתם בה יחד. מה הדבר הכי מצחיק שקרה שם?',          tip:'ריח, רעש, שכנים, ריהוט — כל פרט עולה', icon:'🏠'},
      {id:'l8',  text:'איזה סרט, סדרה או הצגה ראיתם יחד שעדיין מדברים עליה?',                    tip:'ולמה דווקא היא נשארה?', icon:'🎭'},
      {id:'l9',  text:'מה החג שהכי נהנתם לחגוג יחד? מה עשה אותו מיוחד?',                        tip:'ראש השנה, פסח, חנוכה — מה ה"טקס" שלכם?', icon:'🕎'},
      {id:'l10', text:'ספרו על פעם שאחד מכם עבר משהו קשה — וכיצד הייתם שם זה לזה.',             tip:'לא צריך פרטים — רק התחושה', icon:'🤍'},
      {id:'l11', text:'מה הקונצרט או ההופעה הכי מדהימה שהייתם בה יחד?',                         tip:'אמן, מקום, מה הרגשתם שם', icon:'🎸'},
      {id:'l12', text:'ספרו על יום הולדת שאחד מכם ארגן לשני — מה עבד ומה השתבש?',               tip:'גם הסיפורים שהשתבשו הם הכי טובים', icon:'🎁'},
      {id:'l13', text:'מה ההחלטה הכי גדולה שקיבלתם יחד? ואיך הגעתם אליה?',                      tip:'דירה, ילד, עבודה, מעבר — מה היה הרגע שאמרתם "כן"?', icon:'🔑'},
      {id:'l14', text:'איזה מקום בעולם — שביקרתם בו — הייתם חוזרים אליו מחר?',                  tip:'ולמה דווקא שם?', icon:'🗺️'},
      {id:'l15', text:'מה שנה שעברה לימדה אתכם על עצמכם כזוג?',                                 tip:'לא חייב להיות עמוק — גם תגלית קטנה שווה', icon:'📅'},
      {id:'l16', text:'ספרו על ארוחת שישי משפחתית שתמיד תזכרו — מה היה שם?',                    tip:'מי ישב, מה בושל, מה נאמר', icon:'🕯️'},
      {id:'l17', text:'מה הדבר הכי טיפש שעשיתם יחד ואחר כך צחקתם עליו שנים?',                  tip:'בנו, קנו, תכננו — מה לא עבד?', icon:'😅'},
    ]
  },
  bold: {
    label:'נועז ואינטימי', icon:'🌶️', color:'#ff4757', grad:'linear-gradient(135deg,#ff4757,#ff6b81)',
    cards:[
      {id:'b1',  text:'תאר/י את הפעם שהכי נמשכת אלי — מה בדיוק ראית?',            tip:'פרטים קטנים — הם הם שעושים את זה', icon:'👀'},
      {id:'b2',  text:'מה הדבר שאני עושה שמדליק/ה אותך הכי הרבה — שאולי לא יודע/ת?', tip:'אל תצנזרו', icon:'🔥'},
      {id:'b3',  text:'שלח/י לי עכשיו הודעה עם 3 דברים שאתה/ת אוהב/ת בגוף שלי.',   tip:'עכשיו. ממש עכשיו.', icon:'📱'},
      {id:'b4',  text:'תאר/י בפרטים את הלילה המושלם שלנו — ללא מגבלות.',           tip:'שניכם סוגרים עיניים ומתארים', icon:'🌙'},
      {id:'b5',  text:'מה הרגע האינטימי ביותר שזכרת מהחודש האחרון?',               tip:'לא חייב להיות גדול — לפעמים מגע קטן הוא הכל', icon:'🫦'},
      {id:'b6',  text:'תאר/י את הנשיקה הכי טובה שנתת לי — מתי, איפה, ואיך?',       tip:'פרטים, פרטים, פרטים', icon:'💋'},
      {id:'b7',  text:'מה הפנטזיה הכי קרובה להתגשמות שלך?',                         tip:'אחד מספר, השני מקשיב בלי לפסוק', icon:'✨'},
      {id:'b8',  text:'מה הביגוד שמעלה אצלך הכי הרבה עניין כשאני לובש/ת?',         tip:'בגד, צבע, סיטואציה — הכל תקף', icon:'👗'},
      {id:'b9',  text:'ספר/י על ערב שרצית שלא יגמר — מה עשינו?',                    tip:'מתחיל מהרגע שנפגשנו', icon:'🌆'},
      {id:'b10', text:'מה הדבר שהכי אוהב/ת לשמוע ממני כשאנחנו קרובים?',            tip:'מילה, משפט, שם — מה גורם לך להרגיש רצוי/ה?', icon:'🔉'},
      {id:'b11', text:'אם היה לנו 24 שעות לבד לגמרי — ללא טלפונים — מה היית מתכנן/ת?', tip:'שעה אחר שעה', icon:'🏡'},
      {id:'b12', text:'מה הדבר שגורם לך להרגיש הכי מאוד רצוי/ה ואהוב/ה?',          tip:'פיזית, רגשית — מה ממש מגיע ללב?', icon:'💗'},
      {id:'b13', text:'תאר/י רגע קרוב שבו הרגשת שהעולם נעצר.',                       tip:'מתי בדיוק? מה ראית? מה הרגשת?', icon:'⏸️'},
      {id:'b14', text:'מה הייתם עושים אם הייתם יודעים שלאף אחד לא אכפת?',           tip:'בלי שיפוטיות — רק בינינו', icon:'🤫'},
      {id:'b15', text:'שלח/י לי עכשיו הודעה שהיית שולח/ת רק אם אף אחד לא יראה.',    tip:'רק אנחנו. אף אחד אחר.', icon:'🔐'},
    ]
  },
  whatif: {
    label:'מה אם?', icon:'💭', color:'#5f27cd', grad:'linear-gradient(135deg,#5f27cd,#00d2d3)',
    cards:[
      {id:'w1',  text:'מה אם היינו נפגשים היום לראשונה — איפה זה היה קורה?',        tip:'בר, קפה, אירוע — ואיך הייתם מציגים את עצמכם?', icon:'🍸'},
      {id:'w2',  text:'מה אם יכולנו לחיות חודש בכל מקום בעולם — אלו הייתם בוחרים?', tip:'ולמה דווקא שם? מה הייתם עושים שם?', icon:'🌍'},
      {id:'w3',  text:'מה אם היה לנו יום שלם לבד בבית ללא טלפונים?',                tip:'שעה אחר שעה — מה הייתם עושים?', icon:'🏠'},
      {id:'w4',  text:'מה אם יכולנו לחזור לרגע אחד מהעבר שלנו — לאיזה?',            tip:'ולמה דווקא לאותו רגע?', icon:'⏰'},
      {id:'w5',  text:'מה אם יכולתם לקרוא מחשבות זה של זה ליום אחד — מה הייתם מגלים?', tip:'תהיו כנים — ומוכנים לשמוע', icon:'🧠'},
      {id:'w6',  text:'מה אם לא הייתה בנינו מחויבות — הייתם בוחרים אחד בשני שוב?',  tip:'שאלה פשוטה עם תשובה שצריכה הסבר', icon:'🤍'},
      {id:'w7',  text:'מה אם יכולתם לתת לשני מתנה ללא הגבלת כסף — מה הייתה?',      tip:'לא חייב להיות חפץ — יכול להיות חוויה, זמן, רגע', icon:'🎁'},
      {id:'w8',  text:'מה אם היינו מחליפים תפקידים לשבוע — מה הייתם מגלים?',        tip:'על עצמכם ועל השני', icon:'🔄'},
      {id:'w9',  text:'מה אם היה לנו ילד שגדל — מה הייתם רוצים שיאמר עלינו?',       tip:'לא על ההורות — על הקשר שלנו', icon:'👶'},
      {id:'w10', text:'מה אם יכולתם לבקש מהיקום דבר אחד עבור הקשר שלכם?',          tip:'דבר אחד בלבד — מה הוא?', icon:'🌌'},
      {id:'w11', text:'מה אם היינו צריכים לתאר את מערכת היחסים שלנו בשלושה מילים?',  tip:'כל אחד בוחר שלוש — ראו אם יש חפיפה', icon:'✍️'},
      {id:'w12', text:'מה אם הייתם יודעים שרק עוד שנה יש לכם יחד — מה הייתם עושים?', tip:'לא דרמה — רק להחליט מה באמת חשוב', icon:'⌛'},
    ]
  },
  knowyou: {
    label:'אני מכיר/ה אותך', icon:'🧠', color:'#1dd1a1', grad:'linear-gradient(135deg,#1dd1a1,#10ac84)',
    cards:[
      {id:'k1',  text:'מה הצבע האהוב עלי — ולמה לדעתך?',                            tip:'השני מנחש, הראשון מאשר ומסביר', icon:'🎨'},
      {id:'k2',  text:'מה האוכל שאני הכי שונא/ת — אפילו ריח שלו?',                   tip:'ניחוש ראשון, ואז סיפור', icon:'🤢'},
      {id:'k3',  text:'מה הסרט שאני יכול/ה לראות שוב ושוב לנצח?',                    tip:'ולמה לדעתך הוא כזה חשוב לי?', icon:'🎬'},
      {id:'k4',  text:'מה הדבר שמלחיץ אותי הכי הרבה — שלא תמיד אומר/ת בקול?',       tip:'השני מנחש בלי רמזים', icon:'😰'},
      {id:'k5',  text:'מה עושה אותי הכי שמח/ה — דבר קטן ויומיומי?',                  tip:'לא אירוע גדול — רגע קטן', icon:'☀️'},
      {id:'k6',  text:'מה אני עושה כשאני לחוץ/ה ולא אומר/ת לאף אחד?',               tip:'הרגל, תנועה, שגרה — מה מרגיע אותי?', icon:'😤'},
      {id:'k7',  text:'מה החלום המקצועי שלי שעוד לא הגשמתי?',                        tip:'לא תפקיד — חלום', icon:'🌠'},
      {id:'k8',  text:'מה אני הכי מתגעגע/ת אליו מהילדות?',                           tip:'אובייקט, תחושה, מקום, אדם', icon:'🧸'},
      {id:'k9',  text:'מה הדבר שגורם לי להרגיש הכי טוב אחרי ריב?',                  tip:'מה מרפא אותי — מילה, מחווה, זמן?', icon:'🕊️'},
      {id:'k10', text:'מה שעת השינה האידיאלית שלי — ומה קורה כשהיא מתפספסת?',        tip:'מה גורם לי לשינה טובה יותר?', icon:'🌙'},
      {id:'k11', text:'מה הדבר שהכי מרגיז אותי אצל אנשים — גם אצל עצמי לפעמים?',    tip:'תכונה, התנהגות, הרגל', icon:'😤'},
      {id:'k12', text:'מה הדבר שהכי חשוב לי ביחסים — מעל הכל?',                      tip:'כל אחד עונה — ראו אם זה תואם', icon:'💎'},
    ]
  },
  memory_photo: {
    label:'זיכרון בהפתעה', icon:'📷', color:'#a29bfe', grad:'linear-gradient(135deg,#a29bfe,#6c5ce7)',
    isPhotoMode: true,
    rounds: 6,   // 3 photos per person, alternating
    cards: []    // generated dynamically — no pre-written text
  },
  custom: {
    label:'ממני אליך', icon:'💌', color:'#ff6b81', grad:'linear-gradient(135deg,#ff6b81,#9b5de5)',
    cards:[]   // populated dynamically by players
  },
  roleplay: {
    label:'תפקידים', icon:'🎭', color:'#fd9644', grad:'linear-gradient(135deg,#fd9644,#e55039)',
    cards:[
      {id:'r1',  text:'אתם זרים שנפגשים לראשונה בבר. שוחחו 3 דקות כאילו לא מכירים.',  tip:'פרטים אמיתיים על עצמכם — רק כאילו לא נפגשתם', icon:'🍹'},
      {id:'r2',  text:'אחד מכם "עובד/ת חדש/ה במשרד". השני הקולגה הוותיק. שחקו את ההיכרות.', tip:'5 דקות — ואז ספרו מה גיליתם על השני', icon:'💼'},
      {id:'r3',  text:'שיחת טלפון: שני אנשים שהתאהבו ולא מתקשרים שבועות. מישהו מרים טלפון.', tip:'2 דקות — מה אומרים כשלא מדברים?', icon:'📞'},
      {id:'r4',  text:'אחד מכם חוזר הביתה ומוצא הפתעה שהשני הכין. שחקו את הסצנה.',   tip:'ללא תסריט — ספונטני לגמרי', icon:'🎁'},
      {id:'r5',  text:'שניכם כוכבי קולנוע שנפגשים בראיון משותף לראשונה.',            tip:'מה כוכב הסרטים שלכם היה אומר?', icon:'🎬'},
      {id:'r6',  text:'שניכם עוברים לעיר חדשה ולא מכירים איש. ספרו זה לזה למה עזבתם.', tip:'תרחיש דמיוני — אבל עם רגש אמיתי', icon:'🚂'},
      {id:'r7',  text:'ראיון עבודה: אחד המראיין, השני המועמד. אבל המראיין מתאהב תוך הראיון.', tip:'המשחק מתחיל רשמי — ומתרכך', icon:'😍'},
      {id:'r8',  text:'שניכם עוזבים ביחד לטיול ספונטני. 5 דקות לארוז — מה כל אחד לוקח?', tip:'חשיפת אופי מהירה: מה הכרחי לכל אחד?', icon:'🎒'},
    ]
  }
};

// ══════════════════════════════════════════
//  UTILS
// ══════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) return net.address;
    }
  }
  return 'localhost';
}

// ══════════════════════════════════════════
//  GAME STATE
// ══════════════════════════════════════════
const GAME = {
  players:   [null, null],
  cat:       null,
  deck:      [],
  cardIdx:   0,
  reactions: {},
  answers:   {},   // { 0: 'text', 1: 'text' } — resets each card
  history:   [],
  customCards: [[], []],
  savedMoments: [],
  stats: {
    points:          [0, 0],
    reactionCounts:  [{}, {}],
    cardsPlayed:     0,
    bothReacted:     0,
    categoriesPlayed: [],
    badges:          [[], []],
  }
};

function checkBadges(pi) {
  const s    = GAME.stats;
  const newB = [];
  const has  = (id) => s.badges[pi].includes(id);

  const check = (id, cond) => { if (!has(id) && cond) { s.badges[pi].push(id); newB.push(id); } };

  check('first',    s.cardsPlayed >= 1);
  check('romantic', (s.reactionCounts[pi]['❤️']||0) >= 10);
  check('fire',     (s.reactionCounts[pi]['🔥']||0) >= 10);
  check('laughing', (s.reactionCounts[pi]['😂']||0) >= 10);
  check('brave',    s.categoriesPlayed.includes('bold'));
  check('explorer', new Set(s.categoriesPlayed).size >= 4);
  check('champion', s.points[pi] >= 200);
  check('hundred',  s.cardsPlayed >= 50);
  check('synced',   s.bothReacted >= 10);
  check('intimate', GAME.cat === 'bold' && (s.reactionCounts[pi]['✨']||0) >= 5);

  return newB;
}

const FORFEITS = [
  'תנו חיבוק של 20 שניות, בשקט גמור 🤗',
  'ספרו 3 דברים שאתם אוהבים בשני — עכשיו 💛',
  'הכינו קפה או תה אחד לשני מחר בבוקר ☕',
  'שלחו הודעת אהבה עכשיו — כאילו אתם לא באותו חדר 💌',
  'עיסוי ידיים — 5 דקות, בלי לבדוק טלפון 🙌',
  'בחרו סרט לערב — הבחירה של השני 🎬',
  'תרקדו ריקוד אחד ביחד, לכל שיר שיוצא 🕺💃',
  'ספרו זכרון משותף אחד שאתם מאוד אוהבים 🌅',
  'הכינו ארוחת בוקר יחד מחר 🥞',
  'ציירו פורטרט אחד של השני — כמה שאפשר (לא חייב להיות יפה 😄) 🎨',
];

const NIGHTLY_QUESTIONS = [
  'מה הרגע הכי טוב שהיה לנו היום?',
  'מה משהו שרצית לספר לי היום ולא הספקת?',
  'מה עשה אותך שמח/ה היום — גם אם זה קטן?',
  'מה הדבר שהכי העריכת בי היום?',
  'מה חלמת בלילה האחרון?',
  'אם היום היה צבע — מה הוא ולמה?',
  'מה היית רוצה שנעשה ביחד מחר?',
  'מתי בדיוק היום חשבת עליי?',
  'מה הדבר שהכי הפריע לך היום? אני פה.',
  'מה ההרגשה שאתה/ת הולך/ת לישון איתה?',
  'מה הדבר שאתה/ת הכי מחכה לו השבוע?',
  'ספר/י לי דבר אחד שעשה לך טוב היום.',
  'מה רגע שהרגשת גאווה היום — בעצמך או במישהו?',
  'מה תודה אחת שיש לך מהיום?',
  'אם יכולת לשנות דבר אחד מהיום — מה זה היה?',
];

let lastNightlyDate = '';
let lastNightlyQ = '';

function warmthLabel(total) {
  if (total === 0)   return { temp: '0°',  label: 'המשחק רק מתחיל… 🌱' };
  if (total < 30)    return { temp: `${total}°`, label: 'הלב מתעורר 💛' };
  if (total < 70)    return { temp: `${total}°`, label: 'נהיה חמים פה 🌡️' };
  if (total < 130)   return { temp: `${total}°`, label: 'חמים מאוד! 🔥' };
  if (total < 200)   return { temp: `${total}°`, label: 'ממש בוער 🔥🔥' };
  return               { temp: `${total}°`, label: 'אש! אתם מדהימים 💗' };
}

function fullStats() {
  const [p0, p1] = GAME.stats.points;
  const total    = p0 + p1;
  const warmth   = warmthLabel(total);

  // Who has fewer points → gets a forfeit task
  let behindIdx  = -1; // -1 = tied
  if (p0 < p1)        behindIdx = 0;
  else if (p1 < p0)   behindIdx = 1;

  const forfeit = behindIdx >= 0
    ? FORFEITS[Math.floor(Math.random() * FORFEITS.length)]
    : null;

  return {
    points:          GAME.stats.points,
    reactionCounts:  GAME.stats.reactionCounts,
    cardsPlayed:     GAME.stats.cardsPlayed,
    bothReacted:     GAME.stats.bothReacted,
    categoriesPlayed: [...new Set(GAME.stats.categoriesPlayed)],
    badges:          GAME.stats.badges,
    warmth,
    behindIdx,
    behindName:      behindIdx >= 0 ? PLAYERS[behindIdx] : null,
    forfeit,
    savedMoments:    GAME.savedMoments,
  };
}

function gameState() {
  const cat  = GAME.cat ? CATS[GAME.cat] : null;
  const card = GAME.deck[GAME.cardIdx] || null;
  return {
    players:  PLAYERS,
    cat:      GAME.cat,
    catMeta:  cat ? { label:cat.label, icon:cat.icon, color:cat.color, grad:cat.grad } : null,
    card,
    cardIdx:  GAME.cardIdx,
    total:    GAME.deck.length,
    reactions:GAME.reactions,
    answers:  GAME.answers,
    history:  GAME.history,
    stats:    fullStats(),
    online:   GAME.players.map(s => !!s),
  };
}

function broadcast(event, data) {
  GAME.players.forEach(s => { if (s) s.emit(event, data); });
}

// ══════════════════════════════════════════
//  SOCKET EVENTS
// ══════════════════════════════════════════
io.on('connection', (socket) => {

  socket.on('join', ({ playerIdx }) => {
    const prev = GAME.players[playerIdx];
    if (prev && prev.id !== socket.id) prev.emit('replaced', {});
    GAME.players[playerIdx]   = socket;
    socket.data.playerIdx     = playerIdx;
    socket.emit('joined', { playerIdx, state: gameState() });
    socket.emit('custom_cards_update', { customCards: GAME.customCards });
    socket.emit('moments_update', { moments: GAME.savedMoments });
    broadcast('online_update', { online: GAME.players.map(s => !!s) });
  });

  socket.on('select_cat', ({ cat }) => {
    if (!CATS[cat]) return;
    GAME.cat       = cat;
    GAME.reactions = {};
    if (!GAME.stats.categoriesPlayed.includes(cat)) GAME.stats.categoriesPlayed.push(cat);

    if (cat === 'custom') {
      // Combine both players' custom cards
      const allCustom = [...GAME.customCards[0], ...GAME.customCards[1]];
      if (allCustom.length === 0) {
        socket.emit('toast', 'אין עדיין כרטיסים אישיים — כתבו אחד! 💌');
        return;
      }
      GAME.deck = shuffle(allCustom);
      GAME.cardIdx = 0;
      broadcast('game_state', gameState());
      return;
    }

    if (CATS[cat].isPhotoMode) {
      // Photo mode: generate alternating rounds
      const rounds = CATS[cat].rounds || 6;
      GAME.deck = Array.from({ length: rounds }, (_, i) => ({
        id: `photo_${i}`,
        isPhotoCard: true,
        uploaderIdx: i % 2,   // alternates: Ron, Hadas, Ron...
        photoData: null,
        round: i + 1,
        total: rounds,
      }));
      GAME.cardIdx = 0;
      broadcast('photo_mode_start', { state: gameState() });
    } else {
      GAME.deck    = shuffle(CATS[cat].cards);
      GAME.cardIdx = 0;
      broadcast('game_state', gameState());
    }
  });

  // Photo upload (for זיכרון בהפתעה category)
  socket.on('upload_photo', ({ photoData }) => {
    const pi = socket.data.playerIdx;
    const card = GAME.deck[GAME.cardIdx];
    if (!card || !card.isPhotoCard) return;
    card.photoData = photoData;
    broadcast('photo_revealed', {
      photoData,
      uploaderIdx:   pi,
      uploaderName:  PLAYERS[pi],
      describerIdx:  1 - pi,
      describerName: PLAYERS[1 - pi],
      round:         card.round,
      total:         card.total,
    });
  });

  socket.on('next_card', () => {
    const card = GAME.deck[GAME.cardIdx];
    const r0   = GAME.reactions[0], r1 = GAME.reactions[1];
    const a0   = GAME.answers[0],   a1 = GAME.answers[1];
    if (card) {
      if (r0 || r1) {
        GAME.history.push({ cat:GAME.cat, text:card.text, reactions:{...GAME.reactions}, ts:Date.now() });
      }
      // Auto-save to book if any written answers exist
      if (a0 || a1) {
        GAME.savedMoments.push({
          text:      card.text,
          cat:       GAME.cat,
          reactions: { ...GAME.reactions },
          answers:   { ...GAME.answers },
          ts:        Date.now(),
        });
        broadcast('moments_update', { moments: GAME.savedMoments });
      }
      if (r0 && r1) GAME.stats.bothReacted++;
    }
    GAME.stats.cardsPlayed++;
    if (GAME.cardIdx >= GAME.deck.length - 1) {
      broadcast('game_ended', { history: GAME.history, stats: fullStats() });
      return;
    }
    GAME.cardIdx++;
    GAME.reactions = {};
    GAME.answers   = {};
    broadcast('game_state', gameState());
  });

  socket.on('submit_answer', ({ answer }) => {
    const pi = socket.data.playerIdx;
    if (pi === undefined || !answer || !answer.trim()) return;
    GAME.answers[pi] = answer.trim();
    broadcast('answers_update', { answers: GAME.answers });
  });

  socket.on('react', ({ emoji, playerIdx }) => {
    GAME.reactions[playerIdx] = emoji;
    // Points
    const pts = POINTS[emoji] || 1;
    GAME.stats.points[playerIdx] += pts;
    // Reaction count
    GAME.stats.reactionCounts[playerIdx][emoji] = (GAME.stats.reactionCounts[playerIdx][emoji]||0) + 1;
    // Check badges
    const newBadges = checkBadges(playerIdx);
    broadcast('reactions_update', { reactions: GAME.reactions, stats: fullStats(), newBadges: { playerIdx, badges: newBadges } });
  });

  socket.on('back_to_cats', () => {
    GAME.cat=null; GAME.deck=[]; GAME.cardIdx=0; GAME.reactions={}; GAME.answers={};
    broadcast('show_cats', { stats: fullStats() });
  });

  socket.on('random_card', () => {
    // Pick random regular category (exclude photo mode)
    const regularCats = Object.entries(CATS).filter(([,v]) => !v.isPhotoMode);
    const [catKey, cat] = regularCats[Math.floor(Math.random() * regularCats.length)];
    GAME.cat       = catKey;
    GAME.reactions = {};
    if (!GAME.stats.categoriesPlayed.includes(catKey)) GAME.stats.categoriesPlayed.push(catKey);
    // Pick random card from that category
    const card = cat.cards[Math.floor(Math.random() * cat.cards.length)];
    GAME.deck    = [card];
    GAME.cardIdx = 0;
    broadcast('game_state', { ...gameState(), isRandom: true });
  });

  socket.on('add_custom_card', ({ text }) => {
    const pi = socket.data.playerIdx;
    if (pi === undefined || !text || text.trim().length === 0) return;
    const card = { id: `custom_${Date.now()}`, text: text.trim(), from: pi, fromName: PLAYERS[pi], icon: '💌' };
    GAME.customCards[pi].push(card);
    broadcast('custom_cards_update', { customCards: GAME.customCards });
  });

  socket.on('get_nightly', () => {
    const today = new Date().toISOString().slice(0, 10);
    if (lastNightlyDate !== today) {
      lastNightlyQ = NIGHTLY_QUESTIONS[Math.floor(Math.random() * NIGHTLY_QUESTIONS.length)];
      lastNightlyDate = today;
    }
    broadcast('nightly_question', { question: lastNightlyQ, date: today });
  });

  socket.on('save_moment', ({ cardText, catKey, reactions, answers }) => {
    GAME.savedMoments.push({
      text: cardText,
      cat: catKey,
      reactions,
      answers: answers || { ...GAME.answers },
      ts: Date.now(),
    });
    broadcast('moments_update', { moments: GAME.savedMoments });
  });

  socket.on('get_moments', () => {
    socket.emit('moments_update', { moments: GAME.savedMoments });
  });

  socket.on('reset_book', () => {
    GAME.savedMoments = [];
    broadcast('moments_update', { moments: [] });
    broadcast('toast', 'ספר הזוג אופס 📖');
  });

  socket.on('reset_game', () => {
    GAME.stats = {
      points:           [0, 0],
      reactionCounts:   [{}, {}],
      cardsPlayed:      0,
      bothReacted:      0,
      categoriesPlayed: [],
      badges:           [[], []],
    };
    GAME.history   = [];
    GAME.customCards = [[], []];
    GAME.cat       = null;
    GAME.deck      = [];
    GAME.cardIdx   = 0;
    GAME.reactions = {};
    broadcast('stats_reset', { stats: fullStats() });
  });

  socket.on('disconnect', () => {
    const pi = socket.data.playerIdx;
    if (pi === undefined) return;
    if (GAME.players[pi] && GAME.players[pi].id === socket.id) {
      GAME.players[pi] = null;
      broadcast('online_update', { online: GAME.players.map(s => !!s) });
    }
  });
});

// ══════════════════════════════════════════
//  START
// ══════════════════════════════════════════
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIP();
  console.log(`\n💑  אנחנו — רון והדס\n📱  http://${ip}:${PORT}\n`);
});
