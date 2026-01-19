"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function LandingScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothY = useSpring(y, springConfig);
  const smoothOpacity = useSpring(opacity, springConfig);
  const smoothScale = useSpring(scale, springConfig);

  const words = ["We", "craft", "digital", "experiences", "that", "matter"];
  const statement = "We craft digital experiences that matter";

  return (
    <section
      id="landing"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: i === 0 ? "#8b5cf6" : i === 1 ? "#3b82f6" : "#ec4899",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content - Grid layout */}
      <motion.div
        style={{ y: smoothY, opacity: smoothOpacity, scale: smoothScale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight"
            >
              <span className="block">
                <AnimatedText text="We craft" delay={0.2} duration={0.03} />
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                <AnimatedText text="digital experiences" delay={0.5} duration={0.03} />
              </span>
              <span className="block">
                <AnimatedText text="that matter" delay={1.0} duration={0.03} />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-xl mt-6 md:mt-8"
            >
              <AnimatedText 
                text="Where creativity meets technology. Where ideas become reality." 
                delay={1.5} 
                duration={0.02}
              />
            </motion.p>

            {/* Scroll indicator - positioned below subtitle, centered */}
            <motion.div
              className="mt-8 md:mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
            >
              <motion.div
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-1 h-3 bg-white/50 rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Image container with glassmorphism effect */}
            <motion.div
              className="relative h-full w-full rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-pink-600/40 to-blue-600/40"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {/* Image with gradient overlay */}
              <div className="relative w-full h-full z-10">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=80"
                  alt="Digital Experience"
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Gradient overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
              </div>

              {/* Fallback placeholder (shown if image doesn't exist) */}
              <div className="absolute inset-0 z-0 flex items-center justify-center opacity-0 pointer-events-none">
                <motion.div
                  className="relative w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Geometric shapes as fallback */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-purple-400/30 rounded-lg rotate-45"
                    animate={{ rotate: [45, 405, 45] }}
                    transition={{ duration: 20, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-pink-400/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-blue-400/30 rounded-lg"
                    animate={{ rotate: [-45, 315, -45] }}
                    transition={{ duration: 15, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Floating elements for visual interest */}
              <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl z-20"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl z-20"
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
