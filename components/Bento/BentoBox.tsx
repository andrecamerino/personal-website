import React, { useState } from "react";
import { glass } from "@/styles/glass";
import { useTheme } from "@/context/ThemeContext";
import { truncateText } from "@/utils/truncateText";
import { RevealWrapper } from "../RevealWrapper";

interface BentoBoxProps {
  title: string;
  desc: string;
  imgSrc?: string;
  link?: string;
  maxTitleLength?: number;
  maxDescLength?: number;
}

const BentoBox = ({
  title = "",
  desc = "",
  imgSrc,
  link,
  maxTitleLength = 50,
  maxDescLength = 100,
}: BentoBoxProps) => {
  const { currentTheme } = useTheme();
  const [active, setActive] = useState(false); // mobile click state

  const titleShadow =
    currentTheme === "light"
      ? "2px 2px 8px rgba(255,255,255,0.9)"
      : "2px 2px 8px rgba(0,0,0,0.8)";

  return (
    <div
      className={`${glass} relative w-full h-full overflow-hidden rounded-3xl group`}
      onClick={() => setActive(!active)} // toggle on mobile
    >
      {/* Background image */}
      {imgSrc && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${currentTheme === "dark" ? "opacity-60 group-hover:opacity-30" : "opacity-70 group-hover:opacity-30"}`}
          style={{ backgroundImage: `url(/achievements${imgSrc})` }}
        />
      )}

      {/* Content */}
      <a
        href={link}
        target="_blank"
        className="relative flex flex-col justify-start items-start w-full h-full p-4 sm:p-8 cursor-pointer"
      >
        {/* Title */}
        <RevealWrapper>
          <h1
            className="text-2xl sm:text-4xl font-medium tracking-tighter"
            style={{ textShadow: titleShadow }}
          >
            {truncateText(title, maxTitleLength)}
          </h1>
        </RevealWrapper>

        {/* Description */}
        <h1
          className={`
            text-sm sm:text-lg mt-1 sm:mt-2 
            transform transition-all duration-500 ease-out

            /* MOBILE: click to reveal */
            ${active ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}

            /* LARGE SCREENS: hover animation */
            sm:translate-y-12 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100
          `}
          style={{ textShadow: titleShadow }}
        >
          {truncateText(desc, maxDescLength)}
        </h1>
      </a>
    </div>
  );
};

export default BentoBox;
