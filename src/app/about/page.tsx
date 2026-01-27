'use client';

import { AnimatedSection, Capsule, GlowCard } from "../components/animations";
import {
    SparklesText,
    Particles,
    BlurIn,
    BorderBeam,
    AnimatedGradientText
} from "../components/magic-ui";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen">
            <Particles count={25} className="fixed inset-0 z-0" />

            <section className="relative z-10 section max-w-5xl mx-auto px-6 pt-32 pb-24">
                <BlurIn delay={0}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-16">Why Exogram Exists</h1>
                </BlurIn>

                <div className="space-y-12 text-lg md:text-2xl leading-relaxed text-gray-300">
                    <AnimatedSection delay={0.2}>
                        <div className="border-l-4 border-violet-500 pl-8 py-2">
                            <p>
                                AI did not fail because it lacked intelligence.
                                <br />
                                It failed because it lacked <span className="text-white font-semibold glow-text">memory</span>, <span className="text-white font-semibold glow-text">context</span>, and <span className="text-white font-semibold glow-text">accountability</span>.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <p>
                            We built Exogram because reasoning without truth is unsafe.
                            <br />
                            And truth without auditability is not trustworthy.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <BorderBeam duration={4}>
                            <div className="p-10 bg-black/40 text-center rounded-xl">
                                <SparklesText className="text-3xl md:text-4xl font-bold">Exogram makes AI systems honest by construction.</SparklesText>
                            </div>
                        </BorderBeam>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
