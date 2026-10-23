import { Link } from "react-router-dom";
import { business, services, waLink } from "../data/content";
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-navy pb-24 pt-14 text-white/75 sm:pb-12">
    <div className="container grid gap-10 md:grid-cols-[1.4fr,1fr,1fr]">
      <div className="space-y-4">
        <Logo light />
        <p className="max-w-xs text-sm leading-relaxed">
          Laundry kiloan dan satuan di {business.area}, Tangerang Selatan.
        </p>
        <address className="max-w-xs text-sm not-italic leading-relaxed">{business.address}</address>
        <p className="text-sm">Buka {business.hours.label.toLowerCase()}</p>
      </div>
      <div>
        <h2 className="text-sm font-bold text-white">Layanan</h2>
        <ul className="mt-4 space-y-2.5 text-sm">
          {services.map((service) => (
            <li key={service.slug}>
              <Link to={`/layanan/${service.slug}`} className="hover:text-white">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-sm font-bold text-white">Hubungi</h2>
        <ul className="mt-4 space-y-2.5 text-sm">
          <li>
            <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-white">
              WhatsApp {business.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={business.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
              Instagram @makmur_laundry_bsd
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mt-12 border-t border-white/15 pt-6 text-xs text-white/55">
      © {new Date().getFullYear()} Makmur Laundry
    </div>
  </footer>
);

export default Footer;
