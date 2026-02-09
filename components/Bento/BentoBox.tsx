import React from "react";
import { glass } from "@/styles/glass";

interface BentoBoxProps {
  title: string;
  desc: string;
  imgSrc: string;
  maxTitleLength?: number;
  maxDescLength?: number;
}

const BentoBox: React.FC<BentoBoxProps> = ({
  title = '',
  desc = '',
  imgSrc,
  maxTitleLength = 50,
  maxDescLength = 100,
}) => {
  const truncatedTitle =
    title.length > maxTitleLength ? title.slice(0, maxTitleLength) + "..." : title;

  const truncatedDesc =
    desc.length > maxDescLength ? desc.slice(0, maxDescLength) + "..." : desc;

  return (
    <div
      className={`${glass} relative w-full h-full overflow-hidden rounded-3xl group`}
    >
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-20 group-hover:opacity-30"
        style={{ backgroundImage: `url(${imgSrc})` }}
      />

      {/* Glass overlay content */}
      <a className="relative flex flex-col justify-start items-start w-full h-full p-8">
        {/* Title */}
        <h1
          className="text-4xl font-medium tracking-tighter drop-shadow-lg"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          {truncatedTitle}
        </h1>

        {/* Description */}
        <h1
          className="text-lg drop-shadow-lg transform -translate-y-20 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 mt-2"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          {truncatedDesc}
        </h1>
      </a>
    </div>
  );
};

export default BentoBox;