import { ClipboardList, PackageSearch, Shapes, Waypoints } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  [ClipboardList, "Requirement-led", "The experience starts with purpose, quantity and timing—not technical jargon."],
  [PackageSearch, "Choice made clearer", "Explore directions by product family or by the business moment you are planning for."],
  [Shapes, "Multi-category brief", "Describe gifting, apparel, merchandise and print together when the requirement crosses categories."],
  [Waypoints, "Clear next steps", "Move from an initial need toward an agreed product and customisation direction."],
] as const;

export function WhySankalp() {
  return <section className="section why-section" id="why-sankalp"><div className="container"><SectionHeading title="A clearer way to start your branding brief" description="Begin with what the business needs. Product and process choices can follow from that context." /><div className="why-grid">{items.map(([Icon, title, description]) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>;
}
