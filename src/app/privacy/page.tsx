"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
              <span className="text-[var(--brand-primary)] text-sm font-medium">
                Effective Date: February 2, 2026
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-8">
                Privacy Policy
              </h1>

              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-400 text-xl leading-relaxed mb-8">
                  Sportynix (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application available on iOS and Android platforms.
                </p>

                <div className="p-6 rounded-2xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-12">
                  <p className="text-gray-300 text-sm">
                    By downloading, installing, or using the Sportynix app, you agree to this Privacy Policy. If you do not agree with our policies and practices, please do not use our app.
                  </p>
                </div>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>We collect several types of information from and about users of our app:</p>
                    
                    <p><strong className="text-white">1.1 Personal Information (Provided by You):</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Account registration data: name, email address, phone number, profile picture</li>
                      <li>Authentication credentials when you sign up or sign in</li>
                      <li>Team information when you create or join teams</li>
                      <li>Communication content in chat messages, team chats, and channel conversations</li>
                      <li>Booking details and preferences</li>
                      <li>Reviews and ratings you provide for venues</li>
                    </ul>
                    
                    <p><strong className="text-white">1.2 Information from Third-Party Services:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Google Sign-In:</strong> When you choose to sign in with Google, we receive your Google profile information including name, email address, and profile picture</li>
                    </ul>
                    
                    <p><strong className="text-white">1.3 Automatically Collected Information:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Device Information:</strong> Device type, operating system (iOS/Android), unique device identifiers, app version</li>
                      <li><strong>Usage Data:</strong> Features used, screens visited, interactions, time spent in app</li>
                      <li><strong>Push Notification Tokens:</strong> Device tokens for sending push notifications via OneSignal</li>
                    </ul>
                    
                    <p><strong className="text-white">1.4 Location Data:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With your explicit permission, we collect precise location data to show nearby venues and calculate distances</li>
                      <li>You can disable location services at any time through your device settings</li>
                    </ul>
                    
                    <p><strong className="text-white">1.5 Media and Files:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Photos and images you upload for profile pictures, team logos, or review photos</li>
                      <li>Voice messages and media shared in chat conversations</li>
                      <li>Camera and gallery access is only used when you explicitly choose to capture or select media</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-400 mb-4">We use the information we collect to:</p>
                  <ul className="space-y-3 text-gray-400 list-disc list-inside">
                    <li><strong className="text-white">Provide Core Services:</strong> Enable venue discovery, slot booking, team management, and league participation</li>
                    <li><strong className="text-white">Authentication:</strong> Verify your identity and secure your account using JWT tokens and optional Google Sign-In</li>
                    <li><strong className="text-white">Real-Time Communication:</strong> Deliver instant chat messages, team communications, and live match updates via WebSocket connections</li>
                    <li><strong className="text-white">Push Notifications:</strong> Send booking confirmations, reminders, team updates, challenge notifications, and promotional offers through OneSignal</li>
                    <li><strong className="text-white">Location Services:</strong> Show nearby venues, calculate distances, and provide location-based recommendations</li>
                    <li><strong className="text-white">Personalization:</strong> Customize your experience based on preferences, booking history, and favorite venues</li>
                    <li><strong className="text-white">Customer Support:</strong> Respond to your inquiries and resolve issues</li>
                    <li><strong className="text-white">Analytics:</strong> Understand app usage patterns to improve features and user experience</li>
                    <li><strong className="text-white">Safety & Security:</strong> Detect and prevent fraud, abuse, and unauthorized access</li>
                    <li><strong className="text-white">Gamification:</strong> Manage points, rewards, referrals, and user engagement features</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
                  <div className="space-y-4 text-gray-400">
                    <p><strong className="text-white">We do not sell your personal information.</strong> We may share information only in the following circumstances:</p>
                    
                    <p><strong className="text-white">3.1 With Your Consent:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>When you share information with team members in team chats</li>
                      <li>When you participate in public leagues or challenges</li>
                      <li>When you post public reviews with photos</li>
                    </ul>
                    
                    <p><strong className="text-white">3.2 Third-Party Service Providers:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Google (OAuth):</strong> For social authentication. See <a href="https://policies.google.com/privacy" className="text-[var(--brand-primary)] hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                      <li><strong>OneSignal:</strong> For push notifications. See <a href="https://onesignal.com/privacy_policy" className="text-[var(--brand-primary)] hover:underline" target="_blank" rel="noopener noreferrer">OneSignal Privacy Policy</a></li>
                      <li><strong>Cloud Hosting:</strong> For data storage and processing</li>
                      <li><strong>Analytics Providers:</strong> For app performance monitoring</li>
                    </ul>
                    
                    <p><strong className="text-white">3.3 Legal Requirements:</strong> We may disclose information if required by law, court order, or government request, or to protect our rights, property, or safety.</p>
                    
                    <p><strong className="text-white">3.4 Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                  <p className="text-gray-400 mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information:
                  </p>
                  <ul className="space-y-3 text-gray-400 list-disc list-inside">
                    <li><strong className="text-white">Encryption:</strong> All data transmitted between the app and our servers is encrypted using TLS/SSL</li>
                    <li><strong className="text-white">Authentication:</strong> Secure JWT (JSON Web Token) based authentication with automatic token refresh</li>
                    <li><strong className="text-white">Access Controls:</strong> Strict access controls and authentication requirements for all API endpoints</li>
                    <li><strong className="text-white">Secure Storage:</strong> Sensitive data stored using secure storage mechanisms</li>
                    <li><strong className="text-white">Regular Updates:</strong> Continuous security monitoring and updates</li>
                  </ul>
                  <p className="text-gray-400 mt-4">
                    While we strive to protect your information, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>We retain your personal information for as long as necessary to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Provide our services while your account is active</li>
                      <li>Comply with legal obligations</li>
                      <li>Resolve disputes and enforce agreements</li>
                    </ul>
                    <p className="mt-4"><strong className="text-white">Account Deletion:</strong> You can request account deletion at any time by contacting us. Upon deletion:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Your profile and personal data will be permanently removed</li>
                      <li>Chat messages may be retained in anonymized form for other participants</li>
                      <li>Booking history may be retained for legal/compliance purposes</li>
                      <li>Aggregated analytics data (non-identifiable) may be retained</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>You have the following rights regarding your personal information:</p>
                    <ul className="space-y-3 list-disc list-inside">
                      <li><strong className="text-white">Access:</strong> Request a copy of your personal data we hold</li>
                      <li><strong className="text-white">Correction:</strong> Update or correct inaccurate information via Profile settings</li>
                      <li><strong className="text-white">Deletion:</strong> Request deletion of your account and personal data</li>
                      <li><strong className="text-white">Opt-out of Notifications:</strong> Disable push notifications in app settings or device settings</li>
                      <li><strong className="text-white">Location Permissions:</strong> Revoke location access through your device settings</li>
                      <li><strong className="text-white">Camera/Media Permissions:</strong> Control access through device settings</li>
                      <li><strong className="text-white">Marketing Communications:</strong> Opt-out of promotional notifications</li>
                    </ul>
                    <p className="mt-4">To exercise these rights, contact us at the email address provided below.</p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">7. Children&apos;s Privacy</h2>
                  <div className="p-6 rounded-xl glass border-l-4 border-[var(--brand-accent)]">
                    <p className="text-gray-300">
                      <strong className="text-white">Important:</strong> Sportynix is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we discover that a child under 13 has provided us with personal information, we will delete such information from our servers.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">8. Third-Party Links and Services</h2>
                  <p className="text-gray-400">
                    Our app may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party services you access.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">9. App Permissions</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>Our app requests the following permissions:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 px-4 font-semibold text-white">Permission</th>
                            <th className="text-left py-3 px-4 font-semibold text-white">Purpose</th>
                            <th className="text-left py-3 px-4 font-semibold text-white">Required</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4">Internet</td>
                            <td className="py-3 px-4">Core app functionality, API communication</td>
                            <td className="py-3 px-4 text-[var(--brand-secondary)]">Yes</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4">Location</td>
                            <td className="py-3 px-4">Find nearby venues, distance calculation</td>
                            <td className="py-3 px-4">Optional</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4">Camera</td>
                            <td className="py-3 px-4">Profile photos, review images, chat media</td>
                            <td className="py-3 px-4">Optional</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4">Photo Library</td>
                            <td className="py-3 px-4">Upload existing photos</td>
                            <td className="py-3 px-4">Optional</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4">Microphone</td>
                            <td className="py-3 px-4">Voice messages in chat</td>
                            <td className="py-3 px-4">Optional</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-3 px-4">Notifications</td>
                            <td className="py-3 px-4">Push notifications for bookings, messages</td>
                            <td className="py-3 px-4">Optional</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="text-gray-400">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy in the app and updating the &quot;Effective Date&quot; at the top. We encourage you to review this Privacy Policy periodically. Your continued use of the app after any changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                  <p className="text-gray-400 mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="mt-4 p-6 rounded-xl glass">
                    <p className="text-white font-medium">Sportynix</p>
                    <p className="text-gray-400 mt-2">Email: <a href="mailto:privacy@sportynix.app" className="text-[var(--brand-primary)] hover:underline">privacy@sportynix.app</a></p>
                    <p className="text-gray-400">Support: <a href="mailto:support@sportynix.app" className="text-[var(--brand-primary)] hover:underline">support@sportynix.app</a></p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">12. Consent</h2>
                  <p className="text-gray-400">
                    By using Sportynix, you consent to the collection, use, and sharing of your information as described in this Privacy Policy.
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
