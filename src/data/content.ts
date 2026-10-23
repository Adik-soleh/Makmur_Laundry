// Harga & durasi mengikuti master layanan di POS (outlet Makmur Laundry).
// Ubah di sini kalau harga di kasir berubah, lalu build ulang.

export const business = {
  name: "Makmur Laundry",
  tagline: "Bersih dan murah",
  area: "Rawa Buntu, Serpong",
  address:
    "Jl. Kp. Dadap Barat, RT.1/RW.3, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15310",
  streetAddress: "Jl. Kp. Dadap Barat, RT.1/RW.3, Rawa Buntu",
  locality: "Serpong",
  region: "Banten",
  postalCode: "15310",
  // Titik pin "MAKMUR LAUNDRY" di Google Maps (sama dengan embed peta).
  geo: { lat: -6.303959, lng: 106.673584 },
  phone: "628999761125",
  phoneDisplay: "0899-9761-125",
  // Sama dengan jam buka di Google Business.
  hours: { opens: "07:00", closes: "22:00", label: "Setiap hari, 07.00–22.00" },
  email: "halo@MakmurLaundry.id",
  instagram:
    "https://www.instagram.com/makmur_laundry_bsd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311.75616812200116!2d106.67358413959151!3d-6.303958948003792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb5b7ed15d95%3A0x543db4ce698d9bdb!2sMAKMUR%20LAUNDRY!5e1!3m2!1sid!2sid!4v1763708872104!5m2!1sid!2sid",
  mapsLink: "https://www.google.com/maps/dir/?api=1&destination=-6.303959,106.673584",
  paymentMethods: ["Tunai", "Transfer BCA", "QRIS"],
  minKiloanKg: 3,
  // Angka dari data nota POS (Juni–Oktober 2026). Perbarui sesekali.
  stats: {
    customers: "500+",
    ordersPerMonth: "600+"
  }
};

export const waLink = (text?: string) =>
  `https://wa.me/${business.phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navigationLinks = [
  { label: "Harga", href: "#harga" },
  { label: "Satuan", href: "#satuan" },
  { label: "Cara pesan", href: "#cara-pesan" },
  { label: "Lokasi", href: "#lokasi" }
];

export type Speed = { key: string; name: string; duration: string; extra: number };

export const speeds: Speed[] = [
  { key: "reguler", name: "Reguler", duration: "2 hari", extra: 0 },
  { key: "express", name: "Express", duration: "24 jam", extra: 2000 },
  { key: "kilat", name: "Kilat", duration: "4 jam", extra: 4000 }
];

export const kiloan = [
  { name: "Cuci Komplit", detail: "Cuci, kering, setrika", price: 6000 },
  { name: "Cuci Lipat", detail: "Cuci, kering, lipat", price: 5000 },
  { name: "Setrika", detail: "Setrika saja", price: 5000 }
];

export const rupiah = (value: number) => `Rp${value.toLocaleString("id-ID")}`;

export type PriceItem = { name: string; price: number; unit?: string };

export const satuanGroups: { title: string; note?: string; items: PriceItem[] }[] = [
  {
    title: "Sprai & bedcover",
    items: [
      { name: "Sprai kecil", price: 10000 },
      { name: "Sprai sedang + sarung bantal", price: 13000 },
      { name: "Sprai besar", price: 15000 },
      { name: "Bedcover sedang", price: 20000 },
      { name: "Bedcover besar", price: 30000 },
      { name: "Bedcover jumbo", price: 40000 }
    ]
  },
  {
    title: "Selimut & handuk",
    items: [
      { name: "Handuk kecil", price: 3000 },
      { name: "Handuk besar", price: 5000 },
      { name: "Selimut tipis", price: 7000 },
      { name: "Selimut sedang", price: 10000 },
      { name: "Selimut besar", price: 15000 }
    ]
  },
  {
    title: "Pakaian khusus",
    items: [
      { name: "Mukena", price: 10000 },
      { name: "Jaket", price: 15000 },
      { name: "Celana bahan", price: 16000 },
      { name: "Gamis", price: 20000 },
      { name: "Kebaya", price: 20000 },
      { name: "Jas", price: 20000 }
    ]
  },
  {
    title: "Sepatu, tas & boneka",
    note: "Selesai 3–4 hari",
    items: [
      { name: "Sepatu", price: 15000, unit: "pasang" },
      { name: "Sepatu putih", price: 20000, unit: "pasang" },
      { name: "Tas kecil", price: 10000 },
      { name: "Tas besar", price: 25000 },
      { name: "Boneka kecil", price: 10000 },
      { name: "Boneka besar", price: 30000 }
    ]
  },
  {
    title: "Karpet & gorden",
    note: "Karpet tebal selesai ±4 hari",
    items: [
      { name: "Karpet", price: 15000, unit: "meter" },
      { name: "Karpet kecil", price: 40000 },
      { name: "Karpet sedang", price: 45000 },
      { name: "Karpet besar", price: 85000 },
      { name: "Gorden", price: 20000 },
      { name: "Taplak meja", price: 15000 }
    ]
  }
];

export const orderSteps = [
  {
    title: "Chat atau mampir",
    description:
      "Kirim pesan WhatsApp untuk minta dijemput, atau bawa langsung cucian ke outlet di Rawa Buntu."
  },
  {
    title: "Ditimbang, dapat nota",
    description:
      "Cucian ditimbang atau dihitung per item. Di nota tertulis total bayar dan kapan selesai."
  },
  {
    title: "Ambil atau kami antar",
    description: "Kami kabari lewat WhatsApp begitu selesai. Bayar tunai, transfer BCA, atau QRIS."
  }
];

export type ServicePage = {
  slug: string;
  title: string;
  /** Judul halaman untuk mesin pencari. */
  seoTitle: string;
  seoDescription: string;
  summary: string;
  intro: string[];
  prices: PriceItem[];
  turnaround: string;
  notes: string[];
};

export const services: ServicePage[] = [
  {
    slug: "laundry-kiloan",
    title: "Laundry kiloan",
    seoTitle: "Laundry Kiloan Rawa Buntu Serpong, mulai Rp5.000/kg",
    seoDescription:
      "Laundry kiloan di Rawa Buntu, Serpong: cuci komplit Rp6.000/kg, cuci lipat dan setrika Rp5.000/kg. Reguler 2 hari, express 24 jam, kilat 4 jam.",
    summary: "Cuci komplit, cuci lipat, atau setrika saja. Dihitung per kilo, minimal 3 kg.",
    intro: [
      "Cucian harian ditimbang per kilo. Pilih cuci komplit kalau ingin langsung rapi disetrika, cuci lipat kalau cukup bersih dan terlipat, atau setrika saja untuk pakaian yang sudah dicuci di rumah.",
      "Butuh cepat? Pilih Express (selesai 24 jam, tambah Rp2.000/kg) atau Kilat (selesai 4 jam, tambah Rp4.000/kg)."
    ],
    prices: [
      { name: "Cuci Komplit", price: 6000, unit: "kg" },
      { name: "Cuci Lipat", price: 5000, unit: "kg" },
      { name: "Setrika", price: 5000, unit: "kg" }
    ],
    turnaround: "2 hari, 24 jam, atau 4 jam",
    notes: ["Minimal 3 kg per nota.", "Harga untuk layanan reguler 2 hari."]
  },
  {
    slug: "cuci-linen",
    title: "Sprai, bedcover & selimut",
    seoTitle: "Cuci Sprai, Bedcover & Selimut di Serpong",
    seoDescription:
      "Cuci sprai mulai Rp10.000, bedcover mulai Rp20.000, selimut mulai Rp7.000 di Makmur Laundry Rawa Buntu, Serpong.",
    summary: "Dihitung per item sesuai ukuran. Sprai bisa sekalian dengan sarung bantal.",
    intro: [
      "Barang besar seperti bedcover dan selimut tebal dicuci terpisah dari cucian kiloan dan dihitung per item sesuai ukurannya.",
      "Untuk sprai, ada paket sekalian dengan sarung bantal."
    ],
    prices: [
      { name: "Sprai kecil", price: 10000 },
      { name: "Sprai sedang + sarung bantal", price: 13000 },
      { name: "Sprai besar + sarung bantal", price: 15000 },
      { name: "Bedcover sedang", price: 20000 },
      { name: "Bedcover besar", price: 30000 },
      { name: "Bedcover jumbo", price: 40000 },
      { name: "Selimut tipis", price: 7000 },
      { name: "Selimut sedang", price: 10000 },
      { name: "Selimut besar", price: 15000 }
    ],
    turnaround: "2 hari, bisa express 1 hari",
    notes: ["Harga untuk layanan reguler 2 hari."]
  },
  {
    slug: "cuci-satuan",
    title: "Pakaian khusus & satuan",
    seoTitle: "Cuci Jas, Kebaya, Gamis & Pakaian Satuan di Serpong",
    seoDescription:
      "Cuci satuan untuk jas, kebaya, gamis, jaket, mukena, dan celana bahan di Makmur Laundry Rawa Buntu, Serpong. Mulai Rp10.000 per item.",
    summary: "Jas, kebaya, gamis, jaket, dan pakaian lain yang dikerjakan per item.",
    intro: [
      "Pakaian yang tidak cocok dicampur cucian kiloan kami kerjakan per item: jas, kebaya, gamis, jaket, celana bahan, sampai mukena.",
      "Sebagian besar item bisa express (1 hari) atau kilat."
    ],
    prices: [
      { name: "Mukena", price: 10000 },
      { name: "Jaket", price: 15000 },
      { name: "Celana bahan", price: 16000 },
      { name: "Gamis", price: 20000 },
      { name: "Dress", price: 20000 },
      { name: "Kebaya", price: 20000 },
      { name: "Jas", price: 20000 },
      { name: "Seragam", price: 20000 }
    ],
    turnaround: "2 hari, bisa express 1 hari",
    notes: ["Harga untuk layanan reguler 2 hari."]
  },
  {
    slug: "perawatan-sepatu-tas",
    title: "Sepatu, tas & boneka",
    seoTitle: "Cuci Sepatu, Tas & Boneka di Serpong",
    seoDescription:
      "Cuci sepatu mulai Rp15.000/pasang, tas mulai Rp10.000, boneka mulai Rp10.000 di Makmur Laundry Rawa Buntu, Serpong. Selesai 3–4 hari.",
    summary: "Dibersihkan per item, selesai 3–4 hari.",
    intro: [
      "Sepatu, tas, dan boneka dibersihkan per item. Sepatu putih dihitung terpisah karena butuh perhatian lebih.",
      "Pengerjaan 3–4 hari supaya bahan kering sempurna sebelum diambil."
    ],
    prices: [
      { name: "Sepatu", price: 15000, unit: "pasang" },
      { name: "Sepatu putih", price: 20000, unit: "pasang" },
      { name: "Sandal", price: 10000, unit: "pasang" },
      { name: "Tas kecil", price: 10000 },
      { name: "Tas sedang", price: 15000 },
      { name: "Tas besar", price: 25000 },
      { name: "Boneka kecil", price: 10000 },
      { name: "Boneka sedang", price: 20000 },
      { name: "Boneka besar", price: 30000 }
    ],
    turnaround: "3–4 hari",
    notes: []
  },
  {
    slug: "cuci-karpet",
    title: "Karpet & gorden",
    seoTitle: "Cuci Karpet & Gorden di Serpong, BSD",
    seoDescription:
      "Cuci karpet Rp15.000/meter atau per lembar mulai Rp40.000, gorden Rp20.000 di Makmur Laundry Rawa Buntu, Serpong.",
    summary: "Karpet per meter atau per lembar, gorden dan taplak per item.",
    intro: [
      "Karpet bisa dihitung per meter atau per lembar sesuai ukuran. Karpet tebal butuh sekitar 4 hari sampai benar-benar kering.",
      "Gorden dan taplak meja dihitung per item."
    ],
    prices: [
      { name: "Karpet", price: 15000, unit: "meter" },
      { name: "Karpet kecil", price: 40000 },
      { name: "Karpet sedang", price: 45000 },
      { name: "Karpet tebal 2×1,5 m", price: 50000 },
      { name: "Karpet besar", price: 85000 },
      { name: "Gorden", price: 20000 },
      { name: "Taplak meja", price: 15000 }
    ],
    turnaround: "2–4 hari, tergantung ketebalan",
    notes: []
  }
];
