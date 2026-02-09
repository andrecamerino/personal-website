import React from "react";
import Scroll1Card from "./Scroll1Card";
import Marquee from "react-fast-marquee";
import SectionTitle from "../SectionTitle";
import { useTheme } from "@/context/ThemeContext";

const Scroll1 = () => {
  const { currentTheme } = useTheme();

  const techStacks = [
    { text: "Lebron", alt: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "Lebron", alt: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "Lebron", alt: "Lebron", imgSrc: "/projects/lebron.webp" },
  ];

  const creativeDeliverables = [
	{ text: "Lebron", alt: "Lebron", imgSrc: "" },
	{ text: "Lebron", alt: "Lebron", imgSrc: "" },
	{ text: "Lebron", alt: "Lebron", imgSrc: "" },
  ];

  const content = currentTheme === 'dark' ? techStacks : creativeDeliverables;

  return (
    <div className="flex flex-col items-center mt-50">
      <SectionTitle>
        {currentTheme === "dark" ? "Tech Stack" : "Common Deliverables"}
      </SectionTitle>
      <Marquee direction="right" speed={20} autoFill pauseOnHover>
        {content.map((e, i) => (
			<Scroll1Card key={i} text={e.text} imgSrc={e.imgSrc} />
		))}
      </Marquee>
    </div>
  );
};

export default Scroll1;
