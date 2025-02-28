"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, Video, Globe, Check } from "lucide-react";
import { useState } from "react";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const demoTypes = [
  {
    icon: Video,
    title: "Virtual Demo",
    description: "Online walkthrough of our platform",
  },
  {
    icon: Users,
    title: "Group Session",
    description: "Interactive demo for teams",
  },
  {
    icon: Globe,
    title: "Custom Demo",
    description: "Tailored to your needs",
  },
];

export default function BookDemo() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Experience the Future of Learning
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Schedule a personalized demo and discover how LearnX Chain can transform your educational journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Types */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Choose Your Demo Type</h3>
            {demoTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`p-6 rounded-xl glass-card cursor-pointer relative ${selectedType === type.title ? 'border-cyan-400' : 'border-white/10'
                  }`}
                onClick={() => setSelectedType(type.title)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <type.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{type.title}</h4>
                    <p className="text-white/70">{type.description}</p>
                  </div>
                  {selectedType === type.title && (
                    <Check className="w-6 h-6 text-cyan-400 ml-auto" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Schedule Your Demo</h3>

            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Select Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
                  type="date"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Select Time
              </label>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time, index) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg flex items-center justify-center gap-2 ${selectedTime === time
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500'
                      : 'bg-white/5 hover:bg-white/10'
                      }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    <Clock className="w-4 h-4" />
                    {time}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold mt-6"
            >
              Book Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}