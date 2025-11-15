import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goodnight Punpun ? Notes in Black and White",
  description:
    "A minimalist, typewriter-styled set of notes on Goodnight Punpun ? structure, themes, symbolism, and the quiet machinery of despair.",
  metadataBase: new URL("https://agentic-98e6e04e.vercel.app"),
  authors: [{ name: "Notes" }],
  openGraph: {
    title: "Goodnight Punpun ? Notes in Black and White",
    description:
      "A minimalist, typewriter-styled set of notes on Goodnight Punpun ? structure, themes, symbolism, and the quiet machinery of despair.",
    url: "https://agentic-98e6e04e.vercel.app",
    siteName: "Punpun Notes",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="container">
          <header>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div>
                <Link href="/" style={{ textDecoration: "none" }}>
                  <h1>Goodnight Punpun ? Notes</h1>
                </Link>
                <div className="kicker">Black ink. White page. No mercy.</div>
              </div>
              <nav className="nav" aria-label="Primary">
                <Link href="/">Home</Link>
                <Link href="/punpun/prologue">Start</Link>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer>
            <div>Minimalist reading notes. Typeface: Special Elite.</div>
            <div className="meta">No spoilers spared. Read responsibly.</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
