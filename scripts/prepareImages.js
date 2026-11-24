/**
 * Prepares selected photos from the local image stock (Bildvorrat/, not in git)
 * for the website: auto-rotate by EXIF, downscale, re-encode as JPEG and strip
 * all metadata (EXIF/GPS). Selection and target names: scripts/bildauswahl.json
 *
 * Usage: node scripts/prepareImages.js [--force]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(
  fs.readFileSync(path.join(root, "scripts/bildauswahl.json"), "utf8"),
);
const force = process.argv.includes("--force");

let done = 0;
let skipped = 0;
const errors = [];

for (const img of config.images) {
  const src = path.join(root, config.sourceDir, img.src);
  const out = path.join(root, config.targetDir, img.out);

  if (!fs.existsSync(src)) {
    errors.push(`missing source: ${img.src}`);
    continue;
  }
  if (!force && fs.existsSync(out)) {
    skipped++;
    continue;
  }

  const maxEdge = config.maxEdge[img.size ?? "default"];
  fs.mkdirSync(path.dirname(out), { recursive: true });

  // sharp drops all metadata unless .withMetadata()/.keepMetadata() is called
  const info = await sharp(src, { failOn: "none" })
    .rotate()
    .resize(maxEdge, maxEdge, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: config.quality, mozjpeg: true })
    .toFile(out);

  done++;
  console.log(
    `${img.out}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`,
  );
}

console.log(`\n${done} processed, ${skipped} skipped (exist, use --force)`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
