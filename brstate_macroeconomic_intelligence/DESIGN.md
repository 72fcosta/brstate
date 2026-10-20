---
name: BrState Macroeconomic Intelligence
colors:
  surface: '#f8f9ff'
  surface-dim: '#d4dae6'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e8eefa'
  surface-container-high: '#e2e9f5'
  surface-container-highest: '#dce3ef'
  on-surface: '#151c25'
  on-surface-variant: '#43474e'
  inverse-surface: '#2a313a'
  inverse-on-surface: '#eaf1fd'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#485f82'
  primary: '#00152f'
  on-primary: '#ffffff'
  primary-container: '#0f2a4a'
  on-primary-container: '#7a92b7'
  inverse-primary: '#b0c8f0'
  secondary: '#246a53'
  on-secondary: '#ffffff'
  secondary-container: '#abf1d4'
  on-secondary-container: '#2b7059'
  tertiary: '#1e1300'
  on-tertiary: '#ffffff'
  tertiary-container: '#382600'
  on-tertiary-container: '#ba880e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#b0c8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#304869'
  secondary-fixed: '#abf1d4'
  secondary-fixed-dim: '#90d4b9'
  on-secondary-fixed: '#002117'
  on-secondary-fixed-variant: '#00513d'
  tertiary-fixed: '#ffdea6'
  tertiary-fixed-dim: '#f7bd48'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#f8f9ff'
  on-background: '#151c25'
  surface-variant: '#dce3ef'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  metric-display:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.03em
  metric-tabular:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The visual identity embodies the authority of central banking institutions combined with the agility of high-frequency analytical terminals. Tailored for economists, policy researchers, quantitative analysts, and financial institutions, the interface conveys absolute technical rigor, sober composure, and institutional trustworthiness.

Drawing from the structural precision of modern financial workstations and the quiet dignity of national statistical agencies, the style uses:
- **Sober Institutional Minimalism:** Vast technical clarity over decorative flourish; data density without cognitive clutter.
- **Micro-Structured Surfaces:** Hairline separation borders, deliberate structural compartmentalization, and disciplined information hierarchy.
- **Controlled National Palette:** The historic tri-color identity of Brazil reimagined as deep midnight navy, muted viridian green, and refined bullion amber, avoiding patriotic clichés in favor of technical sophistication.

## Colors

The palette establishes an analytical environment where every hue corresponds to structured telemetry rather than decoration:

- **Primary (`#0F2A4A` - Deep Sovereign Navy):** Evokes state stability, central bank reserves, and foundational authority. Used for primary chrome, structural mastheads, active states, and dominant visual weight.
- **Secondary (`#1B634D` - Muted Viridian):** A desaturated, balanced forest green referencing national wealth through fiscal resilience. Employed for positive trend lines, upward economic shifts, and validated policy metrics.
- **Tertiary (`#B8860B` - Deep Bullion / Amber Gold):** Inspired by central bank gold bars and advisory warnings. Used sparingly for highlights, secondary callouts, policy target bands, and caution alerts.
- **Neutral (`#2B323B` - Technical Slate):** Engineered for low-fatigue legibility. Off-black typography on subtle cool-gray surfaces (`#F5F7FA`, `#FFFFFF`, `#EDF1F5`) guarantees razor-sharp data scanning under prolonged analytic sessions.
- **Semantic Accents:** Downward variations and deficit movements are mapped to an austere Crimson (`#A82A2A`), balancing the viridian positive indicators.

## Typography

The typographic hierarchy prioritizes rapid scannability across dense economic tables and charts.

- **Universal Font Engine:** `Inter` serves across headlines, analytical body copy, and UI controls for supreme geometric coherence.
- **OpenType Tabular Precision:** All financial figures, basis points, interest rates, and percentage shifts must enforce `font-feature-settings: "tnum" 1, "cv05" 1, "cv10" 1`. This aligns numeric values vertically in ledger tables and prevents layout jitter in real-time streaming tickers.
- **Uppercase Metadata Micro-Labels:** `label-sm` and `label-md` are rendered in uppercase with positive letter-spacing (`0.04em` to `0.05em`) to provide distinct institutional classification tags (e.g., `BACEN`, `IPCA`, `SELIC`, `FISCAL TIER`).

## Layout & Spacing

The workstation architecture follows a dense, structured fluid layout optimized for multi-pane analytical oversight.

- **Fixed-Rail & Viewport Adaptation:** Desktop views feature a collapsed or fixed 240px technical navigation sidebar, paired with a permanent 40px live macro-ticker strip at the top edge. The primary content canvas stretches fluidly using a 12-column grid.
- **Rhythm & Padding:** Component spacing adheres to a strict 4px/8px baseline grid (`space-xs` through `space-xl`). Card interiors use compact `space-md` (16px) margins to preserve data real estate while keeping charts readable.
- **Breakpoints & Collapsibility:**
  - **Desktop (≥ 1280px):** Full 12-column analytical grid with multi-column comparative sparkline rows and deep telemetry panels.
  - **Tablet (768px – 1279px):** Sidebar converts to an off-canvas drawer; grid condenses to 6 columns; comparative panels stack logically.
  - **Mobile (< 768px):** Single-column stack, metrics ticker converts to horizontal swipe, and dense tables switch to pinned primary key columns with horizontal cell overflow.

## Elevation & Depth

To avoid visual fatigue and maintain institutional gravitas, depth is achieved through structural layering and hairline borders rather than heavy atmospheric shadows:

- **Border-Dominant Segmentation:** The primary method for surface separation is crisp 1px borders using `#DCE2E8` on white panels and `#1E3A5F` on dark structural panels.
- **Surface Layering:**
  - **Base Canvas:** Neutral cool tint (`#F5F7FA`) providing grounding contrast.
  - **Data Containers:** Pure White (`#FFFFFF`) elevated by clean structural edges.
  - **Header & Sidebar Chrome:** Grounded `#0F2A4A` or crisp `#FFFFFF` with boundary borders.
- **Ambient Shadows:** Reserved strictly for transient floating elements (tooltips, filter popovers, contextual date-range pickers). Shadows use a tight, cool-tinted plume: `0 4px 12px -2px rgba(15, 42, 74, 0.08), 0 2px 4px -1px rgba(15, 42, 74, 0.04)`.

## Shapes

The design system enforces a calibrated `roundedness: 1` (0.25rem / 4px base radius) to reflect financial precision and architectural stability:

- **Component Corners:** Buttons, inputs, filter chips, and inner chart badges utilize `0.25rem` (4px).
- **Cards & Data Surfaces:** Structural containers, chart cards, and modal canvases scale conservatively to `0.5rem` (8px).
- **Status Pills:** Trend chips indicating delta movements use subtle chamfered bounds rather than exaggerated pill bubbles, preserving an austere, institutional demeanor.

## Components

### Live Macro Ticker Header
- A persistent, horizontal strip displaying key sovereign rates (Selic, IPCA-15, Câmbio USD/BRL, Ibovespa, Dívida Bruta/PIB).
- Compact tabular numerals with micro delta arrows (`▲` in `#1B634D`, `▼` in `#A82A2A`).

### Indicator KPI Cards
- White background framed in 1px `#DCE2E8` border with 8px radius.
- Upper zone displays the index code in bold uppercase (`label-sm`), source agency badge (`IBGE`, `BACEN`), and time horizon.
- Center displays high-contrast `metric-display` numerical readings with tabular alignment.
- Lower baseline includes an embedded mini sparkline (line width: 1.5px, smooth bezier, zero fill or ultra-subtle gradient).

### Buttons & Time-Series Controls
- **Primary:** Deep navy background (`#0F2A4A`), white text, crisp 4px radius, hover shift to `#1A3D66`.
- **Segmented Range Selectors (1D, 1M, YTD, 1Y, 5Y, MAX):** Bordered frame housing ghost buttons; the active period receives a solid `#0F2A4A` fill with white text or a crisp white card inset over cool-gray background.

### Data Tables
- Strict 36px row heights for standard view; alternating neutral striping is rejected in favor of razor-thin bottom row rules (`#E5E9EE`).
- Right-aligned numeric data columns featuring monospaced tabular numerals.
- Pinned freeze-columns for series descriptions when viewing wide historical time horizons.

### Input & Filter Fields
- Subtle gray background (`#F9FAFB`) transitioning to white on focus, surrounded by a 1px border (`#CFD6DE`).
- Focus ring: 2px offset border in deep sovereign navy (`#0F2A4A`). No loud glowing rings.

### Chart Containers
- High-contrast crosshairs with snap-to-point numerical tooltips displaying full Brazilian Real and decimal formats (`R$`, `,` decimal, `.` thousand separator).
- Axis guides styled in faint dashed lines (`#E2E7ED`).