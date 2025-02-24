"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Brain, Globe2, Sparkles, Code, Cpu } from "lucide-react";

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const floatingIcons = [
    { Icon: Brain, color: "text-cyan-400", delay: 0 },
    { Icon: Globe2, color: "text-purple-400", delay: 0.2 },
    { Icon: Sparkles, color: "text-pink-400", delay: 0.4 },
    { Icon: Code, color: "text-yellow-400", delay: 0.6 },
    { Icon: Cpu, color: "text-green-400", delay: 0.8 },
  ];

  return (
    <section ref={ref} id="home" className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          {/* Floating Icons */}
          {/* <div className="relative w-48 h-48 mb-8">
            {floatingIcons.map(({ Icon, color, delay }, index) => (
              <motion.div
                key={index}
                className={`absolute ${color}`}
                style={{
                  top: `${Math.sin(index * (2 * Math.PI / 5)) * 60 + 50}%`,
                  left: `${Math.cos(index * (2 * Math.PI / 5)) * 60 + 50}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 1, 0.8],
                  rotate: [0, 360],
                }}
                transition={{
                  delay,
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Icon className="w-12 h-12" />
              </motion.div>
            ))}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div> */}

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <h1 className="text-7xl md:text-7xl font-bold gradient-text mb-6">
              Future of Learning
              <br />
              <span className="text-3xl md:text-5xl">Learn X Chain</span>
              <br />
             {/* <span className="text-3xl"> AI • Blockchain • Metaverse</span> */}
            </h1>
            <motion.div
              className="absolute -inset-4 -z-10 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-white/80 max-w-2xl"
          >
            Experience the next generation of education where AI tutors, blockchain security,
            and immersive metaverse experiences converge to create a revolutionary learning platform.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-lg font-semibold relative overflow-hidden group"
            >
              <span className="relative z-10">Start Learning Now</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 0, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full text-lg font-semibold relative overflow-hidden group"
            >
              <span className="relative z-10">Watch Demo</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            variants={containerVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { value: "50M+", label: "AI Interactions" },
              { value: "100K+", label: "Verified Credentials" },
              { value: "25K+", label: "Virtual Classes" },
            ].map(({ value, label }, index) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="glass-card p-6 rounded-xl relative group"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-3xl font-bold gradient-text mb-2"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {value}
                </motion.div>
                <div className="text-white/70">{label}</div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(0,255,255,0.1), rgba(255,0,255,0.1))",
                      "linear-gradient(45deg, rgba(255,0,255,0.1), rgba(0,255,255,0.1))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}