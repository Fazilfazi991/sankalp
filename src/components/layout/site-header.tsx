import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/corporate-gifting/">Corporate Gifting</Link>
          <Link href="/custom-apparel/">Custom Apparel</Link>
          <Link href="/custom-t-shirt-printing/">T-Shirt Printing</Link>
          <Link href="/#pillars">Promotional Merchandise</Link>
          <Link href="/#methods">Printing &amp; Branding</Link>
          <Link href="/#why-sankalp">About</Link>
          <Link href="/request-a-quote/">Contact</Link>
        </nav>
        <Link className="button button--primary header-quote" href="/request-a-quote/">Request a Quote <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <MobileNav />
      </div>
    </header>
  );
}
