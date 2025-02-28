"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Minimize2, Maximize2, HelpCircle, Paperclip, Mic, Image, Video, FileText, ChevronRight, Bot, User, Clock, ArrowRight } from "lucide-react";

interface Message {
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  status?: "sending" | "sent" | "read";
  attachments?: Array<{
    type: "image" | "file" | "video";
    url: string;
    name: string;
  }>;
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

const suggestedReplies = [
  "Tell me more about this",
  "How much does it cost?",
  "Can I try it for free?",
  "Schedule a call with sales",
  "Send me documentation"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
  const [activeSuggestions, setActiveSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show welcome message after 2 seconds
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setMessages([
          { 
            type: "bot", 
            content: "👋 Welcome to LearnX Chain! How can I assist you today?",
            timestamp: new Date()
          }
        ]);
        setUnreadCount(prev => prev + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Reset unread count when chat is opened
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const handlePredefinedQuestion = (question: string) => {
    setHasInteracted(true);
    setMessages(prev => [
      ...prev,
      { type: "user", content: question, timestamp: new Date() },
    ]);
    setShowWelcome(false);
    
    // Simulate typing indicator
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev, 
        { 
          type: "bot", 
          content: botResponses[question],
          timestamp: new Date()
        }
      ]);
      
      // Set suggested replies based on the question
      if (question === "How does AI tutoring work?") {
        setActiveSuggestions(["Tell me more about this", "How much does it cost?", "Can I try it for free?"]);
      } else if (question === "What are blockchain credentials?") {
        setActiveSuggestions(["How secure is it?", "Which employers recognize these?", "Send me documentation"]);
      } else if (question === "Pricing plans") {
        setActiveSuggestions(["Schedule a call with sales", "Is there a free trial?", "Enterprise pricing"]);
      } else {
        setActiveSuggestions(suggestedReplies.slice(0, 3));
      }
    }, 1500);
  };

  const handleSuggestedReply = (reply: string) => {
    setMessages(prev => [
      ...prev,
      { type: "user", content: reply, timestamp: new Date() }
    ]);
    
    // Clear suggestions after using one
    setActiveSuggestions([]);
    
    // Simulate typing indicator
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev, 
        { 
          type: "bot", 
          content: `I'd be happy to ${reply.toLowerCase().includes("more") ? "provide more details" : 
                    reply.toLowerCase().includes("cost") ? "discuss pricing options" : 
                    reply.toLowerCase().includes("free") ? "explain our free trial" : 
                    reply.toLowerCase().includes("schedule") ? "connect you with our sales team" : 
                    reply.toLowerCase().includes("documentation") ? "share our documentation" : 
                    "help with that"}. ${getResponseForSuggestion(reply)}`,
          timestamp: new Date()
        }
      ]);
    }, 1500);
  };

  const getResponseForSuggestion = (suggestion: string): string => {
    if (suggestion.toLowerCase().includes("more")) {
      return "Our AI system uses a combination of natural language processing, machine learning, and cognitive computing to create a personalized learning experience.";
    } else if (suggestion.toLowerCase().includes("cost")) {
      return "Our Basic plan starts at $29/month, Pro at $49/month, and Enterprise plans are custom-priced based on your organization's needs.";
    } else if (suggestion.toLowerCase().includes("free")) {
      return "Yes! We offer a 14-day free trial with full access to all features. No credit card required.";
    } else if (suggestion.toLowerCase().includes("schedule")) {
      return "I can help schedule a call. What's the best time for you? Alternatively, you can book directly at calendly.com/learnxchain/demo";
    } else if (suggestion.toLowerCase().includes("documentation")) {
      return "You can find our comprehensive documentation at docs.learnxchain.com. Would you like me to send you a specific section?";
    }
    return "How else can I assist you today?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setHasInteracted(true);
    const userMessage = input.trim();
    setMessages(prev => [...prev, { 
      type: "user", 
      content: userMessage,
      timestamp: new Date(),
      status: "sending"
    }]);
    setInput("");
    setShowWelcome(false);
    setActiveSuggestions([]);

    // Update status to sent after a short delay
    setTimeout(() => {
      setMessages(prev => 
        prev.map((msg, idx) => 
          idx === prev.length - 1 ? { ...msg, status: "sent" } : msg
        )
      );
    }, 500);

    // Find the closest matching predefined question
    const matchingQuestion = predefinedQuestions.find(q => 
      q.toLowerCase().includes(userMessage.toLowerCase())
    );

    // Simulate typing indicator
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      // Update previous message status to read
      setMessages(prev => 
        prev.map((msg, idx) => 
          idx === prev.length - 1 ? { ...msg, status: "read" } : msg
        )
      );
      
      // Add bot response
      setMessages(prev => [...prev, {
        type: "bot",
        content: matchingQuestion 
          ? botResponses[matchingQuestion]
          : `I understand you're asking about "${userMessage}". Let me connect you with our team for more detailed information. Meanwhile, feel free to check out our predefined topics below.`,
        timestamp: new Date()
      }]);
      
      // Set new suggested replies
      setActiveSuggestions(suggestedReplies.slice(0, 3));
    }, 1500);
  };

  const handleAttachment = (type: string) => {
    setShowAttachmentOptions(false);
    
    // Simulate file upload
    const attachmentTypes: {[key: string]: any} = {
      "image": { type: "image", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070", name: "screenshot.jpg" },
      "file": { type: "file", url: "#", name: "document.pdf" },
      "video": { type: "video", url: "#", name: "demo.mp4" }
    };
    
    if (attachmentTypes[type]) {
      setMessages(prev => [...prev, { 
        type: "user", 
        content: `Sent ${type}`,
        timestamp: new Date(),
        attachments: [attachmentTypes[type]]
      }]);
      
      // Simulate bot response to attachment
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          type: "bot",
          content: `Thanks for sharing this ${type}. I'll analyze it and get back to you shortly.`,
          timestamp: new Date()
        }]);
      }, 1500);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-xs text-white">
            {unreadCount}
          </div>
        )}
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
                <div className="relative">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <span className="font-semibold">LearnX Assistant</span>
                  <div className="text-xs text-white/60 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    Online
                  </div>
                </div>
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
                      {message.type === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-2 flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      
                      <div className="flex flex-col max-w-[80%]">
                        <div
                          className={`p-3 rounded-lg ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                              : "bg-white/10"
                          }`}
                        >
                          {message.content}
                          
                          {/* Attachments */}
                          {message.attachments && message.attachments.length > 0 && (
                            <div className="mt-2">
                              {message.attachments.map((attachment, i) => (
                                <div key={i} className="mt-2 rounded overflow-hidden">
                                  {attachment.type === "image" && (
                                    <img 
                                      src={attachment.url} 
                                      alt={attachment.name} 
                                      className="w-full h-32 object-cover rounded"
                                    />
                                  )}
                                  {attachment.type === "file" && (
                                    <div className="flex items-center gap-2 p-2 bg-white/5 rounded">
                                      <FileText className="w-4 h-4" />
                                      <span className="text-sm">{attachment.name}</span>
                                    </div>
                                  )}
                                  {attachment.type === "video" && (
                                    <div className="flex items-center gap-2 p-2 bg-white/5 rounded">
                                      <Video className="w-4 h-4" />
                                      <span className="text-sm">{attachment.name}</span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className={`text-xs text-white/50 mt-1 flex items-center gap-1 ${
                          message.type === "user" ? "justify-end" : "justify-start"
                        }`}>
                          {formatTime(message.timestamp)}
                          {message.type === "user" && message.status && (
                            <span className="ml-1">
                              {message.status === "sending" && "•"}
                              {message.status === "sent" && "✓"}
                              {message.status === "read" && "✓✓"}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {message.type === "user" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center ml-2 flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-2">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white/10 py-2 px-4 rounded-lg flex items-center">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                          <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                          <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                        </div>
                      </div>
                    </div>
                  )}

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
                            className="p-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg text-left flex items-center"
                          >
                            <span className="flex-1">{question}</span>
                            <ChevronRight className="w-4 h-4 text-white/50" />
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Suggested replies */}
                  {activeSuggestions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {activeSuggestions.map((suggestion, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSuggestedReply(suggestion)}
                          className="py-1 px-3 bg-white/10 hover:bg-white/20 rounded-full text-sm flex items-center gap-1"
                        >
                          {suggestion}
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      ))}
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Attachment Options */}
                <AnimatePresence>
                  {showAttachmentOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bottom-16 left-4 bg-black/90 backdrop-blur-xl rounded-lg border border-white/10 p-2"
                    >
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleAttachment("image")}
                          className="p-2 hover:bg-white/10 rounded-lg"
                        >
                          <Image className="w-5 h-5 text-cyan-400" />
                        </button>
                        <button 
                          onClick={() => handleAttachment("file")}
                          className="p-2 hover:bg-white/10 rounded-lg"
                        >
                          <FileText className="w-5 h-5 text-purple-400" />
                        </button>
                        <button 
                          onClick={() => handleAttachment("video")}
                          className="p-2 hover:bg-white/10 rounded-lg"
                        >
                          <Video className="w-5 h-5 text-pink-400" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowAttachmentOptions(!showAttachmentOptions)}
                      className="p-2 bg-white/5 hover:bg-white/10 rounded-lg"
                    >
                      <Paperclip className="w-5 h-5 text-white/70" />
                    </button>
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
                  
                  <div className="mt-2 text-xs text-white/50 text-center">
                    Powered by LearnX AI • <a href="#" className="underline hover:text-white/80">Privacy Policy</a>
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