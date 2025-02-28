"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "Rajneesh Rana",
    role: "Full Stack Developer",
    image: "https://res.cloudinary.com/dkzm9q5xf/image/upload/v1740334428/coqafclkjlm5eycbm763.jpg",
    bio: "Leading AI innovation in education with 15+ years of experience in machine learning and cognitive computing.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Minal Setia",
    role: "Frontend Developer",
    image: "https://res.cloudinary.com/dkzm9q5xf/image/upload/v1740391717/pbfcieweognqctyzb6xv.png",
    bio: "Blockchain expert with a focus on educational credentials and decentralized learning systems.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Aryan Sharma",
    role: "App Developer",
    image: "https://res.cloudinary.com/dkzm9q5xf/image/upload/v1740334144/l6aaskqziarsugnwwrqf.jpg",
    bio: "Pioneer in immersive learning experiences with expertise in virtual and augmented reality technologies.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Mihir Jain",
    role: "Frontend Developer",
    image: "https://res.cloudinary.com/dkzm9q5xf/image/upload/v1740334144/bgzfj7v5wmaqzibuzyfy.jpg",
    bio: "Bridging technology and pedagogy to create effective digital learning experiences.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} id="team" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Meet Our Team
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Innovators and experts dedicated to revolutionizing education through technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl glass-card relative z-10 h-full">
                <div className="relative mb-6">
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-full overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-purple-400 text-center mb-4">{member.role}</p>
                <p className="text-white/70 text-center mb-6">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  {Object.entries(member.social).map(([platform, link]) => (
                    <motion.a
                      key={platform}
                      href={link}
                      whileHover={{ scale: 1.2 }}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                      {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                      {platform === 'github' && <Github className="w-5 h-5" />}
                    </motion.a>
                  ))}
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}