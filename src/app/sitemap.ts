import type { MetadataRoute } from "next"; import { business } from "@/config/business";
export default function sitemap(): MetadataRoute.Sitemap { if (!business.canonicalUrl) return []; const base = business.canonicalUrl.replace(/\/$/, ""); return [{ url: base, changeFrequency: "monthly", priority: 1 }, { url: `${base}/request-a-quote/`, changeFrequency: "yearly", priority: 0.8 }]; }
