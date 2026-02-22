import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { FullscreenProvider } from "@/context/FullscreenContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Andre Camerino's Website",
  description: "Andre Camerino's Personal Website",
  icons: {
    icon: "/icons/icon.png",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased scroll-smooth bg-(--color-secondary)`}
      >
        <ThemeProvider>
          <FullscreenProvider>{children}</FullscreenProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
