"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Headset, Glasses, Brain, Users, Laptop, Globe } from 'lucide-react';

const features = [
  {
    title: "Virtual Reality Classrooms",
    description: "Immersive 3D environments for interactive learning",
    icon: Headset,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070",
  },
  {
    title: "Augmented Reality Labs",
    description: "Overlay digital content on real-world objects",
    icon: Glasses,
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=2070",
  },
  {
    title: "Mixed Reality Workshops",
    description: "Blend virtual and physical learning spaces",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012",
  },
];

export default function ImmersiveClassroom() {
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
            Immersive Learning Experience
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Step into the future of education with our cutting-edge AR/VR classrooms
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <feature.icon className="absolute bottom-4 right-4 w-8 h-8 text-cyan-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 glass-card p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Experience it Yourself
              </h3>
              <p className="text-white/70 mb-6">
                Try our demo classroom and see how immersive technology transforms learning. Put on your VR headset or use your mobile device for AR experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full font-semibold flex items-center gap-2"
                >
                  <Headset className="w-5 h-5" />
                  Launch VR Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 rounded-full font-semibold flex items-center gap-2"
                >
                  <Glasses className="w-5 h-5" />
                  Try AR Experience
                </motion.button>
              </div>
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
                <Globe className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}