'use client'

import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-sapphire-900 overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-sapphire-900/90 via-slate-900/95 to-sapphire-900/90 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-sapphire-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sapphire-500/20 text-sapphire-400 font-semibold text-sm mb-6 border border-sapphire-500/30">
             Automation for Modern Businesses
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Turn Missed Calls Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire-400 to-white">
              Revenue That Grows
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop losing customers to missed calls. Get AI bots and modern websites that work 24/7. 
            {COMPANY_INFO.tagline}.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full md:w-auto px-8 py-4 bg-sapphire-500 hover:bg-sapphire-400 text-white rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-sapphire-500/30 flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="w-full md:w-auto px-8 py-4 bg-transparent border border-slate-600 text-white hover:border-white rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
