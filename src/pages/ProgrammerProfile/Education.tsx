import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, User } from 'lucide-react';
import TiltCard from '../../components/TiltCard';

const techTags = [
  '[ React.js ]',
  '[ Python ]',
  '[ AI/ML ]',
  '[ Next.js 16 ]',
  '[ Spring Boot ]',
  '[ Docker ]',
  '[ Java ]',
  '[ MongoDB ]',
];

const tagContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[var(--muted)]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4 uppercase tracking-wider">About Me</h2>
          <p className="text-[var(--accent)] font-semibold font-sans">Who I Am & What I Build</p>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          {/* Left Column — About Me Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TiltCard className="h-full">
              <div className="h-full p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF41] flex flex-col gold-shadow group">
                {/* Terminal Title Bar */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--border)]/30">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="text-[10px] font-mono text-[var(--muted-foreground)] ml-2 flex items-center gap-1">
                    <Terminal size={10} />
                    about.sh
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-5 flex-1">
                  <h3 className="text-xl font-bold font-mono text-[#00FF41] flex items-center gap-2">
                    <User size={18} />
                    <span>&gt; WHOAMI</span>
                  </h3>

                  <div className="space-y-4 font-mono text-sm leading-relaxed">
                    <p className="text-cyan-400">
                      I am a <span className="text-white font-semibold">3rd-year B.E. Computer Science</span> student at{' '}
                      <span className="text-[#00FF41] font-semibold">MSU Baroda</span>.
                    </p>
                    <p className="text-[var(--muted-foreground)]">
                      I am passionate about <span className="text-cyan-400">Object-Oriented Programming</span>,
                      building <span className="text-cyan-400">full-stack AI healthcare systems</span>,
                      and solving real-world problems.
                    </p>
                    <p className="text-[var(--muted-foreground)]">
                      When I'm not coding, I write <span className="text-[#00FF41]">Ghazals</span> and
                      contribute to <span className="text-[#00FF41]">open-source communities</span>.
                    </p>
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className="pt-5 mt-5 border-t border-[var(--border)]/30 flex items-center justify-between text-[10px] font-mono text-[var(--muted-foreground)]">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] inline-block animate-pulse" />
                    ACTIVE
                  </span>
                  <span>GPA: <span className="text-[#00FF41] font-bold">8.86</span></span>
                  <span>2024 — 2028</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column — Profile Image & Tech Tags Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <TiltCard className="h-full">
              <div className="h-full p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF41] flex flex-col items-center justify-center gold-shadow group">
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="w-64 h-64 rounded-2xl border-2 border-[#00FF41]/30 overflow-hidden bg-[#0a0d14] flex items-center justify-center group-hover:border-[#00FF41]/60 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,65,0.08)]">
                    <img
                      src="https://res.cloudinary.com/dssflxwaq/image/upload/v1784209320/c4273aeb-6400-4237-a40a-383f88498fcd.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                      }}
                    />
                    {/* Fallback icon */}
                    {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <User size={80} className="text-[#00FF41]/20" />
                    </div> */}
                  </div>
                  {/* Glow ring */}
                  <div className="absolute -inset-1 rounded-2xl bg-[#00FF41]/5 -z-10 group-hover:bg-[#00FF41]/10 transition-all duration-500 blur-sm" />
                </div>

                {/* Tech Tags */}
                <motion.div
                  className="flex flex-wrap justify-center gap-2.5 max-w-sm"
                  variants={tagContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {techTags.map((tag, i) => (
                    <motion.span
                      key={i}
                      variants={tagVariants}
                      className="text-xs font-mono font-bold tracking-wider text-[#00FF41] border border-[#00FF41]/20 bg-[#00FF41]/5 px-3 py-1.5 rounded-lg cursor-default hover:scale-110 hover:bg-[#00FF41]/10 hover:border-[#00FF41]/40 transition-all duration-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
