"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

export default function TermsOfServicePage() {
  const lastUpdated = "May 15, 2024";

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
                Terms of Service
              </h1>
              <p className="text-xl text-white/80">
                Please read these terms carefully before using our platform
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-white/60">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: {lastUpdated}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Reading Time: ~15 minutes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-2xl max-w-4xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { number: "1", title: "Acceptance of Terms" },
                  { number: "2", title: "Description of Service" },
                  { number: "3", title: "User Registration" },
                  { number: "4", title: "Privacy Policy" },
                  { number: "5", title: "User Conduct" },
                  { number: "6", title: "Intellectual Property" },
                  { number: "7", title: "Payment Terms" },
                  { number: "8", title: "Termination" },
                  { number: "9", title: "Disclaimers" },
                  { number: "10", title: "Limitation of Liability" },
                  { number: "11", title: "Indemnification" },
                  { number: "12", title: "Governing Law" },
                  { number: "13", title: "Changes to Terms" },
                  { number: "14", title: "Contact Information" },
                ].map((item) => (
                  <a 
                    key={item.number}
                    href={`#section-${item.number}`}
                    className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 font-semibold">
                      {item.number}
                    </div>
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Terms Content */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-2xl max-w-4xl mx-auto"
            >
              <div id="section-1" className="mb-12">
                <h2 className="text-2xl font-bold gradient-text mb-6">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    By accessing or using LearnX Chain's platform, website, applications, or any other services provided by LearnX Chain (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and LearnX Chain regarding your use of the Services. You must be at least 18 years old to use our Services. If you are under 18, you may only use the Services with the consent and supervision of a parent or legal guardian who agrees to be bound by these Terms.
                  </p>
                </div>
              </div>
              
              <div id="section-2" className="mb-12">
                <h2 className="text-2xl font-bold gradient-text mb-6">2. Description of Service</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    LearnX Chain provides an educational platform that combines AI-powered learning, blockchain credential verification, and immersive metaverse experiences. Our Services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI tutoring and personalized learning paths</li>
                    <li>Blockchain-based credential issuance and verification</li>
                    <li>Virtual and augmented reality learning environments</li>
                    <li>Educational content and courses</li>
                    <li>Community features and collaboration tools</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, including the availability of any feature, database, or content. We may also impose limits on certain features or restrict your access to parts or all of the Services without notice or liability.
                  </p>
                </div>
              </div>
              
              <div id="section-3" className="mb-12">
                <h2 className="text-2xl font-bold gradient-text mb-6">3. User Registration</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    To access certain features of our Services, you may be required to register for an account. When registering, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                  </p>
                  <p>
                    You agree to immediately notify LearnX Chain of any unauthorized use of your account or any other breach of security. LearnX Chain will not be liable for any loss or damage arising from your failure to comply with this section.
                  </p>
                  <p>
                    You may not share your account credentials with any third party. Each account is for a single user only. You are solely responsible for all content posted and activity that occurs under your account.
                  </p>
                </div>
              </div>
              
              <div id="section-4" className="mb-12">
                <h2 className="text-2xl font-bold gradient-text mb-6">4. Privacy Policy</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Our Privacy Policy details how we collect, use, and share your information when you use our Services.
                  </p>
                  <p>
                    By using our Services, you consent to the collection, use, and sharing of your information as described in our Privacy Policy. If you do not agree with our Privacy Policy, please do not use our Services.
                  </p>
                  <p>
                    You can view our Privacy Policy at <a href="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </div>
              
              <div id="section-5" className="mb-12">
                <h2 className="text-2xl font-bold gradient-text mb-6">5. User Conduct</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    You agree not to use the Services to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe the intellectual property rights of others</li>
                    <li>Harass, abuse, or harm another person</li>
                    <li>Upload or transmit viruses or malicious code</li>
                    <li>Interfere with or disrupt the Services or servers</li>
                    <li>Attempt to gain unauthorized access to any part of the Services</li>
                    <li>Use the Services for any illegal or unauthorized purpose</li>
                    <li>Engage in any activity that could damage, disable, or impair the Services</li>
                  </ul>
                  <p>
                    LearnX Chain reserves the right to remove any content that violates these Terms or is otherwise objectionable, in our sole discretion. We also reserve the right to terminate or restrict your access to the Services for any violation of these Terms.
                  </p>
                </div>
              </div>
              
              {/* Additional sections would continue here */}
              <div className="text-center mt-8">
                <p className="text-white/60 mb-4">This is a simplified version of our Terms of Service. For the complete terms, please download the full document.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold flex items-center gap-2 mx-auto"
                >
                  <FileText className="w-5 h-5" />
                  Download Full Terms of Service
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Related Documents */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12 text-center"
            >
              Related Documents
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Privacy Policy",
                  description: "Learn how we collect, use, and protect your personal information",
                  icon: Shield,
                  link: "/privacy-policy",
                },
                {
                  title: "Cookie Policy",
                  description: "Information about how we use cookies and similar technologies",
                  icon: FileText,
                  link: "#",
                },
                {
                  title: "Acceptable Use Policy",
                  description: "Guidelines for appropriate use of our platform and services",
                  icon: FileText,
                  link: "#",
                },
              ].map((doc, index) => (
                <motion.a
                  key={index}
                  href={doc.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <doc.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                  <p className="text-white/70 mb-4">{doc.description}</p>
                  <div className="flex items-center justify-center gap-1 text-cyan-400">
                    View Document
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-2xl text-center max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-bold gradient-text mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-white/70 mb-6">
                If you have any questions about our Terms of Service, please contact our legal team.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
              >
                Contact Legal Team
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}