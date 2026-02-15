import { Testimonial } from "@/types/textimonial";

export type TestimonialCategory = "developer" | "creative";

export const testimonials: Record<TestimonialCategory, Testimonial[]> = {
  developer: [
    {
      name: "Alex Morgan",
      role: "Founder, DevWorks",
      rating: 5,
      text: "Andre absolutely smashed this project. Clean code, great communication.",
      imgSrc: "/projects/lebron.webp",
    },
    {
      name: "Jamie Lee",
      role: "CTO, Stackify",
      rating: 4,
      text: "Super reliable and fast. Would 100% work together again.",
      imgSrc: "/placeholders/cris.png",
    },
    {
      name: "Chris Patel",
      role: "Product Lead, Launchpad",
      rating: 5,
      text: "Attention to detail was next level. Everything just felt polished.",
      imgSrc: "/projects/lebron.webp",
    },
    {
      name: "Sam Rivers",
      role: "Engineering Manager, Flux",
      rating: 4,
      text: "Great balance of technical skill and product thinking.",
      imgSrc: "/placeholders/cris.png",
    },
  ],
  creative: [
    {
      name: "Mia Thompson",
      role: "Creative Director, Bloom",
      rating: 5,
      text: "The visuals and motion were unreal. Exactly the vibe we wanted.",
      imgSrc: "/projects/lebron.webp",
    },
    {
      name: "Leo Fernandez",
      role: "Brand Strategist",
      rating: 4,
      text: "Strong creative instincts and super easy to collaborate with.",
      imgSrc: "/placeholders/cris.png",
    },
    {
      name: "Ava Collins",
      role: "Content Lead, Studio Nine",
      rating: 5,
      text: "Everything felt intentional and premium. Loved the end result.",
      imgSrc: "/projects/lebron.webp",
    },
    {
      name: "Noah Kim",
      role: "Marketing Manager",
      rating: 4,
      text: "Fast turnaround and great storytelling through design.",
      imgSrc: "/placeholders/cris.png",
    },
  ],
};
