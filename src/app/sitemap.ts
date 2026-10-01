import type { MetadataRoute } from "next";

const SITE_URL = "https://petspaandgrooming.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/book", "/gallery", "/about", "/reviews", "/contact"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/book" ? 0.9 : 0.7,
  }));
}
