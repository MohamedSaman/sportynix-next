"use client";

import { motion } from "framer-motion";
import DownloadSection from "./DownloadSection";
import { 
  ChevronDown, 
  MessageCircle, 
  Bell, 
  Search, 
  Flame, 
  Circle, 
  Trophy, 
  Clock, 
  Home, 
  User,
  MapPin,
  Star,
  ArrowRight,
  Droplets
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-screen flex items-center lg:items-start justify-center overflow-hidden bg-gradient-radial pt-12 sm:pt-16 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--brand-primary)] rounded-full blur-[128px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--brand-secondary)] rounded-full blur-[128px]"
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center lg:items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left self-center lg:self-start"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--brand-primary)]/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--brand-secondary)] animate-pulse" />
              <span className="text-sm font-medium text-gray-300">
                Top Indoor Booking App
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-4 lg:mb-6"
            >
              Book Courts. Play.{" "}
                <span className="text-gradient">Compete</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-xl lg:mx-0 mb-6 lg:mb-8"
            >
              Find and book indoor venues near you, create leagues and teams,
              and track live scores and bookings — all in one app.
            </motion.p>

            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <DownloadSection />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 mt-6 lg:mt-10"
            >
              {[
                { value: "5K+", label: "Active Players" },
                { value: "4.9", label: "App Rating" },
                { value: "100+", label: "Venues Listed" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--brand-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect Behind Phone */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/20 rounded-[3rem] blur-3xl scale-90" />
              
              {/* Phone Mockup */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative phone-shadow"
              >
                <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] aspect-[9/19] rounded-[3rem] bg-gradient-to-b from-gray-800 to-gray-900 p-2 border border-gray-700">
                  {/* Phone Screen */}
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0d1a12] relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" />
                    
                    {/* App Interface Preview */}
                    <div className="w-full h-full flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 pt-10 pb-2">
                        <span className="text-xs text-gray-400">7:03</span>
                        <div className="flex gap-1 items-center">
                          <div className="w-3 h-3 text-gray-400">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                          </div>
                          <div className="flex gap-0.5">
                            <div className="w-1 h-2 bg-gray-400 rounded-sm" />
                            <div className="w-1 h-3 bg-gray-400 rounded-sm" />
                            <div className="w-1 h-4 bg-gray-400 rounded-sm" />
                            <div className="w-1 h-3 bg-gray-400 rounded-sm" />
                          </div>
                          <div className="w-6 h-3 bg-[var(--brand-secondary)] rounded-sm" />
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="flex items-center justify-between px-4 py-2">
                        <div className="flex items-center gap-2">
                          <img 
                            src="/images/logo.png" 
                            alt="Sportynix" 
                            className="h-10 w-auto"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-[#1a3d2e] rounded-full flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 text-[var(--brand-secondary)]" />
                          </div>
                          <div className="relative w-8 h-8 bg-[#1a3d2e] rounded-full flex items-center justify-center">
                            <Bell className="w-4 h-4 text-[var(--brand-secondary)]" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-[8px] text-white font-bold">12</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="px-4 py-2">
                        <div className="flex items-center gap-2 bg-[#1a3d2e] rounded-full px-4 py-2">
                          <Search className="w-4 h-4 text-[var(--brand-secondary)]" />
                          <span className="text-gray-400 text-xs">Search venues, sports...</span>
                        </div>
                      </div>

                      {/* Category Tabs */}
                      <div className="flex gap-2 px-4 py-2 overflow-hidden">
                        <div className="px-3 py-1.5 bg-[var(--brand-secondary)] rounded-full flex items-center gap-1">
                          <Flame className="w-3 h-3 text-black" />
                          <span className="text-black text-xs font-medium">Popular</span>
                        </div>
                        <div className="px-3 py-1.5 bg-[#1a3d2e] rounded-full flex items-center gap-1">
                          {/* Football Globe Icon */}
                          <svg className="w-3 h-3 text-[var(--brand-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="9"/>
                            <path d="M3 12h18M12 3c3 3 4.5 6 4.5 9s-1.5 6-4.5 9M12 3c-3 3-4.5 6-4.5 9s1.5 6 4.5 9"/>
                          </svg>
                          <span className="text-white text-xs">Football</span>
                        </div>
                        <div className="px-3 py-1.5 bg-[#1a3d2e] rounded-full flex items-center gap-1">
                          {/* Cricket Bat Icon */}
                          <svg className="w-3 h-3 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 20l3-3M7 17l10-10 3 3-10 10z" strokeLinejoin="round"/>
                            <path d="M17 7l1-1c1-1 2.5-.5 3 .5s.5 2-.5 3l-1 1" strokeLinecap="round"/>
                          </svg>
                          <span className="text-white text-xs">Cricket</span>
                        </div>
                      </div>

                      {/* Featured Section */}
                      <div className="flex items-center justify-between px-4 py-2">
                        <div className="flex items-center gap-1">
                          <Droplets className="w-3 h-3 text-[var(--brand-primary)]" />
                          <span className="text-white text-xs font-semibold">Featured Indoors</span>
                        </div>
                        <span className="text-[var(--brand-secondary)] text-xs">See all &gt;</span>
                      </div>

                      {/* Venue Card */}
                      <div className="px-4">
                        <div className="bg-[#1a3d2e] rounded-2xl overflow-hidden">
                          {/* Venue Image */}
                          <div className="h-24 relative overflow-hidden">
                            <img 
                              src="https://media.licdn.com/dms/image/v2/D5612AQEp-Hy7380_Vw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712347991191?e=2147483647&v=beta&t=IE8rktfnaO-BsF4wRQ87pqQZq2SrhD4z-JgZWx44PuU"
                              alt="Swimming Pool"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-black/60 rounded-full px-2 py-0.5 flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                              <span className="text-white text-[10px] font-medium">5</span>
                            </div>
                          </div>
                          {/* Venue sportsInfo */}
                          <div className="p-2">
                            <p className="text-white font-semibold text-xs">Sportynix Sport Complex</p>
                            <p className="text-gray-400 text-[12px] flex items-center gap-0.5">
                              <MapPin className="w-2 h-2" /> Pannala, Kurunegala
                            </p>
                            <div className="flex gap-1.5 mt-1.5 flex-wrap">
                              <span className="text-[8px] bg-[#0d1a12] border border-[#20a458] px-1.5 py-0.5 rounded-full text-[#20a458] flex items-center gap-0.5">
                                {/* Cricket Bat Icon */}
                                <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M4 20l3-3M7 17l10-10 3 3-10 10z" strokeLinejoin="round"/>
                                  <path d="M17 7l1-1c1-1 2.5-.5 3 .5s.5 2-.5 3l-1 1" strokeLinecap="round"/>
                                </svg>
                                Rs. 1000.00
                              </span>
                              <span className="text-[8px] bg-[#0d1a12] border border-gray-600 px-1.5 py-0.5 rounded-full text-gray-300 flex items-center gap-0.5">
                                {/* Badminton Shuttlecock Icon */}
                                <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <ellipse cx="12" cy="6" rx="4" ry="3"/>
                                  <path d="M8 7l4 14 4-14" strokeLinejoin="round"/>
                                  <path d="M9 11h6M10 15h4" strokeLinecap="round"/>
                                </svg>
                                Rs. 500.00
                              </span>
                              <span className="text-[8px] bg-[#0d1a12] border border-gray-600 px-1.5 py-0.5 rounded-full text-gray-300 flex items-center gap-0.5">
                                {/* Football Globe Icon */}
                                <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <circle cx="12" cy="12" r="9"/>
                                  <path d="M3 12h18M12 3c3 3 4.5 6 4.5 9s-1.5 6-4.5 9M12 3c-3 3-4.5 6-4.5 9s1.5 6 4.5 9"/>
                                </svg>
                                Rs. 2500.00
                              </span>
                              <span className="text-[8px] bg-[#0d1a12] border border-gray-600 px-1.5 py-0.5 rounded-full text-gray-300 flex items-center gap-0.5">
                                {/* Swimming Icon */}
                                <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeLinecap="round"/>
                                  <circle cx="8" cy="6" r="2"/>
                                  <path d="M9 10l3-2 4 3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Rs. 1500.00
                              </span>
                            </div>
                            <button className="w-full mt-2 bg-[#20a458] text-black text-[10px] font-semibold py-2 rounded-full flex items-center justify-center gap-1">
                              Book Now <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Featured Section */}
                      <div className="flex items-center gap-1 px-4 py-2">
                        <span className="text-xs">✨</span>
                        <span className="text-white text-[10px] font-semibold">Featured</span>
                      </div>

                      {/* Promo Banner Carousel */}
                      <div className="px-4 py-1 overflow-hidden">
                        <div className="promo-carousel flex gap-2 animate-scroll">
                          {/* Banner 1 - Challenge Teams (Blue) */}
                          <div className="flex-shrink-0 w-[85%] relative overflow-hidden rounded-xl" style={{
                            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                          }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                            <div className="relative p-4 flex items-center justify-between">
                              <div className="flex-1 pr-3">
                                <p className="text-white font-bold text-sm">Challenge Teams</p>
                                <p className="text-blue-100 text-[10px] mt-2 leading-tight">Compete with other teams!</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-white text-[10px]">Learn More</span>
                                  <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <span className="bg-[#20a458] text-black text-[8px] font-bold px-2.5 py-1 rounded-full">NEW</span>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20">
                                  <Trophy className="w-7 h-7 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Banner 2 - Feed & Updates (Purple) */}
                          <div className="flex-shrink-0 w-[85%] relative overflow-hidden rounded-xl" style={{
                            background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                          }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                            <div className="relative p-4 flex items-center justify-between">
                              <div className="flex-1 pr-3">
                                <p className="text-white font-bold text-sm">Feed & Updates</p>
                                <p className="text-purple-100 text-[10px] mt-2 leading-tight">Stay updated with latest news!</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-white text-[10px]">Learn More</span>
                                  <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <span className="bg-yellow-400 text-black text-[8px] font-bold px-2.5 py-1 rounded-full">HOT</span>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20">
                                  <Bell className="w-7 h-7 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Banner 3 - Booking & Live Score (Orange) */}
                          <div className="flex-shrink-0 w-[85%] relative overflow-hidden rounded-xl" style={{
                            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                          }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                            <div className="relative p-4 flex items-center justify-between">
                              <div className="flex-1 pr-3">
                                <p className="text-white font-bold text-sm">Booking & Live Score</p>
                                <p className="text-orange-100 text-[10px] mt-2 leading-tight">Book venues & track scores!</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-white text-[10px]">Learn More</span>
                                  <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <span className="bg-[#20a458] text-black text-[8px] font-bold px-2.5 py-1 rounded-full">LIVE</span>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20">
                                  <Star className="w-7 h-7 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Banner 4 - League Create (Green) */}
                          <div className="flex-shrink-0 w-[85%] relative overflow-hidden rounded-xl" style={{
                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                            <div className="relative p-4 flex items-center justify-between">
                              <div className="flex-1 pr-3">
                                <p className="text-white font-bold text-sm">League Create</p>
                                <p className="text-emerald-100 text-[10px] mt-2 leading-tight">Create your own league!</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-white text-[10px]">Learn More</span>
                                  <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <span className="bg-yellow-400 text-black text-[8px] font-bold px-2.5 py-1 rounded-full">PRO</span>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20">
                                  <Trophy className="w-7 h-7 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Banner 5 - Free Booking with Points (Cyan) */}
                          <div className="flex-shrink-0 w-[85%] relative overflow-hidden rounded-xl" style={{
                            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                          }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                            <div className="relative p-4 flex items-center justify-between">
                              <div className="flex-1 pr-3">
                                <p className="text-white font-bold text-sm">Free Booking with Points</p>
                                <p className="text-cyan-100 text-[10px] mt-2 leading-tight">Earn points & book free!</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-white text-[10px]">Learn More</span>
                                  <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <span className="bg-[#20a458] text-black text-[8px] font-bold px-2.5 py-1 rounded-full">FREE</span>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20">
                                  <Droplets className="w-7 h-7 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-1 mt-1.5">
                          <div className="w-3 h-1 bg-white rounded-full" />
                          <div className="w-1 h-1 bg-white/30 rounded-full" />
                          <div className="w-1 h-1 bg-white/30 rounded-full" />
                          <div className="w-1 h-1 bg-white/30 rounded-full" />
                          <div className="w-1 h-1 bg-white/30 rounded-full" />
                        </div>
                      </div>

                      {/* Spacer to push bottom nav down */}
                      <div className="flex-1" />

                      {/* Bottom Navigation */}
                      <div className="flex items-center justify-around py-3 bg-[#0d1a12] border-t border-[#1a3d2e] mt-auto">
                        <div className="flex flex-col items-center">
                          <Trophy className="w-4 h-4 text-gray-400" />
                          <span className="text-[8px] text-gray-400">League</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-[8px] text-gray-400">History</span>
                        </div>
                        <div className="flex flex-col items-center -mt-4">
                          <div className="w-10 h-10 bg-[var(--brand-secondary)] rounded-2xl flex items-center justify-center">
                            <Home className="w-5 h-5 text-black" />
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <Search className="w-4 h-4 text-gray-400" />
                          <span className="text-[8px] text-gray-400">Search</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-[8px] text-gray-400">Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.a
            href="#features"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-[var(--brand-primary)] transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
