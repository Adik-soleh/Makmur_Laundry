import SectionHeading from "../components/SectionHeading";
import { workflow } from "../data/content";

const WorkflowPage = () => {
  return (
    <section className="bg-slate-950 py-24">
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
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-sm font-semibold text-brand-200">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-brand-400/30 bg-brand-500/10 p-10 text-sm text-brand-50">
          <p className="font-semibold text-white">Automasi Penjadwalan</p>
          <p className="mt-3 text-slate-200">
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
