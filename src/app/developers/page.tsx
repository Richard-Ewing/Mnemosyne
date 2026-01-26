'use client';

import { AnimatedSection, Capsule, GlowCard } from "../../components/animations";
import {
    SparklesText,
    Particles,
    BlurIn,
    BorderBeam,
    AnimatedGradientText
} from "../../components/magic-ui";
import Link from "next/link";

export default function DevelopersPage() {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            <Particles count={40} className="fixed inset-0 z-0" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[128px]" />
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Hero */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-32 text-center">
                <BlurIn delay={0}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Build agents that can<br />
                        <SparklesText className="inline-block gradient-text">prove what they know.</SparklesText>
                    </h1>
                </BlurIn>

                <BlurIn delay={0.2}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
                        Models hallucinate because they reason without state.
                        <br />
                        Exogram provides state.
                    </p>
                </BlurIn>

                {/* SHARPENING LINE B & PILLAR 4 */}
                <BlurIn delay={0.4}>
                    <Capsule className="mb-8 mx-auto max-w-4xl text-lg text-gray-300 italic border-l-2 border-violet-500 pl-6 py-2 bg-transparent text-left">
                        "Language models predict the next word. Exogram determines what that word is allowed to mean."
                    </Capsule>
                </BlurIn>
            </section>

            {/* Why Models Hallucinate */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 py-16">
                <AnimatedSection>
                    <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 text-center">
                        <p>
                            Language models predict words.
                            <br />
                            They do not track facts.
                        </p>

                        <p className="text-xl text-white font-semibold">
                            That's why agents lie.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            {/* MENTOR FEEDBACK: Failure Mode Example */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 py-16">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">Before & After</h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <GlowCard className="border-red-500/20 bg-red-900/5">
                            <h3 className="text-xl font-bold mb-4 text-red-400">Without Exogram</h3>
                            <p className="text-gray-300">
                                The agent answers confidently — and incorrectly.
                            </p>
                            <div className="mt-4 text-sm bg-black/40 p-4 rounded-lg overflow-x-auto font-mono border border-red-500/10">
                                <span className="text-gray-400">User:</span> "What's my writing preference?"<br />
                                <span className="text-gray-400">Agent:</span> <span className="text-red-300">"You prefer Oxford commas."</span><br />
                                <span className="text-gray-500 text-xs">// ❌ Hallucinated - no facts stored</span>
                            </div>
                        </GlowCard>

                        <GlowCard className="border-teal-500/20 bg-teal-900/5">
                            <h3 className="text-xl font-bold mb-4 text-teal-400">With Exogram</h3>
                            <p className="text-gray-300">
                                The agent queries state, finds nothing, and says "unknown".
                            </p>
                            <div className="mt-4 text-sm bg-black/40 p-4 rounded-lg overflow-x-auto font-mono border border-teal-500/10">
                                <span className="text-gray-400">User:</span> "What's my writing preference?"<br />
                                <span className="text-gray-400">Agent:</span> <span className="text-teal-300">"Unknown - no preference stored."</span><br />
                                <span className="text-gray-500 text-xs">// ✅ Honest - queried Exogram</span>
                            </div>
                        </GlowCard>
                    </div>

                    <p className="text-center text-gray-400 mt-8">
                        Developers buy failure prevention, not features.
                    </p>
                </AnimatedSection>
            </section>

            {/* First API Call */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 py-16">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-6">First API Call (5 Minutes)</h2>
                    {/* SHARPENING LINE B */}
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        If the ledger returns nothing, your agent must say "unknown."
                        <br />
                        <span className="text-teal-400 font-semibold">That is a feature, not a failure.</span>
                    </p>
                </AnimatedSection>

                <div className="max-w-4xl mx-auto grid gap-8">
                    <AnimatedSection delay={0.2}>
                        <BorderBeam>
                            <div className="p-8 bg-black/40">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-teal-400 font-mono">Store a Verified Fact</h3>
                                <pre className="text-sm overflow-x-auto font-mono text-gray-300 leading-relaxed">
                                    {`POST https://api.exogram.ai/ledger/propose_state
Authorization: Bearer YOUR_API_KEY

{
  "claim": "User prefers no em-dashes in writing",
  "confidence": 0.95
}

// Response
{
  "status": "committed",
  "vector_stored": true,
  "id": "fact-abc123"
}`}
                                </pre>
                            </div>
                        </BorderBeam>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <BorderBeam colorFrom="#F97316" colorTo="#14B8A6">
                            <div className="p-8 bg-black/40">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-orange-400 font-mono">Query Verified Context</h3>
                                <pre className="text-sm overflow-x-auto font-mono text-gray-300 leading-relaxed">
                                    {`POST https://api.exogram.ai/ledger/semantic_search
Authorization: Bearer YOUR_API_KEY

{
  "query": "writing preferences",
  "top_k": 5
}

// Response
{
  "facts": [
    {
      "claim": "User prefers no em-dashes in writing",
      "confidence": 0.95,
      "timestamp": "2026-01-26T12:00:00Z"
    }
  ]
}`}
                                </pre>
                            </div>
                        </BorderBeam>
                    </AnimatedSection>
                </div>
            </section>

            {/* Pricing for Developers CTA */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 py-16">
                <AnimatedSection>
                    <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-teal-900/20 to-black p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

                        <h3 className="text-3xl font-bold mb-4 text-white">Developer Tier</h3>
                        <div className="text-5xl font-bold mb-8 text-white">$99<span className="text-xl text-gray-400 font-normal">/mo</span></div>

                        <ul className="text-left space-y-3 text-gray-300 mb-10 max-w-sm mx-auto">
                            <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Unlimited API calls</li>
                            <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Unlimited API keys</li>
                            <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Webhooks (event-driven)</li>
                            <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Team ledgers</li>
                            <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> 99.9% SLA</li>
                        </ul>

                        <Link
                            href="/signup"
                            className="inline-block px-12 py-4 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full font-bold text-white hover:opacity-90 transition-opacity"
                        >
                            Start Building
                        </Link>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
