import Link from "next/link";
import { ArrowUpRight, Gift, Printer, Shirt, Sparkles } from "lucide-react";
import { pillars } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Gift, Shirt, Sparkles, Printer];

export function Pillars() {
  const sectionTargets: Record<string, string> = { "corporate-gifting": "corporate-gifting", "custom-apparel": "custom-apparel", "promotional-merchandise": "products", "printing-branding": "methods" };
  return (
    <section className="section pillars-section" id="pillars">
      <div className="container">
        <SectionHeading title="Four ways to move a branding brief forward" description="Begin with the business job. The product and customisation choices can follow." />
        <div className="pillars-grid">
          {pillars.map((pillar, index) => {
            const Icon = icons[index];
            return <article className="pillar" key={pillar.id}><div className="pillar__icon"><Icon aria-hidden="true" /></div><h3>{pillar.title}</h3><p>{pillar.description}</p><Link href={`/#${sectionTargets[pillar.id]}`} className="text-link">Explore the direction <ArrowUpRight size={16} aria-hidden="true" /></Link></article>;
          })}
        </div>
      </div>
    </section>
  );
}
