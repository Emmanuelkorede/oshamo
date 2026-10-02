"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { Menu } from "./Menu";
import { menuLinks as navItems } from "@/lib/utils/menuLinks";
import { Logo } from "@/components/ui/Logo";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for Active Section Tracking
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = navItems
      .map((item) => item.href.split("#")[1])
      .filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-5 sm:top-6 md:px-10 pointer-events-none">
        
        {/* LEFT ISLAND: Logo Pod */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto z-50 flex items-center rounded-full border border-border/60 bg-surface/70 px-5 py-2.5 backdrop-blur-xl shadow-xl shadow-black/40 transition-all duration-300 hover:border-accent/40",
            isScrolled ? "bg-surface/90 border-border/80" : ""
          )}
        >
          <Logo onClick={() => isMenuOpen && setIsMenuOpen(false)} />
        </motion.div>

        {/* RIGHT ISLAND (DESKTOP): Navigation Links Pod */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onMouseLeave={() => setHoveredSection(null)}
          className={cn(
            "pointer-events-auto hidden items-center gap-1 rounded-full border border-border/60 bg-surface/70 p-1.5 backdrop-blur-xl shadow-xl shadow-black/40 md:flex transition-all duration-300 hover:border-accent/40",
            isScrolled ? "bg-surface/90 border-border/80" : ""
          )}
        >
          {navItems.map((item) => {
            const sectionId = item.href.split("#")[1];
            const isActive = isHomePage && activeSection === sectionId;
            const isHovered = hoveredSection === sectionId;
            const isPillActive = isHovered || (isActive && !hoveredSection);
            const targetHref = isHomePage ? `#${sectionId}` : item.href;

            return (
              <Link
                key={item.label}
                href={targetHref}
                onMouseEnter={() => setHoveredSection(sectionId)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors duration-200 z-10",
                  isActive || isHovered
                    ? "text-background font-bold"
                    : "text-muted hover:text-foreground"
                )}
              >
                {item.label}

                {/* Animated Pill Background */}
                {isPillActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-cta shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </motion.nav>

        {/* RIGHT ISLAND (MOBILE): Hamburger Button */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto z-50 md:hidden"
        >
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-border/60 bg-surface/70 backdrop-blur-xl shadow-xl shadow-black/40 transition-colors hover:border-cta",
              isMenuOpen ? "border-cta bg-surface/90" : ""
            )}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-5 bg-foreground transition-all"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="block h-[2px] w-3 self-end mr-3 bg-cta transition-all"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-5 bg-foreground transition-all"
            />
          </button>
        </motion.div>
      </header>

      {/* Mobile Overlay Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}