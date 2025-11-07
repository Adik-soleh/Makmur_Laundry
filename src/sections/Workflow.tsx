import SectionHeading from "../components/SectionHeading";
import { workflow } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const Workflow = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="workflow" ref={sectionRef} className="scroll-reveal bg-slate-50 py-24 dark:bg-slate-950">
      <div className="container space-y-16">
        <SectionHeading
          eyebrow="Cara Kerja"
          title="Pesan dalam hitungan detik, nikmati hasil maksimal"
          description="MakmurLaundry dirancang untuk mempermudah Anda. Pesanan terhubung secara realtime ke sistem operasional sehingga proses selalu transparan."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center self-start rounded-full border border-brand-500/25 bg-brand-500/10 text-lg font-semibold text-brand-600 dark:text-brand-200">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
              <div className="absolute -top-px left-12 h-px w-2/3 bg-gradient-to-r from-brand-500/5 via-brand-400/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
