import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { pricingPlans } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const Pricing = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="pricing" ref={sectionRef} className="scroll-reveal bg-slate-950 py-24">
      <div className="container space-y-16">
        <SectionHeading
          eyebrow="Paket Hemat"
          title="Pilih paket sesuai kebutuhan"
          description="Harga transparan tanpa biaya tambahan. Untuk volume besar, hubungi tim bisnis kami untuk penawaran khusus."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-brand-400/40"
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-300">
                  {plan.name}
                </span>
                <p className="text-3xl font-semibold text-white">{plan.price}</p>
                <p className="text-sm leading-relaxed text-slate-400">{plan.tagline}</p>
              </div>
              <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-slate-300">
                {plan.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/10 text-brand-200">
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
              <Button className="mt-10 w-full" href="https://wa.me/628999761125">
                Konsultasi Gratis
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
