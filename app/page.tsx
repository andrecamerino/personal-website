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
import ContactSection from "@/components/Contact/ContactSection";

const Page = () => {
  const { currentTheme } = useTheme();
  return (
    <ParallaxWrapper>
      <Navbar />
      <Hero />
      <ProjectSection />
      <Scroll1 />
      <BentoGrid />
      <TestimonalSection />
      {currentTheme === "dark" && <ResumeSection />}
      <ContactSection />
    </ParallaxWrapper>
  );
};

export default Page;
