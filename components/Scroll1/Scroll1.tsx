"use client";

import React, { useMemo, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Scroll1Card from "./Scroll1Card";
import SectionTitle from "../SectionTitle";
import { useTheme } from "@/context/ThemeContext";

const Scroll1 = () => {
  const { currentTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const techStacks = [
    { text: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "Legoat", imgSrc: "/projects/lebron.webp" },
    { text: "LeGlaze", imgSrc: "/projects/lebron.webp" },
    // Add more tech items here
  ];

  const creativeDeliverables = [
    { text: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "Lebron", imgSrc: "/projects/lebron.webp" },
    // Add more creative items here
  ];

  const content = currentTheme === "dark" ? techStacks : creativeDeliverables;

  // Optional: shuffle once per theme (stable)
  const shuffledContent = useMemo(() => [...content], [content]);

  // Duplicate manually for marquee instead of autoFill
  const row1 = useMemo(() => [...shuffledContent, ...shuffledContent], [shuffledContent]);
  const row2 = useMemo(() => [...shuffledContent, ...shuffledContent], [shuffledContent]);

  return (
    <div className="flex flex-col items-center mt-60 lg:mt-80 gap-2">
      <SectionTitle>
        {currentTheme === "dark" ? "Tech Stack" : "Common Deliverables"}
      </SectionTitle>

      {/* Top marquee */}
      <div className="w-full overflow-hidden">
        <Marquee direction="right" speed={26} pauseOnHover gradient={false}>
          {row1.map((e, i) => (
            <Scroll1Card key={`${e.text}-desktop-${i}`} text={e.text} imgSrc={e.imgSrc} />
          ))}
        </Marquee>
      </div>

      {/* Bottom marquee - mobile only */}
      {isMobile && (
        <div className="w-full overflow-hidden">
          <Marquee direction="left" speed={22} pauseOnHover gradient={false}>
            {row2.map((e, i) => (
              <Scroll1Card key={`${e.text}-mobile-${i}`} text={e.text} imgSrc={e.imgSrc} />
            ))}
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default Scroll1;