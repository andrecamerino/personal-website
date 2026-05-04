export type SocialVisibility = "always" | "dark" | "light";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
  visibility: SocialVisibility;
}

export const socialLinks: SocialLink[] = [
  { id: "phone",     label: "Phone",     href: "tel:+640275314977",              icon: "FaPhone",     visibility: "always" },
  { id: "email",     label: "Email",     href: "mailto:camerinoandre@gmail.com", icon: "FaEnvelope",  visibility: "always" },
  { id: "linkedin",  label: "LinkedIn",  href: "https://www.linkedin.com/in/andre-camerino-3504912a4/", icon: "FaLinkedin", visibility: "dark" },
  { id: "github",    label: "GitHub",    href: "https://github.com/andrecamerino",                      icon: "FaGithub",   visibility: "dark" },
  { id: "tiktok",    label: "TikTok",    href: "https://www.tiktok.com/@andrecamerino?_r=1&_t=ZS-93snsifz7Fl", icon: "FaTiktok",   visibility: "light" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/andrecamerino_?igsh=ZXgzN3R1MW83bGVz&utm_source=qr", icon: "FaInstagram", visibility: "light" },
];
