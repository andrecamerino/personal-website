'use client'

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/Projects/ProjectSection";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import { useTheme } from "@/context/ThemeContext";

const Page = () => {
  const { currentTheme } = useTheme();
  return (
    <ParallaxWrapper background={currentTheme === 'dark' ? '/dark-background.png' : '/light-background.png'} speed={0.5}>
      <div>
        <Navbar />
        <Hero />
        <ProjectSection />
      </div>
    </ParallaxWrapper>
  );
};

export default Page;