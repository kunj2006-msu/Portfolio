import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Terminal, ArrowRight } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

export default function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-[#f4efe6] px-4">
      {/* Particle background */}
      <ParticleBackground />

      {/* Decorative center background gradient */}
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-4xl text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-bold font-sans">
            Welcome to the Portfolio of
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white leading-tight">
            Whom do you want to meet today?
          </h1>
          <div className="w-16 h-[2px] bg-[var(--accent)] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8 w-full max-w-4xl mx-auto justify-center items-stretch">
          {/* Poet Profile Selection Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="flex-1 w-full"
          >
            <Link to="/poet" className="block h-full">
              <div className="group relative h-full p-8 md:p-10 rounded-3xl bg-[#151310]/50 border-2 border-transparent hover:border-[#d4af37]/40 hover:bg-[#151310]/80 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col items-center justify-between text-center space-y-6 overflow-hidden select-none">
                {/* Gold glowing blob inside card */}
                <div className="absolute -right-16 -top-16 w-36 h-36 bg-[#d4af37]/5 rounded-full blur-2xl group-hover:bg-[#d4af37]/15 transition-all duration-500" />
                
                <div className="space-y-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] border border-[#d4af37]/20 group-hover:scale-110 group-hover:bg-[#d4af37]/20 transition-all duration-500 shadow-md">
                    <BookOpen size={30} />
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold font-serif text-[#d4af37] tracking-wider italic">
                      The Poet
                    </h2>
                    <p className="text-sm font-light leading-relaxed text-[#a39587] font-serif max-w-[280px]">
                      Explore the depth of Hindi & Gujarati literature. Spanning heartfelt Ghazals, verses, and calligraphic art.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af37]/80 group-hover:text-[#d4af37] group-hover:translate-x-2 transition-all duration-300">
                  <span>Enter Profile</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Programmer Profile Selection Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="flex-1 w-full"
          >
            <Link to="/programmer" className="block h-full">
              <div className="group relative h-full p-8 md:p-10 rounded-3xl bg-[#0f172a]/50 border-2 border-transparent hover:border-[#06b6d4]/40 hover:bg-[#0f172a]/80 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col items-center justify-between text-center space-y-6 overflow-hidden select-none">
                {/* Cyan glowing blob inside card */}
                <div className="absolute -left-16 -top-16 w-36 h-36 bg-[#06b6d4]/5 rounded-full blur-2xl group-hover:bg-[#06b6d4]/15 transition-all duration-500" />
                
                <div className="space-y-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] border border-[#06b6d4]/20 group-hover:scale-110 group-hover:bg-[#06b6d4]/20 transition-all duration-500 shadow-md">
                    <Terminal size={30} />
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold font-sans text-[#06b6d4] tracking-wider">
                      The Programmer
                    </h2>
                    <p className="text-sm font-light leading-relaxed text-[#94a3b8] max-w-[280px]">
                      Discover digital solutions, AI health-bots, clean UI/UX, and smart object systems written in Java and React.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#06b6d4]/80 group-hover:text-[#06b6d4] group-hover:translate-x-2 transition-all duration-300">
                  <span>Enter Profile</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
