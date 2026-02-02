"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, ExternalLink, Mail } from "lucide-react";

const pressReleases = [
  {
    date: "Jan 15, 2026",
    title: "Sportynix Raises $25M Series B to Expand AI-Powered Coaching",
    excerpt: "Funding led by Andreessen Horowitz will accelerate product development and global expansion."
  },
  {
    date: "Dec 10, 2025",
    title: "Sportynix Reaches 50,000 Active Users Milestone",
    excerpt: "The AI-powered fitness app celebrates rapid growth across 100+ countries."
  },
  {
    date: "Oct 5, 2025",
    title: "Sportynix Partners with Major League Baseball",
    excerpt: "New partnership brings professional-grade analytics to amateur baseball players."
  },
  {
    date: "Aug 20, 2025",
    title: "Sportynix Launches Team Features for Coaches",
    excerpt: "New enterprise features enable coaches to track and manage entire teams."
  }
];

const mediaFeatures = [
  { name: "TechCrunch", logo: "TC" },
  { name: "Forbes", logo: "F" },
  { name: "ESPN", logo: "ESPN" },
  { name: "Wired", logo: "W" },
  { name: "The Verge", logo: "TV" }
];

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F172A] pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[var(--brand-accent)] rounded-full blur-[128px] opacity-20" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] border border-[var(--brand-accent)]/20 mb-6">
                Press Kit
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Sportynix in the{" "}
                <span className="text-gradient">News</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Resources for journalists, bloggers, and media professionals covering Sportynix.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-16 bg-[#0A0F1C]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Media Contact</h2>
                <p className="text-gray-400 mb-6">
                  For press inquiries, interviews, or media requests, please contact our communications team.
                </p>
                <a
                  href="mailto:press@sportynix.app"
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] hover:underline text-lg"
                >
                  <Mail className="w-5 h-5" />
                  press@sportynix.app
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <a
                  href="#"
                  className="p-6 rounded-2xl glass hover:bg-white/10 transition-colors group"
                >
                  <Download className="w-8 h-8 text-[var(--brand-primary)] mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-[var(--brand-primary)] transition-colors">
                    Brand Assets
                  </h3>
                  <p className="text-sm text-gray-500">Logos, icons, colors</p>
                </a>
                <a
                  href="#"
                  className="p-6 rounded-2xl glass hover:bg-white/10 transition-colors group"
                >
                  <Download className="w-8 h-8 text-[var(--brand-secondary)] mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-[var(--brand-secondary)] transition-colors">
                    Screenshots
                  </h3>
                  <p className="text-sm text-gray-500">App screenshots, mockups</p>
                </a>
                <a
                  href="#"
                  className="p-6 rounded-2xl glass hover:bg-white/10 transition-colors group"
                >
                  <Download className="w-8 h-8 text-[var(--brand-accent)] mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-[var(--brand-accent)] transition-colors">
                    Fact Sheet
                  </h3>
                  <p className="text-sm text-gray-500">Company info, stats</p>
                </a>
                <a
                  href="#"
                  className="p-6 rounded-2xl glass hover:bg-white/10 transition-colors group"
                >
                  <Download className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                    Executive Bios
                  </h3>
                  <p className="text-sm text-gray-500">Leadership team</p>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured In */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Featured In</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {mediaFeatures.map((media, index) => (
                <motion.div
                  key={media.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl font-bold text-gray-400"
                >
                  {media.name}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 bg-[#0A0F1C]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Press Releases</h2>
              <p className="text-gray-400">Latest news and announcements from Sportynix</p>
            </motion.div>

            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block p-6 rounded-2xl glass hover:bg-white/10 transition-colors group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-sm text-[var(--brand-primary)] mb-2 block">
                        {release.date}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                        {release.title}
                      </h3>
                      <p className="text-gray-400">{release.excerpt}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[var(--brand-primary)] transition-colors flex-shrink-0" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Company Facts */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Quick Facts</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Founded", value: "2024" },
                { label: "Headquarters", value: "San Francisco, CA" },
                { label: "Team Size", value: "50+ employees" },
                { label: "Total Funding", value: "$35M" }
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass text-center"
                >
                  <p className="text-gray-500 text-sm mb-1">{fact.label}</p>
                  <p className="text-2xl font-bold text-gradient">{fact.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
