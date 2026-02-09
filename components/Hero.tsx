'use client'

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useTheme } from "@/context/ThemeContext";

const Hero = () => {
  const { currentTheme, setTheme } = useTheme();
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    fetch("/words.txt")
      .then((res) => res.text())
      .then((data) =>
        setWords(
          data
            .split("\n")
            .map((w) => w.trim())
            .filter(Boolean)
        )
      )
      .catch(() => setWords(["a student"])); // fallback
  }, []);

  const typedText = useTypewriter(words, 100, 3000);

  return (
    <div className="py-60 flex flex-col items-center gap-30 text-xl">
      <div className="w-full max-w-6xl">
        <p className="text-left pl-24 m-0 -mb-6">
          <span className="wave">👋</span>, my name is
        </p>
        <h1
          className="font-black text-9xl tracking-[-8] text-center m-0"
          style={{ transform: "scaleY(0.8)" }}
        >
          ANDRE CAMERINO
        </h1>
        <p className="text-right pr-16 m-0 -mt-6">
          and I&apos;m <span className="font-bold">{typedText}</span> based in New
          Zealand
        </p>
      </div>

      <div className="flex gap-16">
        <Button onClick={() => setTheme("dark")} variant={(currentTheme === 'light' ? 'secondary' : 'primary')}>
          I&apos;m looking for a developer
        </Button>
        <Button onClick={() => setTheme("light")} variant={(currentTheme === 'dark' ? 'secondary' : 'primary')}>
          I&apos;m looking for a creative
        </Button>
      </div>
    </div>
  );
};

export default Hero;