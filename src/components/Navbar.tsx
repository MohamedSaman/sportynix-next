"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Reviews", href: "#reviews" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/logo.png"
                alt="Sportynix Logo"
                width={220}
                height={72}
                className="h-16 md:h-18 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link key={link.name} href={link.href}>
                  <motion.span
                    className="text-sm font-medium text-gray-300 hover:text-[var(--brand-primary)] transition-colors relative group cursor-pointer"
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-primary)] transition-all duration-300 group-hover:w-full" />
                  </motion.span>
                </Link>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-[var(--brand-primary)] transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-primary)] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #22a856" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--brand-primary)] text-[#0F172A] font-semibold text-sm transition-all hover:bg-[#00B8E6]"
            >
              <Download className="w-4 h-4" />
              Download App
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass fixed inset-x-0 top-16 bottom-0 z-40 border-t border-white/10"
          >
            <div className="px-4 py-6 h-full overflow-auto">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => {
                  const isActive = link.href.startsWith('/') && pathname === link.href;
                  const commonClasses = `block text-lg font-medium transition-colors ${isActive ? 'text-[var(--brand-primary)]' : 'text-gray-300 hover:text-[var(--brand-primary)]'}`;

                  return link.href.startsWith('/') ? (
                    <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className={commonClasses}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={commonClasses}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}

                <motion.a
                  href="#download"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--brand-primary)] text-[#0F172A] font-semibold text-sm w-full justify-center mt-4"
                >
                  <Download className="w-4 h-4" />
                  Download App
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
