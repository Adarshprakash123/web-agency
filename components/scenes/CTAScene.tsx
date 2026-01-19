"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function CTAScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <section
      id="cta"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-4"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.h2
          className="text-6xl md:text-8xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Let&apos;s build something
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            extraordinary
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to transform your vision into reality? Let&apos;s start a conversation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start a project</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.button>

          <motion.a
            href="https://adarshprakash.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white/20 rounded-full text-lg font-semibold backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors inline-block cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View our work
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-16 flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { name: "Twitter", url: "https://x.com/AdarshSingh1683" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/adarsh-prakash-3b378a221/" },
            { name: "Portfolio", url: "https://adarshprakash.online/" },
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
