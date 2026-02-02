"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  BarChart3, 
  MessageCircle, 
  Brain, 
  Trophy,
  Zap,
  Target
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Live Scores & Schedules",
    description: "Real-time match scores, upcoming schedules, and live updates for ongoing games.",
    color: "var(--brand-primary)",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: MessageCircle,
    title: "Team Chat",
    description: "Coordinate with teammates, share availability, and manage match plans in group chats.",
    color: "var(--brand-secondary)",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Brain,
    title: "League & Tournaments",
    description: "Create and manage leagues, fixtures, and leaderboards for your community or club.",
    color: "var(--brand-accent)",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Trophy,
    title: "Challenges & Events",
    description: "Host events and challenges to engage your players and fill venue slots.",
    color: "#FFD700",
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    icon: Zap,
    title: "Quick Booking",
    description: "Book courts in seconds with one-tap reservations and instant confirmations.",
    color: "#A855F7",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Target,
    title: "Rewards & Points",
    description: "Earn points for bookings and participation; redeem rewards or free bookings.",
    color: "#EC4899",
    gradient: "from-pink-500/20 to-rose-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0F1C]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--brand-primary)] opacity-[0.03] blur-[100px] rounded-full" />

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
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 mb-4"
          >
            Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Excel</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful tools designed to track, analyze, and improve your athletic performance
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="feature-card group relative p-6 lg:p-8 rounded-2xl glass cursor-pointer"
            >
              {/* Icon */}
              <div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}
              >
                <feature.icon 
                  className="w-7 h-7" 
                  style={{ color: feature.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--brand-primary)] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${feature.color}10 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
