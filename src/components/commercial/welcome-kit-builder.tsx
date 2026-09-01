"use client";

import { useMemo, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { business } from "@/config/business";
import { buildCustomWhatsAppUrl } from "@/lib/whatsapp";

const components = ["Drinkware", "Notebook", "Pen", "Bag", "Apparel", "Desk item", "Tech accessory", "Packaging"];

export function WelcomeKitBuilder() {
  const [selected, setSelected] = useState<string[]>(["Drinkware", "Notebook"]);
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const toggle = (item: string) => setSelected(current => current.includes(item) ? current.filter(value => value !== item) : [...current, item]);
  const summary = `Employee Welcome Kit\nQuantity: ${quantity || "Not specified"}\nInterested in: ${selected.length ? selected.join(", ") : "Not specified"}\nRequired date: ${date || "Not specified"}`;
  const whatsappUrl = useMemo(() => buildCustomWhatsAppUrl(business, `Hi Sankalp Branding Solutions,\nI’m planning an employee welcome kit requirement.\n\n${summary}\n\nPlease help me with suitable options.`), [summary]);

  return <section className="builder-section kit-builder" id="build-your-brief"><div className="container builder-layout"><div className="builder-intro"><h2>Choose the directions you want to discuss.</h2><p>This creates an enquiry summary only. It does not confirm products, availability or price.</p></div><div className="builder-panel"><fieldset><legend>Interested in</legend><div className="choice-grid">{components.map(item => <button type="button" className={selected.includes(item) ? "is-selected" : ""} aria-pressed={selected.includes(item)} key={item} onClick={() => toggle(item)}>{selected.includes(item) ? <Check aria-hidden="true" /> : null}{item}</button>)}</div></fieldset><div className="builder-fields"><label>Approximate quantity<input inputMode="numeric" pattern="[0-9]*" min="1" value={quantity} onChange={event => setQuantity(event.target.value.replace(/\D/g, ""))} placeholder="For example, 80" /></label><label>Required date<input type="date" value={date} onChange={event => setDate(event.target.value)} /></label></div><div className="builder-summary"><span>Your requirement summary</span><pre>{summary}</pre>{whatsappUrl ? <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Send on WhatsApp</a> : null}</div></div></div></section>;
}
