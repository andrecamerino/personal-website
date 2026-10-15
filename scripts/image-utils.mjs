import fs from "node:fs";
import path from "node:path";

export const PROJECTS_DIR = path.join(process.cwd(), "public", "projects");
export const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

// Every directory under public/projects, including the root
export const walkDirs = (dir = PROJECTS_DIR) => [
  dir,
  ...fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => walkDirs(path.join(dir, entry.name))),
];

// Image files directly inside a directory (not recursive), in natural order
export const listImages = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && IMAGE_EXTS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
