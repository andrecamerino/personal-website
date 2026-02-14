import React, { useMemo } from "react";
import Testimonial from "./Testimonial";
import SectionTitle from "../SectionTitle";
import Marquee from "react-fast-marquee";
import { useTheme } from "@/context/ThemeContext";

const TestimonalSection = () => {
  const { currentTheme } = useTheme();

  const developerTestimonials = [
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
  ];

  const creativeTestimonials = [
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
  ];

  const testimonials =
    currentTheme === "dark" ? developerTestimonials : creativeTestimonials;

  // Shuffle helper
  const shuffle = <T,>(array: T[]): T[] => {
    return [...array]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  // Two independent shuffled lists
  const row1 = useMemo(() => shuffle(testimonials), [testimonials]);
  const row2 = useMemo(() => shuffle(testimonials), [testimonials]);

  return (
    <div className="flex flex-col items-center mt-60 lg:mt-80 gap-6 lg:gap-8">
      <SectionTitle>Testimonials</SectionTitle>

      {/* Top marquee */}
      <Marquee direction="left" speed={26} autoFill pauseOnHover>
        {row1.map((t, i) => (
          <Testimonial key={`row1-${i}`} {...t} />
        ))}
      </Marquee>

      {/* Bottom marquee */}
      <div className="block lg:hidden">
        <Marquee
          className="block lg:hidden"
          direction="right"
          speed={22}
          autoFill
          pauseOnHover
        >
          {row2.map((t, i) => (
            <Testimonial key={`row2-${i}`} {...t} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonalSection;
