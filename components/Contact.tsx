'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8650488510',
      href: 'tel:+918650488510',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@vyomgarud.com',
      href: 'mailto:info@vyomgarud.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{paddingTop:'6rem', paddingBottom:'6rem'}}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref} style={{paddingLeft:'2rem', paddingRight:'2rem', paddingTop:'4rem', paddingBottom:'4rem'}}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
          className="text-center"
        >
          <span className="text-[#ff7b00] font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{marginTop:'1rem', marginBottom:'1.5rem'}}>
            Ready to <span className="text-[#ff7b00]">Deploy?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg" style={{marginLeft:'auto', marginRight:'auto'}}>
            Contact our team to discuss your mission requirements and discover how VyomGarud can elevate your capabilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto" style={{marginLeft:'auto', marginRight:'auto'}}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300" style={{marginBottom:'0.5rem'}}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-[#ff7b00] focus:outline-none transition-colors text-white placeholder-gray-500"
                  style={{paddingLeft:'1rem', paddingRight:'1rem', paddingTop:'0.75rem', paddingBottom:'0.75rem'}}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300" style={{marginBottom:'0.5rem'}}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-[#ff7b00] focus:outline-none transition-colors text-white placeholder-gray-500"
                  style={{paddingLeft:'1rem', paddingRight:'1rem', paddingTop:'0.75rem', paddingBottom:'0.75rem'}}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300" style={{marginBottom:'0.5rem'}}>
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-[#ff7b00] focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                  style={{paddingLeft:'1rem', paddingRight:'1rem', paddingTop:'0.75rem', paddingBottom:'0.75rem'}}
                  placeholder="Tell us about your mission requirements..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#ff7b00] hover:bg-[#ff8c1a] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#ff7b00]/20 hover:shadow-[#ff7b00]/40 flex items-center justify-center gap-2"
                style={{paddingRight:'2rem' ,
                        paddingLeft: '2rem',
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                      }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}    
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-[#ff7b00]/50 border border-white/10 transition-all group"
                style={{paddingLeft:'1.5rem', paddingRight:'1.5rem', paddingTop:'1.5rem', paddingBottom:'1.5rem', marginTop:'1.5rem'}}
              >
                <div className="p-3 bg-[#ff7b00]/10 rounded-xl group-hover:bg-[#ff7b00]/20 transition-colors">
                  <info.icon className="text-[#ff7b00]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1" style={{marginBottom:'0.25rem'}}>{info.label}</div>
                  <div className="text-lg font-semibold">{info.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Image/Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card rounded-2xl p-8 border border-white/10 mt-8" 
              style={{paddingLeft:'2rem', paddingRight:'2rem', paddingTop:'2rem', paddingBottom:'2rem', marginTop:'2rem'}}
            >
              <h3 className="text-xl font-bold mb-4" style={{marginBottom:'1rem'}}>24/7 Support</h3>
              <p className="text-gray-400 leading-relaxed mb-4" style={{marginBottom:'1rem'}}>
                Our dedicated team is available around the clock to support your mission-critical operations.
              </p>
              <div className="flex items-center gap-2 text-[#ff7b00] font-semibold">
                <div className="w-2 h-2 bg-[#ff7b00] rounded-full animate-pulse"></div>
                Always Available
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
