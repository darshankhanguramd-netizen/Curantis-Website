/**
 * One-off crop for stock hero: trim borders (~1cm at ~1000px width ≈ 38–40px)
 * and extra left trim for vertical ID / watermark bar.
 */
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

import { existsSync } from 'fs';

const preferred = join(projectRoot, 'assets', 'hero-source.png');
const sibling = join(
  projectRoot,
  '..',
  'c-Users-Ross-cursor-projects-PF-Curantis-Specialty-Care',
  'assets',
  'c__Users_Ross_AppData_Roaming_Cursor_User_workspaceStorage_d59f23a62db3753065faabba77e0cbda_images_image-778cdce0-50ef-49db-810f-b3652cb31ae5.png'
);

const src = existsSync(preferred) ? preferred : sibling;
if (!existsSync(src)) {
  console.error('Hero source not found. Add assets/hero-source.png or sibling assets path.');
  process.exit(1);
}
const outDir = join(projectRoot, 'public', 'images', 'hero');
const outPath = join(outDir, 'home-hero.jpg');

mkdirSync(outDir, { recursive: true });

const meta = await sharp(src).metadata();
const W = meta.width ?? 0;
const H = meta.height ?? 0;

// ~1 cm in pixels for this resolution (image is 1000×667): use 40px minimum each side
const margin = Math.max(40, Math.round(Math.min(W, H) * 0.045));
const left = Math.min(Math.round(W * 0.11), margin + Math.round(W * 0.06)); // bar + ≥1 cm
const right = margin;
const top = margin;
const bottom = margin;

const w = W - left - right;
const h = H - top - bottom;

if (w < 100 || h < 100) {
  console.error('Crop too aggressive', { W, H, left, right, top, bottom });
  process.exit(1);
}

await sharp(src)
  .extract({ left, top, width: w, height: h })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(outPath);

console.log('Wrote', outPath, { from: `${W}×${H}`, crop: { left, top, width: w, height: h } });
