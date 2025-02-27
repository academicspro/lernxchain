"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Data Science Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    review: "LearnX Chain has revolutionized my learning experience. The AI tutoring is incredibly intuitive and helpful.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    review: "The blockchain verification for certificates is genius. It's great to have tamper-proof credentials.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Digital Artist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    review: "The VR classrooms are incredible. I can learn and create in ways I never thought possible.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Business Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    review: "Personalized learning paths have helped me stay focused and motivated throughout my courses.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "AI Researcher",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    review: "The integration of AI and blockchain technology sets a new standard for online education.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Blockchain Developer",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    review: "The platform's security and transparency are unmatched. A true innovation in EdTech.",
  },
];

export default function ReviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of satisfied learners who have transformed their education with LearnX Chain
          </p>
        </motion.div>

        {/* First Slider - Left to Right */}
        <div className="mb-8 relative">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: isInView ? 0 : -1000 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6"
          >
            {reviews.slice(0, 3).map((review) => (
              <motion.div
                key={review.id}
                className="w-96 flex-shrink-0 glass-card p-6 rounded-2xl relative group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Quote className="w-10 h-10 text-cyan-400 mb-4 opacity-50" />
                <p className="text-white/80 mb-6">{review.review}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-white/60">{review.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Slider - Right to Left */}
        <div className="relative">
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: isInView ? 0 : 1000 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6"
          >
            {reviews.slice(3).map((review) => (
              <motion.div
                key={review.id}
                className="w-96 flex-shrink-0 glass-card p-6 rounded-2xl relative group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Quote className="w-10 h-10 text-purple-400 mb-4 opacity-50" />
                <p className="text-white/80 mb-6">{review.review}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-white/60">{review.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}