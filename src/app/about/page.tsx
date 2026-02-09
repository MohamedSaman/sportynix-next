"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Zap, Users, Calendar, MessageCircle, Trophy, MapPin } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Making sports venue booking seamless and accessible to all players.",
    color: "var(--brand-primary)"
  },
  {
    icon: Heart,
    title: "Player-First",
    description: "Every feature is designed with the player&apos;s experience in mind.",
    color: "var(--brand-secondary)"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging real-time technology for instant bookings and live updates.",
    color: "var(--brand-accent)"
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections between players, teams, and sports enthusiasts.",
    color: "#A855F7"
  }
];

const features = [
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Book indoor sports venues in seconds with real-time availability"
  },
  {
    icon: MessageCircle,
    title: "Team Chat",
    description: "Coordinate with teammates through instant messaging and voice notes"
  },
  {
    icon: Trophy,
    title: "Leagues & Tournaments",
    description: "Participate in cricket leagues with live scoring and standings"
  },
  {
    icon: MapPin,
    title: "Discover Venues",
    description: "Find the best sports facilities near you with ratings and reviews"
  }
];

const team = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Former Olympic athlete turned tech entrepreneur"
  },
  {
    name: "Sarah Kim",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Ex-Google ML engineer with passion for fitness"
  },
  {
    name: "Marcus Johnson",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    bio: "10+ years building consumer fitness products"
  },
  {
    name: "Emily Chen",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    bio: "Award-winning UX designer from Apple"
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F172A] pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--brand-primary)] rounded-full blur-[128px] opacity-20" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--brand-secondary)] rounded-full blur-[128px] opacity-20" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 mb-6">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Book. Play.{" "}
                <span className="text-gradient">Connect.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Sportynix is your all-in-one platform for discovering indoor sports venues, booking slots instantly, managing teams, and connecting with the sports community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-[#0A0F1C]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Sportynix started with a simple frustration: finding and booking indoor sports venues was way too complicated. Endless phone calls, uncertain availability, and no easy way to coordinate with teammates.
                  </p>
                  <p>
                    We built Sportynix to solve this. Our platform brings real-time venue booking, instant team communication, and organized leagues all into one seamless experience.
                  </p>
                  <p>
                    Today, Sportynix helps thousands of players discover venues, book slots in seconds, create teams, challenge opponents, and participate in exciting cricket leagues with live scoring.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-video rounded-2xl overflow-hidden glass">
                  <Image
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop"
                    alt="Indoor sports venue"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Offer</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Everything you need to enjoy indoor sports
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass text-center"
                >
                  <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/30">
                    <feature.icon className="w-7 h-7 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#0A0F1C]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass text-center"
                >
                  <div
                    className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${value.color}20 0%, transparent 100%)`,
                      border: `1px solid ${value.color}30`
                    }}
                  >
                    <value.icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "1K+", label: "Active Users" },
                { value: "50+", label: "Partner Venues" },
                { value: "10K+", label: "Bookings Made" },
                { value: "4.8", label: "App Rating" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* App Features Highlight */}
        <section className="py-20 bg-[#0A0F1C]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key App Features</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Designed for the best indoor sports experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Real-Time Slot Availability",
                  description: "See live availability and book instantly with WebSocket-powered updates"
                },
                {
                  title: "Team Management",
                  description: "Create teams, invite members, and manage your squad effortlessly"
                },
                {
                  title: "Instant Messaging",
                  description: "Chat with teammates, send voice messages, and share media"
                },
                {
                  title: "Cricket Live Scoring",
                  description: "Score matches in real-time with ball-by-ball updates"
                },
                {
                  title: "Challenge System",
                  description: "Challenge other teams and track your win/loss record"
                },
                {
                  title: "QR Code Check-in",
                  description: "Seamless venue check-in with generated QR codes"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl glass"
                >
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
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
