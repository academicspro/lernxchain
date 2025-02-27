"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, GitBranch, GitCommit, GitMerge, GitPullRequest, Star } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

const timelineData = [
  {
    version: "v1.0.0",
    date: "March 2023",
    title: "Initial Launch",
    description: "First release of LearnX Chain with basic AI tutoring capabilities",
    icon: GitCommit,
    highlights: [
      "Basic AI tutoring system",
      "User authentication",
      "Course management",
    ],
    color: "cyan",
  },
  {
    version: "v2.0.0",
    date: "July 2023",
    title: "Blockchain Integration",
    description: "Added blockchain-based credential verification and smart contracts",
    icon: GitBranch,
    highlights: [
      "Credential verification",
      "Smart contracts for certificates",
      "Decentralized storage",
    ],
    color: "purple",
  },
  {
    version: "v3.0.0",
    date: "December 2023",
    title: "Metaverse Expansion",
    description: "Introduced virtual classrooms and AR/VR learning experiences",
    icon: GitMerge,
    highlights: [
      "Virtual classrooms",
      "AR content overlay",
      "VR immersive learning",
    ],
    color: "pink",
  },
  {
    version: "v4.0.0",
    date: "March 2024",
    title: "Advanced AI Features",
    description: "Enhanced AI capabilities with personalized learning paths",
    icon: GitPullRequest,
    highlights: [
      "Personalized learning paths",
      "AI-powered assessments",
      "Real-time progress tracking",
    ],
    color: "yellow",
  },
  {
    version: "v5.0.0",
    date: "Coming Soon",
    title: "Global Scale Release",
    description: "Expanding to global markets with multi-language support",
    icon: Star,
    highlights: [
      "Multi-language support",
      "Global payment integration",
      "Regional content adaptation",
    ],
    color: "green",
  },
];

export default function TimelinePage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-20 pb-20">
        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Our Journey
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Explore the evolution of LearnX Chain from its inception to its current state
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

            {timelineData.map((item, index) => (
              <motion.div
                key={item.version}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-16 ${
                  index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
                } md:w-1/2`}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                  <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r from-${item.color}-500 to-purple-500 flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: [
                          `0 0 0 0 rgba(var(--${item.color}-rgb), 0.4)`,
                          `0 0 0 20px rgba(var(--${item.color}-rgb), 0)`,
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl relative">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className={`w-5 h-5 text-${item.color}-400`} />
                    <span className="text-white/70">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">
                    {item.title}
                  </h3>
                  <div className="text-sm text-white/50 mb-4">{item.version}</div>
                  <p className="text-white/80 mb-6">{item.description}</p>
                  <div className="space-y-2">
                    {item.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${item.color}-400`} />
                        <span className="text-white/70">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-${item.color}-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}