'use client';
import { useAuth } from '@/context/AuthContext';

export default function SettingsPage() {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
                <p className="text-gray-500">Manage your account preferences and security.</p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 space-y-8 bg-gray-900/20">
                <div className="max-w-md space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                        <input
                            type="email"
                            value={user?.email || ''}
                            disabled
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded text-gray-300 font-mono cursor-not-allowed"
                        />
                        <p className="text-xs text-gray-600 mt-1">Email cannot be changed securely at this time.</p>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                        <input
                            type="text"
                            value={user?.full_name || ''}
                            disabled
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded text-gray-300 cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                    <h3 className="text-white font-bold mb-4">Danger Zone</h3>
                    <button className="px-4 py-2 border border-red-900 text-red-500 bg-red-900/10 rounded hover:bg-red-900/20 transition text-sm">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
}
