"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Brain, Heart, Star, Coffee, Zap, Globe } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";
import Link from "next/link";

const footerSections = [
  {
    title: "Platform",
    links: [
      { name: "Features", href: "/#features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Enterprise", href: "/pricing" },
      { name: "Security", href: "/security" },
      { name: "API", href: "/documentation" },
      { name: "Documentation", href: "/documentation" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "/partners" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Community", href: "/community" },
      { name: "Help Center", href: "/help-center" },
      { name: "Status", href: "/status" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookie Settings", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "AI Learning", href: "/#features" },
      { name: "Blockchain Credentials", href: "/#features" },
      { name: "Virtual Classrooms", href: "/#features" },
      { name: "AR/VR Education", href: "/#features" },
      { name: "Enterprise Solutions", href: "/pricing" },
      { name: "Integration", href: "/documentation" },
    ],
  }
];

const benefits = [
  {
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours and remote options",
    icon: Heart,
  },
  {
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and books",
    icon: Coffee,
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health, dental, and vision coverage",
    icon: Zap,
  },
  {
    title: "Global Team",
    description: "Collaborate with talented people from around the world",
    icon: Globe,
  },
];

export default function FooterPage() {
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
                Site Navigation
              </h1>
              <p className="text-xl text-white/80">
                Explore all sections of LearnX Chain to find what you are looking for
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer Sections */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-bold gradient-text mb-6">{section.title}</h2>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer group"
                        >
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12 text-center"
            >
              Contact Information
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Email</div>
                      <a href="mailto:contact@learnxchain.io" className="text-lg hover:text-cyan-400 transition-colors cursor-pointer">
                        contact@learnxchain.io
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Phone</div>
                      <a href="tel:+15551234567" className="text-lg hover:text-purple-400 transition-colors cursor-pointer">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Address</div>
                      <div className="text-lg">123 Innovation Drive, Tech City</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Live Chat</div>
                      <div className="text-lg">Available 24/7 for support</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-6">Quick Contact Form</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors h-32"
                      placeholder="Your message"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold cursor-pointer"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Company Information */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12 text-center"
            >
              About LearnX Chain
            </motion.h2>
            
            <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Brain className="w-12 h-12 text-cyan-400" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  LearnX Chain
                </h3>
              </div>
              
              <p className="text-white/80 mb-6">
                LearnX Chain is revolutionizing education through AI, blockchain, and metaverse technology. 
                Our platform combines AI-powered learning, blockchain credential verification, and immersive 
                virtual reality experiences to create a comprehensive educational ecosystem that prepares 
                learners for the future.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
                  <p className="text-white/70">
                    To democratize education and make high-quality learning experiences accessible to everyone, 
                    regardless of location or background, through innovative technology.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
                  <p className="text-white/70">
                    A world where education is personalized, engaging, and verifiable, empowering individuals 
                    to reach their full potential and contribute to a better future.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Join Our Team</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-white/5 rounded-lg"
                    >
                      <benefit.icon className="w-6 h-6 text-cyan-400 mb-2" />
                      <h5 className="font-semibold mb-1">{benefit.title}</h5>
                      <p className="text-sm text-white/60">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Link href="/careers">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold cursor-pointer"
                    >
                      View Open Positions
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Legal Links */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12 text-center"
            >
              Legal Information
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Terms of Service",
                  description: "The rules and guidelines for using our platform",
                  href: "/terms-of-service",
                },
                {
                  title: "Privacy Policy",
                  description: "How we collect, use, and protect your personal information",
                  href: "/privacy-policy",
                },
                {
                  title: "Cookie Policy",
                  description: "Information about how we use cookies and similar technologies",
                  href: "#",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70 mb-4">{item.description}</p>
                  <Link href={item.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm cursor-pointer"
                    >
                      View Document
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8 text-white/60 max-w-2xl mx-auto">
              <p>
                © 2024 LearnX Chain. All rights reserved. LearnX Chain and its logo are trademarks of LearnX Chain Inc.
                All other trademarks are the property of their respective owners.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );


}


// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page