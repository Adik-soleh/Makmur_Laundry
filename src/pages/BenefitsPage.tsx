import SectionHeading from "../components/SectionHeading";
import { benefits } from "../data/content";

const BenefitsPage = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,141,255,0.25),_transparent_60%)] opacity-40 dark:opacity-60" />
      <div className="container space-y-16">
        <SectionHeading
          align="left"
          eyebrow="Keunggulan"
          title="Kenapa ribuan pelanggan memilih MakmurLaundry"
          description="Kami memadukan teknologi, SDM profesional, dan SOP ketat agar hasil laundry selalu konsisten, aman, dan tepat waktu."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-white">Sertifikasi dan Audit</p>
          <p className="mt-3 leading-relaxed">
            Seluruh fasilitas kami tersertifikasi higiene, dengan audit internal bulanan dan audit
            eksternal tiap kuartal. Setiap keluhan pelanggan masuk ke sistem ticketing yang
            dimonitor langsung oleh tim quality assurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsPage;
