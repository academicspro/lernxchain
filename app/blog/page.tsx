"use client";

import { motion } from "framer-motion";
import { Search, Calendar, User, Clock, Tag, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";
import { useState } from "react";

const categories = [
  "All",
  "AI & Machine Learning",
  "Blockchain",
  "VR/AR",
  "EdTech",
  "Future of Learning",
  "Case Studies",
  "Company News",
];

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Education: Personalized Learning Paths",
    excerpt: "Explore how artificial intelligence is revolutionizing education by creating truly personalized learning experiences for students of all ages.",
    category: "AI & Machine Learning",
    author: "Dr. Sarah Johnson",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
    featured: true,
  },
  {
    id: 2,
    title: "Blockchain Credentials: Ensuring Trust in Educational Achievements",
    excerpt: "How blockchain technology is solving the problem of credential verification and creating tamper-proof educational records.",
    category: "Blockchain",
    author: "Michael Chen",
    date: "May 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070",
  },
  {
    id: 3,
    title: "Virtual Reality Classrooms: Beyond the Physical Limitations",
    excerpt: "Discover how VR technology is breaking down the physical barriers of traditional classrooms and creating immersive learning environments.",
    category: "VR/AR",
    author: "Emily Rodriguez",
    date: "May 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070",
  },
  {
    id: 4,
    title: "Case Study: How University X Implemented LearnX Chain",
    excerpt: "A detailed look at how University X transformed their online learning program with LearnX Chain's integrated platform.",
    category: "Case Studies",
    author: "David Kim",
    date: "April 28, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
  },
  {
    id: 5,
    title: "The Role of Data Analytics in Improving Learning Outcomes",
    excerpt: "How data-driven insights are helping educators understand student performance and optimize teaching methods.",
    category: "EdTech",
    author: "Lisa Thompson",
    date: "April 22, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  },
  {
    id: 6,
    title: "LearnX Chain Raises $50M in Series B Funding",
    excerpt: "Exciting news about our recent funding round and how we plan to accelerate our mission to transform education.",
    category: "Company News",
    author: "James Wilson",
    date: "April 15, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2070",
  },
  {
    id: 7,
    title: "Augmented Reality: Bringing Learning Materials to Life",
    excerpt: "How AR technology is enhancing traditional learning materials and creating interactive educational experiences.",
    category: "VR/AR",
    author: "Emily Rodriguez",
    date: "April 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070",
  },
  {
    id: 8,
    title: "The Future of Credentials: Digital Badges and Micro-Certifications",
    excerpt: "Exploring how digital badges and micro-certifications are changing the landscape of professional qualifications.",
    category: "Future of Learning",
    author: "Michael Chen",
    date: "April 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

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
                LearnX Chain Blog
              </h1>
              <p className="text-xl text-white/80">
                Insights, news, and perspectives on the future of education and technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 relative">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-80 md:h-auto">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-white/70 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold w-fit flex items-center gap-2"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
        
        {/* Search and Filters */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400"
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card rounded-xl overflow-hidden group"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-white/70">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-white/60 text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-cyan-400 flex items-center gap-1 font-medium"
                      >
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-white/70 text-lg">No articles found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="mt-4 text-cyan-400 hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-lg font-semibold"
                >
                  Load More Articles
                </motion.button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
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
                  Stay Updated
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest articles, insights, and updates
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-400"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
                  >
                    Subscribe
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