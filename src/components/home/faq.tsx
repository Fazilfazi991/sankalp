import { faqs } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  return <section className="section faq-section" id="faqs"><div className="container faq-layout"><SectionHeading title="Useful answers before you enquire" description="Only architecture and facts supported by the current brief are answered here." /><div className="faq-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div></div></section>;
}

