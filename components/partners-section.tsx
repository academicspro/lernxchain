"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cloud, Database, Globe, Shield, Code, Cpu } from 'lucide-react';

const partners = [
  {
    name: "Amazon Web Services",
    icon: Cloud,
    description: "Cloud Infrastructure Partner",
    color: "orange",
  },
  {
    name: "Microsoft Azure",
    icon: Database,
    description: "Enterprise Solutions Partner",
    color: "blue",
  },
  {
    name: "Notion",
    icon: Code,
    description: "Documentation Partner",
    color: "white",
  },
  {
    name: "Meta",
    icon: Globe,
    description: "VR Technology Partner",
    color: "cyan",
  },
  {
    name: "Google Cloud",
    icon: Shield,
    description: "AI & ML Partner",
    color: "red",
  },
  {
    name: "NVIDIA",
    icon: Cpu,
    description: "GPU Computing Partner",
    color: "green",
  },
];

export default function PartnersSection() {
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
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Partnering with global technology leaders to deliver cutting-edge educational experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-card p-8 rounded-2xl relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <div className={`p-4 rounded-xl bg-${partner.color}-500/10`}>
                    <partner.icon className={`w-8 h-8 text-${partner.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                    <p className="text-white/60">{partner.description}</p>
                  </div>
                </div>
                <motion.div
                  className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Partner Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: "50+", label: "Global Partners" },
            { value: "$100M+", label: "Joint Investments" },
            { value: "10+", label: "Years of Collaboration" },
          ].map((stat, index) => (
            <div key={stat.label} className="glass-card p-6 rounded-xl text-center">
              <motion.div
                className="text-3xl font-bold gradient-text mb-2"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {stat.value}
              </motion.div>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}