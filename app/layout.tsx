import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";
import React from "react";

const anton = Anton({ weight: "400", variable: "--font-anton", subsets: ["latin"] });
const space = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });



export const metadata: Metadata = {
  title: "OSHAMO —  Artist Website",
  description: "A fan-made artist website concept for oSHAMO, built as a portfolio project to explore immersive music experiences, visual storytelling, responsive design, and interactive frontend development. The concept brings his music, latest releases, visuals, and artist identity into one digital experience.",
};

export default function RootLayout({ children }: Readonly<{children : React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${space.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
