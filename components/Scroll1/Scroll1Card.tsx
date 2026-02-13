import React from "react";
import { glass } from "@/styles/glass";
import Image from "next/image";

interface Scroll1CardProps {
  text: React.ReactNode;
  alt?: string;
  imgSrc?: string;
}

const Scroll1Card: React.FC<Scroll1CardProps> = ({
  text,
  alt,
  imgSrc,
}) => {
  return (
    <div
      className={`${glass} flex flex-row gap-4 lg:gap-8 items-center rounded-3xl lg:rounded-2xl mb-5 px-6 lg:px-12 py-1.5 lg:py-2 mr-6 lg:mr-10`}
    >
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={alt ?? "image"}
          width={50}
          height={50}
          className="lg:w-15 lg:h-15 w-11.25 h-11.25 object-cover"
        />
      ) : null}

      <p className="font-bold text-base lg:text-lg">{text}</p>
    </div>
  );
};

export default Scroll1Card;