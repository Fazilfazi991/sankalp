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
  businessHours: {
    days: string[];
    opens: string;
    closes: string;
    label: string;
  } | null;
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
  phone: "+91 89489 43919",
  whatsapp: "+91 89489 43919",
  email: "info@sankalpbranding.com",
  address: "296/23, 11th Cross, Siddaiah Rd, Wilson Garden, Bengaluru, Karnataka 560027, India",
  city: "Bengaluru",
  state: "Karnataka",
  postalCode: "560027",
  country: "India",
  businessHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
    label: "Monday–Saturday · 9:00 AM–6:00 PM",
  },
  googleMapsUrl: "https://share.google/aDKOFBFrFyHJ0cBVK",
  googleBusinessProfileUrl: null,
  instagram: "https://www.instagram.com/sankalpbrandingsolutions/",
  facebook: null,
  linkedin: null,
  canonicalUrl: "https://sankalpbranding.com",
  deliveryCoverage: null,
  companyRegistrationData: null,
};
