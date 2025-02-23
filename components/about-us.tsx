"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About LearnX Chain
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Founded at the intersection of education and technology, LearnX Chain is
            pioneering the future of learning with AI, Blockchain, and the
            Metaverse. Our mission is to make quality education accessible,
            verifiable, and immersive for everyone.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                year: "2023",
                title: "Foundation",
                description: "LearnX Chain was established",
              },
              {
                year: "2024",
                title: "Innovation",
                description: "Launched AI tutoring system",
              },
              {
                year: "2025",
                title: "Expansion",
                description: "Global metaverse classrooms",
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  {milestone.year}
                </div>
                <div className="text-lg font-semibold mb-2">{milestone.title}</div>
                <div className="text-white/70">{milestone.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}