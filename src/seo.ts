import { business, kiloan, services, type ServicePage } from "./data/content";

/** Domain kanonik. Set VITE_SITE_URL di env Vercel saat pindah domain. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://makmurlaundry.vercel.app").replace(
  /\/+$/,
  ""
);

export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  jsonLd: Record<string, unknown>[];
};

const businessId = () => `${SITE_URL}/#makmur-laundry`;

const localBusiness = () => ({
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  "@id": businessId(),
  name: business.name,
  slogan: business.tagline,
  description:
    "Laundry kiloan dan satuan di Rawa Buntu, Serpong. Cuci komplit Rp6.000/kg, pilihan reguler 2 hari, express 24 jam, dan kilat 4 jam.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.jpeg`,
  image: `${SITE_URL}/logo.jpeg`,
  telephone: `+${business.phone}`,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: business.hours.opens,
    closes: business.hours.closes
  },
  priceRange: "Rp3.000 - Rp170.000",
  currenciesAccepted: "IDR",
  paymentAccepted: business.paymentMethods.join(", "),
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    addressLocality: business.locality,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: "ID"
  },
  geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
  hasMap: business.mapsLink,
  areaServed: ["Rawa Buntu", "Serpong", "BSD City", "Tangerang Selatan"].map((name) => ({
    "@type": "Place",
    name
  })),
  sameAs: [business.instagram],
  makesOffer: kiloan.map((item) => ({
    "@type": "Offer",
    name: item.name,
    priceCurrency: "IDR",
    price: item.price,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: item.price,
      priceCurrency: "IDR",
      unitCode: "KGM",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "KGM" }
    },
    itemOffered: { "@type": "Service", name: item.name, description: item.detail }
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Makmur Laundry",
    itemListElement: services.map((service) => ({
      "@type": "OfferCatalog",
      name: service.title,
      url: absoluteUrl(`/layanan/${service.slug}`)
    }))
  }
});

const servicePage = (service: ServicePage) => {
  const url = absoluteUrl(`/layanan/${service.slug}`);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.seoDescription,
      url,
      provider: { "@id": businessId() },
      areaServed: { "@type": "Place", name: "Serpong, Tangerang Selatan" },
      offers: service.prices.map((item) => ({
        "@type": "Offer",
        name: item.name,
        price: item.price,
        priceCurrency: "IDR"
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: business.name, item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: service.title, item: url }
      ]
    }
  ];
};

export const homeMeta = (): PageMeta => ({
  path: "/",
  title: "Makmur Laundry Rawa Buntu, Serpong | Laundry Kiloan Bersih dan Murah",
  description:
    "Laundry kiloan di Rawa Buntu, Serpong. Cuci komplit Rp6.000/kg, selesai 2 hari atau kilat 4 jam. Antar-jemput gratis, buka setiap hari 07.00–22.00.",
  jsonLd: [localBusiness()]
});

export const serviceMeta = (service: ServicePage): PageMeta => ({
  path: `/layanan/${service.slug}`,
  title: `${service.seoTitle} | Makmur Laundry`,
  description: service.seoDescription,
  jsonLd: servicePage(service)
});

export const notFoundMeta = (): PageMeta => ({
  path: "/404",
  title: "Halaman tidak ditemukan | Makmur Laundry",
  description: "Halaman yang Anda cari tidak ada. Lihat harga dan layanan Makmur Laundry di beranda.",
  jsonLd: []
});

/** Semua halaman yang di-prerender & masuk sitemap. */
export const allPages = (): PageMeta[] => [homeMeta(), ...services.map(serviceMeta)];

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Tag <head> per halaman, disisipkan saat prerender. */
export const headHtml = (meta: PageMeta, { indexable = true } = {}) => {
  const url = absoluteUrl(meta.path);
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);
  const image = `${SITE_URL}/logo.jpeg`;
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    indexable
      ? `<link rel="canonical" href="${url}" />`
      : `<meta name="robots" content="noindex" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="id_ID" />`,
    `<meta property="og:site_name" content="${business.name}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="500" />`,
    `<meta property="og:image:height" content="500" />`,
    `<meta property="og:image:alt" content="Logo Makmur Laundry" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...meta.jsonLd.map(
      (data) =>
        `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`
    )
  ];
  return tags.join("\n    ");
};
