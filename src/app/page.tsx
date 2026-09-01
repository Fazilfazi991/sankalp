import { Hero } from "@/components/home/hero";
import { Pillars } from "@/components/home/pillars";
import { NeedExplorer } from "@/components/home/need-explorer";
import { CategoryDiscovery } from "@/components/home/category-discovery";
import { FeaturePanels } from "@/components/home/feature-panels";
import { WelcomeKits } from "@/components/home/welcome-kits";
import { ProcessSteps } from "@/components/home/process";
import { BrandingMethods } from "@/components/home/methods";
import { WhySankalp } from "@/components/home/why-sankalp";
import { FAQ } from "@/components/home/faq";
import { QuoteCTA } from "@/components/home/quote-cta";
import { pageMetadata, siteDescription } from "@/lib/seo";

export const metadata = pageMetadata("Corporate Gifts, Custom Apparel & Branded Merchandise Bangalore", siteDescription);
export default function Home() { return <><Hero /><Pillars /><NeedExplorer /><CategoryDiscovery /><FeaturePanels /><WelcomeKits /><ProcessSteps /><BrandingMethods /><WhySankalp /><FAQ /><QuoteCTA /></>; }

