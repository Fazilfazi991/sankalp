import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategoryDiscovery() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-heading-row"><SectionHeading title="Explore product directions" description="Start with a product family, or share the business need and let the requirement guide the choice." /><Link href="/request-a-quote/" className="text-link">Share a product brief <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <div className="category-grid">
          {categories.map((category) => <article className="category" key={category.id}><div><h3>{category.title}</h3><p>{category.description}</p></div><Link href="/request-a-quote/" className="text-link">Enquire about this category <ArrowUpRight size={15} aria-hidden="true" /></Link></article>)}
        </div>
      </div>
    </section>
  );
}
