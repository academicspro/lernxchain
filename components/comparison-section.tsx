"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Zap, Shield, Brain, Globe, Users, Coins } from 'lucide-react';
import React from 'react';

const comparisonData = {
  features: [
    { name: "AI-Powered Learning", icon: Brain },
    { name: "Blockchain Credentials", icon: Shield },
    { name: "Virtual Classrooms", icon: Globe },
    { name: "Real-time Collaboration", icon: Users },
    { name: "Personalized Learning", icon: Zap },
    { name: "Cost-effective", icon: Coins },
  ],
  platforms: [
    {
      name: "LearnX Chain",
      description: "Next-gen learning platform",
      color: "cyan",
      features: [true, true, true, true, true, true],
    },
    {
      name: "Traditional LMS",
      description: "Standard learning platforms",
      color: "purple",
      features: [false, false, false, true, false, true],
    },
    {
      name: "Online Courses",
      description: "Video-based platforms",
      color: "pink",
      features: [false, false, false, false, true, true],
    },
  ],
};

export default function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Why Choose LearnX Chain?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Compare our revolutionary platform with traditional learning solutions
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="grid grid-cols-[200px_repeat(3,1fr)] gap-4 glass-card p-8 rounded-2xl"
          >
            {/* Header */}
            <div className=""></div>
            {comparisonData.platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className={`text-xl font-bold text-${platform.color}-400 mb-2`}>
                  {platform.name}
                </h3>
                <p className="text-white/70 text-sm">{platform.description}</p>
              </motion.div>
            ))}

            {/* Features */}
            {comparisonData.features.map((feature, featureIndex) => (
              <React.Fragment key={`feature-${featureIndex}`}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: featureIndex * 0.1 }}
                  className="flex items-center gap-3 py-4"
                >
                  <feature.icon className="w-5 h-5 text-white/70" />
                  <span className="text-white/90">{feature.name}</span>
                </motion.div>
                {comparisonData.platforms.map((platform, platformIndex) => (
                  <motion.div
                    key={`${feature.name}-${platform.name}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: (featureIndex * 0.1) + (platformIndex * 0.2) }}
                    className="flex items-center justify-center py-4"
                  >
                    {platform.features[featureIndex] ? (
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                        <X className="w-5 h-5 text-red-400" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Background effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl -z-10 blur-xl"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-lg font-semibold"
          >
            Start Your Journey Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}