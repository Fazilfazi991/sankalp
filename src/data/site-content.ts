import type { ContentItem, Product } from "@/types/content";

export const pillars: ContentItem[] = [
  {
    id: "corporate-gifting",
    title: "Corporate Gifting",
    description: "Shape a gifting brief around the recipient, occasion and budget—not a generic hamper list.",
    href: "/corporate-gifting/",
    status: "approved",
  },
  {
    id: "custom-apparel",
    title: "Custom Apparel",
    description: "Bring teams, events and campaigns together through apparel planned around the requirement.",
    href: "/custom-apparel/",
    status: "approved",
  },
  {
    id: "promotional-merchandise",
    title: "Promotional Merchandise",
    description: "Explore useful branded product directions for events, outreach and everyday brand visibility.",
    href: "/promotional-merchandise/",
    status: "approved",
  },
  {
    id: "printing-branding",
    title: "Printing & Branding",
    description: "Plan professional print and customisation around the format, finish and intended use.",
    href: "/printing-services/",
    status: "approved",
  },
];

export const useCases: ContentItem[] = [
  { id: "onboarding", title: "Employee onboarding", description: "Build a considered welcome-kit requirement for new joiners.", href: "/request-a-quote/?type=employee-kit", status: "planned" },
  { id: "events", title: "Events & conferences", description: "Bring apparel, attendee items and print into one event brief.", href: "/request-a-quote/?type=promotional-merchandise", status: "planned" },
  { id: "teams", title: "Team apparel", description: "Start with who will wear it, where and for what purpose.", href: "/#custom-apparel", status: "planned" },
  { id: "clients", title: "Client gifting", description: "Explore gifting directions suited to the relationship and moment.", href: "/#corporate-gifting", status: "planned" },
  { id: "campaigns", title: "Promotional campaigns", description: "Translate a campaign need into practical merchandise choices.", href: "/#products", status: "planned" },
  { id: "recognition", title: "Awards & recognition", description: "Plan a recognition brief before choosing the final format.", href: "/request-a-quote/?type=corporate-gifting", status: "planned" },
];

export const categories: ContentItem[] = [
  { id: "drinkware", title: "Drinkware", description: "Bottles, tumblers and mugs", href: null, status: "planned" },
  { id: "apparel", title: "Apparel", description: "T-shirts, polos and teamwear", href: "/#custom-apparel", status: "planned" },
  { id: "bags", title: "Bags", description: "Totes, backpacks and carry options", href: null, status: "planned" },
  { id: "stationery", title: "Stationery", description: "Notebooks and desk essentials", href: null, status: "planned" },
  { id: "employee-kits", title: "Employee kits", description: "Flexible onboarding combinations", href: "/request-a-quote/?type=employee-kit", status: "planned" },
  { id: "event-merchandise", title: "Event merchandise", description: "Items for conferences and campaigns", href: null, status: "planned" },
];

export const brandingMethods: ContentItem[] = [
  { id: "dtf", title: "DTF", description: "A planned apparel-printing content slot.", href: null, status: "planned" },
  { id: "screen-printing", title: "Screen printing", description: "A planned bulk-apparel content slot.", href: null, status: "planned" },
  { id: "embroidery", title: "Embroidery", description: "A planned stitched-branding content slot.", href: null, status: "planned" },
  { id: "sublimation", title: "Sublimation", description: "A planned all-over print content slot.", href: null, status: "planned" },
  { id: "uv-printing", title: "UV printing", description: "A planned hard-surface print content slot.", href: null, status: "planned" },
  { id: "laser-engraving", title: "Laser engraving", description: "A planned engraved-finish content slot.", href: null, status: "planned" },
];

export const products: Product[] = [];

export const faqs = [
  {
    question: "Can I enquire without knowing the right product or printing method?",
    answer: "Yes. Start with what you need, the approximate quantity and the date you are working toward. The enquiry flow is designed around the requirement rather than technical terminology.",
  },
  {
    question: "Can I request a quote for more than one category?",
    answer: "Yes. Use the message field to describe the full requirement, including any gifting, apparel, merchandise or printing elements you want considered together.",
  },
  {
    question: "Can I share artwork or a logo?",
    answer: "The full quotation architecture supports artwork collection. File submission will be enabled after the secure lead-handling destination is configured.",
  },
  {
    question: "Where can I find prices, minimum quantities and lead times?",
    answer: "These details vary by requirement and have not yet been verified for publication. Share your brief to begin the appropriate quotation process.",
  },
];
