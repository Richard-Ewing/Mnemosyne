'use client';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function ExtensionPage() {
    const { user } = useAuth();
    const isLocked = user?.subscription_tier === 'free';

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Chrome Extension</h1>
            {isLocked ? (
                <div className="border border-orange-500/30 bg-orange-500/5 rounded-lg p-12 text-center max-w-2xl mx-auto">
                    <div className="text-5xl mb-6">◭</div>
                    <h3 className="text-xl font-bold text-white mb-2">Extension Locked</h3>
                    <p className="text-gray-400 mb-6">
                        The Exogram Chrome Extension allows you to verify facts and capture context anywhere on the web.
                        This feature is available on Pro plans and above.
                    </p>
                    <Link href="/pricing" className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition">
                        Upgrade to Pro
                    </Link>
                </div>
            ) : (
                <div className="border border-gray-800 rounded-lg p-8 space-y-6 bg-gray-900/20">
                    <div className="flex items-start gap-4">
                        <div className="bg-teal-900/30 p-3 rounded-lg text-teal-400 text-2xl">⬇</div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Install Extension (v2)</h3>
                            <p className="text-gray-400 mt-1">
                                Capture context, verify claims, and build your ledger directly from your browser.
                                Supports OAuth login and automatic background synchronization.
                            </p>
                        </div>
                    </div>

                    <div className="pl-16">
                        <a
                            href="#"
                            className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-500 transition-colors"
                            onClick={(e) => { e.preventDefault(); alert('Extension coming to Chrome Web Store shortly!'); }}
                        >
                            Add to Chrome
                        </a>
                        <p className="text-xs text-gray-500 mt-2">Version 2.0.1 • Manifest V3</p>
                    </div>
                </div>
            )}
        </div>
    );
}
