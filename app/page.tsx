"use client";

import ParallaxWrapper from "@/components/ParallaxWrapper";
import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/Projects/ProjectSection";
import Scroll1 from "@/components/Scroll1/Scroll1";
import BentoGrid from "@/components/Bento/BentoGrid";
import TestimonalSection from "@/components/Testimonials/TestimonialsSection";
import ResumeSection from "@/components/ResumeSection";

const Page = () => {
  const { currentTheme } = useTheme();
  return (
    <ParallaxWrapper
      background={
        currentTheme === "dark"
          ? "/dark-background.png"
          : "/light-background.png"
      }
      speed={0.5}
    >
      <Navbar />
      <Hero />
      <ProjectSection />
      <Scroll1 />
      <BentoGrid />
      <TestimonalSection />
      <ResumeSection />
    </ParallaxWrapper>
  );
};

export default Page;
