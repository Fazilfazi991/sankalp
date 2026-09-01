"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/brand-mark";

const links = [
  ["Products", "/#products"],
  ["Corporate gifting", "/#corporate-gifting"],
  ["Custom apparel", "/#custom-apparel"],
  ["Promotional merchandise", "/#pillars"],
  ["Printing & branding", "/#pillars"],
  ["About", "/#why-sankalp"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <div className="mobile-nav">
      {!open ? <button className="icon-button" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation" onClick={() => setOpen(true)}><Menu aria-hidden="true" /></button> : null}
      {open ? (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu__top"><BrandMark /><button className="icon-button" type="button" aria-label="Close navigation" onClick={() => setOpen(false)}><X aria-hidden="true" /></button></div>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          </nav>
          <Link className="button button--primary button--full" href="/request-a-quote/" onClick={() => setOpen(false)}>Request a Quote</Link>
        </div>
      ) : null}
    </div>
  );
}
