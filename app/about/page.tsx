"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Globe, Award, Users, BookOpen } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

const milestones = [
  {
    year: "2023",
    title: "Foundation",
    description: "LearnX Chain was established with a vision to revolutionize education",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "Innovation",
    description: "Launched groundbreaking AI tutoring system and blockchain verification",
    icon: Brain,
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Expanded to 50+ countries with metaverse classrooms",
    icon: Globe,
  },
];

const stats = [
  { value: "500K+", label: "Active Students", icon: Users },
  { value: "1000+", label: "Course Offerings", icon: BookOpen },
  { value: "100+", label: "Industry Partners", icon: Award },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Our Story
              </h1>
              <p className="text-xl text-white/80">
                Pioneering the future of education through technology and innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold gradient-text">Our Mission</h2>
                <p className="text-white/80">
                  At LearnX Chain, we believe in democratizing education through cutting-edge technology. Our platform combines AI-powered learning, blockchain verification, and immersive metaverse experiences to create a revolutionary educational ecosystem.
                </p>
                <ul className="space-y-4">
                  {[
                    "Accessible education for everyone",
                    "Innovation in learning methods",
                    "Secure and verifiable credentials",
                    "Global community of learners",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl glass-card overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20" />
                <div className="absolute inset-0 cyber-grid opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-32 h-32 text-cyan-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center gradient-text mb-16"
            >
              Our Journey
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="p-6 rounded-2xl glass-card relative z-10">
                    <milestone.icon className="w-12 h-12 text-cyan-400 mb-4" />
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-xl font-semibold mb-2">{milestone.title}</div>
                    <div className="text-white/70">{milestone.description}</div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}