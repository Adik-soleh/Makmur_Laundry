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
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    navigate(href);
  };

  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950 py-12">
      <div className="container grid gap-10 md:grid-cols-[2fr,1fr,1fr]">
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-semibold text-white">
            <span className="text-brand-400">Makmur</span>Laundry
          </Link>
          <p className="max-w-sm text-sm text-slate-400">
            Laundry on-demand yang mengutamakan kebersihan, kecepatan, dan kemudahan. Kami
            hadir untuk mempermudah rutinitas Anda setiap hari.
          </p>
          <div className="text-sm text-slate-400">
            <p>{contactInfo.address}</p>
            <p>Tel: {contactInfo.phone}</p>
            <p>Email: {contactInfo.email}</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
            Navigasi
          </h3>
          <ul className="space-y-2 text-slate-400">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="bg-transparent transition-colors hover:text-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
            Ikuti Kami
          </h3>
          <ul className="space-y-2 text-slate-400">
            {contactInfo.socials.map((item) => (
              <li key={item.label}>
                <a
                  className="hover:text-brand-300 transition-colors"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">
        &copy; {new Date().getFullYear()} MakmurLaundry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
