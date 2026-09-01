# Sankalp Branding Solutions — Gate 0/1 Website Strategy

Prepared: 1 September 2026  
Status: Architecture recommendation awaiting supervisor approval; not production copy.

## 1. Repository and implementation audit

| Item | Finding |
|---|---|
| Repository root | `C:\Users\User\Desktop\Projects\Sankalp Branding Solutions` |
| Git | No `.git` repository; branch, SHA, status and remotes do not exist |
| Framework/version | None present |
| React/version | None present |
| TypeScript | None present |
| Styling/package manager/routing | None present |
| Pages/routes/components | None present |
| Public assets/images/logos/fonts/tokens | None present |
| Forms/backend/database/CMS | None present |
| Environment architecture | No environment files present |
| Analytics | None present |
| Sitemap/robots | None present |
| Metadata/schema | None present |
| Domain assumptions | None present |
| Deployment configuration | None present |

The designated directory was empty at audit time. There is no existing implementation to preserve, assess or upgrade. Planning documents created in this gate are the first files in the folder.

## 2. Verified business-data audit

`Verified` means present in the supervisor-supplied brief. It does not imply independent legal verification. `Not confirmed` means no evidence was supplied.

| Field | Value | Status | Source |
|---|---|---|---|
| Legal/business name | Sankalp Branding Solutions | Supplied; legal form not confirmed | Supervisor directive |
| Public brand name | Sankalp Branding Solutions | Supplied | Supervisor directive |
| Market | Bangalore/Bengaluru, Karnataka, India | Supplied market direction; service address/coverage not confirmed | Supervisor directive |
| Business model | B2B catalogue and lead generation, not initial conventional ecommerce | Verified requirement | Supervisor directive |
| Business direction | Corporate gifting, custom apparel, promotional merchandise, printing/branding | Working commercial direction; individual supply not confirmed | Supervisor directive |
| Primary objective | Qualified business enquiries | Verified requirement | Supervisor directive |
| Primary conversions | Quote, WhatsApp, phone, product/service enquiry, catalogue interaction | Verified requirement | Supervisor directive |
| Logo | — | Not confirmed | Empty repository |
| Address/locality/PIN | — | Not confirmed | Empty repository |
| Phone/WhatsApp/email | — | Not confirmed | Empty repository |
| Business hours/Maps/GBP | — | Not confirmed | Empty repository |
| Instagram/Facebook/LinkedIn | — | Not confirmed | Empty repository |
| GST/legal details | — | Not confirmed | Empty repository |
| Years in business | — | Not confirmed | Empty repository |
| Service/delivery coverage | — | Not confirmed | Empty repository |
| Products and printing methods | — | Not confirmed individually | Empty repository; directive says not to assume |
| MOQ/lead time/pricing | — | Not confirmed | Empty repository |
| Catalogue/client logos/testimonials/portfolio | — | Not confirmed | Empty repository |
| Certifications/capabilities/in-house status | — | Not confirmed | Empty repository |

## 3. Recommended commercial architecture

Retain the four pillars, with one naming adjustment: use **Printing & Branding Services** publicly so `branding` is not mistaken for brand-strategy consultancy.

1. **Corporate Gifting** — organise primarily by occasion and recipient: welcome/joining, client, festive, recognition and hampers. Publish only confirmed offers.
2. **Custom Apparel** — T-shirts as the launch money page; uniforms and method pages expand after range and capability verification.
3. **Promotional Merchandise** — the discoverable product universe, with use-case and category routes. It absorbs `custom merchandise` search intent at launch.
4. **Printing & Branding Services** — commercial print and applicable product-branding methods. Clearly distinguish print collateral from merchandise customisation.

The unifying proposition is not “we sell everything”; it is one accountable partner that helps a business choose, brand and deliver the right items. That is a recommendation, not a factual operational claim until Sankalp confirms its process.

## 4. SEO page prioritisation

P0 should remain the ten-page focused launch defined in `sitemap-plan.md`. P1 pages require confirmed range and enough distinct buying guidance. P2 builds evidence/authority after strong case-study inputs. P3 covers scale features and genuinely differentiated local expansion. No neighbourhood pages should launch by default.

## 5. Positioning — exactly three directions

### Direction 1 — The practical B2B brand-delivery partner (recommended)

**Headline:** Branded merchandise, gifting and print—made easier for Bengaluru businesses.  
**Support:** One responsive partner to help you choose, customise and organise business-ready products for teams, clients, events and campaigns.  
**Audience:** HR, admin, procurement, marketing and event teams that value clarity and coordination.  
**Strengths:** Broad enough for all four pillars; human and commercially useful; avoids luxury-only or cheap-print cues.  
**SEO implications:** Service/location phrases can sit naturally below a brand-led hero.  
**Conversion implications:** Leads directly into “tell us the purpose, quantity and deadline” RFQs.  
**Risk:** “One partner” and delivery/process language must be aligned to real operations.

### Direction 2 — Merchandise people are proud to use

**Headline:** Put your brand on products people will actually want to use.  
**Support:** Thoughtfully selected corporate gifts, apparel and promotional merchandise, customised for the people and moments that matter.  
**Audience:** Brand, culture, people and marketing teams seeking design/quality rather than commodity sourcing.  
**Strengths:** Distinctive, product- and recipient-centred, supports premium photography.  
**SEO implications:** Requires clear service headings and category copy to keep commercial relevance explicit.  
**Conversion implications:** Strong for curated proposals and purpose-led enquiries.  
**Risk:** Printing services fit less naturally; “thoughtfully selected” implies genuine curation.

### Direction 3 — From brief to branded result

**Headline:** Your brief, turned into branded products ready for business.  
**Support:** Corporate gifting, custom apparel, promotional merchandise and print coordinated around your brand, quantity and deadline.  
**Audience:** Procurement-led buyers with defined requirements and operational pressure.  
**Strengths:** Direct, process-oriented and RFQ-friendly; neatly unifies the pillars.  
**SEO implications:** Excellent bridge into product, method and use-case pages.  
**Conversion implications:** Encourages complete briefs and artwork uploads.  
**Risk:** Deadline language can imply a capability that must be proven; may feel functional without strong creative assets.

**Recommendation:** Direction 1. It balances approachability, B2B confidence, local relevance and breadth without forcing unverified quality, scale, speed or manufacturing claims.

## 6. Conversion architecture

### CTA hierarchy

1. Primary global: **Request a Quote**.
2. Contextual primary: **Get T-Shirt Quote**, **Get Corporate Gifting Quote**, **Discuss an Employee Kit**, **Ask About This Product**.
3. Assisted contact: **WhatsApp**.
4. Immediate contact: **Call**.
5. Discovery: **Browse Products / View Catalogue** (only once a usable catalogue exists).

### Quick Quote

Minimum fields: name, company, phone or email (require one; offer both), requirement/category, approximate quantity, needed-by date, and short message. Carry page/product context invisibly. Add consent acknowledgement. Do not make budget, artwork or address mandatory at this stage.

### Full RFQ

Name; company; phone; WhatsApp preference; email; product/category; requirement/use case; quantity; budget range (optional); deadline; delivery city/PIN or multi-location indicator; branding method if known; sizes/variants where relevant; message; artwork/logo upload; contact preference; consent. Use conditional fields so apparel sizes do not appear for printing enquiries.

### Journey

- Category/product CTA opens a short contextual drawer/modal or routes to RFQ with the category and source URL preserved.
- Confirmation states response expectations only after Sankalp defines them and offers WhatsApp/call alternatives.
- Lead notification must reach a verified owner; capture source page, UTM data and consent server-side.
- Prevent spam and validate files; never expose uploaded artwork publicly.

## 7. WhatsApp architecture

No number should be hardcoded until verified. URL-encode messages and include page context.

- **Product:** “Hello Sankalp, I’m enquiring about [product]. Quantity: [if entered]. Needed by: [date]. Delivery city: [city]. Page: [URL]. Please share suitable branding options and a quote.”
- **T-shirts:** “Hello Sankalp, I need customised T-shirts. Style/fabric: [known]. Quantity: [number]. Print/embroidery: [known]. Needed by: [date]. Delivery city: [city]. I can share artwork here.”
- **Corporate gifting:** “Hello Sankalp, I’m planning corporate gifts for [employees/clients/event]. Quantity: [number]. Budget per person: [optional]. Occasion/date: [detail]. Delivery: [one/multiple locations]. Please suggest suitable options.”
- **Welcome kit:** “Hello Sankalp, I’d like to discuss employee welcome kits. New joiners: [number]. Items/brand brief: [known]. Budget per kit: [optional]. Delivery model: [office/individual addresses]. Required by: [date].”
- **Printing:** “Hello Sankalp, I need [print item]. Size/pages/material: [known]. Quantity: [number]. Artwork status: [ready/help needed]. Needed by: [date]. Delivery city: [city].”

## 8. Phone and catalogue journeys

Phone links should be visible on contact and high-intent pages, with a descriptive label rather than an unexplained icon. Track clicks only with consent-compatible analytics. Catalogue interactions should support category filtering, “ask about this” and shareable URLs; a PDF download is secondary and must show edition/date. Do not gate basic browsing behind a lead form.

## 9. Design direction

Brand observations are currently impossible because no logo, colours, fonts or photography were supplied. Extend rather than replace the identity once files arrive.

- **Visual direction:** modern B2B product studio—confident, tactile and organised; neither luxury-black-and-gold by default nor bargain-print-shop clutter.
- **Typography:** a highly legible contemporary sans family with broad Indian-script support if Kannada is planned; use one display weight and restrained scale. Final choice follows logo/brand review and licensing.
- **Colour:** derive primary/secondary colours from the approved logo; add neutral ink, warm off-white and one high-contrast CTA colour. Verify WCAG contrast.
- **Photography:** real, consistent, naturally lit product groupings; close-ups of print/embroidery/material; process and packed-delivery evidence. Label renders/mockups as such.
- **Product cards:** large image, precise name, 2–3 decision attributes, applicable branding methods and contextual enquiry; no fake prices.
- **Category cards:** outcome/product family, representative real image and item count only if maintained.
- **Hero:** one strong real project/product composition, concise recommended positioning, primary quote CTA and secondary browse CTA.
- **Navigation:** desktop mega-menu only after category depth exists; launch with four pillars, Products, Work/About and Quote. Mobile uses compact accordion groups plus persistent quote, WhatsApp and call actions without covering content.
- **Spacing/density:** generous section spacing, compact factual cards, short copy measures; prioritise scanning for busy buyers.
- **Portfolio:** problem → selection → customisation → delivered result, backed by permissioned photos and concrete non-confidential facts.

## 10. Homepage information architecture — exact order

| # | Section | Purpose | Primary message | Primary CTA | SEO role | Content/asset required |
|---:|---|---|---|---|---|---|
| 1 | Utility/contact strip + header | Orient and expose conversion | Local, reachable B2B partner | Request a Quote | Entity/internal links | Verified phone, WhatsApp, navigation |
| 2 | Hero | State category and value fast | Recommended positioning direction | Request a Quote; Browse Products | Brand + core category context | Approved proposition, real hero image |
| 3 | Trust/evidence strip | Reduce immediate risk | Verified proof only | View Our Work | Entity/E-E-A-T support | Address, metrics/certifications only if evidenced |
| 4 | Four capability pillars | Explain the offer | Four ways Sankalp supports business branding | Explore each pillar | Strong internal linking | Confirmed categories and images |
| 5 | Shop by business need | Match real briefs | Onboarding, gifting, events, uniforms/campaigns | Discuss Your Requirement | Use-case semantic coverage | Confirmed use cases |
| 6 | Featured products/categories | Enable tangible discovery | Practical starting points for a brief | Ask About This Product | Product/category links | Real catalogue data and photography |
| 7 | How the process works | Make procurement predictable | Brief → options → approval → production/delivery, once verified | Start Your Brief | Answers commercial objections | Confirmed workflow and responsibilities |
| 8 | Featured work/case studies | Prove capability | Real projects, not generic claims | View Case Studies | Unique evidence and long-tail relevance | Permissions, photos, project facts |
| 9 | Branding methods guidance | Show expertise and route intent | Choose a method based on product, finish and quantity | Ask for a Recommendation | Supports method clusters | Verified methods and technical input |
| 10 | Why Sankalp | Differentiate credibly | Specific verified reasons to choose the business | Request a Quote | Entity/trust relevance | Operational proof, team/process assets |
| 11 | FAQs | Resolve purchase friction | Clear answers on MOQ, artwork, timing, delivery once verified | Ask Another Question | Long-tail support; FAQ schema only if eligible | Approved factual answers |
| 12 | Final contextual RFQ | Convert informed visitors | Share purpose, quantity and date | Get a Quote | Conversion, not keyword repetition | Lead destination, consent text |
| 13 | Footer | Close navigation/entity loop | Complete verified business details | Contact / WhatsApp | NAP/entity/internal linking | Full NAP, hours, profiles, policies |

## 11. Metadata, local SEO and schema recommendation

Use a central metadata pattern per page with unique title, description, canonical, Open Graph image and indexation control. Generate XML sitemap and robots rules from real routes. Once verified, use `Organization`/`LocalBusiness`-appropriate JSON-LD with consistent NAP and `sameAs`; add `BreadcrumbList` on nested pages and `Product` only where a genuine product entity has sufficient data. Do not add self-serving review/rating markup. FAQ markup should mirror visible content and current search-engine eligibility.

## 12. Measurement recommendation

At launch measure quote starts/submissions, contextual CTA source, WhatsApp clicks, phone clicks, catalogue/product interactions, qualified-lead category and lead outcome. Analytics IDs and consent requirements are unknown; do not install trackers until approved.

## 13. Architecture decisions requiring supervisor approval

1. Approve Direction 1 as the positioning base, subject to operational verification.
2. Approve the focused P0 sitemap and the decision to merge overlapping query variants.
3. Confirm whether Printing & Branding is a true launch pillar or a narrower supporting capability.
4. Confirm whether Products can launch as a curated category catalogue or must wait for product data.
5. Confirm the minimum verified service range and the client-data collection owner before implementation starts.

