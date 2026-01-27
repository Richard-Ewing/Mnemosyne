import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Exogram",
    description:
        "Terms of Service for Exogram Semantic Memory Governance Infrastructure.",
};

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="prose prose-invert prose-lg max-w-none">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Terms of Service
                </h1>
                <p className="text-gray-400 mb-12">Last Updated: January 17, 2026</p>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        By accessing or using Exogram (&quot;Service&quot;), you agree to be bound
                        by these Terms of Service (&quot;Terms&quot;). If you disagree with any part
                        of these terms, you may not access the Service. These Terms apply
                        to all visitors, users, and others who access or use the Service.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        2. Description of Service
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Exogram is a semantic memory governance infrastructure that
                        provides:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>
                            VL-JEPA powered semantic prediction and meaning custody
                        </li>
                        <li>
                            Truth Arbitration for conflict detection and resolution
                        </li>
                        <li>Cognitive topology visualization and memory management</li>
                        <li>Encrypted storage with full audit logging</li>
                        <li>API access for AI system integration</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        3. User Accounts
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        When you create an account, you must provide accurate, complete,
                        and current information. You are responsible for:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Safeguarding your account credentials</li>
                        <li>All activities that occur under your account</li>
                        <li>
                            Notifying us immediately of any unauthorized access
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        4. User Responsibilities
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">You agree NOT to:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Use the Service for any unlawful purpose</li>
                        <li>
                            Store content that infringes intellectual property rights
                        </li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>
                            Interfere with or disrupt the Service or servers
                        </li>
                        <li>Reverse engineer or decompile our technology</li>
                        <li>
                            Use automated means to access the Service without permission
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        5. Intellectual Property
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        <strong className="text-white">Your Content:</strong> You retain
                        all rights to content you store in Exogram. By using the
                        Service, you grant us a limited license to process your content
                        solely to provide the Service.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        <strong className="text-white">Our Property:</strong> The Service,
                        including VL-JEPA technology, algorithms, interfaces, and
                        documentation, is owned by Mnemosyne and protected by
                        intellectual property laws.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        6. Service Availability
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We strive to maintain high availability but do not guarantee
                        uninterrupted access. We may modify, suspend, or discontinue the
                        Service at any time with reasonable notice. Scheduled maintenance
                        will be communicated in advance when possible.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        7. Payment Terms
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Paid subscriptions are billed in advance on a monthly or annual
                        basis. All fees are non-refundable except as required by law.
                        We may change pricing with 30 days&apos; notice. Continued use after
                        price changes constitutes acceptance of new pricing.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        8. Limitation of Liability
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, MNEMOSYNE SHALL NOT BE
                        LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                        PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL,
                        ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL
                        NOT EXCEED THE AMOUNT PAID BY YOU IN THE TWELVE MONTHS PRECEDING
                        THE CLAIM.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        9. Indemnification
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        You agree to indemnify and hold harmless Mnemosyne and its
                        affiliates from any claims, damages, or expenses arising from
                        your use of the Service, violation of these Terms, or
                        infringement of any third-party rights.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        10. Governing Law
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        These Terms shall be governed by and construed in accordance with
                        the laws of the State of Delaware, United States, without regard
                        to conflict of law principles. Any disputes shall be resolved in
                        the courts located in Delaware.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        11. Changes to Terms
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We reserve the right to modify these Terms at any time. Material
                        changes will be communicated via email or prominent notice on the
                        Service. Continued use after changes constitutes acceptance.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        12. Contact Information
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        For questions about these Terms, please contact us at:
                        <br />
                        <a
                            href="mailto:legal@exogram.ai"
                            className="text-violet-400 hover:text-violet-300 transition-colors"
                        >
                            legal@exogram.ai
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}
