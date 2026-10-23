import { Link } from "react-router-dom";
import { CheckIcon, ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../components/Icons";
import LocationMap from "../components/LocationMap";
import PriceBoard from "../components/PriceBoard";
import { business, orderSteps, rupiah, satuanGroups, services, waLink } from "../data/content";
import usePageMeta from "../hooks/usePageMeta";
import { homeMeta } from "../seo";

const meta = homeMeta();

const LandingPage = () => {
  usePageMeta(meta);

  return (
    <>
      {/* Hero + papan harga */}
      <div className="container grid gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-600">
            <PinIcon className="h-4 w-4" />
            Rawa Buntu, Serpong
          </p>
          <h1 className="mt-4 max-w-[14ch] text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-navy sm:text-6xl lg:text-[4.25rem]">
            Laundry bersih dan murah, dekat rumah.
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-navy-soft">
            Cuci komplit {rupiah(6000)} per kilo, selesai 2 hari. Lagi buru-buru? Ada kilat 4 jam.
            Pesan lewat WhatsApp, cucian kami jemput dan antar gratis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Halo Makmur Laundry, saya mau laundry.")}
              target="_blank"
              rel="noreferrer"
              className="btn-wa px-7 py-3.5 text-base"
            >
              <WhatsAppIcon />
              Pesan lewat WhatsApp
            </a>
            <Link to="/#satuan" className="btn-outline px-7 py-3.5 text-base">
              Harga satuan
            </Link>
          </div>
          <p className="mt-8 flex items-start gap-2 text-[15px] text-navy-soft">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
            <span>
              Langganan {business.stats.customers} pelanggan sekitar Serpong, lebih dari{" "}
              {business.stats.ordersPerMonth.replace("+", "")} nota setiap bulan.
            </span>
          </p>
        </div>
        <div className="lg:col-span-5">
          <PriceBoard />
        </div>
      </div>

      {/* Harga satuan */}
      <section id="satuan" aria-labelledby="satuan-title" className="bg-brand-50 py-16 lg:py-24">
        <div className="container">
          <div className="max-w-2xl">
            <h2 id="satuan-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Harga satuan
            </h2>
            <p className="mt-3 text-lg text-navy-soft">
              Untuk barang yang tidak ikut timbangan kiloan. Harga reguler, selesai 2 hari kecuali
              disebut lain.
            </p>
          </div>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {satuanGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-bold text-brand-700">{group.title}</h3>
                {group.note && <p className="text-sm text-navy-muted">{group.note}</p>}
                <ul className="mt-3 space-y-2 text-[15px]">
                  {group.items.map((item) => (
                    <li key={item.name} className="leader text-navy">
                      <span>{item.name}</span>
                      <span className="font-semibold tabular-nums">
                        {rupiah(item.price)}
                        {item.unit && <span className="font-normal text-navy-muted">/{item.unit}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="self-end rounded-[20px] bg-white p-6">
              <p className="font-semibold">Barangnya tidak ada di daftar?</p>
              <p className="mt-1 text-[15px] text-navy-soft">
                Kirim foto lewat WhatsApp, kami kabari harganya.
              </p>
              <a
                href={waLink("Halo, saya mau tanya harga cuci untuk barang ini:")}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-wa hover:underline"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Tanya harga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Halaman layanan */}
      <section aria-labelledby="layanan-title" className="py-16 lg:py-24">
        <div className="container">
          <h2 id="layanan-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Layanan
          </h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/layanan/${service.slug}`}
                  className="group grid gap-1 py-5 sm:grid-cols-[16rem,1fr,auto] sm:items-baseline sm:gap-8"
                >
                  <span className="text-lg font-bold text-navy group-hover:text-brand-600">
                    {service.title}
                  </span>
                  <span className="text-[15px] text-navy-soft">{service.summary}</span>
                  <span className="text-sm font-semibold text-brand-600 group-hover:underline">
                    Lihat harga
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cara pesan */}
      <section id="cara-pesan" aria-labelledby="cara-title" className="bg-navy py-16 text-white lg:py-24">
        <div className="container">
          <h2 id="cara-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Cara pesan
          </h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {orderSteps.map((step, idx) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-sun text-lg font-extrabold text-navy"
                >
                  {idx + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-white/75">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-8">
            <span className="text-sm text-white/60">Pembayaran</span>
            {business.paymentMethods.map((method) => (
              <span key={method} className="rounded-full border border-white/25 px-4 py-1.5 text-sm font-semibold">
                {method}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section id="lokasi" aria-labelledby="lokasi-title" className="py-16 lg:py-24">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 id="lokasi-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Mampir ke outlet
            </h2>
            <address className="mt-6 flex gap-3 text-lg not-italic leading-relaxed text-navy-soft">
              <PinIcon className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              {business.address}
            </address>
            <p className="mt-4 flex gap-3 text-lg text-navy-soft">
              <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              <span>
                <a href={waLink()} target="_blank" rel="noreferrer" className="font-semibold text-navy hover:text-brand-600">
                  {business.phoneDisplay}
                </a>{" "}
                (WhatsApp & telepon)
              </span>
            </p>
            <p className="mt-4 flex gap-3 text-lg text-navy-soft">
              <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              Buka {business.hours.label.toLowerCase()}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={business.mapsLink} target="_blank" rel="noreferrer" className="btn-primary">
                Petunjuk arah
              </a>
              <a href={waLink("Halo, saya mau minta jemput cucian.")} target="_blank" rel="noreferrer" className="btn-outline">
                Minta dijemput
              </a>
            </div>
          </div>
          <LocationMap />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
