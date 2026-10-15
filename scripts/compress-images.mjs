// Shrinks oversized project images in place so they stay small enough for GitHub.
// Only touches images wider than MAX_WIDTH or larger than MAX_BYTES, and only
// keeps the result if it saves at least 10%, so re-running it won't keep degrading files.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { walkDirs, listImages } from "./image-utils.mjs";

const MAX_WIDTH = 1920;
const MAX_BYTES = 800 * 1024;
const WARN_BYTES = 25 * 1024 * 1024; // GitHub warns at 50MB and rejects at 100MB

const kb = (bytes) => `${Math.round(bytes / 1024)}KB`;

const compress = async (file) => {
  const input = fs.readFileSync(file);
  const { width = 0 } = await sharp(input).metadata();
  if (width <= MAX_WIDTH && input.length <= MAX_BYTES) return;

  const pipeline = sharp(input).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  const ext = path.extname(file).toLowerCase();
  const output =
    ext === ".png"
      ? await pipeline.png({ compressionLevel: 9, effort: 10 }).toBuffer()
      : ext === ".webp"
        ? await pipeline.webp({ quality: 80 }).toBuffer()
        : ext === ".jpg" || ext === ".jpeg"
          ? await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer()
          : null;

  if (!output || output.length > input.length * 0.9) return;
  fs.writeFileSync(file, output);
  console.log(`  ${path.relative(process.cwd(), file)}: ${kb(input.length)} -> ${kb(output.length)}`);
};

for (const dir of walkDirs()) {
  for (const name of listImages(dir)) await compress(path.join(dir, name));

  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const { size } = fs.statSync(file);
    if (fs.statSync(file).isFile() && size > WARN_BYTES) {
      console.warn(`  WARNING: ${path.relative(process.cwd(), file)} is ${kb(size)} - compress it before committing`);
    }
  }
}
console.log("Image compression done");
