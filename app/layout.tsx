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
  metadataBase: new URL("https://themnemosyne.io"),
  title: "Mnemosyne | Semantic Memory Governance Infrastructure",
  description:
    "Infrastructure that prevents AI from contradicting itself. VL-JEPA semantic prediction gives your AI systems meaning custody—storing meaning, not just text.",
  keywords: [
    "semantic memory",
    "AI governance",
    "VL-JEPA",
    "meaning custody",
    "knowledge infrastructure",
    "AI memory",
    "semantic prediction",
  ],
  authors: [{ name: "Mnemosyne" }],
  openGraph: {
    title: "Mnemosyne | Semantic Memory Governance Infrastructure",
    description:
      "Infrastructure that prevents AI from contradicting itself through VL-JEPA semantic prediction.",
    url: "https://themnemosyne.io",
    siteName: "Mnemosyne",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mnemosyne | Semantic Memory Governance Infrastructure",
    description:
      "Infrastructure that prevents AI from contradicting itself through VL-JEPA semantic prediction.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0a0f] text-white min-h-screen`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
                <span className="text-xl font-bold">M</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Mnemosyne
              </span>
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <a
                href="#early-access"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-sm font-medium hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
              >
                Early Access
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-32">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <span className="text-sm font-bold">M</span>
                </div>
                <span className="text-sm text-gray-400">
                  © 2026 Mnemosyne. All rights reserved.
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
