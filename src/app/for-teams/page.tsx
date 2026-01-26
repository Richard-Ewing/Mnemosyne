"use client";

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import Link from "next/link";

const useCases = [
    {
        icon: "📋",
        title: "Governance and Auditability",
        description: "Complete visibility into what your AI systems have previously accepted as true.",
    },
    {
        icon: "🛡️",
        title: "Compliance and Risk Reduction",
        description: "Reduce hallucination risk with auditable, governed semantic context.",
    },
    {
        icon: "🔗",
        title: "Cross-model Consistency",
        description: "Maintain meaning across different AI models and tools.",
    },
    {
        icon: "🏛️",
        title: "Persistent Institutional Context",
        description: "Institutional knowledge that persists across sessions and team members.",
    },
];

export default function ForTeams() {
    return (
        <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Hero */}
            <section className="relative section max-w-7xl mx-auto px-6 pt-24 md:pt-32">
                <AnimatedSection className="text-center max-w-4xl mx-auto">
                    <Capsule glow className="mb-8 text-gray-200">For Teams</Capsule>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Semantic Trust Infrastructure<br />
                        <span className="gradient-text">for AI Systems</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Exogram provides a governed semantic ledger layer that reduces hallucination risk caused by
                        silent context loss, exposing contradictions before they compound.
                    </p>
                </AnimatedSection>
            </section>

            {/* Use Cases */}
            <section className="relative section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        What Teams <span className="gradient-text">Use It For</span>
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {useCases.map((useCase, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <GlowCard className="h-full">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 text-2xl">
                                        {useCase.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-100 mb-2">
                                            {useCase.title}
                                        </h3>
                                        <p className="text-gray-300">
                                            {useCase.description}
                                        </p>
                                    </div>
                                </div>
                            </GlowCard>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Key Message */}
            <section className="relative section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <GlowCard className="max-w-3xl mx-auto">
                        <p className="text-xl md:text-2xl text-gray-200">
                            No model changes required.
                        </p>
                        <p className="text-lg text-gray-400 mt-4">
                            Exogram integrates as a semantic layer that any AI system can reference.
                        </p>
                    </GlowCard>
                </AnimatedSection>
            </section>

            {/* Enterprise CTA */}
            <section className="relative section max-w-7xl mx-auto px-6">
                <AnimatedSection>
                    <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-white/10 overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl" />

                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
                                Enterprise Ready
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                                Custom deployment options, SLAs, compliance support, and dedicated onboarding.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/#early-access" className="btn-primary">
                                    Contact Sales
                                </Link>
                                <Link href="/security" className="btn-secondary">
                                    Security & Compliance
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
