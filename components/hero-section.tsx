"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Brain, Globe2 } from "lucide-react";

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
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Globe2 className="w-32 h-32 text-cyan-400" />
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-10px] border-2 border-cyan-400/20 rounded-full"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 relative"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Redefining Education with
              <br />
              AI, Blockchain & Metaverse
            </h1>
            <motion.div
              className="absolute -inset-4 -z-10 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
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
            Step into the future of learning where AI tutors, blockchain security,
            and immersive metaverse experiences come together to create a
            revolutionary educational platform.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-lg font-semibold relative overflow-hidden group"
          >
            <span className="relative z-10">Explore the Future of Learning</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}