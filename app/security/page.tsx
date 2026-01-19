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

const invariants = [
    { name: "Immutability", description: "Ledger entries cannot be modified after creation." },
    { name: "Conflict Preservation", description: "Contradictions cannot be hidden or auto-resolved." },
    { name: "Semantic Non-Averaging", description: "Meaning is never blended or merged." },
    { name: "Decay Enforcement", description: "Confidence degrades over time unless explicitly reinforced." },
    { name: "Ownership Boundaries", description: "Agents cannot self-author truth." },
];

export default function Security() {
    return (
        <div className="relative">
            {/* Subtle particles */}
            <Particles count={20} className="fixed inset-0 z-0" />

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Hero */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-24 md:pt-32">
                <BlurIn className="text-center max-w-4xl mx-auto">
                    <Capsule glow className="mb-8 text-gray-200">Security & Compliance</Capsule>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        <SparklesText className="gradient-text">Security</SparklesText> & Compliance
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                        Mnemosyne is trust infrastructure. Security is enforced by <span className="text-white font-semibold">architecture</span>, not policy documents.
                    </p>
                </BlurIn>

                <AnimatedSection delay={0.2} className="max-w-3xl mx-auto mt-8">
                    <BorderBeam>
                        <div className="p-6 md:p-8 text-center">
                            <p className="text-lg text-gray-300">
                                We design for <span className="text-green-400 font-semibold">prevention</span>, <span className="text-green-400 font-semibold">traceability</span>, and <span className="text-green-400 font-semibold">provable failure</span>&mdash;not best-effort protection.
                            </p>
                        </div>
                    </BorderBeam>
                </AnimatedSection>
            </section>

            {/* Data Protection */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        Data <AnimatedGradientText>Protection</AnimatedGradientText>
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <AnimatedSection delay={0.1} animation="fade-left">
                        <GlowCard className="h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <span className="text-green-400 text-xl">🔒</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-100">Encryption at Rest</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Ledger content is encrypted at the application layer before storage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Encrypted data stored with additional platform-level disk encryption</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Sensitive semantic content is never stored or processed in plaintext</span>
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <Capsule className="text-gray-200 text-sm">AES-256–grade encryption</Capsule>
                            </div>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} animation="fade-right">
                        <GlowCard className="h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <span className="text-green-400 text-xl">🔐</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-100">Encryption in Transit</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>All data is transmitted over TLS 1.2+</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Secure connections enforced between clients, APIs, and databases</span>
                                </li>
                            </ul>
                        </GlowCard>
                    </AnimatedSection>
                </div>
            </section>

            {/* Access Control */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        Access <AnimatedGradientText>Control</AnimatedGradientText>
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <AnimatedSection delay={0.1}>
                        <GlowCard className="h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                                    <span className="text-violet-400 text-xl">⚖️</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-100">Principle of Least Authority</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400 mt-1">•</span>
                                    <span>AI agents are restricted to read and propose operations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400 mt-1">•</span>
                                    <span>Only authenticated users can commit ledger entries</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400 mt-1">•</span>
                                    <span>No model or agent can autonomously mutate stored meaning</span>
                                </li>
                            </ul>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <GlowCard className="h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                                    <span className="text-violet-400 text-xl">🔑</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-100">Row-Level Security</h3>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400 mt-1">•</span>
                                    <span>All ledger data is protected by row-level security controls</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400 mt-1">•</span>
                                    <span>Cross-tenant access is cryptographically and logically prevented</span>
                                </li>
                            </ul>
                        </GlowCard>
                    </AnimatedSection>
                </div>
            </section>

            {/* Auditability */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        Auditability & <AnimatedGradientText>Traceability</AnimatedGradientText>
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <AnimatedSection delay={0.1}>
                        <BorderBeam className="h-full">
                            <div className="p-6 md:p-8 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 flex items-center justify-center">
                                        <span className="text-fuchsia-400 text-xl">📋</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-100">Decision Provenance</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Every ledger-affecting operation produces a permanent provenance record, including:
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="text-fuchsia-400">•</span>
                                        Actor (user or agent)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-fuchsia-400">•</span>
                                        Action type
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-fuchsia-400">•</span>
                                        Timestamp
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-fuchsia-400">•</span>
                                        Referenced ledger entries
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-fuchsia-400">•</span>
                                        Policy context
                                    </li>
                                </ul>
                                <p className="text-gray-400 text-sm mt-4">
                                    These records are append-only and cannot be altered.
                                </p>
                            </div>
                        </BorderBeam>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <BorderBeam className="h-full">
                            <div className="p-6 md:p-8 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                                        <span className="text-red-400 text-xl">🚫</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-100">Invariant Violations</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Attempts to violate system rules are:
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-400">✗</span>
                                        Deterministically blocked
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-400">✗</span>
                                        Logged as first-class security events
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-400">✗</span>
                                        Preserved for audit review
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <p className="text-red-400 font-semibold">
                                        There are no silent failures.
                                    </p>
                                </div>
                            </div>
                        </BorderBeam>
                    </AnimatedSection>
                </div>
            </section>

            {/* Data Integrity Guarantees */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        Data Integrity <AnimatedGradientText>Guarantees</AnimatedGradientText>
                    </h2>
                    <p className="text-lg text-gray-300 mt-4">
                        Mnemosyne enforces non-negotiable system invariants:
                    </p>
                </AnimatedSection>

                <div className="max-w-4xl mx-auto space-y-4">
                    {invariants.map((inv, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <GlowCard>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                                        <span className="text-violet-400 font-bold">{i + 1}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-100">{inv.name}</h4>
                                        <p className="text-gray-400">{inv.description}</p>
                                    </div>
                                </div>
                            </GlowCard>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={0.6} className="text-center mt-8">
                    <p className="text-gray-400">
                        These guarantees are enforced in code and at the database layer.
                    </p>
                </AnimatedSection>
            </section>

            {/* Privacy & Data Usage */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
                            Privacy & Data Usage
                        </h2>
                        <ul className="space-y-4 text-left max-w-xl mx-auto">
                            <li className="flex items-start gap-3 text-gray-200">
                                <span className="text-green-400 mt-1">✓</span>
                                <span>User data is <span className="font-semibold text-white">never used for model training</span></span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200">
                                <span className="text-green-400 mt-1">✓</span>
                                <span>Mnemosyne acts as a reference system, not a learning system</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200">
                                <span className="text-green-400 mt-1">✓</span>
                                <span>Context is projected into model prompts ephemerally and is not retained by models</span>
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>
            </section>

            {/* Compliance Readiness */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        Compliance <AnimatedGradientText>Readiness</AnimatedGradientText>
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <AnimatedSection delay={0.1}>
                        <GlowCard className="h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <Capsule className="text-gray-200">SOC 2</Capsule>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Mnemosyne is designed to meet SOC 2 Type II Trust Services Criteria, including:
                            </p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span>
                                    Logical access controls
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span>
                                    Change monitoring
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span>
                                    Audit logging
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span>
                                    Data integrity enforcement
                                </li>
                            </ul>
                            <p className="text-gray-500 text-sm mt-4 pt-4 border-t border-white/10">
                                Formal certification is pursued through an independent auditor as part of operational maturity.
                            </p>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <GlowCard className="h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <Capsule className="text-gray-200">GDPR</Capsule>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span><span className="font-semibold">Article 17</span> (Right to Erasure) supported via tombstoning and controlled deletion</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span><span className="font-semibold">Article 20</span> (Data Portability) supported via structured ledger export</span>
                                </li>
                            </ul>
                        </GlowCard>
                    </AnimatedSection>
                </div>
            </section>

            {/* Responsible Disclosure */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <GlowCard className="max-w-2xl mx-auto">
                        <div className="flex items-center gap-3 mb-4 justify-center">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                <span className="text-blue-400 text-xl">🛡️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-100">Responsible Disclosure</h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                            If you believe you have found a security issue, please contact:
                        </p>
                        <a
                            href="mailto:security@themnemosyne.io"
                            className="text-violet-400 hover:text-violet-300 transition-colors font-semibold"
                        >
                            security@themnemosyne.io
                        </a>
                        <p className="text-gray-500 text-sm mt-4">
                            We take security reports seriously and respond promptly.
                        </p>
                    </GlowCard>
                </AnimatedSection>
            </section>

            {/* Core Principle */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-white/10">
                        <p className="text-xl md:text-2xl text-gray-300 mb-4">
                            Meaning persists independently of language.
                        </p>
                        <p className="text-2xl md:text-3xl font-bold">
                            <SparklesText className="gradient-text">Security exists to protect that meaning from silent corruption.</SparklesText>
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            {/* CTA */}
            <section className="relative z-10 section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <p className="text-lg text-gray-300 mb-6">
                        Need additional security documentation?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/#early-access" className="btn-primary">
                            Contact Security Team
                        </Link>
                        <a
                            href="/security.txt"
                            target="_blank"
                            className="btn-secondary"
                        >
                            View security.txt
                        </a>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
