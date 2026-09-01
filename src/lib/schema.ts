import { business } from "@/config/business";
import { absoluteUrl } from "@/lib/seo";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd | null {
  const url = absoluteUrl();
  if (!url) return null;
  const sameAs = [business.instagram, business.facebook, business.linkedin].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.brandName,
    url,
    telephone: business.phone ?? undefined,
    email: business.email ?? undefined,
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function localBusinessSchema(): JsonLd | null {
  const url = absoluteUrl();
  if (!url || !business.address || !business.postalCode || (!business.phone && !business.email)) return null;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.brandName,
    url,
    telephone: business.phone ?? undefined,
    email: business.email ?? undefined,
    ...(business.googleMapsUrl ? { hasMap: business.googleMapsUrl } : {}),
    ...(business.instagram ? { sameAs: [business.instagram] } : {}),
    ...(business.businessHours ? {
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: business.businessHours.days,
        opens: business.businessHours.opens,
        closes: business.businessHours.closes,
      },
    } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
  };
}

export function websiteSchema(): JsonLd | null {
  const url = absoluteUrl();
  return url ? { "@context": "https://schema.org", "@type": "WebSite", name: business.brandName, url } : null;
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLd | null {
  if (!business.canonicalUrl) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const serviceSchema = (input: { name: string; description: string; path: string }): JsonLd | null => {
  const url = absoluteUrl(input.path);
  return url ? { "@context": "https://schema.org", "@type": "Service", ...input, url, provider: { "@type": "Organization", name: business.brandName } } : null;
};

export const productSchema = (input: { name: string; description: string; image?: string }): JsonLd | null =>
  input.name && input.description ? { "@context": "https://schema.org", "@type": "Product", ...input } : null;

export const articleSchema = (input: { headline: string; path: string; datePublished: string }): JsonLd | null => {
  const url = absoluteUrl(input.path);
  return url ? { "@context": "https://schema.org", "@type": "Article", ...input, url } : null;
};
