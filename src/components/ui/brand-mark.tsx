import Link from "next/link";

export function BrandMark() {
  return (
    <Link className="brand-mark" href="/" aria-label="Sankalp Branding Solutions home">
      <span className="brand-symbol" aria-hidden="true"><span>S</span></span>
      <span className="brand-copy"><strong>Sankalp</strong><small>Branding Solutions</small></span>
    </Link>
  );
}

