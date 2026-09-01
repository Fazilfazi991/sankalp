import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { QuoteForm } from "@/components/forms/quote-form";
import { pageMetadata } from "@/lib/seo";
import type { RequirementType } from "@/types/lead";

export const metadata = pageMetadata("Request a Quote", "Share a corporate gifting, apparel, merchandise or printing requirement with Sankalp Branding Solutions.", "/request-a-quote/");
const validTypes: RequirementType[] = ["corporate-gifting", "custom-apparel", "promotional-merchandise", "printing-branding", "employee-kit", "other"];
export default async function RequestQuotePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams; const rawType = typeof params.type === "string" ? params.type : "other"; const initialType = validTypes.includes(rawType as RequirementType) ? rawType as RequirementType : "other";
  return <div className="quote-page"><div className="container quote-page__grid"><div className="quote-page__intro"><Link href="/" className="text-link"><ArrowLeft size={16} aria-hidden="true" /> Back to homepage</Link><h1>Tell us what you need.</h1><p>Start with the requirement, approximate quantity and date. You do not need to choose a printing method before enquiring.</p><div className="brief-list"><span>Useful starting details</span><ul><li>Who or what the requirement is for</li><li>Approximate quantity</li><li>Your required date, if known</li><li>Any product ideas or artwork already available</li></ul></div></div><div className="quote-page__form"><QuoteForm initialType={initialType} /></div></div></div>;
}
