import { business } from "@/config/business";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl(business, { kind: "product", product: "a branding requirement", sourcePage: "Website" });
  if (!href) return null;
  return (
    <a className="floating-whatsapp" href={href} target="_blank" rel="noreferrer" aria-label="Chat with Sankalp Branding Solutions on WhatsApp">
      <span>WhatsApp</span>
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M19.11 17.44c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.72.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.91 2.91 4.62 4.08.65.28 1.15.45 1.54.57.65.21 1.24.18 1.71.11.52-.08 1.6-.66 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32M16.03 27.2h-.01a11.15 11.15 0 0 1-5.68-1.56l-.41-.24-4.23 1.11 1.13-4.12-.27-.42a11.13 11.13 0 0 1-1.7-5.94c0-6.16 5.01-11.17 11.18-11.17 2.98 0 5.79 1.16 7.9 3.28a11.1 11.1 0 0 1 3.27 7.91c0 6.16-5.01 11.17-11.18 11.17m9.51-20.67A13.36 13.36 0 0 0 16.04 2.6C8.64 2.6 2.62 8.62 2.62 16.03c0 2.37.62 4.69 1.8 6.73L2.5 29.8l7.2-1.89a13.4 13.4 0 0 0 6.33 1.61h.01c7.4 0 13.43-6.02 13.43-13.43 0-3.59-1.4-6.96-3.93-9.5"/>
      </svg>
    </a>
  );
}
