"use client";

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import {
    BlurIn,
    AnimatedGradientText,
    SparklesText,
    BorderBeam,
    Particles
} from "../components/magic-ui";
import Link from "next/link";

export default function WhatExogramIs() {
    return (
        <div className="relative">
            {/* Subtle particles */}
            <Particles count={25} className="fixed inset-0 z-0" />

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Hero */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-24 md:pt-32">
                <BlurIn className="text-center max-w-4xl mx-auto">
                    <Capsule glow className="mb-8 text-gray-200">Canonical Definition</Capsule>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        What <SparklesText className="gradient-text">Exogram</SparklesText> Is
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                        Exogram is a <span className="text-white font-semibold">model-agnostic semantic ledger</span> that
                        records, governs, and audits meaning over time for AI systems and their users.
                    </p>
                </BlurIn>

                <AnimatedSection delay={0.2} className="max-w-3xl mx-auto mt-12">
                    <BorderBeam>
                        <div className="p-8 md:p-12 text-center">
                            <p className="text-lg text-gray-300 mb-6">
                                Instead of storing conversations or prompts, Exogram maintains a ledger of
                                <span className="text-violet-300"> claims</span>,
                                <span className="text-violet-300"> contextual meaning</span>, and
                                <span className="text-violet-300"> provenance</span> that AI systems can reference
                                across sessions and models.
                            </p>
                            <div className="flex flex-col gap-2 text-lg">
                                <p className="text-gray-400">LLMs speak language.</p>
                                <p className="font-semibold">
                                    <AnimatedGradientText className="text-xl">Exogram speaks meaning.</AnimatedGradientText>
                                </p>
                            </div>
                        </div>
                    </BorderBeam>
                </AnimatedSection>
            </section>

            {/* What It Is / What It Is Not */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* What It Is */}
                    <AnimatedSection delay={0.1} animation="fade-left">
                        <GlowCard className="h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <span className="text-green-400 text-xl">✓</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-100">What Exogram Is</h2>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "A semantic ledger",
                                    "Deterministic enforcement infrastructure",
                                    "Model-agnostic",
                                    "User-controlled",
                                    "Auditable by design",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200">
                                        <span className="text-green-400">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlowCard>
                    </AnimatedSection>

                    {/* What It Is Not */}
                    <AnimatedSection delay={0.2} animation="fade-right">
                        <GlowCard className="h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                                    <span className="text-red-400 text-xl">✗</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-100">What Exogram Is Not</h2>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "A chatbot",
                                    "A note-taking app",
                                    "A training dataset",
                                    "A vector database wrapper",
                                    "An AI assistant",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <span className="text-red-400">✗</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlowCard>
                    </AnimatedSection>
                </div>
            </section>

            {/* Context Statement */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-white/10">
                        <p className="text-xl md:text-2xl text-gray-300 mb-4">
                            Context is not text.
                        </p>
                        <p className="text-2xl md:text-3xl font-bold">
                            <SparklesText className="gradient-text">Context is ledger-derived meaning.</SparklesText>
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            {/* CTA */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">
                        Ready to see how it works?
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/how-it-works" className="btn-primary">
                            Explore Architecture
                        </Link>
                        <Link href="/#early-access" className="btn-secondary">
                            Get Early Access
                        </Link>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
