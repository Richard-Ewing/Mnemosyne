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
                AI doesn't fail because
              </span>
              <br />
              <span className="text-gray-400">it can't reason.</span>
              <br />
              <SparklesText className="gradient-text text-3xl sm:text-5xl md:text-6xl mt-4">
                It fails because it doesn't know what's true.
              </SparklesText>
            </h1>
          </BlurIn>

          <BlurIn delay={0.4}>
            <p className="text-xl md:text-2xl text-white font-semibold mb-6">
              Exogram does not make AI smarter. <span className="text-teal-400">It makes AI honest.</span>
            </p>

            <p className="description-text mb-8">
              Language models predict the next word. Exogram determines what that word is allowed to mean.
            </p>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Exogram is the verification infrastructure that gives AI
              <br className="hidden md:block" />
              <span className="text-violet-300 font-semibold">persistent context</span>, <span className="text-fuchsia-300 font-semibold">meaning</span>, and <span className="text-teal-300 font-semibold">auditability</span>.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Exogram maintains a private, governed semantic ledger that records what an AI
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
            The Actual <AnimatedGradientText>Problem</AnimatedGradientText>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* BorderBeam - Draws eye to important content */}
          <BorderBeam className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 text-center">
              <p className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">
                AI systems do not know what is true.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                When AI gets facts wrong, the cost is trust, safety, and real-world decisions.
                <br />
                <span className="text-gray-200 font-medium">Every hallucination today is paid for later — by users, teams, or the business.</span>
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-left my-8 border-b border-white/10 pb-8">
                <div className="p-4 border-l-2 border-red-500 bg-red-500/5">
                  <h4 className="font-bold text-red-300 mb-1">Prompt Engineering</h4>
                  <p className="text-xs text-gray-400">Tries to patch it.</p>
                </div>
                <div className="p-4 border-l-2 border-orange-500 bg-orange-500/5">
                  <h4 className="font-bold text-orange-300 mb-1">Retrieval (RAG)</h4>
                  <p className="text-xs text-gray-400">Tries to approximate it.</p>
                </div>
                <div className="p-4 border-l-2 border-gray-500 bg-gray-500/5">
                  <h4 className="font-bold text-gray-300 mb-1">Neither Creates Truth.</h4>
                  <p className="text-xs text-gray-400">They just decorate the model.</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-6">
                This creates systemic failures:
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-violet-300 font-bold mb-2">1. Context Collapse</h3>
                  <p className="text-sm text-gray-400">Every session resets. Preferences, constraints, and prior decisions evaporate.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-fuchsia-300 font-bold mb-2">2. Hallucinated Authority</h3>
                  <p className="text-sm text-gray-400">Models speak confidently even when facts do not exist.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-teal-300 font-bold mb-2">3. Un-auditable Memory</h3>
                  <p className="text-sm text-gray-400">No way to inspect, verify, or delete what an AI "remembers."</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-orange-300 font-bold mb-2">4. No State Continuity</h3>
                  <p className="text-sm text-gray-400">Systems cannot reliably know what has happened or what has changed.</p>
                </div>
              </div>

              <p className="text-xl text-white mt-10 font-medium border-t border-white/10 pt-6">
                This is not a model problem.<br />
                <span className="gradient-text">It is a missing infrastructure layer.</span>
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
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Immutable Ledger</h3>
              <p className="text-gray-300">
                Facts are recorded permanently. Nothing is implicit. Nothing is erased without an audit trail.
              </p>
            </GlowCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {/* BorderBeam on middle card - highlights most important */}
            <BorderBeam className="h-full">
              <div className="p-6 md:p-8 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">Deterministic Truth</h3>
                <p className="text-gray-300">
                  Every answer is either provable or explicitly unknown. No guessing. No hallucinations.
                </p>
              </div>
            </BorderBeam>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <GlowCard className="text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Full Auditability</h3>
              <p className="text-gray-300">
                Inspect every state transition. Know exactly *why* an AI knows what it claims to know.
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
                If an AI knows you, it should remember you. Context should persist across time, not prompts.
              </p>
              <Link href="/signup" className="inline-block mt-4 text-violet-400 hover:text-violet-300 transition-colors">
                Start Free →
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <div className="capsule inline-block mb-4 text-violet-300">Teams</div>
              <p className="text-gray-200">
                Shared truth shouldn't depend on who prompted last.
              </p>
              <Link href="/pricing" className="inline-block mt-4 text-violet-400 hover:text-violet-300 transition-colors">
                View Plans →
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} animation="fade-right">
            <div className="text-center">
              <div className="capsule inline-block mb-4 text-violet-300">Developers</div>
              <p className="text-gray-200">
                Agents without memory hallucinate. Treat truth like infrastructure.
              </p>
              <Link href="/developers" className="inline-block mt-4 text-violet-400 hover:text-violet-300 transition-colors">
                Build Now →
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
