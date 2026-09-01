import type { BusinessConfig } from "@/config/business";

export type WhatsAppContext =
  | { kind: "t-shirt"; quantity?: number; requiredDate?: string; location?: string }
  | { kind: "corporate-gifting"; audience?: string; quantity?: number; budget?: string; requiredDate?: string }
  | { kind: "product"; product: string; quantity?: number; sourcePage?: string }
  | { kind: "employee-kit"; quantity?: number; budget?: string; requiredDate?: string; deliveryModel?: string }
  | { kind: "printing"; item?: string; quantity?: number; requiredDate?: string; artworkReady?: boolean };

const show = (value: string | number | undefined, fallback = "Not specified") =>
  value === undefined || value === "" ? fallback : String(value);

export function buildWhatsAppMessage(context: WhatsAppContext): string {
  switch (context.kind) {
    case "t-shirt":
      return `Hello Sankalp, I need customised T-shirts. Quantity: ${show(context.quantity)}. Required by: ${show(context.requiredDate)}. Delivery city: ${show(context.location)}. Please help me choose a suitable option and prepare a quote.`;
    case "corporate-gifting":
      return `Hello Sankalp, I am planning corporate gifts for ${show(context.audience, "a business requirement")}. Quantity: ${show(context.quantity)}. Budget: ${show(context.budget)}. Required by: ${show(context.requiredDate)}. Please suggest suitable directions.`;
    case "product":
      return `Hello Sankalp, I am enquiring about ${context.product}. Quantity: ${show(context.quantity)}. Source: ${show(context.sourcePage)}. Please share suitable next steps.`;
    case "employee-kit":
      return `Hello Sankalp, I would like to discuss employee welcome kits. Quantity: ${show(context.quantity)}. Budget per kit: ${show(context.budget)}. Delivery model: ${show(context.deliveryModel)}. Required by: ${show(context.requiredDate)}.`;
    case "printing":
      return `Hello Sankalp, I need ${show(context.item, "a printing requirement")}. Quantity: ${show(context.quantity)}. Artwork: ${context.artworkReady === undefined ? "Not specified" : context.artworkReady ? "Ready" : "Help needed"}. Required by: ${show(context.requiredDate)}.`;
  }
}

export function buildWhatsAppUrl(config: BusinessConfig, context: WhatsAppContext): string | null {
  if (!config.whatsapp) return null;
  const number = config.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(buildWhatsAppMessage(context))}`;
}

