"use client";

import { motion } from "framer-motion";
import { Calendar, Award, Newspaper, Download, ExternalLink, ArrowRight, Globe, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

const pressReleases = [
  {
    id: 1,
    title: "LearnX Chain Raises $50M in Series B Funding to Revolutionize Education",
    date: "May 15, 2024",
    excerpt: "Funding will accelerate global expansion and development of advanced AI tutoring features.",
    category: "Funding",
    link: "#",
  },
  {
    id: 2,
    title: "LearnX Chain Partners with Top Universities for Blockchain Credentials",
    date: "April 28, 2024",
    excerpt: "Partnership enables secure, verifiable academic credentials for students worldwide.",
    category: "Partnership",
    link: "#",
  },
  {
    id: 3,
    title: "New AI-Powered Learning Features Launched by LearnX Chain",
    date: "March 12, 2024",
    excerpt: "Revolutionary AI tutoring system adapts to individual learning styles and needs.",
    category: "Product",
    link: "#",
  },
  {
    id: 4,
    title: "LearnX Chain Expands to European Market with Berlin Office",
    date: "February 5, 2024",
    excerpt: "European expansion marks significant milestone in company's global growth strategy.",
    category: "Expansion",
    link: "#",
  },
  {
    id: 5,
    title: "LearnX Chain Named in Forbes 'Next Billion-Dollar Startups' List",
    date: "January 18, 2024",
    excerpt: "Recognition highlights company's innovative approach to educational technology.",
    category: "Award",
    link: "#",
  },
  {
    id: 6,
    title: "LearnX Chain Launches Metaverse Classroom Experience",
    date: "December 10, 2023",
    excerpt: "Virtual reality classrooms provide immersive learning environments for students globally.",
    category: "Product",
    link: "#",
  },
];

const mediaKit = [
  {
    title: "Company Logos",
    description: "Download our logo in various formats and sizes",
    icon: Download,
    link: "#",
  },
  {
    title: "Brand Guidelines",
    description: "Learn how to properly use our brand assets",
    icon: Award,
    link: "#",
  },
  {
    title: "Executive Bios",
    description: "Information about our leadership team",
    icon: Users,
    link: "#",
  },
  {
    title: "Product Images",
    description: "High-resolution images of our platform",
    icon: Newspaper,
    link: "#",
  },
];

const mediaFeatures = [
  {
    publication: "TechCrunch",
    title: "How LearnX Chain is Transforming Education with Blockchain",
    date: "April 2024",
    link: "#",
    logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1932&auto=format&fit=crop",
  },
  {
    publication: "Forbes",
    title: "The Future of Learning: LearnX Chain's AI-Powered Platform",
    date: "March 2024",
    link: "#",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1932&auto=format&fit=crop",
  },
  {
    publication: "Wired",
    title: "Inside the Metaverse Classrooms of LearnX Chain",
    date: "February 2024",
    link: "#",
    logo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop",
  },
];

const companyStats = [
  { value: "2M+", label: "Active Users", icon: Users, growth: "+45% YoY" },
  { value: "50+", label: "Countries", icon: Globe, growth: "+15 in 2024" },
  { value: "$75M", label: "Total Funding", icon: TrendingUp, growth: "Series B Closed" },
];

export default function PressPage() {
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
                Press & Media
              </h1>
              <p className="text-xl text-white/80">
                Latest news, press releases, and media resources for LearnX Chain
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-white/70 mb-2">{stat.label}</div>
                  <div className="text-sm text-green-400">{stat.growth}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Press Releases */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12"
            >
              Press Releases
            </motion.h2>
            
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          {release.category}
                        </span>
                        <div className="flex items-center text-white/60 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {release.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{release.title}</h3>
                      <p className="text-white/70 mb-4">{release.excerpt}</p>
                      <a 
                        href={release.link}
                        className="text-cyan-400 flex items-center gap-1 hover:underline"
                      >
                        Read Full Release
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg"
              >
                View All Press Releases
              </motion.button>
            </div>
          </div>
        </section>
        
        {/* Media Features */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12"
            >
              Media Features
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {mediaFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card rounded-xl overflow-hidden group"
                >
                  <div className="h-40 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />
                    <img 
                      src={feature.logo} 
                      alt={feature.publication} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-xl font-bold">{feature.publication}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <div className="flex items-center text-white/60 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {feature.date}
                    </div>
                    <a 
                      href={feature.link}
                      className="flex items-center gap-1 text-cyan-400 hover:underline"
                    >
                      Read Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Media Kit */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-6">
                    Media Kit
                  </h2>
                  <p className="text-white/70 mb-6">
                    Download official LearnX Chain assets for media use. Our press kit includes logos, product images, executive bios, and brand guidelines.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {mediaKit.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-white/5 hover:bg-white/10 rounded-lg flex flex-col items-center text-center"
                      >
                        <item.icon className="w-8 h-8 text-cyan-400 mb-3" />
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-white/60">{item.description}</p>
                      </motion.a>
                    ))}
                  </div>
                </div>
                <div className="relative h-80">
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070" 
                      alt="Media Kit" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold mb-2">Complete Press Kit</h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download All Assets
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Media Inquiries
              </h2>
              <p className="text-white/70 mb-8">
                For press inquiries, interview requests, or additional information, please contact our media relations team.
              </p>
              <div className="glass-card p-6 rounded-xl">
                <div className="text-xl font-semibold mb-2">Press Contact</div>
                <p className="text-white/70 mb-4">
                  Sarah Johnson, Director of Communications<br />
                  press@learnxchain.com<br />
                  +1 (555) 123-4567
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
                >
                  Contact Media Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}