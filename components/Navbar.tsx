"use client";

import Button from "./Button";
import { scrollToSection } from "@/utils/scrollToSection";

const Navbar = () => {
  return (
    <div className="h-16 flex justify-end items-center px-4">
      <Button variant="primary" onClick={() => scrollToSection("contact")}>
        Get In Touch
      </Button>
    </div>
  );
};

export default Navbar;
