import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const Testimonials = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="testimonials" ref={sectionRef} className="scroll-reveal bg-slate-950 py-24">
      <div className="container space-y-16">
        <SectionHeading
          eyebrow="Cerita Pelanggan"
          title="Dipuji karena layanan konsisten"
          description="Kami bangga menjadi mitra terpercaya bagi pelanggan personal, UMKM, hingga perusahaan besar."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <p className="text-sm leading-relaxed text-slate-300">"{testimonial.quote}"</p>
              <footer className="mt-6 space-y-1 text-sm">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {testimonial.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
