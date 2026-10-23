import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import { notFoundMeta } from "../seo";

const meta = notFoundMeta();

const NotFoundPage = () => {
  usePageMeta(meta);
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">Halaman tidak ditemukan</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-navy-soft">
        Alamatnya mungkin salah ketik atau halamannya sudah dipindah.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Ke beranda
      </Link>
    </div>
  );
};

export default NotFoundPage;
