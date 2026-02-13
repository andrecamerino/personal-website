import React from "react";
import { glass } from "@/styles/glass";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

interface TestimonialProps {
  name: string;
  role: string;
  rating: number; // 0-5
  text: string;
  imgSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  rating,
  text,
  imgSrc,
}) => {
  // Generate stars
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating ? (
      <FaStar key={i} className="text-(--color-primary)" />
    ) : (
      <FaRegStar key={i} className="text-(--color-primary)" />
    )
  );

  return (
    <div className={`${glass} p-6 w-80 flex flex-col rounded-3xl mr-10 mb-3`}>
      {/* Header */}
      <div className="flex flex-row items-center gap-4 mb-4">
        {/* Forced circular image */}
        <div className="relative w-15 h-15 rounded-full overflow-hidden">
          <Image
            src={"/placeholders/cris.png"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold">{name}</h1>
          <h2 className="text-sm text-gray-500">{role}</h2>
          <div className="flex mt-1">{stars}</div>
        </div>
      </div>

      {/* Text content */}
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Testimonial;