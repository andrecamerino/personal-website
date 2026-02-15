import { achievements } from "@/data/achievements";
import { useTheme } from "@/context/ThemeContext";
import BentoBox from "@/components/Bento/BentoBox";
import SectionTitle from "@/components/SectionTitle";

const BentoGrid = () => {
  const GAP = "gap-6"; // your gap variable
  const { currentTheme } = useTheme();
  const achievementsToShow =
    currentTheme === "dark" ? achievements.developer : achievements.creative;

  return (
    <div className="flex flex-col items-center mt-80">
      <SectionTitle>Achievements & Awards</SectionTitle>

      <div
        className={`flex flex-col sm:flex-row w-[90vw] sm:w-[70vw] h-auto sm:h-[60vh] min-h-125 box-border ${GAP}`}
      >
        {/* LEFT / TOP */}
        <div className="w-full sm:w-1/2 shrink-0 min-h-0">
          <BentoBox {...achievementsToShow[0]} />
        </div>

        {/* RIGHT / OTHER */}
        <div className={`w-full sm:w-1/2 flex flex-col min-h-0 ${GAP}`}>
          {/* Second box */}
          <div className="w-full min-h-0">
            <BentoBox {...achievementsToShow[1]} />
          </div>

          {/* Last two boxes side by side on small devices */}
          <div className={`flex flex-row w-full min-h-0 ${GAP}`}>
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
