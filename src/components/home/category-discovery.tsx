import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategoryDiscovery() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-heading-row"><SectionHeading title="Explore product directions" description="A curated catalogue structure, ready for verified product records—not fabricated inventory." /><Link href="/request-a-quote/" className="text-link">Share a product brief <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <div className="category-grid">
          {categories.map((category, index) => <article className={`category category--${index + 1}`} key={category.id}><div className="category__shape" aria-hidden="true"><span /></div><div><h3>{category.title}</h3><p>{category.description}</p><span className="planned-label">Catalogue data required</span></div></article>)}
        </div>
      </div>
    </section>
  );
}

