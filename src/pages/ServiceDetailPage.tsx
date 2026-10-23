import { Link, useParams } from "react-router-dom";
import { WhatsAppIcon } from "../components/Icons";
import { business, rupiah, services, waLink } from "../data/content";
import usePageMeta from "../hooks/usePageMeta";
import { serviceMeta } from "../seo";
import NotFoundPage from "./NotFoundPage";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((item) => item.slug === slug);
  if (!service) return <NotFoundPage />;
  return <ServiceDetail service={service} />;
};

const ServiceDetail = ({ service }: { service: (typeof services)[number] }) => {
  usePageMeta(serviceMeta(service));
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <div className="container pb-16 pt-8 lg:pb-24">
      <nav aria-label="Breadcrumb" className="text-sm text-navy-muted">
        <Link to="/" className="hover:text-brand-600">
          Beranda
        </Link>
        <span aria-hidden="true" className="mx-2">/</span>
        <span className="text-navy">{service.title}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.02em] sm:text-5xl">
            {service.title} di {business.area}
          </h1>
          {service.intro.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-[38rem] text-lg leading-relaxed text-navy-soft">
              {paragraph}
            </p>
          ))}
          <dl className="mt-8 grid max-w-[38rem] gap-4 sm:grid-cols-2">
            <div className="rounded-[20px] bg-brand-50 p-5">
              <dt className="text-sm text-navy-muted">Lama pengerjaan</dt>
              <dd className="mt-1 font-bold">{service.turnaround}</dd>
            </div>
            <div className="rounded-[20px] bg-brand-50 p-5">
              <dt className="text-sm text-navy-muted">Antar-jemput</dt>
              <dd className="mt-1 font-bold">Gratis, pesan lewat WhatsApp</dd>
            </div>
          </dl>
        </div>

        <section aria-labelledby="harga-layanan" className="lg:col-span-5">
          <div className="rounded-[28px] border-2 border-brand-600 p-6 sm:p-8">
            <h2 id="harga-layanan" className="text-2xl font-extrabold tracking-tight">
              Harga
            </h2>
            <ul className="mt-5 space-y-3">
              {service.prices.map((item) => (
                <li key={item.name} className="leader">
                  <span>{item.name}</span>
                  <span className="font-bold tabular-nums">
                    {rupiah(item.price)}
                    {item.unit && <span className="font-normal text-navy-muted">/{item.unit}</span>}
                  </span>
                </li>
              ))}
            </ul>
            {service.notes.length > 0 && (
              <p className="mt-5 text-sm text-navy-muted">{service.notes.join(" ")}</p>
            )}
            <a
              href={waLink(`Halo Makmur Laundry, saya mau pesan ${service.title.toLowerCase()}.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-wa mt-6 w-full"
            >
              <WhatsAppIcon />
              Pesan lewat WhatsApp
            </a>
          </div>
        </section>
      </div>

      <section aria-labelledby="layanan-lain" className="mt-16 border-t border-line pt-10">
        <h2 id="layanan-lain" className="text-xl font-bold">
          Layanan lain
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {others.map((item) => (
            <li key={item.slug}>
              <Link
                to={`/layanan/${item.slug}`}
                className="inline-flex rounded-full border border-line px-4 py-2 text-[15px] font-medium hover:border-brand-600 hover:text-brand-600"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
