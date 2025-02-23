"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Sparkles, Target, Zap } from 'lucide-react';

const aiFeatures = [
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "AI-powered system that adapts to your learning style and pace.",
    color: "cyan",
  },
  {
    icon: Target,
    title: "Personalized Path",
    description: "Custom learning paths created by analyzing your progress and goals.",
    color: "purple",
  },
  {
    icon: Sparkles,
    title: "Smart Assessment",
    description: "Real-time feedback and assessment using advanced AI algorithms.",
    color: "pink",
  },
  {
    icon: Zap,
    title: "Instant Support",
    description: "24/7 AI tutoring assistance for immediate help and guidance.",
    color: "yellow",
  },
];

export default function AIFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold gradient-text">
            AI-Powered Learning
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-white/70 max-w-2xl mx-auto">
            Experience the future of education with our advanced AI systems that understand, adapt, and grow with you.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="p-6 rounded-2xl glass-card relative z-10 h-full">
                <div className="relative mb-6">
                  <feature.icon className={`w-12 h-12 text-${feature.color}-400`} />
                  <motion.div
                    className={`absolute inset-0 blur-xl bg-${feature.color}-500/20`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
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
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r from-${feature.color}-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-2xl glass-card"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                AI Learning Assistant
              </h3>
              <p className="text-white/70 mb-6">
                Meet your personal AI tutor that understands your learning style, answers questions, and guides you through complex topics.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full font-semibold"
              >
                Try AI Assistant
              </motion.button>
            </div>
            <div className="relative h-64">
              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden"
                animate={{
                  background: [
                    "linear-gradient(45deg, #00ffff, #ff00ff)",
                    "linear-gradient(45deg, #ff00ff, #00ffff)",
                    "linear-gradient(45deg, #00ffff, #ff00ff)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}