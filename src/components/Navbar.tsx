import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigationLinks } from "../data/content";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: targetId } });
        return;
      }
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "border-b border-ink/10 bg-cream/90 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1 font-display text-2xl font-medium tracking-tight text-ink">
          Makmur
          <span className="text-sm font-sans font-normal uppercase tracking-eyebrow text-ink-muted">Laundry</span>
        </Link>
        <nav className="hidden items-center gap-10 text-[13px] font-medium text-ink-soft lg:flex">
          {navigationLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="group relative bg-transparent py-1 text-ink-soft transition-colors hover:text-ink focus:outline-none focus-visible:text-ink"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </nav>
        {/* <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/628999761125"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-b border-ink pb-1 text-[13px] font-medium text-ink transition-colors hover:text-sage-600 hover:border-sage-600"
          >
            Pesan Sekarang
            <span aria-hidden>→</span>
          </a>
        </div> */}
        <button
          type="button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-sage-600 lg:hidden"
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Buka menu</span>
          <span className="relative flex h-5 w-6 items-center justify-center" aria-hidden="true">
            <span
              className={`absolute h-px w-6 bg-current transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[7px] rotate-0"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-current transition-all duration-200 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-current transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[7px] rotate-0"
              }`}
            />
          </span>
        </button>
      </div>
      <div
        aria-hidden={!isMenuOpen}
        className={`overflow-hidden border-t border-ink/10 bg-cream transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100 translate-y-0 max-h-[520px]"
            : "pointer-events-none opacity-0 -translate-y-2 max-h-0"
        }`}
      >
        <nav
          id="mobile-menu"
          className={`container flex flex-col gap-5 text-sm font-medium text-ink-soft transition-[padding] duration-300 ease-out ${
            isMenuOpen ? "py-8" : "py-0"
          }`}
        >
          {navigationLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="bg-transparent text-left text-ink-soft transition-colors hover:text-ink focus:outline-none"
            >
              {item.label}
            </button>
          ))}
          {/* <a
            href="https://wa.me/628999761125"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink"
          >
            Pesan Sekarang <span aria-hidden>→</span>
          </a> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
