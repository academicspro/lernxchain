"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import KeyFeatures from "@/components/key-features";
import ARVRDemo from "@/components/ar-vr-demo";
import BlockchainFeatures from "@/components/blockchain-features";
import AIFeatures from "@/components/ai-features";
import TeamSection from "@/components/team-section";
import ComparisonSection from "@/components/comparison-section";
import ReviewSection from "@/components/review-section";
import PartnersSection from "@/components/partners-section";
import ImmersiveClassroom from "@/components/immersive-classroom";
import BookDemo from "@/components/book-demo";
import ParticleBackground from "@/components/particle-background";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

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
        <ImmersiveClassroom />
        <BlockchainFeatures />
        <AIFeatures />
        <ComparisonSection />
        <PartnersSection />
        <ReviewSection />
        <BookDemo />
        <TeamSection />
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}