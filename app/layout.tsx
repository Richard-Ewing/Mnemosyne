import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://themnemosyne.app"),
  title: "Mnemosyne | A Semantic Ledger for AI Trust",
  description:
    "Mnemosyne reduces AI hallucinations caused by silent context loss and exposes contradictions using a governed semantic ledger of meaning.",
  keywords: [
    "semantic ledger",
    "AI trust",
    "AI governance",
    "hallucination reduction",
    "meaning custody",
    "AI memory",
    "context governance",
    "VL-JEPA",
  ],
  authors: [{ name: "Mnemosyne" }],
  openGraph: {
    title: "Mnemosyne | A Semantic Ledger for AI Trust",
    description:
      "Give your AI a source of meaning it can reference over time. Reduce hallucinations with governed semantic context.",
    url: "https://themnemosyne.app",
    siteName: "Mnemosyne",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mnemosyne | A Semantic Ledger for AI Trust",
    description:
      "Give your AI a source of meaning it can reference over time. Reduce hallucinations with governed semantic context.",
  },
};

// Navigation links
const navLinks = [
  { href: "/what-mnemosyne-is", label: "What It Is" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for-individuals", label: "Individuals" },
  { href: "/for-teams", label: "Teams" },
  { href: "/for-developers", label: "Developers" },
  { href: "/pricing", label: "Pricing" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://themnemosyne.app/#organization",
              "name": "Mnemosyne",
              "url": "https://themnemosyne.app",
              "description": "Mnemosyne builds semantic ledger infrastructure that records, governs, and audits meaning over time. Reduces AI hallucinations caused by silent context loss.",
              "foundingDate": "2026",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Mnemosyne",
              "applicationCategory": ["DeveloperApplication", "BusinessApplication"],
              "operatingSystem": ["Web", "API"],
              "description": "A model-agnostic semantic ledger that records, governs, and audits meaning over time for AI systems.",
              "featureList": [
                "Semantic ledger of meaning",
                "Conflict detection across claims",
                "Provenance and audit logging",
                "Controlled decay and reinforcement",
                "No training on user data",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Mnemosyne?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mnemosyne is a model-agnostic semantic ledger that records, governs, and audits meaning over time for AI systems and their users.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How does Mnemosyne reduce hallucinations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mnemosyne reduces hallucinations caused by silent context loss and conflicting memory by exposing contradictions before they silently compound.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Does Mnemosyne train on user data?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Mnemosyne does not train models on user data. All ingestion is user-initiated and fully auditable.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0a0f] text-white min-h-screen`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
                <span className="text-xl font-bold">M</span>
              </div>
              <span className="text-xl font-semibold tracking-tight hidden sm:inline">
                Mnemosyne
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/security"
                className="text-sm text-gray-400 hover:text-white transition-colors hidden md:inline"
              >
                Security
              </Link>
              <Link
                href="/#early-access"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-sm font-medium hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
              >
                Early Access
              </Link>
            </div>
          </div>

          {/* Mobile Nav - Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide border-t border-white/5">
            <div className="flex items-center gap-4 px-4 py-2 min-w-max">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-24 lg:pt-20">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-32">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <span className="text-sm font-bold">M</span>
                  </div>
                  <span className="font-semibold">Mnemosyne</span>
                </div>
                <p className="text-sm text-gray-400">
                  A semantic ledger for AI trust.
                </p>
              </div>

              {/* Product */}
              <div>
                <h4 className="font-semibold mb-4 text-gray-200">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/what-mnemosyne-is" className="hover:text-white transition-colors">What It Is</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                </ul>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="font-semibold mb-4 text-gray-200">Use Cases</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/for-individuals" className="hover:text-white transition-colors">Individuals</Link></li>
                  <li><Link href="/for-teams" className="hover:text-white transition-colors">Teams</Link></li>
                  <li><Link href="/for-developers" className="hover:text-white transition-colors">Developers</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold mb-4 text-gray-200">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                  <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-sm text-gray-500">
                © 2026 Mnemosyne. All rights reserved.
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                <span>•</span>
                <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                <span>•</span>
                <a href="/security" className="hover:text-white transition-colors">Security</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
