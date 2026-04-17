import useScrollReveal from "../hooks/useScrollReveal";

const CTA = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="scroll-reveal relative overflow-hidden bg-ink py-28 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #F7F1E5 0.5px, transparent 1px), radial-gradient(circle at 70% 80%, #F7F1E5 0.5px, transparent 1px)",
          backgroundSize: "24px 24px, 32px 32px"
        }}
      />
      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-cream/60">
              <span className="h-px w-10 bg-cream/40" />
              Mulai hari ini
            </span>
            <h2 className="mt-8 font-display text-4xl font-normal leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-[64px]">
              Mari serahkan <em className="italic text-sage-200">cucian</em> Anda —
              <br />
              kami kembalikan dalam keadaan terbaik.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
              Pesan penjemputan pertama Anda dan dapatkan potongan 20% untuk paket Cuci Komplit.
              Tanpa kontrak, tanpa biaya pendaftaran.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
            <a
              href="https://wa.me/628999761125"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-cream px-7 py-4 text-[13px] font-medium tracking-wide text-ink transition-colors hover:bg-sage-200"
            >
              Jadwalkan Penjemputan
              <span aria-hidden>→</span>
            </a>
            <a
              href="tel:628999761125"
              className="inline-flex items-center gap-2 border-b border-cream/60 pb-1 text-[13px] font-medium text-cream transition-colors hover:border-sage-200 hover:text-sage-200"
            >
              atau hubungi +62 899-9761-125
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
