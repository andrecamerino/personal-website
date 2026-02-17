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
      title: "FocusFlow",
      description:
        "A task management web app built with Next.js and TypeScript, designed to help students organise deep work sessions with theme switching and smooth UI animations.",
      imageSrc: "/projects/focusflow.webp",
      link: "https://yourdomain.com/focusflow",
    },
    {
      title: "WeatherCast NZ",
      description:
        "A real-time weather dashboard that integrates regional forecasts with live UI transitions and responsive design optimised for mobile devices.",
      imageSrc: "/projects/weather.webp",
    },
    {
      title: "Connect 4 AI",
      description:
        "A Python-based Connect 4 game featuring heuristic evaluation and recursive search logic for competitive AI gameplay.",
      imageSrc: "/projects/connect4.webp",
      link: "https://github.com/yourusername/connect4-ai",
    },
  ],

  creative: {
    videography: [
      {
        title: "Savais Freaky Friday Aftermovie",
        description:
          "A high-energy nightclub recap capturing wide-angle crowd shots, dynamic lighting, and rhythmic pacing aligned with house and Afrobeat tracks.",
        imageSrc: "/projects/savais.webp",
        link: "https://youtube.com/yourvideo1",
      },
      {
        title: "Summer Recap 2025",
        description:
          "Cinematic montage featuring drone transitions, slow-motion beach sequences, and colour-graded golden hour aesthetics.",
        imageSrc: "/projects/summer.webp",
        link: "https://youtube.com/yourvideo2",
      },
      {
        title: "Brand Promo Reel",
        description:
          "Short-form promotional video combining motion typography, clean transitions, and commercial-style framing.",
        imageSrc: "/projects/promo.webp",
        link: "https://youtube.com/yourvideo3",
      },
    ],

    photography: [
      {
        title: "Urban Night Series",
        description:
          "Low-light street photography exploring neon reflections, motion blur, and high-contrast composition.",
        imageSrc: "/projects/urban.webp",
        link: "https://yourdomain.com/urban-series",
      },
      {
        title: "Portrait Collection",
        description:
          "Minimalist portrait series focusing on soft shadows, natural light, and expressive framing.",
        imageSrc: "/projects/portraits.webp",
        link: "https://yourdomain.com/portraits",
      },
      {
        title: "Coastal Landscapes",
        description:
          "Wide-frame landscape photography capturing New Zealand’s coastline with long exposure techniques.",
        imageSrc: "/projects/coast.webp",
        link: "https://yourdomain.com/coastal",
      },
    ],

    editing: [
      {
        title: "Motion Typography Reel",
        description:
          "A collection of kinetic text animations built using Premiere Pro and After Effects, focusing on smooth easing and timing precision.",
        imageSrc: "/projects/typography.webp",
        link: "https://youtube.com/yourvideo4",
      },
      {
        title: "Colour Grading Showcase",
        description:
          "Before-and-after grading comparisons demonstrating cinematic LUT workflows and tonal balancing.",
        imageSrc: "/projects/grading.webp",
        link: "https://youtube.com/yourvideo5",
      },
      {
        title: "Transition Pack Demo",
        description:
          "Custom seamless transitions designed for creators, optimised for speed ramps and social media formats.",
        imageSrc: "/projects/transitions.webp",
        link: "https://youtube.com/yourvideo6",
      },
    ],
  },
};