"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Clock, Send, MessageCircle, HelpCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Our support team will respond within 24 hours",
    value: "support@sportynix.app",
    href: "mailto:support@sportynix.app"
  },
  {
    icon: MessageCircle,
    title: "In-App Support",
    description: "Get help directly within the Sportynix app",
    value: "Open App",
    href: "#"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Available during business hours",
    value: "Contact via App",
    href: "#"
  }
];

const offices = [
  {
    city: "General Inquiries",
    address: "support@sportynix.app",
    country: "For app support and questions"
  },
  {
    city: "Business Partnerships",
    address: "partners@sportynix.app",
    country: "For venue partnerships"
  },
  {
    city: "Press & Media",
    address: "press@sportynix.app",
    country: "For media inquiries"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#0F172A] pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--brand-primary)] rounded-full blur-[128px] opacity-20" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 mb-6">
                Contact Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Get in{" "}
                <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-gray-400">
                Have a question, feedback, or just want to say hi? We&apos;d love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-[#0A0F1C]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass hover:bg-white/10 transition-colors group text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-7 h-7 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{method.description}</p>
                  <span className="text-[var(--brand-primary)] font-medium group-hover:underline">
                    {method.value}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl glass text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-secondary)]/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-[var(--brand-secondary)]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-gray-400">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)] transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--brand-primary)] transition-colors resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 rounded-full bg-[var(--brand-primary)] text-[#0F172A] font-semibold hover:bg-[#00B8E6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#0F172A]/30 border-t-[#0F172A] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Channels</h2>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-[var(--brand-primary)]" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{office.city}</h3>
                          <p className="text-sm text-[var(--brand-primary)]">{office.address}</p>
                          <p className="text-sm text-gray-500">{office.country}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl glass">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[var(--brand-primary)]" />
                    <h3 className="font-semibold">Response Times</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Email Support</span>
                      <span>Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">In-App Support</span>
                      <span>Within 12 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Booking Issues</span>
                      <span>Priority Response</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl glass">
                  <div className="flex items-center gap-3 mb-4">
                    <HelpCircle className="w-5 h-5 text-[var(--brand-primary)]" />
                    <h3 className="font-semibold">Common Questions</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• How do I book a slot?</li>
                    <li>• How do I create or join a team?</li>
                    <li>• How do I participate in leagues?</li>
                    <li>• How do I contact venue support?</li>
                  </ul>
                  <a href="/help" className="inline-block mt-4 text-[var(--brand-primary)] text-sm hover:underline">
                    Visit Help Center →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
