"use client";

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import {
    BorderBeam,
    BlurIn,
    AnimatedGradientText,
    SparklesText,
    Particles
} from "../components/magic-ui";
import Link from "next/link";

const steps = [
    {
        number: "1",
        title: "Explicit Ingestion",
        description: "Only content explicitly selected by the user or system is recorded. There is no background scraping or silent capture.",
        icon: "📥",
    },
    {
        number: "2",
        title: "Meaning Representation",
        description: "Inputs are converted into predictive semantic representations using a VL-JEPA-style abstraction that captures intent, scope, and relationships rather than syntax. Meaning is stored independently of language or model.",
        icon: "🧠",
        highlight: true, // This one gets BorderBeam
    },
    {
        number: "3",
        title: "Ledger Entry",
        description: "Each ledger entry records: the claim, contextual meaning, source and timestamp, confidence, and state (reinforced, decayed, contested). Entries are append-only and fully auditable.",
        icon: "📝",
    },
    {
        number: "4",
        title: "Conflict Detection",
        description: "Semantic incompatibilities are detected automatically. Contradictions are surfaced as competing claims. Nothing is silently overwritten.",
        icon: "⚖️",
        highlight: true, // This one gets BorderBeam
    },
    {
        number: "5",
        title: "Decay and Reinforcement",
        description: "Meaning degrades over time without reinforcement. Reinforcement is explicit, traceable, and reversible.",
        icon: "🔄",
    },
    {
        number: "6",
        title: "Reference, Not Recall",
        description: "AI systems reference the ledger for context. They are not trained on it. The ledger does not reason. It governs meaning.",
        icon: "📖",
    },
];

export default function HowItWorks() {
    return (
        <div className="relative">
            {/* Subtle particles */}
            <Particles count={25} className="fixed inset-0 z-0" />

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Hero */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-24 md:pt-32">
                <BlurIn className="text-center max-w-4xl mx-auto">
                    <Capsule glow className="mb-8 text-gray-200">Architecture Without Hype</Capsule>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        How It <SparklesText className="gradient-text">Works</SparklesText>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        A six-step process that transforms raw input into governed, auditable semantic meaning.
                    </p>
                </BlurIn>
            </section>

            {/* Steps */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <AnimatedSection
                            key={step.number}
                            delay={index * 0.1}
                            animation={index % 2 === 0 ? "fade-left" : "fade-right"}
                            className="mb-8"
                        >
                            {step.highlight ? (
                                // BorderBeam on key steps for emphasis
                                <BorderBeam>
                                    <div className="p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-3xl">
                                                    {step.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-sm text-violet-400 font-mono">Step {step.number}</span>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-3">
                                                    <AnimatedGradientText>{step.title}</AnimatedGradientText>
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </BorderBeam>
                            ) : (
                                <GlowCard>
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-3xl">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-sm text-violet-400 font-mono">Step {step.number}</span>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </GlowCard>
                            )}
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Key Principle */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <BorderBeam className="max-w-3xl mx-auto">
                        <div className="p-8 md:p-12">
                            <p className="text-xl md:text-2xl text-gray-200 mb-4">
                                AI systems <span className="text-violet-300 font-semibold">reference</span> the ledger for context.
                            </p>
                            <p className="text-lg text-gray-300">
                                They are not trained on it. The ledger does not reason.<br />
                                <SparklesText className="text-white font-semibold">It governs meaning.</SparklesText>
                            </p>
                        </div>
                    </BorderBeam>
                </AnimatedSection>
            </section>

            {/* CTA */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">
                        Ready to get started?
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/#early-access" className="btn-primary">
                            Get Early Access
                        </Link>
                        <Link href="/for-developers" className="btn-secondary">
                            Developer Docs
                        </Link>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
