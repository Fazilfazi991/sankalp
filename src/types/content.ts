export type VerificationStatus = "approved" | "planned" | "verified";

export type ContentItem = {
  id: string;
  title: string;
  description: string;
  href: string | null;
  status: VerificationStatus;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  description: string | null;
  imageUrl: string | null;
  material: string | null;
  colours: string[];
  dimensions: string | null;
  capacity: string | null;
  moq: number | null;
  leadTime: string | null;
  stock: string | null;
  brandingMethods: string[];
  price: number | null;
  manufacturer: string | null;
  origin: string | null;
  certifications: string[];
  shippingTime: string | null;
  verified: boolean;
  published: boolean;
};

