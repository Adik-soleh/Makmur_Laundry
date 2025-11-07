import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { pricingPlans } from "../data/content";

const PricingPage = () => {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="container space-y-16">
        <SectionHeading
          align="left"
          eyebrow="Paket Harga"
          title="Transparan, kompetitif, dan fleksibel"
          description="Tentukan paket sesuai kebutuhan. Untuk pengambilan rutin atau kebutuhan bisnis, kami menyiapkan proposal khusus dengan SLA terukur."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-300">
                  {plan.name}
                </span>
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">{plan.price}</p>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{plan.tagline}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {plan.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-200">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3.5 8.5 6.5 11.5 12.5 4.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-auto w-full" href="https://wa.me/628999761125" target="_blank">
                Konsultasi Paket
              </Button>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-brand-200 bg-brand-50 p-10 text-sm text-brand-900 dark:border-brand-400/30 dark:bg-brand-500/10 dark:text-brand-50">
          <p className="font-semibold text-brand-900 dark:text-white">Diskon Langganan Bisnis</p>
          <p className="mt-3 text-brand-800 dark:text-slate-200">
            Mitra bisnis mendapatkan dashboard billing, laporan bulanan, dan SLA sesuai kebutuhan.
            Hubungi kami untuk penawaran khusus jika volume laundry di atas 100 kg per minggu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
