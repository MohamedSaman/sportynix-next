"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "League Organizer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Sportynix made running our local indoor league effortless — scheduling, results, and communication all in one place.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Player",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "Booking courts is instant and reliable. I can find available slots nearby and reserve them in seconds.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Venue Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "We increased bookings and filled off-peak slots after listing on Sportynix. The calendar and payments integration is great.",
    rating: 5
  }
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="relative py-24 lg:py-32 overflow-hidden bg-[#0F172A]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--brand-primary)] opacity-[0.02] blur-[100px] rounded-full" />
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
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by{" "}
            <span className="text-gradient">Players & Organizers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of players, organizers, and venues using Sportynix to simplify bookings and events
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-6 lg:p-8 rounded-2xl glass group hover:bg-white/[0.08] transition-all"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--brand-primary)] opacity-20 group-hover:opacity-40 transition-opacity" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6">
                &quot;{review.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
                  unoptimized
                />
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass">
            <div className="flex -space-x-3">
              {reviews.map((review) => (
                <Image
                  key={review.id}
                  src={review.avatar}
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-[#0F172A]"
                  unoptimized
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white">4.9/5 Average Rating</p>
              <p className="text-xs text-gray-500">Based on 12,000+ reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
