"use client";

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import Link from "next/link";

const features = [
    "Persistent context across any LLM",
    "Visibility into what your AI has previously accepted as true",
    "Control over reinforcement and decay",
    "Full export and deletion rights",
    "No training on your data",
];

export default function ForIndividuals() {
    return (
        <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Hero */}
            <section className="relative section max-w-7xl mx-auto px-6 pt-24 md:pt-32">
                <AnimatedSection className="text-center max-w-4xl mx-auto">
                    <Capsule glow className="mb-8 text-gray-200">For Individuals</Capsule>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Your AI, With a<br />
                        <span className="gradient-text">Source of Truth</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Mnemosyne gives you a private semantic ledger so your AI tools retain meaning,
                        surface contradictions, and don&apos;t reset every time you start over.
                    </p>
                </AnimatedSection>
            </section>

            {/* What You Get */}
            <section className="relative section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        What You <span className="gradient-text">Get</span>
                    </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <GlowCard className="max-w-3xl mx-auto">
                        <ul className="space-y-4">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-gray-200">
                                    <span className="text-green-400 mt-1">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-white/10 text-center">
                            <p className="text-xl text-gray-200 font-medium">
                                This is <span className="gradient-text">trust</span> for everyday AI use.
                            </p>
                        </div>
                    </GlowCard>
                </AnimatedSection>
            </section>

            {/* Pricing */}
            <section className="relative section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        Simple <span className="gradient-text">Pricing</span>
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    <AnimatedSection delay={0.1} animation="fade-left">
                        <GlowCard className="h-full text-center">
                            <h3 className="text-2xl font-bold text-gray-100 mb-2">Free</h3>
                            <p className="text-4xl font-bold gradient-text mb-4">$0</p>
                            <p className="text-gray-300 mb-6">
                                Ledger size and retention capped
                            </p>
                            <ul className="text-left space-y-2 text-gray-300 mb-8">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Basic ledger access
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Limited history
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Standard support
                                </li>
                            </ul>
                            <Link href="/#early-access" className="btn-secondary w-full">
                                Get Started
                            </Link>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} animation="fade-right">
                        <div className="relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <Capsule className="bg-violet-500/20 border-violet-500/50 text-violet-300 text-sm">
                                    Recommended
                                </Capsule>
                            </div>
                            <GlowCard className="h-full text-center border-violet-500/30">
                                <h3 className="text-2xl font-bold text-gray-100 mb-2">Pro</h3>
                                <p className="text-4xl font-bold gradient-text mb-4">
                                    $29<span className="text-lg text-gray-400">/month</span>
                                </p>
                                <p className="text-gray-300 mb-6">
                                    Extended history, reinforcement controls, full export
                                </p>
                                <ul className="text-left space-y-2 text-gray-300 mb-8">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> Unlimited ledger entries
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> Full history retention
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> Reinforcement controls
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> Full data export
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> Priority support
                                    </li>
                                </ul>
                                <Link href="/#early-access" className="btn-primary w-full">
                                    Get Pro Access
                                </Link>
                            </GlowCard>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
