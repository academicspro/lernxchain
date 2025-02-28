"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Search, ChevronRight, Heart, Coffee, Zap, Globe, Laptop, Users, DollarSign } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

const benefits = [
  {
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours and remote options",
    icon: Heart,
  },
  {
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and books",
    icon: Coffee,
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health, dental, and vision coverage",
    icon: Zap,
  },
  {
    title: "Global Team",
    description: "Collaborate with talented people from around the world",
    icon: Globe,
  },
  {
    title: "Latest Tech",
    description: "Access to cutting-edge technology and equipment",
    icon: Laptop,
  },
  {
    title: "Team Events",
    description: "Regular team retreats and social activities",
    icon: Users,
  },
];

const departments = [
  "All Departments",
  "Engineering",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "Customer Success",
  "Operations",
];

const locations = [
  "All Locations",
  "Remote",
  "New York",
  "San Francisco",
  "London",
  "Berlin",
  "Tokyo",
  "Singapore",
];

const jobListings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for an experienced AI Engineer to lead the development of our AI tutoring system. You'll be responsible for designing and implementing machine learning models that power personalized learning experiences.",
    requirements: [
      "5+ years of experience in machine learning and AI",
      "Strong background in natural language processing",
      "Experience with Python, TensorFlow, and PyTorch",
      "Knowledge of educational technology is a plus",
      "Excellent problem-solving and communication skills",
    ],
  },
  {
    id: 2,
    title: "Blockchain Developer",
    department: "Engineering",
    location: "Berlin",
    type: "Full-time",
    description: "Join our blockchain team to develop secure, verifiable credential systems. You'll work on smart contracts and decentralized applications that form the backbone of our credential verification platform.",
    requirements: [
      "3+ years of experience in blockchain development",
      "Proficiency in Solidity and Web3.js",
      "Understanding of cryptographic principles",
      "Experience with Ethereum and other blockchain platforms",
      "Knowledge of security best practices",
    ],
  },
  {
    id: 3,
    title: "VR/AR Developer",
    department: "Engineering",
    location: "San Francisco",
    type: "Full-time",
    description: "Help us create immersive learning environments using virtual and augmented reality. You'll be building interactive 3D experiences that revolutionize how students learn complex subjects.",
    requirements: [
      "3+ years of experience in VR/AR development",
      "Proficiency with Unity or Unreal Engine",
      "Experience with WebXR, ARKit, or ARCore",
      "Strong 3D modeling and animation skills",
      "Passion for creating educational experiences",
    ],
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "New York",
    type: "Full-time",
    description: "Lead the development of our educational products from conception to launch. You'll work closely with engineering, design, and education teams to create innovative learning solutions.",
    requirements: [
      "4+ years of product management experience",
      "Background in educational technology",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Experience with agile methodologies",
    ],
  },
  {
    id: 5,
    title: "UX/UI Designer",
    department: "Design",
    location: "London",
    type: "Full-time",
    description: "Design intuitive and engaging user experiences for our learning platform. You'll create interfaces that make complex educational concepts accessible and enjoyable.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Strong portfolio demonstrating user-centered design",
      "Proficiency with Figma, Sketch, or similar tools",
      "Experience with design systems and component libraries",
      "Knowledge of accessibility standards",
    ],
  },
  {
    id: 6,
    title: "Education Content Specialist",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Develop high-quality educational content for our platform. You'll work with subject matter experts to create engaging learning materials across various disciplines.",
    requirements: [
      "Background in education or instructional design",
      "Experience creating digital learning content",
      "Strong writing and editing skills",
      "Knowledge of educational standards and best practices",
      "Ability to simplify complex concepts",
    ],
  },
  {
    id: 7,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Singapore",
    type: "Full-time",
    description: "Lead our marketing efforts to reach educators and learners worldwide. You'll develop and execute marketing strategies that highlight the unique benefits of our platform.",
    requirements: [
      "5+ years of marketing experience",
      "Background in educational technology or SaaS",
      "Experience with digital marketing channels",
      "Strong analytical skills for measuring campaign performance",
      "Excellent communication and storytelling abilities",
    ],
  },
  {
    id: 8,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Tokyo",
    type: "Full-time",
    description: "Ensure our customers get the most value from our platform. You'll onboard new users, provide training, and develop resources to help customers succeed.",
    requirements: [
      "3+ years in customer success or account management",
      "Experience with educational technology",
      "Strong communication and relationship-building skills",
      "Problem-solving mindset",
      "Ability to work with diverse customer needs",
    ],
  },
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "All Departments" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

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
                Join Our Team
              </h1>
              <p className="text-xl text-white/80">
                Help us revolutionize education through AI, blockchain, and metaverse technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold gradient-text">Our Culture</h2>
                <p className="text-white/80">
                  At LearnX Chain, we're building a team of passionate innovators who are excited about transforming education through technology. We value creativity, collaboration, and continuous learning.
                </p>
                <p className="text-white/80">
                  Our diverse team brings together expertise in AI, blockchain, education, and immersive technologies to create a revolutionary learning platform that's accessible to everyone.
                </p>
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
                  >
                    Our Values
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white/10 rounded-lg font-semibold"
                  >
                    Team Photos
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl glass-card overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-2xl font-bold mb-2">Collaborative Environment</div>
                  <p className="text-white/80">Our team works together across disciplines to solve complex educational challenges</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold gradient-text text-center mb-12"
            >
              Benefits & Perks
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 w-fit mb-4">
                    <benefit.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Job Listings */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text text-center mb-12"
            >
              Open Positions
            </motion.h2>
            
            {/* Search and Filters */}
            <div className="glass-card p-6 rounded-xl mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search positions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400"
                  />
                </div>
                
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 appearance-none"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 appearance-none"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Job List */}
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card rounded-xl overflow-hidden"
                  >
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    >
                      <div className="flex flex-wrap justify-between items-center">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-white/70">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/70">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/70">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <ChevronRight className={`w-5 h-5 transition-transform ${expandedJob === job.id ? 'rotate-90' : ''}`} />
                        </div>
                      </div>
                      
                      {expandedJob === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-6 pt-6 border-t border-white/10"
                        >
                          <p className="text-white/80 mb-6">{job.description}</p>
                          
                          <h4 className="font-semibold mb-3">Requirements:</h4>
                          <ul className="list-disc pl-5 space-y-2 text-white/70 mb-6">
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
                          >
                            Apply Now
                          </motion.button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-white/70 text-lg">No positions found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedDepartment("All Departments");
                      setSelectedLocation("All Locations");
                    }}
                    className="mt-4 text-cyan-400 hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text text-center mb-12"
            >
              Life at LearnX Chain
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Working at LearnX Chain has been the most rewarding experience of my career. The culture of innovation and continuous learning keeps me excited to come to work every day.",
                  author: "David Kim",
                  role: "Senior AI Engineer",
                  years: "2 years",
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887&auto=format&fit=crop",
                },
                {
                  quote: "I love the collaborative environment and the impact we're making in education. It's amazing to see how our technology is transforming learning experiences around the world.",
                  author: "Lisa Thompson",
                  role: "Product Manager",
                  years: "3 years",
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
                },
                {
                  quote: "The flexibility and work-life balance at LearnX Chain is unmatched. I'm able to do my best work while also having time for my personal life and continued education.",
                  author: "James Wilson",
                  role: "UX Designer",
                  years: "1.5 years",
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <p className="text-white/90 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.author}</h3>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                      <p className="text-white/50 text-xs">At LearnX Chain for {testimonial.years}</p>
                    </div>
                  </div>
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
                  Don't See the Right Fit?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-lg font-semibold"
                >
                  Submit Your Resume
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