import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://unc.fund";
const routes = ["", "/pitch", "/thesis", "/nephews", "/anti-portfolio", "/notes", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({ url: `${base}${r}`, lastModified, changeFrequency: r === "" ? "weekly" : "monthly", priority: r === "" ? 1 : r === "/pitch" ? 0.9 : 0.6 }));
}
