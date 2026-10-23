import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationLinks, waLink } from "../data/content";
import { WhatsAppIcon } from "./Icons";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        isScrolled || isMenuOpen ? "shadow-[0_1px_0_#D8E4F0]" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              to={`/${item.href}`}
              className="text-[15px] font-medium text-navy-soft transition-colors hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-wa px-5 py-2.5 text-sm">
            <WhatsAppIcon className="h-4 w-4" />
            Chat WhatsApp
          </a>
        </nav>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-navy md:hidden"
        >
          <span className="sr-only">{isMenuOpen ? "Tutup menu" : "Buka menu"}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav id="mobile-menu" aria-label="Navigasi utama" className="container pb-5 md:hidden">
          <ul className="divide-y divide-line border-y border-line">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link to={`/${item.href}`} className="block py-3.5 text-base font-medium text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-wa mt-4 w-full">
            <WhatsAppIcon />
            Chat WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
