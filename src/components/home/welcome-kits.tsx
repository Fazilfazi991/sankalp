import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WelcomeKits() {
  return (
    <section className="section welcome-section">
      <div className="container welcome-grid">
        <div className="kit-board" aria-label="Illustrative welcome-kit planning board; contents are not a fixed or verified Sankalp kit">
          <div className="kit-board__title"><span>Example architecture</span><strong>WELCOME KIT / 01</strong></div>
          <div className="kit-item kit-item--tee">APPAREL</div><div className="kit-item kit-item--bottle">DRINKWARE</div><div className="kit-item kit-item--note">STATIONERY</div><div className="kit-item kit-item--box">PACKAGING</div>
          <p>Illustrative combination only</p>
        </div>
        <div className="welcome-copy"><h2>Build a welcome kit around your team—not a fixed bundle.</h2><p>Combine useful branded items into an onboarding kit suited to your people, budget and requirement. Final contents remain flexible and require a confirmed product catalogue.</p><Link className="button button--primary" href="/request-a-quote/?type=employee-kit">Discuss a Welcome Kit <ArrowRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>
  );
}

