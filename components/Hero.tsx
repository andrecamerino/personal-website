"use client";

import { useEffect, useState } from "react";
import { descriptiveWords as words } from "@/data/descriptiveWords";
import Button from "./Button";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useTheme } from "@/context/ThemeContext";
import RevealWrapper from "./RevealWrapper";
import { Transition } from "framer-motion";

const Hero = () => {
  const { currentTheme, setTheme } = useTheme();
  const typedText = useTypewriter(words, 100, 3000);

  const [showScrollHint, setShowScrollHint] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const smoothEase: Transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  };

  // Show arrow after 3 seconds if no scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasScrolled) setShowScrollHint(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasScrolled]);

  // Hide arrow once user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
        setShowScrollHint(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative lg:my-60 my-40 flex flex-col items-center gap-15 lg:gap-30 text-xl">
      <div className="w-full max-w-6xl">

        {/* Top line */}
        <RevealWrapper
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={smoothEase}
        >
          <p className="text-right lg:text-left lg:pl-24 lg:pr-0 pr-16 m-0 -mb-6">
            <span className="wave">👋</span>, my name is
          </p>
        </RevealWrapper>

        {/* Name */}
        <RevealWrapper
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          delay={0.15}
          transition={smoothEase}
        >
          <h1
            className="font-black m-0 flex flex-col lg:flex-row items-center justify-center"
            style={{ transform: "scaleY(0.8)" }}
          >
            <div className="lg:text-9xl lg:tracking-[-8] text-8xl tracking-[-8] text-center">
              ANDRE
            </div>

            <div className="lg:text-9xl lg:tracking-[-8] text-7xl tracking-[-6] text-center lg:ml-4">
              CAMERINO
            </div>
          </h1>
        </RevealWrapper>

        {/* Bottom line */}
        <RevealWrapper
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          delay={0.3}
          transition={smoothEase}
        >
          <p className="lg:text-right lg:pr-16 pl-10 m-0 lg:-mt-6 -mt-4">
            and I&apos;m <span className="font-bold">{typedText}</span>
            <br className="lg:hidden" /> based in New Zealand 🇳🇿
          </p>
        </RevealWrapper>

      </div>

      {/* Buttons */}
      <RevealWrapper
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        delay={0.45}
        transition={smoothEase}
      >
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-4">
          <Button
            className="group"
            onClick={() => setTheme("dark")}
            variant={currentTheme === "light" ? "secondary" : "primary"}
          >
            I&apos;m looking for a developer &nbsp;
            <span className="hidden group-hover:inline">🔋</span>
            <span className="inline group-hover:hidden">🪫</span>
          </Button>

          <Button
            className="group"
            onClick={() => setTheme("light")}
            variant={currentTheme === "dark" ? "secondary" : "primary"}
          >
            I&apos;m looking for a creative &nbsp;
            <span className="hidden group-hover:inline">📸</span>
            <span className="inline group-hover:hidden">📷</span>
          </Button>
        </div>
      </RevealWrapper>

      {/* Scroll Hint Arrow BELOW buttons */}
      {showScrollHint && (
        <RevealWrapper
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            onClick={scrollToNextSection}
            className="mt-2 lg:mt-8 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 animate-float"
          >
            <svg
              width="100"
              height="40"
              viewBox="0 0 100 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10 L50 32 L90 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </RevealWrapper>
      )}
    </div>
  );
};

export default Hero;