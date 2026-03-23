import { achievements } from "@/data/achievements";
import { useTheme } from "@/context/ThemeContext";
import BentoBox from "@/components/Bento/BentoBox";
import SectionTitle from "@/components/SectionTitle";

const BentoGrid = () => {
  const { currentTheme } = useTheme();
  const achievementsToShow =
    currentTheme === "dark" ? achievements.developer : achievements.creative;

  return (
    <div className="flex flex-col items-center mt-80">
      <SectionTitle>Achievements & Awards</SectionTitle>

      <div className="w-[90vw] sm:w-[70vw] max-w-360 max-h-180 flex flex-col lg:flex-row gap-6 lg:h-[65vh]">
        
        {/* Big left box — fixed width on lg */}
        <div className="lg:w-1/2 h-64 lg:h-full">
          <BentoBox {...achievementsToShow[0]} />
        </div>

        {/* Right column — flex column so children fill height */}
        <div className="flex flex-col gap-6 lg:w-1/2 lg:h-full">
          
          {/* Top right */}
          <div className="flex-1 min-h-0">
            <BentoBox {...achievementsToShow[1]} />
          </div>

          {/* Bottom right split */}
          <div className="flex flex-row gap-6 flex-1 min-h-0">
            <div className="flex-1 min-h-0">
              <BentoBox {...achievementsToShow[2]} />
            </div>
            <div className="flex-1 min-h-0">
              <BentoBox {...achievementsToShow[3]} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
