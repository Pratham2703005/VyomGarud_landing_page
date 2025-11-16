'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30"
        >
          <source src="https://cdn.prod.website-files.com/64cb501935377f51369fa3c5/654b4fa8b1f819ec20581eca_Homepage Banner-transcode.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-[#0a0a0a]/50 to-[#0a0a0a]/70" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0" />

      {/* Content */}
      <div className="container px-6 lg:px-12 relative z-10 pt-20">
        <div className="max-w-5xl text-center" style={{ marginBottom: '1.5rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: '6rem'
             }}>

          {/* Badge */}
          <motion.div
            
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            
            className="inline-block"
          >
            <div className="glass px-6 py-2 rounded-full inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff7b00] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Military-Grade UAV Systems</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginBottom: '1rem' }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-[var(--font-poppins)] leading-tight"
          >
            Precision. Autonomy.
            <br />
            <span className="text-[#ff7b00]">Dominance.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginBottom: '3rem', marginLeft: 'auto', marginRight: 'auto' }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Advanced unmanned aerial systems engineered for critical missions.
            Powered by AI, built for reliability, designed for superiority.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#capabilities"
              className="bg-[#ff7b00] hover:bg-[#ff8c1a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl shadow-[#ff7b00]/30 hover:shadow-[#ff7b00]/50 flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{paddingRight:'2rem' ,
                      paddingLeft: '2rem',
                      paddingTop: '1rem',
                      paddingBottom: '1rem',
                    }}
            >
              Explore Our Fleet
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>

            <motion.a
              href="#about"
              className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{paddingRight:'2rem' ,
                      paddingLeft: '2rem',
                      paddingTop: '1rem',
                      paddingBottom: '1rem',
                    }}
            >
              <Play size={18} className="group-hover:scale-110 transition-transform" />
              Watch Demo
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
            style={{marginTop:'5rem', marginLeft:'auto', marginRight:'auto' }}
          >
            {[
              { value: '99.9%', label: 'Mission Success' },
              { value: '10K+', label: 'Flight Hours' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#ff7b00] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-60 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
          style={{padding: '0.5rem'}}
        >
          <motion.div className="w-1 h-3 bg-[#ff7b00] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
