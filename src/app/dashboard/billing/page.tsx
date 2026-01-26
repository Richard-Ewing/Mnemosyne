'use client';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function BillingPage() {
    const { user, sessionToken } = useAuth();

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Billing</h1>

            <div className="border border-gray-800 rounded-lg p-6 space-y-6 bg-gray-900/20">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Current Plan</div>
                        <div className="text-3xl font-bold capitalize text-white flex items-center gap-3">
                            {user?.subscription_tier || 'Free'}
                            <span className={`text-xs px-2 py-1 rounded border border-gray-700 font-mono ${user?.subscription_status === 'active' ? 'text-teal-400 bg-teal-900/20' : 'text-gray-400'}`}>
                                {user?.subscription_status || 'Inactive'}
                            </span>
                        </div>
                    </div>

                    {user?.subscription_tier === 'free' ? (
                        <Link href="/pricing" className="px-4 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition">
                            Upgrade
                        </Link>
                    ) : (
                        <a
                            href={`${process.env.NEXT_PUBLIC_API_URL || 'https://api.exogram.ai'}/subscription/portal?session_token=${sessionToken}`}
                            className="px-4 py-2 border border-gray-600 text-white rounded hover:bg-gray-800 transition"
                        >
                            Manage Subscription
                        </a>
                    )}
                </div>

                <div className="border-t border-gray-800 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <div className="text-gray-500 text-sm mb-1">Next Billing Date</div>
                        <div className="text-white font-mono">{new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleDateString()}</div>
                    </div>
                    <div>
                        <div className="text-gray-500 text-sm mb-1">Payment Method</div>
                        <div className="text-white">•••• 4242</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
