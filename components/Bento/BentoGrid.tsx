import React from "react";
import { useTheme } from "@/context/ThemeContext";
import BentoBox from "@/components/Bento/BentoBox";
import SectionTitle from "@/components/SectionTitle";

const BentoGrid = () => {
  const GAP = "gap-6"; // your gap variable

  const { currentTheme } = useTheme();

  const developerAwards = [
    {
      title: "WEB3 Hackathon Prize Winner",
      desc: "We won 1st place in the Kiwiana Prize winner, receiving $2,000!",
      imgSrc: "/placeholders/cris.png",
    },
    {
      title: "Community Innovation Award",
      desc: "Recognized for our innovative approach to community-driven projects.",
      imgSrc: "/projects/lebron.webp",
    },
    {
      title: "Best Coding Challenge",
      desc: "Our team excelled in a nationwide coding challenge.",
      imgSrc: "/placeholders/cris.png",
    },
    {
      title: "Open Source Contributor",
      desc: "Contributed to multiple high-profile open-source projects.",
      imgSrc: "/projects/lebron.webp",
    },
  ];

  const creativeAchievements = [
    {
      title: "Best Design Sprint",
      desc: "Our team’s design sprint was awarded best design by the judges.",
      imgSrc: "/placeholders/cris.png",
    },
    {
      title: "Top Creative Pitch",
      desc: "Awarded for the most creative pitch in our startup accelerator.",
      imgSrc: "/projects/lebron.webp",
    },
    {
      title: "Visual Storytelling Award",
      desc: "Recognized for exceptional visual storytelling in our campaign.",
      imgSrc: "/placeholders/cris.png",
    },
    {
      title: "Innovation in UX",
      desc: "Awarded for creative UX solutions in our product designs.",
      imgSrc: "/projects/lebron.webp",
    },
  ];

  const awardsToShow =
    currentTheme === "dark" ? developerAwards : creativeAchievements;

  return (
    <div className="flex flex-col items-center mt-80">
      <SectionTitle>Achievements & Awards</SectionTitle>

      <div className={`flex flex-col sm:flex-row w-[90vw] sm:w-[70vw] h-auto sm:h-[60vh] min-h-125 box-border ${GAP}`}>
        {/* LEFT / TOP */}
        <div className="w-full sm:w-1/2 shrink-0 min-h-0">
          <BentoBox {...awardsToShow[0]} />
        </div>

        {/* RIGHT / OTHER */}
        <div className={`w-full sm:w-1/2 flex flex-col min-h-0 ${GAP}`}>
          {/* Second box */}
          <div className="w-full min-h-0">
            <BentoBox {...awardsToShow[1]} />
          </div>

          {/* Last two boxes side by side on small devices */}
          <div className={`flex flex-row w-full min-h-0 ${GAP}`}>
            <div className="flex-1 min-h-0">
              <BentoBox {...awardsToShow[2]} />
            </div>
            <div className="flex-1 min-h-0">
              <BentoBox {...awardsToShow[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;