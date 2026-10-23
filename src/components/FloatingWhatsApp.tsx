import { waLink } from "../data/content";
import { WhatsAppIcon } from "./Icons";

/** Tombol WA tetap di layar HP; desktop sudah punya tombol di navbar. */
const FloatingWhatsApp = () => (
  <a
    href={waLink()}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat Makmur Laundry lewat WhatsApp"
    className="fixed bottom-5 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_6px_20px_-6px_rgba(11,37,69,0.45)] md:hidden"
  >
    <WhatsAppIcon className="h-7 w-7" />
  </a>
);

export default FloatingWhatsApp;
