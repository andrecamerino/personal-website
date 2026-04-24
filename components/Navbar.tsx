"use client";

import Button from "./Button";
import { scrollToSection } from "@/utils/scrollToSection";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
    const { currentTheme } = useTheme();
    const emoji = currentTheme == "dark" ? "</>" : "📸"
  return (
    <div className="h-16 flex justify-between items-center px-4">
      <p className="text-2xl">{emoji}</p>
      <Button
        className="group"
        variant="primary"
        onClick={() => scrollToSection("contact")}
      >
        Get In Touch&nbsp;<span className="hidden group-hover:block"> 📬</span>
        <span className="block group-hover:hidden"> 📭</span>
      </Button>
    </div>
  );
};

export default Navbar;
