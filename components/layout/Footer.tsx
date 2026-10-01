import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        {/* Giant Artist Branding */}
        <div className="mb-12 border-b border-border pb-12">
          <h2 className="font-anton text-7xl tracking-wider text-foreground sm:text-9xl lg:text-[12rem] leading-none">
            OSHAM0
          </h2>
          <p className="mt-4 text-xs font-mono tracking-widest uppercase text-accent">
            AFRO-FUSION / ALTÉ — LAGOS TO LONDON
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Unofficial Concept Notice */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">
              Project Info
            </span>
            <p className="text-sm text-muted leading-relaxed">
              This website is an unofficial fan-made concept and portfolio project created to showcase modern web design, motion, and visual identity for OSHAM0.
            </p>
          </div>

          {/* Column 2: Developer Credits */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">
              Built By
            </span>
            <p className="text-base font-semibold text-foreground">
              Job Emmanuel
            </p>
            <p className="text-xs text-muted">
              Senior Frontend Engineer & Visual Designer
            </p>
          </div>

          {/* Column 3: Developer Links */}
          <div className="flex flex-col gap-3 lg:items-end">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">
              Connect
            </span>
            <ul className="flex flex-col gap-2 lg:items-end font-mono text-sm">
              <li>
                <a
                  href="https://github.com/PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta hover:text-cta-hover transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://portfolio.PLACEHOLDER.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta hover:text-cta-hover transition-colors"
                >
                  Portfolio ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:placeholder@example.com"
                  className="text-cta hover:text-cta-hover transition-colors"
                >
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs font-mono text-muted sm:flex-row">
          <p>© 2026 OSHAM0. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#hero" className="hover:text-foreground transition-colors">
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}