'use client';
// @ts-nocheck

import { useState, useEffect } from 'react';
import {
    Key, Copy, Eye, EyeOff, Trash2, Plus,
    Code, Terminal, Book, Zap, Shield, Clock,
    CheckCircle, XCircle, AlertCircle, ChevronDown, ChevronRight, LogIn
} from 'lucide-react';

interface ApiKey {
    id: string;
    name: string;
    key: string;
    created_at: string;
}

export default function APIDocsPage() {
    const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
    const [manualToken, setManualToken] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Testing State
    const [selectedEndpoint, setSelectedEndpoint] = useState('health');
    const [testResponse, setTestResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [copiedKey, setCopiedKey] = useState('');

    // Accordion State
    const [expandedSections, setExpandedSections] = useState({
        'get-started': true,
        'authentication': false,
        'endpoints': true,
        'examples': false
    });

    // Load API keys on mount
    useEffect(() => {
        loadAuth();
    }, []);

    const loadAuth = () => {
        if (typeof window === 'undefined') return;
        const token = localStorage.getItem('user_token');

        if (token) {
            setIsAuthenticated(true);
            // Create a pseudo-object for display
            setApiKeys([{
                id: 'static-key',
                name: 'Beta Access Token',
                key: token,
                created_at: new Date().toISOString()
            }]);
        }
    };

    const saveManualToken = () => {
        if (!manualToken.trim()) {
            alert('Please enter a valid token');
            return;
        }

        localStorage.setItem('user_token', manualToken.trim());
        setManualToken('');
        loadAuth();
        alert('Token saved successfully! You can now use the API.');
    };

    const clearAuth = () => {
        if (confirm('Clear stored access token?')) {
            localStorage.removeItem('user_token');
            setIsAuthenticated(false);
            setApiKeys([]);
        }
    };

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopiedKey(label);
        setTimeout(() => setCopiedKey(''), 2000);
    };

    const testEndpoint = async (endpoint: string) => {
        setLoading(true);
        setTestResponse(null);

        // @ts-ignore
        const testKey = apiKeys?.[0]?.key || 'YOUR_API_KEY';

        try {
            let response;
            switch (endpoint) {
                case 'health':
                    response = await fetch('https://api.exogram.ai/health');
                    break;
                case 'snapshot':
                    response = await fetch('https://api.exogram.ai/ledger/get_context_snapshot', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${testKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ filters: { status: ['committed'] } })
                    });
                    break;
                case 'query':
                    response = await fetch('https://api.exogram.ai/ledger/query_state', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${testKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ query_intent: 'Test query' })
                    });
                    break;
                case 'propose':
                    response = await fetch('https://api.exogram.ai/ledger/propose_state', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${testKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            claim: 'Test claim from API docs',
                            source_context: 'api_test',
                            confidence: 0.9
                        })
                    });
                    break;
            }

            const data = await response.json();
            setTestResponse({
                status: response.status,
                data: data
            });
        } catch (error: any) {
            setTestResponse({
                status: 'error',
                data: { error: error.message }
            });
        }
        setLoading(false);
    };

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const endpoints = [
        {
            id: 'health',
            method: 'GET',
            path: '/health',
            description: 'Check API status and version',
            requiresAuth: false,
            category: 'System'
        },
        {
            id: 'snapshot',
            method: 'POST',
            path: '/ledger/get_context_snapshot',
            description: 'Get deterministic world-state snapshot',
            requiresAuth: true,
            category: 'Ledger'
        },
        {
            id: 'query',
            method: 'POST',
            path: '/ledger/query_state',
            description: 'Verify if a claim exists',
            requiresAuth: true,
            category: 'Ledger'
        },
        {
            id: 'propose',
            method: 'POST',
            path: '/ledger/propose_state',
            description: 'Add new verified fact',
            requiresAuth: true,
            category: 'Ledger'
        },
        {
            id: 'archive',
            method: 'POST',
            path: '/ledger/archive_entry',
            description: 'Archive a ledger entry',
            requiresAuth: true,
            category: 'Ledger'
        },
        {
            id: 'audit',
            method: 'GET',
            path: '/ledger/audit_log',
            description: 'Get complete audit trail',
            requiresAuth: true,
            category: 'Audit'
        }
    ];

    const codeExamples = {
        python: `import requests

API_KEY = "your_api_key"
BASE_URL = "https://api.exogram.ai"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Get context snapshot
snapshot = requests.post(
    f"{BASE_URL}/ledger/get_context_snapshot",
    headers=headers,
    json={"filters": {"status": ["committed"]}}
).json()

print(f"Facts: {len(snapshot['entries'])}")`,

        javascript: `const API_KEY = "your_api_key";
const BASE_URL = "https://api.exogram.ai";

const headers = {
  "Authorization": \`Bearer \${API_KEY}\`,
  "Content-Type": "application/json"
};

// Get context snapshot
const snapshot = await fetch(
  \`\${BASE_URL}/ledger/get_context_snapshot\`,
  {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      filters: { status: ["committed"] }
    })
  }
).then(r => r.json());

console.log(\`Facts: \${snapshot.entries.length}\`);`,

        curl: `# Get context snapshot
curl -X POST https://api.exogram.ai/ledger/get_context_snapshot \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"filters":{"status":["committed"]}}'`
    };

    const [selectedLang, setSelectedLang] = useState('python');

    return (
        <div className="min-h-screen bg-[#0a0a0b]">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 via-transparent to-[#4ECDC4]/5" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4ECDC4]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
            </div>

            {/* Header */}
            <div className="relative border-b border-white/10 backdrop-blur-xl bg-black/40">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#4ECDC4] bg-clip-text text-transparent mb-2">
                                Exogram API
                            </h1>
                            <p className="text-white/60 text-lg font-light">
                                Verification Infrastructure for AI
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="px-4 py-2 bg-[#FF6B35]/20 border border-[#FF6B35]/30 rounded-lg text-white/90 text-sm font-mono">
                                api.exogram.ai
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-green-400 text-sm font-mono">Operational</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Quick Start */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#FF6B35]/30 transition-all duration-300">
                        <button
                            onClick={() => toggleSection('get-started')}
                            className="w-full flex items-center justify-between mb-6"
                        >
                            <div className="flex items-center gap-3">
                                <Zap className="w-6 h-6 text-[#FF6B35]" />
                                <h2 className="text-2xl font-bold text-white">Quick Start</h2>
                            </div>
                            {expandedSections['get-started'] ? (
                                <ChevronDown className="w-5 h-5 text-white/40" />
                            ) : (
                                <ChevronRight className="w-5 h-5 text-white/40" />
                            )}
                        </button>

                        {expandedSections['get-started'] && (
                            <div className="space-y-4 animate-in slide-in-from-top duration-300">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-[#FF6B35] font-bold">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Get Your API Key</h3>
                                        <p className="text-white/60 text-sm">Use your provided Beta Access Token.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-[#FF6B35] font-bold">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Make Your First Call</h3>
                                        <div className="mt-2 bg-black/40 border border-white/10 rounded-lg p-4 font-mono text-sm text-white/90 overflow-x-auto">
                                            <code>curl https://api.exogram.ai/health</code>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-[#FF6B35] font-bold">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Start Building</h3>
                                        <p className="text-white/60 text-sm">Explore endpoints and integrate with your AI</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Authentication */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#4ECDC4]/30 transition-all duration-300">
                        <button
                            onClick={() => toggleSection('authentication')}
                            className="w-full flex items-center justify-between mb-6"
                        >
                            <div className="flex items-center gap-3">
                                <Shield className="w-6 h-6 text-[#4ECDC4]" />
                                <h2 className="text-2xl font-bold text-white">Authentication</h2>
                            </div>
                            {expandedSections['authentication'] ? (
                                <ChevronDown className="w-5 h-5 text-white/40" />
                            ) : (
                                <ChevronRight className="w-5 h-5 text-white/40" />
                            )}
                        </button>

                        {expandedSections['authentication'] && (
                            <div className="space-y-4 animate-in slide-in-from-top duration-300">
                                <p className="text-white/80">All API requests require a Bearer token in the Authorization header:</p>
                                <div className="bg-black/40 border border-white/10 rounded-lg p-4 font-mono text-sm text-white/90 overflow-x-auto">
                                    <code className="text-[#4ECDC4]">Authorization: Bearer YOUR_API_KEY</code>
                                </div>
                                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                                    <p className="text-yellow-400 text-sm flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Keep your API keys secure! Never expose them in client-side code or public repositories.</span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Endpoints */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#F7931E]/30 transition-all duration-300">
                        <button
                            onClick={() => toggleSection('endpoints')}
                            className="w-full flex items-center justify-between mb-6"
                        >
                            <div className="flex items-center gap-3">
                                <Terminal className="w-6 h-6 text-[#F7931E]" />
                                <h2 className="text-2xl font-bold text-white">API Endpoints</h2>
                            </div>
                            {expandedSections['endpoints'] ? (
                                <ChevronDown className="w-5 h-5 text-white/40" />
                            ) : (
                                <ChevronRight className="w-5 h-5 text-white/40" />
                            )}
                        </button>

                        {expandedSections['endpoints'] && (
                            <div className="space-y-3 animate-in slide-in-from-top duration-300">
                                {endpoints.map(endpoint => (
                                    <div
                                        key={endpoint.id}
                                        onClick={() => setSelectedEndpoint(endpoint.id)}
                                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${selectedEndpoint === endpoint.id
                                            ? 'bg-[#FF6B35]/10 border-[#FF6B35]/50'
                                            : 'bg-black/20 border-white/10 hover:border-white/30'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className={`px-2 py-1 text-xs font-mono rounded ${endpoint.method === 'GET'
                                                    ? 'bg-blue-500/20 text-blue-400'
                                                    : 'bg-green-500/20 text-green-400'
                                                    }`}>
                                                    {endpoint.method}
                                                </span>
                                                <code className="text-white font-mono text-sm">{endpoint.path}</code>
                                            </div>
                                            {endpoint.requiresAuth && (
                                                <Key className="w-4 h-4 text-white/40" />
                                            )}
                                        </div>
                                        <p className="text-white/60 text-sm">{endpoint.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Code Examples */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#4ECDC4]/30 transition-all duration-300">
                        <button
                            onClick={() => toggleSection('examples')}
                            className="w-full flex items-center justify-between mb-6"
                        >
                            <div className="flex items-center gap-3">
                                <Code className="w-6 h-6 text-[#4ECDC4]" />
                                <h2 className="text-2xl font-bold text-white">Code Examples</h2>
                            </div>
                            {expandedSections['examples'] ? (
                                <ChevronDown className="w-5 h-5 text-white/40" />
                            ) : (
                                <ChevronRight className="w-5 h-5 text-white/40" />
                            )}
                        </button>

                        {expandedSections['examples'] && (
                            <div className="space-y-4 animate-in slide-in-from-top duration-300">
                                <div className="flex gap-2">
                                    {Object.keys(codeExamples).map(lang => (
                                        <button
                                            key={lang}
                                            onClick={() => setSelectedLang(lang)}
                                            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${selectedLang === lang
                                                ? 'bg-[#4ECDC4] text-black font-bold'
                                                : 'bg-white/10 text-white/60 hover:bg-white/20'
                                                }`}
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative">
                                    <pre className="bg-black/60 border border-white/10 rounded-lg p-6 overflow-x-auto">
                                        <code className="text-white/90 text-sm font-mono whitespace-pre">
                                            {codeExamples[selectedLang]}
                                        </code>
                                    </pre>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples[selectedLang], selectedLang)}
                                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                                    >
                                        {copiedKey === selectedLang ? (
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-white/60" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* API Key Management */}
                    <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#4ECDC4]/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sticky top-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Key className="w-6 h-6 text-[#FF6B35]" />
                            <h3 className="text-xl font-bold text-white">Authentication</h3>
                        </div>

                        {!isAuthenticated ? (
                            <div className="space-y-3 mb-6">
                                <p className="text-white/60 text-sm mb-2">
                                    Enter your Beta Access Token to use the API and Extension.
                                </p>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Enter Access Token"
                                        value={manualToken}
                                        onChange={(e) => setManualToken(e.target.value)}
                                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35]/50 transition-all font-mono"
                                    />
                                </div>
                                <button
                                    onClick={saveManualToken}
                                    className="w-full px-4 py-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FF6B35]/50 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <LogIn className="w-4 h-4" />
                                    Save Access Token
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider">Active Credentials</h4>
                                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                        <span className="text-green-400 font-semibold text-sm">Authenticated</span>
                                    </div>
                                    <p className="text-white/60 text-xs">
                                        Your access token is saved and ready for use.
                                    </p>
                                </div>

                                {apiKeys.map(key => (
                                    <div
                                        key={key.id}
                                        className="p-3 bg-black/40 border border-white/10 rounded-lg group"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-white font-medium text-sm">{key.name}</span>
                                            <button
                                                onClick={clearAuth}
                                                className="p-1 hover:bg-red-500/20 rounded transition-all opacity-0 group-hover:opacity-100"
                                            >
                                                <Trash2 className="w-4 h-4 text-red-400" />
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <code className="text-white/60 text-xs font-mono">
                                                {key.key.substring(0, 8)}...
                                            </code>
                                            <button
                                                onClick={() => copyToClipboard(key.key, 'display')}
                                                className="ml-auto"
                                            >
                                                {copiedKey === 'display' ? (
                                                    <CheckCircle className="w-3 h-3 text-green-400" />
                                                ) : (
                                                    <Copy className="w-3 h-3 text-white/40 hover:text-white" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    onClick={clearAuth}
                                    className="w-full text-xs text-white/40 hover:text-white/60 mt-2 hover:underline"
                                >
                                    Log out / Clear Token
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Interactive Tester */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-5 h-5 text-[#4ECDC4]" />
                            <h3 className="text-lg font-bold text-white">Test Endpoint</h3>
                        </div>

                        <button
                            onClick={() => testEndpoint(selectedEndpoint)}
                            disabled={loading || !isAuthenticated}
                            className="w-full px-4 py-3 bg-[#4ECDC4] text-black font-semibold rounded-lg hover:bg-[#4ECDC4]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-4"
                        >
                            {loading ? 'Testing...' : !isAuthenticated ? 'Authentication Required' : `Test ${selectedEndpoint}`}
                        </button>

                        {testResponse && (
                            <div className="animate-in slide-in-from-bottom duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    {testResponse.status === 200 || testResponse.status === 'success' ? (
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                    ) : (
                                        <XCircle className="w-4 h-4 text-red-400" />
                                    )}
                                    <span className="text-white/80 text-sm font-mono">
                                        Status: {testResponse.status}
                                    </span>
                                </div>
                                <pre className="p-4 bg-black/60 border border-white/10 rounded-lg overflow-x-auto text-xs text-white/80 font-mono">
                                    {JSON.stringify(testResponse.data, null, 2)}
                                </pre>
                            </div>
                        )}
                    </div>

                    {/* Rate Limits */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="w-5 h-5 text-[#F7931E]" />
                            <h3 className="text-lg font-bold text-white">Rate Limits</h3>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center text-white/80">
                                <span>Read operations</span>
                                <span className="font-mono text-[#4ECDC4]">1000/hour</span>
                            </div>
                            <div className="flex justify-between items-center text-white/80">
                                <span>Write operations</span>
                                <span className="font-mono text-[#4ECDC4]">500/hour</span>
                            </div>
                            <div className="flex justify-between items-center text-white/80">
                                <span>Audit log</span>
                                <span className="font-mono text-[#4ECDC4]">100/hour</span>
                            </div>
                        </div>
                        <p className="mt-4 text-xs text-white/40">
                            Need higher limits? Contact us about Enterprise plans.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="relative border-t border-white/10 backdrop-blur-xl bg-black/40 mt-20">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex items-center justify-between text-white/60 text-sm">
                        <p>Built with trust. Powered by verification.</p>
                        <div className="flex items-center gap-6">
                            <a href="/docs" className="hover:text-white transition-colors">Documentation</a>
                            <a href="mailto:api@exogram.ai" className="hover:text-white transition-colors">Support</a>
                            <a href="/status" className="hover:text-white transition-colors">Status</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
