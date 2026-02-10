"use client";

import Button from "./Button";
import { scrollToSection } from "@/utils/scrollToSection";

const Navbar = () => {
  return (
    <div className="h-16 flex justify-end items-center px-4">
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
