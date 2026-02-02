"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ChevronDown, Book, Smartphone, CreditCard, Settings, Users, Shield, MessageCircle } from "lucide-react";

const categories = [
  { icon: Smartphone, name: "Getting Started", count: 12 },
  { icon: Book, name: "Workouts & Training", count: 18 },
  { icon: Users, name: "Teams & Social", count: 8 },
  { icon: CreditCard, name: "Billing & Plans", count: 10 },
  { icon: Settings, name: "Account Settings", count: 14 },
  { icon: Shield, name: "Privacy & Security", count: 6 }
];

const faqs = [
  {
    question: "How do I connect my fitness wearable to Sportynix?",
    answer: "Go to Settings > Connected Devices > Add Device. We support Apple Watch, Garmin, Fitbit, Whoop, and many more. Select your device and follow the pairing instructions."
  },
  {
    question: "Can I use Sportynix without a wearable device?",
    answer: "Absolutely! Sportynix works great with just your smartphone. We use your phone's sensors to track activities like running, cycling, and gym workouts. A wearable just adds more data like heart rate monitoring."
  },
  {
    question: "How does the AI Coach create personalized plans?",
    answer: "Our AI analyzes your workout history, goals, fitness level, available time, and recovery patterns to create a training plan unique to you. The plan adapts weekly based on your progress and feedback."
  },
  {
    question: "What's included in the Premium subscription?",
    answer: "Premium includes: AI-powered personalized coaching, advanced analytics, unlimited workout history, team features, video analysis, and priority customer support. You also get early access to new features."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel anytime from Settings > Subscription > Manage Plan. Your access continues until the end of your billing period. We also offer a 30-day money-back guarantee for new subscribers."
  },
  {
    question: "Is my health data secure?",
    answer: "Yes, we take data security very seriously. All data is encrypted in transit and at rest. We're HIPAA compliant and never sell your personal health data. You can export or delete your data anytime."
  },
  {
    question: "How do team challenges work?",
    answer: "Create or join a team, then start a challenge with your teammates. You can compete on metrics like total distance, workout streaks, or calories burned. Leaderboards update in real-time."
  },
  {
    question: "Can I export my workout data?",
    answer: "Yes! Go to Settings > Data > Export. You can export your data in various formats including CSV, JSON, and FIT files compatible with other fitness platforms."
  }
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="bg-[#0F172A] pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--brand-primary)] rounded-full blur-[150px] opacity-10" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                How can we{" "}
                <span className="text-gradient">help?</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Search our knowledge base or browse categories below
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)] transition-colors"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-[#0A0F1C]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl glass hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[var(--brand-primary)] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">{category.count} articles</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">Quick answers to common questions</p>
            </motion.div>

            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl glass overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-6 text-gray-400">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No results found for &quot;{searchQuery}&quot;</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-[#0A0F1C]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-[var(--brand-primary)]" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
              <p className="text-gray-400 mb-8">
                Our support team is available 24/7 to assist you with any questions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--brand-primary)] text-[#0F172A] font-semibold hover:bg-[#00B8E6] transition-colors"
              >
                Contact Support
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
