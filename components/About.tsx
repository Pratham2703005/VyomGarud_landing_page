'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Award, Zap } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{paddingTop:'6rem', paddingBottom:'6rem'}}>
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10" style={{paddingTop:'4rem', paddingBottom:'4rem', paddingLeft:'2rem', paddingRight:'2rem'}} ref={ref} >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{ marginBottom: '1rem' }}
              className="inline-block"
            >
              <span className="text-[#ff7b00] font-semibold text-sm uppercase tracking-wider">
                About VyomGarud
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              style={{ marginBottom: '1.5rem' }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Engineering the Future of
              <span className="text-[#ff7b00]"> Aerial Dominance</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              style={{ marginBottom: '1.5rem' }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              VyomGarud specializes in developing military-grade unmanned aerial systems 
              that combine cutting-edge AI, precision engineering, and unmatched reliability. 
              Our mission is to deliver autonomous solutions that empower defense forces with 
              tactical superiority and operational excellence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              style={{ marginBottom: '2rem' }}
              className="text-gray-400 text-base leading-relaxed"
            >
              From surveillance and reconnaissance to tactical operations, our UAV systems 
              are trusted by elite forces worldwide for their proven performance in the 
              most demanding environments.
            </motion.p>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Target, label: 'Precision' },
                { icon: Award, label: 'Certified' },
                { icon: Zap, label: 'Advanced' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-2 p-4 glass-card rounded-xl cursor-pointer"
                  style={{padding:'1rem'}}
                >
                  <item.icon className="text-[#ff7b00]" size={32} />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass-card">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
                >
                <source src="https://cdn.prod.website-files.com/64cb501935377f51369fa3c5/654db8aba84a4b549caa41dd_Innovation-transcode.mp4" type="video/mp4" />
                </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#000]/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              style={{padding:'1.5rem'}}
              className="absolute -bottom-6 -left-6 glass-card rounded-2xl"
            >
              <div className="text-3xl font-bold text-[#ff7b00] mb-1" style={{marginBottom: '0.25rem'}}>15+</div>
              <div className="text-sm text-gray-400">Years of Innovation</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-6 glass-card rounded-2xl"
              style={{padding:'1.5rem'}}
            >
              <div className="text-3xl font-bold text-[#ff7b00] mb-1" style={{marginBottom: '0.25rem'}}>50+</div>
              <div className="text-sm text-gray-400">Global Deployments</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
