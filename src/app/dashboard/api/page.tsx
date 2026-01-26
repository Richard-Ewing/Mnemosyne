'use client';
import ApiKeys from '@/components/ApiKeys';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function APIPage() {
    const { user } = useAuth();

    if (user?.subscription_tier === 'free') {
        return (
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight">API Access</h1>
                <div className="border border-orange-500/30 bg-orange-500/5 rounded-lg p-12 text-center max-w-2xl mx-auto">
                    <div className="text-5xl mb-6">⚡</div>
                    <h3 className="text-xl font-bold text-white mb-2">Unlock API Access</h3>
                    <p className="text-gray-400 mb-6">
                        API access is restricted to Pro and Developer plans.
                        Upgrade to programmatically verify facts, search your ledger, and integrate Exogram into your agents.
                    </p>
                    <Link href="/pricing" className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition">
                        Upgrade Now
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">API Keys</h1>
                <p className="text-sm text-gray-500">
                    Manage your secret keys for accessing the Exogram API. Treat these as root credentials.
                </p>
            </div>

            <ApiKeys />

            <div className="mt-8 pt-8 border-t border-gray-800">
                <h3 className="text-lg font-semibold mb-4">Documentation</h3>
                <p className="text-gray-400 text-sm mb-4">
                    Read the full API documentation to learn how to integrate Exogram into your applications.
                </p>
                <Link href="/docs" className="text-teal-400 hover:text-teal-300 text-sm font-mono flex items-center gap-2">
                    View API Docs →
                </Link>
            </div>
        </div>
    );
}
