import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function MobileActions({ whatsappUrl, quoteHref }: { whatsappUrl: string | null; quoteHref: string }) {
  return <div className="page-sticky-actions" aria-label="Quick enquiry actions">{whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> WhatsApp</a> : null}<Link href={quoteHref}>Get Quote</Link></div>;
}
