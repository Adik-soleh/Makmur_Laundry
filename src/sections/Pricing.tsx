import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { pricingPlans } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const Pricing = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="pricing" ref={sectionRef} className="scroll-reveal bg-cream py-28">
      <div className="container space-y-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Daftar harga"
              title="Transparan. Tanpa biaya tersembunyi."
              description="Semua harga termasuk antar-jemput dalam radius 10 km. Untuk volume besar atau kebutuhan bisnis, hubungi kami langsung."
            />
          </div>
          <p className="text-sm text-ink-muted lg:col-span-5 lg:pb-4">
            Harga berlaku mulai 2025 · Dibulatkan ke kg terdekat · Minimum 3 kg
          </p>
        </div>

        <div className="grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <article
              key={plan.name}
              className="group flex flex-col bg-paper p-10 transition-colors hover:bg-cream-light"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] uppercase tracking-eyebrow text-ink-muted">
                  Paket 0{idx + 1}
                </span>
                {idx === 0 && (
                  <span className="border border-sage-600 px-2 py-0.5 text-[10px] uppercase tracking-eyebrow text-sage-700">
                    Populer
                  </span>
                )}
              </div>
              <h3 className="mt-8 font-display text-3xl font-normal text-ink">{plan.name}</h3>
              <p className="mt-3 font-display text-4xl font-normal italic text-copper-600">
                {plan.price}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{plan.tagline}</p>

              <ul className="mt-10 flex-1 space-y-4 border-t border-ink/10 pt-8 text-sm text-ink-soft">
                {plan.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-baseline gap-3">
                    <span aria-hidden className="text-sage-600">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-10 w-full"
                variant={idx === 0 ? "primary" : "secondary"}
                href="https://wa.me/628999761125"
                target="_blank"
              >
                Pesan Paket Ini
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
