'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    user_id: string;
    email: string;
    full_name?: string;
    subscription_tier: 'free' | 'pro' | 'developer' | 'enterprise';
    subscription_status: string;
    usage: {
        facts_this_month: number;
        facts_limit: string;
        queries_this_month: number;
        queries_limit: string;
        api_calls_this_month: number;
        api_calls_limit: string;
    };
    features: {
        chrome_extension: boolean;
        api_access: boolean;
        team_sharing: boolean;
        webhooks: boolean;
    };
    billing?: {
        amount: number;
        currency: string;
        current_period_end: string;
        cancel_at_period_end: boolean;
    };
}

interface AuthContextType {
    user: User | null;
    sessionToken: string | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    loginWithGoogle: (googleToken: string) => Promise<void>;
    signup: (email: string, password: string, fullName?: string) => Promise<void>;
    logout: () => Promise<void>;
    refreshUser: () => Promise<void>;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.exogram.ai';

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [sessionToken, setSessionToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Initialize auth state from localStorage
    useEffect(() => {
        const token = localStorage.getItem('exogram_session_token');
        if (token) {
            setSessionToken(token);
            fetchCurrentUser(token);
        } else {
            setLoading(false);
        }
    }, []);

    // Fetch current user data
    const fetchCurrentUser = async (token: string) => {
        try {
            const response = await fetch(`${API_URL}/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                // Token is invalid, clear it
                localStorage.removeItem('exogram_session_token');
                setSessionToken(null);
                setUser(null);
            }
        } catch (error) {
            console.error('Failed to fetch user:', error);
            localStorage.removeItem('exogram_session_token');
            setSessionToken(null);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    // Login with email/password
    const login = async (email: string, password: string) => {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Login failed');
        }

        const data = await response.json();
        const token = data.session_token;

        localStorage.setItem('exogram_session_token', token);
        setSessionToken(token);
        await fetchCurrentUser(token);
    };

    // Login with Google
    const loginWithGoogle = async (googleToken: string) => {
        const response = await fetch(`${API_URL}/auth/google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ google_token: googleToken }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Google login failed');
        }

        const data = await response.json();
        const token = data.session_token;

        localStorage.setItem('exogram_session_token', token);
        setSessionToken(token);
        await fetchCurrentUser(token);
    };

    // Signup
    const signup = async (email: string, password: string, fullName?: string) => {
        const response = await fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, full_name: fullName }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Signup failed');
        }

        const data = await response.json();
        const token = data.session_token;

        localStorage.setItem('exogram_session_token', token);
        setSessionToken(token);
        await fetchCurrentUser(token);
    };

    // Logout
    const logout = async () => {
        if (sessionToken) {
            try {
                await fetch(`${API_URL}/auth/logout`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${sessionToken}`,
                    },
                });
            } catch (error) {
                console.error('Logout error:', error);
            }
        }

        localStorage.removeItem('exogram_session_token');
        setSessionToken(null);
        setUser(null);
    };

    // Refresh user data
    const refreshUser = async () => {
        if (sessionToken) {
            await fetchCurrentUser(sessionToken);
        }
    };

    const value: AuthContextType = {
        user,
        sessionToken,
        loading,
        login,
        loginWithGoogle,
        signup,
        logout,
        refreshUser,
        isAuthenticated: !!user && !!sessionToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

// Protected route wrapper
export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, loading } = useAuth();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && !loading && !isAuthenticated) {
            window.location.href = '/login';
        }
    }, [isAuthenticated, loading, mounted]);

    if (!mounted || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}
