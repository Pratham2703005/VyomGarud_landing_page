'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Capabilities', href: '#capabilities' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Technical Specs', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Security', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:info@vyomgarud.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 py-16" style={{paddingLeft:'2rem', paddingRight:'2rem', paddingTop:'4rem', paddingBottom:'4rem'}}>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12" style={{marginBottom:'3rem'}}>
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.h3
              className="text-3xl font-bold mb-4"
              style={{marginBottom:'1rem'}}
              whileHover={{ scale: 1.05 }}
            >
              Vyom<span className="text-[#ff7b00]">Garud</span>
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm" style={{marginBottom:'1.5rem'}}>
              Engineering the future of aerial dominance with military-grade UAV systems designed for precision, autonomy, and reliability.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="glass-card p-3 rounded-xl hover:bg-[#ff7b00]/10 border border-white/10 hover:border-[#ff7b00]/50 transition-all"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{padding:'1rem'}}
                >
                  <social.icon size={20} className="text-gray-400 hover:text-[#ff7b00] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{marginBottom:'1rem'}}>Company</h4>
            <ul >
              {footerLinks.company.map((link) => (
                <li key={link.name} style={{marginBottom:'0.75rem'}}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff7b00] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4" style={{marginBottom:'1rem'}}>Resources</h4>
            <ul>
              {footerLinks.resources.map((link) => (
                <li key={link.name} style={{marginBottom:'0.75rem'}}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff7b00] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4" style={{marginBottom:'1rem'}}>Legal</h4>
            <ul>
              {footerLinks.legal.map((link) => (
                <li key={link.name} style={{marginBottom:'0.75rem'}}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff7b00] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10" style={{paddingTop:'2rem'}}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} VyomGarud. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with precision and purpose
            </p>
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff7b00] to-transparent opacity-30" />
    </footer>
  );
}
