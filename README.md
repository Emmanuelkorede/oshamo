<div align="center">

# 🎵 OSHAMO | Unofficial Fan-Made Web Experience
<img width="1894" height="841" alt="Screenshot 2026-10-02 181147" src="https://github.com/user-attachments/assets/c4534a77-72e0-4eaf-a6d8-d3b82366faf1" />

An interactive digital portfolio and web experience celebrating **OSHAMO**, a rising artist bridging West African roots with the global alté movement (Lagos ⇄ London). Built to showcase his Fuji-fusion sound using a custom dark-mode, glassmorphic UI, interactive 3D typography depth, and responsive audio/video interfaces.

![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/Status-Fan--Made_Concept-orange)

**[🌐 Live Demo](https://oshamo.vercel.app/)**

</div>

---

> ⚠️ **Disclaimer:** This is an unofficial, fan-made concept project built purely as a design exploration and tribute to oSHAMO. It is **not affiliated with, maintained by, or officially connected to OSHAMO or his management team**.

## 📑 Table of Contents

- [Tech Stack](#-tech-stack)
- [Core Features & Architecture](#-core-features--architecture)
- [Getting Started](#️-getting-started)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [License & Attribution](#-license--attribution)

## 🚀 Tech Stack

| Category     | Technology                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| Framework    | [Next.js](https://nextjs.org/) (App Router)                                 |
| Library      | [React 18](https://react.dev/)                                              |
| Styling      | [Tailwind CSS](https://tailwindcss.com/)                                    |
| Animations   | [Framer Motion](https://www.framer.com/motion/) & CSS Keyframes             |
| Icons        | [Lucide React](https://lucide.dev/)                                         |
| Components   | Custom UI library (Reveal animations, Eyebrows, Glass Buttons, Social Icons) |

## ✨ Core Features & Architecture

### 1. 3D Layered Hero Section
`components/sections/Hero/Hero.tsx` & `HeroBackground.tsx`

- **Layered Typography Depth:** Uses a 3-tier "sandwich technique" combining a solid background text, a transparent PNG cutout of the artist (`oshamo-second.png`), and a stroked outline overlay (`-webkit-text-stroke`) to place the artist inside the typography.
- **Ambient Motion Glows:** Powered by Framer Motion to create smooth, breathing radial mesh gradients in the background without affecting UI performance.
- **Responsive Viewport Scaling:** Dynamic font sizing (`text-[22vw]` on mobile down to `md:text-[12vw]` on desktop) with controlled image container max-widths to maintain clean proportions on all screens.

### 2. Interactive Release Card
`components/sections/LatestRelease/LatestRelease.tsx` & `ReleaseFlipCard.tsx`

- **3D Flip Interaction:** A hardware-accelerated 180° card flip mechanism allowing visitors to toggle between the active Spotify player embed and the story behind the track.
- **Locked Aspect Ratio:** Strict pixel height bounds (352px) eliminate trailing white space below embedded media.

### 3. Sonic Architecture & Story
`components/sections/Story/Story.tsx`

- **Bento Grid Summary:** A 3-card grid highlighting his Sound Blueprint (Fuji × Afrobeats × Amapiano), Sonic Signature, and career statistics.
- **Interactive Timeline:** A horizontal archive tracking his musical evolution from Lagos to the UK.

### 4. Discography & Catalogue
`components/sections/Discography/Discography.tsx`

- **Dynamic Priority Sorting:** Automatically moves highlighted releases (`isFeatured: true`) to the top row.
- **Asymmetric Card Layout:** Featured drops render in high-visibility 352px cards while standard catalogue items fit in compact 152px rows.

### 5. Video Archive & Modal
`components/sections/Videos/Videos.tsx`, `ui/VideoCard.tsx`, `ui/VideoModal.tsx`

- **State-Driven Filtering:** Client-side grid filtering by category.
- **Accessible Modal Overlay:** Fullscreen video player supporting backdrop click-to-close, keyboard accessibility (Enter/Space), and Esc key dismissal.

### 6. Digital Footprint
`components/sections/Socials/Socials.tsx`

- **Adaptive Grid Layout:** Displays links to oSHAMO's public social platforms across a responsive 5-column desktop layout.
- **Micro-Interactions:** Subtle directional arrow translation, backdrop blur hover triggers, and scaled background brand icons.

### 7. Site Shell & UX Layer
`components/layout/`

- **Custom Cursor:** `Cursor.tsx` — a bespoke pointer replacement for an immersive feel.
- **Preloader:** `Preloader.tsx` — a loading sequence shown before the site renders.
- **Navigation & Menu:** `Nav.tsx` and `Menu.tsx` — persistent site navigation and an expandable menu overlay.
- **Footer:** `Footer.tsx` — closing site section with supplementary links.

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **pnpm**, or **yarn**

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Emmanuelkorede/oshamo.git
cd oshamo
```

**2. Install dependencies**

```bash
npm install
```

**3. Run the local development server**

```bash
npm run dev
```

**4. View in browser**

Open [http://localhost:3000](http://localhost:3000) to see the site running locally.

## 📁 Project Structure

```text
oshamo
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── opengraph-image.png
│   └── page.tsx
├── components
│   ├── layout
│   │   ├── Cursor.tsx
│   │   ├── Footer.tsx
│   │   ├── Menu.tsx
│   │   ├── Nav.tsx
│   │   └── Preloader.tsx
│   ├── sections
│   │   ├── Discography
│   │   │   └── Discography.tsx
│   │   ├── Hero
│   │   │   ├── Hero.tsx
│   │   │   └── HeroBackground.tsx
│   │   ├── LatestRelease
│   │   │   ├── LatestRelease.tsx
│   │   │   └── ReleaseFlipCard.tsx
│   │   ├── Socials
│   │   │   └── Socials.tsx
│   │   ├── Story
│   │   │   └── Story.tsx
│   │   └── Videos
│   │       └── Videos.tsx
│   └── ui
│       ├── BentoCard.tsx
│       ├── Button.tsx
│       ├── Eyebrow.tsx
│       ├── Logo.tsx
│       ├── OshamoText.tsx
│       ├── Reveal.tsx
│       ├── SocialIcons.tsx
│       ├── VideoCard.tsx
│       └── VideoModal.tsx
├── eslint.config.mjs
├── lib
│   ├── data
│   │   ├── SocialLinks.tsx
│   │   ├── gallery.ts
│   │   ├── timeline.tsx
│   │   ├── tracks.ts
│   │   └── videos.ts
│   ├── hooks
│   │   └── useMediaQuery.ts
│   └── utils
│       ├── cn.ts
│       ├── format.ts
│       └── menuLinks.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── oshamo-second.png
│   ├── oshamo.png
│   ├── vercel.svg
│   └── window.svg
└── tsconfig.json
```

## 🎨 Design System

**Theme:** Dark Mode (`bg-background`, `bg-surface`) — `color-scheme: dark` enforced at the root.

**Color Tokens** (`@theme` in `globals.css`):

| Token | Hex | Usage |
| --- | --- | --- |
| `--color-background` | `#0A0B0E` | Page background |
| `--color-surface` | `#14171F` | Section surfaces |
| `--color-card` | `#1B1E28` | Card backgrounds |
| `--color-foreground` | `#F3ECE1` | Primary text |
| `--color-muted` | `#A39B91` | Secondary/muted text |
| `--color-accent` | `#C28B5E` | Accent highlights, selection color |
| `--color-cta` | `#DDB681` | Call-to-action elements |
| `--color-cta-hover` | `#F0C48A` | CTA hover state |
| `--color-border` | `#252833` | Borders, scrollbar thumb |

**Glassmorphic Tokens:** `bg-card/40`, `backdrop-blur-xl`, `border-border/50`

**Typography:**

| Token | Font | Usage |
| --- | --- | --- |
| `font-anton` | Anton | High-impact display headlines (`h1`–`h6` by default, `font-normal tracking-wide`) |
| `font-space` | Space Grotesk | Standard body text and narratives |

> Note: `font-mono` was referenced in earlier docs for technical metadata/eyebrows/tags, but the current theme only defines `--font-anton` and `--font-space` as font hooks.

**Animations:**

| Animation | Duration / Easing | Purpose |
| --- | --- | --- |
| `animate-marquee` | `20s linear infinite` | Horizontal scrolling ticker |
| `animate-reveal` | `0.8s cubic-bezier(0.16, 1, 0.3, 1)` | Scroll/entrance reveal effect |
| `animate-fade-in` | `0.5s ease-out` | Simple fade-in on mount |
| `grain` | `8s steps(10) infinite` | Procedural film-grain texture loop |

**Custom Utilities:**

- `.bg-grain` — layers an animated SVG noise texture (`feTurbulence`) over an element for a subtle film-grain finish.
- `.clip-arch` — clips an element into an arch/dome shape (`ellipse(60% 100% at 50% 100%)`).
- `.clip-cut-corner` — clips a 32px corner notch out of the bottom-right edge, polygon-based.

**UX & Accessibility Details:**

- **Custom scrollbar:** 6px thin scrollbar styled with `--color-border`, brightening to `--color-muted` on hover.
- **Custom selection color:** highlighted text uses `--color-accent` on `--color-background`.
- **Custom cursor:** native cursor is hidden on fine-pointer devices (`@media (pointer: fine)`) in favor of the custom `Cursor.tsx` component.
- **Reduced motion support:** all animations, transitions, and scroll behavior collapse to near-instant under `prefers-reduced-motion: reduce`, in line with accessibility best practices.

## 📄 License & Attribution

This is a non-commercial fan project created for educational and portfolio purposes only. All rights to the name, likeness, music, and brand of **oSHAMO** belong to the artist and his official representatives. This repository contains no official media, assets, or music files belonging to the artist.
