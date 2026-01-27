'use client';

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import {
    SparklesText,
    Particles,
    BlurIn,
    BorderBeam,
    AnimatedGradientText
} from "../components/magic-ui";

export default function UseCasesPage() {
    return (
        <div className="relative min-h-screen">
            <Particles count={30} className="fixed inset-0 z-0" />
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-32 text-center">
                <BlurIn delay={0}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Where Exogram Is Used
                    </h1>
                </BlurIn>

                <BlurIn delay={0.2}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Anywhere AI must be correct, not just convincing.
                    </p>
                </BlurIn>
            </section>

            <section className="relative z-10 section max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatedSection delay={0.1}>
                        <GlowCard className="hover:border-violet-500/30">
                            <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-4">
                                <span className="text-4xl">👤</span> Personal AI
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Preferences persist. Decisions are remembered.
                                Your AI stops guessing who you are.
                            </p>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <GlowCard className="hover:border-fuchsia-500/30">
                            <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-4">
                                <span className="text-4xl">🤖</span> AI Agents
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Agents verify state before acting.
                                No phantom tasks. No invented context.
                            </p>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <GlowCard className="hover:border-teal-500/30">
                            <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-4">
                                <span className="text-4xl">👥</span> Teams & Knowledge
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Shared truth replaces prompt archaeology.
                                Decisions survive people, time, and tools.
                            </p>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <GlowCard className="hover:border-orange-500/30">
                            <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-4">
                                <span className="text-4xl">⚖️</span> Regulated Domains
                            </h2>
                            <p className="text-gray-400 text-lg">
                                If an answer must be explained, audited, or defended,
                                Exogram is required infrastructure.
                            </p>
                        </GlowCard>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
