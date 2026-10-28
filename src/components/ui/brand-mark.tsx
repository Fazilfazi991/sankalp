import Image from "next/image";
import Link from "next/link";

export function BrandMark({ variant = "primary" }: { variant?: "primary" | "reversed" }) {
  return (
    <Link className="brand-mark" href="/" aria-label="Sankalp Branding Solutions home">
      <Image
        className="brand-logo"
        src="/brand/sankalp-logo.png"
        alt="Sankalp Branding Solutions"
        width={789}
        height={1204}
        priority={variant === "primary"}
      />
    </Link>
  );
}
