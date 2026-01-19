"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We dive deep into your vision, understanding your goals and challenges.",
  },
  {
    step: "02",
    title: "Design",
    description: "Every interaction is crafted with intention, balancing beauty and function.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Clean code meets creative vision. Performance is never compromised.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "We launch with confidence, then iterate based on real-world feedback.",
  },
];

export function ProcessScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-4"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            How we work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-8 items-start relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Step indicator */}
                <motion.div
                  className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold z-10"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.step}
                </motion.div>

                <div className="flex-1">
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold mb-4"
                    whileHover={{ x: 10 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-xl text-white/70 leading-relaxed"
                    whileHover={{ x: 10 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
