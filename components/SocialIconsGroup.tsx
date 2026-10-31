"use client";

import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTiktok, FaInstagram } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { useMode } from "@/context/ModeContext";
import { socialLinks, SocialLink } from "@/data/socialLinks";
import SocialIconButton from "./SocialIconButton";

const iconMap: Record<string, IconType> = {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaInstagram,
};

interface SocialIconsGroupProps {
  layout?: "row" | "column" | "grid";
  iconSize?: number;
  className?: string;
}

const SocialIconsGroup: React.FC<SocialIconsGroupProps> = ({
  layout = "row",
  iconSize = 22,
  className = "",
}) => {
  const { isDev } = useMode();

  const always = socialLinks.filter((l) => l.visibility === "always");
  const devLinks = socialLinks.filter((l) => l.visibility === "developer");
  const creativeLinks = socialLinks.filter((l) => l.visibility === "creative");

  const renderIcon = (link: SocialLink) => (
    <SocialIconButton
      key={link.id}
      href={link.href}
      label={link.label}
      icon={iconMap[link.icon]}
      size={iconSize}
    />
  );

  const usePairLayout = layout === "column" || layout === "grid";

  const containerClass =
    layout === "grid"
      ? "grid grid-cols-2 gap-3 justify-items-start"
      : layout === "column"
      ? "flex flex-col gap-3 items-start"
      : "flex flex-row gap-3";

  return (
    <div className={`${containerClass} ${className}`}>
      {always.map(renderIcon)}

      {usePairLayout ? (
        devLinks.map((dark, i) => {
          const light = creativeLinks[i];
          return (
            <div key={dark.id} className="relative">
              <div
                className={`transition-opacity duration-300 ${isDev ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
              >
                {renderIcon(dark)}
              </div>
              {light && (
                <div
                  className={`transition-opacity duration-300 absolute inset-0 ${isDev ? "opacity-0 pointer-events-none select-none" : "opacity-100"}`}
                >
                  {renderIcon(light)}
                </div>
              )}
            </div>
          );
        })
      ) : (
        <div className="relative flex">
          <div
            className={`flex gap-3 transition-opacity duration-300 ${isDev ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
          >
            {devLinks.map(renderIcon)}
          </div>
          <div
            className={`flex gap-3 transition-opacity duration-300 absolute inset-0 ${isDev ? "opacity-0 pointer-events-none select-none" : "opacity-100"}`}
          >
            {creativeLinks.map(renderIcon)}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialIconsGroup;
