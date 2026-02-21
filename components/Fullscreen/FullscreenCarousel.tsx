"use client";

import { Project } from "@/types/project";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "../Button";
import ArrowNarrowLeftIcon from "../AnimatedIcons/ArrowNarrowLeftIcon";
import ArrowNarrowRightIcon from "../AnimatedIcons/ArrowNarrowRightIcon";

const FullscreenCarousel = ({ project }: { project: Project }) => {
  const images = project.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full flex flex-col gap-6">

      {/* Main Image */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentIndex]}
            className="absolute inset-0"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={`/projects${images[currentIndex]}`}
              alt={project.title}
              fill
              priority
              className="object-cover rounded-3xl"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===== Bottom Section ===== */}

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center gap-6">
        <button
          onClick={prev}
          className="px-4 py-2 rounded-xl shrink-0"
        >
          <Button variant="secondary"><ArrowNarrowLeftIcon/></Button>
        </button>

        <div className="flex gap-4 overflow-x-auto flex-1 p-0.5">
          {images.map((img, index) => (
            <button
              key={img}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-20 w-32 shrink-0 rounded-xl overflow-hidden transition ${
                index === currentIndex
                  ? "ring-2 ring-white"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={`/projects${img}`}
                alt={`${project.title} thumbnail`}
                fill
                className="object-cover"
                sizes="128px"
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          className="px-4 py-2 rounded-xl shrink-0"
        >
          <Button variant="secondary"><ArrowNarrowRightIcon/></Button>
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="flex gap-4 overflow-x-auto p-0.5">
          {images.map((img, index) => (
            <button
              key={img}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-16 w-24 shrink-0 rounded-xl overflow-hidden transition ${
                index === currentIndex
                  ? "ring-2 ring-white"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={`/projects${img}`}
                alt={`${project.title} thumbnail`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={prev}
            className="px-6 py-2 rounded-xl"
          >
            <Button variant="secondary"><ArrowNarrowLeftIcon/></Button>
          </button>

          <button
            onClick={next}
            className="px-6 py-2 rounded-x"
          >
            <Button variant="secondary"><ArrowNarrowRightIcon/></Button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenCarousel;