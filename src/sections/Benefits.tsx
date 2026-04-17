import SectionHeading from "../components/SectionHeading";
import { benefits } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const metrics = [
  { label: "Kebersihan mesin", value: "100%", progress: 100 },
  { label: "Kepatuhan SOP", value: "99.4%", progress: 99 },
  { label: "Ketepatan waktu", value: "98.2%", progress: 98 }
];

const Benefits = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="benefits" ref={sectionRef} className="scroll-reveal bg-sage-900 py-28 text-cream">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <span className="eyebrow !text-cream/60">
              <span className="h-px w-10 bg-cream/40" />
              Kenapa Makmur
            </span>
            <h2 className="mt-8 font-display text-4xl font-normal leading-[1.1] tracking-tight text-cream sm:text-5xl md:text-[56px]">
              Standar yang diterima <em className="italic text-sage-200">hotel bintang lima,</em>
              diberikan untuk rumah Anda.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
              Kami tidak berkompromi soal kualitas. Deterjen food-grade, mesin yang dirawat
              berkala, dan tim yang bekerja dengan pengawasan langsung.
            </p>

            <div className="mt-14 divide-y divide-cream/15 border-t border-cream/15">
              {benefits.map((benefit, idx) => (
                <article key={benefit.title} className="grid gap-6 py-8 md:grid-cols-[auto,1fr]">
                  <span className="font-display text-sm text-sage-200">0{idx + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-normal text-cream">{benefit.title}</h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-cream/70">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pl-8">
            <div className="border border-cream/15 bg-sage-800/40 p-8">
              <div className="flex items-center justify-between border-b border-cream/15 pb-5">
                <div>
                  <p className="text-[11px] uppercase tracking-eyebrow text-cream/60">Quality Ledger</p>
                  <p className="mt-1 font-display text-lg text-cream">Catatan bulan ini</p>
                </div>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-sage-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage-200" /> Live
                </span>
              </div>
              <div className="space-y-7 pt-7">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-cream/80">{metric.label}</span>
                      <span className="font-display text-xl text-cream">{metric.value}</span>
                    </div>
                    <div className="mt-3 h-px w-full bg-cream/15">
                      <div
                        className="h-px bg-sage-200"
                        style={{ width: `${metric.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 border-t border-cream/15 pt-6 text-sm leading-relaxed text-cream/70">
                Setiap pesanan diperiksa dua kali sebelum dikemas. Jika kami menemukan potensi
                keterlambatan, tim kami menghubungi Anda lebih dulu.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
