# MakmurLaundry Landing Page

MakmurLaundry adalah landing page modern untuk layanan laundry on-demand. Aplikasi ini dibangun dengan React, TypeScript, dan Tailwind CSS agar mudah dikembangkan, memiliki performa tinggi, serta tampil konsisten di berbagai ukuran layar.

## Fitur Utama
- Navigasi sticky dengan smooth scrolling ke setiap section utama.
- Halaman layanan detail dinamis (`/layanan/:slug`) yang menampilkan proses, benefit, dan estimasi waktu.
- Animasi reveal berbasis `IntersectionObserver` melalui hook `useScrollReveal`.
- Komponen reusable seperti `Button` dan `SectionHeading` yang menjaga konsistensi UI.
- Konten terstruktur dalam `src/data/content.ts` sehingga teks dan paket harga mudah diperbarui.

## Teknologi
- Vite 5 sebagai bundler dan dev server.
- React 18 dengan React Router untuk manajemen rute SPA.
- TypeScript 5 untuk pengetikan statis.
- Tailwind CSS 3 dan PostCSS/Autoprefixer untuk styling utilitas.
- Konfigurasi lintasan build siap deploy ke static hosting (Vercel, Netlify, dsb).

## Struktur Proyek Singkat
```
.
├── public/              # Asset statis (favicon, dll.)
├── src/
│   ├── components/      # Komponen UI reusable (Navbar, Button, Footer, SectionHeading)
│   ├── sections/        # Bagian landing page (Hero, Services, Benefits, Pricing, Workflow, Testimonials, CTA)
│   ├── pages/           # Halaman SPA termasuk LandingPage dan ServiceDetailPage
│   ├── data/            # Sumber konten terpusat (layanan, pricing, testimonials, kontak)
│   ├── routes/          # Definisi router React Router
│   └── hooks/           # Hook kustom (mis. animasi reveal)
├── tailwind.config.cjs  # Konfigurasi Tailwind
└── vite.config.ts       # Konfigurasi build Vite
```

## Memulai
### Prasyarat
- Node.js 18 atau lebih baru.
- npm (disertakan bersama Node.js).

### Instalasi
```bash
npm install
```

### Pengembangan Lokal
```bash
npm run dev
```
Perintah di atas menjalankan server pengembangan Vite. Buka `http://localhost:5173` di browser untuk melihat hasilnya.

### Build Produksi
```bash
npm run build
npm run preview
```
`npm run build` menghasilkan bundel produksi di folder `dist/`, sedangkan `npm run preview` membantu memverifikasi hasil build secara lokal.

### Pemeriksaan TypeScript
```bash
npm run typecheck
```
Gunakan perintah ini sebelum deploy untuk memastikan tidak ada error pengetikan.

## Kustomisasi Konten & Styling
- **Konten teks & data**: perbarui file `src/data/content.ts` untuk mengubah layanan, harga, testimoni, maupun informasi kontak.
- **Styling global**: atur `src/index.css` dan `tailwind.config.cjs` untuk penyesuaian warna, tipografi, atau utilitas tambahan.
- **Bagian landing page**: setiap section berada di `src/sections/`, mudah dipisah atau ditambahkan sesuai kebutuhan kampanye.
- **Routing layanan**: slug pada halaman detail mengikuti data di `content.ts`. Tambah layanan baru dengan menambahkan entri slug yang sesuai.

## Deployment
Hasil build (`dist/`) dapat langsung diunggah ke layanan static hosting seperti Netlify, Vercel, GitHub Pages, atau disajikan melalui CDN/hosting pribadi.

## Lisensi
Lisensi belum ditentukan. Tambahkan file `LICENSE` sesuai ketentuan distribusi yang diinginkan.
