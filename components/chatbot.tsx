"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Minimize2, Maximize2, HelpCircle } from "lucide-react";

interface Message {
  type: "user" | "bot";
  content: string;
}

const predefinedQuestions = [
  "How does AI tutoring work?",
  "What are blockchain credentials?",
  "Tell me about virtual classrooms",
  "How to get started?",
  "Pricing plans",
  "Book a demo",
];

const botResponses: { [key: string]: string } = {
  "How does AI tutoring work?": "Our AI tutoring system uses advanced machine learning to adapt to your learning style. It provides personalized feedback, answers questions in real-time, and adjusts the difficulty based on your progress.",
  "What are blockchain credentials?": "Blockchain credentials are tamper-proof digital certificates stored on the blockchain. They provide verifiable proof of your educational achievements that can be easily shared with employers or institutions.",
  "Tell me about virtual classrooms": "Our virtual classrooms combine VR/AR technology with real-time collaboration tools. You can interact with 3D models, join live sessions, and learn in an immersive environment.",
  "How to get started?": "Getting started is easy! Simply create an account, choose your learning path, and begin your journey. Our AI system will guide you through the onboarding process.",
  "Pricing plans": "We offer flexible pricing plans starting from $29/month for individual learners. For enterprise solutions, please contact our sales team.",
  "Book a demo": "You can book a demo by visiting our demo booking section or contacting our sales team at sales@learnxchain.com",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Show welcome message after 2 seconds
    const timer = setTimeout(() => {
      setMessages([
        { 
          type: "bot", 
          content: "👋 Welcome to LearnX Chain! How can I assist you today?" 
        }
      ]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePredefinedQuestion = (question: string) => {
    setMessages(prev => [
      ...prev,
      { type: "user", content: question },
      { type: "bot", content: botResponses[question] }
    ]);
    setShowWelcome(false);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: "user", content: userMessage }]);
    setInput("");
    setShowWelcome(false);

    // Find the closest matching predefined question
    const matchingQuestion = predefinedQuestions.find(q => 
      q.toLowerCase().includes(userMessage.toLowerCase())
    );

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: "bot",
        content: matchingQuestion 
          ? botResponses[matchingQuestion]
          : "I understand you're asking about " + userMessage + ". Let me connect you with our team for more detailed information. Meanwhile, feel free to check out our predefined topics below."
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg z-50 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "600px"
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className={`fixed right-6 bottom-6 w-96 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50`}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold">LearnX Assistant</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/10 rounded"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4" />
                  ) : (
                    <Minimize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.type === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === "user"
                            ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                            : "bg-white/10"
                        }`}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}

                  {showWelcome && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4"
                    >
                      <div className="text-white/70 mb-2 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4" />
                        Popular Questions
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {predefinedQuestions.map((question) => (
                          <motion.button
                            key={question}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handlePredefinedQuestion(question)}
                            className="p-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg text-left"
                          >
                            {question}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type your message..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSend}
                      className="p-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"
                    >
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}