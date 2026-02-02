"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const featuredPost = {
  title: "Sportynix: New Features for Faster Bookings",
  excerpt: "A deep dive into our latest release focused on instant reservations, venue search improvements, and league tools.",
  image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1200&h=600&fit=crop",
  category: "Product",
  date: "Feb 1, 2026",
  readTime: "5 min read",
  slug: "sportynix-new-features"
};

const posts = [
  {
    title: "Top Tips for Finding the Best Indoor Courts Near You",
    excerpt: "How to evaluate venues, read reviews, and choose the best time slots to avoid crowds.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&h=400&fit=crop",
    category: "Guides",
    date: "Jan 20, 2026",
    readTime: "6 min read",
    slug: "finding-best-courts"
  },
  {
    title: "How to Run a Smooth Local League",
    excerpt: "Best practices for scheduling, scorekeeping, and communicating with teams.",
    image: "https://images.unsplash.com/photo-1541480606-277b4a4c6b2e?w=600&h=400&fit=crop",
    category: "Leagues",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    slug: "run-local-league"
  },
  {
    title: "Spotlight: Venue Partners Driving Community Sports",
    excerpt: "Stories from venues that increased bookings and community engagement with Sportynix.",
    image: "https://images.unsplash.com/photo-1520975913579-1c7e2d7b6a9d?w=600&h=400&fit=crop",
    category: "Stories",
    date: "Jan 10, 2026",
    readTime: "5 min read",
    slug: "venue-spotlight"
  },
  {
    title: "Sportynix 2.0: What's New in Our Latest Update",
    excerpt: "We've shipped useful booking and league-management features in our latest release.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    category: "Product",
    date: "Jan 5, 2026",
    readTime: "4 min read",
    slug: "sportynix-2-update"
  }
];

const categories = ["All", "Product", "Guides", "Leagues", "Venues", "Stories"];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F172A] pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                The Sportynix{" "}
                <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl text-gray-400">
                News, tips, and stories about bookings, leagues, and venue management
              </p>
            </motion.div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    index === 0
                      ? "bg-[var(--brand-primary)] text-[#0F172A]"
                      : "glass text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden glass group cursor-pointer"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500">Featured</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-[var(--brand-primary)] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden glass group cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors">
                Load More Articles
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-[#0A0F1C]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-gray-400 mb-8">
                Get the latest articles, tips, and updates delivered to your inbox weekly.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[var(--brand-primary)] text-[#0F172A] font-semibold hover:bg-[#00B8E6] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
