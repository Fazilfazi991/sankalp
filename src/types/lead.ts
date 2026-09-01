export type LeadStatus = "new" | "reviewing" | "quoted" | "closed";

export type RequirementType =
  | "corporate-gifting"
  | "custom-apparel"
  | "promotional-merchandise"
  | "printing-branding"
  | "employee-kit"
  | "other";

export type RFQLead = {
  id: string;
  name: string;
  company: string;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  requirementType: RequirementType;
  product: string | null;
  category: string | null;
  quantity: number | null;
  budget: string | null;
  requiredDate: string | null;
  deliveryLocation: string | null;
  brandingMethod: string | null;
  message: string | null;
  artworkUrl: string | null;
  sourcePage: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  createdAt: string;
  status: LeadStatus;
};

export type QuickQuoteInput = Pick<
  RFQLead,
  | "name"
  | "company"
  | "phone"
  | "whatsapp"
  | "requirementType"
  | "quantity"
  | "requiredDate"
  | "message"
  | "sourcePage"
>;

