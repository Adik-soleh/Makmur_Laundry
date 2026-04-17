import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const Testimonials = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="testimonials" ref={sectionRef} className="scroll-reveal bg-cream-light py-28">
      <div className="container space-y-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Cerita pelanggan"
              title="Kepercayaan yang dibangun perlahan."
              description="Dari keluarga muda hingga pemilik usaha, mereka kembali karena satu alasan sederhana: hasil yang konsisten."
            />
          </div>
          <p className="lg:col-span-5 lg:pb-4 text-sm text-ink-muted">
            Rating 4.9 / 5 dari 1.200+ ulasan di Google dan Instagram
          </p>
        </div>

        <div className="grid divide-y divide-ink/10 border-t border-b border-ink/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {testimonials.map((testimonial, idx) => (
            <figure key={testimonial.name} className="flex flex-col gap-10 p-10">
              <span className="font-display text-5xl leading-none text-sage-500" aria-hidden>
                “
              </span>
              <blockquote className="font-display text-lg font-normal leading-relaxed text-ink">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center justify-between border-t border-ink/10 pt-5">
                <div>
                  <p className="font-display text-sm text-ink">{testimonial.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-eyebrow text-ink-muted">
                    {testimonial.role}
                  </p>
                </div>
                <span className="text-[11px] tracking-eyebrow text-ink-muted">0{idx + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
