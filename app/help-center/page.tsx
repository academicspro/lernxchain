"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, HelpCircle, Book, FileText, MessageSquare, Video, ChevronRight, ChevronDown, ArrowRight, Mail, Phone, Globe } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

const categories = [
  { name: "Getting Started", icon: Book, color: "cyan" },
  { name: "Account & Billing", icon: FileText, color: "purple" },
  { name: "Platform Features", icon: Globe, color: "pink" },
  { name: "Technical Issues", icon: HelpCircle, color: "yellow" },
  { name: "Integrations", icon: MessageSquare, color: "green" },
  { name: "Video Tutorials", icon: Video, color: "blue" },
];

const popularArticles = [
  {
    id: 1,
    title: "How to create your first AI tutor",
    category: "Getting Started",
    views: 15420,
  },
  {
    id: 2,
    title: "Setting up blockchain credentials",
    category: "Platform Features",
    views: 12350,
  },
  {
    id: 3,
    title: "Troubleshooting VR classroom issues",
    category: "Technical Issues",
    views: 9870,
  },
  {
    id: 4,
    title: "Managing your subscription plan",
    category: "Account & Billing",
    views: 8540,
  },
  {
    id: 5,
    title: "Integrating with LMS platforms",
    category: "Integrations",
    views: 7620,
  },
  {
    id: 6,
    title: "Creating custom learning paths",
    category: "Platform Features",
    views: 6980,
  },
];

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password. If you don't receive the email, check your spam folder or contact support.",
  },
  {
    question: "Can I use LearnX Chain on mobile devices?",
    answer: "Yes, LearnX Chain is fully responsive and works on all mobile devices. We also offer dedicated apps for iOS and Android that provide enhanced features and offline access to your learning materials.",
  },
  {
    question: "How secure are my blockchain credentials?",
    answer: "Your blockchain credentials are secured using advanced cryptographic techniques. They are stored on a distributed ledger, making them tamper-proof and easily verifiable by authorized parties. We use industry-standard security protocols to ensure the integrity of all credentials.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. We also support cryptocurrency payments including Bitcoin, Ethereum, and USDC.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time from your account settings. Go to 'Billing' and click on 'Cancel Subscription'. Your access will continue until the end of your current billing period. We don't offer refunds for partial months.",
  },
  {
    question: "What hardware is required for VR classrooms?",
    answer: "Our VR classrooms are compatible with most popular VR headsets including Meta Quest, HTC Vive, and Valve Index. For the best experience, we recommend a headset with 6DOF tracking. However, you can also access a simplified version of our VR classrooms through any modern web browser.",
  },
];

export default function HelpCenterPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
                How Can We Help?
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Find answers, tutorials, and resources to help you get the most out of LearnX Chain
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
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
              Browse by Category
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
        
        {/* Popular Articles */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y:  20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12"
            >
              Popular Articles
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {article.category}
                    </span>
                    <span className="text-white/50 text-sm ml-auto">
                      {article.views.toLocaleString()} views
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
                  <a 
                    href="#"
                    className="flex items-center gap-1 text-cyan-400 hover:underline"
                  >
                    Read Article
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
                View All Articles
              </motion.button>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl overflow-hidden"
                >
                  <div 
                    className="p-6 flex items-center justify-between cursor-pointer"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-6 pb-6 text-white/70"
                    >
                      <div className="pt-4 border-t border-white/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg"
              >
                View All FAQs
              </motion.button>
            </div>
          </div>
        </section>
        
        {/* Video Tutorials */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12"
            >
              Video Tutorials
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Getting Started with LearnX Chain",
                  duration: "5:32",
                  thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
                },
                {
                  title: "Creating Your First AI Tutor",
                  duration: "8:45",
                  thumbnail: "https://images.unsplash.com/photo-1596496181871-9681eacf9764?q=80&w=2069",
                },
                {
                  title: "Exploring VR Classrooms",
                  duration: "6:18",
                  thumbnail: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070",
                },
              ].map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card rounded-xl overflow-hidden group"
                >
                  <div className="relative h-48">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{video.title}</h3>
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
                View All Tutorials
              </motion.button>
            </div>
          </div>
        </section>
        
        {/* Contact Support */}
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
                    Still Need Help?
                  </h2>
                  <p className="text-white/70 mb-6">
                    Our support team is available 24/7 to assist you with any questions or issues you may have.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Live Chat</div>
                        <div className="text-sm text-white/70">Available 24/7 for immediate assistance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Email Support</div>
                        <div className="text-sm text-white/70">support@learnxchain.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Phone Support</div>
                        <div className="text-sm text-white/70">+1 (555) 123-4567</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
                    >
                      Contact Support
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white/10 rounded-lg font-semibold"
                    >
                      Submit Ticket
                    </motion.button>
                  </div>
                </div>
                <div className="relative h-80">
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069" 
                      alt="Support Team" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-2xl font-bold mb-2">Dedicated Support Team</div>
                    <p className="text-white/80">Our team of experts is ready to help you succeed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Community Help */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Community Help
              </h2>
              <p className="text-white/70 mb-8">
                Join our community forum to connect with other users, share knowledge, and get help from the LearnX Chain community.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto"
              >
                Visit Community Forum
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}