import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/commercial/breadcrumbs";
import { CommercialFaq } from "@/components/commercial/commercial-faq";
import { MobileActions } from "@/components/commercial/mobile-actions";
import { RelatedLinks } from "@/components/commercial/related-links";
import { SchemaScripts } from "@/components/commercial/schema-scripts";
import { WelcomeKitBuilder } from "@/components/commercial/welcome-kit-builder";
import { business } from "@/config/business";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const path = "/corporate-gifting/employee-welcome-kits/";
const description = "Plan employee welcome kits in Bangalore around your team size, budget, role, brand direction and required date.";
export const metadata: Metadata = pageMetadata("Employee Welcome Kits in Bangalore, Built Around Your Team", description, path);

const faqs = [
  { question: "What information helps shape an employee welcome kit?", answer: "Employee count, budget if known, role or team context, required date, brand direction and the types of components you are considering are useful starting points." },
  { question: "Are the builder selections confirmed products?", answer: "No. The builder creates a discussion summary only. It does not confirm inventory, availability, a fixed bundle or pricing." },
  { question: "Can apparel be included in a welcome-kit requirement?", answer: "You can include apparel as a direction in the brief. Garment choice, quantities, sizes and branding details can then be discussed separately." },
  { question: "Can I start without deciding every component?", answer: "Yes. Select the broad directions that interest you and leave the rest open. The first objective is a useful requirement, not a final product list." },
];

export default function EmployeeWelcomeKitsPage() {
  const whatsapp = buildWhatsAppUrl(business, { kind: "employee-kit" });
  return <div className="commercial-page kit-page">
    <SchemaScripts schemas={[serviceSchema({ name: "Employee Welcome Kits in Bangalore", description, path }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Corporate Gifting", path: "/corporate-gifting/" }, { name: "Employee Welcome Kits", path }])]} />
    <section className="kit-hero"><div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Corporate Gifting", href: "/corporate-gifting/" }, { label: "Employee Welcome Kits" }]} /><div className="kit-hero__image"><Image src="/gate3a/welcome-kit-hero.webp" alt="Employee welcome-kit components including backpack, bottle, notebook and apparel" fill priority loading="eager" sizes="100vw" /></div><div className="kit-hero__copy"><h1>Build the Welcome Kit Around Your Team.</h1><p>Plan employee joining or onboarding kits from the team context, quantity, budget, required date and the component directions you want to explore.</p><div className="commercial-actions"><a className="button primary" href="#build-your-brief">Build Your Brief <ArrowRight aria-hidden="true" /></a>{whatsapp ? <a className="text-action" href={whatsapp} target="_blank" rel="noreferrer">Discuss on WhatsApp <ArrowRight aria-hidden="true" /></a> : null}</div></div></div></section>
    <section className="kit-shapers"><div className="container"><h2>Six details shape the kit.</h2><div>{[["Employee count","A working quantity anchors the discussion."],["Budget","Share a range when one is available."],["Role or team","The recipient context affects useful choices."],["Occasion","Joining, onboarding or another team moment."],["Required date","The date you are planning around."],["Brand direction","Colours, artwork and presentation cues."]].map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <WelcomeKitBuilder />
    <section className="kit-packaging"><div className="container"><div><h2>Packaging is part of the requirement.</h2><p>Tell us whether you are thinking about a presentation box, mailer-style pack, welcome card or another direction. Packaging and personalisation can affect the overall quotation.</p><ul><li>How the kit will be handed over</li><li>Whether a welcome card is needed</li><li>Artwork and colour direction</li><li>Required date and working quantity</li></ul></div><div className="kit-packaging__image"><Image src="/gate3a/welcome-kit-packaging.webp" alt="Close view of welcome-kit packaging with notebook, bottle, card and bag strap" fill sizes="(max-width:760px) 100vw,52vw" /></div></div></section>
    <section className="kit-progress dark-section"><div className="container"><h2>From component directions to a clearer brief.</h2><ol>{[["Choose directions","Select the item categories you want to discuss."],["Add context","Share quantity, budget and required date."],["Review the requirement","Use the summary to begin the conversation."],["Discuss suitable options","The final product and packaging direction follows the brief."]].map(([title,copy],index)=><li key={title}><span>{index+1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>
    <CommercialFaq title="Welcome-kit questions" items={faqs} />
    <RelatedLinks links={[{ label: "Corporate gifting", href: "/corporate-gifting/", description: "Plan gifting around the occasion and recipients." },{ label: "Request a quote", href: "/request-a-quote/?type=employee-kit", description: "Share the team size and required date." }]} />
    <MobileActions whatsappUrl={whatsapp} quoteHref="/request-a-quote/?type=employee-kit" />
  </div>;
}
