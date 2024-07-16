import { getServerSideSitemapIndex } from "next-sitemap";

export async function GET() {
  const routes = [
    "general.xml",
    "lowongan.xml",
    "berita.xml",
    "acara.xml",
    "development-program.xml",
  ];
  const SITEMAP_URL = "https://test-seo-olive.vercel.app";
  const routesWithBase = routes.map(
    (route) => `${SITEMAP_URL}/sitemap/${route}`
  );
  return getServerSideSitemapIndex(routesWithBase, {
    "Content-Type": "application/xml",
  });
}
