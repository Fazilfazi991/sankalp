import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function QuoteCTA() {
  return <section className="quote-cta"><div className="container quote-cta__inner"><div><h2>Have a branding requirement?</h2><p>Tell us what you need, the approximate quantity and your required date. We’ll use that brief to recommend the appropriate next step.</p></div><Link className="button button--light button--large" href="/request-a-quote/">Request a Quote <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>;
}

