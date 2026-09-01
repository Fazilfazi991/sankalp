import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Gift, PackageCheck, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/commercial/breadcrumbs";
import { CommercialFaq } from "@/components/commercial/commercial-faq";
import { MobileActions } from "@/components/commercial/mobile-actions";
import { RelatedLinks } from "@/components/commercial/related-links";
import { SchemaScripts } from "@/components/commercial/schema-scripts";
import { business } from "@/config/business";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const path = "/corporate-gifting/";
const description = "Plan corporate gifts in Bangalore around the occasion, recipients, quantity, budget, packaging and required date with Sankalp Branding Solutions.";
export const metadata: Metadata = pageMetadata("Corporate Gifts in Bangalore, Planned Around Your Requirement", description, path);

const faqs = [
  { question: "What should I share for a corporate gifting quotation?", answer: "Share the occasion, recipient group, approximate quantity, budget if known, required date and any packaging or personalisation direction. These details help narrow suitable options." },
  { question: "Can the requirement combine more than one type of item?", answer: "Yes. Describe the overall requirement and the types of items you are considering. The final direction can be discussed from that brief without assuming a fixed bundle." },
  { question: "Do you publish fixed gift prices?", answer: "No verified catalogue pricing is currently published. Product type, quantity, branding, packaging, personalisation and deadline can all affect a quotation." },
  { question: "Can I enquire if I have not selected the products yet?", answer: "Yes. Begin with the occasion, audience, quantity, budget and date. Product directions can be discussed after the requirement is understood." },
];

export default function CorporateGiftingPage() {
  const whatsapp = buildWhatsAppUrl(business, { kind: "corporate-gifting" });
  return <div className="commercial-page gifting-page">
    <SchemaScripts schemas={[serviceSchema({ name: "Corporate Gifting in Bangalore", description, path }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Corporate Gifting", path }])]} />
    <section className="gifting-hero"><div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Corporate Gifting" }]} /><div className="gifting-hero__grid"><div><h1>Corporate Gifts in Bangalore, Planned Around Your Requirement</h1><p>Planning gifts for employees, clients or an event? Start with the occasion, quantity, budget and required date. That brief makes it easier to narrow the product directions.</p><div className="commercial-actions"><Link className="button primary" href="/request-a-quote/?type=corporate-gifting">Get Corporate Gifting Quote <ArrowRight aria-hidden="true" /></Link>{whatsapp ? <a className="text-action" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp the brief <ArrowRight aria-hidden="true" /></a> : null}</div><dl className="first-screen-brief"><div><dt>Relevant for</dt><dd>Employees, clients, events and onboarding</dd></div><div><dt>Share first</dt><dd>Occasion, quantity, budget and required date</dd></div></dl></div><div className="gifting-hero__image"><Image src="/gate3a/corporate-gifting-hero.webp" alt="Open corporate gift box with bottle, notebook, pen and tech organiser" fill priority loading="eager" sizes="(max-width:760px) 100vw,55vw" /></div></div></div></section>
    <section className="occasion-led"><div className="container"><header><h2>Begin with the reason for the gift.</h2><p>The occasion and recipient shape the useful product directions long before packaging is discussed.</p></header><div className="occasion-led__rail">{[[Users,"Employee gifting","Recognition, milestones and team occasions."],[Gift,"Client gifting","A requirement shaped around the relationship and moment."],[CalendarDays,"Events & conferences","Attendee, speaker or organiser gifting within one event brief."],[PackageCheck,"Joining & onboarding","A welcome-kit requirement built around the team."]].map(([Icon,title,copy]) => { const I = Icon as typeof Gift; return <article key={String(title)}><I aria-hidden="true" /><h3>{String(title)}</h3><p>{String(copy)}</p></article>; })}</div></div></section>
    <section className="gifting-editorial"><div className="container gifting-editorial__grid"><div className="gifting-editorial__lead"><Image src="/gate3a/corporate-gifting-event.webp" alt="Event gifting arrangement with tumbler, tote, notebook and blank lanyard" fill sizes="(max-width:760px) 100vw,58vw" /></div><div className="gifting-editorial__copy"><h2>Product directions should follow the brief—not lead it.</h2><p>Drinkware, desk items, notebooks, bags, tech accessories and packaging can all be discussed as directions. The right combination depends on who will receive it, why, how many are needed and when.</p><Link className="text-action" href="/corporate-gifting/employee-welcome-kits/">Explore employee welcome kits <ArrowRight aria-hidden="true" /></Link></div><div className="gifting-editorial__detail"><Image src="/gate3a/corporate-gifting-desk-detail.webp" alt="Close view of notebook, pen, cable organiser and presentation box" fill sizes="(max-width:760px) 100vw,38vw" /></div></div></section>
    <section className="quote-factors dark-section"><div className="container"><header><h2>What affects a corporate gifting quote?</h2><p>Useful budget planning starts with the variables, not an invented price band.</p></header><ol>{["Quantity","Product type","Branding requirement","Packaging","Personalisation","Required date"].map((item,index)=><li key={item}><span>{String(index+1).padStart(2,"0")}</span>{item}</li>)}</ol></div></section>
    <section className="brief-line"><div className="container"><h2>A concise gifting brief</h2><div>{[["Occasion","Why are you planning the gifts?"],["Recipients","Who will receive them?"],["Quantity","What is the working number?"],["Budget","Share a range when one exists."],["Date","What date are you planning around?"]].map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><Link className="button gold" href="/request-a-quote/?type=corporate-gifting">Send the Gifting Brief <ArrowRight aria-hidden="true" /></Link></div></section>
    <CommercialFaq title="Corporate gifting questions" items={faqs} />
    <RelatedLinks links={[{ label: "Employee welcome kits", href: "/corporate-gifting/employee-welcome-kits/", description: "Build a kit around your team." },{ label: "Request a quote", href: "/request-a-quote/?type=corporate-gifting", description: "Share the occasion, quantity and date." }]} />
    <MobileActions whatsappUrl={whatsapp} quoteHref="/request-a-quote/?type=corporate-gifting" />
  </div>;
}
