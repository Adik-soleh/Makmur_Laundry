import Button from "../components/Button";
import { heroStats, partnerLogos } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const Hero = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const scrollToPricing = () => {
    const target = document.getElementById("pricing");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="scroll-reveal relative overflow-hidden bg-cream pt-14 pb-24 sm:pt-20"
    >
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">
              <span className="h-px w-10 bg-ink/40" />
              Serpong · Sejak 2024
            </span>
            <h1 className="mt-8 font-display text-[44px] font-normal leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[80px]">
              Merawat pakaian
              <br />
              dengan <em className="font-display italic text-sage-600">ketelitian</em>
              <br />
              yang kami warisi.
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft">
              Laundry antar-jemput di Rawa Buntu — ditangani tim yang sama sejak lima tahun lalu.
              Kami mencuci dengan air yang disaring, deterjen lembut, dan mesin yang dirawat
              berkala. Tidak cepat-cepat, tidak sembarangan.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="https://wa.me/628999761125" target="_blank">
                Jadwalkan Penjemputan
              </Button>
              <Button variant="ghost" onClick={scrollToPricing}>
                Lihat daftar harga <span aria-hidden>↓</span>
              </Button>
            </div>

            <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-ink/15 pt-8">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <dt className="font-display text-3xl font-medium text-ink sm:text-4xl">{stat.value}</dt>
                  <dd className="text-xs uppercase tracking-eyebrow text-ink-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative">
              <figure className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(94,117,72,0.18),_transparent_70%)]" />
                <svg
                  viewBox="0 0 400 500"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <defs>
                    <pattern id="weave" width="8" height="8" patternUnits="userSpaceOnUse">
                      <path d="M 0 4 L 8 4" stroke="rgba(28,24,20,0.07)" strokeWidth="1" />
                      <path d="M 4 0 L 4 8" stroke="rgba(28,24,20,0.07)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="500" fill="url(#weave)" />
                  <g stroke="#1C1814" strokeWidth="1.2" fill="none" opacity="0.55">
                    <path d="M90 120 Q 200 60 310 120 Q 280 220 310 380 Q 200 440 90 380 Q 120 220 90 120 Z" />
                    <path d="M110 160 Q 200 110 290 160" />
                    <path d="M110 340 Q 200 380 290 340" />
                    <path d="M200 120 L 200 380" opacity="0.35" />
                  </g>
                  <g fill="#5E7548" opacity="0.3">
                    <circle cx="140" cy="200" r="3" />
                    <circle cx="260" cy="240" r="3" />
                    <circle cx="180" cy="300" r="3" />
                    <circle cx="240" cy="160" r="3" />
                  </g>
                </svg>
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-ink/15 bg-cream/80 px-5 py-4 backdrop-blur-sm">
                  <span className="font-display text-sm italic text-ink">“setiap helai punya cerita”</span>
                  <span className="text-[10px] uppercase tracking-eyebrow text-ink-muted">01 / 03</span>
                </figcaption>
              </figure>

              <div className="mt-6 border border-ink/10 bg-paper p-5">
                <p className="text-[11px] uppercase tracking-eyebrow text-ink-muted">Outlet</p>
                <p className="mt-2 font-display text-lg text-ink">Rawa Buntu, Serpong</p>
                <div className="mt-4 overflow-hidden border border-ink/10">
                  <iframe
                    title="Makmur Laundry Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311.75616812200116!2d106.67358413959151!3d-6.303958948003792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb5b7ed15d95%3A0x543db4ce698d9bdb!2sMAKMUR%20LAUNDRY!5e1!3m2!1sid!2sid!4v1763708872104!5m2!1sid!2sid"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-48 w-full border-0 grayscale contrast-[1.05]"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* <div className="mt-24 border-t border-ink/10 pt-10">
          <p className="eyebrow mb-6">
            <span className="h-px w-8 bg-ink/40" />
            Dipercaya oleh
          </p>
          <div className="flex flex-wrap items-center gap-x-14 gap-y-4 font-display text-xl italic text-ink-muted">
            {partnerLogos.map((partner, i) => (
              <span key={partner} className="flex items-center gap-x-14">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-ink/30" aria-hidden />}
                {partner}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
