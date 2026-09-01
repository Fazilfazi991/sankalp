import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCases } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export function NeedExplorer() {
  return (
    <section className="section need-section">
      <div className="container need-layout">
        <SectionHeading title="Not sure what to ask for? Start with the moment." description="A requirement can span several products. These pathways are planned to help buyers brief the outcome before choosing the item." />
        <div className="need-list">
          {useCases.map((item) => <Link href={item.href ?? "/request-a-quote/"} key={item.id}><span><strong>{item.title}</strong><small>{item.description}</small></span><ArrowRight aria-hidden="true" /></Link>)}
        </div>
      </div>
    </section>
  );
}

