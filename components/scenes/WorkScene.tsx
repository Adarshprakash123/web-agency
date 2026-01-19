"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Revolution",
    category: "Platform",
    description: "A next-generation shopping experience",
    color: "from-purple-500 to-pink-500",
    stats: "2.5M+ Users",
    features: ["AI Recommendations", "Real-time Analytics", "Mobile First"],
    icon: "🛒",
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "Application",
    description: "Complex data made simple",
    color: "from-blue-500 to-cyan-500",
    stats: "99.9% Uptime",
    features: ["Data Visualization", "Secure Transactions", "API Integration"],
    icon: "📊",
  },
  {
    id: 3,
    title: "Creative Portfolio",
    category: "Website",
    description: "Where art meets technology",
    color: "from-green-500 to-emerald-500",
    stats: "50+ Projects",
    features: ["Interactive Gallery", "3D Animations", "Custom CMS"],
    icon: "🎨",
  },
  {
    id: 4,
    title: "SaaS Platform",
    category: "Product",
    description: "Scaling businesses globally",
    color: "from-orange-500 to-red-500",
    stats: "10K+ Companies",
    features: ["Cloud Infrastructure", "Team Collaboration", "Auto Scaling"],
    icon: "🚀",
  },
];

export function WorkScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="work"
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
            Selected work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Animated overlay */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    className="absolute inset-0 bg-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div>
                  <motion.span
                    className="text-sm text-white/60 uppercase tracking-wider"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {project.category}
                  </motion.span>
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                {/* Middle content - fills the space */}
                <div className="flex-1 flex flex-col items-center justify-center gap-6 my-8">
                  {/* Large icon */}
                  <motion.div
                    className="text-7xl md:text-8xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {project.stats}
                  </motion.div>

                  {/* Features list */}
                  <motion.div
                    className="flex flex-wrap gap-3 justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    {project.features.map((feature, featureIndex) => (
                      <motion.span
                        key={featureIndex}
                        className="px-3 py-1 text-xs md:text-sm bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/20 hover:bg-white/20 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.6 + featureIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <motion.p
                  className="text-lg text-white/80"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Hover effect - expanding circle */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20`}
                style={{
                  clipPath: hoveredId === project.id ? "circle(100% at 50% 50%)" : "circle(0% at 50% 50%)",
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
