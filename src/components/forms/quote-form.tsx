"use client";

import { useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import type { RequirementType } from "@/types/lead";

const requirements: Array<{ value: RequirementType; label: string }> = [
  { value: "corporate-gifting", label: "Corporate gifting" }, { value: "custom-apparel", label: "Custom apparel or T-shirts" },
  { value: "promotional-merchandise", label: "Promotional merchandise" }, { value: "printing-branding", label: "Printing and branding" },
  { value: "employee-kit", label: "Employee welcome kits" }, { value: "other", label: "Something else" },
];

export function QuoteForm({ initialType = "other" }: { initialType?: RequirementType }) {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return <div className="form-state" role="status"><Info aria-hidden="true" /><h2>Lead destination not configured</h2><p>Your information has not been sent or stored. The interface is ready, but a verified recipient or CRM must be connected before submissions can be enabled.</p><button className="button button--secondary" type="button" onClick={() => setSubmitted(false)}>Return to form</button></div>;
  return <form className="quote-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
    <div className="field-row"><label><span>Name <b aria-hidden="true">*</b></span><input name="name" autoComplete="name" required /></label><label><span>Company <b aria-hidden="true">*</b></span><input name="company" autoComplete="organization" required /></label></div>
    <div className="field-row"><label><span>Phone or WhatsApp <b aria-hidden="true">*</b></span><input name="phone" type="tel" autoComplete="tel" inputMode="tel" required /></label><label><span>Email</span><input name="email" type="email" autoComplete="email" /></label></div>
    <label><span>What do you need? <b aria-hidden="true">*</b></span><select name="requirementType" defaultValue={initialType} required>{requirements.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select></label>
    <div className="field-row"><label><span>Approximate quantity</span><input name="quantity" type="number" min="1" inputMode="numeric" /></label><label><span>Required date, if known</span><input name="requiredDate" type="date" /></label></div>
    <label><span>Tell us about the requirement</span><textarea name="message" rows={5} placeholder="For example: 300 T-shirts for an event, or onboarding gifts for 80 employees." /></label>
    <input type="hidden" name="sourcePage" value="/request-a-quote/" />
    <p className="form-note"><Info size={16} aria-hidden="true" /> This development form does not transmit or store data until a verified lead destination and privacy notice are configured.</p>
    <button className="button button--primary button--large button--full" type="submit">Review submission state <ArrowRight size={18} aria-hidden="true" /></button>
  </form>;
}
