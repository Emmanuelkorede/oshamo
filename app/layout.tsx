import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSHAMO —  Artist Website",
  description: "A fan-made artist website concept for oSHAMO, built as a portfolio project to explore immersive music experiences, visual storytelling, responsive design, and interactive frontend development. The concept brings his music, latest releases, visuals, and artist identity into one digital experience.",
};

export default function RootLayout({ children }: Readonly<{children : React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
