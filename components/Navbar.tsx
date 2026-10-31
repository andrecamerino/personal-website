"use client";
import Button from "./Button";
import { scrollToSection } from "@/utils/scrollToSection";
import { useMode } from "@/context/ModeContext";

const Navbar = () => {
  const { isDev, setMode } = useMode();
  
  const emoji = isDev ? "</>" : "📸";
  
  const handleEmojiButton = () => {
    setMode(isDev ? "creative" : "developer");
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
