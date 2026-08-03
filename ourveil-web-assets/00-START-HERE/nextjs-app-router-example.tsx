// Copy the two favicon <link> tags into the <head> of app/layout.tsx.
// Copy the selected PNG files into public/brand/ and keep these filenames.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        <link rel="apple-touch-icon" href="/brand/apple-touch-icon-180x180.png" />
        <link rel="manifest" href="/brand/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}

