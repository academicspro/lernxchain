"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    phone: "",
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus("submitting");
      
      // Simulate API call
      setTimeout(() => {
        setFormStatus("success");
        
        // Reset form after success
        setTimeout(() => {
          setFormState({
            name: "",
            email: "",
            subject: "",
            message: "",
            company: "",
            phone: "",
          });
          setFormStatus("idle");
        }, 3000);
      }, 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Name <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors`}
                placeholder="Your name"
              />
              {errors.name && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
              )}
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Email <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
              )}
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formState.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="Your company"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="+1 (123) 456-7890"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Subject <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${errors.subject ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors`}
              placeholder="How can we help?"
            />
            {errors.subject && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400">
                <AlertCircle className="w-5 h-5" />
              </div>
            )}
          </div>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Message <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${errors.message ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors h-32`}
              placeholder="Your message"
            />
            {errors.message && (
              <div className="absolute right-3 top-6 text-red-400">
                <AlertCircle className="w-5 h-5" />
              </div>
            )}
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message}</p>
          )}
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacy"
            className="w-4 h-4 rounded bg-white/10 border-white/20 text-cyan-400 focus:ring-cyan-400"
          />
          <label htmlFor="privacy" className="ml-2 text-sm text-white/70">
            I agree to the <a href="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</a>
          </label>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={formStatus === "submitting" || formStatus === "success"}
          className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
            formStatus === "success" 
              ? "bg-green-500" 
              : "bg-gradient-to-r from-cyan-400 to-purple-500"
          }`}
        >
          {formStatus === "idle" && (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
          {formStatus === "submitting" && (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          )}
          {formStatus === "success" && (
            <>
              <Check className="w-4 h-4" />
              Message Sent!
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}