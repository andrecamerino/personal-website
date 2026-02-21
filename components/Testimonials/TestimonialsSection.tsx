"use client";

import { useMemo, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Testimonial from "./Testimonial";
import SectionTitle from "../SectionTitle";
import { useTheme } from "@/context/ThemeContext";
import { testimonials } from "@/data/testimonials";
import { useFullscreen } from "@/context/FullscreenContext";

const TestimonialSection = () => {
  const { currentTheme } = useTheme();
  const { setContent } = useFullscreen();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const testimonialContent =
    currentTheme === "dark" ? testimonials.developer : testimonials.creative;

  // Shuffle helper
  const shuffle = <T,>(array: T[]): T[] =>
    [...array]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

  // Shuffle ONCE per theme for max stability
  const shuffledTestimonials = useMemo(
    () => shuffle(testimonialContent),
    [testimonialContent],
  );

  // Duplicate manually for marquee
  const row1 = useMemo(
    () => [...shuffledTestimonials, ...shuffledTestimonials],
    [shuffledTestimonials],
  );
  const row2 = useMemo(
    () => [...shuffledTestimonials, ...shuffledTestimonials],
    [shuffledTestimonials],
  );

  return (
    <div className="flex flex-col items-center mt-60 lg:mt-80 gap-6 lg:gap-8">
      <SectionTitle>Testimonials</SectionTitle>

      {/* Top marquee */}
      <div className="w-full overflow-hidden">
        <Marquee direction="left" speed={26} pauseOnHover gradient={false}>
          {row1.map((t, i) => (
            <Testimonial canExpand key={`${t.name}-desktop-${i}`} {...t} />
          ))}
        </Marquee>
      </div>

      {/* Bottom marquee (mobile only, mounted conditionally) */}
      {isMobile && (
        <div className="w-full overflow-hidden">
          <Marquee direction="right" speed={22} pauseOnHover gradient={false}>
            {row2.map((t, i) => (
              <Testimonial canExpand key={`${t.name}-mobile-${i}`} {...t} />
            ))}
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default TestimonialSection;
