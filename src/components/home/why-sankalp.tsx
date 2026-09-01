import { ClipboardList, PackageSearch, Shapes, Waypoints } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  [ClipboardList, "Requirement-led", "The experience starts with purpose, quantity and timing—not technical jargon."],
  [PackageSearch, "Choice made clearer", "Product and method architecture is organised to support a practical business brief."],
  [Shapes, "Multi-category ready", "Gifting, apparel, merchandise and print can be described within one structured requirement."],
  [Waypoints, "Built to scale", "Typed content, product and lead models are ready for verified data and future catalogue depth."],
] as const;

export function WhySankalp() {
  return <section className="section why-section" id="why-sankalp"><div className="container"><SectionHeading title="Built around the way business requirements actually begin" description="These are attributes of the website experience—not unverified claims about production, delivery or scale." /><div className="why-grid">{items.map(([Icon, title, description]) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>;
}

