import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";
import React from "react";

import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { Nav } from "@/components/layout/Nav";
import { Cursor } from "@/components/layout/Cursor";

import { Analytics } from "@vercel/analytics/next";


const anton = Anton({ weight: "400", variable: "--font-anton", subsets: ["latin"] });
const space = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });



export const metadata: Metadata = {
  metadataBase :  new URL("https://oshamo.vercel.app/") , 

  title: "0SHAMO — Fuji-Fusion Artist | Fan Concept",
  description: "A fan-made artist website concept for oSHAMO, built as a portfolio project to explore immersive music experiences, visual storytelling, responsive design, and interactive frontend development. The concept brings his music, latest releases, visuals, and artist identity into one digital experience.",

  openGraph : {
    title: "0SHAMO — Fuji-Fusion Artist | Fan Concept",
    description: "A fan-made artist website concept for oSHAMO, built as a portfolio project to explore immersive music experiences, visual storytelling, responsive design, and interactive frontend development. The concept brings his music, latest releases, visuals, and artist identity into one digital experience.",
    siteName : "oSHAMO" , 
    type : "website" ,
    locale: "en_US",
    
  } ,
  twitter: {
    card: "summary_large_image",
    title: "0SHAMO — Fuji-Fusion Artist | Fan Concept",
    description:
      "A fan-made artist website concept for oSHAMO, built as a portfolio project to explore immersive music experiences, visual storytelling, responsive design, and interactive frontend development.",
  },
};

export default function RootLayout({ children }: Readonly<{children : React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${space.variable}`}
    >
      <body>
        
        <Cursor />
        <Preloader />
        <Nav />
        
          <main id="main-content">
            {children}
          </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
