import SectionHeading from "../components/SectionHeading";
import { workflow } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const Workflow = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="workflow" ref={sectionRef} className="scroll-reveal bg-cream py-28">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Cara kerja"
              title="Tiga langkah, tanpa gangguan hari Anda."
              description="Mulai dari menjadwalkan penjemputan, kami mengambil alih. Anda cukup menunggu kabar — dan cucian rapi kembali ke pintu rumah."
            />
          </div>
          <ol className="relative lg:col-span-7">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-ink/15 lg:left-8" aria-hidden />
            {workflow.map((item) => (
              <li key={item.step} className="relative flex gap-6 pb-14 last:pb-0 lg:gap-10">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-ink/20 bg-cream font-display text-sm text-ink lg:h-16 lg:w-16 lg:text-base">
                  {item.step}
                </div>
                <div className="pt-1 lg:pt-4">
                  <h3 className="font-display text-2xl font-normal leading-tight text-ink lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
