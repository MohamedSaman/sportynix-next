"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, User, PlayCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download the App",
    description: "Get Sportynix free on iOS or Android. Quick setup to start booking venues.",
    color: "var(--brand-primary)"
  },
  {
    number: "02",
    icon: User,
    title: "Create Your Profile",
    description: "Create a player or organizer profile, add team members, and set availability.",
    color: "var(--brand-secondary)"
  },
  {
    number: "03",
    icon: PlayCircle,
    title: "Build Your Profile ",
    description: "Browse nearby venues, check availability, and save favorites for quick booking.",
    color: "var(--brand-accent)"
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track & Improve",
    description: "Manage bookings, track match results, and run leagues with live score updates.",
    color: "#A855F7"
  }
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden bg-[#0F172A]">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)] border border-[var(--brand-secondary)]/20 mb-4"
          >
            How it Works
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Start in{" "}
            <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From download to your first booking in under 2 minutes
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[#A855F7] opacity-30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center lg:text-left"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex flex-col items-center lg:items-start mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 relative z-10"
                    style={{ 
                      background: `linear-gradient(135deg, ${step.color}20 0%, transparent 100%)`,
                      border: `1px solid ${step.color}30`
                    }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  {/* Step Number Badge */}
                  <span 
                    className="absolute -top-2 -right-2 lg:right-auto lg:-left-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold z-20"
                    style={{ 
                      backgroundColor: step.color,
                      color: '#0F172A'
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
