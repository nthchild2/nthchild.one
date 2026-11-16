import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Rail from "@/components/Rail";
import { themeScript } from "@/components/ThemeButton";
// Tailwind first, then vault-kit, then the site's own styles: each layer can rely on the one before it.
import "./globals.css";
import "@/styles/vault-kit/tokens.css";
import "@/styles/vault-kit/ui.css";
import "./site.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Carlos Cortes — Senior Software Engineer",
  description:
    "Senior Software Engineer with 9+ years building mobile and web applications across fintech, education, and consumer platforms. Specialized in React Native and TypeScript.",
  metadataBase: new URL("https://www.nthchild.one"),
  openGraph: {
    title: "Carlos Cortes — Senior Software Engineer",
    description:
      "Senior Software Engineer with 9+ years building mobile and web applications across fintech, education, and consumer platforms.",
    url: "https://www.nthchild.one",
    siteName: "Carlos Cortes",
    type: "website",
    images: [{ url: "/images/carlos.jpg", width: 800, height: 800 }],
  },
  twitter: {
    card: "summary",
    images: ["/images/carlos.jpg"],
    title: "Carlos Cortes — Senior Software Engineer",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div id="root">
          <div className="shell">
            <Rail />
            <main className="view">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
