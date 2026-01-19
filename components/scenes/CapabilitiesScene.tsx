"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const capabilities = [
  {
    title: "Product Design",
    description: "From concept to pixel-perfect execution",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Frontend Development",
    description: "Modern, performant, and delightful interfaces",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end digital products that scale",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Creative Direction",
    description: "Brand identity and visual storytelling",
    color: "from-orange-500 to-red-500",
  },
];

export function CapabilitiesScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-4"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto w-full"
      >
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            What we do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-8 bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-4"
                  whileHover={{ x: 5 }}
                >
                  {capability.title}
                </motion.h3>
                <motion.p
                  className="text-lg text-white/60"
                  whileHover={{ x: 5 }}
                >
                  {capability.description}
                </motion.p>
              </div>

              {/* Animated border */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                style={{
                  maskImage: "linear-gradient(#000, #000)",
                  WebkitMaskImage: "linear-gradient(#000, #000)",
                  maskSize: "100% 2px",
                  WebkitMaskSize: "100% 2px",
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
