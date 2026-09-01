export type BusinessConfig = {
  brandName: string;
  legalName: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  address: string | null;
  city: string;
  state: string;
  postalCode: string | null;
  country: string;
  businessHours: string | null;
  googleMapsUrl: string | null;
  googleBusinessProfileUrl: string | null;
  instagram: string | null;
  facebook: string | null;
  linkedin: string | null;
  canonicalUrl: string | null;
  deliveryCoverage: string | null;
  companyRegistrationData: Record<string, string> | null;
};

export const business: BusinessConfig = {
  brandName: "Sankalp Branding Solutions",
  legalName: null,
  phone: null,
  whatsapp: null,
  email: null,
  address: null,
  city: "Bengaluru",
  state: "Karnataka",
  postalCode: null,
  country: "India",
  businessHours: null,
  googleMapsUrl: null,
  googleBusinessProfileUrl: null,
  instagram: null,
  facebook: null,
  linkedin: null,
  canonicalUrl: null,
  deliveryCoverage: null,
  companyRegistrationData: null,
};

