import { Link } from "react-router-dom";

const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5" aria-label="Makmur Laundry, ke beranda">
    <img
      src="/logo-96.webp"
      alt=""
      width={40}
      height={40}
      className="h-10 w-10 rounded-full bg-white"
    />
    <span className={`text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
      Makmur <span className={light ? "text-brand-200" : "text-brand-600"}>Laundry</span>
    </span>
  </Link>
);

export default Logo;
