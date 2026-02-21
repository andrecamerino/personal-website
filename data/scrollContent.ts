import type { ScrollContent } from "@/types/scrollContent";

export type ScrollContentCategory = "developer" | "creative";

export const scrollContent: Record<ScrollContentCategory, ScrollContent[]> = {
  developer: [
    { text: "Python", imgSrc: "/python.png" },
    { text: "Flask", imgSrc: "/flask.png" },
    { text: "Pytest", imgSrc: "/pytest.png" },
    { text: "Sqlite", imgSrc: "/sqlite.png" },
    { text: "C", imgSrc: "/c.png" },
    { text: "Javascript", imgSrc: "/javascript.png" },
    { text: "Typescript", imgSrc: "/typescript.png" },
    { text: "React", imgSrc: "/react.png" },
    { text: "Nextjs", imgSrc: "/nextjs.png" },
    { text: "Tailwind", imgSrc: "/tailwind.png" },
    { text: "Html", imgSrc: "/html.png" },
    { text: "Css", imgSrc: "/css.png" },
    { text: "Mongodb", imgSrc: "/mongodb.png" },
    { text: "Redis", imgSrc: "/redis.png" },
    { text: "Nodejs", imgSrc: "/nodejs.png" },
    { text: "Git", imgSrc: "/git.png" },
    { text: "Github", imgSrc: "/github.png" },
  ],
  creative: [
    { text: "Short-Form Video" },
    { text: "Long-Form Video" },
    { text: "Podcasts" },
    { text: "Short Documentary" },
    { text: "Fast-Paced YouTube Content" },
    { text: "Night Event Coverage" },
    { text: "Corporate Event Coverage" },
    { text: "Classy / Elegant Event Coverage" },
    { text: "Social Media Content" },
    { text: "Promotional Content" },
    { text: "Brand / Company Profile Videos" },
    { text: "Product Photography & Videography" },
    { text: "Music Videos" },
    { text: "Behind-the-Scenes Content" },
    { text: "Lifestyle / Personal Branding Content" },
    { text: "Highlight Reels" },
    { text: "Motion Graphics" },
  ],
};