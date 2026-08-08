# OURVEIL Storefront Brand Specification

The storefront uses quiet warm surfaces, restrained brown actions, Arabic-first typography, and product-led editorial spacing while preserving every supplied logo asset exactly as delivered.

## Core Open Design tokens

```css
:root {
  --bg: oklch(0.9820 0.0060 71);
  --surface: oklch(0.9950 0.0020 71);
  --fg: oklch(0.4101 0.0389 70.95);
  --muted: oklch(0.4698 0.0418 70.64);
  --border: oklch(0.8206 0.0341 70.26);
  --accent: oklch(0.4698 0.0418 70.64);
}
```

## Brand aliases

- `--brand-ivory`: `#EEE0D1` / `oklch(0.9139 0.0253 69.42)`
- `--brand-cream`: `#F7F0E8` / `oklch(0.9584 0.0131 71.33)`
- `--brand-silk`: `#D3C1AD` / `oklch(0.8206 0.0341 70.26)`
- `--brand-taupe`: `#AC947A` / `oklch(0.6812 0.0466 69.16)`
- `--brand-brown`: `#6A5741` / `oklch(0.4698 0.0418 70.64)`
- `--brand-espresso`: `#584733` / `oklch(0.4101 0.0389 70.95)`

## Type stacks

- Display: `"Cormorant Garamond", Georgia, serif` — English editorial accents only.
- Body and UI: `"IBM Plex Sans Arabic", Tahoma, sans-serif` — all Arabic interface content, controls, prices, and product information.
- Mono: `ui-monospace, "SFMono-Regular", Consolas, monospace` — token names, SKUs, and technical values.

## Observed visual rules

1. Use the supplied brown wordmark on light UI and the supplied warm-white wordmark on dark UI; never transform, recolor, crop, redraw, or retype either asset.
2. Keep most surfaces near-white or clean white; reserve Warm Ivory and Soft Cream for quiet bands and supporting states.
3. Use Brand Brown for decisive actions and Espresso for text and action hover states.
4. Let large product imagery lead; typography and controls remain restrained, flat, and separated primarily by spacing and hairline borders.
5. Default to Arabic RTL with logical CSS properties; preserve the natural direction of prices, SKUs, phone numbers, and English technical terms.
