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
      <section className="bg-cream py-28">
        <div className="container space-y-8 text-center text-ink-soft">
          <h1 className="font-display text-4xl font-normal text-ink">Layanan tidak ditemukan</h1>
          <p className="text-sm text-ink-muted">
            Silakan pilih layanan yang tersedia melalui halaman utama kami.
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
    <section className="bg-cream py-20 sm:py-28">
      <div className="container space-y-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
        >
          <span aria-hidden="true">←</span> Kembali ke beranda
        </Link>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading
              align="left"
              eyebrow={`Layanan · ${service.slug.replace(/-/g, " ")}`}
              title={service.title}
              description={service.longDescription}
            />
          </div>
          <p className="text-sm text-ink-muted lg:col-span-4 lg:pb-4">
            Setiap tahapan dikerjakan oleh tim yang sama, diawasi langsung oleh pemilik outlet.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.6fr,1fr] lg:gap-14">
          <article className="border-t border-ink/10">
            <h2 className="eyebrow py-6">
              <span className="h-px w-8 bg-ink/40" /> Proses
            </h2>
            <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
              {service.process.map((item, idx) => (
                <div key={item.title} className="grid gap-6 py-8 md:grid-cols-[auto,1fr]">
                  <span className="font-display text-sm text-sage-600">0{idx + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-normal text-ink">{item.title}</h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="self-start border border-ink/10 bg-paper p-8">
            <div className="border-b border-ink/10 pb-6">
              <p className="text-[11px] uppercase tracking-eyebrow text-ink-muted">Estimasi selesai</p>
              <p className="mt-3 font-display text-4xl font-normal italic text-copper-600">
                {service.turnaround}
              </p>
            </div>
            <div className="space-y-4 py-6">
              <p className="text-[11px] uppercase tracking-eyebrow text-ink-muted">Yang Anda dapatkan</p>
              <ul className="space-y-3 text-sm text-ink-soft">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-baseline gap-3">
                    <span aria-hidden className="text-sage-600">—</span>
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
