// Ubah SPA hasil `vite build` jadi HTML statis per halaman (SEO + tampil tanpa menunggu JS).
// Jalan setelah build client (dist/) dan build SSR (dist-server/).
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const serverDir = join(root, "dist-server");

const { render, allPages, headHtml, notFoundMeta, SITE_URL } = await import(
  join(serverDir, "entry-server.js")
);

const template = await readFile(join(dist, "index.html"), "utf8");
// Judul bawaan template diganti judul per halaman dari headHtml.
const base = template.replace(/<title>[\s\S]*?<\/title>\s*/, "");

const page = async (path, meta, options) =>
  base.replace("<!--head-->", headHtml(meta, options)).replace("<!--app-->", await render(path));

const writePage = async (file, html) => {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
};

const pages = allPages();
for (const meta of pages) {
  const file = meta.path === "/" ? join(dist, "index.html") : join(dist, `${meta.path}.html`);
  await writePage(file, await page(meta.path, meta));
  console.log(`prerender ${meta.path}`);
}
await writePage(join(dist, "404.html"), await page("/404", notFoundMeta(), { indexable: false }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (meta) =>
      `  <url><loc>${SITE_URL}${meta.path}</loc><lastmod>${today}</lastmod><priority>${
        meta.path === "/" ? "1.0" : "0.8"
      }</priority></url>`
  )
  .join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);
await writeFile(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

await rm(serverDir, { recursive: true, force: true });
console.log(`sitemap & robots → ${SITE_URL}`);
