"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Phone, MapPin, Globe } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (555) 123-4567",
    color: "cyan",
  },
  {
    icon: Mail,
    title: "Email",
    description: "support@learnxchain.com",
    color: "purple",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "123 Innovation Drive, Tech City",
    color: "pink",
  },
];

export default function ContactPage() {
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
                Get in Touch
              </h1>
              <p className="text-xl text-white/80">
                Have questions? We're here to help you transform your learning journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="p-6 rounded-2xl glass-card relative z-10 text-center">
                    <method.icon className={`w-12 h-12 text-${method.color}-400 mx-auto mb-4`} />
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-white/70">{method.description}</p>
                  </div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-${method.color}-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors h-32"
                      placeholder="Your message"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold gradient-text mb-4">
                Global Presence
              </h2>
              <p className="text-white/80">
                Join our growing community of learners across the globe
              </p>
            </motion.div>
            <div className="relative h-[400px] rounded-2xl glass-card overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="w-32 h-32 text-cyan-400" />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2))",
                    "linear-gradient(45deg, rgba(255,0,255,0.2), rgba(0,255,255,0.2))",
                    "linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2))",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}