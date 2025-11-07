import Button from "../components/Button";
import { heroStats, partnerLogos } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const Hero = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const scrollToPricing = () => {
    const target = document.getElementById("pricing");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="scroll-reveal relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950/80"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-40 dark:opacity-60" />
      <div className="container grid gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1 text-xs font-semibold text-brand-600 ring-1 ring-brand-500/20 dark:text-brand-200">
              Laundry On-demand Terpercaya
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Solusi laundry premium
              <span className="text-brand-500 dark:text-brand-300"> tanpa ribet</span> untuk rumah dan bisnis Anda.
            </h1>
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Kami jemput cucian Anda, merawatnya dengan standar hotel bintang lima, dan
              mengantarkan kembali tepat waktu. Cukup pesan dari aplikasi atau WhatsApp.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="https://wa.me/628999761125" target="_blank">Coba Gratis 1x</Button>
            <Button variant="secondary" onClick={scrollToPricing}>
              Lihat Paket
            </Button>
          </div>
          <dl className="grid gap-6 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur dark:border-white/10 dark:bg-white/10"
              >
                <dt className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</dt>
                <dd className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-8 text-slate-900 shadow-section dark:border-white/10 dark:bg-white/10 dark:text-white">
            <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-brand-500/30 blur-2xl dark:bg-brand-500/20" />
            <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-300/10" />
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-300">Paling Populer</p>
                </div>
                <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-200">
                  Cuci Komplit
                </span>
              </div>
              <div className="space-y-4 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 dark:bg-slate-950/50 dark:ring-white/10">
                {["Reguler 6K/kg · Selesai 2 hari", "Satu Hari 8K/kg · Selesai 24 jam", "Kilat 10K/kg · Selesai 4 jam"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-200">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-200">
                        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3.5 8.5 6.5 11.5 12.5 4.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </div>
                  )
                )}
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Lokasi Outlet
                </p>
                <div className="overflow-hidden rounded-3xl ring-1 ring-slate-200 dark:ring-white/10">
                  <iframe
                    title="Makmur Laundry Location"
                    src="https://www.google.com/maps?q=-6.3046522,106.6787781&z=16&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-48 w-full"
                    allowFullScreen
                  />
                </div>
              </div>
              {/* <div className="rounded-3xl bg-white/5 p-6 text-sm text-slate-300 ring-1 ring-white/10">
                <p className="font-semibold text-white">Kurir dalam perjalanan</p>
                <p className="mt-2 leading-relaxed">
                  Andi akan menjemput cucian Anda pukul 09.30 di Jl. Melur No. 27. Mohon siapkan
                  cucian dalam keranjang.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-20 space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
          Dipercaya oleh ratusan bisnis modern
        </p>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6 text-sm font-medium text-slate-400 dark:text-slate-500">
          {partnerLogos.map((partner) => (
            <span key={partner} className="uppercase tracking-[0.3em] text-slate-500">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
