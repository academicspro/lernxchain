"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Calendar, Award, Globe, BookOpen, Github, Code, Heart, Star, Coffee, Zap } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

const communityStats = [
  { value: "50K+", label: "Community Members", icon: Users },
  { value: "120+", label: "Local Chapters", icon: Globe },
  { value: "500+", label: "Monthly Events", icon: Calendar },
  { value: "10K+", label: "Forum Discussions", icon: MessageSquare },
];

const upcomingEvents = [
  {
    id: 1,
    title: "AI in Education Summit",
    date: "June 15-16, 2024",
    location: "Virtual",
    description: "Join leading experts to discuss the future of AI in educational technology.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=2070",
  },
  {
    id: 2,
    title: "LearnX Chain Developer Workshop",
    date: "June 22, 2024",
    location: "New York & Virtual",
    description: "Hands-on workshop for developers interested in building on our platform.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070",
  },
  {
    id: 3,
    title: "Blockchain Credentials Symposium",
    date: "July 8, 2024",
    location: "London",
    description: "Exploring the future of verifiable credentials in education and employment.",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070",
  },
];

const communityLeaders = [
  {
    name: "Alex Chen",
    role: "Developer Advocate",
    location: "San Francisco",
    contributions: "200+ forum answers, 15 workshops",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887",
  },
  {
    name: "Maria Rodriguez",
    role: "Education Ambassador",
    location: "Madrid",
    contributions: "50+ tutorials, 30 local events",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887",
  },
  {
    name: "David Kim",
    role: "Technical Writer",
    location: "Seoul",
    contributions: "25 documentation guides, 100+ forum posts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887",
  },
  {
    name: "Priya Sharma",
    role: "Community Moderator",
    location: "Mumbai",
    contributions: "500+ forum moderation, 20 webinars",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887",
  },
];

const resources = [
  {
    title: "Developer Documentation",
    description: "Comprehensive guides for building on LearnX Chain",
    icon: BookOpen,
    link: "/documentation",
  },
  {
    title: "GitHub Repository",
    description: "Open-source projects and code examples",
    icon: Github,
    link: "#",
  },
  {
    title: "Community Forum",
    description: "Ask questions and share knowledge",
    icon: MessageSquare,
    link: "#",
  },
  {
    title: "API Reference",
    description: "Detailed API documentation for developers",
    icon: Code,
    link: "/documentation/api",
  },
];

const contributionWays = [
  {
    title: "Open Source",
    description: "Contribute to our open-source projects and tools",
    icon: Heart,
    color: "pink",
  },
  {
    title: "Local Chapters",
    description: "Start or join a local LearnX Chain community chapter",
    icon: Users,
    color: "cyan",
  },
  {
    title: "Content Creation",
    description: "Create tutorials, articles, or videos about our platform",
    icon: BookOpen,
    color: "purple",
  },
  {
    title: "Event Hosting",
    description: "Host workshops, meetups, or webinars for the community",
    icon: Calendar,
    color: "yellow",
  },
  {
    title: "Mentorship",
    description: "Mentor new community members and developers",
    icon: Star,
    color: "orange",
  },
  {
    title: "Translation",
    description: "Help translate our resources into different languages",
    icon: Globe,
    color: "green",
  },
];

export default function CommunityPage() {
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
                Join Our Community
              </h1>
              <p className="text-xl text-white/80">
                Connect, learn, and collaborate with educators, developers, and learners from around the world
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
                >
                  Join Community
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 rounded-lg font-semibold"
                >
                  Explore Resources
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Upcoming Events */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12"
            >
              Upcoming Events
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card rounded-xl overflow-hidden group"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-white/70">{event.date}</span>
                      <span className="text-sm text-white/70 ml-auto">{event.location}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-white/70 mb-4">{event.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
                    >
                      Register Now
                    </motion.button>
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
                View All Events
              </motion.button>
            </div>
          </div>
        </section>
        
        {/* Community Leaders */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12"
            >
              Community Leaders
            </motion.h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {communityLeaders.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <div className="text-cyan-400 mb-2">{leader.role}</div>
                  <div className="text-sm text-white/70 mb-2">{leader.location}</div>
                  <div className="text-xs text-white/50">{leader.contributions}</div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm w-full"
                  >
                    View Profile
                  </motion.button>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
              >
                Become a Community Leader
              </motion.button>
            </div>
          </div>
        </section>
        
        {/* Resources */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-12"
            >
              Community Resources
            </motion.h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.a
                  key={index}
                  href={resource.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <resource.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-white/70">{resource.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Ways to Contribute */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text mb-6 text-center"
            >
              Ways to Contribute
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white/70 max-w-2xl mx-auto mb-12"
            >
              There are many ways to get involved and contribute to the LearnX Chain community. Find the perfect fit for your skills and interests.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {contributionWays.map((way, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-${way.color}-500/20`}>
                      <way.icon className={`w-6 h-6 text-${way.color}-400`} />
                    </div>
                    <h3 className="text-xl font-bold">{way.title}</h3>
                  </div>
                  <p className="text-white/70 mb-4">{way.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Community Forum */}
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
                    Join Our Community Forum
                  </h2>
                  <p className="text-white/70 mb-6">
                    Connect with thousands of educators, developers, and learners in our community forum. Ask questions, share knowledge, and collaborate on projects.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Active Discussions</div>
                        <div className="text-sm text-white/70">Join thousands of ongoing conversations</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Helpful Community</div>
                        <div className="text-sm text-white/70">Get answers from experienced members</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Recognition System</div>
                        <div className="text-sm text-white/70">Earn badges for your contributions</div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold"
                  >
                    Visit Forum
                  </motion.button>
                </div>
                <div className="relative h-80">
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074" 
                      alt="Community Forum" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-2xl font-bold mb-2">10,000+ Active Members</div>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
                          <img 
                            src={`https://i.pravatar.cc/100?img=${i+10}`} 
                            alt="Community Member" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="w-10 h-10 rounded-full border-2 border-black bg-purple-500 flex items-center justify-center">
                        <span className="text-xs font-bold">+995</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-2xl text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Stay Connected
              </h2>
              <p className="text-white/70 mb-6">
                Subscribe to our community newsletter for the latest events, resources, and opportunities.
              </p>
              <form className="flex gap-2">
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
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}