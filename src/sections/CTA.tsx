import Button from "../components/Button";
import useScrollReveal from "../hooks/useScrollReveal";

const CTA = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="scroll-reveal relative overflow-hidden bg-gradient-to-br from-brand-500/20 via-brand-500/10 to-transparent py-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_rgba(0,141,255,0.15),_transparent_65%)]" />
      <div className="container flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
          Siap membuat rutinitas laundry Anda lebih mudah?
        </h2>
        <p className="max-w-2xl text-base text-slate-300">
          Jadwalkan penjemputan pertama dan dapatkan voucher diskon 20%. Untuk kebutuhan bisnis,
          tim kami siap berdiskusi kapan pun Anda butuhkan.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="https://wa.me/628999761125" target="_blank">Buat Jadwal Sekarang</Button>
          <Button variant="secondary" href="tel:081234567890">
            Konsultasi via Telepon
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
