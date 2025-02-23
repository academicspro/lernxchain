"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Headset, Glasses } from 'lucide-react';

function VirtualClassroom(props: any) {
  // const { nodes, materials } = useGLTF('/classroom.glb');
  return (
    <group {...props}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#4f46e5" wireframe />
      </mesh>
      
    </group>
  );
}

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
            className="relative h-[400px] rounded-2xl glass-card overflow-hidden"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <VirtualClassroom />
              <OrbitControls />
            </Canvas>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveDemo('vr')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    activeDemo === 'vr' ? 'bg-purple-500' : 'bg-white/10'
                  }`}
                >
                  <Headset className="w-4 h-4" />
                  VR Mode
                </button>
                <button
                  onClick={() => setActiveDemo('ar')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    activeDemo === 'ar' ? 'bg-purple-500' : 'bg-white/10'
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
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text">
              {activeDemo === 'vr' ? 'Virtual Reality Classroom' : 'Augmented Reality Learning'}
            </h3>
            <p className="text-white/70">
              {activeDemo === 'vr'
                ? 'Step into our fully immersive virtual classrooms where learning comes alive. Interact with 3D models, collaborate with peers, and engage with AI tutors in a seamless virtual environment.'
                : 'Enhance your real-world learning experience with augmented reality. Overlay educational content, interactive diagrams, and AI-powered annotations on your physical surroundings.'}
            </p>
            <ul className="space-y-4">
              {(activeDemo === 'vr' ? [
                'Full 360° immersive environment',
                'Real-time collaboration with peers',
                'Interactive 3D learning materials',
                'AI-powered virtual tutors'
              ] : [
                'Real-world object recognition',
                'Interactive AR annotations',
                'Spatial audio guidance',
                'Gesture-based interactions'
              ]).map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}