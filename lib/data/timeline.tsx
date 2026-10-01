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
    year: "EARLY ROOTS",
    tag: "LAGOS ORIGINS",
    title: "Agege Roots & Musical Foundation",
    subtitle: "Lagos, Nigeria",
    description:
      "Raised in Agege, Lagos, oSHAMO grew up around the sounds of Fuji, Afrobeat and street culture, with artists such as Wasiu Ayinde and Fela Kuti shaping his musical foundation.",
    highlight: "Yoruba roots. Fuji tradition. Lagos energy.",
    icon: <MapPin size={18} />,
  },
  {
    year: "UK MOVE",
    tag: "LONDON MIGRATION",
    title: "Lagos → London",
    subtitle: "London, UK",
    description:
      "Relocated to the UK at 16 and began building an audience online during lockdown, experimenting with different sounds while finding his place between Lagos and London.",
    highlight: "DIGITAL FOLLOWING",
    icon: <Radio size={18} />,
  },
  {
    year: "2023",
    tag: "BREAKTHROUGH",
    title: "Why You Lying",
    subtitle: "Breakout Single",
    description:
      "His breakout record “Why You Lying” changed the trajectory of his career, taking him from online creator to emerging recording artist and bringing his music to a much wider audience.",
    highlight: "BREAKTHROUGH RECORD",
    icon: <Sparkles size={18} />,
  },
  {
    year: "2024",
    tag: "FINDING FUJI",
    title: "First of My Kind",
    subtitle: "Signed to emPawa Africa",
    description:
      "Signed to emPawa Africa and entering a new chapter, oSHAMO began moving deeper into Fuji-inspired music — eventually developing the sound and identity that would become central to his artistry.",
    highlight: "FIRST OF MY KIND EP",
    icon: <Disc3 size={18} />,
  },
  {
    year: "2025",
    tag: "SUPERFUJI",
    title: "Superfuji & I D R I S",
    subtitle: "Mainstream Evolution",
    description:
      "The SuperFuji identity took shape through new releases including “Superfuji (GOBE)” and the album “I D R I S”, pushing his Fuji-inspired sound further into the mainstream.",
    highlight: "SUPERFUJI ERA",
    icon: <Music2 size={18} />,
  },
  {
    year: "2026",
    tag: "THE NEXT ERA",
    title: "Fuji for the New Generation",
    subtitle: "Global Reach",
    description:
      "Named among Shazam's Fast Forward 2026 artists, oSHAMO enters a new chapter focused on pushing his Fuji-rooted sound to an even wider audience.",
    highlight: "SHAZAM FAST FORWARD '26",
    icon: <Compass size={18} />,
  },
];