import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileImage, Shirt, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/commercial/breadcrumbs";
import { CommercialFaq } from "@/components/commercial/commercial-faq";
import { MobileActions } from "@/components/commercial/mobile-actions";
import { RelatedLinks } from "@/components/commercial/related-links";
import { SchemaScripts } from "@/components/commercial/schema-scripts";
import { TshirtBriefBuilder } from "@/components/commercial/tshirt-brief-builder";
import { business } from "@/config/business";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { buildCustomWhatsAppUrl } from "@/lib/whatsapp";

const path = "/custom-t-shirt-printing/";
const description = "Plan custom T-shirt printing in Bangalore for teams, events and company requirements by sharing garment, quantity, sizes, colour, artwork placement and date.";
export const metadata: Metadata = pageMetadata("Custom T-Shirt Printing in Bangalore for Teams and Events", description, path);

const faqs = [
  { question: "What details should I share for a T-shirt quotation?", answer: "Share the garment direction, approximate quantity, colour, size mix, intended use, branding positions, required date and available artwork." },
  { question: "Can an order include different sizes?", answer: "A size mix can be included in the requirement. Share the working breakdown when it is known so it can be discussed as part of the quotation." },
  { question: "Do I need to know which printing method to use?", answer: "No. Start with the garment, quantity, artwork, intended use and required date. A suitable branding method can be discussed from there." },
  { question: "What artwork should I send?", answer: "Share the best logo or artwork file available and note the intended placement. Final artwork requirements can be clarified during the quotation process." },
  { question: "Can the logo appear in more than one position?", answer: "You can include front, back, sleeve or multiple positions in the brief. Each placement can affect the quotation and should be described clearly." },
  { question: "What affects the quotation?", answer: "Garment choice, quantity, colours, branding area, number of positions, personalisation, artwork complexity and deadline can all affect a quotation." },
];

export default function CustomTshirtPrintingPage() {
  const whatsapp = buildCustomWhatsAppUrl(business, "Hi Sankalp Branding Solutions,\nI’m looking for custom T-shirt printing.\n\nGarment type: Not specified\nApproximate quantity: Not specified\nUse: Not specified\nRequired date: Not specified\n\nPlease help me with suitable options.");
  return <div className="commercial-page tshirt-page">
    <SchemaScripts schemas={[serviceSchema({ name: "Custom T-Shirt Printing in Bangalore", description, path }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Custom T-Shirt Printing", path }])]} />
    <section className="tshirt-hero"><div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Custom T-Shirt Printing" }]} /><div className="tshirt-hero__grid"><div><h1>Custom T-Shirt Printing in Bangalore</h1><p>Planning T-shirts for a team, event or company requirement? Start with the garment type, quantity, sizes, colour, logo placement and required date.</p><div className="commercial-actions"><a className="button primary" href="#tshirt-requirement">Get a T-Shirt Quote <ArrowRight aria-hidden="true" /></a>{whatsapp ? <a className="text-action" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp Requirement <ArrowRight aria-hidden="true" /></a> : null}</div><div className="tshirt-hero__signals"><span><Shirt aria-hidden="true" /> Garment and colour</span><span><Users aria-hidden="true" /> Quantity and size mix</span><span><FileImage aria-hidden="true" /> Artwork and placement</span></div></div><div className="tshirt-hero__image"><Image src="/gate3a/tshirt-hero.webp" alt="Black T-shirt and cream polo arranged with blank artwork placement sheets" fill priority loading="eager" sizes="(max-width:760px) 100vw,56vw" /></div></div></div></section>
    <section className="tshirt-types"><div className="container"><div><h2>Start with the garment direction.</h2><p>Round neck, polo, dry-fit or not sure—the intended use matters more than knowing technical terminology.</p><ul><li>Team and company use</li><li>Events and campaigns</li><li>Indoor or outdoor context</li><li>Working quantity and size mix</li></ul></div><div className="tshirt-types__image"><Image src="/gate3a/tshirt-garment-types.webp" alt="Black round-neck T-shirt, cream polo and charcoal performance shirt" fill sizes="(max-width:760px) 100vw,52vw" /></div></div></section>
    <TshirtBriefBuilder />
    <section className="method-guidance dark-section"><div className="container"><div><h2>Not sure which printing method you need?</h2><p>Start with the garment, quantity, artwork and usage. The branding method can be discussed from there.</p><Link className="button gold" href="/request-a-quote/?type=custom-apparel">Share the Requirement <ArrowRight aria-hidden="true" /></Link></div><div className="method-guidance__image"><Image src="/gate3a/tshirt-placement.webp" alt="Black T-shirts with blank guides showing front, back and sleeve branding positions" fill sizes="(max-width:760px) 100vw,48vw" /></div></div></section>
    <section className="tshirt-detail"><div className="container"><div className="tshirt-detail__image"><Image src="/gate3a/tshirt-fabric-detail.webp" alt="Close view of round-neck, polo and performance fabric collars" fill sizes="(max-width:760px) 100vw,46vw" /></div><div><h2>What changes the quotation?</h2><div className="quote-variable-list">{[["Garment","The base garment and construction direction."],["Quantity","The working number and size mix."],["Artwork","Complexity, colours and file readiness."],["Branding area","Front, back, sleeve or multiple positions."],["Personalisation","Individual names or other variable details, if required."],["Deadline","The date the requirement is planned around."]].map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></div></section>
    <CommercialFaq title="T-shirt printing questions" items={faqs} />
    <RelatedLinks links={[{ label: "Custom apparel", href: "/custom-apparel/", description: "Explore broader team and staff apparel." },{ label: "Request a quote", href: "/request-a-quote/?type=custom-apparel", description: "Send garment, quantity, sizes and date." }]} />
    <MobileActions whatsappUrl={whatsapp} quoteHref="/request-a-quote/?type=custom-apparel" />
  </div>;
}
