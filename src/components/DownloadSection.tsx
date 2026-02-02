"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";

export default function DownloadSection() {
  return (
    <div id="download" className="flex flex-col sm:flex-row items-center gap-6">
      {/* Store Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* App Store Button */}
        <motion.a
          href="https://apps.apple.com/app/sportynix"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all group"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className="text-left">
            <div className="text-[10px] text-gray-400 uppercase tracking-wide">Download on the</div>
            <div className="text-base font-semibold text-white -mt-0.5">App Store</div>
          </div>
        </motion.a>

        {/* Google Play Button */}
        <motion.a
          href="https://play.google.com/store/apps/details?id=com.sportynix"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all group"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7">
            <path fill="#EA4335" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"/>
            <path fill="#FBBC04" d="M17.556 8.237l-3.764 3.763 3.764 3.763 4.238-2.427c.474-.27.768-.77.768-1.316s-.294-1.046-.768-1.316l-4.238-2.467z"/>
            <path fill="#4285F4" d="M3.609 1.814L13.792 12l3.764-3.763-10.31-5.896a1.004 1.004 0 0 0-3.637-.527z"/>
            <path fill="#34A853" d="M13.792 12L3.609 22.186a.994.994 0 0 0 3.637-.527l10.31-5.896L13.792 12z"/>
          </svg>
          <div className="text-left">
            <div className="text-[10px] text-gray-400 uppercase tracking-wide">Get it on</div>
            <div className="text-base font-semibold text-white -mt-0.5">Google Play</div>
          </div>
        </motion.a>
      </div>

      {/* QR Code - Hidden on Mobile, Visible on Desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden md:flex items-center gap-4"
      >
        <div className="w-px h-16 bg-gray-700" />
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white">
            <QRCodeSVG
              value="https://sportynix.app/download"
              size={72}
              bgColor="#ffffff"
              fgColor="#0F172A"
              level="H"
              includeMargin={false}
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-white">Scan to Install</p>
            <p className="text-xs text-gray-500">Point camera at QR</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
