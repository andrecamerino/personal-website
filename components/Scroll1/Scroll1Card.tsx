import React from "react";
import { glass } from "@/styles/glass";
import Image from "next/image";

interface Scroll1CardProps {
  text: React.ReactNode,
  alt?: string,
  imgSrc?: string
}

const Scroll1Card: React.FC<Scroll1CardProps> = ({text, alt, imgSrc,}) => {
  return (
    <div
      className={`${glass} flex flex-row gap-8 items-center rounded-2xl px-12 py-2 mr-10`}
    >
      {imgSrc ? <Image
        src={imgSrc}
        alt={alt ? alt : "image"}
        width={60}
        height={60}
        className="rounded-2xl object-cover"
      /> : ''}
      <p className="font-bold text-lg">{text}</p>
    </div>
  );
};

export default Scroll1Card;
