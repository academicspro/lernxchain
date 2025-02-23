"use client";

import { motion } from "framer-motion";
import { Brain, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-cyan-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                LearnX Chain
              </span>
            </div>
            <p className="text-white/70">
              Revolutionizing education through AI, blockchain, and metaverse
              technology.
            </p>
          </div>
          {["Platform", "Company", "Resources", "Legal"].map((section) => (
            <div key={section}>
              <h3 className="font-semibold mb-4">{section}</h3>
              <ul className="space-y-2">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {section} Link {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm">
            © 2024 LearnX Chain. All rights reserved.
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}