"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Book, Code, FileText, Search, ChevronRight, Terminal, Database, Globe, Cpu, Layers, Zap, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

const categories = [
  { name: "Getting Started", icon: Book, color: "cyan" },
  { name: "API Reference", icon: Code, color: "purple" },
  { name: "SDK Documentation", icon: Terminal, color: "pink" },
  { name: "Blockchain Integration", icon: Database, color: "yellow" },
  { name: "VR/AR Development", icon: Globe, color: "green" },
  { name: "AI Tutoring", icon: Cpu, color: "blue" },
];

const popularDocs = [
  {
    title: "Quick Start Guide",
    description: "Get up and running with LearnX Chain in minutes",
    category: "Getting Started",
    readTime: "5 min read",
  },
  {
    title: "Authentication API",
    description: "Learn how to implement user authentication",
    category: "API Reference",
    readTime: "8 min read",
  },
  {
    title: "Blockchain Credential Issuance",
    description: "Issue verifiable credentials on the blockchain",
    category: "Blockchain Integration",
    readTime: "12 min read",
  },
  {
    title: "VR Classroom Setup",
    description: "Create immersive virtual reality classrooms",
    category: "VR/AR Development",
    readTime: "15 min read",
  },
  {
    title: "AI Tutor Configuration",
    description: "Configure and customize AI tutoring experiences",
    category: "AI Tutoring",
    readTime: "10 min read",
  },
  {
    title: "JavaScript SDK Installation",
    description: "Install and initialize the JavaScript SDK",
    category: "SDK Documentation",
    readTime: "3 min read",
  },
];

const recentUpdates = [
  {
    title: "New AI Tutoring API Endpoints",
    description: "We've added new endpoints for advanced AI tutoring capabilities",
    date: "May 15, 2024",
    version: "v2.3.0",
  },
  {
    title: "VR Classroom SDK Updates",
    description: "Improved performance and new features for VR classroom development",
    date: "May 10, 2024",
    version: "v1.8.0",
  },
  {
    title: "Blockchain Credential Verification Enhancements",
    description: "New methods for verifying credentials across multiple chains",
    date: "May 5, 2024",
    version: "v3.1.0",
  },
];

export default function DocumentationPage() {
  const [searchTerm, setSearchTerm] = useState("");

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
                Documentation
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Comprehensive guides, API references, and resources to help you build with LearnX Chain
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-cyan-400 text-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full font-semibold"
                >
                  Search
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12 text-center"
            >
              Browse Documentation
            </motion.h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-6 rounded-xl text-center cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-${category.color}-500/20`}>
                      <category.icon className={`w-8 h-8 text-${category.color}-400`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Documentation */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12"
            >
              Popular Documentation
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDocs.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {doc.category}
                    </span>
                    <span className="text-white/50 text-sm ml-auto">
                      {doc.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{doc.title}</h3>
                  <p className="text-white/70 mb-4">{doc.description}</p>
                  <a 
                    href="#"
                    className="flex items-center gap-1 text-cyan-400 hover:underline"
                  >
                    Read Documentation
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Recent Updates */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12"
            >
              Recent Updates
            </motion.h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {recentUpdates.map((update, index) => (
                <motion.div
                  key={update.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex flex-wrap justify-between items-center gap-4 mb-3">
                    <h3 className="text-xl font-semibold">{update.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-white/50 text-sm">
                        {update.date}
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {update.version}
                      </span>
                    </div>
                  </div>
                  <p className="text-white/70 mb-4">{update.description}</p>
                  <a 
                    href="#"
                    className="flex items-center gap-1 text-cyan-400 hover:underline"
                  >
                    View Changelog
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg"
              >
                View All Updates
              </motion.button>
            </div>
          </div>
        </section>
        
        {/* API Reference */}
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
                    API Reference
                  </h2>
                  <p className="text-white/70 mb-6">
                    Comprehensive documentation for our RESTful APIs, including endpoints, parameters, and response formats. Build integrations with our platform using our well-documented APIs.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">RESTful Endpoints</div>
                        <div className="text-sm text-white/70">Well-documented API endpoints with examples</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Layers className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">SDK Libraries</div>
                        <div className="text-sm text-white/70">Client libraries for multiple programming languages</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Webhooks</div>
                        <div className="text-sm text-white/70">Real-time event notifications for your applications</div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
                  >
                    Explore API Docs
                  </motion.button>
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/80 font-mono text-sm p-6 overflow-auto">
                    <div className="text-green-400 mb-2">// Example API Request</div>
                    <div className="text-cyan-400">GET /api/v1/courses</div>
                    <div className="text-white/70 mt-4">Headers:</div>
                    <div className="text-white/90">
                      Authorization: Bearer {'{token}'}
                    </div>
                    <div className="text-white/70 mt-4">Response:</div>
                    <div className="text-purple-400">{'{'}</div>
                    <div className="text-white/90 ml-4">
                      "status": "success",<br />
                      "data": {'['}
                    </div>
                    <div className="text-white/90 ml-8">
                      {'{'}<br />
                      <span className="ml-4">"id": "course_123",</span><br />
                      <span className="ml-4">"title": "Introduction to AI",</span><br />
                      <span className="ml-4">"description": "Learn the basics of AI",</span><br />
                      <span className="ml-4">"instructor": "Dr. Sarah Johnson",</span><br />
                      <span className="ml-4">"duration": "6 weeks",</span><br />
                      <span className="ml-4">"level": "Beginner"</span><br />
                      {'}'},
                    </div>
                    <div className="text-white/90 ml-8">
                      // More courses...
                    </div>
                    <div className="text-white/90 ml-4">
                      {']'}
                    </div>
                    <div className="text-purple-400">{'}'}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* SDK Documentation */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12 text-center"
            >
              SDK Documentation
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  language: "JavaScript",
                  description: "Build web and Node.js applications",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                },
                {
                  language: "Python",
                  description: "Perfect for data science and AI integration",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                },
                {
                  language: "Unity C#",
                  description: "Create immersive VR/AR experiences",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
                },
              ].map((sdk, index) => (
                <motion.div
                  key={sdk.language}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-4">
                    <img 
                      src={sdk.icon} 
                      alt={sdk.language} 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{sdk.language} SDK</h3>
                  <p className="text-white/70 mb-4">{sdk.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm w-full"
                  >
                    View Documentation
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Developer Resources */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12 text-center"
            >
              Developer Resources
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Sample Projects",
                  description: "Example applications built with our platform",
                  icon: FileText,
                },
                {
                  title: "GitHub Repository",
                  description: "Open-source tools and libraries",
                  icon: Code,
                },
                {
                  title: "Developer Forum",
                  description: "Community support and discussions",
                  icon: Globe,
                },
                {
                  title: "Tutorials",
                  description: "Step-by-step guides for common tasks",
                  icon: Book,
                },
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <resource.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{resource.title}</h3>
                  <p className="text-white/70 mb-4 text-center">{resource.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm w-full"
                  >
                    Explore
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Developer Support */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-2xl text-center max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-bold gradient-text mb-6">
                Need Developer Support?
              </h2>
              <p className="text-white/70 mb-6">
                Our developer support team is available to help you with any technical questions or issues you may encounter.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
                >
                  Contact Developer Support
                </motion.button>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 rounded-lg font-semibold flex items-center gap-2"
                >
                  Join Discord Community
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}