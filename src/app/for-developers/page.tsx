"use client";

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import {
    BlurIn,
    AnimatedGradientText,
    SparklesText,
    BorderBeam,
    Particles,
    GlowingCard
} from "../components/magic-ui";
import Link from "next/link";

const capabilities = [
    { icon: "📝", title: "Record claims", description: "Store structured semantic entries with provenance" },
    { icon: "🔍", title: "Query ledger-derived meaning", description: "Semantic search across your entire ledger" },
    { icon: "⚖️", title: "Detect semantic conflicts", description: "Automatic contradiction detection", highlight: true },
    { icon: "🔄", title: "Enforce decay and reinforcement", description: "Control knowledge lifecycle programmatically" },
    { icon: "📖", title: "Retrieve governed context", description: "Reference-only context for AI systems" },
];

export default function ForDevelopers() {
    return (
        <div className="relative">
            {/* Subtle particles */}
            <Particles count={20} className="fixed inset-0 z-0" />

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Hero */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-24 md:pt-32">
                <BlurIn className="text-center max-w-4xl mx-auto">
                    <Capsule glow className="mb-8 text-gray-200">For Developers</Capsule>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        A Ledger API for<br />
                        <SparklesText className="gradient-text">Meaning, Not Memory</SparklesText>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Exogram exposes a programmable semantic ledger that agents and applications
                        can reference for trusted context.
                    </p>
                </BlurIn>
            </section>

            {/* Capabilities */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        API <AnimatedGradientText>Capabilities</AnimatedGradientText>
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {capabilities.map((cap, i) => (
                        <AnimatedSection key={i} delay={i * 0.1} animation="scale-in">
                            {cap.highlight ? (
                                <BorderBeam className="h-full">
                                    <div className="p-6 md:p-8 text-center h-full">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-4 text-2xl">
                                            {cap.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-100 mb-2">
                                            <AnimatedGradientText>{cap.title}</AnimatedGradientText>
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {cap.description}
                                        </p>
                                    </div>
                                </BorderBeam>
                            ) : (
                                <GlowingCard className="text-center h-full">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-4 text-2xl">
                                        {cap.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                                        {cap.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {cap.description}
                                    </p>
                                </GlowingCard>
                            )}
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Code Example */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection>
                    <BorderBeam className="max-w-4xl mx-auto">
                        <div className="p-6 md:p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <span className="ml-2 text-sm text-gray-500 font-mono">example.py</span>
                            </div>
                            <pre className="text-sm md:text-base overflow-x-auto">
                                <code className="text-gray-300">
                                    {`# Store a semantic entry
response = exogram.store(
    content="Product launch is scheduled for March 15th",
    source="planning-doc",
    tags=["product", "launch"]
)

# Check for contradictions
result = exogram.check_fact(
    claim="Product launch is April 1st"
)
# Returns: { "conflict": true, "competing_claims": [...] }

# Reference context for AI
context = exogram.get_context(
    topic="product launch",
    depth=10
)`}
                                </code>
                            </pre>
                        </div>
                    </BorderBeam>
                </AnimatedSection>
            </section>

            {/* Pricing Note */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Capsule className="text-gray-200">Usage-based pricing</Capsule>
                        <Capsule className="text-gray-200">Model-neutral</Capsule>
                        <Capsule className="text-gray-200">Safe by design</Capsule>
                    </div>
                </AnimatedSection>
            </section>

            {/* CTA */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">
                        Ready to integrate?
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/#early-access" className="btn-primary">
                            Get API Access
                        </Link>
                        <a
                            href="https://api.exogram.ai/docs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            View API Docs
                        </a>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
