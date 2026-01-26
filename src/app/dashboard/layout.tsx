'use client';

import { useAuth, ProtectedRoute } from '@/context/AuthContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <ProtectedRoute>
            <DashboardContent>{children}</DashboardContent>
        </ProtectedRoute>
    );
}

function DashboardContent({ children }: { children: ReactNode }) {
    const { user, logout } = useAuth();
    const pathname = usePathname();

    const nav = [
        { href: '/dashboard', label: 'Overview', icon: '◉' },
        { href: '/dashboard/ledger', label: 'Ledger', icon: '◫' },
        { href: '/dashboard/audit', label: 'Audit', icon: '◈' },
        { href: '/dashboard/api', label: 'API', icon: '◬', pro: true },
        { href: '/dashboard/extension', label: 'Extension', icon: '◭', pro: true },
        { href: '/dashboard/billing', label: 'Billing', icon: '◮' },
        { href: '/dashboard/settings', label: 'Settings', icon: '◯' },
    ];

    const tierBadge = {
        free: 'bg-gray-700 text-gray-300',
        pro: 'bg-gradient-to-r from-orange-500 to-teal-500 text-white',
        developer: 'bg-teal-600 text-white',
        enterprise: 'bg-purple-600 text-white',
    }[user?.subscription_tier || 'free'];

    return (
        <div className="min-h-screen bg-black text-white flex font-mono">
            {/* Sidebar */}
            <aside className="w-64 border-r border-gray-800 flex flex-col fixed h-full bg-black z-10">
                {/* Logo */}
                <div className="p-6 border-b border-gray-800">
                    <Link href="/" className="block">
                        <h1 className="text-xl font-bold tracking-tight">
                            <span className="text-orange-500">EXO</span>
                            <span className="text-teal-500">GRAM</span>
                        </h1>
                        <p className="text-xs text-gray-500 mt-1">VERIFICATION LAYER</p>
                    </Link>
                </div>

                {/* User Info */}
                <div className="p-4 border-b border-gray-800 text-xs space-y-2">
                    <div className="text-gray-400 truncate">{user?.email}</div>
                    <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${tierBadge}`}>
                        {user?.subscription_tier?.toUpperCase()}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1">
                    {nav.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
                        const isLocked = item.pro && user?.subscription_tier === 'free';

                        return (
                            <Link
                                key={item.href}
                                href={isLocked ? '/pricing' : item.href}
                                className={`
                  block px-3 py-2 rounded text-sm transition-all flex items-center
                  ${isActive
                                        ? 'bg-gray-900 text-white border border-gray-700'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                                    }
                  ${isLocked ? 'opacity-50' : ''}
                `}
                            >
                                <span className="mr-2">{item.icon}</span>
                                {item.label}
                                {isLocked && <span className="ml-2 text-orange-500 text-xs">PRO</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-gray-800">
                    <button
                        onClick={logout}
                        className="w-full px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-900/50 rounded transition-colors text-left"
                    >
                        ← Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto ml-64">
                <div className="max-w-7xl mx-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
