"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
                Terms of Service
              </h1>

              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-400 text-xl leading-relaxed mb-8">
                  Welcome to Sportynix. These Terms of Service (&quot;Terms&quot;) govern your use of the Sportynix mobile application (&quot;App&quot;) and related services. By downloading, installing, or using our App, you agree to be bound by these Terms.
                </p>

                <div className="p-6 rounded-2xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-12">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Important:</strong> Please read these Terms carefully before using Sportynix. If you do not agree to these Terms, you may not access or use the App.
                  </p>
                </div>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>
                      By creating an account, accessing, or using Sportynix, you confirm that:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You are at least 13 years of age</li>
                      <li>You have the legal capacity to enter into these Terms</li>
                      <li>You will comply with these Terms and all applicable laws</li>
                      <li>All information you provide is accurate and complete</li>
                    </ul>
                    <p>
                      If you are using the App on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>Sportynix provides a mobile platform for sports enthusiasts to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-white">Discover Venues:</strong> Browse and search for indoor sports venues in your area</li>
                      <li><strong className="text-white">Book Slots:</strong> Reserve time slots at sports facilities for various activities</li>
                      <li><strong className="text-white">Team Management:</strong> Create, join, and manage sports teams</li>
                      <li><strong className="text-white">Real-Time Communication:</strong> Chat with team members, challenge opponents, and coordinate activities</li>
                      <li><strong className="text-white">Cricket Leagues:</strong> Participate in organized cricket leagues with live scoring</li>
                      <li><strong className="text-white">Challenges:</strong> Send and receive match challenges to other teams</li>
                      <li><strong className="text-white">Reviews & Ratings:</strong> Share your venue experiences with the community</li>
                      <li><strong className="text-white">Points & Rewards:</strong> Earn points through app activities and referrals</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
                  <div className="space-y-4 text-gray-400">
                    <p><strong className="text-white">3.1 Account Creation:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You may register using email/password or Google Sign-In</li>
                      <li>Email registration requires OTP verification</li>
                      <li>You must provide accurate, current, and complete information</li>
                      <li>One account per person; multiple accounts are prohibited</li>
                    </ul>
                    
                    <p><strong className="text-white">3.2 Account Security:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You are responsible for maintaining the confidentiality of your login credentials</li>
                      <li>You must notify us immediately of any unauthorized account access</li>
                      <li>You are responsible for all activities under your account</li>
                      <li>We are not liable for losses due to unauthorized account use</li>
                    </ul>
                    
                    <p><strong className="text-white">3.3 Account Termination:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You may delete your account at any time by contacting support</li>
                      <li>We may suspend or terminate accounts that violate these Terms</li>
                      <li>Upon termination, your right to use the App ceases immediately</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">4. Booking Terms</h2>
                  <div className="space-y-4 text-gray-400">
                    <p><strong className="text-white">4.1 Slot Reservations:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Booking availability is shown in real-time but subject to change</li>
                      <li>Slots can be temporarily held for 10 minutes during checkout</li>
                      <li>Confirmation of booking is subject to venue availability</li>
                      <li>You may book individual slots or recurring/permanent slots</li>
                    </ul>
                    
                    <p><strong className="text-white">4.2 Cancellations:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Cancellation policies vary by venue and are displayed during booking</li>
                      <li>You are responsible for reviewing cancellation terms before confirming</li>
                      <li>Late cancellations or no-shows may affect your account standing</li>
                    </ul>
                    
                    <p><strong className="text-white">4.3 QR Code Verification:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>A QR code is generated for each confirmed booking</li>
                      <li>Present the QR code at the venue for verification</li>
                      <li>QR codes are valid only for the booked time slot</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">5. User Conduct</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>You agree NOT to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Use the App for any unlawful purpose</li>
                      <li>Harass, abuse, threaten, or intimidate other users</li>
                      <li>Post offensive, discriminatory, or inappropriate content</li>
                      <li>Share false, misleading, or fraudulent information</li>
                      <li>Impersonate any person or entity</li>
                      <li>Interfere with or disrupt the App or servers</li>
                      <li>Attempt to gain unauthorized access to any part of the App</li>
                      <li>Use automated scripts, bots, or scrapers</li>
                      <li>Circumvent any security measures</li>
                      <li>Share account credentials with others</li>
                      <li>Manipulate the points/rewards system fraudulently</li>
                      <li>Make false bookings or malicious cancellations</li>
                    </ul>
                    <p className="mt-4">Violations may result in warning, suspension, or permanent ban from the App.</p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">6. User Content</h2>
                  <div className="space-y-4 text-gray-400">
                    <p><strong className="text-white">6.1 Content You Create:</strong></p>
                    <p>You retain ownership of content you create (profile info, reviews, photos, chat messages). By posting content, you grant Sportynix a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with the App.</p>
                    
                    <p><strong className="text-white">6.2 Content Standards:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You are solely responsible for your content</li>
                      <li>Content must not violate any third-party rights</li>
                      <li>Reviews must be honest and based on actual experiences</li>
                      <li>Photos must not contain inappropriate material</li>
                    </ul>
                    
                    <p><strong className="text-white">6.3 Content Moderation:</strong></p>
                    <p>We may remove or disable content that violates these Terms without prior notice. We are not obligated to monitor all content but may do so at our discretion.</p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">7. Teams and Leagues</h2>
                  <div className="space-y-4 text-gray-400">
                    <p><strong className="text-white">7.1 Team Features:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Team creators become team administrators</li>
                      <li>Team admins can manage members, settings, and challenges</li>
                      <li>Team names and logos must not be offensive or infringe trademarks</li>
                      <li>Team approval may be required in some cases</li>
                    </ul>
                    
                    <p><strong className="text-white">7.2 Challenges:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Teams can send and receive match challenges</li>
                      <li>Both teams must accept challenge terms</li>
                      <li>Challenge results should be reported honestly</li>
                    </ul>
                    
                    <p><strong className="text-white">7.3 Cricket Leagues:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>League participation is subject to league-specific rules</li>
                      <li>Live scoring must be accurate and timely</li>
                      <li>Disputes should be resolved through proper channels</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">8. Communication Features</h2>
                  <div className="space-y-4 text-gray-400">
                    <p><strong className="text-white">8.1 Chat and Messaging:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Real-time messaging is provided via WebSocket connections</li>
                      <li>Direct messages, team chats, and challenge chats are available</li>
                      <li>Message content must comply with conduct guidelines</li>
                      <li>Voice messages and media sharing are available</li>
                    </ul>
                    
                    <p><strong className="text-white">8.2 Push Notifications:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Notifications are sent via OneSignal for booking updates, messages, and alerts</li>
                      <li>You can manage notification preferences in app settings</li>
                      <li>You can disable notifications through device settings</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">9. Points and Rewards</h2>
                  <div className="space-y-4 text-gray-400">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Points can be earned through various app activities and referrals</li>
                      <li>Points have no cash value and cannot be exchanged for money</li>
                      <li>Points may expire according to program rules</li>
                      <li>Fraudulent attempts to earn points will result in account action</li>
                      <li>We reserve the right to modify the points program at any time</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">10. Intellectual Property</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>
                      The Sportynix name, logo, app design, and all related intellectual property are owned by Sportynix. You may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Copy, modify, or distribute our intellectual property</li>
                      <li>Use our trademarks without written permission</li>
                      <li>Reverse engineer or decompile the App</li>
                      <li>Create derivative works based on the App</li>
                    </ul>
                    <p className="mt-4">The App is licensed, not sold, to you for personal, non-commercial use.</p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">11. Third-Party Services</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>The App integrates with third-party services:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-white">Google Sign-In:</strong> Subject to Google&apos;s Terms of Service</li>
                      <li><strong className="text-white">OneSignal:</strong> For push notifications, subject to their terms</li>
                      <li><strong className="text-white">Maps Services:</strong> For venue locations and navigation</li>
                    </ul>
                    <p className="mt-4">We are not responsible for third-party services. Your use of these services is at your own risk and subject to their respective terms.</p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">12. Disclaimers</h2>
                  <div className="space-y-4 text-gray-400">
                    <div className="p-6 rounded-xl glass border-l-4 border-[var(--brand-accent)]">
                      <p className="text-gray-300">
                        <strong className="text-white">THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;</strong> without warranties of any kind, express or implied. We do not guarantee that:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mt-4">
                        <li>The App will be uninterrupted or error-free</li>
                        <li>Venue information is always accurate</li>
                        <li>Bookings will always be honored by venues</li>
                        <li>Real-time features will have no latency</li>
                      </ul>
                    </div>
                    <p className="mt-4">
                      We are an intermediary platform connecting users with venues. We are not responsible for the quality of services provided by venues.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">13. Limitation of Liability</h2>
                  <p className="text-gray-400">
                    To the maximum extent permitted by law, Sportynix shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, booking issues, or venue-related problems. Our total liability shall not exceed the amount you paid to us (if any) in the 12 months preceding the claim.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">14. Indemnification</h2>
                  <p className="text-gray-400">
                    You agree to indemnify and hold harmless Sportynix, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the App, violation of these Terms, or infringement of any rights of another party.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">15. Changes to Terms</h2>
                  <p className="text-gray-400">
                    We may modify these Terms at any time. Material changes will be communicated through the App or via push notification. Your continued use of the App after changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">16. Governing Law</h2>
                  <p className="text-gray-400">
                    These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through arbitration or the courts in the appropriate jurisdiction.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">17. Severability</h2>
                  <p className="text-gray-400">
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">18. Contact Information</h2>
                  <p className="text-gray-400 mb-4">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-6 rounded-xl glass">
                    <p className="text-white font-medium">Sportynix</p>
                    <p className="text-gray-400 mt-2">Email: <a href="mailto:legal@sportynix.app" className="text-[var(--brand-primary)] hover:underline">legal@sportynix.app</a></p>
                    <p className="text-gray-400">Support: <a href="mailto:support@sportynix.app" className="text-[var(--brand-primary)] hover:underline">support@sportynix.app</a></p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">19. Entire Agreement</h2>
                  <p className="text-gray-400">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and Sportynix regarding your use of the App and supersede any prior agreements.
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
