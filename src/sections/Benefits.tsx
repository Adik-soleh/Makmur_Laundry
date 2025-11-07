import SectionHeading from "../components/SectionHeading";
import { benefits } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const Benefits = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="scroll-reveal relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,141,255,0.25),_transparent_60%)] opacity-40 dark:opacity-70" />
      <div className="container space-y-16">
        <SectionHeading
          eyebrow="Kenapa MakmurLaundry"
          title="Standar layanan hotel bintang lima untuk semua pelanggan"
          description="Kualitas adalah prioritas kami. Kami mengombinasikan teknologi dan tim profesional untuk memastikan setiap helai pakaian ditangani dengan aman."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="grid gap-6">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400/40 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[40px] bg-brand-500/20 blur-3xl dark:bg-brand-500/10" />
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-section dark:border-white/10 dark:from-slate-900 dark:to-slate-950">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    <p>Monitoring harian</p>
                    <p className="text-xs">Quality Control Dashboard</p>
                  </div>
                  <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-200">
                    Live
                  </span>
                </div>
                <div className="space-y-4 rounded-3xl bg-slate-100 p-6 ring-1 ring-slate-200 dark:bg-black/40 dark:ring-white/10">
                  {[
                    { label: "Kebersihan mesin", value: "100%", progress: "100%" },
                    { label: "Kepatuhan SOP", value: "99.4%", progress: "99%" },
                    { label: "Ketepatan waktu", value: "98.2%", progress: "98%" }
                  ].map((metric) => (
                    <div key={metric.label} className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                        <span>{metric.label}</span>
                        <span className="font-semibold text-brand-600 dark:text-brand-200">{metric.value}</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white dark:bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-200"
                          style={{ width: metric.progress }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Setiap pesanan diperiksa dua kali sebelum dikemas. Sistem otomatis mengirim notifikasi
                  jika ditemukan potensi keterlambatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
