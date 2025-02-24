"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stars, Text3D, Center, Float } from '@react-three/drei';
import { Headset, Glasses, Brain, Laptop, Users } from 'lucide-react';

function VirtualClassroom() {
  return (
    <group>
      {/* Create a simple classroom environment */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Floating platform */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[4, 4, 0.2, 32]} />
        <meshStandardMaterial color="#4f46e5" transparent opacity={0.5} />
      </mesh>

      {/* Floating text */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Center position={[0, 1, 0]}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#00ffff" wireframe />
          </mesh>
        </Center>
      </Float>

      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float
          key={i}
          speed={1}
          rotationIntensity={1}
          floatIntensity={2}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
        >
          <mesh>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial
              color={`hsl(${Math.random() * 360}, 50%, 50%)`}
              emissive={`hsl(${Math.random() * 360}, 50%, 25%)`}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

const features = {
  vr: [
    { icon: Headset, title: "Immersive Learning", description: "Full 360° virtual environment" },
    { icon: Users, title: "Virtual Collaboration", description: "Real-time interaction with peers" },
    { icon: Brain, title: "AI Integration", description: "Smart virtual tutors and guides" },
    { icon: Laptop, title: "Cross-platform", description: "Access from any VR device" },
  ],
  ar: [
    { icon: Glasses, title: "Real-world Overlay", description: "Augmented learning materials" },
    { icon: Brain, title: "Smart Recognition", description: "AI-powered object detection" },
    { icon: Users, title: "Shared Experience", description: "Multi-user AR sessions" },
    { icon: Laptop, title: "Mobile Integration", description: "Works on smartphones and tablets" },
  ],
};

export default function ARVRDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [activeDemo, setActiveDemo] = useState<'ar' | 'vr'>('vr');

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
        >
          Immersive Learning Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative h-[500px] rounded-2xl glass-card overflow-hidden"
          >
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <directionalLight position={[0, 5, 5]} intensity={1} />
              <VirtualClassroom />
              <OrbitControls enableZoom={false} />
            </Canvas>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveDemo('vr')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeDemo === 'vr' 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/50' 
                      : 'bg-white/10'
                  }`}
                >
                  <Headset className="w-4 h-4" />
                  VR Mode
                </button>
                <button
                  onClick={() => setActiveDemo('ar')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeDemo === 'ar' 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                      : 'bg-white/10'
                  }`}
                >
                  <Glasses className="w-4 h-4" />
                  AR Mode
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                {activeDemo === 'vr' ? 'Virtual Reality Classroom' : 'Augmented Reality Learning'}
              </h3>
              <p className="text-white/70">
                {activeDemo === 'vr'
                  ? 'Step into our fully immersive virtual classrooms where learning comes alive. Interact with 3D models, collaborate with peers, and engage with AI tutors in a seamless virtual environment.'
                  : 'Enhance your real-world learning experience with augmented reality. Overlay educational content, interactive diagrams, and AI-powered annotations on your physical surroundings.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features[activeDemo].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-4 glass-card rounded-xl"
                >
                  <feature.icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full font-semibold w-full"
            >
              Try {activeDemo.toUpperCase()} Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}