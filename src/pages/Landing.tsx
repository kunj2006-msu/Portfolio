import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Terminal, ArrowRight, ChevronRight } from 'lucide-react';

/* ───────── Dual-tone floating particles ───────── */
function DualParticleBackground() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      size: number;
      left: number;
      delay: number;
      duration: number;
      color: string;
      glow: string;
    }>
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map((_, i) => {
      const leftPos = Math.random() * 100;
      // Left-half particles are golden, right-half are neon-green
      const isLeft = leftPos < 50;
      return {
        id: i,
        size: Math.random() * 3 + 1.5,
        left: leftPos,
        delay: Math.random() * 8,
        duration: Math.random() * 12 + 18,
        color: isLeft ? 'rgba(255,215,0,0.5)' : 'rgba(0,255,65,0.5)',
        glow: isLeft ? 'rgba(255,215,0,0.25)' : 'rgba(0,255,65,0.25)',
      };
    });
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          initial={{ bottom: '-5%', left: `${p.left}%`, opacity: 0 }}
          animate={{
            bottom: '105%',
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 8px ${p.glow}`,
          }}
        />
      ))}
    </div>
  );
}

/* ───────── Main Landing page ───────── */
export default function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#060606] text-white px-4">
      {/* Dual-tone particle background */}
      <DualParticleBackground />

      {/* Split radial gradient background — golden left, neon-green right */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 60% at 25% 50%, rgba(255,215,0,0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 60% at 75% 50%, rgba(0,255,65,0.04) 0%, transparent 70%)',
            'radial-gradient(ellipse 70% 70% at 20% 45%, rgba(255,215,0,0.06) 0%, transparent 70%), radial-gradient(ellipse 70% 70% at 80% 55%, rgba(0,255,65,0.06) 0%, transparent 70%)',
            'radial-gradient(ellipse 60% 60% at 25% 50%, rgba(255,215,0,0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 60% at 75% 50%, rgba(0,255,65,0.04) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle center divider line */}
      <div className="absolute left-1/2 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none z-0" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl text-center space-y-14">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-5"
        >
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/40 font-sans font-medium">
            Welcome to the Portfolio
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-white leading-snug">
            Two Worlds. One Mind.
            <br />
            <span className="text-white/60">Which side would you like to explore?</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="w-10 h-px bg-[#FFD700]/40 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-10 h-px bg-[#00FF41]/40 rounded-full" />
          </div>
        </motion.div>

        {/* ── Cards ── */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-4xl mx-auto justify-center items-stretch">
          {/* ─── Card 1: The Poet ─── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, y: -6 }}
            className="flex-1 w-full"
          >
            <Link to="/poet" className="block h-full" draggable={false}>
              <div className="group relative h-full p-8 md:p-10 rounded-2xl bg-[#1a1510]/70 border border-[#FFD700]/10 backdrop-blur-sm transition-all duration-500 hover:border-[#FFD700]/35 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] flex flex-col items-center justify-between text-center space-y-6 overflow-hidden select-none cursor-pointer">
                {/* Warm inner glow */}
                <div className="absolute -right-20 -top-20 w-44 h-44 bg-[#FFD700]/[0.03] rounded-full blur-3xl group-hover:bg-[#FFD700]/[0.1] transition-all duration-700" />
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#FFD700]/[0.02] rounded-full blur-2xl group-hover:bg-[#FFD700]/[0.06] transition-all duration-700" />

                <div className="space-y-5 flex flex-col items-center relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] border border-[#FFD700]/15 group-hover:scale-110 group-hover:bg-[#FFD700]/20 group-hover:border-[#FFD700]/30 transition-all duration-500 shadow-lg">
                    <BookOpen size={26} />
                  </div>

                  {/* Text */}
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-semibold font-serif text-[#FFD700] tracking-wide italic">
                      The Poet
                    </h2>
                    <p className="text-sm font-light leading-relaxed text-[#a39587] font-serif max-w-[260px]">
                      Explore the depth of Hindi & Gujarati literature — heartfelt Ghazals, verses, and calligraphic art.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD700]/60 group-hover:text-[#FFD700] group-hover:gap-3 transition-all duration-300 relative z-10">
                  <span>Enter Profile</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ─── Card 2: The Programmer ─── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: 'easeOut' }}
            whileHover={{
              scale: 1.04,
              rotateX: -2,
              rotateY: 3,
            }}
            style={{ perspective: 800 }}
            className="flex-1 w-full"
          >
            <Link to="/programmer" className="block h-full" draggable={false}>
              <div className="group relative h-full p-8 md:p-10 rounded-2xl bg-[#000000]/80 border border-[#00FF41]/10 backdrop-blur-sm transition-all duration-500 hover:border-[#00FF41]/40 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] flex flex-col items-center justify-between text-center space-y-6 overflow-hidden select-none cursor-pointer">
                {/* Neon inner glow */}
                <div className="absolute -left-20 -top-20 w-44 h-44 bg-[#00FF41]/[0.02] rounded-full blur-3xl group-hover:bg-[#00FF41]/[0.08] transition-all duration-700" />
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#00FF41]/[0.015] rounded-full blur-2xl group-hover:bg-[#00FF41]/[0.05] transition-all duration-700" />

                {/* Scanline overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,65,0.015)_2px,rgba(0,255,65,0.015)_4px)]" />

                <div className="space-y-5 flex flex-col items-center relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#00FF41]/10 flex items-center justify-center text-[#00FF41] border border-[#00FF41]/15 group-hover:scale-110 group-hover:bg-[#00FF41]/20 group-hover:border-[#00FF41]/30 transition-all duration-500 shadow-lg">
                    <Terminal size={26} />
                  </div>

                  {/* Text */}
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-semibold font-mono text-[#00FF41] tracking-wide">
                      The Programmer
                    </h2>
                    <p className="text-sm font-light leading-relaxed text-[#6b7c96] font-mono max-w-[260px]">
                      Discover digital solutions, AI health-bots, clean UI/UX, and smart systems in Java & React.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#00FF41]/60 group-hover:text-[#00FF41] group-hover:gap-2.5 transition-all duration-300 font-mono relative z-10">
                  <ChevronRight size={12} className="text-[#00FF41]/40 group-hover:text-[#00FF41]" />
                  <span>Enter Profile</span>
                  <span className="inline-block w-1.5 h-4 bg-[#00FF41]/50 group-hover:bg-[#00FF41] animate-cursor-blink ml-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
