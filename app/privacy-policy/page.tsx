"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, FileText, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-xl text-white/80">
                How we collect, use, and protect your personal information
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-white/60">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: {lastUpdated}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Reading Time: ~10 minutes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12 text-center"
            >
              Privacy at a Glance
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Data Collection",
                  description: "We collect information you provide and data about how you use our services",
                  icon: Database,
                },
                {
                  title: "Data Protection",
                  description: "We use industry-standard security measures to protect your personal information",
                  icon: Shield,
                },
                {
                  title: "Your Privacy Rights",
                  description: "You have the right to access, correct, or delete your personal information",
                  icon: Lock,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <item.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
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
                  { number: "1", title: "Introduction" },
                  { number: "2", title: "Information We Collect" },
                  { number: "3", title: "How We Use Your Information" },
                  { number: "4", title: "How We Share Your Information" },
                  { number: "5", title: "Your Privacy Rights" },
                  { number: "6", title: "Data Security" },
                  { number: "7", title: "International Data Transfers" },
                  { number: "8", title: "Children's Privacy" },
                  { number: "9", title: "Changes to This Policy" },
                  { number: "10", title: "Contact Us" },
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
        
        {/* Privacy Content */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-2xl max-w-4xl mx-auto"
            >
              <div id="section-1" className="mb-12">
                <h2 className="text-2xl font-bold gradient-text mb-6">1. Introduction</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    LearnX Chain ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, applications, or any other services provided by LearnX Chain (collectively, the "Services").
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use our Services. By accessing or using our Services, you consent to the collection, use, and sharing of your information as described in this Privacy Policy.
                  </p>
                  <p>
                    We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of this policy and, in some cases, we may provide you with additional notice (such as adding a statement to our website or sending you a notification). We encourage you to review this Privacy Policy regularly to stay informed about our information practices and the choices available to you.
                  </p>
                </div>
              </div>
              
              <div id="section-2" className="mb-12">
                <h2 className="text-2xl font-bold gradient-text mb-6">2. Information We Collect</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    We collect several types of information from and about users of our Services:
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide to Us</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Account Information:</strong> When you register for an account, we collect your name, email address, password, and other information you provide during the registration process.
                    </li>
                    <li>
                      <strong>Profile Information:</strong> When you create or update your profile, we collect information such as your profile picture, biography, educational background, and professional experience.
                    </li>
                    <li>
                      <strong>Payment Information:</strong> If you make a purchase, we collect payment information, including your credit card details, billing address, and other financial information necessary to process your payment.
                    </li>
                    <li>
                      <strong>Communications:</strong> When you contact us directly, we record the communications and collect any information you provide in those interactions.
                    </li>
                    <li>
                      <strong>User Content:</strong> We collect the content you submit to our Services, including assignments, projects, comments, and other materials.
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect Automatically</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Usage Information:</strong> We collect information about your interactions with our Services, such as the pages or content you view, the features you use, and the actions you take.
                    </li>
                    <li>
                      <strong>Device Information:</strong> We collect information about the device you use to access our Services, including the hardware model, operating system and version, unique device identifiers, and mobile network information.
                    </li>
                    <li>
                      <strong>Location Information:</strong> We may collect information about your location when you access our Services, including precise location data with your consent.
                    </li>
                    <li>
                      <strong>Log Information:</strong> We collect log information when you use our Services, including your IP address, browser type, access times, pages viewed, and the page you visited before navigating to our Services.
                    </li>
                    <li>
                      <strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to collect information about your browsing behavior and preferences.
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect from Other Sources</h3>
                  <p>
                    We may obtain information about you from other sources, including third parties, and combine that information with information we collect through our Services. For example, we may collect information about you from identity verification services, credit bureaus, and data analytics providers.
                  </p>
                </div>
              </div>
              
              <div id="section-3" className="mb-12">
                <h2 className="text-2xl font-bold gradient-text mb-6">3. How We Use Your Information</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    We use the information we collect for various purposes, including to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our Services</li>
                    <li>Process transactions and send related information, including confirmations and receipts</li>
                    <li>Send you technical notices, updates, security alerts, and support and administrative messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Communicate with you about products, services, offers, promotions, and events, and provide other news or information about us and our partners</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                    <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of LearnX Chain and others</li>
                    <li>Personalize and improve the Services, including providing content or features that match user profiles or interests</li>
                    <li>Facilitate contests, sweepstakes, and promotions and process and deliver entries and rewards</li>
                    <li>Carry out any other purpose described to you at the time the information was collected</li>
                  </ul>
                </div>
              </div>
              
              {/* Additional sections would continue here */}
              <div className="text-center mt-8">
                <p className="text-white/60 mb-4">This is a simplified version of our Privacy Policy. For the complete policy, please download the full document.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold flex items-center gap-2 mx-auto"
                >
                  <FileText className="w-5 h-5" />
                  Download Full Privacy Policy
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Privacy Controls */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12 text-center"
            >
              Your Privacy Controls
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Access Your Data",
                  description: "Request a copy of all personal data we have collected about you",
                  icon: Eye,
                  action: "Request Data",
                },
                {
                  title: "Update Your Information",
                  description: "Modify or correct any personal information in your account",
                  icon: FileText,
                  action: "Update Info",
                },
                {
                  title: "Delete Your Data",
                  description: "Request deletion of your personal information from our systems",
                  icon: Database,
                  action: "Delete Data",
                },
              ].map((control, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <control.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{control.title}</h3>
                  <p className="text-white/70 mb-4">{control.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm w-full"
                  >
                    {control.action}
                  </motion.button>
                </motion.div>
              ))}
            </div>
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
                  title: "Terms of Service",
                  description: "The rules and guidelines for using our platform",
                  icon: FileText,
                  link: "/terms-of-service",
                },
                {
                  title: "Cookie Policy",
                  description: "Information about how we use cookies and similar technologies",
                  icon: FileText,
                  link: "#",
                },
                {
                  title: "Data Processing Agreement",
                  description: "For business customers and partners processing personal data",
                  icon: Shield,
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
                Privacy Questions?
              </h2>
              <p className="text-white/70 mb-6">
                If you have any questions about our Privacy Policy or how we handle your personal information, please contact our Data Protection Officer.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
              >
                Contact Privacy Team
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}