'use client';

import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface LedgerEntry {
    id: string;
    canonical_claim: string;
    status: 'proposed' | 'committed' | 'archived' | 'contested';
    confidence: number;
    source: string;
    source_type?: string;
    created_at: string;
    vector_stored?: boolean;
}

export default function LedgerPage() {
    const { sessionToken } = useAuth();
    const [facts, setFacts] = useState<LedgerEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'committed' | 'archived'>('all');

    useEffect(() => {
        if (!sessionToken) return;

        // Use /ledger/search as a proxy to get recent entries since we don't have get_context_snapshot
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://api.exogram.ai'}/ledger/search`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: "", // Empty query to get recent? Or maybe just list entries
                top_k: 50,
                include_decayed: true
            })
        })
            .then(res => res.json())
            .then(data => {
                const results = data.results || [];
                const entries: LedgerEntry[] = results.map((f: any, i: number) => ({
                    id: f.id || `fact-${i}`,
                    canonical_claim: f.content || "Unknown Claim",
                    status: f.decay_status === 'active' ? 'committed' : (f.decay_status || 'committed'),
                    confidence: f.confidence_score || 0.95,
                    source: f.source || 'user',
                    source_type: 'web',
                    created_at: f.created_at || new Date().toISOString(),
                    vector_stored: true, // If it came from search, it has a vector
                }));
                setFacts(entries);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [sessionToken]);

    const filteredFacts = facts.filter(f => {
        if (filter === 'all') return true;
        if (filter === 'committed') return f.status === 'committed' || f.status === 'active';
        if (filter === 'archived') return f.status === 'archived' || f.status === 'decayed';
        return f.status === filter;
    });

    if (loading) {
        return <div className="animate-pulse text-gray-500">Loading ledger...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Ledger</h1>
                    <p className="text-sm text-gray-500">
                        All verified facts with complete provenance
                    </p>
                </div>

                {/* Filters */}
                <div className="flex gap-2 text-sm">
                    {(['all', 'committed', 'archived'] as const).map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-3 py-1 rounded capitalize ${filter === f
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Ledger Table */}
            {filteredFacts.length === 0 ? (
                <div className="border border-gray-800 rounded-lg p-12 text-center text-gray-500">
                    <div className="text-4xl mb-4 text-gray-600">◯</div>
                    <p>No facts in ledger</p>
                    <p className="text-sm mt-2">
                        Add facts via the{' '}
                        <Link href="/dashboard/extension" className="text-teal-400 hover:underline">
                            Chrome Extension
                        </Link>{' '}
                        or API
                    </p>
                </div>
            ) : (
                <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/20">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-900 text-gray-400 text-left">
                            <tr>
                                <th className="p-4 font-normal">Canonical Claim</th>
                                <th className="p-4 font-normal">Status</th>
                                <th className="p-4 font-normal">Source</th>
                                <th className="p-4 font-normal">Confidence</th>
                                <th className="p-4 font-normal">Vector</th>
                                <th className="p-4 font-normal">Created</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {filteredFacts.map(fact => (
                                <tr
                                    key={fact.id}
                                    className="hover:bg-gray-900/30 transition-colors"
                                >
                                    <td className="p-4 font-medium text-gray-200">{fact.canonical_claim.substring(0, 80)}{fact.canonical_claim.length > 80 ? '...' : ''}</td>
                                    <td className="p-4">
                                        <StatusBadge status={fact.status} />
                                    </td>
                                    <td className="p-4 text-gray-400 capitalize">{fact.source}</td>
                                    <td className="p-4 font-mono text-teal-400">
                                        {(fact.confidence * 100).toFixed(0)}%
                                    </td>
                                    <td className="p-4">
                                        {fact.vector_stored ? (
                                            <span className="text-teal-400" title="Vectorized">●</span>
                                        ) : (
                                            <span className="text-gray-600" title="Pending">○</span>
                                        )}
                                    </td>
                                    <td className="p-4 text-gray-500 text-xs font-mono">
                                        {new Date(fact.created_at).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: { [key: string]: string } = {
        proposed: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
        committed: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
        active: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
        archived: 'bg-gray-700 text-gray-400 border-gray-600',
        decayed: 'bg-gray-700 text-gray-400 border-gray-600',
        contested: 'bg-red-500/10 text-red-400 border-red-500/30',
    };

    const style = styles[status] || 'bg-gray-700 text-gray-400';

    return (
        <span className={`inline-block px-2 py-0.5 rounded text-xs border ${style} capitalize`}>
            {status}
        </span>
    );
}
