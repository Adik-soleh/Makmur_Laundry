import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const renderIcon = (type: (typeof services)[number]["icon"]) => {
  const iconClass = "h-5 w-5 text-ink";
  switch (type) {
    case "laundry":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8 7h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "dry":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path d="M7 4h10l2 16H5L7 4Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M10 10c1.5-1 2.5 1 4 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "linen":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="6" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8 10h8m-8 4h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "shoe":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 13c4 0 6-4 8-4 3 0 3 4 9 4v3a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

const Services = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="services" ref={sectionRef} className="scroll-reveal bg-cream-light py-28">
      <div className="container space-y-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Layanan"
              title="Empat perawatan, satu standar."
              description="Setiap layanan dikerjakan oleh tim yang memahami material — dari kaos harian hingga batik eksklusif. Kami tidak menggabungkan cucian antar pelanggan."
            />
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <p className="text-sm leading-relaxed text-ink-muted">
              Harga dihitung per kilogram atau per item sesuai jenis perawatan. Konsultasi gratis
              via WhatsApp sebelum Anda memesan.
            </p>
          </div>
        </div>

        <div className="grid divide-y divide-ink/10 border-t border-b border-ink/10 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className={`group relative flex flex-col gap-6 p-10 transition-colors hover:bg-paper ${
                idx >= 2 ? "lg:border-t lg:border-ink/10" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-ink/15 bg-paper">
                  {renderIcon(service.icon)}
                </span>
                <span className="text-[10px] uppercase tracking-eyebrow text-ink-muted">
                  0{idx + 1}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-normal leading-tight text-ink">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{service.description}</p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-[11px] uppercase tracking-eyebrow text-ink-muted">
                  Selesai {service.turnaround}
                </span>
                <Link
                  to={`/layanan/${service.slug}`}
                  className="inline-flex items-center gap-2 border-b border-ink pb-0.5 text-[13px] font-medium text-ink transition-colors group-hover:text-sage-600 group-hover:border-sage-600"
                >
                  Detail <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
