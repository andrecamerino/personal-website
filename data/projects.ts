import type { Project } from "@/types/project";

export type ProjectCategory = "developer" | "creative";
export type CreativeCategory = "videography" | "photography" | "editing";

export type Projects = {
  developer: Project[];
  creative: Record<CreativeCategory, Project[]>;
};

export const projects: Projects = {
  developer: [
    {
      title: "UOA Investment Club Website",
      description:
        "Built as part of WDCC (Web Development Consulting Club), where I worked as a developer and co-designer. Delivered a modern platform featuring live stock data integration, Stripe payments, and a Payload CMS-powered admin system.",
      images: [
        "/developer/uaic/uaic-1.png",
        "/developer/uaic/uaic-2.png",
        "/developer/uaic/uaic-3.png",
        "/developer/uaic/uaic-4.png",
        "/developer/uaic/uaic-5.png",
        "/developer/uaic/uaic-6.png",
        "/developer/uaic/uaic-7.png",
      ],
      link: "https://wdcc.co.nz/projects/uaic/2025",
    },
    {
      title: "Bindr",
      description:
        "Bindr is a recipe web app developed for CS235 with Evan & Sam, built with Python, Flask, Pytest, and SQLite. The platform features a homepage highlighting featured recipes, a browse page with search and filter functionality, and detailed recipe pages including ingredients, instructions, and nutritional information.",
      images: [
        "/developer/bindr/bindr-1.png",
        "/developer/bindr/bindr-2.png",
        "/developer/bindr/bindr-3.png",
        "/developer/bindr/bindr-4.png",
        "/developer/bindr/bindr-5.png",
        "/developer/bindr/bindr-6.png",
        "/developer/bindr/bindr-7.png",
      ],
      link: "https://github.com/UoA-CS-Sindhwani-CS235-S2-2025/cs235-s2-2025-recipeswebapp-scho616-eau465-rcam301",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and built this full-stack portfolio using Next.js, React, TypeScript, and Tailwind. Powered by Framer Motion animations, Redis with Upstash, and Resend for email handling, dynamically showcasing both my developer and creative work.",
      images: [
        "/developer/website/website-light.png",
        "/developer/website/website-dark.png",
      ],
      link: "https://github.com/andrecamerino/personal-website",
    },
  ],

  creative: {
    videography: [
      {
        title: "Night Events Videography",
        description:
          "A high-energy nightlife recap capturing immersive wide-angle crowd shots, dynamic lighting transitions, and tightly paced edits. Designed to amplify atmosphere and show off your events.",
        video: "/creative/videos/night_events_V1.mp4",
        link: "https://www.instagram.com/savais.apparel/?hl=en",
      },
      {
        title: "Brand Promo Videography",
        description:
          "Short-form commercial content combining motion typography, clean transitions, and polished framing. Produced for UOACS (UoA Computer Science Society) to drive engagement, strengthen brand identity, and deliver clear messaging across social platforms.",
        video: "/creative/videos/uoacs_V1.mp4",
        link: "https://uoacs.co.nz/",
      },
      {
        title: "Music Videography",
        description:
          "Cinematic music visuals blending slow-motion beach sequences, golden-hour colour grading, and intentional composition. Crafted to elevate the artist's presence through rhythm-aware cuts and atmospheric storytelling. Featuring artist Joseph Pod.",
        video: "/creative/videos/music_videos_V1.mp4",
        link: "https://www.youtube.com/@josephpodd",
      },
      {
        title: "Hype Videography",
        description:
          "High-impact event and sports edits capturing crowd energy and chant build-ups. Fast-paced cuts, punchy sound design, and dynamic framing create an emotionally driven highlight experience. Proudly featuring my 2023 leavers video!",
        video: "/creative/videos/spc_V1.mp4",
        link: "https://www.youtube.com/watch?v=rTSX71Q9Kso",
      },
    ],

    photography: [
      {
        title: "Corporate Event Photography",
        description:
          "Professional coverage of UOACS Elective Nights and company collaborations, including Potentia. Capturing keynote moments, networking interactions, and brand presence through clean composition and natural, polished imagery optimised for marketing and sponsor showcases.",
        images: [
          "/creative/uoacs-photos/elective-1.jpg",
          "/creative/uoacs-photos/elective-2.jpg",
          "/creative/uoacs-photos/elective-3.jpg",
          "/creative/uoacs-photos/potentia-1.jpg",
          "/creative/uoacs-photos/potentia-2.jpg",
          "/creative/uoacs-photos/potentia-3.jpg",
        ],
        link: "https://uoacs.co.nz/",
      },
      {
        title: "Corporate Competition Photography",
        description:
          "Dynamic coverage of the UOACS Hackathon, documenting focused coding sessions, team collaboration, and final pitches. Story-driven imagery highlighting innovation, intensity, and achievement.",
        images: [
          "/creative/uoacs-photos/hackathon-1.jpg",
          "/creative/uoacs-photos/hackathon-2.jpg",
          "/creative/uoacs-photos/hackathon-3.jpg",
        ],
        link: "https://uoacs.co.nz/",
      },
      {
        title: "Elegant Event Photography",
        description:
          "Refined coverage of milestone celebrations such as debut birthdays, capturing candid emotion, thoughtful detail, and timeless elegance.",
      },
    ],

    editing: [
      {
        title: "Podcast Editing",
        description:
          "6K multicam podcast editing with dynamic angle switching, clean audio balancing, and fast-paced one-minute intro sequences designed to maximise viewer retention. Featuring The Morning Marketer podcast, optimised for both long-form and short-form platforms.",
        video: "/creative/videos/podcasts_V1.mp4",
        link: "https://www.instagram.com/burstdigitalnz/",
      },
      {
        title: "Short Documentary Editing",
        description:
          "Short-form documentary edits focused on strong storytelling, cinematic B-roll integration, and intentional pacing to create cohesive, emotionally engaging narratives.",
        video: "/creative/videos/rpm.mov",
        link: "http://youtube.com/channel/UCsLRWiu_gpB45TGxFRskADQ",
      },
    ],
  },
};
