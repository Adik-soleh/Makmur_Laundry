import SectionHeading from "../components/SectionHeading";
import { workflow } from "../data/content";

const WorkflowPage = () => {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="container space-y-16">
        <SectionHeading
          align="left"
          eyebrow="Cara Kerja"
          title="Pesanan Anda terkelola otomatis dari penjemputan hingga pengantaran"
          description="Setiap langkah terstandardisasi dan tercatat di dashboard operasional kami. Berikut gambaran detail proses layanan MakmurLaundry."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {workflow.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-sm font-semibold text-brand-600 dark:text-brand-200">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-brand-200 bg-brand-50 p-10 text-sm text-brand-900 dark:border-brand-400/30 dark:bg-brand-500/10 dark:text-brand-50">
          <p className="font-semibold text-brand-900 dark:text-white">Automasi Penjadwalan</p>
          <p className="mt-3 text-brand-800 dark:text-slate-200">
            Sistem MakmurLaundry mengoptimalkan rute kurir, memonitor kapasitas mesin, dan mengirim
            update status secara realtime. Pelanggan dapat menjadwalkan ulang tanpa biaya selama
            2 jam sebelum penjemputan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowPage;
