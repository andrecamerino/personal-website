import imagePlaceholders from "@/data/imagePlaceholders.json";

const placeholders: Record<string, string> = imagePlaceholders;

// Tiny blurred preview of an image under public/projects, if one was generated
export const getPlaceholder = (src: string): string | undefined => placeholders[src];

// Poster frame generated next to a video (creative/videos/posters/<name>.jpg),
// or undefined if it hasn't been generated yet
export const getPoster = (video: string): string | undefined => {
  const slash = video.lastIndexOf("/");
  const name = video.slice(slash + 1).replace(/\.[^.]+$/, "");
  const poster = `${video.slice(0, slash)}/posters/${name}.jpg`;
  return getPlaceholder(poster) ? poster : undefined;
};
