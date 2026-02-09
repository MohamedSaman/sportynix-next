"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Download, Star, Trophy } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Active Players",
    color: "var(--brand-primary)"
  },
  {
    icon: Download,
    value: 1000,
    suffix: "+",
    label: "App Downloads",
    color: "var(--brand-secondary)"
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "",
    label: "App Store Rating",
    color: "#FFD700",
    decimals: 1
  },
  {
    icon: Trophy,
    value: 25000,
    suffix: "+",
    label: "Bookings Completed",
    color: "var(--brand-accent)"
  }
];

function Counter({ 
  value, 
  suffix, 
  decimals = 0,
  isInView 
}: { 
  value: number; 
  suffix: string;
  decimals?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isInView]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <span>
      {formatNumber(count)}{suffix}
    </span>
  );
}

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0A0F1C] to-[#0F172A]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-secondary)]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by{" "}
            <span className="text-gradient">Players & Venues</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of players and venues using Sportynix to manage bookings and leagues
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 lg:p-8 rounded-2xl glass"
            >
              <div 
                className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${stat.color}20 0%, transparent 100%)`,
                  border: `1px solid ${stat.color}30`
                }}
              >
                <stat.icon 
                  className="w-7 h-7" 
                  style={{ color: stat.color }}
                />
              </div>
              <div 
                className="text-3xl lg:text-4xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                <Counter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  isInView={isInView}
                />
              </div>
              <p className="text-gray-400 text-sm lg:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brands/Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50">
            {["Webxkey", "Forbes", "ESPN", "Wired", "The Verge"].map((brand) => (
              <span 
                key={brand}
                className="text-xl lg:text-2xl font-bold text-gray-400"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
