'use client';

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import {
    SparklesText,
    Particles,
    BlurIn,
    BorderBeam,
    AnimatedGradientText
} from "../components/magic-ui";

export default function StatusPage() {
    return (
        <div className="relative min-h-screen">
            <Particles count={20} className="fixed inset-0 z-0" />

            <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-32 text-center">
                <BlurIn delay={0}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">System Status</h1>
                </BlurIn>

                <BlurIn delay={0.2}>
                    <p className="text-xl text-gray-400">
                        Exogram operates as critical infrastructure.
                    </p>
                </BlurIn>
            </section>

            <section className="relative z-10 section max-w-3xl mx-auto px-6 py-16 space-y-6">
                {['API', 'Ledger', 'Dashboard'].map((service, i) => (
                    <AnimatedSection delay={0.1 * i} key={service}>
                        <div className="border border-white/10 p-6 rounded-2xl flex items-center justify-between bg-white/5 backdrop-blur-sm hover:border-teal-500/30 transition-all">
                            <p className="font-semibold text-lg text-white">{service}</p>
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                                </div>
                                <p className="text-teal-400 font-mono text-sm tracking-wider">OPERATIONAL</p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}

                <AnimatedSection delay={0.4} className="pt-8 opacity-50 text-center text-sm font-mono text-gray-500">
                    <p>All systems normal. 99.99% uptime last 30 days.</p>
                </AnimatedSection>
            </section>
        </div>
    );
}
