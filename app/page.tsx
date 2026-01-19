"use client";

import { AnimatedSection, Capsule, GlowCard } from "./components/animations";
import {
  SparklesText,
  WordRotate,
  ShineBorder,
  Particles,
  BlurIn,
  AnimatedGradientText,
  BorderBeam,
  NumberTicker,
  PulsatingButton
} from "./components/magic-ui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Floating Particles - Creates premium atmosphere */}
      <Particles count={40} className="fixed inset-0 z-0" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 section max-w-7xl mx-auto px-6 pt-24 md:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <BlurIn delay={0}>
            <Capsule glow className="inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-200">
                Strong encryption at rest and in transit • AES-256–grade • SOC 2–ready architecture
              </span>
            </Capsule>
          </BlurIn>

          <BlurIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                A Semantic Ledger for
              </span>
              <br />
              {/* SparklesText - Creates excitement on key phrase */}
              <SparklesText className="gradient-text text-5xl sm:text-6xl md:text-8xl">
                AI Trust
              </SparklesText>
            </h1>
          </BlurIn>

          <BlurIn delay={0.4}>
            <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed">
              Give Your AI a Source of{" "}
              {/* WordRotate - Keeps attention, shows versatility */}
              <WordRotate
                words={["Meaning", "Context", "Truth", "Memory"]}
                className="text-violet-300 font-semibold"
              />{" "}
              It Can Reference Over Time
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Mnemosyne maintains a private, governed semantic ledger that records what an AI
              has previously accepted as true, preserves meaning across conversations and models,
              and exposes contradictions before they silently compound.
            </p>
          </BlurIn>

          <BlurIn delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300 mb-8">
              <span className="capsule">No training on your data</span>
              <span className="capsule">No assistants</span>
              <span className="capsule">Your ledger. Your authority.</span>
            </div>
          </BlurIn>

          <BlurIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* ShineBorder - Premium CTA that demands attention */}
              <ShineBorder duration={2}>
                <Link href="#early-access" className="block px-8 py-4 text-lg font-semibold text-white">
                  Get Early Access
                </Link>
              </ShineBorder>
              <Link href="/how-it-works" className="btn-secondary text-lg">
                See How It Works
              </Link>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* Why This Exists Section */}
      <section className="relative z-10 section max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why This <AnimatedGradientText>Exists</AnimatedGradientText>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* BorderBeam - Draws eye to important content */}
          <BorderBeam className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 text-center">
              <p className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">
                AI systems lose context.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                When context disappears, contradictions accumulate silently.
                <br />
                <span className="text-gray-200 font-medium">That&apos;s how hallucinations happen.</span>
              </p>
              <p className="text-lg text-gray-300">
                Mnemosyne reduces hallucinations caused by silent context loss and conflicting memory,
                exposing contradictions before they silently compound.
              </p>
              <p className="text-base text-gray-400 mt-6">
                It does this by maintaining a <span className="text-violet-300">semantic ledger of meaning</span>,
                with provenance, decay, and auditability.
              </p>
            </div>
          </BorderBeam>
        </AnimatedSection>
      </section>

      {/* Stats Section - NumberTicker creates credibility */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                <NumberTicker value={99} />%
              </div>
              <p className="text-gray-400 mt-2">Conflict Detection</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                &lt;<NumberTicker value={50} delay={200} />ms
              </div>
              <p className="text-gray-400 mt-2">Query Latency</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                <NumberTicker value={256} delay={400} />-bit
              </div>
              <p className="text-gray-400 mt-2">Encryption</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                <NumberTicker value={100} delay={600} />%
              </div>
              <p className="text-gray-400 mt-2">Auditability</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Outcomes Section */}
      <section className="relative z-10 section max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <Capsule className="mb-6 text-sm text-gray-300">Outcomes, Not Features</Capsule>
          <h2 className="text-3xl md:text-5xl font-bold">
            What You <AnimatedGradientText>Get</AnimatedGradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <GlowCard className="text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Trust</h3>
              <p className="text-gray-300">
                See what your AI is basing its answers on.
              </p>
            </GlowCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {/* BorderBeam on middle card - highlights most important */}
            <BorderBeam className="h-full">
              <div className="p-6 md:p-8 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔗</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">Continuity</h3>
                <p className="text-gray-300">
                  Meaning persists across sessions, tools, and models.
                </p>
              </div>
            </BorderBeam>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <GlowCard className="text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Accountability</h3>
              <p className="text-gray-300">
                Contradictions are surfaced instead of hidden.
              </p>
            </GlowCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="relative z-10 section max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Who This Is <AnimatedGradientText>For</AnimatedGradientText>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1} animation="fade-left">
            <div className="text-center">
              <div className="capsule inline-block mb-4 text-violet-300">Individuals</div>
              <p className="text-gray-200">
                Who use AI daily and want continuity and trust
              </p>
              <Link href="/for-individuals" className="inline-block mt-4 text-violet-400 hover:text-violet-300 transition-colors">
                Learn more →
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <div className="capsule inline-block mb-4 text-violet-300">Teams</div>
              <p className="text-gray-200">
                That require auditability and risk reduction
              </p>
              <Link href="/for-teams" className="inline-block mt-4 text-violet-400 hover:text-violet-300 transition-colors">
                Learn more →
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} animation="fade-right">
            <div className="text-center">
              <div className="capsule inline-block mb-4 text-violet-300">Developers</div>
              <p className="text-gray-200">
                Building agents and AI products that need provenance and conflict visibility
              </p>
              <Link href="/for-developers" className="inline-block mt-4 text-violet-400 hover:text-violet-300 transition-colors">
                Learn more →
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-16">
          <p className="text-xl text-gray-300">
            One ledger. <AnimatedGradientText className="font-semibold">Multiple access modes.</AnimatedGradientText>
          </p>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section id="early-access" className="relative z-10 section max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-white/10 overflow-hidden text-center">
            <Particles count={20} />
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Get <SparklesText className="gradient-text">Early Access</SparklesText>
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Be among the first to experience deterministic context governance.
                Limited spots available.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/20 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  required
                />
                {/* PulsatingButton - Creates urgency */}
                <PulsatingButton className="whitespace-nowrap">
                  Get Access
                </PulsatingButton>
              </form>

              <p className="mt-6 text-sm text-gray-400">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
