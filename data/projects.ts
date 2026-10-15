import type { Project } from "@/types/Project";
import imageManifest from "@/data/imageManifest.json";

export type ProjectCategory = "developer" | "creative";
export type CreativeCategory = "videography" | "photography" | "editing";

export type Projects = {
  developer: Project[];
  creative: Record<CreativeCategory, Project[]>;
};

// `images` can be a folder under public/projects (uses every image directly
// inside it, in filename order) or an explicit list of image paths
type ProjectEntry = Omit<Project, "images"> & { images?: string | string[] };

type ProjectEntries = {
  developer: ProjectEntry[];
  creative: Record<CreativeCategory, ProjectEntry[]>;
};

const manifest: Record<string, string[]> = imageManifest;

const resolveImages = (images: ProjectEntry["images"]) => {
  if (typeof images !== "string") return images;
  const folder = images.replace(/\/$/, "");
  if (!manifest[folder]) {
    console.warn(`No images found in public/projects${folder}`);
  }
  return manifest[folder] ?? [];
};

const resolveProject = (project: ProjectEntry): Project => ({
  ...project,
  images: resolveImages(project.images),
});

const projectEntries: ProjectEntries = {
  developer: [
    {
      title: "Slidedown",
      description:
        "Engineered client-side PDF and PPTX parsers using pdfjs-dist and JSZip, supporting files up to 50MB. Built a split-pane converter UI with live word count, byte reduction, and page count stats. Reduced slide payloads by ~70%, compressing 30+ decks from MBs to KBs to fit LLM free-tier context limits.",
      tags: [
        { name: "TypeScript" },
        { name: "NextJS" },
        { name: "pdfjs-dist" },
        { name: "JSZip" },
      ],
      images: "/developer/slidedown",
      links: [
        {
          name: "Slidedown Website",
          link: "https://slidedown-andre.vercel.app",
        },
      ],
    },
    {
      title: "CCCA - Computing Capstone Community Australasia",
      description:
        "COMPSCI 399 capstone with Team 25, a platform for academics across Australia and New Zealand to share capstone course data, post research proposals, and find co-investigators. Built a shared shadcn/Base UI component library with Storybook, the capstone courses flow, the institution logo ticker, and mobile-responsive layouts across the app.",
      tags: [
        { name: "NextJS" },
        { name: "TypeScript" },
        { name: "Payload CMS" },
        { name: "PostgreSQL" },
        { name: "Turborepo" },
      ],
      images: "/developer/ccca",
      links: [
        {
          name: "GitHub Repository",
          link: "https://github.com/uoa-compsci399-s2-2026-anna/team-25-project",
        },
      ],
    },
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
      links: [
        {
          name: "uaic.wdcc.co.nz",
          link: "https://uaic.wdcc.co.nz"
        }
      ],
      images: "/developer/uaic2026",
    },
    {
      title: "Concert Booking System",
      description:
        "Built a full backend for a Ticketmaster-style concert booking platform using JAX-RS and JPA. Designed RESTful endpoints for event listings, seat selection, and booking management, with persistent entity relationships handling venues, events, and reservations. Implemented as part of CS331 (Web Services).",
      tags: [
        { name: "Java" },
        { name: "JAX-RS" },
        { name: "JPA" },
      ],
      images: "/developer/concert-booking",
      links: [
        {
          name: "GitHub Repository",
          link: "", // add your repo link if public
        },
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
      images: "/developer/uaic",
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
      title: "Robin - Sustainability Hackathon Exec Choice Award",
      description:
        "An AI-powered smart bin assistant that tells you which bin your rubbish belongs in. Hold an item up to the camera and Robin detects it in real time with TensorFlow.js (COCO-SSD), then sorts it into recycling, waste, or compost to cut down on contamination. Built in under 24 hours with a team of 5 and won the Exec Choice Award at the Sustainability Hackathon 2025.",
      tags: [
        { name: "JavaScript" },
        { name: "TensorFlow.js" },
        { name: "HTML" },
        { name: "CSS" },
      ],
      images: "/developer/robin",
      links: [
        {
          name: "GitHub Repository",
          link: "https://github.com/andrecamerino/Robin",
        },
      ],
    },
    {
      title: "CryptoCritters - Web3 Hackathon Kiawana Prize Winner",
      description:
        "A pixel-art Web3 game where you collect New Zealand's endangered animals. Buy Critter Coins with ETH through a Solidity smart contract that routes a 5% fee to a conservation wallet, hatch common, uncommon, and rare eggs to unlock critters with real species facts, and earn more coins in minigames like Critter Scavenge. Led a team of 4 to win the Kiawana Prize for Best NZ-Centric Solution ($3K) at the Web3 Hackathon 2025.",
      tags: [
        { name: "NextJS" },
        { name: "TypeScript" },
        { name: "Solidity" },
        { name: "Hardhat" },
      ],
      images: "/developer/cryptocritters",
      links: [
        {
          name: "GitHub Repository",
          link: "https://github.com/andrecamerino/CryptoCritters",
        },
      ],
    },
    {
      title: "Findr - SESA x WDCC Hackathon Prize Winner",
      description:
        "A Tinder-style mobile web app for the 'Escaping Earth' theme. Swipe through planet cards with stats like humidity, temperature, and population, save the ones you'd escape to, and race a countdown before Earth runs out of time. My first hackathon, built with a team of 6, and won the Secret Category prize for Most Entertaining Solution at the SESA x WDCC Hackathon 2024.",
      tags: [
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
      ],
      images: "/developer/findr",
      links: [
        {
          name: "GitHub Repository",
          link: "https://github.com/evanautianle/HACKATHON2024-print-Hello-World-",
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
      images: "/developer/website",
      links: [
        {
          name: "GitHub Repository",
          link: "https://github.com/andrecamerino/personal-website",
        },
      ],
    },
    {
      title: "Food Catcher - Roblox Game",
      description:
        "A Roblox game built with friends over the intersemester break and still in active development. Catch food of random sizes and mutations at catch zones around the map, then sell it at the shop or stock your own player-owned stall so NPC customers buy from you passively. Includes stall upgrades, a food mutation system, auto-catch, a hotbar inventory, and a Cookbook that tracks every food and mutation you've discovered.",
      tags: [
        { name: "Luau" },
        { name: "Lua" },
        { name: "Rojo" },
      ],
      images: "/developer/catch-food",
    },
  ],

  creative: {
    editing: [
      {
        title: "Podcast Editing",
        description: "4K multicam podcast editing for The Morning Marketer, including full episode cuts, intros, and short-form reels.",
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
        description: "Story-driven documentary edits focused on narrative pacing and cinematic visuals, built to capture a founder's journey from concept to screen.",
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
      {
        title: "Short Form Video Editing",
        description: "A collection of short-form reels and podcast cuts edited for clients including UOACS, Burst Digital, and Glide Media - one reel was reposted by UFC champion Israel Adesanya!!! (Showcase video coming soon)",
        video: "",
        links: [
          {
            name: "@UOACS",
            link: "https://www.instagram.com/uoacompsci", // add their channel/page link
          },
          {
            name: "@GlideMedia",
            link: "https://www.instagram.com/glidemedia_/", // add their channel/page link
          },
        ],
        tags: [
          { name: "Short Form", color: "bg-purple-400/50" },
          { name: "Social Media", color: "bg-yellow-400/50" },
          { name: "Retention Optimisation", color: "bg-yellow-400/50" },
        ],
      }
    ],
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
        description:
          "A polished, fast-paced commercial promo for UOACS, combining dynamic camera movement and motion graphics to drive hype for club events and the upcoming hackathon. (Showcase video update coming soon)",
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
        description:
          "A cinematic music video shot and edited for artist Joseph Pod, blending slow-motion visuals with mood-driven color grading to match the track's tone. (Showcase video update coming soon)",
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
        description:
          "Fast-paced, high-energy edits built to capture the adrenaline of live sports and events, using quick cuts and dynamic pacing to keep viewers locked in.",
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
        description:
          "Professional photo coverage of UOACS workshops and panel events, capturing speakers, attendees, and key moments for the club's marketing and recap content. (Showcase photo update coming soon)",
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
        description:
          "Full-day photo coverage of the UOACS x WDCC hackathon, capturing teams in action, judging moments, and the overall competition atmosphere.",
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
        title: "LinkedIn Headshot Photography Event",
        description: "Designed and ran a professional headshot event in collaboration with SciSA, handling the full shoot and Lightroom editing workflow for attendees. (Showcase photos coming soon)",
        // images: [],
        // links: [],
        tags: [
          { name: "Event", color: "bg-green-400/50" },
          { name: "Portrait", color: "bg-blue-400/50" },
          { name: "Photography", color: "bg-yellow-400/50" },
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
  },
};
export const projects: Projects = {
  developer: projectEntries.developer.map(resolveProject),
  creative: {
    videography: projectEntries.creative.videography.map(resolveProject),
    photography: projectEntries.creative.photography.map(resolveProject),
    editing: projectEntries.creative.editing.map(resolveProject),
  },
};
