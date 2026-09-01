"use client";

import { useMemo, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { business } from "@/config/business";
import { buildCustomWhatsAppUrl } from "@/lib/whatsapp";

const garmentTypes = ["Round neck", "Polo", "Dry-fit", "Other / not sure"];
const positions = ["Front", "Back", "Sleeve", "Multiple"];

export function TshirtBriefBuilder() {
  const [garment, setGarment] = useState("Round neck");
  const [quantity, setQuantity] = useState("");
  const [colour, setColour] = useState("");
  const [sizes, setSizes] = useState("");
  const [placement, setPlacement] = useState<string[]>(["Front"]);
  const [date, setDate] = useState("");
  const togglePlacement = (item: string) => setPlacement(current => current.includes(item) ? current.filter(value => value !== item) : [...current, item]);
  const summary = `Custom T-shirt requirement\nGarment: ${garment}\nQuantity: ${quantity || "Not specified"}\nColour: ${colour || "Not specified"}\nSize mix: ${sizes || "Not specified"}\nBranding position: ${placement.length ? placement.join(", ") : "Not specified"}\nRequired date: ${date || "Not specified"}`;
  const whatsappUrl = useMemo(() => buildCustomWhatsAppUrl(business, `Hi Sankalp Branding Solutions,\nI’m looking for custom T-shirt printing.\n\n${summary}\n\nPlease help me with suitable options.`), [summary]);

  return <section className="builder-section tshirt-builder" id="tshirt-requirement"><div className="container builder-layout"><div className="builder-intro"><h2>Build a useful T-shirt requirement.</h2><p>You do not need to choose a printing method first. Start with the garment, quantity, artwork, usage and date.</p></div><div className="builder-panel"><fieldset><legend>Garment type</legend><div className="choice-grid choice-grid--four">{garmentTypes.map(item => <button type="button" className={garment === item ? "is-selected" : ""} aria-pressed={garment === item} key={item} onClick={() => setGarment(item)}>{garment === item ? <Check aria-hidden="true" /> : null}{item}</button>)}</div></fieldset><div className="builder-fields"><label>Approximate quantity<input inputMode="numeric" pattern="[0-9]*" min="1" value={quantity} onChange={event => setQuantity(event.target.value.replace(/\D/g, ""))} placeholder="Working quantity" /></label><label>Preferred colour<input value={colour} onChange={event => setColour(event.target.value)} placeholder="Or say not sure" /></label><label>Size mix<input value={sizes} onChange={event => setSizes(event.target.value)} placeholder="For example, S–XXL mix" /></label><label>Required date<input type="date" value={date} onChange={event => setDate(event.target.value)} /></label></div><fieldset><legend>Branding position</legend><div className="choice-grid choice-grid--four">{positions.map(item => <button type="button" className={placement.includes(item) ? "is-selected" : ""} aria-pressed={placement.includes(item)} key={item} onClick={() => togglePlacement(item)}>{placement.includes(item) ? <Check aria-hidden="true" /> : null}{item}</button>)}</div></fieldset><div className="builder-summary"><span>Your requirement summary</span><pre>{summary}</pre>{whatsappUrl ? <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> WhatsApp Requirement</a> : null}</div></div></div></section>;
}
