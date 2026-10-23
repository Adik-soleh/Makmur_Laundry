import { useEffect } from "react";
import { absoluteUrl, type PageMeta } from "../seo";

const setAttr = (selector: string, attr: string, value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value);
};

/**
 * HTML awal sudah membawa meta dari prerender; hook ini hanya menyamakan
 * judul & meta saat pindah halaman di sisi klien.
 */
const usePageMeta = (meta: PageMeta) => {
  useEffect(() => {
    document.title = meta.title;
    setAttr('meta[name="description"]', "content", meta.description);
    setAttr('link[rel="canonical"]', "href", absoluteUrl(meta.path));
    setAttr('meta[property="og:url"]', "content", absoluteUrl(meta.path));
    setAttr('meta[property="og:title"]', "content", meta.title);
    setAttr('meta[property="og:description"]', "content", meta.description);
  }, [meta.title, meta.description, meta.path]);
};

export default usePageMeta;
