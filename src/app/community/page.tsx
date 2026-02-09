"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, MessageSquare, Trophy, Calendar, ArrowRight, ExternalLink } from "lucide-react";

const communityStats = [
  { icon: Users, value: "1K+", label: "Community Members" },
  { icon: MessageSquare, value: "100K+", label: "Forum Posts" },
  { icon: Trophy, value: "500+", label: "Active Challenges" },
  { icon: Calendar, value: "100+", label: "Monthly Events" }
];

const featuredChallenges = [
  {
    title: "February Mile Challenge",
    description: "Run 100 miles this month and earn exclusive badges",
    participants: 12453,
    daysLeft: 26,
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&h=400&fit=crop"
  },
  {
    title: "Strength Squad",
    description: "Complete 20 strength workouts in 30 days",
    participants: 8921,
    daysLeft: 18,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
  },
  {
    title: "Early Bird Club",
    description: "Work out before 7am for 14 consecutive days",
    participants: 5632,
    daysLeft: 7,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop"
  }
];

const communityLinks = [
  {
    title: "Discord Server",
    description: "Join real-time discussions with fellow athletes",
    members: "25K members",
    href: "#",
    color: "#5865F2"
  },
  {
    title: "Reddit Community",
    description: "Share tips, ask questions, and connect",
    members: "15K members",
    href: "#",
    color: "#FF4500"
  },
  {
    title: "Facebook Group",
    description: "Join our private Facebook community",
    members: "10K members",
    href: "#",
    color: "#1877F2"
  },
  {
    title: "Strava Club",
    description: "Connect with us on Strava",
    members: "8K members",
    href: "#",
    color: "#FC4C02"
  }
];

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F172A] pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--brand-secondary)] rounded-full blur-[128px] opacity-20" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--brand-primary)] rounded-full blur-[128px] opacity-20" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)] border border-[var(--brand-secondary)]/20 mb-6">
                Community
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Join the{" "}
                <span className="text-gradient">Movement</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Connect with 50,000+ athletes worldwide. Share your journey, compete in challenges, and grow together.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--brand-primary)] text-[#0F172A] font-semibold hover:bg-[#00B8E6] transition-colors">
                Join the Community
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-[#0A0F1C]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl glass"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Challenges */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Active Challenges</h2>
              <p className="text-gray-400 text-lg">Compete with athletes worldwide</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden glass group cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={challenge.image}
                      alt={challenge.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-sm">
                      {challenge.daysLeft} days left
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{challenge.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">
                          {challenge.participants.toLocaleString()} participants
                        </span>
                      </div>
                      <button className="text-[var(--brand-primary)] text-sm font-medium hover:underline">
                        Join Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="py-20 bg-[#0A0F1C]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Connect With Us</h2>
              <p className="text-gray-400 text-lg">Join our community on your favorite platform</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass hover:bg-white/10 transition-colors group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${link.color}20` }}
                  >
                    <ExternalLink className="w-6 h-6" style={{ color: link.color }} />
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-[var(--brand-primary)] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{link.description}</p>
                  <span className="text-xs text-gray-600">{link.members}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass"
            >
              <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
              <p className="text-gray-400 mb-6">
                We&apos;re committed to creating a positive, supportive environment for all athletes. 
                Be respectful, encourage others, and celebrate every victory—big or small.
              </p>
              <a
                href="#"
                className="text-[var(--brand-primary)] font-medium hover:underline"
              >
                Read Full Guidelines →
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
