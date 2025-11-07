import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/content";

const ServiceDetailPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const service = useMemo(
    () => services.find((item) => item.slug === slug),
    [slug]
  );

  if (!service) {
    return (
      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <div className="container space-y-8 text-center text-slate-600 dark:text-slate-200">
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Layanan tidak ditemukan</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Mohon pilih layanan yang tersedia melalui halaman utama kami.
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/">Kembali ke Beranda</Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Halaman Sebelumnya
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="container space-y-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-200 dark:hover:text-brand-100"
        >
          <span aria-hidden="true">←</span> Kembali
        </Link>
        <SectionHeading
          align="left"
          eyebrow="Detail Layanan"
          title={service.title}
          description={service.longDescription}
        />
        <div className="grid gap-10 lg:grid-cols-[1.7fr,1fr]">
          <article className="space-y-6 rounded-3xl border border-slate-200 bg-white p-10 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            {service.process.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            ))}
          </article>
          <aside className="space-y-6 rounded-3xl border border-brand-200 bg-brand-50 p-8 text-sm text-brand-900 dark:border-brand-400/30 dark:bg-brand-500/10 dark:text-brand-50">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-600 dark:text-brand-200">Estimasi</p>
              <p className="mt-2 text-3xl font-semibold text-brand-900 dark:text-white">{service.turnaround}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-600 dark:text-brand-200">Benefit</p>
              <ul className="space-y-2 text-brand-800 dark:text-slate-100">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1 text-brand-600 dark:text-brand-200">
                      •
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              className="w-full"
              href="https://wa.me/628999761125?text=Halo,%20saya%20ingin%20diskusikan%20layanan."
              target="_blank"
            >
              Diskusikan Layanan
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
