"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, HelpCircle, Zap, Shield, Brain, Users, Sparkles, Globe, Award } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for individual learners",
    price: 29,
    annualPrice: 290,
    color: "cyan",
    features: [
      { name: "AI Tutoring (Basic)", included: true },
      { name: "Blockchain Credentials", included: true },
      { name: "Virtual Classrooms", included: true },
      { name: "Course Library (100+ courses)", included: true },
      { name: "Mobile Access", included: true },
      { name: "Community Support", included: true },
      { name: "Advanced Analytics", included: false },
      { name: "Team Collaboration", included: false },
      { name: "Custom Learning Paths", included: false },
      { name: "Priority Support", included: false },
      { name: "API Access", included: false },
      { name: "White Labeling", included: false },
    ],
    icon: Brain,
  },
  {
    name: "Pro",
    description: "Ideal for professionals and small teams",
    price: 79,
    annualPrice: 790,
    color: "purple",
    popular: true,
    features: [
      { name: "AI Tutoring (Advanced)", included: true },
      { name: "Blockchain Credentials", included: true },
      { name: "Virtual Classrooms", included: true },
      { name: "Course Library (500+ courses)", included: true },
      { name: "Mobile Access", included: true },
      { name: "Community Support", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Team Collaboration (up to 10)", included: true },
      { name: "Custom Learning Paths", included: true },
      { name: "Priority Support", included: true },
      { name: "API Access", included: false },
      { name: "White Labeling", included: false },
    ],
    icon: Sparkles,
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs",
    price: 199,
    annualPrice: 1990,
    color: "pink",
    features: [
      { name: "AI Tutoring (Enterprise)", included: true },
      { name: "Blockchain Credentials", included: true },
      { name: "Virtual Classrooms", included: true },
      { name: "Course Library (Unlimited)", included: true },
      { name: "Mobile Access", included: true },
      { name: "Community Support", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Team Collaboration (Unlimited)", included: true },
      { name: "Custom Learning Paths", included: true },
      { name: "Priority Support", included: true },
      { name: "API Access", included: true },
      { name: "White Labeling", included: true },
    ],
    icon: Globe,
  },
];

const featureExplanations: { [key: string]: string } = {
  "AI Tutoring (Basic)": "Access to our AI tutoring system with personalized learning assistance.",
  "AI Tutoring (Advanced)": "Enhanced AI tutoring with deeper personalization and advanced problem-solving.",
  "AI Tutoring (Enterprise)": "Full-featured AI tutoring with custom training on your organization's content.",
  "Blockchain Credentials": "Secure, verifiable credentials stored on the blockchain.",
  "Virtual Classrooms": "Access to immersive learning environments for interactive education.",
  "Course Library (100+ courses)": "Access to our basic library of educational content.",
  "Course Library (500+ courses)": "Expanded access to premium educational content.",
  "Course Library (Unlimited)": "Full access to all educational content, including exclusive enterprise materials.",
  "Mobile Access": "Learn on-the-go with our mobile applications.",
  "Community Support": "Access to our community forums and knowledge base.",
  "Advanced Analytics": "Detailed insights into learning progress and performance.",
  "Team Collaboration": "Tools for collaborative learning and knowledge sharing.",
  "Custom Learning Paths": "Tailored educational journeys based on specific goals and needs.",
  "Priority Support": "Faster response times and dedicated support channels.",
  "API Access": "Integrate LearnX Chain with your existing systems and applications.",
  "White Labeling": "Customize the platform with your organization's branding.",
};

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

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
                Choose Your Plan
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Flexible pricing options designed to fit your learning needs
              </p>
              
              <div className="flex justify-center mb-12">
                <div className="bg-white/10 p-1 rounded-full flex">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      billingCycle === "monthly" 
                        ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white" 
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("annual")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                      billingCycle === "annual" 
                        ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white" 
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Annual
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative glass-card rounded-2xl overflow-hidden ${
                    plan.popular ? "border-purple-500" : "border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-${plan.color}-500/20`}>
                        <plan.icon className={`w-6 h-6 text-${plan.color}-400`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <p className="text-white/70">{plan.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 mb-8">
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold">
                          ${billingCycle === "monthly" ? plan.price : plan.annualPrice}
                        </span>
                        <span className="text-white/70 mb-1">
                          /{billingCycle === "monthly" ? "month" : "year"}
                        </span>
                      </div>
                      {billingCycle === "annual" && (
                        <p className="text-green-400 text-sm mt-2">
                          Save ${plan.price * 12 - plan.annualPrice} annually
                        </p>
                      )}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-lg font-semibold mb-8 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                    >
                      Get Started
                    </motion.button>
                    
                    <div className="space-y-4">
                      {plan.features.map((feature) => (
                        <div 
                          key={feature.name} 
                          className="flex items-center gap-3"
                          onMouseEnter={() => setHoveredFeature(feature.name)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          {feature.included ? (
                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                              <Check className="w-3 h-3 text-green-400" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                              <X className="w-3 h-3 text-red-400" />
                            </div>
                          )}
                          <span className={feature.included ? "text-white/90" : "text-white/50"}>
                            {feature.name}
                          </span>
                          <div className="relative ml-auto">
                            <HelpCircle className="w-4 h-4 text-white/30 cursor-help" />
                            
                            {hoveredFeature === feature.name && (
                              <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-black/90 backdrop-blur-lg rounded-lg text-sm text-white/90 shadow-xl z-10">
                                {featureExplanations[feature.name]}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Feature Comparison */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text text-center mb-12"
            >
              Detailed Feature Comparison
            </motion.h2>
            
            <div className="overflow-x-auto">
              <table className="w-full glass-card rounded-xl">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Basic</th>
                    <th className="p-4 text-center">Pro</th>
                    <th className="p-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium">AI Tutoring</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Advanced</td>
                    <td className="p-4 text-center">Enterprise-grade</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium">Course Access</td>
                    <td className="p-4 text-center">100+ courses</td>
                    <td className="p-4 text-center">500+ courses</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium">Virtual Classroom Time</td>
                    <td className="p-4 text-center">10 hours/month</td>
                    <td className="p-4 text-center">40 hours/month</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium">Team Members</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center">Up to 10</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium">Storage</td>
                    <td className="p-4 text-center">10 GB</td>
                    <td className="p-4 text-center">100 GB</td>
                    <td className="p-4 text-center">1 TB</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium">Support</td>
                    <td className="p-4 text-center">Community</td>
                    <td className="p-4 text-center">Priority</td>
                    <td className="p-4 text-center">Dedicated</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium">API Access</td>
                    <td className="p-4 text-center">
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">White Labeling</td>
                    <td className="p-4 text-center">
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
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
              What Our Customers Say
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The Pro plan has transformed how our team learns and collaborates. The advanced AI tutoring is like having a personal instructor available 24/7.",
                  author: "Sarah Johnson",
                  role: "Learning & Development Manager",
                  company: "TechCorp Inc.",
                  plan: "Pro",
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
                },
                {
                  quote: "As an individual learner, the Basic plan gives me everything I need to advance my skills. The blockchain credentials have been invaluable for my career progression.",
                  author: "Michael Chen",
                  role: "Software Developer",
                  company: "Freelancer",
                  plan: "Basic",
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
                },
                {
                  quote: "The Enterprise solution has revolutionized training across our entire organization. The custom learning paths and white-labeled platform align perfectly with our brand.",
                  author: "Emily Rodriguez",
                  role: "Chief Learning Officer",
                  company: "Global Enterprises",
                  plan: "Enterprise",
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.author}</h3>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                      <p className="text-white/50 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">"{testimonial.quote}"</p>
                  <div className="text-sm text-white/50">
                    <span className="text-cyan-400">{testimonial.plan}</span> plan user
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold gradient-text text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "Can I switch plans later?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, changes will take effect at the start of your next billing cycle."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial. You'll have full access to all features included in your selected plan."
                },
                {
                  question: "How does billing work?",
                  answer: "We offer both monthly and annual billing options. Annual plans come with a 20% discount compared to monthly billing. All plans are automatically renewed unless canceled."
                },
                {
                  question: "Can I get a refund if I'm not satisfied?",
                  answer: "We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied, contact our support team within 30 days of your purchase for a full refund."
                },
                {
                  question: "Do you offer discounts for educational institutions?",
                  answer: "Yes, we offer special pricing for educational institutions, non-profits, and students. Please contact our sales team for more information about our educational discounts."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual Enterprise plans. We also support cryptocurrency payments."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
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
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Contact our sales team for a tailored plan that meets your specific requirements
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-lg font-semibold"
                  >
                    Contact Sales
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 rounded-full text-lg font-semibold"
                  >
                    Book a Demo
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