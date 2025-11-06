import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const renderIcon = (type: (typeof services)[number]["icon"]) => {
  switch (type) {
    case "laundry":
      return (
        <svg className="h-6 w-6 text-brand-200" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 7h8M7 4l2-2m6 2 2-2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "dry":
      return (
        <svg className="h-6 w-6 text-brand-200" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 4h10l2 16H5L7 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 9c1.5-1.5 2.5.5 4 0m-4 6c1.5-1.5 2.5.5 4 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "linen":
      return (
        <svg className="h-6 w-6 text-brand-200" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 10h8m-8 4h8M6 6V4m12 2V4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "shoe":
      return (
        <svg className="h-6 w-6 text-brand-200" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 13c4 0 6-4 8-4 3 0 3 4 9 4v3a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 9h.01M9 9h.01M6 13h.01M20 13h.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
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
    <section id="services" ref={sectionRef} className="scroll-reveal bg-slate-950 py-24">
      <div className="container space-y-16">
        <SectionHeading
          eyebrow="Layanan Utama"
          title="Setiap cucian ditangani oleh spesialis"
          description="Kami menyediakan layanan komprehensif untuk kebutuhan personal hingga bisnis. Semua proses diawasi oleh quality assurance agar hasil selalu konsisten."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-brand-400/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10">
                  {renderIcon(service.icon)}
                </span>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{service.description}</p>
                <Link
                  to={`/layanan/${service.slug}`}
                  className="text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
                >
                  Detail Layanan -&gt;
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
