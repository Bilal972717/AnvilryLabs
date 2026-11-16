import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Jost } from "next/font/google";
import { AuditProvider } from "@/components/AuditProvider";
import { FixedAuditButton } from "@/components/FixedAuditButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Anvilry Labs — Software, properly forged.",
    template: "%s · Anvilry Labs",
  },
  description:
    "Websites, apps and custom software built with a craftsperson’s care and an engineer’s rigor, then made easy to find.",
  metadataBase: new URL("https://www.anvilrylabs.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Anvilry Labs — Software, properly forged.",
    description:
      "Websites, apps and custom software built with a craftsperson’s care and an engineer’s rigor, then made easy to find.",
    url: "https://www.anvilrylabs.com",
    siteName: "Anvilry Labs",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Anvilry Labs — Software, properly forged.",
    description:
      "Websites, apps and custom software built with a craftsperson’s care and an engineer’s rigor, then made easy to find.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        fraunces.variable,
        jost.variable,
        ibmPlexMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <ThemeProvider>
          <a
            href="#main"
            className="absolute left-4 top-4 z-[100] -translate-y-[200%] rounded-md bg-heat px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0"
          >
            Skip to content
          </a>
          <AuditProvider>
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
            <FixedAuditButton />
          </AuditProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
