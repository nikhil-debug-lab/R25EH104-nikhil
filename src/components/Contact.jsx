import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  ExternalLink, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onNotify }) {
  const { contact, personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      onNotify({
        type: 'error',
        message: 'Please resolve the highlighted form fields before submitting.'
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate clean submission handler (ready for Formspree / EmailJS / Backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onNotify({
        type: 'success',
        message: 'Message captured successfully! (Ready to connect with Formspree, EmailJS, or Node.js backend).'
      });
    }, 800);
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onNotify({
      type: 'success',
      message: `Copied ${fieldName} to clipboard: ${text}`
    });
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handlePlaceholderSocial = (platform, url) => {
    if (url === 'YOUR_LINKEDIN_URL' || url === 'YOUR_GITHUB_URL') {
      onNotify({
        type: 'info',
        message: `${platform} URL is currently set to placeholder ("${url}"). Update your URL in src/data/portfolioData.js.`
      });
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>08. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            {contact.description}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-3"></div>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Direct Contact</h3>
                <p className="text-xs text-slate-400 font-mono">Reach out directly via email or phone</p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contact.email, 'Email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 ml-2"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors truncate block font-mono"
                    >
                      +91 {contact.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contact.phone, 'Phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 ml-2"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'Phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/30 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    {contact.location} (REVA University, Karnataka)
                  </span>
                </div>
              </div>

              {/* Social & Quick Action Buttons */}
              <div className="pt-2 border-t border-slate-800/80 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Connect on Platforms
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/70 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition-all shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Me</span>
                  </a>

                  <button
                    onClick={() => handlePlaceholderSocial('LinkedIn', personalInfo.socialLinks.linkedin)}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                    <span>LinkedIn</span>
                  </button>

                  <button
                    onClick={() => handlePlaceholderSocial('GitHub', personalInfo.socialLinks.github)}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-300" />
                    <span>GitHub</span>
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Have a question, project inquiry, or opportunity? Drop a note below.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You for Connecting!</h4>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Your message was prepared successfully. To deliver directly to Nikhil, you can also send an email to{' '}
                    <a href={`mailto:${contact.email}`} className="text-cyan-400 underline font-medium">
                      {contact.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-500/80 focus:ring-rose-500/50'
                          : 'border-slate-800 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                      }`}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-500/80 focus:ring-rose-500/50'
                          : 'border-slate-800 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                      }`}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Nikhil, I saw your portfolio and would like to discuss..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:ring-rose-500/50'
                          : 'border-slate-800 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                      }`}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2 font-mono">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <p className="text-[11px] font-mono text-slate-500">
                      Architecture ready for Formspree / EmailJS / Node.js backend.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
