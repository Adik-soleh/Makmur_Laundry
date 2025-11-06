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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-brand-400/60 hover:text-brand-300 focus-visible:border-brand-400 focus-visible:text-brand-300 lg:hidden"
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
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100 translate-y-0 max-h-[520px]"
            : "pointer-events-none opacity-0 -translate-y-2 max-h-0"
        }`}
      >
        <nav
          id="mobile-menu"
          className={`container flex flex-col gap-4 text-sm font-medium text-slate-200 transition-[padding] duration-300 ease-out ${
            isMenuOpen ? "py-6" : "py-0"
          }`}
        >
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
          <div className={`flex flex-col gap-3 transition-[margin] duration-300 ease-out ${isMenuOpen ? "pt-4" : "pt-0"}`}>
            <Button href="https://wa.me/628999761125" target="_blank">Pesan Sekarang</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
