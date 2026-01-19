"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
  { id: "landing", label: "Home", href: "#landing" },
  { id: "manifesto", label: "Why", href: "#manifesto" },
  { id: "capabilities", label: "What", href: "#capabilities" },
  { id: "work", label: "Work", href: "#work" },
  { id: "process", label: "How", href: "#process" },
  { id: "cta", label: "Connect", href: "#cta" },
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsExpanded(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div
            className="backdrop-blur-3xl bg-gradient-to-r from-white/20 via-white/25 to-white/20 border-2 border-white/30 rounded-full px-8 py-4 shadow-2xl shadow-purple-500/30 min-w-[600px]"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.15) 100%)",
              boxShadow: "0 8px 32px 0 rgba(139, 92, 246, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)",
            }}
            whileHover={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.4)", boxShadow: "0 8px 32px 0 rgba(139, 92, 246, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center gap-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="px-5 py-2 text-sm font-medium text-white/80 relative group rounded-full transition-all duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Bright white glow/halo effect behind */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                      background: "radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4), transparent)",
                      filter: "blur(12px)",
                      transform: "scale(1.5)",
                    }}
                  />
                  
                  {/* Solid white background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 1)",
                    }}
                  />
                  
                  {/* Text that turns black on hover */}
                  <span className="relative z-10 block group-hover:text-black transition-colors duration-300 font-medium">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
