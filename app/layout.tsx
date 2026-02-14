import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Andre Camerino's Website",
  description: "Andre Camerino's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased scroll-smooth bg-(--color-secondary)`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
