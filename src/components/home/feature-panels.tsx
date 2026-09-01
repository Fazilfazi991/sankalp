import Link from "next/link";
import { ArrowRight, Box, Check, Shirt } from "lucide-react";

export function FeaturePanels() {
  return (
    <>
      <section className="feature feature--blue" id="corporate-gifting">
        <div className="container feature__grid">
          <div className="feature__copy"><h2>Corporate gifting starts with who it is for—and why.</h2><p>Plan employee, client or event gifting around the recipient, occasion, quantity and budget before selecting the final products.</p><ul><li><Check aria-hidden="true" /> Employee and onboarding briefs</li><li><Check aria-hidden="true" /> Client and event requirements</li><li><Check aria-hidden="true" /> Flexible product combinations</li></ul><Link className="button button--light" href="/request-a-quote/?type=corporate-gifting">Get a Corporate Gifting Quote <ArrowRight size={18} aria-hidden="true" /></Link></div>
          <div className="feature-object feature-object--gift" aria-hidden="true"><div className="gift-lid" /><div className="gift-box"><Box /><span>YOUR<br />BRIEF</span></div><div className="gift-card">Recipient<br />Occasion<br />Quantity<br />Budget</div></div>
        </div>
      </section>
      <section className="feature feature--ink" id="custom-apparel">
        <div className="container feature__grid feature__grid--reverse">
          <div className="feature-object feature-object--apparel" aria-hidden="true"><div className="shirt-outline"><Shirt /><span>TEAM / EVENT / STAFF</span></div><div className="fabric-swatch">FABRIC &amp; FIT<br />TO BE CONFIRMED</div></div>
          <div className="feature__copy"><h2>Apparel planned for the people who will wear it.</h2><p>Start with the team, event or staff requirement. Product, fabric, fit and branding recommendations can follow after the brief is understood.</p><div className="chip-row"><span>Team apparel</span><span>Event T-shirts</span><span>Staff requirements</span><span>Brand merchandise</span></div><Link className="button button--light" href="/request-a-quote/?type=custom-apparel">Get a T-Shirt Quote <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </>
  );
}

