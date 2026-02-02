"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, DollarSign, ArrowRight, Heart, Zap, Globe, Coffee } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage" },
  { icon: Zap, title: "Equity Package", description: "Competitive stock options for all employees" },
  { icon: Globe, title: "Remote-First", description: "Work from anywhere in the world" },
  { icon: Coffee, title: "Unlimited PTO", description: "Take the time you need to recharge" }
];

const jobs = [
  {
    title: "Senior iOS Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$150K - $200K",
    description: "Build the next generation of our iOS app with Swift and SwiftUI."
  },
  {
    title: "ML Engineer",
    department: "AI/ML",
    location: "San Francisco / Remote",
    type: "Full-time",
    salary: "$160K - $220K",
    description: "Develop ML features for smart availability predictions, dynamic pricing, and booking recommendations."
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$120K - $160K",
    description: "Create beautiful, intuitive experiences for players and venue managers."
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "New York / Remote",
    type: "Full-time",
    salary: "$100K - $140K",
    description: "Drive user acquisition and engagement through creative campaigns."
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$140K - $190K",
    description: "Scale our infrastructure to support millions of concurrent users."
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    salary: "$80K - $110K",
    description: "Help our enterprise clients get the most out of Sportynix."
  }
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F172A] pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--brand-secondary)] rounded-full blur-[128px] opacity-20" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)] border border-[var(--brand-secondary)]/20 mb-6">
                We&apos;re Hiring
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Join Our{" "}
                <span className="text-gradient">Mission</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Help us empower players and venues worldwide. We&apos;re looking for passionate people who want to make a difference in the sports booking space.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[#0A0F1C]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Sportynix?</h2>
              <p className="text-gray-400 text-lg">We take care of our team so they can take care of players and venue partners</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-gray-400 text-lg">Find your perfect role</p>
            </motion.div>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-2xl glass hover:bg-white/[0.08] transition-all cursor-pointer group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-[var(--brand-primary)] transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full text-xs bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" /> {job.salary}
                        </span>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--brand-primary)] text-[#0F172A] font-semibold text-sm hover:bg-[#00B8E6] transition-colors">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12 p-8 rounded-2xl glass"
            >
              <h3 className="text-xl font-semibold mb-2">Don&apos;t see the right role?</h3>
              <p className="text-gray-400 mb-4">
                We&apos;re always looking for talented people. Send us your resume!
              </p>
              <a
                href="mailto:careers@sportynix.app"
                className="text-[var(--brand-primary)] hover:underline"
              >
                careers@sportynix.app
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
