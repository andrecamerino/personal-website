"use client";

import React, { useMemo, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Testimonial from "./Testimonial";
import SectionTitle from "../SectionTitle";
import { useTheme } from "@/context/ThemeContext";

const TestimonialSection = () => {
  const { currentTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
  const shuffle = <T,>(array: T[]): T[] =>
    [...array]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

  // Shuffle ONCE per theme for max stability
  const shuffledTestimonials = useMemo(() => shuffle(testimonials), [testimonials]);

  // Duplicate manually for marquee
  const row1 = useMemo(
    () => [...shuffledTestimonials, ...shuffledTestimonials],
    [shuffledTestimonials]
  );
  const row2 = useMemo(
    () => [...shuffledTestimonials, ...shuffledTestimonials],
    [shuffledTestimonials]
  );

  return (
    <div className="flex flex-col items-center mt-60 lg:mt-80 gap-6 lg:gap-8">
      <SectionTitle>Testimonials</SectionTitle>

      {/* Top marquee */}
      <div className="w-full overflow-hidden">
        <Marquee direction="left" speed={26} pauseOnHover gradient={false}>
          {row1.map((t, i) => (
            <Testimonial key={`${t.name}-desktop-${i}`} {...t} />
          ))}
        </Marquee>
      </div>

      {/* Bottom marquee (mobile only, mounted conditionally) */}
      {isMobile && (
        <div className="w-full overflow-hidden">
          <Marquee direction="right" speed={22} pauseOnHover gradient={false}>
            {row2.map((t, i) => (
              <Testimonial key={`${t.name}-mobile-${i}`} {...t} />
            ))}
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default TestimonialSection;