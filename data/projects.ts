import type { Project } from "@/types/Project";

export type ProjectCategory = "developer" | "creative";
export type CreativeCategory = "videography" | "photography" | "editing";

export type Projects = {
  developer: Project[];
  creative: Record<CreativeCategory, Project[]>;
};

export const projects: Projects = {
  developer: [
    {
      title: "UOA Investment Club Website as Project Lead",
      description:
        "Lead the development of the UOA Investment Club platform as Project Lead within WDCC. Direct a cross-functional team to deliver a modern web application featuring live stock data integration, secure Stripe payments, and a Payload CMS-powered admin system. Oversee technical architecture, feature prioritisation, and deployment to ensure scalability and long-term maintainability.",
      tags: [
        { name: "NextJS" },
        { name: "Tailwind" },
        { name: "Stripe" },
        { name: "MongoDB" },
        { name: "Payload CMS" },
      ],
      images: [
        "/developer/uaic/uaic-1.png",
        "/developer/uaic/uaic-4.png",
        "/developer/uaic/uaic-6.png",
        "/developer/uaic/uaic-7.png",
        "/developer/uaic/uaic-2.png",
        "/developer/uaic/uaic-3.png",
        "/developer/uaic/uaic-5.png",
      ],
    },
    {
      title: "UOA Investment Club Website as Developer",
      description:
        "Built as part of WDCC (Web Development Consulting Club), where I worked as a developer and co-designer. Delivered a modern platform featuring live stock data integration, Stripe payments, and a Payload CMS-powered admin system.",
      tags: [
        { name: "NextJS" },
        { name: "Tailwind" },
        { name: "Payload CMS" },
      ],
      images: [
        "/developer/uaic/uaic-1.png",
        "/developer/uaic/uaic-2.png",
        "/developer/uaic/uaic-3.png",
        "/developer/uaic/uaic-4.png",
        "/developer/uaic/uaic-5.png",
        "/developer/uaic/uaic-6.png",
        "/developer/uaic/uaic-7.png",
      ],
      links: [
        {
          name: "WDCC UAIC Project 2025",
          link: "https://wdcc.co.nz/projects/uaic/2025",
        },
      ],
    },
    {
      title: "Bindr",
      description:
        "Bindr is a recipe web app developed for CS235 with Evan & Sam, built with Python, Flask, Pytest, and SQLite. The platform features a homepage highlighting featured recipes, a browse page with search and filter functionality, and detailed recipe pages including ingredients, instructions, and nutritional information.",
      tags: [
        { name: "Python" },
        { name: "Flask" },
        { name: "SQLite" },
        { name: "Pytest" },
      ],
      images: [
        "/developer/bindr/bindr-1.png",
        "/developer/bindr/bindr-2.png",
        "/developer/bindr/bindr-3.png",
        "/developer/bindr/bindr-4.png",
        "/developer/bindr/bindr-5.png",
        "/developer/bindr/bindr-6.png",
        "/developer/bindr/bindr-7.png",
      ],
      links: [
        {
          name: "GitHub Repository",
          link: "https://github.com/UoA-CS-Sindhwani-CS235-S2-2025/cs235-s2-2025-recipeswebapp-scho616-eau465-rcam301",
        },
      ],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and built this full-stack portfolio using Next.js, React, TypeScript, and Tailwind. Powered by Framer Motion animations, Redis with Upstash, and Resend for email handling, dynamically showcasing both my developer and creative work.",
      tags: [
        { name: "NextJS" },
        { name: "Tailwind" },
        { name: "Redis" },
        { name: "Resend" },
      ],
      images: [
        "/developer/website/website-light.png",
        "/developer/website/website-dark.png",
      ],
      links: [
        {
          name: "GitHub Repository",
          link: "https://github.com/andrecamerino/personal-website",
        },
      ],
    },
  ],

  creative: {
    videography: [
      {
        title: "Night Events Videography",
        description:
          "A high-energy nightlife recap capturing immersive wide-angle crowd shots, dynamic lighting transitions, and tightly paced edits.",
        video: "/creative/videos/night_events_V1.mp4",
        links: [
          {
            name: "Savais Instagram Profile",
            link: "https://www.instagram.com/savais.apparel/?hl=en",
          },
        ],
        tags: [
          { name: "Event", color: "bg-green-400/50" },
          { name: "Nightlife", color: "bg-purple-400/50" },
          { name: "Cinematic", color: "bg-purple-400/50" },
        ],
      },
      {
        title: "Brand Promo Videography",
        description: "Short-form commercial content for UOACS.",
        video: "/creative/videos/uoacs_V1.mp4",
        links: [
          {
            name: "UOACS Website",
            link: "https://uoacs.co.nz/",
          },
        ],
        tags: [
          { name: "Commercial", color: "bg-blue-400/50" },
          { name: "Short Form", color: "bg-blue-400/50" },
          { name: "Motion Graphics", color: "bg-red-400/50" },
        ],
      },
      {
        title: "Music Videography",
        description: "Cinematic music visuals featuring Joseph Pod.",
        video: "/creative/videos/music_videos_V1.mp4",
        links: [
          {
            name: "Joseph Pod Youtube Channel",
            link: "https://www.youtube.com/@josephpodd",
          },
        ],
        tags: [
          { name: "Music Video", color: "bg-purple-400/50" },
          { name: "Cinematic", color: "bg-purple-400/50" },
          { name: "Slow Motion", color: "bg-red-400/50" },
        ],
      },
      {
        title: "Hype Videography",
        description: "High-impact sports and event edits.",
        video: "/creative/videos/spc_V1.mp4",
        links: [
          {
            name: "Leavers Video on YouTube",
            link: "https://www.youtube.com/watch?v=rTSX71Q9Kso",
          },
        ],
        tags: [
          { name: "Event", color: "bg-green-400/50" },
          { name: "Sports", color: "bg-green-400/50" },
          { name: "Fast Cuts", color: "bg-red-400/50" },
        ],
      },
    ],

    photography: [
      {
        title: "Corporate Event Photography",
        description: "Professional UOACS event coverage.",
        images: [
          "/creative/uoacs-photos/elective-1.jpg",
          "/creative/uoacs-photos/elective-2.jpg",
          "/creative/uoacs-photos/elective-3.jpg",
          "/creative/uoacs-photos/potentia-1.jpg",
          "/creative/uoacs-photos/potentia-2.jpg",
          "/creative/uoacs-photos/potentia-3.jpg",
        ],
        links: [
          {
            name: "UOACS Website",
            link: "https://uoacs.co.nz/",
          },
        ],
        tags: [
          { name: "Event", color: "bg-green-400/50" },
          { name: "Corporate", color: "bg-blue-400/50" },
          { name: "Editorial", color: "bg-purple-400/50" },
        ],
      },
      {
        title: "Corporate Competition Photography",
        description: "Hackathon coverage.",
        images: [
          "/creative/uoacs-photos/hackathon-1.jpg",
          "/creative/uoacs-photos/hackathon-2.jpg",
          "/creative/uoacs-photos/hackathon-3.jpg",
        ],
        links: [
          {
            name: "UOACS Website",
            link: "https://uoacs.co.nz/",
          },
        ],
        tags: [
          { name: "Event", color: "bg-green-400/50" },
          { name: "Corporate", color: "bg-blue-400/50" },
          { name: "Competition", color: "bg-red-400/50" },
        ],
      },
      {
        title: "Elegant Event Photography",
        description: "Refined milestone event coverage.",
        tags: [
          { name: "Event", color: "bg-green-400/50" },
          { name: "Elegant", color: "bg-purple-400/50" },
          { name: "Portrait", color: "bg-yellow-400/50" },
        ],
      },
    ],

    editing: [
      {
        title: "Podcast Editing",
        description: "6K multicam podcast editing.",
        video: "/creative/videos/podcasts_V1.mp4",
        links: [
          {
            name: "Burst Digital Instagram Profile",
            link: "https://www.instagram.com/burstdigitalnz/",
          },
          {
            name: "Roiinmarketing Instagram Profile",
            link: "https://www.instagram.com/roiinmarketing/reels",
          },
        ],
        tags: [
          { name: "Podcast", color: "bg-blue-400/50" },
          { name: "Multicam", color: "bg-purple-400/50" },
          { name: "Audio", color: "bg-red-400/50" },
        ],
      },
      {
        title: "Short Documentary Editing",
        description: "Story-driven documentary edits.",
        video: "/creative/videos/rpm.mov",
        links: [
          {
            name: "Aspiring Founder YouTube Channel",
            link: "http://youtube.com/channel/UCsLRWiu_gpB45TGxFRskADQ",
          },
        ],
        tags: [
          { name: "Documentary", color: "bg-purple-400/50" },
          { name: "Cinematic", color: "bg-purple-400/50" },
          { name: "Storytelling", color: "bg-yellow-400/50" },
        ],
      },
    ],
  },
};