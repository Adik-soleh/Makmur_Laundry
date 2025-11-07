import SectionHeading from "../components/SectionHeading";
import { services } from "../data/content";

const ServicesPage = () => {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="container space-y-16">
        <SectionHeading
          align="left"
          eyebrow="Layanan Kami"
          title="Solusi laundry lengkap untuk kebutuhan personal dan bisnis"
          description="Setiap layanan dikembangkan bersama tim operasional berpengalaman sehingga hasil selalu optimal. Pilih paket yang sesuai, kami urus sisanya."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
              <div className="mt-6 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                <p>• Proses higienis sesuai SOP MakmurLaundry</p>
                <p>• Monitoring status dari aplikasi dan WhatsApp</p>
                <p>• Garansi hasil maksimal atau uang kembali</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
