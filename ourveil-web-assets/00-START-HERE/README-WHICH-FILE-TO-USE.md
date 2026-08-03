# Ourveil — which file should I use?

This package separates assets by **where they are used** and by **the background they sit on**.

## Fast answer

| Place | Light website/UI | Dark website/UI |
| --- | --- | --- |
| Browser tab | `01-browser-tab-favicon/light-browser-theme/ourveil-tab-icon-light-browser-32x32.png` | `01-browser-tab-favicon/dark-browser-theme/ourveil-tab-icon-dark-browser-32x32.png` |
| Store navbar | `02-navbar/use-on-light-background/ourveil-navbar-light-ui-480x144.png` | `02-navbar/use-on-dark-background/ourveil-navbar-dark-ui-480x144.png` |
| Dashboard expanded sidebar | `03-dashboard/use-on-light-background/ourveil-dashboard-expanded-light-ui-360x112.png` | `03-dashboard/use-on-dark-background/ourveil-dashboard-expanded-dark-ui-360x112.png` |
| Dashboard collapsed sidebar | `03-dashboard/use-on-light-background/ourveil-dashboard-collapsed-light-ui-128x128.png` | `03-dashboard/use-on-dark-background/ourveil-dashboard-collapsed-dark-ui-128x128.png` |

## Browser tab / favicon

Use both 32×32 PNG files and let the browser switch automatically:

```html
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/brand/ourveil-tab-icon-light-browser-32x32.png"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/brand/ourveil-tab-icon-dark-browser-32x32.png"
  media="(prefers-color-scheme: dark)"
/>
```

`favicon.ico` is included as a fallback for older browsers. It uses the light-browser version.

## Navbar and dashboard theme switching

If the site uses Tailwind's `dark` class, render both images and switch them with CSS:

```tsx
<>
  <img
    src="/brand/ourveil-navbar-light-ui-480x144.png"
    alt="Ourveil"
    width={160}
    height={48}
    className="block dark:hidden"
  />
  <img
    src="/brand/ourveil-navbar-dark-ui-480x144.png"
    alt="Ourveil"
    width={160}
    height={48}
    className="hidden dark:block"
  />
</>
```

The same pattern works for the dashboard files. Use the `expanded` wordmark while the sidebar is open and the `collapsed` monogram while it is collapsed.

## Retina / high-density screens

The navbar folder contains normal and `@2x` files. The normal file is enough for most web projects. Use `@2x` when the logo is displayed large or when you want extra sharpness on high-density screens.

## App and PWA icons

- `apple-touch-icon-180x180.png`: Apple home-screen icon.
- `pwa-icon-192x192.png`: standard small PWA icon.
- `pwa-icon-512x512.png`: standard large PWA icon.
- `pwa-maskable-icon-512x512.png`: Android/PWA maskable icon.
- `site.webmanifest`: starter manifest; adjust icon paths if you place files inside a subfolder.

App icons normally do not change with website light/dark mode, so one neutral cream-and-brown version is supplied.

## Other folders

- `05-master-logos`: large transparent wordmark, monogram, and full logo with tagline.
- `06-social-sharing`: Open Graph/WhatsApp link preview and social profile image.
- `07-original-reference`: the original logo image supplied for the project.

## Naming rule

- `light-ui` / `use-on-light-background`: brown logo for a light page, navbar, or sidebar.
- `dark-ui` / `use-on-dark-background`: warm-white logo for a dark page, navbar, or sidebar.
- `light-browser` / `dark-browser`: favicon matching the user's browser/OS color preference.

