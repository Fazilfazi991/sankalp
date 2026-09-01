import type { MetadataRoute } from "next"; import { business } from "@/config/business";
export default function robots(): MetadataRoute.Robots { if (!business.canonicalUrl) return { rules: { userAgent: "*", disallow: "/" } }; return { rules: { userAgent: "*", allow: "/" }, sitemap: `${business.canonicalUrl.replace(/\/$/, "")}/sitemap.xml`, host: business.canonicalUrl }; }

