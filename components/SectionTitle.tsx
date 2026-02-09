import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-2xl font-medium tracking-tighter scale-y-[0.9] mb-20">
      {children}
    </h1>
  );
};

export default SectionTitle;
