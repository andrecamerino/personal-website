// Grabs a frame from every project video and saves it as a JPG poster in a
// `posters/` folder next to it (e.g. creative/videos/posters/uoacs_V1.jpg), so
// video cards show an image while the video loads. Needs ffmpeg installed
// (`brew install ffmpeg`); skipped with a warning if it isn't. Vercel doesn't
// have ffmpeg, so the posters are committed rather than built there.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { walkDirs } from "./image-utils.mjs";

const VIDEO_EXTS = new Set([".mp4", ".mov", ".webm"]);
const POSTER_WIDTH = 1280;
const POSTER_TIME = "0.5"; // seconds in, to skip black first frames / fade-ins

const relative = (file) => path.relative(process.cwd(), file);

try {
  execFileSync("ffmpeg", ["-version"], { stdio: "ignore" });
} catch {
  console.warn("Video posters: ffmpeg not found, skipping");
  process.exit(0);
}

let created = 0;
for (const dir of walkDirs()) {
  const videos = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && VIDEO_EXTS.has(path.extname(entry.name).toLowerCase()));

  for (const video of videos) {
    const source = path.join(dir, video.name);
    const poster = path.join(dir, "posters", `${path.parse(video.name).name}.jpg`);

    // Only regenerate when the video is newer than its poster
    if (fs.existsSync(poster) && fs.statSync(poster).mtimeMs >= fs.statSync(source).mtimeMs) continue;

    fs.mkdirSync(path.dirname(poster), { recursive: true });
    execFileSync(
      "ffmpeg",
      [
        "-y", "-loglevel", "error",
        "-ss", POSTER_TIME, "-i", source,
        "-frames:v", "1",
        "-vf", `scale='min(${POSTER_WIDTH},iw)':-2`,
        "-q:v", "4",
        poster,
      ],
      { stdio: "inherit" },
    );
    console.log(`Video poster: ${relative(poster)}`);
    created++;
  }
}

console.log(`Video posters: ${created} created`);
