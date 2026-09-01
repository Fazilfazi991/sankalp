import { brandingMethods } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export function BrandingMethods() {
  return <section className="section methods-section" id="methods"><div className="container methods-layout"><SectionHeading title="The method should follow the product and purpose" description="Visitors should never need to diagnose the printing technique themselves. These educational slots remain unpublished as capabilities until Sankalp confirms each method." /><div className="method-cloud" aria-label="Planned customisation-method content"><span className="method-center">Share the<br /><strong>requirement</strong></span>{brandingMethods.map((method) => <span className="method-chip" key={method.id}>{method.title}<small>Confirmation required</small></span>)}</div></div></section>;
}

