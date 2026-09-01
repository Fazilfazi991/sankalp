import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { business } from "@/config/business";
import { siteDescription } from "@/lib/seo";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";

const instrumentSans = Instrument_Sans({ variable: "--font-instrument", subsets: ["latin"], display: "swap" });
export const metadata: Metadata = { title: { default: "Corporate Gifts & Branded Merchandise Bangalore | Sankalp", template: "%s | Sankalp Branding Solutions" }, description: siteDescription, applicationName: business.brandName, metadataBase: business.canonicalUrl ? new URL(business.canonicalUrl) : undefined };

export default function RootLayout({ children }: LayoutProps<"/">) {
  const schemas = [organizationSchema(), localBusinessSchema(), websiteSchema()].filter(Boolean);
  return <html lang="en" className={instrumentSans.variable}><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter />{schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}</body></html>;
}
