// Rasterizes the brand SVGs to PNG with the real brand fonts.
// One-time setup (any folder, e.g. a scratch dir):
//   npm install sharp @fontsource/fredoka @fontsource/source-sans-3 @fontsource/jetbrains-mono
// Then, from the repo root:
//   node brand/rasterize.mjs <path-to-that-folder>
// Output goes to brand/png and site/public/brand/png.

import { createRequire } from "node:module";
import { existsSync, mkdirSync, copyFileSync, readdirSync, writeFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const brand = join(root, "brand");
const toolDir = process.argv[2];
if (!toolDir || !existsSync(join(toolDir, "node_modules", "sharp"))) {
  console.error("Pass the folder where sharp and the @fontsource packages are installed.");
  process.exit(1);
}

// fontconfig setup so librsvg finds Fredoka, Source Sans 3 and JetBrains Mono.
const fontsDir = join(toolDir, "fonts");
mkdirSync(fontsDir, { recursive: true });
const want = [
  ["@fontsource/fredoka", /^fredoka-latin-(500|600|700)-normal\.woff$/],
  ["@fontsource/source-sans-3", /^source-sans-3-latin-(400|600)-(normal|italic)\.woff$/],
  ["@fontsource/jetbrains-mono", /^jetbrains-mono-latin-(400|600)-normal\.woff$/],
];
for (const [pkg, re] of want) {
  const files = join(toolDir, "node_modules", pkg, "files");
  for (const f of readdirSync(files)) if (re.test(f)) copyFileSync(join(files, f), join(fontsDir, f));
}
const fwd = (p) => p.replace(/\\/g, "/");
const conf = join(toolDir, "fonts.conf");
writeFileSync(
  conf,
  `<?xml version="1.0"?>\n<!DOCTYPE fontconfig SYSTEM "fonts.dtd">\n<fontconfig>\n  <dir>${fwd(fontsDir)}</dir>\n  <dir>C:/Windows/Fonts</dir>\n  <cachedir>${fwd(join(toolDir, "cache"))}</cachedir>\n</fontconfig>\n`
);
process.env.FONTCONFIG_FILE = conf;
process.env.FONTCONFIG_PATH = toolDir;

const require = createRequire(join(toolDir, "package.json"));
const sharp = require("sharp");

const out = join(brand, "png");
mkdirSync(out, { recursive: true });
const jobs = [
  ["logo/unc-avatar.svg", "unc-avatar-800.png", { density: 300 }, [800, 800]],
  ["logo/unc-avatar.svg", "unc-avatar-400.png", { density: 300 }, [400, 400]],
  ["logo/unc-vest-mark.svg", "unc-vest-mark-512.png", { density: 600 }, [512, 512]],
  ["logo/unc-wordmark.svg", "unc-wordmark-1440.png", { density: 200 }, [1440, null]],
  ["logo/unc-lockup.svg", "unc-lockup-1760.png", { density: 200 }, [1760, null]],
  ["social/x-banner.svg", "x-banner-1500x500.png", { density: 200 }, [1500, 500]],
  ["social/og-image.svg", "og-image-1200x630.png", { density: 200 }, [1200, 630]],
  ["character/unc-poses.svg", "unc-poses.png", { density: 150 }, null],
  ["character/unc-master.svg", "unc-master-960.png", { density: 300 }, [960, null]],
  ["templates/deal-announcement.svg", "deal-announcement-template.png", { density: 150 }, null],
  ["templates/quote-card.svg", "quote-card-template.png", { density: 150 }, null],
  ["templates/meme-template.svg", "meme-template.png", { density: 150 }, null],
];
for (const [src, dst, opts, size] of jobs) {
  let img = sharp(join(brand, src), opts);
  if (size) img = img.resize(size[0], size[1]);
  await img.png().toFile(join(out, dst));
  console.log("wrote png/" + dst, statSync(join(out, dst)).size, "bytes");
}
const pub = join(root, "site", "public", "brand", "png");
mkdirSync(pub, { recursive: true });
for (const f of readdirSync(out)) copyFileSync(join(out, f), join(pub, f));
console.log("copied to site/public/brand/png");
