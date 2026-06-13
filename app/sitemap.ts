import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
