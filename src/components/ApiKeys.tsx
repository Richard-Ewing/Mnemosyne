'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

interface ApiKey {
    id: string;
    name: string;
    key: string;
    created_at: string;
    calls_this_month: number;
    tier_limit: number;
}

export default function ApiKeys() {
    const { sessionToken } = useAuth();
    const [keys, setKeys] = useState<ApiKey[]>([]);
    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState(false);
    const [newKeyName, setNewKeyName] = useState('');
    const [error, setError] = useState('');

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.exogram.ai';

    useEffect(() => {
        if (sessionToken) {
            fetchKeys();
        }
    }, [sessionToken]);

    const fetchKeys = async () => {
        try {
            const response = await fetch(`${API_URL}/api-keys`, {
                headers: {
                    'Authorization': `Bearer ${sessionToken}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setKeys(data);
            }
        } catch (err) {
            console.error('Failed to fetch keys', err);
        } finally {
            setLoading(false);
        }
    };

    const createKey = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newKeyName.trim()) return;

        setCreating(true);
        setError('');

        try {
            const response = await fetch(`${API_URL}/api-keys`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${sessionToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newKeyName }),
            });

            if (!response.ok) {
                throw new Error('Failed to create key');
            }

            const newKey = await response.json();
            setKeys([...keys, newKey]);
            setNewKeyName('');
        } catch (err: any) {
            setError(err.message || 'Failed to create key');
        } finally {
            setCreating(false);
        }
    };

    const revokeKey = async (id: string) => {
        if (!confirm('Are you sure you want to revoke this API key? This action cannot be undone.')) return;

        try {
            const response = await fetch(`${API_URL}/api-keys/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${sessionToken}`,
                },
            });

            if (response.ok) {
                setKeys(keys.filter((k) => k.id !== id));
            } else {
                alert('Failed to revoke key');
            }
        } catch (err) {
            console.error('Error revoking key', err);
        }
    };

    if (loading) return <div className="text-gray-400">Loading API keys...</div>;

    return (
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">API Keys</h3>

            {/* Create Key Form */}
            <form onSubmit={createKey} className="flex gap-4 mb-8">
                <input
                    type="text"
                    value={newKeyName}
                    onChange={(e) => setNewKeyName(e.target.value)}
                    placeholder="New key name (e.g. My App)"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                    type="submit"
                    disabled={creating || !newKeyName.trim()}
                    className="px-6 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                    {creating ? 'Creating...' : 'Create Key'}
                </button>
            </form>

            {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}

            {/* Keys List */}
            <div className="space-y-4">
                {keys.length === 0 ? (
                    <p className="text-gray-500 text-sm">No API keys created yet.</p>
                ) : (
                    keys.map((key) => (
                        <div key={key.id} className="bg-black/40 border border-gray-800 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1 overflow-hidden">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="font-semibold text-gray-200">{key.name}</span>
                                    <span className="text-xs text-gray-500 px-2 py-0.5 bg-gray-800 rounded-full">
                                        {new Date(key.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="text-sm font-mono text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded border border-gray-800 break-all select-all">
                                    {key.key}
                                </div>
                                <div className="text-xs text-gray-500 mt-2">
                                    Usage: {key.calls_this_month} / {key.tier_limit == 0 ? 'Unlimited' : key.tier_limit} calls
                                </div>
                            </div>

                            <button
                                onClick={() => revokeKey(key.id)}
                                className="text-red-400 hover:text-red-300 text-sm font-medium px-3 py-1.5 hover:bg-red-900/20 rounded transition-colors self-start md:self-center"
                            >
                                Revoke
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
