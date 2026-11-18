import type { MetadataRoute } from "next";

const routes: MetadataRoute.Sitemap = [
  { url: "https://www.infl8.net/", priority: 1.0 },
  { url: "https://www.infl8.net/gallery", priority: 0.7 },
  { url: "https://www.infl8.net/about", priority: 0.7 },
  { url: "https://www.infl8.net/balloon-menu", priority: 0.7 },
  { url: "https://www.infl8.net/book-online", priority: 0.7 },
  { url: "https://www.infl8.net/faqs", priority: 0.7 },
  { url: "https://www.infl8.net/privacy", priority: 0.7 },
  { url: "https://www.infl8.net/accessibility", priority: 0.7 },
  { url: "https://www.infl8.net/terms", priority: 0.7 },
].map((entry) => ({ ...entry, changeFrequency: "monthly", lastModified: new Date() }));

export default function sitemap(): MetadataRoute.Sitemap {
  return routes;
}
