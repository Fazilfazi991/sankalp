import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = ["Share your requirement", "Review suitable directions", "Approve the final specification", "Production or customisation", "Delivery or collection, as applicable"];

export function ProcessSteps() {
  return <section className="section process-section" id="how-it-works"><div className="container"><SectionHeading title="A clear path from requirement to result" description="A practical outline for discussing the brief, reviewing options and agreeing the next steps." /><ol className="process-list">{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < steps.length - 1 ? <ArrowRight aria-hidden="true" /> : null}</li>)}</ol></div></section>;
}
