export const navigationLinks = [
  { label: "Layanan", href: "#services" },
  { label: "Cara Kerja", href: "#workflow" },
  { label: "Keunggulan", href: "#benefits" },
  { label: "Paket", href: "#pricing" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Kontak", href: "#contact" }
];

export const heroStats = [
  { label: "Pesanan selesai", value: "125K+" },
  { label: "Pelanggan aktif", value: "18K" },
  { label: "Rating pelanggan", value: "4.9/5" }
];

export const partnerLogos = ["CleanExpress", "LaundryHub", "FreshWave", "SpinCycle"];

export const services = [
  {
    slug: "laundry-kiloan",
    title: "Laundry Kiloan",
    description: "Cucian harian bersih, wangi, dan terlipat rapi dengan layanan antar-jemput gratis.",
    icon: "laundry",
    longDescription:
      "Laundry kiloan MakmurLaundry dirancang untuk kebutuhan harian keluarga maupun kos. Kami menggunakan deterjen food grade, pelembut hipoalergenik, dan mesin industri yang dibersihkan secara berkala guna memastikan higienitas.",
    process: [
      {
        title: "Penjemputan Terjadwal",
        description:
          "Kurir kami tiba sesuai jam penjemputan, melakukan pengecekan singkat, lalu menimbang cucian tanpa biaya tambahan."
      },
      {
        title: "Pencucian dan Pengeringan",
        description:
          "Proses cuci menggunakan mesin berkapasitas besar dengan pemisahan berdasarkan warna dan jenis kain untuk menjaga kualitas."
      },
      {
        title: "Penyetrikaan dan Pengemasan",
        description:
          "Setrika uap memastikan pakaian rapi bebas kusut, kemudian dikemas dalam packaging breathable agar tetap segar saat diterima."
      }
    ],
    benefits: [
      "Gratis antar-jemput untuk radius 10 km",
      "Parfum premium tahan hingga 7 hari",
      "Layanan ekspres tersedia (8 jam selesai)"
    ],
    turnaround: "12 - 24 jam"
  },
  {
    slug: "dry-cleaning-premium",
    title: "Dry Cleaning Premium",
    description: "Perawatan khusus untuk pakaian formal, batik, dan bahan sensitif oleh tenaga profesional.",
    icon: "dry",
    longDescription:
      "Dry cleaning premium fokus pada pakaian dengan material sensitif seperti sutra, wool, dan batik eksklusif. Kami menggunakan pelarut ramah lingkungan dan menjaga suhu agar serat kain tetap awet.",
    process: [
      {
        title: "Inspeksi Detail",
        description:
          "Tim quality control memeriksa label perawatan, jenis noda, dan struktur kain untuk menentukan formula terbaik."
      },
      {
        title: "Dry Cleaning Khusus",
        description:
          "Proses pembersihan menggunakan mesin khusus dengan pelarut cair berkualitas tinggi dan siklus yang disesuaikan."
      },
      {
        title: "Finishing Profesional",
        description:
          "Pakaian disetrika profesional, diberi cover pelindung, dan digantung agar bentuk tetap presisi sampai diterima."
      }
    ],
    benefits: [
      "Menjaga warna dan tekstur kain premium",
      "Garansi anti susut dan anti pudar",
      "Pengecekan ulang sebelum pengemasan"
    ],
    turnaround: "24 jam"
  },
  {
    slug: "cuci-linen",
    title: "Cuci Sprei & Bedcover",
    description: "Seprai, bedcover, dan selimut dicuci dengan deterjen hipoalergenik agar tetap higienis.",
    icon: "linen",
    longDescription:
      "Linen care MakmurLaundry menggunakan bahan pembersih hipoalergenik yang aman untuk kulit sensitif sehingga ideal bagi keluarga dan bisnis hospitality.",
    process: [
      {
        title: "Pre-treatment Noda",
        description:
          "Semua noda membandel dan area bernoda dipre-treatment manual untuk memastikan hasil maksimal."
      },
      {
        title: "Cuci Kapasitas Besar",
        description:
          "Proses cuci dilakukan dengan mesin industrial yang menjaga serat tetap lembut dan tidak melar."
      },
      {
        title: "Penyetrikaan Flatwork",
        description:
          "Mesin flatwork ironer memastikan sprei dan bedcover bebas kusut serta terlipat rapi sesuai standar hotel."
      }
    ],
    benefits: [
      "Pakai deterjen hipoalergenik",
      "Gratis fold & pack sesuai permintaan",
      "Ideal untuk apartemen, kos, dan hotel"
    ],
    turnaround: "24 - 36 jam"
  },
  {
    slug: "perawatan-sepatu-tas",
    title: "Sepatu & Tas",
    description: "Treatment khusus untuk menjaga bentuk dan warna sepatu serta tas favorit Anda.",
    icon: "shoe",
    longDescription:
      "Perawatan sepatu dan tas mencakup pembersihan mendalam hingga detailing finishing untuk menjaga bentuk, warna, serta material tetap prima.",
    process: [
      {
        title: "Pemeriksaan Material",
        description:
          "Material dianalisis untuk menentukan teknik pembersihan terbaik, mulai dari suede, kulit, hingga canvas."
      },
      {
        title: "Detailing Manual",
        description:
          "Setiap bagian dibersihkan manual menggunakan brush khusus dan cairan premium agar noda hilang tanpa merusak bahan."
      },
      {
        title: "Finishing & Proteksi",
        description:
          "Aplikasi pelindung anti air dan anti noda menjaga sepatu dan tas tetap fresh, disertai bentuk yang dipertahankan dengan shoe tree."
      }
    ],
    benefits: [
      "Pembersihan mendalam tanpa merusak bahan",
      "Proteksi tambahan anti air untuk material kulit",
      "Gratis pergantian tali standar bila diperlukan"
    ],
    turnaround: "48 jam"
  }
];

export const workflow = [
  {
    step: "1",
    title: "Pesan Jadwal",
    description: "Pilih layanan dan tentukan jadwal penjemputan langsung dari aplikasi atau WhatsApp."
  },
  {
    step: "2",
    title: "Proses Profesional",
    description: "Tim kami mencuci, mengeringkan, dan menyetrika pakaian Anda sesuai SOP dan standar kebersihan."
  },
  {
    step: "3",
    title: "Antar Tepat Waktu",
    description: "Cucian dikemas rapi dan diantar kembali ke alamat Anda tepat waktu, siap langsung dipakai."
  }
];

export const benefits = [
  {
    title: "Garansi Kebersihan",
    description:
      "Proses pencucian menggunakan mesin industri, deterjen food grade, dan air yang difiltrasi sehingga pakaian terjamin higienis."
  },
  {
    title: "Realtime Tracking",
    description:
      "Pantau status cucian Anda dari penjemputan hingga pengantaran melalui dashboard pelanggan atau chatbot WhatsApp."
  },
  {
    title: "Support 7 Hari",
    description:
      "Customer success kami siap membantu setiap hari. Ajukan komplain, perubahan jadwal, atau permintaan khusus dengan mudah."
  }
];

export const pricingPlans = [
  {
    name: "Cuci Komplit",
    price: "Mulai 6K / kg",
    tagline: "Cuci, kering, setrika dengan layanan reguler hingga kilat.",
    highlights: [
      "Reguler 6K/kg · Selesai 2 hari",
      "Satu Hari 8K/kg · Selesai 24 jam",
      "Kilat 10K/kg · Selesai 4 jam"
    ]
  },
  {
    name: "Setrika",
    price: "Mulai 3K / kg",
    tagline: "Hanya setrika dengan pilihan reguler, satu hari, hingga kilat.",
    highlights: [
      "Reguler 3K/kg · Selesai 2 hari",
      "Satu Hari 5K/kg · Selesai 24 jam",
      "Kilat 7K/kg · Selesai 4 jam"
    ]
  },
  {
    name: "Cuci Lipat",
    price: "Mulai 3K / kg",
    tagline: "Cuci, kering, lipat untuk kebutuhan harian keluarga.",
    highlights: [
      "Reguler 3K/kg · Selesai 2 hari",
      "Satu Hari 5K/kg · Selesai 24 jam",
      "Kilat 7K/kg · Selesai 4 jam"
    ]
  }
];

export const testimonials = [
  {
    name: "Ayu Pramesti",
    role: "Owner Kos Putri Harmoni",
    quote:
      "Layanan MakmurLaundry sangat membantu operasional harian. Cucian selalu tepat waktu dan tim support sigap ketika ada permintaan tambahan."
  },
  {
    name: "Dimas Wirawan",
    role: "Product Manager",
    quote:
      "Seluruh pakaian kerja saya ditangani di sini. Wangi tahan lama dan tidak pernah ada pakaian hilang. Tracking statusnya juga transparan sekali."
  },
  {
    name: "Siska Julianti",
    role: "Ibu Rumah Tangga",
    quote:
      "Sangat praktis! Tinggal pesan, kurir datang menjemput dan mengantarkan kembali. Harga bersaing dengan hasil yang maksimal."
  }
];

export const contactInfo = {
  address: "Jl. Palm Sulur III, Blok BK No.22, BSD - Tangerang Selatan",
  phone: "628999761125",
  email: "halo@MakmurLaundry.id",
  socials: [
    { label: "Instagram", href: "https://instagram.com/MakmurLaundry" },
    { label: "LinkedIn", href: "https://linkedin.com/company/MakmurLaundry" },
    { label: "WhatsApp", href: "https://wa.me/628999761125" }
  ]
};
