import React from "react";
import { glass } from "@/styles/glass";

const BentoBox = ({ image = "/projects/lebron.webp" }) => {
  return (
    <div className={`${glass} relative w-full h-full overflow-hidden rounded-3xl`}>
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          opacity: 0.6, // control only the image opacity
        }}
      />

      {/* Glass overlay content */}
      <div className="relative flex items-end w-full h-full p-8">
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default BentoBox;