import { Link, useLocation, useNavigate } from "react-router-dom";
import { contactInfo, navigationLinks } from "../data/content";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
    <footer id="contact" className="border-t border-ink/10 bg-cream-light pt-20 pb-10 text-ink-soft">
      <div className="container grid gap-14 md:grid-cols-[1.6fr,1fr,1fr]">
        <div className="space-y-6">
          <Link to="/" className="flex items-baseline gap-2 font-display text-3xl font-medium tracking-tight text-ink">
            Makmur
            <span className="text-sm font-sans font-normal uppercase tracking-eyebrow text-ink-muted">Laundry</span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Perawatan pakaian yang dikerjakan dengan tangan terlatih. Kami hadir di Rawa Buntu,
            Serpong untuk melayani keluarga dan bisnis di Tangerang Selatan.
          </p>
          <div className="space-y-1 text-sm text-ink-muted">
            <p>{contactInfo.address}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
          </div>
        </div>
        <div className="space-y-4 text-sm">
          <h3 className="eyebrow"><span className="h-px w-6 bg-ink/40" /> Navigasi</h3>
          <ul className="space-y-3 text-ink-soft">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="bg-transparent transition-colors hover:text-ink focus:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 text-sm">
          <h3 className="eyebrow"><span className="h-px w-6 bg-ink/40" /> Terhubung</h3>
          <ul className="space-y-3 text-ink-soft">
            {contactInfo.socials.map((item) => (
              <li key={item.label}>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                  <span aria-hidden className="text-ink-muted">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mt-16 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 text-xs text-ink-muted md:flex-row md:items-center">
        <p>&copy; {new Date().getFullYear()} Makmur Laundry. Dikerjakan di Serpong.</p>
        <p className="font-display italic">Bersih itu ritual harian.</p>
      </div>
    </footer>
  );
};

export default Footer;
