"use client";

import { descriptiveWords as words } from "@/data/descriptiveWords";
import Button from "./Button";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useTheme } from "@/context/ThemeContext";

const Hero = () => {
  const { currentTheme, setTheme } = useTheme();
  const typedText = useTypewriter(words, 100, 3000);

  return (
    <div className="lg:my-60 my-40 flex flex-col items-center gap-30 text-xl">
      <div className="w-full max-w-6xl">
        <p className="text-right lg:text-left lg:pl-24 lg:pr-0 pr-16 m-0 -mb-6">
          <span className="wave">👋</span>, my name is
        </p>
        <h1
          className="font-black m-0 flex flex-col lg:flex-row items-center justify-center"
          style={{ transform: "scaleY(0.8)" }}
        >
          <div className="lg:text-9xl lg:tracking-[-8] text-8xl tracking-[-8] text-center">
            ANDRE
          </div>

          <div className="lg:text-9xl lg:tracking-[-8] text-7xl tracking-[-6] text-center lg:ml-4">
            CAMERINO
          </div>
        </h1>
        <p className="lg:text-right lg:pr-16 pl-10 m-0 lg:-mt-6 -mt-4">
          and I&apos;m <span className="font-bold">{typedText}</span>
          <br className="lg:hidden" /> based in New Zealand 🇳🇿
        </p>
      </div>

      <div className="flex lg:flex-row flex-col lg:gap-16 gap-4">
        <Button
          className="group"
          onClick={() => setTheme("dark")}
          variant={currentTheme === "light" ? "secondary" : "primary"}
        >
          I&apos;m looking for a developer &nbsp;
          <span className="hidden group-hover:inline">🔋</span>
          <span className="inline group-hover:hidden">🪫</span>
        </Button>
        <Button
          className="group"
          onClick={() => setTheme("light")}
          variant={currentTheme === "dark" ? "secondary" : "primary"}
        >
          I&apos;m looking for a creative &nbsp;
          <span className="hidden group-hover:inline">📸</span>
          <span className="inline group-hover:hidden">📷</span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
