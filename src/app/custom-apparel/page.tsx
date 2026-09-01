import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/commercial/breadcrumbs";
import { CommercialFaq } from "@/components/commercial/commercial-faq";
import { MobileActions } from "@/components/commercial/mobile-actions";
import { RelatedLinks } from "@/components/commercial/related-links";
import { SchemaScripts } from "@/components/commercial/schema-scripts";
import { business } from "@/config/business";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { buildCustomWhatsAppUrl } from "@/lib/whatsapp";

const path = "/custom-apparel/";
const description = "Discuss custom and corporate apparel in Bangalore for teams, events, staff and company merchandise, starting with garment use, quantity and required date.";
export const metadata: Metadata = pageMetadata("Custom Apparel in Bangalore for Teams, Events and Staff", description, path);

const faqs = [
  { question: "What custom apparel requirements can I discuss?", answer: "You can begin with teamwear, company merchandise, staff apparel, event apparel or a uniform-related requirement. Final garment and branding details follow the use case." },
  { question: "Should I choose the garment before the branding method?", answer: "Start with who will wear it, where it will be used, the garment direction, quantity, colour, logo placement and required date. The branding method can be discussed after that." },
  { question: "Can I enquire if I am not sure between T-shirts and polos?", answer: "Yes. Explain the intended use, setting and recipient group. Comparing garment directions is a useful part of the first conversation." },
  { question: "What size information should I provide?", answer: "Share a working size mix when it is known. If it is not yet available, note that in the requirement rather than inventing it." },
];

export default function CustomApparelPage() {
  const whatsapp = buildCustomWhatsAppUrl(business, "Hi Sankalp Branding Solutions,\nI’m looking for custom apparel.\n\nGarment type: Not specified\nApproximate quantity: Not specified\nUse: Not specified\nRequired date: Not specified\n\nPlease help me with suitable options.");
  return <div className="commercial-page apparel-page">
    <SchemaScripts schemas={[serviceSchema({ name: "Custom Apparel in Bangalore", description, path }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Custom Apparel", path }])]} />
    <section className="apparel-hero"><div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Custom Apparel" }]} /><div className="apparel-hero__grid"><div className="apparel-hero__copy"><h1>Custom Apparel for Teams, Events and Everyday Company Use.</h1><p>Start with who will wear it, where it will be used, the garment direction, approximate quantity and required date.</p><div className="commercial-actions"><Link className="button primary" href="/request-a-quote/?type=custom-apparel">Discuss Custom Apparel <ArrowRight aria-hidden="true" /></Link><Link className="text-action" href="/custom-t-shirt-printing/">Custom T-Shirt Printing <ArrowRight aria-hidden="true" /></Link></div></div><div className="apparel-hero__image"><Image src="/gate3a/custom-apparel-hero.webp" alt="Black polo, cream T-shirt, cap and jacket arranged for custom corporate apparel" fill priority loading="eager" sizes="(max-width:760px) 100vw,58vw" /></div></div></div></section>
    <section className="apparel-catalogue"><div className="container"><header><h2>Choose by use, then refine the garment.</h2><p>These are broad apparel directions for a requirement—not an inventory or availability list.</p></header><div className="apparel-catalogue__rows">{[["T-shirts","Teams, events and company merchandise."],["Polo shirts","A collared direction for team or staff use."],["Caps","An accessory direction for events and teams."],["Hoodies & jackets","Layering directions for applicable team requirements."],["Uniform-related","Start from role, environment and practical use."]].map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="garment-first"><div className="container"><div className="garment-first__image"><Image src="/gate3a/custom-apparel-detail.webp" alt="Close view of polo collar, T-shirt neck, cap stitching and fabric swatches" fill sizes="(max-width:760px) 100vw,48vw" /></div><div><h2>Choose the garment before the branding method.</h2><p>The apparel needs to suit the people and setting first. Technical branding decisions can follow once the garment, quantity, artwork and use are clearer.</p><dl>{[["Who","Who will wear it?"],["Where","Indoor, outdoor, event or everyday use?"],["What","T-shirt, polo, cap, jacket or another direction?"],["How many","What is the working quantity?"],["Where branded","Front, back, sleeve or another position?"],["When","What date are you planning around?"]].map(([term,detail])=><div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl></div></div></section>
    <section className="apparel-uses dark-section"><div className="container"><h2>One apparel hub, several business contexts.</h2><div>{[["Teamwear","Plan around role, setting and repeat use."],["Events","Think about attendee type, climate and event duration."],["Staff apparel","Begin with day-to-day practicality and identification needs."],["Company merchandise","Consider who receives it and how it will be used."]].map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>{whatsapp ? <a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp an Apparel Requirement <ArrowRight aria-hidden="true" /></a> : null}</div></section>
    <CommercialFaq title="Custom apparel questions" items={faqs} />
    <RelatedLinks links={[{ label: "Custom T-shirt printing", href: "/custom-t-shirt-printing/", description: "Build a detailed T-shirt requirement." },{ label: "Request a quote", href: "/request-a-quote/?type=custom-apparel", description: "Share the garment, quantity and date." }]} />
    <MobileActions whatsappUrl={whatsapp} quoteHref="/request-a-quote/?type=custom-apparel" />
  </div>;
}
