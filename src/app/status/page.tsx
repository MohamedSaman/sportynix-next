"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, AlertCircle, Clock, Activity, Server, Smartphone, Globe, Database } from "lucide-react";

const services = [
  { name: "API Services", status: "operational", icon: Server, uptime: "99.99%" },
  { name: "Mobile App (iOS)", status: "operational", icon: Smartphone, uptime: "99.98%" },
  { name: "Mobile App (Android)", status: "operational", icon: Smartphone, uptime: "99.97%" },
  { name: "Web Dashboard", status: "operational", icon: Globe, uptime: "99.99%" },
  { name: "AI Coach", status: "operational", icon: Activity, uptime: "99.95%" },
  { name: "Database", status: "operational", icon: Database, uptime: "99.99%" }
];

const incidents = [
  {
    date: "Jan 28, 2026",
    title: "Scheduled Maintenance Complete",
    status: "resolved",
    description: "We completed scheduled maintenance on our database infrastructure. All services are operating normally."
  },
  {
    date: "Jan 15, 2026",
    title: "Minor API Latency",
    status: "resolved",
    description: "Some users experienced increased latency on API requests. Issue was identified and resolved within 30 minutes."
  },
  {
    date: "Jan 5, 2026",
    title: "Push Notification Delay",
    status: "resolved",
    description: "Push notifications were delayed by approximately 15 minutes due to a third-party service issue."
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "operational":
      return "text-[var(--brand-secondary)]";
    case "degraded":
      return "text-yellow-400";
    case "outage":
      return "text-red-400";
    default:
      return "text-gray-400";
  }
};

const getStatusBg = (status: string) => {
  switch (status) {
    case "operational":
      return "bg-[var(--brand-secondary)]";
    case "degraded":
      return "bg-yellow-400";
    case "outage":
      return "bg-red-400";
    default:
      return "bg-gray-400";
  }
};

export default function StatusPage() {
  const allOperational = services.every(s => s.status === "operational");

  return (
    <>
      <Navbar />
      <main className="bg-[#0F172A] pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-20 h-20 rounded-full ${allOperational ? 'bg-[var(--brand-secondary)]/10' : 'bg-yellow-400/10'} flex items-center justify-center mx-auto mb-6`}>
                {allOperational ? (
                  <CheckCircle2 className="w-10 h-10 text-[var(--brand-secondary)]" />
                ) : (
                  <AlertCircle className="w-10 h-10 text-yellow-400" />
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {allOperational ? (
                  <span className="text-[var(--brand-secondary)]">All Systems Operational</span>
                ) : (
                  <span className="text-yellow-400">Some Systems Degraded</span>
                )}
              </h1>
              <p className="text-xl text-gray-400">
                Current status of Sportynix services and infrastructure
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {new Date().toLocaleString()}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 bg-[#0A0F1C]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Service Status</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 rounded-xl glass"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-gray-500">Uptime: {service.uptime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium capitalize ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                    <div className={`w-3 h-3 rounded-full ${getStatusBg(service.status)}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Uptime Chart Placeholder */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">90-Day Uptime</h2>
            <div className="p-6 rounded-2xl glass">
              <div className="flex items-end gap-1 h-24">
                {[...Array(90)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm ${
                      Math.random() > 0.02 
                        ? 'bg-[var(--brand-secondary)]' 
                        : 'bg-yellow-400'
                    }`}
                    style={{ height: `${80 + Math.random() * 20}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <span>90 days ago</span>
                <span>Today</span>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Overall Uptime</p>
                  <p className="text-2xl font-bold text-[var(--brand-secondary)]">99.98%</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-[var(--brand-secondary)]" />
                    <span className="text-sm text-gray-400">Operational</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-yellow-400" />
                    <span className="text-sm text-gray-400">Degraded</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Incident History */}
        <section className="py-16 bg-[#0A0F1C]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Incident History</h2>
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-sm text-gray-500">{incident.date}</span>
                      <h3 className="text-lg font-semibold">{incident.title}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)] capitalize">
                      {incident.status}
                    </span>
                  </div>
                  <p className="text-gray-400">{incident.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section className="py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass"
            >
              <Clock className="w-12 h-12 text-[var(--brand-primary)] mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Get Status Updates</h2>
              <p className="text-gray-400 mb-6">
                Subscribe to receive notifications about service disruptions and maintenance.
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
