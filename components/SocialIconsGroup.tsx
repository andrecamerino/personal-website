"use client";

import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTiktok, FaInstagram } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { useTheme } from "@/context/ThemeContext";
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
  layout?: "row" | "column";
  iconSize?: number;
  className?: string;
}

const SocialIconsGroup: React.FC<SocialIconsGroupProps> = ({
  layout = "row",
  iconSize = 22,
  className = "",
}) => {
  const { currentTheme } = useTheme();
  const isDark = currentTheme === "dark";
  const isLight = !isDark;

  const always = socialLinks.filter((l) => l.visibility === "always");
  const darkLinks = socialLinks.filter((l) => l.visibility === "dark");
  const lightLinks = socialLinks.filter((l) => l.visibility === "light");

  const renderIcon = (link: SocialLink) => (
    <SocialIconButton
      key={link.id}
      href={link.href}
      label={link.label}
      icon={iconMap[link.icon]}
      size={iconSize}
    />
  );

  const isColumn = layout === "column";

  return (
    <div className={`flex ${isColumn ? "flex-col gap-3 items-start" : "flex-row gap-3"} ${className}`}>
      {always.map(renderIcon)}

      {isColumn ? (
        darkLinks.map((dark, i) => {
          const light = lightLinks[i];
          return (
            <div key={dark.id} className="relative">
              <div
                className={`transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
              >
                {renderIcon(dark)}
              </div>
              {light && (
                <div
                  className={`transition-opacity duration-300 absolute inset-0 ${isLight ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
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
            className={`flex gap-3 transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
          >
            {darkLinks.map(renderIcon)}
          </div>
          <div
            className={`flex gap-3 transition-opacity duration-300 absolute inset-0 ${isLight ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
          >
            {lightLinks.map(renderIcon)}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialIconsGroup;
