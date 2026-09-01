import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="brand-line">From brief to branded result.</p>
          <h1>Corporate Gifts, Custom Apparel &amp; Branded Merchandise in Bangalore</h1>
          <p className="hero__lede">Corporate gifting, customised apparel, promotional merchandise and professional printing for teams, events and businesses across Bengaluru.</p>
          <div className="hero__actions">
            <Link className="button button--primary button--large" href="/request-a-quote/">Request a Quote <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className="button button--quiet button--large" href="/#products">Explore Products <ArrowDownRight size={18} aria-hidden="true" /></Link>
          </div>
          <p className="hero__helper">Start with your requirement, approximate quantity and date. You do not need to know the right customisation method.</p>
        </div>
        <div className="hero__visual">
          <Image src="/hero-merchandise-development.png" alt="Unbranded development composition of a gift box, polo shirt, bottle, mug, notebook, tote and event lanyard" fill loading="eager" sizes="(max-width: 900px) 100vw, 54vw" />
          <div className="hero__visual-label"><span>Generated, unbranded development image</span><strong>Replace with real Sankalp work</strong></div>
        </div>
      </div>
    </section>
  );
}
