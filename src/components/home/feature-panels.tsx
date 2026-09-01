import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export function FeaturePanels() {
  return (
    <>
      <section className="feature feature--blue" id="corporate-gifting">
        <div className="container feature__grid">
          <div className="feature__copy"><h2>Corporate gifting starts with who it is for—and why.</h2><p>Plan employee, client or event gifting around the recipient, occasion, quantity and budget before selecting the final products.</p><ul><li><Check aria-hidden="true" /> Employee and onboarding briefs</li><li><Check aria-hidden="true" /> Client and event requirements</li><li><Check aria-hidden="true" /> Flexible product combinations</li></ul><Link className="button button--light" href="/request-a-quote/?type=corporate-gifting">Get a Corporate Gifting Quote <ArrowRight size={18} aria-hidden="true" /></Link></div>
          <div className="feature-photo"><Image src="/hero-merchandise-development.png" alt="Generated, unbranded development composition showing a gift box with apparel and branded-product directions" fill sizes="(max-width: 760px) 100vw, 50vw" /><span>Generated, unbranded development image</span></div>
        </div>
      </section>
      <section className="feature feature--ink" id="custom-apparel">
        <div className="container feature__grid feature__grid--reverse">
          <div className="feature-photo feature-photo--apparel"><Image src="/apparel-development.png" alt="Generated, unbranded development composition of blank polos, T-shirts, a cap and fabric swatches" fill sizes="(max-width: 760px) 100vw, 50vw" /><span>Generated, unbranded development image</span></div>
          <div className="feature__copy"><h2>Apparel planned for the people who will wear it.</h2><p>Start with the team, event or staff requirement. Product, fabric, fit and branding recommendations can follow after the brief is understood.</p><div className="chip-row"><span>Team apparel</span><span>Event T-shirts</span><span>Staff requirements</span><span>Brand merchandise</span></div><Link className="button button--light" href="/request-a-quote/?type=custom-apparel">Get a T-Shirt Quote <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </>
  );
}
