import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl transition-colors duration-200 dark:border-white/10 dark:bg-slate-950/80">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          <span className="text-brand-600 dark:text-brand-300">Makmur</span>Laundry
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-200 lg:flex">
          {navigationLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="bg-transparent text-slate-600 transition-colors hover:text-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-200 dark:hover:text-brand-300 dark:focus-visible:ring-offset-slate-950"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
        </div>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-900 transition-colors hover:border-brand-400 hover:text-brand-500 focus-visible:border-brand-400 focus-visible:text-brand-500 dark:border-white/15 dark:text-white lg:hidden"
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Buka menu</span>
          <span className="relative flex h-5 w-5 items-center justify-center" aria-hidden="true">
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[6px] rotate-0"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[6px] rotate-0"
              }`}
            />
          </span>
        </button>
      </div>
      <div
        aria-hidden={!isMenuOpen}
        className={`overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur transition-all duration-300 ease-out dark:border-white/10 dark:bg-slate-950/95 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100 translate-y-0 max-h-[520px]"
            : "pointer-events-none opacity-0 -translate-y-2 max-h-0"
        }`}
      >
        <nav
          id="mobile-menu"
          className={`container flex flex-col gap-4 text-sm font-medium text-slate-600 transition-[padding] duration-300 ease-out dark:text-slate-200 ${
            isMenuOpen ? "py-6" : "py-0"
          }`}
        >
          {navigationLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="bg-transparent text-left text-slate-600 transition-colors hover:text-brand-500 focus:outline-none dark:text-slate-200 dark:hover:text-brand-300"
            >
              {item.label}
            </button>
          ))}
          <div className={`flex flex-col gap-3 transition-[margin] duration-300 ease-out ${isMenuOpen ? "pt-4" : "pt-0"}`}>
            <div className="flex items-center justify-between rounded-full border border-slate-200 px-4 py-2 text-xs text-slate-500 dark:border-white/15 dark:text-slate-300">
              <span className="font-semibold">Mode Tampilan</span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
