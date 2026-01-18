export default function Home() {
  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">
              VL-JEPA Powered Semantic Infrastructure
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Infrastructure That Prevents AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              From Contradicting Itself
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-white">Meaning Custody</strong> — VL-JEPA
            semantic prediction stores{" "}
            <em className="text-violet-300">meaning</em>, not just text.
            <br className="hidden md:block" />
            Your AI systems never forget what matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#early-access"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-lg font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
            >
              Request Early Access
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-full border border-white/20 text-lg font-medium hover:bg-white/5 transition-all"
            >
              See How It Works
            </a>
          </div>

          {/* Trust Indicator */}
          <p className="mt-12 text-sm text-gray-500">
            Enterprise-grade security • AES-256 encryption • SOC 2 ready
          </p>
        </div>
      </section>

      {/* How VL-JEPA Works Section */}
      <section id="how-it-works" className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              VL-JEPA
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Traditional memory stores text. Mnemosyne stores semantic meaning
            through predictive representation learning.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Approach */}
          <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="absolute top-0 right-0 px-4 py-2 rounded-bl-2xl rounded-tr-2xl bg-red-500/20 text-red-300 text-sm font-medium">
              Traditional
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">
              Vector Databases
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-red-400">✗</span>
                <span className="text-gray-400">
                  Stores raw text embeddings without semantic context
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-red-400">✗</span>
                <span className="text-gray-400">
                  No conflict detection—contradictions accumulate silently
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-red-400">✗</span>
                <span className="text-gray-400">
                  Static snapshots that decay without reinforcement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-red-400">✗</span>
                <span className="text-gray-400">
                  No audit trail for knowledge provenance
                </span>
              </li>
            </ul>
          </div>

          {/* Mnemosyne Approach */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30 shadow-lg shadow-violet-500/10">
            <div className="absolute top-0 right-0 px-4 py-2 rounded-bl-2xl rounded-tr-2xl bg-violet-500/30 text-violet-200 text-sm font-medium">
              Mnemosyne
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              VL-JEPA Semantic Prediction
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">✓</span>
                <span className="text-gray-200">
                  Predictive embeddings capture semantic relationships
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">✓</span>
                <span className="text-gray-200">
                  Active Truth Arbitration detects and resolves conflicts
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">✓</span>
                <span className="text-gray-200">
                  Cognitive entropy models knowledge decay and reinforcement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">✓</span>
                <span className="text-gray-200">
                  Immutable audit logs for complete provenance tracking
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Moat Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8">
            <span className="text-amber-400">⚡</span>
            <span className="text-sm text-amber-300">Technology Moat</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              12–18 Months
            </span>
            <br />
            <span className="text-white">To Replicate</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            VL-JEPA requires deep integration of visual-language joint embedding
            predictive architectures. This isn&apos;t a wrapper—it&apos;s infrastructure.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔐</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Meaning Custody</h3>
            <p className="text-gray-400 text-sm">
              Semantic ownership of your AI&apos;s knowledge. Not just storage—governance.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Truth Arbitration</h3>
            <p className="text-gray-400 text-sm">
              Automatic detection and resolution of conflicting facts. You decide what&apos;s true.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Cognitive Topology</h3>
            <p className="text-gray-400 text-sm">
              Visualize knowledge health, decay patterns, and reinforcement needs.
            </p>
          </div>
        </div>
      </section>

      {/* User Authority Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="relative p-12 rounded-3xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 border border-white/10 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Knowledge.{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Your Authority.
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Mnemosyne puts you in control. Every decision about what your AI
              remembers, forgets, or believes—that&apos;s your call. We just make it
              possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                ✓ Self-hosted option
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                ✓ End-to-end encryption
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                ✓ Data export anytime
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                ✓ GDPR compliant
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section id="early-access" className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join the{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Early Access
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Be among the first to experience semantic memory governance.
            Limited spots available.
          </p>

          {/* Email Form */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 whitespace-nowrap"
            >
              Get Access
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </section>
    </div>
  );
}
