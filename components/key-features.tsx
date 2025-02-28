"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Shield, Laptop } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "24/7 AI tutoring with personalized learning paths and instant feedback to optimize your educational journey.",
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    description:
      "Your transcripts and credentials are immutably stored and verified on the blockchain, ensuring authenticity.",
    color: "text-purple-500",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Laptop,
    title: "Metaverse Classroom",
    description:
      "Step into interactive virtual environments where learning comes alive through immersive experiences.",
    color: "text-pink-500",
    gradient: "from-pink-500/20 to-red-500/20",
  },
];

export default function KeyFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} id="features" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
        >
          Revolutionary Features
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className={`p-6 rounded-2xl glass-card relative z-10 h-full transform transition-transform duration-300 group-hover:scale-[1.02]`}>
                <div className="relative">
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                  <motion.div
                    className="absolute inset-0 blur-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl glass-card relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            {[
              ["3M+", "Students Secured"],
              ["50M+", "AI Analyzed Assignments"],
              ["10K+", "Virtual Classes"],
            ].map(([number, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold gradient-text"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {number}
                </motion.div>
                <div className="text-white/70 mt-2">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}