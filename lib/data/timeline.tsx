import React from "react";
import { MapPin, Radio, Sparkles, Disc3, Music2, Compass } from "lucide-react";

export interface TimelineEvent {
  year: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlight?: string;
  icon: React.ReactNode;
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: "AGE 14–16",
    tag: "LAGOS ORIGINS",
    title: "Agege Roots & Early Spark",
    subtitle: "Lagos, Nigeria",
    description:
      "Began crafting music at age 14 in Agege, Lagos. Heavily influenced by fuji icons like Ayinde Barrister and Afrobeats titans Fela Kuti, Wizkid, and Burna Boy.",
    highlight: "Deep Fuji & Yoruba cultural foundation",
    icon: <MapPin size={18} />,
  },
  {
    year: "LOCKDOWN",
    tag: "UK MOVE",
    title: "The London Migration",
    subtitle: "London, UK",
    description:
      "Relocated to the UK at 16. Built an organic digital presence during lockdown, previewing soundbites that bridged Lagos energy with UK culture.",
    highlight: "Early viral TikTok soundbites",
    icon: <Radio size={18} />,
  },
  {
    year: "2023",
    tag: "BREAKTHROUGH",
    title: "'Why You Lying' Viral Explosion",
    subtitle: "Global Viral Drop",
    description:
      "Broke through globally with the viral hit 'Why You Lying', establishing his signature baritone bass voice and raw storytelling.",
    highlight: "Over millions of organic streams",
    icon: <Sparkles size={18} />,
  },
  {
    year: "2024",
    tag: "EMPAWA AFRICA",
    title: "EP Launch & Street Anthems",
    subtitle: "Signed to emPawa Africa",
    description:
      "Signed to Mr Eazi's emPawa Africa. Dropped 'oSha-Piano' and 'Life of the Party'—driving 7,000+ TikTok videos—followed by the debut EP 'First of My Kind'.",
    highlight: "First of My Kind EP",
    icon: <Disc3 size={18} />,
  },
  {
    year: "2025",
    tag: "HEADLINE & ALBUM",
    title: "Superfuji & Royal Albert Hall",
    subtitle: "London → Lagos Return",
    description:
      "Released 'Superfuji (GOBE)' and the 'I D R I S' album. Sold out his debut London headline show at 229, performed at Royal Albert Hall, and returned to Lagos in November.",
    highlight: "Sold Out 229 Headline Show",
    icon: <Music2 size={18} />,
  },
  {
    year: "2026",
    tag: "THE ALBUM ERA",
    title: "Fuji for the New Generation",
    subtitle: "Shazam Fast Forward 2026",
    description:
      "Named to Shazam's Fast Forward 2026 list, crossing 25M+ streams. Re-centered in Nigeria to create his upcoming cultural flagship album.",
    highlight: "25M+ Global Streams // 500k+ Monthly Listeners",
    icon: <Compass size={18} />,
  },
];