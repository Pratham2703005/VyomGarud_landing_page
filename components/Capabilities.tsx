'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Target, Cpu, ArrowRight } from 'lucide-react';

const capabilities = [
  {
    icon: Eye,
    title: 'Surveillance & Reconnaissance',
    description: 'Long-range monitoring systems with real-time intelligence gathering and advanced sensor fusion.',
    features: ['4K/8K Vision', 'Thermal Imaging', 'Night Vision'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Target,
    title: 'Tactical Strike Systems',
    description: 'Precision engagement platforms designed for critical operations with pinpoint accuracy.',
    features: ['GPS Precision', 'Auto-Targeting', 'Failsafe Systems'],
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    icon: Cpu,
    title: 'Autonomous Navigation',
    description: 'AI-powered flight control with obstacle avoidance and adaptive path planning.',
    features: ['AI Autopilot', 'Collision Avoid', 'Smart Landing'],
    color: 'from-purple-500/20 to-pink-500/20',
  }
];

export default function Capabilities() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create transform values for each card (must be at top level, not in callbacks)
  const card0X = useTransform(scrollYProgress, [0, 0.2], [800, 0]);
  const card0Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 1]);
  
  const card1X = useTransform(scrollYProgress, [0.15, 0.35], [800, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 1]);
  
  const card2X = useTransform(scrollYProgress, [0.3, 0.5], [800, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 1]);

  const cardTransforms = [
    { x: card0X, opacity: card0Opacity },
    { x: card1X, opacity: card1Opacity },
    { x: card2X, opacity: card2Opacity }
  ];

  return (
    <div ref={containerRef} style={{ height: '400vh' }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.prod.website-files.com/64cb501935377f51369fa3c5/6507faea352adcbf5783fb18_vdo%201-transcode.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative top-10 z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-16 py-12" style={{paddingLeft:'4rem', paddingRight:'4rem', paddingTop:'3rem', paddingBottom:'3rem'}}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            style={{marginBottom:'1rem'}}
          >
            <span className="text-[#ff7b00] font-semibold text-sm uppercase tracking-wider">
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{marginTop:'0.5rem', marginBottom:'0.5rem'}}>
              Advanced UAV <span className="text-[#ff7b00]">Systems</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg" style={{marginLeft:'auto', marginRight:'auto'}}>
              Cutting-edge solutions designed for the most demanding operational requirements
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-3 lg:gap-6 w-full max-w-6xl mx-auto" style={{marginLeft:'auto', marginRight:'auto'}}>
            {capabilities.map((capability, index) => {
              const { x, opacity } = cardTransforms[index];

              return (
                <motion.div
                  key={capability.title}
                  style={{ 
                    x,
                    opacity
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="rounded-2xl p-6 sm:p-8 h-full border border-white/10 hover:border-[#ff7b00]/50 transition-all duration-500 overflow-hidden backdrop-blur-md bg-black/40" style={{paddingTop:'1rem', paddingBottom:'1rem', paddingLeft:'2rem', paddingRight:'2rem'}}>
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-linear-to-br ${capability.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 inline-block" style={{marginBottom:'0.5rem'}}>
                        <div className="p-4 bg-[#ff7b00]/10 rounded-xl group-hover:bg-[#ff7b00]/20 transition-colors" style={{padding:'0.5rem'}}>
                          <capability.icon className="text-[#ff7b00]" size={32} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#ff7b00] transition-colors" style={{marginBottom:'0.5rem'}}>
                        {capability.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base" style={{marginBottom:'0.5rem'}}>
                        {capability.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6" style={{marginBottom:'0.5rem'}}>
                        {capability.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                            style={{paddingLeft:'0.75rem', paddingRight:'0.75rem', paddingTop:'0.25rem', paddingBottom:'0.25rem'}}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[#ff7b00] font-medium group-hover:gap-3 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </motion.a>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7b00]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>

         
        </div>
      </div>
    </div>
  );
}