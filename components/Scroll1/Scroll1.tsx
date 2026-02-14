import Scroll1Card from "./Scroll1Card";
import Marquee from "react-fast-marquee";
import SectionTitle from "../SectionTitle";
import { useTheme } from "@/context/ThemeContext";

const Scroll1 = () => {
  const { currentTheme } = useTheme();

  const techStacks = [
    { text: "Lebron", alt: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "Legoat", alt: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "LeGlaze", alt: "Lebron", imgSrc: "/projects/lebron.webp" },
  ];

  const creativeDeliverables = [
    { text: "Lebron", alt: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "Lebron", alt: "Lebron", imgSrc: "/projects/lebron.webp" },
    { text: "Lebron", alt: "Lebron", imgSrc: "/projects/lebron.webp" },
  ];

  const content = currentTheme === "dark" ? techStacks : creativeDeliverables;

  // Offset version (rotate array by 1)
  const offsetContent = [...content.slice(2), content[0]];

  return (
    <div className="flex flex-col items-center mt-60 lg:mt-80 gap-2">
      <SectionTitle>
        {currentTheme === "dark" ? "Tech Stack" : "Common Deliverables"}
      </SectionTitle>

      {/* Top marquee - always visible */}
      <Marquee direction="right" speed={26} autoFill pauseOnHover>
        {content.map((e, i) => (
          <Scroll1Card key={i} text={e.text} imgSrc={e.imgSrc} />
        ))}
      </Marquee>

      {/* Bottom marquee - small screens only */}
      <div className="block lg:hidden w-full">
        <Marquee direction="left" speed={22} autoFill pauseOnHover>
          {offsetContent.map((e, i) => (
            <Scroll1Card key={i} text={e.text} imgSrc={e.imgSrc} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Scroll1;