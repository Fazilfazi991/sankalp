import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function WelcomeKits() {
  return (
    <section className="section welcome-section">
      <div className="container welcome-grid">
        <div className="kit-photo"><Image src="/welcome-kit-development.png" alt="Generated, unbranded development composition of a flexible welcome kit with a bottle, notebook, pen and tote" fill sizes="(max-width: 760px) 100vw, 55vw" /><span>Generated, unbranded development image</span></div>
        <div className="welcome-copy"><h2>Build a welcome kit around your team—not a fixed bundle.</h2><p>Combine useful branded items into an onboarding kit suited to your people, budget and requirement. Final contents remain flexible and require a confirmed product catalogue.</p><Link className="button button--primary" href="/request-a-quote/?type=employee-kit">Discuss a Welcome Kit <ArrowRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>
  );
}
