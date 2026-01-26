'use client';

import { AnimatedSection, Capsule, GlowCard } from "../../components/animations";
import {
    SparklesText,
    Particles,
    BlurIn,
    BorderBeam,
    AnimatedGradientText
} from "../../components/magic-ui";

export default function HowItWorksPage() {
    return (
        <div className="relative min-h-screen">
            <Particles count={40} className="fixed inset-0 z-0" />
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[128px]" />
            </div>

            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-32 text-center">
                <BlurIn delay={0}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        How Exogram Works
                    </h1>
                </BlurIn>

                <BlurIn delay={0.2}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        Exogram separates reasoning from truth.
                        <br />
                        Models generate language. Exogram governs reality.
                    </p>
                </BlurIn>

                {/* SHARPENING PILLAR 4 REFRAMING */}
                <BlurIn delay={0.4}>
                    <Capsule className="mx-auto max-w-3xl text-lg text-gray-400 italic bg-white/5 border border-white/10 px-6 py-4 rounded-xl">
                        "Exogram does not reason in language. It reasons in state, meaning, and time."
                    </Capsule>
                </BlurIn>
            </section>

            <section className="relative z-10 section max-w-4xl mx-auto px-6 py-24 space-y-16">

                <AnimatedSection delay={0.1}>
                    <div className="relative pl-10 border-l border-white/10">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                        <h2 className="text-3xl font-bold mb-4 text-white">Step 1: Facts Are Written Explicitly</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Facts do not emerge implicitly from conversation.
                            They are written intentionally, with confidence, provenance, and time.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="relative pl-10 border-l border-white/10">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.5)]"></div>
                        <h2 className="text-3xl font-bold mb-4 text-white">Step 2: Facts Become Ledger State</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Every accepted fact becomes part of a canonical ledger.
                            Nothing is overwritten. Changes are versioned.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <div className="relative pl-10 border-l border-white/10">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                        <h2 className="text-3xl font-bold mb-4 text-white">Step 3: Models Must Query Before Claiming</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Before an AI states a fact, it queries Exogram.
                            If the ledger returns nothing, the system must say “unknown.”
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                    <div className="relative pl-10 border-l border-white/10">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                        <h2 className="text-3xl font-bold mb-4 text-white">Step 4: Every Answer Is Auditable</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            You can trace every answer back to a source, a time, and a decision.
                            Trust is no longer assumed. It is inspected.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.5} className="mt-16">
                    <BorderBeam>
                        <div className="p-12 text-center bg-black/40">
                            <h3 className="text-2xl font-bold mb-4 text-white">System Complete</h3>
                            <p className="text-gray-400">The loop protects truth from hallucinations.</p>
                        </div>
                    </BorderBeam>
                </AnimatedSection>

            </section>
        </div>
    );
}
