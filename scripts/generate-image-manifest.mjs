// Maps each folder under public/projects to the images directly inside it,
// so projects can set `images: "/developer/slidedown"` instead of listing files.
// Also writes a tiny blurred preview of every image (as a data URL) to
// imagePlaceholders.json, shown while the real image loads.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { PROJECTS_DIR, walkDirs, listImages } from "./image-utils.mjs";

const OUTPUT = path.join(process.cwd(), "data", "imageManifest.json");
const PLACEHOLDERS_OUTPUT = path.join(process.cwd(), "data", "imagePlaceholders.json");
const PLACEHOLDER_WIDTH = 10;

const toPublicPath = (dir) => "/" + path.relative(PROJECTS_DIR, dir).split(path.sep).join("/");

const toPlaceholder = async (file) => {
  const buffer = await sharp(file).resize(PLACEHOLDER_WIDTH).webp({ quality: 50 }).toBuffer();
  return `data:image/webp;base64,${buffer.toString("base64")}`;
};

const manifest = {};
const placeholders = {};
for (const dir of walkDirs()) {
  const images = listImages(dir);
  if (images.length === 0) continue;
  const folder = toPublicPath(dir).replace(/\/$/, "");
  manifest[folder] = images.map((name) => `${folder}/${name}`);

  for (const name of images) {
    placeholders[`${folder}/${name}`] = await toPlaceholder(path.join(dir, name));
  }
}

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + "\n");
fs.writeFileSync(PLACEHOLDERS_OUTPUT, JSON.stringify(placeholders, null, 2) + "\n");
console.log(`Image manifest: ${Object.keys(manifest).length} folders -> data/imageManifest.json`);
console.log(`Image placeholders: ${Object.keys(placeholders).length} images -> data/imagePlaceholders.json`);
