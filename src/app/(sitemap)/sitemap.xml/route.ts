import { getServerSideSitemapIndex } from "next-sitemap";

export async function GET(request: Request) {
  const routes = [
    "general.xml",
    "lowongan.xml",
    "berita.xml",
    "acara.xml",
    "development-program.xml",
  ];
  const SITEMAP_URL = "https://example.com";
  const routesWithBase = routes.map(
    (route) => `${SITEMAP_URL}/sitemap/${route}`
  );
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Content-Type", "application/xml");
  return getServerSideSitemapIndex(routesWithBase, requestHeaders);
}
