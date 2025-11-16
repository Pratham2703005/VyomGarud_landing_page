'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ 
        paddingTop: isScrolled ? '1rem' : '2rem', 
        paddingBottom: isScrolled ? '1rem' : '2rem',
        paddingRight:  '3rem',
        paddingLeft: '3rem'
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo.jpeg"
              alt="VyomGarud Logo"
              width={180}
              height={60}
              className="h-18 w-auto object-contain"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#ff7b00] transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="bg-[#ff7b00] hover:bg-[#ff8c1a] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#ff7b00]/20 hover:shadow-[#ff7b00]/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                style={{
                    paddingRight:'2rem' ,
                    paddingLeft: '2rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass rounded-2xl overflow-hidden"
              style={{
                paddingRight: '1rem',
                paddingLeft: '1rem',
                paddingTop: '1rem',
                paddingBottom: '1rem',
              }}
            >
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff7b00] transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="bg-[#ff7b00] hover:bg-[#ff8c1a] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    paddingRight:'2rem' ,
                    paddingLeft: '2rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                  }}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
