"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Download, Trash2, Eye, Edit, Lock } from "lucide-react";

const rights = [
  {
    icon: Eye,
    title: "Right to Access",
    description: "You have the right to request a copy of all personal data we hold about you."
  },
  {
    icon: Edit,
    title: "Right to Rectification",
    description: "You can request correction of inaccurate or incomplete personal data."
  },
  {
    icon: Trash2,
    title: "Right to Erasure",
    description: "You can request deletion of your personal data in certain circumstances."
  },
  {
    icon: Lock,
    title: "Right to Restriction",
    description: "You can request that we limit the processing of your personal data."
  },
  {
    icon: Download,
    title: "Right to Portability",
    description: "You can request your data in a structured, machine-readable format."
  },
  {
    icon: Shield,
    title: "Right to Object",
    description: "You can object to processing of your personal data in certain situations."
  }
];

export default function GDPRPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F172A] pt-20">
        <article className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-secondary)]/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-[var(--brand-secondary)]" />
                </div>
                <div>
                  <span className="text-[var(--brand-primary)] text-sm font-medium">
                    Last updated: February 1, 2026
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold">
                    GDPR Compliance
                  </h1>
                </div>
              </div>

              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-400 text-xl leading-relaxed mb-8">
                  Sportynix is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR). This page outlines your rights and how we protect your data in our venue booking mobile app.
                </p>

                <div className="p-6 rounded-2xl bg-[var(--brand-secondary)]/10 border border-[var(--brand-secondary)]/20 mb-12">
                  <h3 className="text-lg font-semibold text-[var(--brand-secondary)] mb-2">Our Commitment</h3>
                  <p className="text-gray-300">
                    We process your personal data lawfully, fairly, and transparently. We collect only what&apos;s necessary, keep it accurate, and protect it with industry-standard security measures.
                  </p>
                </div>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Your Rights Under GDPR</h2>
                  <p className="text-gray-400 mb-6">
                    As a resident of the European Economic Area (EEA), you have the following rights regarding your personal data:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {rights.map((right, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-xl glass"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4">
                          <right.icon className="w-5 h-5 text-[var(--brand-primary)]" />
                        </div>
                        <h3 className="font-semibold mb-2">{right.title}</h3>
                        <p className="text-sm text-gray-400">{right.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Lawful Basis for Processing</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>We process your personal data under the following legal bases:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong className="text-white">Contract:</strong> Processing necessary to provide our services to you</li>
                      <li><strong className="text-white">Consent:</strong> Where you have given explicit consent for specific purposes</li>
                      <li><strong className="text-white">Legitimate Interest:</strong> For improving our services and preventing fraud</li>
                      <li><strong className="text-white">Legal Obligation:</strong> When required by law</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Data We Collect</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 font-semibold">Category</th>
                          <th className="text-left py-3 px-4 font-semibold">Data Types</th>
                          <th className="text-left py-3 px-4 font-semibold">Purpose</th>
                          <th className="text-left py-3 px-4 font-semibold">Retention</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-400">
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-4">Identity</td>
                          <td className="py-3 px-4">Name, email, phone, profile photo</td>
                          <td className="py-3 px-4">Account management</td>
                          <td className="py-3 px-4">Until account deletion</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-4">Authentication</td>
                          <td className="py-3 px-4">Google OAuth data, JWT tokens</td>
                          <td className="py-3 px-4">Secure login</td>
                          <td className="py-3 px-4">Until logout/expiry</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-4">Booking</td>
                          <td className="py-3 px-4">Reservations, slots, venues</td>
                          <td className="py-3 px-4">Service delivery</td>
                          <td className="py-3 px-4">Until account deletion</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-4">Communication</td>
                          <td className="py-3 px-4">Chat messages, voice notes</td>
                          <td className="py-3 px-4">Team & venue chat</td>
                          <td className="py-3 px-4">Until account deletion</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-4">Technical</td>
                          <td className="py-3 px-4">Device info, OneSignal ID</td>
                          <td className="py-3 px-4">Push notifications</td>
                          <td className="py-3 px-4">Until app uninstall</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-4">Location</td>
                          <td className="py-3 px-4">GPS coordinates</td>
                          <td className="py-3 px-4">Find nearby venues</td>
                          <td className="py-3 px-4">Session only</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">International Transfers</h2>
                  <p className="text-gray-400">
                    Your data may be transferred to and processed in countries outside the EEA, including the United States. We ensure adequate protection through:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 mt-4">
                    <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                    <li>Data Processing Agreements with all sub-processors</li>
                    <li>Regular compliance assessments</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Data Protection Officer</h2>
                  <p className="text-gray-400 mb-4">
                    We have appointed a Data Protection Officer (DPO) to oversee our data protection strategy and ensure GDPR compliance.
                  </p>
                  <div className="p-6 rounded-xl glass">
                    <p className="font-medium">Data Protection Officer</p>
                    <p className="text-gray-400">Sportynix, Inc.</p>
                    <a href="mailto:dpo@sportynix.app" className="text-[var(--brand-primary)] hover:underline">
                      dpo@sportynix.app
                    </a>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Exercising Your Rights</h2>
                  <p className="text-gray-400 mb-6">
                    You can exercise your GDPR rights through multiple channels:
                  </p>
                  <div className="space-y-4">
                    <div className="p-6 rounded-xl glass">
                      <h3 className="font-semibold mb-2">In-App Settings</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Open the Sportynix app → Profile → Settings → Privacy to manage your data preferences, request data export, or delete your account.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl glass">
                      <h3 className="font-semibold mb-2">Email Request</h3>
                      <p className="text-gray-400 text-sm mb-2">
                        Send your request to our support team or DPO. We will respond within 30 days.
                      </p>
                      <a href="mailto:privacy@sportynix.app" className="text-[var(--brand-primary)] hover:underline block">
                        privacy@sportynix.app
                      </a>
                      <a href="mailto:dpo@sportynix.app" className="text-[var(--brand-primary)] hover:underline">
                        dpo@sportynix.app
                      </a>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Data Breach Notification</h2>
                  <p className="text-gray-400">
                    In the event of a personal data breach, we will notify the relevant supervisory authority within 72 hours and affected individuals without undue delay if the breach is likely to result in high risk to their rights and freedoms.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Supervisory Authority</h2>
                  <p className="text-gray-400">
                    You have the right to lodge a complaint with a supervisory authority if you believe your data protection rights have been violated. Our lead supervisory authority is:
                  </p>
                  <div className="mt-4 p-6 rounded-xl glass">
                    <p className="font-medium">Irish Data Protection Commission</p>
                    <p className="text-gray-400">21 Fitzwilliam Square South</p>
                    <p className="text-gray-400">Dublin 2, D02 RD28, Ireland</p>
                    <a href="https://www.dataprotection.ie" className="text-[var(--brand-primary)] hover:underline">
                      www.dataprotection.ie
                    </a>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Updates to This Notice</h2>
                  <p className="text-gray-400">
                    We may update this GDPR notice from time to time. We will notify you of any material changes via email or in-app notification. The &quot;Last updated&quot; date at the top indicates when this notice was last revised.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
