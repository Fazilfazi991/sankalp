---
name: Sankalp Branding Solutions
description: A bright, tactile B2B catalogue system that moves buyers from requirement to branded result.
colors:
  cobalt: "#1857d8"
  cobalt-deep: "#103c9c"
  warm-ivory: "#f7f4ee"
  paper: "#fffdf8"
  warm-stone: "#eae5dc"
  ink: "#101828"
  slate: "#536070"
  hairline: "#d7d1c7"
  signal-lime: "#e5ff57"
  focus-amber: "#ffb800"
  success: "#157347"
  warning: "#a65f00"
  error: "#b42318"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.55rem, 5.1vw, 4.9rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem, 3.7vw, 3.5rem)"
    fontWeight: 760
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.55rem)"
    fontWeight: 730
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.1em"
rounded:
  control: "10px"
  sm: "12px"
  surface: "16px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  gutter: "clamp(1.1rem, 4vw, 2.5rem)"
  section: "clamp(4.75rem, 8vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.15rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.15rem"
    height: "48px"
  card-editorial:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "1.55rem"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.75rem 0.85rem"
    height: "50px"
---

# Design System: Sankalp Branding Solutions

## Overview

**Creative North Star: "The Working Sample Room"**

Sankalp's implemented visual system presents branded merchandise as a practical, tangible business decision. Warm paper-like neutrals create a bright sample-room foundation; saturated cobalt provides a single confident brand voice; near-black ink surfaces create editorial contrast. Product photography and material-like product compositions carry the emotional weight, while copy and navigation remain direct, procurement-friendly, and requirement-led.

This is intentionally a temporary identity. The current logo mark, cobalt, Manrope typography, and generated development imagery are working decisions, not permanent brand assets. Preserve their roles and restraint while this system is in use, but keep them centralized and replaceable when approved Sankalp identity assets and real project photography arrive.

**Key Characteristics:**

- Warm, bright neutral canvas with one controlled cobalt accent.
- Ink sections create decisive contrast without turning the page into a dark theme.
- Tactile product imagery and material compositions lead; decoration stays subordinate.
- Compact editorial cards and ruled lists make broad offerings easy to scan.
- Requirement-first language supports a quote-led B2B buying journey.
- Motion is restrained, state-led, and removed for reduced-motion users.

## Colors

The palette feels like warm stock paper, blue production ink, and dark presentation boards, with signal colors reserved for specific states.

### Primary

- **Production Cobalt:** The only general-purpose accent. Use it for primary actions, links, active emphasis, icons, and selected branded surfaces.
- **Deep Cobalt:** Use for cobalt hover states and darker tonal emphasis, never as a competing second accent.

### Neutral

- **Warm Ivory:** Default page canvas; it keeps long catalogue pages bright without stark white glare.
- **Sample Paper:** Raised cards, form panels, labels, and section surfaces.
- **Warm Stone:** Quiet icon tiles, dividers, and material-like secondary surfaces.
- **Presentation Ink:** Primary text, secondary buttons, high-contrast sections, and the footer family.
- **Working Slate:** Supporting copy and low-emphasis metadata.
- **Hairline:** Rules, borders, and structural separation.

### Named Rules

**The One-Ink Rule.** Cobalt is the sole general-purpose accent; do not introduce another brand color while the temporary system is active.

**The Signal-Is-State Rule.** Lime, amber, green, orange, and red are reserved for highlight, focus, success, warning, and error roles. They do not decorate ordinary content.

**The Temporary Identity Rule.** Keep color assignments tokenized so approved brand colors can replace the current cobalt-and-ivory system without rebuilding component structure.

## Typography

**Display Font:** Manrope (with sans-serif fallback)  
**Body Font:** Manrope (with sans-serif fallback)

**Character:** A single geometric sans family keeps the voice modern and operational. Strong weight contrast and tight display tracking create editorial confidence without introducing a fashion or luxury tone.

### Hierarchy

- **Display:** Extra-bold, fluid, tightly tracked type for the single descriptive page headline.
- **Headline:** Strong, fluid section titles that remain compact and balanced.
- **Title:** Dense card and module headings; use sparingly enough that the body remains easy to scan.
- **Body:** Comfortable reading text with generous line height; explanatory copy generally stays within 65 characters per line.
- **Label:** Small, bold, widely tracked uppercase text for provenance, process numbers, and utility labels—not paragraphs.

### Named Rules

**The Descriptive Headline Rule.** Headlines name the buyer's need or offering plainly before using campaign language.

**The One-Family Rule.** Use Manrope across display, body, labels, controls, and navigation until approved typography arrives; hierarchy comes from scale, weight, spacing, and placement.

## Layout

The system uses a centered content container capped at 1240px with fluid side gutters and generous fluid section spacing. Desktop surfaces commonly pair concise copy with product imagery or a structured module in an asymmetric two-column grid. Catalogue areas use compact editorial grids, ruled lists, and bounded cards rather than long prose blocks.

At 1100px, dense four- and five-column structures reduce to two or three columns and the desktop navigation yields to the mobile menu. At 760px, all primary copy/media layouts become a single column, actions stack, forms collapse to one field per row, and sequential processes become ruled vertical lists. Product discovery may remain two-up where space permits, then becomes single-column at 430px. At very narrow widths, brand copy may yield to preserve an operable quote action and menu.

**The Two-to-One Rule.** New page templates should begin with a purposeful two-column relationship and collapse to one clear reading order on mobile; never preserve desktop adjacency at the cost of legibility.

**The Container Rule.** Full-bleed color or imagery may define a section, but readable content remains aligned to the shared capped container and fluid gutter.

## Elevation & Depth

Depth is a hybrid of tonal layering, hairline rules, and a small ambient shadow vocabulary. Most editorial modules remain flat; shadows belong to tactile product images, sample boards, forms, and primary actions that need physical presence. Dark sections create depth through contrast rather than stacked shadows.

### Shadow Vocabulary

- **Ambient Surface:** `0 18px 45px rgba(16, 24, 40, 0.1)` for large product panels, sample boards, and forms.
- **Primary Action:** `0 10px 28px rgba(24, 87, 216, 0.24)` for cobalt primary buttons.
- **Floating Label:** `0 8px 24px rgba(16, 24, 40, 0.12)` for small annotations over photography.

### Named Rules

**The Tactile-Only Rule.** Use elevation to suggest a physical sample, photograph, control, or floating annotation—not to make every content block hover.

## Shapes

The form language is softly industrial: medium-radius surfaces, slightly tighter controls, pill-shaped tags, and occasional rotated rectangles that evoke laid-out samples. One-pixel borders and ruled edges keep the rounded forms disciplined. Product imagery is clipped to the shared surface radius; tiny labels use tighter corners so they read as annotations rather than cards.

**The Soft-Not-Puffy Rule.** Default surfaces use a 16px radius and controls use 10–12px; avoid oversized, inflated rounding except for true chips or circular product diagrams.

## Components

### Buttons

- **Shape:** Compact, sturdy controls with a 12px radius and at least a 48px touch target.
- **Primary:** Cobalt with white text, bold labeling, and an ambient blue shadow; large quote actions rise to a 54px minimum height.
- **Hover / Focus:** Hover darkens cobalt and lifts by 2px. Keyboard focus uses a clearly offset amber outline; reduced-motion mode removes the transition.
- **Secondary / Quiet:** Ink-filled secondary buttons retain the same structure. Quiet buttons use a transparent background with a hairline border and gain a paper surface on hover.

### Chips

- **Style:** Compact pill outlines on ink surfaces, using pale text and a restrained border.
- **State:** They currently communicate methods or attributes, not selectable filters. Do not imply interactivity without implementing it.

### Cards / Containers

- **Corner Style:** Editorial cards use the shared 16px surface radius; ruled pillar and process modules may remain square.
- **Background:** Sample Paper on Warm Ivory is the standard light layering. Ink and Cobalt are reserved for feature sections and high-priority calls to action.
- **Shadow Strategy:** Flat by default; tactile imagery and sample-board compositions may use Ambient Surface elevation.
- **Border:** Hairline rules organize lists, pillars, FAQs, and section boundaries.
- **Internal Padding:** Compact cards typically begin around 1.5rem, increasing only for larger feature or form surfaces.

### Inputs / Fields

- **Style:** White field surfaces, hairline borders, 10px corners, at least 50px height, and direct labels above each control.
- **Focus:** The border becomes cobalt with a translucent cobalt outline; the global amber focus ring remains the accessible fallback.
- **Error / Disabled:** Error red is reserved for validation and required markers. Do not invent disabled or success styling until the corresponding behavior exists.

### Navigation

The sticky desktop header uses the warm-ivory canvas with a translucent backdrop, hairline lower border, compact bold links, and a persistent quote action. Below 1100px, navigation moves into a full-screen mobile menu with large ruled links, Escape-key dismissal, 44px icon controls, and a full-width primary action.

### Photography and Provenance Labels

Product photography is tactile, closely framed, and composition-led. Development imagery must retain an explicit provenance label and replacement instruction. Once verified Sankalp work is supplied, replace the asset and its development label together; do not leave a misleading placeholder disclaimer on genuine work.

## Do's and Don'ts

### Do:

- **Do** begin page architecture from the user's requirement, quantity, date, or business context.
- **Do** use cobalt selectively for actions and navigation cues against the warm neutral foundation.
- **Do** keep cards compact, editorial, and structurally useful.
- **Do** preserve visible keyboard focus, semantic structure, mobile touch targets, and reduced-motion behavior.
- **Do** use real products and real Sankalp work as soon as verified assets are available.
- **Do** scale new pages through the same container, type hierarchy, two-to-one responsive pattern, and reusable content structures.

### Don't:

- **Don't** present the site as checkout-first ecommerce, SaaS, a digital agency, a fashion store, or a generic corporate template.
- **Don't** add unverified products, prices, lead times, client marks, claims, contact details, or operational promises.
- **Don't** introduce extra decorative accents, gradients, glass effects, or neon treatments that weaken the one-cobalt system.
- **Don't** turn every section into rounded floating cards; use rules, tonal bands, and open space to preserve editorial rhythm.
- **Don't** promote homepage-specific compositions—gift boxes, method clouds, or staggered category shapes—into mandatory patterns for every page.
- **Don't** treat the current logo, colors, typography, or generated imagery as permanent brand equity.
