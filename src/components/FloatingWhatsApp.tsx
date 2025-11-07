const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/628999761125"
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-4 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl shadow-black/10 ring-4 ring-white/70 transition hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-400 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:bg-slate-900/80 dark:ring-slate-900/80 dark:focus-visible:ring-offset-slate-950 sm:bottom-8 sm:right-6"
      aria-label="Hubungi MakmurLaundry via WhatsApp"
    >
      <img
        src="/logo_wa.png"
        alt=""
        className="h-10 w-10 object-contain transition group-hover:scale-105"
        aria-hidden="true"
      />
    </a>
  );
};

export default FloatingWhatsApp;
