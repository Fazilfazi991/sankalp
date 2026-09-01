import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function RelatedLinks({ title = "Continue exploring", links }: { title?: string; links: Array<{ label: string; href: string; description: string }> }) {
  return <section className="related-links"><div className="container"><h2>{title}</h2><div>{links.map(link => <Link href={link.href} key={link.href}><span>{link.label}</span><small>{link.description}</small><ArrowUpRight aria-hidden="true" /></Link>)}</div></div></section>;
}
