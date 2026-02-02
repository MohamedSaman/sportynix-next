"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    id: 1,
    title: "Dashboard",
    image: "images/image.png"
  },
  {
    id: 2,
    title: "League & Tournaments ",
    image: "https://placehold.co/375x812/1E293B/39FF14?text=League+&+Tournaments&font=montserrat"
  },
  {
    id: 3,
    title: "Booking & Scheduling",
    image: "https://placehold.co/375x812/1E293B/FF6B35?text=Booking+&+Scheduling&font=montserrat"
  },
  {
    id: 4,
    title: "Profiles & Social",
    image: "https://placehold.co/375x812/1E293B/A855F7?text=Profiles+&+Social&font=montserrat"
  },
  {
    id: 5,
    title: "Challenges",
    image: "https://placehold.co/375x812/1E293B/FFD700?text=Challenges&font=montserrat"
  }
];

export default function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#0A0F1C]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[var(--brand-secondary)] opacity-[0.03] blur-[100px] rounded-full" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[var(--brand-primary)] opacity-[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 px-4"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] border border-[var(--brand-accent)]/20 mb-4"
          >
            App Preview
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Beautiful App
            <span className="text-gradient">Interface</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Designed for players and venue managers — find courts, book slots,
            and manage leagues with ease.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center transition-all ${
              canScrollLeft 
                ? "opacity-100 hover:bg-white/10 cursor-pointer" 
                : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center transition-all ${
              canScrollRight 
                ? "opacity-100 hover:bg-white/10 cursor-pointer" 
                : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Screenshots Carousel */}
          <div
            ref={containerRef}
            className="carousel-scroll flex gap-6 overflow-x-auto px-8 lg:px-20 py-4 snap-x snap-mandatory"
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="relative group">
                  {/* Phone Frame */}
                  <div className="w-[260px] sm:w-[280px] aspect-[9/19] rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-900 p-2 border border-gray-700 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                    {/* Screen */}
                    <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-[#0F172A]">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
                      
                      {/* Screenshot Image */}
                      <Image
                        src={screenshot.image}
                        alt={`Sportynix ${screenshot.title} screen`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-center mt-4 text-sm font-medium text-gray-400 group-hover:text-[var(--brand-primary)] transition-colors">
                    {screenshot.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0F1C] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0F1C] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
