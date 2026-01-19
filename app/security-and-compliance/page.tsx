"use client";

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import Link from "next/link";

const guarantees = [
    { statement: "No training on customer data", icon: "🚫" },
    { statement: "User-initiated ingestion only", icon: "👆" },
    { statement: "Strong encryption at rest and in transit (AES-256–grade)", icon: "🔐" },
    { statement: "Immutable audit logs", icon: "📋" },
    { statement: "Full export and deletion rights", icon: "📤" },
];

export default function SecurityAndCompliance() {
    return (
        <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Hero */}
            <section className="relative section max-w-7xl mx-auto px-6 pt-24 md:pt-32">
                <AnimatedSection className="text-center max-w-4xl mx-auto">
                    <Capsule glow className="mb-8 text-gray-200">Security & Compliance</Capsule>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Security and<br />
                        <span className="gradient-text">Data Handling</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Mnemosyne is designed for platform approval and enterprise use.
                    </p>
                </AnimatedSection>
            </section>

            {/* Guarantees */}
            <section className="relative section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <p className="text-lg text-gray-300">
                        The following statements are <span className="text-white font-semibold">explicit and true</span>:
                    </p>
                </AnimatedSection>

                <div className="max-w-3xl mx-auto space-y-4">
                    {guarantees.map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <GlowCard>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 text-2xl">
                                        {item.icon}
                                    </div>
                                    <p className="text-lg text-gray-100 font-medium">
                                        {item.statement}
                                    </p>
                                </div>
                            </GlowCard>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Architectural Guarantee */}
            <section className="relative section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                        <p className="text-xl md:text-2xl text-gray-200">
                            These guarantees are <span className="text-green-400 font-semibold">architectural</span>,
                        </p>
                        <p className="text-xl md:text-2xl text-gray-200">
                            not policy-based.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            {/* Compliance Badges */}
            <section className="relative section max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-8">
                        Ready for Enterprise
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Capsule className="text-gray-200">SOC 2–Ready Architecture</Capsule>
                        <Capsule className="text-gray-200">GDPR Ready</Capsule>
                        <Capsule className="text-gray-200">AES-256–grade</Capsule>
                        <Capsule className="text-gray-200">TLS 1.2+</Capsule>
                    </div>
                </AnimatedSection>
            </section>

            {/* CTA */}
            <section className="relative section max-w-7xl mx-auto px-6">
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
