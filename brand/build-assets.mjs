// Generates every derived Unc asset from character/unc-master.svg.
// Run:  node brand/build-assets.mjs   (from the repo root)
// Edit the master, run this, commit. Never hand-edit the generated files.

import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const brand = join(root, "brand");
const master = readFileSync(join(brand, "character", "unc-master.svg"), "utf8");

// ---------- tiny SVG group extractor ----------
function group(xml, id) {
  const idx = xml.indexOf(`id="${id}"`);
  if (idx < 0) throw new Error(`group ${id} not found`);
  const start = xml.lastIndexOf("<g", idx);
  let depth = 0;
  const re = /<g\b|<\/g>/g;
  re.lastIndex = start;
  let m;
  while ((m = re.exec(xml))) {
    depth += m[0] === "</g>" ? -1 : 1;
    if (depth === 0) {
      const end = m.index + 4;
      const outer = xml.slice(start, end);
      const openEnd = outer.indexOf(">") + 1;
      return { outer, inner: outer.slice(openEnd, outer.length - 4), open: outer.slice(0, openEnd) };
    }
  }
  throw new Error(`group ${id} unbalanced`);
}
function replaceGroup(xml, id, newInner) {
  const g = group(xml, id);
  return xml.replace(g.outer, g.open + newInner + "</g>");
}

const DEFS = master.match(/<defs>[\s\S]*?<\/defs>/)[0];
const P = {
  legs: group(master, "legs").outer,
  shoes: group(master, "shoes").outer,
  armLeft: group(master, "arm-left").outer,
  armRight: group(master, "arm-right").outer,
  torso: group(master, "torso").outer,
  head: group(master, "head").outer,
};

// ---------- variant parts ----------
const INK = "#1E2430";
const sleeveRight = `<rect x="214" y="198" width="38" height="92" rx="19" fill="#BFD7EA" stroke="${INK}" stroke-width="2.5"/><rect x="214" y="272" width="38" height="14" rx="4" fill="#E4EEF6" stroke="${INK}" stroke-width="2"/>`;
const handOpen = `<ellipse cx="233" cy="300" rx="15" ry="13" fill="url(#skin)" stroke="${INK}" stroke-width="2.5"/>
<rect x="218" y="300" width="7" height="24" rx="3.5" fill="#E8C4A0" stroke="${INK}" stroke-width="2"/>
<rect x="226" y="304" width="7" height="26" rx="3.5" fill="#E8C4A0" stroke="${INK}" stroke-width="2"/>
<rect x="234" y="304" width="7" height="26" rx="3.5" fill="#E8C4A0" stroke="${INK}" stroke-width="2"/>
<rect x="242" y="300" width="7" height="22" rx="3.5" fill="#E8C4A0" stroke="${INK}" stroke-width="2"/>
<rect x="246" y="286" width="7" height="18" rx="3.5" fill="#E8C4A0" stroke="${INK}" stroke-width="2" transform="rotate(-40 249 295)"/>`;
const armWave = `<g transform="rotate(-150 233 210)">${sleeveRight}${handOpen}</g>`;
const armThumbs = `<g transform="rotate(-100 233 210)"><rect x="214" y="198" width="38" height="82" rx="19" fill="#BFD7EA" stroke="${INK}" stroke-width="2.5"/><rect x="214" y="262" width="38" height="14" rx="4" fill="#E4EEF6" stroke="${INK}" stroke-width="2"/></g>
<ellipse cx="302" cy="214" rx="17" ry="15" fill="url(#skin)" stroke="${INK}" stroke-width="2.5"/>
<rect x="296" y="178" width="13" height="30" rx="6.5" fill="#E8C4A0" stroke="${INK}" stroke-width="2.5"/>
<path d="M290 212 L314 212 M290 220 L314 220" stroke="${INK}" stroke-width="1.8" stroke-linecap="round"/>`;
const armPhone = `<g transform="rotate(-120 233 210)"><rect x="214" y="198" width="38" height="78" rx="19" fill="#BFD7EA" stroke="${INK}" stroke-width="2.5"/></g>
<rect x="280" y="148" width="36" height="62" rx="6" fill="${INK}"/><rect x="284" y="154" width="28" height="48" rx="3" fill="#7FA7CF"/>
<ellipse cx="292" cy="214" rx="15" ry="13" fill="url(#skin)" stroke="${INK}" stroke-width="2.5"/>`;
const armPoint = `<g transform="rotate(-90 233 210)"><rect x="214" y="198" width="38" height="86" rx="19" fill="#BFD7EA" stroke="${INK}" stroke-width="2.5"/><rect x="214" y="266" width="38" height="14" rx="4" fill="#E4EEF6" stroke="${INK}" stroke-width="2"/></g>
<ellipse cx="308" cy="212" rx="15" ry="13" fill="url(#skin)" stroke="${INK}" stroke-width="2.5"/>
<rect x="316" y="204" width="30" height="11" rx="5.5" fill="#E8C4A0" stroke="${INK}" stroke-width="2.5"/>`;
const checkArms = `<g transform="rotate(22 87 205)"><rect x="68" y="198" width="38" height="78" rx="19" fill="#BFD7EA" stroke="${INK}" stroke-width="2.5"/><rect x="68" y="260" width="38" height="14" rx="4" fill="#E4EEF6" stroke="${INK}" stroke-width="2"/></g>
<g transform="rotate(-22 233 205)"><rect x="214" y="198" width="38" height="78" rx="19" fill="#BFD7EA" stroke="${INK}" stroke-width="2.5"/><rect x="214" y="260" width="38" height="14" rx="4" fill="#E4EEF6" stroke="${INK}" stroke-width="2"/></g>`;
const check = (amount = "$500.00") => `<g transform="translate(30 270)">
<rect x="0" y="0" width="260" height="96" rx="6" fill="#FFFFFF" stroke="${INK}" stroke-width="3"/>
<rect x="6" y="6" width="248" height="84" rx="4" fill="none" stroke="#DACFB6" stroke-width="1.5"/>
<text x="40" y="28" font-family="Fredoka, Arial, sans-serif" font-size="12" font-weight="700" fill="#2F5D8A">UNC FUND LLC</text>
<text x="220" y="28" text-anchor="end" font-family="JetBrains Mono, Consolas, monospace" font-size="10" fill="#4A5261">No. 0001</text>
<text x="40" y="50" font-family="Source Sans 3, Arial, sans-serif" font-size="9" fill="#4A5261">PAY TO THE ORDER OF</text>
<line x1="136" y1="52" x2="220" y2="52" stroke="${INK}" stroke-width="1.5"/>
<text x="40" y="78" font-family="JetBrains Mono, Consolas, monospace" font-size="24" font-weight="600" fill="#2E8B57">${amount}</text>
<text x="220" y="84" text-anchor="end" font-family="Fredoka, Arial, sans-serif" font-size="13" font-weight="600" fill="${INK}" font-style="italic">Unc</text>
</g>
<ellipse cx="52" cy="282" rx="15" ry="13" fill="url(#skin)" stroke="${INK}" stroke-width="2.5"/>
<ellipse cx="268" cy="282" rx="15" ry="13" fill="url(#skin)" stroke="${INK}" stroke-width="2.5"/>
<path d="M44 286 L44 292 M52 289 L52 295 M60 289 L60 295 M260 286 L260 292 M268 289 L268 295 M276 289 L276 295" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>`;

const browsFlat = `<path d="M120 124 Q134 128 152 126 Q138 132 124 132 Z" fill="${INK}"/><path d="M200 124 Q186 128 168 126 Q182 132 196 132 Z" fill="${INK}"/>`;
const eyesSquint = `<path d="M128 140 Q138 136 148 140 M172 140 Q182 136 192 140" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`;
const mouthGrin = `<path d="M136 176 Q160 198 184 176" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>`;
const mouthFlat = `<path d="M146 180 Q160 176 174 180" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>`;

function head({ brows, eyes, mouth } = {}) {
  let h = P.head;
  if (brows) h = replaceGroup(h, "brows", brows);
  if (eyes) h = replaceGroup(h, "eyes", eyes);
  if (mouth) h = replaceGroup(h, "mouth", mouth);
  return h;
}
const bubble = (text, x = 196, y = 14, w = 118) => `<g class="bubble"><rect x="${x}" y="${y}" width="${w}" height="46" rx="12" fill="#FFFFFF" stroke="${INK}" stroke-width="2"/><path d="M${x + 16} ${y + 46} L${x + 10} ${y + 62} L${x + 34} ${y + 46} Z" fill="#FFFFFF" stroke="${INK}" stroke-width="2"/><text x="${x + w / 2}" y="${y + 28}" font-family="Fredoka, Arial, sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="${INK}">${text}</text></g>`;

// ---------- poses ----------
const pose = {
  idle: () => P.armLeft + P.armRight + P.legs + P.shoes + P.torso + head(),
  wave: () => P.armLeft + armWave + P.legs + P.shoes + P.torso + head(),
  approve: () => P.armLeft + armThumbs + P.legs + P.shoes + P.torso + head({ mouth: mouthGrin }),
  check: (amount) => P.legs + P.shoes + P.torso + head({ mouth: mouthGrin }) + checkArms + check(amount),
  think: () => P.armLeft + armPhone + P.legs + P.shoes + P.torso + head({ brows: browsFlat, eyes: eyesSquint, mouth: mouthFlat }),
  point: () => P.armLeft + armPoint + P.legs + P.shoes + P.torso + head({ mouth: mouthFlat }),
};

const svg = (w, h, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${title}">\n<title>${title}</title>\n${DEFS}\n${body}\n</svg>\n`;
const label = (x, y, t) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Fredoka, Arial, sans-serif" font-size="16" font-weight="600" fill="#2F5D8A">${t}</text>`;
const wordmark = (x, y, size, light = "#1E2430") =>
  `<text x="${x}" y="${y}" font-family="Fredoka, 'Source Sans 3', Arial, sans-serif" font-size="${size}" font-weight="700" letter-spacing="${-size / 30}" fill="#2F5D8A">UNC<tspan font-weight="500" fill="${light}">.FUND</tspan></text>`;

const out = {};

// character sheet
out["character/unc-poses.svg"] = svg(1920, 480,
  `<rect width="1920" height="480" fill="#F7F3EA"/>` +
  [["idle", "01 IDLE"], ["wave", "02 WAVE"], ["approve", "03 APPROVE"], ["check", "04 THE CHECK"], ["think", "05 THINK"], ["point", "06 UNC WANTS YOU"]]
    .map(([k, t], i) => `<g transform="translate(${i * 320} 20)">${pose[k]()}${k === "think" ? bubble("what is a zk rollup", 182, 24, 126) : ""}${label(160, 430, t)}</g>`)
    .join("\n"),
  "Unc character sheet: idle, wave, approve, the check, think, point. Generated from unc-master.svg.");

// avatar
out["logo/unc-avatar.svg"] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" role="img" aria-label="Unc avatar">
<title>Unc's face in a circle. Social avatar. Generated from unc-master.svg.</title>
${DEFS}
<defs><clipPath id="clip"><circle cx="256" cy="256" r="256"/></clipPath></defs>
<circle cx="256" cy="256" r="256" fill="#2F5D8A"/>
<circle cx="256" cy="256" r="236" fill="#F7F3EA"/>
<g clip-path="url(#clip)"><g transform="translate(-144 -30) scale(2.5)">${P.torso}${head()}</g></g>
<circle cx="256" cy="256" r="246" fill="none" stroke="#2F5D8A" stroke-width="20"/>
</svg>
`;

// X banner
out["social/x-banner.svg"] = svg(1500, 500,
  `<rect width="1500" height="500" fill="#F7F3EA"/>
<rect x="0" y="446" width="1500" height="54" fill="#2F5D8A"/>
<line x1="0" y1="440" x2="1500" y2="440" stroke="#7FA7CF" stroke-width="3" stroke-dasharray="10 8"/>
${wordmark(100, 212, 150)}
<text x="106" y="286" font-family="Fredoka, Arial, sans-serif" font-size="46" font-weight="600" fill="#1E2430">Small checks. Big uncle energy.</text>
<text x="106" y="338" font-family="'Source Sans 3', Arial, sans-serif" font-size="27" fill="#4A5261">First checks into blockchain, AI, software and robotics. $500 to $9,999. Decision in a week.</text>
<text x="106" y="386" font-family="'JetBrains Mono', Consolas, monospace" font-size="22" fill="#2F5D8A">unc.fund  ·  contactuncfund@gmail.com</text>
<g transform="translate(1090 52)">${pose.wave()}</g>`,
  "X header, 1500 by 500. Unc waving, wordmark, tagline.");

// OG image
out["social/og-image.svg"] = svg(1200, 630,
  `<rect width="1200" height="630" fill="#F7F3EA"/>
<rect x="0" y="574" width="1200" height="56" fill="#2F5D8A"/>
<line x1="0" y1="568" x2="1200" y2="568" stroke="#7FA7CF" stroke-width="3" stroke-dasharray="10 8"/>
${wordmark(80, 226, 130)}
<text x="84" y="298" font-family="Fredoka, Arial, sans-serif" font-size="42" font-weight="600" fill="#1E2430">Small checks. Big uncle energy.</text>
<text x="84" y="350" font-family="'Source Sans 3', Arial, sans-serif" font-size="25" fill="#4A5261">Frontier-tech first checks. Blockchain, AI, software, robotics.</text>
<text x="84" y="388" font-family="'Source Sans 3', Arial, sans-serif" font-size="25" fill="#4A5261">$500 to $9,999. Decision in a week. Bring a deck.</text>
<text x="84" y="520" font-family="Fredoka, Arial, sans-serif" font-size="30" font-weight="600" fill="#2F5D8A">Proud of you. — Unc</text>
<g transform="translate(780 100) scale(1.15)">${pose.approve()}</g>`,
  "Open Graph image, 1200 by 630. Unc giving a thumbs up.");

// ---------- post templates ----------
// Deal announcement, 1080 x 1080 (Instagram / X). Swap the company name, amount and logo box.
out["templates/deal-announcement.svg"] = svg(1080, 1080,
  `<rect width="1080" height="1080" fill="#F7F3EA"/>
<rect x="0" y="1010" width="1080" height="70" fill="#2F5D8A"/>
${wordmark(70, 130, 84)}
<text x="70" y="250" font-family="Fredoka, Arial, sans-serif" font-size="30" font-weight="600" letter-spacing="4" fill="#2F5D8A">BACKED BY UNC</text>
<rect x="70" y="290" width="520" height="220" rx="16" fill="#FFFDF8" stroke="#DACFB6" stroke-width="3" stroke-dasharray="10 8"/>
<text x="330" y="395" text-anchor="middle" font-family="'Source Sans 3', Arial, sans-serif" font-size="26" fill="#4A5261">[ company logo ]</text>
<text x="330" y="435" text-anchor="middle" font-family="Fredoka, Arial, sans-serif" font-size="44" font-weight="700" fill="#1E2430">Company Name</text>
<text x="70" y="600" font-family="'Source Sans 3', Arial, sans-serif" font-size="34" fill="#1E2430">One line about what they build, in Unc's words.</text>
<text x="70" y="720" font-family="'JetBrains Mono', Consolas, monospace" font-size="96" font-weight="600" fill="#2E8B57">$2,500</text>
<text x="70" y="770" font-family="'Source Sans 3', Arial, sans-serif" font-size="26" fill="#4A5261">Check No. 0001 · Blockchain · Pre-pre-seed</text>
<text x="70" y="930" font-family="Fredoka, Arial, sans-serif" font-size="38" font-weight="600" fill="#2F5D8A">Proud of you. — Unc</text>
<g transform="translate(620 540) scale(1.25)">${pose.check("$2,500")}</g>`,
  "Deal announcement template, 1080 by 1080.");

// Unc's take quote card, 1200 x 675 (X)
out["templates/quote-card.svg"] = svg(1200, 675,
  `<rect width="1200" height="675" fill="#1E2430"/>
<rect x="0" y="0" width="14" height="675" fill="#2F5D8A"/>
<text x="80" y="110" font-family="Fredoka, Arial, sans-serif" font-size="26" font-weight="600" letter-spacing="5" fill="#7FA7CF">UNC'S TAKE</text>
<text font-family="Fredoka, Arial, sans-serif" font-size="52" font-weight="600" fill="#EFE9DC">
<tspan x="80" y="210">“Replace this with one opinion</tspan>
<tspan x="80" y="278">about frontier tech that Unc</tspan>
<tspan x="80" y="346">would actually defend.”</tspan>
</text>
<text x="80" y="440" font-family="'Source Sans 3', Arial, sans-serif" font-size="26" fill="#B9B2A3">Context or a second sentence goes here. Keep it under two lines.</text>
${wordmark(80, 600, 56, "#EFE9DC")}
<g transform="translate(880 250) scale(1.0)">${pose.idle()}</g>`,
  "Unc's take quote card, 1200 by 675.");

// Meme template, 1080 x 1080: Unc squinting at a phone, caption top and bottom.
out["templates/meme-template.svg"] = svg(1080, 1080,
  `<rect width="1080" height="1080" fill="#F7F3EA"/>
<text x="540" y="140" text-anchor="middle" font-family="Fredoka, Arial, sans-serif" font-size="64" font-weight="700" fill="#1E2430">TOP CAPTION GOES HERE</text>
<g transform="translate(300 180) scale(1.9)">${pose.think()}${bubble("your jargon here", 182, 24, 126)}</g>
<text x="540" y="1000" text-anchor="middle" font-family="Fredoka, Arial, sans-serif" font-size="64" font-weight="700" fill="#1E2430">BOTTOM CAPTION GOES HERE</text>
<text x="1040" y="1050" text-anchor="end" font-family="'JetBrains Mono', Consolas, monospace" font-size="22" fill="#4A5261">@uncfund</text>`,
  "Meme template, 1080 by 1080. Unc squinting at a phone.");

// ---------- write ----------
for (const [rel, content] of Object.entries(out)) {
  const p = join(brand, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, content);
  console.log("wrote", rel);
}

// hero on the plan page
const planPath = join(root, "docs", "launch-plan.html");
if (existsSync(planPath)) {
  let html = readFileSync(planPath, "utf8");
  const start = html.indexOf('<svg class="unc-figure"');
  const end = html.indexOf("</svg>", start) + 6;
  if (start >= 0) {
    let body = pose.idle() + bubble("Proud of you.");
    body = body.replace('<g id="brows">', '<g id="brows" class="brow">');
    const heroSvg = `<svg class="unc-figure" viewBox="0 0 320 400" role="img" aria-label="Unc: a friendly uncle in a half-zipped puffer vest with an UNC label">${DEFS}${body}</svg>`;
    html = html.slice(0, start) + heroSvg + html.slice(end);
    writeFileSync(planPath, html);
    console.log("updated docs/launch-plan.html hero");
  }
}

// copies for the site
const pub = join(root, "site", "public", "brand");
mkdirSync(pub, { recursive: true });
for (const f of ["character/unc-master.svg", "character/unc-poses.svg", "logo/unc-avatar.svg", "logo/unc-vest-mark.svg", "logo/unc-wordmark.svg", "logo/unc-wordmark-reversed.svg", "logo/unc-lockup.svg", "social/x-banner.svg", "social/og-image.svg", "templates/deal-announcement.svg", "templates/quote-card.svg", "templates/meme-template.svg"]) {
  copyFileSync(join(brand, f), join(pub, f.split("/").pop()));
}
copyFileSync(join(brand, "logo", "unc-vest-mark.svg"), join(root, "site", "app", "icon.svg"));
console.log("copied to site/public/brand and site/app/icon.svg");
