"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import KeyFeatures from "@/components/key-features";
import ARVRDemo from "@/components/ar-vr-demo";
import BlockchainFeatures from "@/components/blockchain-features";
import AIFeatures from "@/components/ai-features";
import TeamSection from "@/components/team-section";
import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-hidden">
      <motion.div 
        className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10 pointer-events-none"
        style={{ y: backgroundY }}
      />
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <KeyFeatures />
        <ARVRDemo />
        <BlockchainFeatures />
        <AIFeatures />
        <TeamSection />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}