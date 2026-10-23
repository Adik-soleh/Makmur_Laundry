import { useState } from "react";
import { business, kiloan, rupiah, speeds } from "../data/content";

/** Papan harga kiloan, meniru papan harga di outlet: pilih kecepatan, harga ikut berubah. */
const PriceBoard = () => {
  const [speedKey, setSpeedKey] = useState(speeds[0].key);
  const speed = speeds.find((item) => item.key === speedKey) ?? speeds[0];

  return (
    <section
      id="harga"
      aria-labelledby="harga-title"
      className="relative rounded-[28px] bg-brand-600 p-6 text-white sm:p-8"
    >
      <p className="absolute -top-4 right-5 rotate-3 rounded-full bg-sun px-4 py-1.5 text-sm font-extrabold text-navy sm:right-8">
        Antar-jemput gratis
      </p>
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="harga-title" className="text-2xl font-extrabold tracking-tight">
          Harga kiloan
        </h2>
        <span className="text-sm text-brand-100">per kg</span>
      </div>

      <div
        role="radiogroup"
        aria-label="Kecepatan selesai"
        className="mt-5 grid grid-cols-3 gap-1 rounded-full bg-brand-800/60 p-1"
      >
        {speeds.map((item) => {
          const active = item.key === speed.key;
          return (
            <button
              key={item.key}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setSpeedKey(item.key)}
              className={`rounded-full px-2 py-2 text-center text-sm font-bold transition-colors focus-visible:ring-white focus-visible:ring-offset-brand-600 ${
                active ? "bg-white text-brand-700" : "text-white/85 hover:text-white"
              }`}
            >
              {item.name}
              <span className={`block text-xs font-medium ${active ? "text-navy-muted" : "text-brand-100"}`}>
                {item.duration}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-6 space-y-5" aria-live="polite">
        {kiloan.map((item) => (
          <li key={item.name} className="leader text-white">
            <span>
              <span className="block text-lg font-bold leading-tight">{item.name}</span>
              <span className="block text-sm text-brand-100">{item.detail}</span>
            </span>
            <span className="text-3xl font-extrabold tabular-nums tracking-tight">
              {rupiah(item.price + speed.extra)}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-6 border-t border-white/20 pt-4 text-sm text-brand-100">
        Selesai dalam {speed.duration}. Minimal {business.minKiloanKg} kg per nota.
      </p>
    </section>
  );
};

export default PriceBoard;
