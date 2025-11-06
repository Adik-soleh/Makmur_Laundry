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
      <section className="bg-slate-950 py-24">
        <div className="container space-y-8 text-center text-slate-200">
          <h1 className="text-3xl font-semibold text-white">Layanan tidak ditemukan</h1>
          <p className="text-sm text-slate-400">
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
    <section className="bg-slate-950 py-24">
      <div className="container space-y-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 hover:text-brand-100"
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
          <article className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-sm text-slate-300">
            {service.process.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            ))}
          </article>
          <aside className="space-y-6 rounded-3xl border border-brand-400/30 bg-brand-500/10 p-8 text-sm text-brand-50">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-200">Estimasi</p>
              <p className="mt-2 text-3xl font-semibold text-white">{service.turnaround}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-200">Benefit</p>
              <ul className="space-y-2 text-slate-100">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1 text-brand-200">
                      •
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          <Button href="https://wa.me/628999761125?text=Halo,%20saya%20ingin%20diskusikan%20layanan." target="_blank">Diskusikan Layanan</Button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
