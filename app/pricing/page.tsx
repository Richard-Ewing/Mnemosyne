"use client";

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import {
    ShineBorder,
    BlurIn,
    AnimatedGradientText,
    SparklesText,
    NumberTicker,
    Particles,
    PulsatingButton
} from "../components/magic-ui";
import Link from "next/link";

export default function Pricing() {
    return (
        <div className="relative">
            {/* Subtle particles */}
            <Particles count={20} className="fixed inset-0 z-0" />

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Hero */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-24 md:pt-32">
                <BlurIn className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Simple, <SparklesText className="gradient-text">Transparent</SparklesText> Pricing
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Choose the plan that fits your needs. Scale as you grow.
                    </p>
                </BlurIn>
            </section>

            {/* Pricing Tiers */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Individuals */}
                    <AnimatedSection delay={0.1} animation="fade-left">
                        <GlowCard className="h-full">
                            <Capsule className="text-sm text-gray-300 mb-4">Individuals</Capsule>
                            <h3 className="text-2xl font-bold text-gray-100 mb-6">Personal</h3>

                            <div className="mb-6">
                                <div className="text-sm text-gray-400 mb-2">Free tier available</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold gradient-text">
                                        $<NumberTicker value={29} />
                                    </span>
                                    <span className="text-gray-400">/month</span>
                                </div>
                                <div className="text-sm text-gray-400 mt-1">for Pro</div>
                            </div>

                            <ul className="space-y-3 mb-8 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Personal semantic ledger
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Cross-model context
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Contradiction detection
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Full data export
                                </li>
                            </ul>

                            <Link href="/for-individuals" className="btn-secondary w-full text-center block">
                                Learn More
                            </Link>
                        </GlowCard>
                    </AnimatedSection>

                    {/* Developers - Most Popular with ShineBorder */}
                    <AnimatedSection delay={0.2}>
                        <div className="relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                                <Capsule className="bg-violet-500/20 border-violet-500/50 text-violet-300 text-sm">
                                    ⭐ Most Popular
                                </Capsule>
                            </div>
                            {/* ShineBorder on featured tier - demands attention */}
                            <ShineBorder borderRadius="1.5rem" duration={4}>
                                <div className="p-6 md:p-8 h-full">
                                    <Capsule className="text-sm text-gray-300 mb-4">Developers</Capsule>
                                    <h3 className="text-2xl font-bold text-gray-100 mb-6">API Access</h3>

                                    <div className="mb-6">
                                        <div className="text-sm text-gray-400 mb-2">Usage-based pricing</div>
                                        <div className="text-4xl font-bold">
                                            <AnimatedGradientText>Pay per use</AnimatedGradientText>
                                        </div>
                                        <div className="text-sm text-gray-400 mt-1">charged per operation</div>
                                    </div>

                                    <ul className="space-y-3 mb-8 text-gray-300">
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span> Full API access
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span> Programmatic ledger control
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span> Conflict detection API
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span> Webhook integrations
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span> Developer support
                                        </li>
                                    </ul>

                                    <PulsatingButton className="w-full">
                                        Get API Access
                                    </PulsatingButton>
                                </div>
                            </ShineBorder>
                        </div>
                    </AnimatedSection>

                    {/* Enterprise */}
                    <AnimatedSection delay={0.3} animation="fade-right">
                        <GlowCard className="h-full">
                            <Capsule className="text-sm text-gray-300 mb-4">Enterprise</Capsule>
                            <h3 className="text-2xl font-bold text-gray-100 mb-6">Custom</h3>

                            <div className="mb-6">
                                <div className="text-sm text-gray-400 mb-2">Contract pricing</div>
                                <div className="text-4xl font-bold gradient-text">Custom</div>
                                <div className="text-sm text-gray-400 mt-1">managed or self-hosted</div>
                            </div>

                            <ul className="space-y-3 mb-8 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Dedicated infrastructure
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Custom SLAs
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Compliance support
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Governance controls
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Dedicated support
                                </li>
                            </ul>

                            <Link href="/for-teams" className="btn-secondary w-full text-center block">
                                Contact Sales
                            </Link>
                        </GlowCard>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <p className="text-lg text-gray-300">
                        Questions? <Link href="/#early-access" className="text-violet-400 hover:text-violet-300">Contact us</Link>
                    </p>
                </AnimatedSection>
            </section>
        </div>
    );
}
