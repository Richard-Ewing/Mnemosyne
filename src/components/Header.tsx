'use client';

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "/what-exogram-is", label: "What It Is" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/for-individuals", label: "Individuals" },
    { href: "/for-teams", label: "Teams" },
    { href: "/for-developers", label: "Developers" },
    { href: "/pricing", label: "Pricing" },
];

export default function Header() {
    const { isAuthenticated, user, loading } = useAuth();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 relative">
                        <img
                            src="/logo.png"
                            alt="Exogram Logo"
                            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                        />
                    </div>
                    <span className="text-xl font-semibold tracking-tight hidden sm:inline text-white">
                        Exogram
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

                    {mounted && !loading && isAuthenticated ? (
                        <div className="flex items-center gap-4">
                            {/* Dashboard Link */}
                            <Link
                                href="/dashboard"
                                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-medium hover:from-teal-400 hover:to-emerald-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
                            >
                                Dashboard
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link
                                href="/login"
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-medium hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
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
    );
}
