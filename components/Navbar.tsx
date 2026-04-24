"use client";
import Button from "./Button";
import { scrollToSection } from "@/utils/scrollToSection";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { currentTheme, setTheme } = useTheme();
  
  const emoji = currentTheme === "dark" ? "</>" : "📸";
  
  const handleEmojiButton = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-16 flex justify-between items-center px-4 fixed top-0 left-0 w-full z-50">
      <button 
        onClick={handleEmojiButton} 
        className="l-1 text-2xl hover:cursor-pointer"
      >
        {emoji}
      </button>
      
      <Button 
        className="group variant-primary" 
        onClick={() => scrollToSection("contact")}
      >
        Get In Touch&nbsp;
        <span className="hidden group-hover:block">📬</span>
        <span className="block group-hover:hidden">📭</span>
      </Button>
    </div>
  );
};

export default Navbar;
