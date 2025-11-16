'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Brain, Crosshair } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Military-Grade Reliability',
    description: '99.9% uptime with redundant systems and fail-safe mechanisms designed for mission-critical operations.',
    stats: '99.9%',
    label: 'Uptime',
  },
  {
    icon: Brain,
    title: 'Advanced AI Autonomy',
    description: 'Self-learning algorithms with real-time decision-making and adaptive behavior in dynamic environments.',
    stats: 'AI-Powered',
    label: 'Intelligence',
  },
  {
    icon: Crosshair,
    title: 'Precision Engineering',
    description: 'Sub-meter accuracy with advanced GPS and sensor fusion technology for unparalleled operational precision.',
    stats: '<1m',
    label: 'Accuracy',
  },
];

export default function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="highlights" className="py-24 relative overflow-hidden" style={{paddingTop:'6rem', paddingBottom:'6rem'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10" style={{paddingLeft:'2rem', paddingRight:'2rem', paddingTop:'4rem', paddingBottom:'4rem'}} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
          className="text-center"
        >
          <span className="text-[#ff7b00] font-semibold text-sm uppercase tracking-wider">
            Why Choose VyomGarud
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{marginTop:'1rem', marginBottom:'1.5rem'}}>
            Built for <span className="text-[#ff7b00]">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg" style={{marginLeft:'auto', marginRight:'auto'}}>
            Our commitment to quality and innovation sets us apart in the UAV industry
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl p-8 h-full text-center border border-white/10 hover:border-[#ff7b00]/50 transition-all duration-500 relative overflow-hidden"
                  style={{padding:'2rem'}}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ff7b00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#ff7b00]/20 to-[#ff7b00]/5 rounded-2xl mb-6 group-hover:from-[#ff7b00]/30 group-hover:to-[#ff7b00]/10 transition-all"
                      style={{marginBottom:'1.5rem'}}
                    >
                      <highlight.icon className="text-[#ff7b00]" size={40} strokeWidth={1.5} />
                    </motion.div>

                    {/* Stats */}
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-[#ff7b00] mb-1" style={{marginBottom:'0.25rem'}}>
                        {highlight.stats}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">
                        {highlight.label}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3" style={{marginBottom:'0.75rem'}}>
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {highlight.description}
                    </p>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff7b00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  />
                </motion.div>
              </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
          style={{marginTop:'4rem'}}
        >
          <div className="glass-card inline-block px-8 py-4 rounded-full" style={{paddingLeft:'2rem', paddingRight:'2rem', paddingTop:'1rem', paddingBottom:'1rem'}}>
            <p className="text-gray-300">
              Trusted by <span className="text-[#ff7b00] font-bold">50+</span> defense organizations worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
