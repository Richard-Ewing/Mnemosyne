'use client';

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import {
    SparklesText,
    Particles,
    BlurIn,
    ShineBorder,
    AnimatedGradientText
} from "../components/magic-ui";
import Link from "next/link";

export default function PricingPage() {
    return (
        <div className="relative min-h-screen">
            <Particles count={30} className="fixed inset-0 z-0" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 center-0 w-[800px] h-[300px] bg-white/5 rounded-full blur-[128px]" />
            </div>

            {/* Hero */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-32 text-center">
                <BlurIn delay={0}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Simple, Transparent Pricing
                    </h1>
                </BlurIn>

                {/* MENTOR FEEDBACK: Control over features */}
                <BlurIn delay={0.2}>
                    <div className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed border-l-2 border-white/10 pl-6 inline-block text-left">
                        Free lets you try.
                        <br />
                        Pro lets you rely on it.
                        <br />
                        Developer lets you build on it.
                    </div>
                </BlurIn>
            </section>

            {/* Pricing Tiers */}
            <section className="relative z-10 section max-w-8xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

                    {/* FREE TIER */}
                    <AnimatedSection delay={0.1}>
                        <div className="border border-white/10 rounded-3xl p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full hover:border-white/20 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-white">Free</h3>
                            <div className="text-4xl font-bold mb-6 text-white">$0<span className="text-lg text-gray-400 font-normal">/mo</span></div>

                            <ul className="space-y-3 text-gray-400 mb-8 text-sm flex-1">
                                <li className="flex items-center gap-2">✓ 100 facts/month</li>
                                <li className="flex items-center gap-2"><span className="text-orange-400">✓ 250 queries/month</span></li>
                                <li className="flex items-center gap-2">✓ Web dashboard</li>
                                <li className="text-gray-600 flex items-center gap-2">✗ No Chrome extension</li>
                                <li className="text-gray-600 flex items-center gap-2">✗ No API access</li>
                            </ul>

                            <Link href="/signup" className="btn-secondary w-full text-center">Start Free</Link>
                            <p className="text-xs text-gray-500 mt-4 text-center">No credit card required</p>
                        </div>
                    </AnimatedSection>

                    {/* PRO TIER */}
                    <AnimatedSection delay={0.2} className="lg:-mt-4">
                        <ShineBorder duration={3} className="h-full rounded-3xl bg-black !border-orange-500/50" borderRadius="24px">
                            <div className="p-6 h-full flex flex-col relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-teal-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wide shadow-lg shadow-orange-500/20">
                                    Most Popular
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-white mt-2">Pro</h3>
                                <div className="text-4xl font-bold mb-6 text-white">$29<span className="text-lg text-gray-400 font-normal">/mo</span></div>

                                <ul className="space-y-3 text-gray-300 mb-8 text-sm flex-1">
                                    <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Unlimited facts</li>
                                    <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Unlimited queries</li>
                                    <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Chrome Extension</li>
                                    <li className="flex items-center gap-2">✓ 3 API keys</li>
                                    <li className="flex items-center gap-2">✓ 10K API calls/month</li>
                                    <li className="flex items-center gap-2">✓ Team sharing (3 members)</li>
                                </ul>

                                <Link
                                    href="/signup"
                                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-orange-500 to-teal-500 hover:opacity-90 rounded-xl font-semibold transition text-white shadow-lg shadow-orange-500/20"
                                >
                                    Start Trial
                                </Link>
                                <p className="text-xs text-gray-500 mt-4 text-center">14-day free trial</p>
                            </div>
                        </ShineBorder>
                    </AnimatedSection>

                    {/* DEVELOPER TIER */}
                    <AnimatedSection delay={0.3}>
                        <div className="border border-teal-500/30 rounded-3xl p-6 bg-teal-900/5 backdrop-blur-sm flex flex-col h-full hover:border-teal-500/50 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-white">Developer</h3>
                            <div className="text-4xl font-bold mb-6 text-white">$99<span className="text-lg text-gray-400 font-normal">/mo</span></div>

                            <ul className="space-y-3 text-gray-400 mb-8 text-sm flex-1">
                                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Everything in Pro</li>
                                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Unlimited API calls</li>
                                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Unlimited API keys</li>
                                <li className="flex items-center gap-2">✓ Webhooks</li>
                                <li className="flex items-center gap-2">✓ Team ledgers</li>
                                <li className="flex items-center gap-2">✓ 99.9% SLA</li>
                            </ul>

                            <Link
                                href="/signup"
                                className="block w-full text-center px-4 py-3 bg-teal-600 hover:bg-teal-700 rounded-xl font-semibold transition text-white"
                            >
                                Subscribe
                            </Link>
                        </div>
                    </AnimatedSection>

                    {/* ENTERPRISE TIER */}
                    <AnimatedSection delay={0.4}>
                        <div className="border border-white/10 rounded-3xl p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full hover:border-white/20 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-white">Enterprise</h3>
                            <div className="text-4xl font-bold mb-6 text-white">Custom</div>

                            <ul className="space-y-3 text-gray-400 mb-8 text-sm flex-1">
                                <li className="flex items-center gap-2">✓ Everything in Developer</li>
                                <li className="flex items-center gap-2">✓ On-premise deployment</li>
                                <li className="flex items-center gap-2">✓ SSO/SAML</li>
                                <li className="flex items-center gap-2">✓ Custom integrations</li>
                                <li className="flex items-center gap-2">✓ Account manager</li>
                            </ul>

                            <a
                                href="mailto:sales@exogram.ai"
                                className="btn-secondary w-full text-center"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </AnimatedSection>

                </div>
            </section>

            {/* FAQ */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 py-16">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">FAQ</h2>
                </AnimatedSection>

                <div className="max-w-3xl mx-auto space-y-8">
                    <AnimatedSection delay={0.1}>
                        <GlowCard className="bg-black/40">
                            <h3 className="text-xl font-bold mb-3 text-white">How is this different from vector databases?</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Vector databases store embeddings. Exogram stores verified facts with provenance.
                                Pinecone doesn't track who wrote a fact, when it was verified, or how confidence changed.
                            </p>
                            <p className="text-teal-400 mt-2 font-semibold">Exogram is a trust layer, not a search layer.</p>
                        </GlowCard>
                    </AnimatedSection>

                    {/* ... other FAQs could follow pattern ... */}
                </div>
            </section>
        </div>
    );
}
