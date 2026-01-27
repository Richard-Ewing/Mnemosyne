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

export default function SecurityPage() {
    return (
        <div className="relative min-h-screen">
            <Particles count={30} className="fixed inset-0 z-0" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[128px]" />
            </div>

            {/* Hero */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-32 text-center">
                <BlurIn delay={0}>
                    <Capsule glow className="mb-6 inline-block text-teal-300">
                        SECURITY & COMPLIANCE
                    </Capsule>
                </BlurIn>

                <BlurIn delay={0.2}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Built for <span className="text-teal-400">Auditability</span>
                    </h1>
                </BlurIn>

                <BlurIn delay={0.4}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Every state transition is recorded.
                        <br />
                        Nothing is implicit. Nothing is erased.
                    </p>
                </BlurIn>

                {/* SHARPENING LINE C */}
                <BlurIn delay={0.6}>
                    <p className="mt-8 text-lg font-semibold text-white border-t border-white/10 pt-8 inline-block px-8">
                        Exogram is an impartial witness. It does not "think." It does not "decide." It records. <span className="text-teal-400">It proves.</span>
                    </p>
                </BlurIn>
            </section>

            {/* MENTOR FEEDBACK: Anti-claim statement */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 py-16">
                <AnimatedSection>
                    <div className="max-w-2xl mx-auto text-center p-8 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold space-y-4 text-teal-400/90">
                            <AnimatedGradientText className="text-gray-400">We do not infer.</AnimatedGradientText>
                            <AnimatedGradientText className="text-gray-400">We do not guess.</AnimatedGradientText>
                            <SparklesText className="text-teal-400" text="We record." />
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Architecture */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 py-16">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Architecture</h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <AnimatedSection delay={0.1}>
                        <GlowCard className="h-full">
                            <div className="text-4xl mb-4">⛓️</div>
                            <h3 className="text-xl font-bold mb-3 text-orange-400">Immutable Ledger</h3>
                            <p className="text-gray-400">
                                Facts cannot be edited or deleted without trace.
                                Every change is versioned.
                            </p>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <GlowCard className="h-full">
                            <div className="text-4xl mb-4">🔎</div>
                            <h3 className="text-xl font-bold mb-3 text-orange-400">Complete Provenance</h3>
                            <p className="text-gray-400">
                                Every fact tracks who wrote it, when, why, and with what confidence.
                            </p>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <GlowCard className="h-full">
                            <div className="text-4xl mb-4">🔐</div>
                            <h3 className="text-xl font-bold mb-3 text-orange-400">Cryptographic Checksums</h3>
                            <p className="text-gray-400">
                                Tamper detection via integrity hashes on every state transition.
                            </p>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <GlowCard className="h-full">
                            <div className="text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold mb-3 text-orange-400">Row-Level Security</h3>
                            <p className="text-gray-400">
                                Database-enforced access control. No cross-user data leakage.
                            </p>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.5} className="md:col-span-2">
                        <BorderBeam>
                            <div className="p-8 text-center bg-black/40">
                                <div className="text-4xl mb-4">📜</div>
                                <h3 className="text-xl font-bold mb-3 text-orange-400">Full Audit Logs</h3>
                                <p className="text-gray-400 max-w-2xl mx-auto">
                                    Every read, write, archive, and contest is logged with actor and timestamp.
                                </p>
                            </div>
                        </BorderBeam>
                    </AnimatedSection>
                </div>
            </section>

            {/* Data Controls */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 py-16">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Data Controls</h2>
                    <p className="text-xl text-gray-300">You own your data.</p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        { title: "Export Everything", desc: "Full data export in JSON or CSV. No lock-in." },
                        { title: "Delete Everything", desc: "GDPR-compliant permanent deletion. All facts, vectors, logs." },
                        { title: "Archive Facts", desc: "Soft delete. Facts are hidden but recoverable if needed." },
                        { title: "Contest Entries", desc: "Challenge any fact. Records dispute with reason and timestamp." }
                    ].map((item, i) => (
                        <AnimatedSection delay={i * 0.1} key={i}>
                            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-teal-500/30 transition-all">
                                <h3 className="text-xl font-bold mb-2 text-teal-400">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 py-24 text-center">
                <AnimatedSection>
                    <h2 className="text-4xl font-bold mb-4 gradient-text">
                        Trust is auditable.
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Infrastructure you can build your business on.
                    </p>
                    <Link
                        href="/signup"
                        className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full font-bold text-white hover:opacity-90 transition-opacity button-glow"
                    >
                        Get Started
                    </Link>
                </AnimatedSection>
            </section>
        </div>
    );
}
