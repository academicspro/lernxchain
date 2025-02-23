"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Key, FileCheck, Network } from 'lucide-react';

const blockchainFeatures = [
  {
    icon: Shield,
    title: "Secure Credentials",
    description: "Your academic credentials are cryptographically secured and verifiable on the blockchain.",
  },
  {
    icon: Key,
    title: "Digital Identity",
    description: "Maintain complete control over your educational identity with blockchain-based authentication.",
  },
  {
    icon: FileCheck,
    title: "Smart Certificates",
    description: "Automatically issued and verified certificates using smart contracts.",
  },
  {
    icon: Network,
    title: "Decentralized Learning",
    description: "Access educational content and credentials across a distributed network.",
  },
];

export default function BlockchainFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
        >
          Blockchain-Powered Education
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blockchainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl glass-card relative z-10 h-full">
                <div className="relative mb-6">
                  <feature.icon className="w-12 h-12 text-purple-500" />
                  <motion.div
                    className="absolute inset-0 blur-xl bg-purple-500/20"
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
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                initial={false}
                animate={isInView ? { scale: [0.9, 1] } : { scale: 0.9 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl glass-card text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Verified on the Blockchain
            </h3>
            <p className="text-white/70 mb-6">
              Every certificate, credential, and achievement is permanently recorded and easily verifiable through our blockchain network.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold"
            >
              Explore Blockchain Features
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}