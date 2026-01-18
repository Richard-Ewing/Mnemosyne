import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Mnemosyne",
    description:
        "Privacy Policy for Mnemosyne Semantic Memory Governance Infrastructure. Learn how we protect your data.",
};

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="prose prose-invert prose-lg max-w-none">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Privacy Policy
                </h1>
                <p className="text-gray-400 mb-12">Last Updated: January 17, 2026</p>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        1. Introduction
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Mnemosyne (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
                        privacy. This Privacy Policy explains how we collect, use, store,
                        and protect your personal information when you use our semantic
                        memory governance infrastructure.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        2. Data Collection
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        We collect the following types of data:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>
                            <strong className="text-white">Account Information:</strong>{" "}
                            Email address, name, and authentication credentials
                        </li>
                        <li>
                            <strong className="text-white">Memory Content:</strong>{" "}
                            User-selected text and content you explicitly choose to store
                        </li>
                        <li>
                            <strong className="text-white">Usage Metadata:</strong> Source
                            URLs, timestamps, and interaction patterns
                        </li>
                        <li>
                            <strong className="text-white">Technical Data:</strong> Browser
                            type, IP address (hashed), and device information for security
                        </li>
                    </ul>
                    <div className="mt-4 p-4 rounded-lg bg-violet-500/10 border border-violet-500/30">
                        <p className="text-violet-200 text-sm">
                            <strong>Important:</strong> We do NOT automatically collect
                            browsing history. Memory capture occurs ONLY upon your explicit
                            action via the context menu.
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        3. PII Scrubbing &amp; Redaction
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Before storage, all content passes through our automated PII
                        (Personally Identifiable Information) scrubbing system. The
                        following patterns are automatically detected and redacted:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                        <li>Social Security Numbers (SSN)</li>
                        <li>Email addresses</li>
                        <li>Phone numbers</li>
                        <li>Credit card numbers</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Redacted content is replaced with{" "}
                        <code className="px-2 py-1 rounded bg-white/10 text-violet-300">
                            [REDACTED]
                        </code>{" "}
                        markers.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        4. Data Security &amp; Encryption
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Your data is protected with industry-leading security measures:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>
                            <strong className="text-white">Encryption at Rest:</strong>{" "}
                            AES-256 encryption using Fernet (user-controlled keys)
                        </li>
                        <li>
                            <strong className="text-white">Encryption in Transit:</strong>{" "}
                            All communications over TLS 1.3
                        </li>
                        <li>
                            <strong className="text-white">Row Level Security:</strong>{" "}
                            PostgreSQL RLS ensures users can only access their own data
                        </li>
                        <li>
                            <strong className="text-white">Audit Logging:</strong> Immutable
                            logs of all data access and modifications
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        5. Third-Party Services
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        We use the following third-party services to provide the Service:
                    </p>
                    <table className="w-full text-left text-gray-300 mt-4">
                        <thead className="border-b border-white/10">
                            <tr>
                                <th className="py-3 text-white">Service</th>
                                <th className="py-3 text-white">Purpose</th>
                                <th className="py-3 text-white">Data Shared</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr>
                                <td className="py-3">Supabase</td>
                                <td className="py-3">Authentication &amp; Database</td>
                                <td className="py-3">Encrypted content, metadata</td>
                            </tr>
                            <tr>
                                <td className="py-3">Pinecone</td>
                                <td className="py-3">Vector indexing</td>
                                <td className="py-3">Semantic embeddings (not raw text)</td>
                            </tr>
                            <tr>
                                <td className="py-3">OpenAI</td>
                                <td className="py-3">Embeddings &amp; Arbitration</td>
                                <td className="py-3">Anonymized text snippets</td>
                            </tr>
                            <tr>
                                <td className="py-3">Stripe</td>
                                <td className="py-3">Payment processing</td>
                                <td className="py-3">Billing information only</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        6. Your Rights
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        You have the following rights regarding your data:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>
                            <strong className="text-white">Access:</strong> Request a copy
                            of all data we hold about you
                        </li>
                        <li>
                            <strong className="text-white">Correction:</strong> Update or
                            correct inaccurate information
                        </li>
                        <li>
                            <strong className="text-white">Deletion:</strong> Request
                            complete deletion of your account and all associated data
                        </li>
                        <li>
                            <strong className="text-white">Export:</strong> Download all
                            your memories in standard formats
                        </li>
                        <li>
                            <strong className="text-white">Portability:</strong> Transfer
                            your data to another service
                        </li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        To exercise these rights, use the Dashboard settings or contact
                        us at{" "}
                        <a
                            href="mailto:privacy@mnemosyne.app"
                            className="text-violet-400 hover:text-violet-300 transition-colors"
                        >
                            privacy@mnemosyne.app
                        </a>
                        .
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        7. Data Retention
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>
                            <strong className="text-white">Active Data:</strong> Retained
                            for the duration of your account
                        </li>
                        <li>
                            <strong className="text-white">Deleted Data:</strong> Hard
                            deleted from database and vector store immediately upon request
                        </li>
                        <li>
                            <strong className="text-white">Backups:</strong> Encrypted
                            backups retained for 30 days, then permanently purged
                        </li>
                        <li>
                            <strong className="text-white">Audit Logs:</strong> Retained for
                            7 years for compliance purposes
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        8. GDPR Compliance
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        For users in the European Economic Area (EEA), we comply with
                        GDPR requirements. Our lawful basis for processing is:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                        <li>
                            <strong className="text-white">Contract:</strong> Processing
                            necessary to provide the Service
                        </li>
                        <li>
                            <strong className="text-white">Consent:</strong> For optional
                            features and marketing communications
                        </li>
                        <li>
                            <strong className="text-white">Legitimate Interest:</strong> For
                            security and fraud prevention
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        9. Cookies &amp; Tracking
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We use essential cookies only for authentication and session
                        management. We do NOT use third-party advertising or analytics
                        trackers. You can manage cookie preferences in your browser
                        settings.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        10. Children&apos;s Privacy
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Mnemosyne is not intended for users under 16 years of age. We do
                        not knowingly collect data from children. If we learn that we
                        have collected data from a child, we will delete it promptly.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        11. Changes to This Policy
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We may update this Privacy Policy periodically. Material changes
                        will be communicated via email and/or prominent notice on the
                        Service at least 30 days before taking effect.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        12. Contact Us
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        For privacy-related inquiries, contact our Data Protection team:
                        <br />
                        <a
                            href="mailto:privacy@mnemosyne.app"
                            className="text-violet-400 hover:text-violet-300 transition-colors"
                        >
                            privacy@mnemosyne.app
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}
