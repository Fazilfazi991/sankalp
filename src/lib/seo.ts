import type { Metadata } from "next";
import { business } from "@/config/business";

export const siteDescription =
  "Corporate gifting, customised apparel, promotional merchandise and professional printing for teams, events and businesses across Bengaluru.";

export function absoluteUrl(path = "/"): string | null {
  if (!business.canonicalUrl) return null;
  return new URL(path, business.canonicalUrl).toString();
}

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const canonical = absoluteUrl(path);
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical ?? undefined,
      siteName: business.brandName,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

