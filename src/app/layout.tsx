import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Carlos Cortes — Senior Software Engineer",
  description:
    "Senior Software Engineer with 9+ years building mobile and web applications across fintech, education, and consumer platforms. Specialized in React Native and TypeScript.",
  metadataBase: new URL("https://nthchild.one"),
  openGraph: {
    title: "Carlos Cortes — Senior Software Engineer",
    description:
      "Senior Software Engineer with 9+ years building mobile and web applications across fintech, education, and consumer platforms.",
    url: "https://nthchild.one",
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

/**
 * Inline script to prevent flash of wrong theme (FOUC).
 * Runs synchronously before React hydration to apply the correct
 * class to <html> based on localStorage or device preference.
 */
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (stored === 'dark' || (!stored && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-[hsl(var(--background))]">
        <ThemeProvider>
          <Navbar />
          <div className="pt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
