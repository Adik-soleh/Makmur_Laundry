import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { navigationLinks } from "../data/content";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");

      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: targetId } });
        return;
      }

      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    navigate(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-white">
          <span className="text-brand-400">Makmur</span>Laundry
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 lg:flex">
          {navigationLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="bg-transparent text-slate-200 transition-colors hover:text-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="https://wa.me/628999761125" target="_blank">Pesan Sekarang</Button>
        </div>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
        >
          <span className="sr-only">Buka menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M5 5 15 15M15 5 5 15" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur lg:hidden">
          <nav className="container flex flex-col gap-4 py-6 text-sm font-medium text-slate-200">
            {navigationLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="bg-transparent text-left text-slate-200 transition-colors hover:text-brand-300 focus:outline-none"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button href="https://wa.me/628999761125" target="_blank">Pesan Sekarang</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
