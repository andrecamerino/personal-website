import React from "react";
import { useTheme } from "@/context/ThemeContext";
import BentoBox from "@/components/Bento/BentoBox";
import SectionTitle from "@/components/SectionTitle";

const BentoGrid = () => {
  const GAP = "gap-6";

  const { currentTheme } = useTheme();

  // Developer-focused awards
  const developerAwards = [
    {
      title: "WEB3 Hackathon Prize Winner",
      desc: "We won 1st place in the Kiwiana Prize winner, receiving $2,000!",
      imgSrc: "/placeholders/gasp.png",
    },
    {
      title: "Community Innovation Award",
      desc: "Recognized for our innovative approach to community-driven projects.",
      imgSrc: "/projects/lebron.webp",
    },
    {
      title: "Best Coding Challenge",
      desc: "Our team excelled in a nationwide coding challenge.",
      imgSrc: "/placeholders/gasp.png",
    },
    {
      title: "Open Source Contributor",
      desc: "Contributed to multiple high-profile open-source projects.",
      imgSrc: "/projects/lebron.webp",
    },
  ];

  // Creative-focused achievements
  const creativeAchievements = [
    {
      title: "Best Design Sprint",
      desc: "Our team’s design sprint was awarded best design by the judges.",
      imgSrc: "/placeholders/gasp.png",
    },
    {
      title: "Top Creative Pitch",
      desc: "Awarded for the most creative pitch in our startup accelerator.",
      imgSrc: "/projects/lebron.webp",
    },
    {
      title: "Visual Storytelling Award",
      desc: "Recognized for exceptional visual storytelling in our campaign.",
      imgSrc: "/placeholders/gasp.png",
    },
    {
      title: "Innovation in UX",
      desc: "Awarded for creative UX solutions in our product designs.",
      imgSrc: "/projects/lebron.webp",
    },
  ];

  // Choose which array to display based on theme
  const awardsToShow = currentTheme === "dark" ? developerAwards : creativeAchievements;

  return (
    <div className="flex flex-col items-center mt-80">
      <SectionTitle>Achievements & Awards</SectionTitle>

      <div className={`w-[70vw] h-[60vh] min-h-125 flex ${GAP}`}>
        {/* LEFT */}
        <div className="w-1/2">
          <BentoBox {...awardsToShow[0]} />
        </div>

        {/* RIGHT */}
        <div className={`w-1/2 flex flex-col ${GAP}`}>
          {/* Top */}
          <div className="flex-1">
            <BentoBox {...awardsToShow[1]} />
          </div>

          {/* Bottom */}
          <div className={`flex flex-1 ${GAP}`}>
            <div className="flex-1">
              <BentoBox {...awardsToShow[2]} />
            </div>
            <div className="flex-1">
              <BentoBox {...awardsToShow[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;