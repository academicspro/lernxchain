"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Phone, MapPin, Globe } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";
import GlobeVisualization from "@/components/globe-visualization";
import ContactMethods from "@/components/contact/contact-methods";
import ContactForm from "@/components/contact/contact-form";

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
            <ContactMethods />

            {/* Contact Form and Globe */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <ContactForm />

              {/* Globe Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <GlobeVisualization />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "How quickly will I receive a response?",
                  answer: "We typically respond to all inquiries within 2 business hours during our operating hours. For urgent matters, please use our 24/7 support line."
                },
                {
                  question: "Can I schedule a demo of your platform?",
                  answer: "Absolutely! You can book a personalized demo through our booking system or by contacting our sales team directly at sales@learnxchain.com."
                },
                {
                  question: "Do you offer support in multiple languages?",
                  answer: "Yes, our support team provides assistance in English, Spanish, French, German, Japanese, and Mandarin Chinese."
                },
                {
                  question: "How can I report technical issues?",
                  answer: "Technical issues can be reported through our support portal, via email to support@learnxchain.com, or through the in-app help center."
                },
                {
                  question: "Are there partnership opportunities available?",
                  answer: "We're always open to strategic partnerships. Please contact our partnership team at partners@learnxchain.com with your proposal."
                },
                {
                  question: "How can I join your team?",
                  answer: "Check out our Careers page for current openings. We're always looking for talented individuals to join our mission."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-12 rounded-2xl text-center max-w-4xl mx-auto relative overflow-hidden"
            >
              <div className="absolute inset-0 cyber-grid opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold gradient-text mb-6">
                  Ready to Transform Your Learning Experience?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Join thousands of learners who have already revolutionized their education with LearnX Chain
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-lg font-semibold"
                  >
                    Get Started Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 rounded-full text-lg font-semibold"
                  >
                    Book a Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}