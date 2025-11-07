import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/content";

const TestimonialsPage = () => {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="container space-y-16">
        <SectionHeading
          align="left"
          eyebrow="Testimoni"
          title="Apa kata pelanggan kami"
          description="Feedback pelanggan menjadi bahan utama perbaikan layanan. Berikut beberapa cerita dari partner setia MakmurLaundry."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">"{testimonial.quote}"</p>
              <footer className="mt-6 space-y-1 text-sm">
                <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {testimonial.role}
                </p>
              </footer>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-white">Kumpulkan Poin Member</p>
          <p className="mt-3 leading-relaxed">
            Pelanggan reguler mendapatkan poin setiap transaksi yang dapat ditukar dengan potongan
            harga, upgrade paket express, atau layanan tambahan seperti disinfectant treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
