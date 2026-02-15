import type { Achievement } from "@/types/achievement";

// Record = An object with specific keys, where every key has the same value type
export const achievements: Record<"developer" | "creative", Achievement[]> = {
  developer: [
    {
      title: "WEB3 Hackathon Prize Winner",
      desc: "Won 1st place in the Kiwiana Prize, receiving $2,000.",
      imgSrc: "/placeholders/cris.png",
    },
    {
      title: "Hackathon Winner",
      desc: "Recognised for our innovative approach to community-driven projects.",
      imgSrc: "/projects/lebron.webp",
    },
    {
      title: "Best Coding Challenge",
      desc: "Excelled in a nationwide coding challenge.",
      imgSrc: "/placeholders/cris.png",
    },
    {
      title: "Open Source Contributor",
      desc: "Contributed to multiple high-profile open-source projects.",
      imgSrc: "/projects/lebron.webp",
    },
  ],

  creative: [
    {
      title: "Best Music Video",
      desc: "Our design sprint was awarded best visual direction by the judges.",
      imgSrc: "/placeholders/cris.png",
    },
    {
      title: "Top Creative Pitch",
      desc: "Awarded for the most creative pitch in our startup accelerator.",
      imgSrc: "/projects/lebron.webp",
    },
    {
      title: "Visual Storytelling Award",
      desc: "Recognised for exceptional visual storytelling in our campaign.",
      imgSrc: "/placeholders/cris.png",
    },
    {
      title: "Innovation in UX",
      desc: "Awarded for creative UX solutions in product design.",
      imgSrc: "/projects/lebron.webp",
    },
  ],
};
