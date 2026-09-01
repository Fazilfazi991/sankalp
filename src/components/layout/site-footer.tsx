import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";
import { business } from "@/config/business";

export function SiteFooter() {
  const hasContact = Boolean(business.phone || business.email || business.address);
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandMark />
          <p>Corporate gifting, custom apparel, branded merchandise and professional printing for Bengaluru businesses.</p>
          <Link className="text-link text-link--light" href="/request-a-quote/">Start a requirement <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <div><h2>Explore</h2><Link href="/#products">Products</Link><Link href="/#corporate-gifting">Corporate gifting</Link><Link href="/#custom-apparel">Custom apparel</Link><Link href="/#pillars">Printing & branding</Link></div>
        <div><h2>Company</h2><Link href="/#why-sankalp">About</Link><Link href="/#how-it-works">How it works</Link><Link href="/#faqs">FAQs</Link><Link href="/request-a-quote/">Request a quote</Link></div>
        {hasContact ? <div><h2>Contact</h2>{business.phone ? <a href={`tel:${business.phone}`}>{business.phone}</a> : null}{business.email ? <a href={`mailto:${business.email}`}>{business.email}</a> : null}{business.address ? <p>{business.address}</p> : null}</div> : null}
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {business.brandName}</span><span>Temporary visual identity · approved brand assets required</span></div>
    </footer>
  );
}
