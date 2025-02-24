"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  rotation: number;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    const colors = [
      "rgba(0, 255, 255, 0.3)",
      "rgba(255, 0, 255, 0.3)",
      "rgba(0, 255, 0, 0.3)",
      "rgba(255, 0, 0, 0.3)",
      "rgba(0, 0, 255, 0.3)",
    ];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        rotation: Math.random() * 360,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: particle.x,
            top: particle.y,
            rotate: particle.rotation,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [particle.y, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [particle.rotation, particle.rotation + 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
    </div>
  );
}