"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Database, Shield, Bell, MapPin, BarChart, Key, Smartphone, HardDrive } from "lucide-react";

const dataTypes = [
  {
    icon: Shield,
    name: "Authentication Data",
    description: "Secure tokens and session information for keeping you logged in.",
    examples: ["JWT access tokens", "Refresh tokens", "Google Sign-In credentials"],
    retention: "Until logout or token expiry"
  },
  {
    icon: Database,
    name: "Local Storage (AsyncStorage)",
    description: "App data stored on your device for offline access and faster loading.",
    examples: ["User preferences", "Cached venue data", "Draft messages", "Recent searches"],
    retention: "Until app data cleared"
  },
  {
    icon: Bell,
    name: "Push Notification Data",
    description: "OneSignal player ID and notification preferences for real-time updates.",
    examples: ["Device token", "Notification preferences", "Subscription status"],
    retention: "Until app uninstalled"
  },
  {
    icon: MapPin,
    name: "Location Data",
    description: "Location information used to show nearby venues and enable booking features.",
    examples: ["GPS coordinates", "Venue proximity", "Search location history"],
    retention: "Session only (not stored)"
  },
  {
    icon: BarChart,
    name: "Usage Analytics",
    description: "Anonymous usage data to help us improve the app experience.",
    examples: ["Feature usage patterns", "App performance metrics", "Crash reports"],
    retention: "90 days"
  },
  {
    icon: HardDrive,
    name: "Media Cache",
    description: "Temporarily stored images and media for faster loading.",
    examples: ["Venue photos", "Profile pictures", "Chat media thumbnails"],
    retention: "Automatic cleanup"
  }
];

const thirdPartyServices = [
  {
    name: "Google OAuth 2.0",
    purpose: "Authentication",
    dataCollected: "Email, name, profile picture",
    privacyUrl: "https://policies.google.com/privacy"
  },
  {
    name: "OneSignal",
    purpose: "Push Notifications",
    dataCollected: "Device token, app usage for notifications",
    privacyUrl: "https://onesignal.com/privacy_policy"
  },
  {
    name: "Google Maps",
    purpose: "Venue Location & Maps",
    dataCollected: "Location data for map display",
    privacyUrl: "https://policies.google.com/privacy"
  }
];

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F172A] pt-20">
        <article className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-[var(--brand-primary)]" />
                </div>
                <div>
                  <span className="text-[var(--brand-primary)] text-sm font-medium">
                    Last updated: February 1, 2026
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold">
                    Data Storage & Tracking
                  </h1>
                </div>
              </div>

              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-400 text-xl leading-relaxed mb-8">
                  This policy explains how the Sportynix mobile app stores data on your device and uses tracking technologies to provide a seamless venue booking experience.
                </p>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Mobile App Data Storage</h2>
                  <p className="text-gray-400">
                    As a mobile application, Sportynix uses various on-device storage mechanisms instead of traditional web cookies. This includes secure token storage for authentication, local data caching for offline access, and device identifiers for push notifications.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Types of Data We Store</h2>
                  <p className="text-gray-400 mb-6">
                    Below are the categories of data stored on your device when using the Sportynix app:
                  </p>

                  <div className="space-y-4">
                    {dataTypes.map((type, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-2xl glass"
                      >
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0">
                            <type.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{type.name}</h3>
                            <p className="text-sm text-gray-400 mb-3">{type.description}</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {type.examples.map((example, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 rounded text-xs bg-white/5 text-gray-500"
                                >
                                  {example}
                                </span>
                              ))}
                            </div>
                            <p className="text-xs text-gray-500">
                              <Key className="w-3 h-3 inline mr-1" />
                              Retention: {type.retention}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                  <p className="text-gray-400 mb-4">
                    The following third-party services may collect or process data when you use the app:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 font-semibold">Service</th>
                          <th className="text-left py-3 px-4 font-semibold">Purpose</th>
                          <th className="text-left py-3 px-4 font-semibold">Data Collected</th>
                          <th className="text-left py-3 px-4 font-semibold">Privacy</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-400">
                        {thirdPartyServices.map((service, index) => (
                          <tr key={index} className="border-b border-white/5">
                            <td className="py-3 px-4 font-medium text-white">{service.name}</td>
                            <td className="py-3 px-4">{service.purpose}</td>
                            <td className="py-3 px-4">{service.dataCollected}</td>
                            <td className="py-3 px-4">
                              <a 
                                href={service.privacyUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[var(--brand-primary)] hover:underline"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Managing Your Data</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>
                      You have control over the data stored on your device:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong className="text-white">Clear App Data:</strong> Go to your device Settings → Apps → Sportynix → Clear Data</li>
                      <li><strong className="text-white">Manage Notifications:</strong> Control push notifications in app settings or device settings</li>
                      <li><strong className="text-white">Location Permissions:</strong> Manage location access in your device&apos;s privacy settings</li>
                      <li><strong className="text-white">Log Out:</strong> Signing out removes authentication tokens from your device</li>
                      <li><strong className="text-white">Delete Account:</strong> Request account deletion to remove all server-side data</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">App Permissions</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>
                      The Sportynix app requests the following device permissions:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 px-4 font-semibold">Permission</th>
                            <th className="text-left py-3 px-4 font-semibold">Why We Need It</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-400">
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4 font-medium text-white">Camera</td>
                            <td className="py-3 px-4">Profile photos, venue check-in, sharing moments</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4 font-medium text-white">Photo Library</td>
                            <td className="py-3 px-4">Upload photos to profile, teams, and chat</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4 font-medium text-white">Location</td>
                            <td className="py-3 px-4">Find nearby venues, show venue on map</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4 font-medium text-white">Notifications</td>
                            <td className="py-3 px-4">Booking confirmations, chat messages, league updates</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4 font-medium text-white">Microphone</td>
                            <td className="py-3 px-4">Voice messages in team and venue chats</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-gray-400">
                    If you have questions about how we store and track data, please contact us at{" "}
                    <a href="mailto:privacy@sportynix.app" className="text-[var(--brand-primary)] hover:underline">
                      privacy@sportynix.app
                    </a>
                    {" "}or use the in-app support feature.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
