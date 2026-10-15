// Maps each folder under public/projects to the images directly inside it,
// so projects can set `images: "/developer/slidedown"` instead of listing files.
import fs from "node:fs";
import path from "node:path";
import { PROJECTS_DIR, walkDirs, listImages } from "./image-utils.mjs";

const OUTPUT = path.join(process.cwd(), "data", "imageManifest.json");

const toPublicPath = (dir) => "/" + path.relative(PROJECTS_DIR, dir).split(path.sep).join("/");

const manifest = {};
for (const dir of walkDirs()) {
  const images = listImages(dir);
  if (images.length === 0) continue;
  const folder = toPublicPath(dir).replace(/\/$/, "");
  manifest[folder] = images.map((name) => `${folder}/${name}`);
}

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Image manifest: ${Object.keys(manifest).length} folders -> data/imageManifest.json`);
