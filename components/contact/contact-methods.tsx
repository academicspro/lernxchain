"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Globe, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (555) 123-4567",
    color: "cyan",
    details: "Available 24/7 for urgent inquiries",
  },
  {
    icon: Mail,
    title: "Email",
    description: "support@learnxchain.com",
    color: "purple",
    details: "We typically respond within 2 hours",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    description: "123 Innovation Drive, Tech City",
    color: "pink",
    details: "Open Monday-Friday, 9am-6pm",
  },
  {
    icon: Clock,
    title: "Support Hours",
    description: "24/7 Technical Support",
    color: "yellow",
    details: "Business inquiries: Mon-Fri 9am-6pm",
  },
  {
    icon: Globe,
    title: "Global Offices",
    description: "New York, London, Tokyo, Singapore",
    color: "green",
    details: "View all locations on our interactive map",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our AI assistant",
    color: "blue",
    details: "Human agents available during business hours",
  },
];

export default function ContactMethods() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {contactMethods.map((method, index) => (
        <motion.div
          key={method.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="p-6 rounded-2xl glass-card relative z-10 h-full">
            <method.icon className={`w-12 h-12 text-${method.color}-400 mb-4`} />
            <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
            <p className="text-white/90 mb-2">{method.description}</p>
            <p className="text-white/60 text-sm">{method.details}</p>
            
            {method.title === "Live Chat" && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg text-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Start Chat
              </motion.button>
            )}
            
            {method.title === "Global Offices" && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg text-sm flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                View Map
              </motion.button>
            )}
          </div>
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r from-${method.color}-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
          />
        </motion.div>
      ))}
    </div>
  );
}