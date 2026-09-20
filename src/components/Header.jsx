import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/EDRO.png";

const DIVISION_PATHS = [
  "/services",
  "/storage-tanks",
  "/piping-and-pipelines",
  "/steel-structures",
];

export default function Header() {
  const [compact, setCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const divisionsActive = DIVISION_PATHS.includes(pathname);

  const NAV_LINKS = [
    { label: "Home", to: "/", active: pathname === "/" },
    { label: "About", to: "/about", active: pathname === "/about" },
    { label: "Divisions", to: "/services", active: divisionsActive },
    // { label: "Projects", to: "/projects", active: pathname === "/projects" }, // hidden until real project data is ready
    {
      label: "HSE & Quality",
      to: "/hse-quality",
      active: pathname === "/hse-quality",
    },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-line">
      <div
        className={`flex items-center gap-4 lg:gap-8 px-[clamp(20px,4vw,40px)] max-w-[1440px] mx-auto transition-[height] duration-150 ease-linear ${
          compact ? "h-[62px]" : "h-[76px] lg:h-[88px]"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="ERDO Libya"
            className={`block transition-[width,height] duration-150 ease-linear ${
              compact ? "w-[30px] h-[30px]" : "w-[36px] h-[36px] lg:w-[42px] lg:h-[42px]"
            }`}
          />
          <span className="flex flex-col">
            <span className="font-serif text-[16px] lg:text-[18px] tracking-[0.04em] leading-[1.1] text-fg">
              ERDO LIBYA
            </span>
            <span className="hidden sm:block font-mono text-[8px] tracking-[0.14em] text-muted uppercase">
              Metal Industries &amp; Mechanical Works
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex gap-6 ms-auto flex-wrap justify-end">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-mono text-[11px] tracking-[0.1em] uppercase pb-0.5 ${
                link.active ? "text-fg border-b border-accent" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link
            to="/#contact"
            className="h-[42px] px-5 bg-accent text-white flex items-center font-mono text-[11px] tracking-[0.12em] uppercase hover:bg-accent-hover hover:text-white transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="lg:hidden ms-auto shrink-0 w-10 h-10 flex items-center justify-center text-fg"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/60 transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`lg:hidden fixed top-0 bottom-0 end-0 z-50 w-[82vw] max-w-[340px] bg-ink border-s border-line flex flex-col transition-transform duration-250 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[76px] border-b border-line shrink-0">
          <span className="flex items-center gap-3">
            <img src={logo} alt="ERDO Libya" className="w-8 h-8 block" />
            <span className="font-serif text-[16px] tracking-[0.04em] text-fg">
              ERDO LIBYA
            </span>
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center text-fg -me-2"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-6 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-mono text-[14px] tracking-[0.1em] uppercase ${
                link.active ? "text-accent" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-line">
          <div className="px-6 pt-6 pb-8">
            <Link
              to="/#contact"
              className="h-[46px] px-5 bg-accent text-white flex items-center justify-center font-mono text-[12px] tracking-[0.12em] uppercase"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
