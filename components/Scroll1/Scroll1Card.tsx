import React from "react";
import { glass } from "@/styles/glass";
import Image from "next/image";

interface Scroll1CardProps {
  text: React.ReactNode;
  alt?: string;
  imgSrc?: string;
}

const Scroll1Card = ({ text, alt, imgSrc }: Scroll1CardProps) => {
  return (
    <div
      className={`${glass} flex flex-row gap-4 lg:gap-8 items-center rounded-3xl lg:rounded-2xl mb-5 px-6 lg:px-12 py-1.5 lg:py-2 mr-6 lg:mr-10`}
    >
      {imgSrc && (
        <Image
          src={`/scroll-content/techs${imgSrc}`}
          alt={alt ?? "image"}
          width={30}
          height={30}
          className="lg:w-13 lg:h-13 p-2 w-11.25 h-11.25 object-cover"
        />
      )}

      <p className="font-bold text-base lg:text-lg" autoCapitalize="words">{text}</p>
    </div>
  );
};

export default Scroll1Card;
