"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const manifestoPoints = [
  {
    number: "01",
    text: "We believe in the power of bold ideas that challenge the status quo.",
  },
  {
    number: "02",
    text: "Every pixel, every interaction, every line of code serves a purpose.",
  },
  {
    number: "03",
    text: "We don't just build websites. We craft digital ecosystems that evolve.",
  },
  {
    number: "04",
    text: "The best design is invisible. The best code is elegant. The best experience is unforgettable.",
  },
];

export function ManifestoScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-4"
    >
      <motion.div
        style={{ opacity, y }}
        className="max-w-5xl mx-auto w-full"
      >
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            Why we exist
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        <div className="space-y-16">
          {manifestoPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex gap-8 items-start group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.span
                className="text-4xl md:text-6xl font-bold text-white/20 group-hover:text-white/40 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {point.number}
              </motion.span>
              <motion.p
                className="text-2xl md:text-4xl text-white/80 leading-relaxed flex-1"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {point.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
