import type { ScrollContent } from "@/types/scrollContent";

export type ScrollContentCategory = "developer" | "creative";

export const scrollContent: Record<ScrollContentCategory, ScrollContent[]> = {
  developer: [
    { text: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "Legoat", imgSrc: "/projects/lebron.webp" },
    { text: "LeGlaze", imgSrc: "/projects/lebron.webp" },
  ],
  creative: [
    { text: "Lebron" },
    { text: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "Lebron", imgSrc: "/projects/lebron.webp" },
  ],
};
