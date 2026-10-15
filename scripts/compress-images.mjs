// Compresses images in place so they stay small enough for GitHub.
//
//   pnpm compress <dir...> [--recursive] [--jpg]
//
//   <dir...>      folders to compress (just the images directly inside them)
//   --recursive   also compress images in subfolders
//   --jpg         convert PNG/WebP to JPG (much smaller for photos and game
//                 screenshots). Deletes the original, so only use it on folders
//                 that projects reference by folder, not by exact filename
//
// With no folders it compresses everything under public/projects (this is what
// `pnpm dev` runs). Images are resized to at most MAX_WIDTH, and only images
// wider than MAX_WIDTH or larger than MAX_BYTES are touched. A result is only
// kept if it saves at least 10%, so re-running it won't keep degrading files.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { PROJECTS_DIR, walkDirs, listImages } from "./image-utils.mjs";

const MAX_WIDTH = 1920;
const MAX_BYTES = 800 * 1024;
const WARN_BYTES = 25 * 1024 * 1024; // GitHub warns at 50MB and rejects at 100MB
const CONVERTIBLE_TO_JPG = new Set([".png", ".webp"]);

const args = process.argv.slice(2);
const toJpg = args.includes("--jpg");
const recursive = args.includes("--recursive");
const targets = args.filter((arg) => !arg.startsWith("--"));

const kb = (bytes) => `${Math.round(bytes / 1024)}KB`;
const relative = (file) => path.relative(process.cwd(), file);

const encode = (pipeline, ext) => {
  if (ext === ".png") return pipeline.png({ compressionLevel: 9, effort: 10 });
  if (ext === ".webp") return pipeline.webp({ quality: 80 });
  if (ext === ".jpg" || ext === ".jpeg") return pipeline.jpeg({ quality: 80, mozjpeg: true });
  return null;
};

const compress = async (file) => {
  const input = fs.readFileSync(file);
  const ext = path.extname(file).toLowerCase();
  const convert = toJpg && CONVERTIBLE_TO_JPG.has(ext);
  const { width = 0 } = await sharp(input).metadata();
  if (!convert && width <= MAX_WIDTH && input.length <= MAX_BYTES) return;

  const pipeline = sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true });

  if (convert) {
    const output = await encode(pipeline.flatten({ background: "#ffffff" }), ".jpg").toBuffer();
    const outFile = file.slice(0, -ext.length) + ".jpg";
    if (fs.existsSync(outFile)) {
      console.warn(`  SKIP ${relative(file)}: ${relative(outFile)} already exists`);
      return;
    }
    fs.writeFileSync(outFile, output);
    fs.unlinkSync(file);
    console.log(`  ${relative(file)} -> ${path.basename(outFile)}: ${kb(input.length)} -> ${kb(output.length)}`);
    return;
  }

  const encoded = encode(pipeline, ext);
  if (!encoded) return;
  const output = await encoded.toBuffer();
  if (output.length > input.length * 0.9) return;
  fs.writeFileSync(file, output);
  console.log(`  ${relative(file)}: ${kb(input.length)} -> ${kb(output.length)}`);
};

const warnIfHuge = (dir) => {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stats = fs.statSync(file);
    if (stats.isFile() && stats.size > WARN_BYTES) {
      console.warn(`  WARNING: ${relative(file)} is ${kb(stats.size)} - compress it before committing`);
    }
  }
};

const dirs = targets.length
  ? targets.flatMap((target) => {
      const dir = path.resolve(target);
      if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
        console.error(`Not a folder: ${target}`);
        process.exit(1);
      }
      return recursive ? walkDirs(dir) : [dir];
    })
  : walkDirs(PROJECTS_DIR);

for (const dir of dirs) {
  for (const name of listImages(dir)) await compress(path.join(dir, name));
  warnIfHuge(dir);
}
console.log("Image compression done");
