"use client";

import { motion } from "framer-motion";
import { Brain, ArrowUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail("");
  };

  const footerSections = [
    {
      title: "Platform",
      links: ["Features", "Pricing", "Enterprise", "Security", "API", "Documentation"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Press", "Partners", "Contact"],
    },
    {
      title: "Resources",
      links: ["Community", "Help Center", "Status", "Terms of Service", "Privacy Policy", "Cookie Settings"],
    },
    {
      title: "Solutions",
      links: ["AI Learning", "Blockchain Credentials", "Virtual Classrooms", "AR/VR Education", "Enterprise Solutions", "Integration"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
  ];

  return (
    <footer className="relative pt-20 pb-6 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                LearnXChain
              </span>
            </div>
            <p className="text-white/70 mb-6">
              Revolutionizing education through AI, blockchain, and metaverse technology.
              Join us in shaping the future of learning.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-cyan-400" />
                contact@learnxchain.io
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-purple-400" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-pink-400" />
                123 Innovation Drive, Tech City
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Stay Updated
            </h3>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter for the latest updates on AI education and blockchain technology.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © 2024 LearnX Chain. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, color }) => (
              <motion.a
                key={color}
                href={href}
                whileHover={{ scale: 1.2, y: -2 }}
                className={`text-white/70 ${color} transition-colors`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}