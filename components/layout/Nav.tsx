"use client";

import  { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Menu } from "./Menu";
import { menuLinks as navItems }from "@/lib/utils/menuLinks";



export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (pathname !== "/") return;

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-xl font-anton tracking-wider text-foreground transition-colors hover:text-cta"
          >
            <span>OSHAM0</span>
            <span className="h-2 w-2 rounded-full bg-accent group-hover:bg-cta" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = isHomePage && activeSection === sectionId;
              const targetHref = isHomePage ? item.href : `/${item.href}`;

              return (
                <Link
                  key={item.label}
                  href={targetHref}
                  className={cn(
                    "text-xs font-mono uppercase tracking-widest transition-colors duration-200 hover:text-cta relative py-1",
                    isActive ? "text-cta font-semibold" : "text-muted"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-cta" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action / Menu Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="#live"
              className="hidden sm:inline-flex items-center justify-center bg-cta px-4 py-2 text-xs font-space font-semibold uppercase tracking-wider text-background hover:bg-cta-hover transition-colors"
            >
              Tour Dates
            </Link>

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center border border-border bg-surface text-foreground hover:border-cta hover:text-cta transition-colors md:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}