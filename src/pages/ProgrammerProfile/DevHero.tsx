import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu } from 'lucide-react';

export default function DevHero() {
  return (
    <section id="developer" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      {/* Cyan grid background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col items-center">
        {/* Sleek Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl bg-[#0f172a]/80 border border-[var(--accent)]/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] mb-10"
        >
          {/* Terminal Title Bar */}
          <div className="bg-[#1e293b] px-4 py-3 flex items-center justify-between border-b border-[var(--border)]">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#eab308]" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            </div>
            <span className="text-xs font-mono text-[var(--muted-foreground)] flex items-center gap-1.5">
              <Terminal size={12} />
              visitor@developer-portfolio:~
            </span>
            <div className="w-10" />
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm space-y-4 text-left leading-relaxed">
            <div>
              <span className="text-[#22c55e]">kakakunj57@gmial.com:~$</span> <span className="text-white">whoami</span>
            </div>
            <div className="text-[var(--muted-foreground)] space-y-1">
              <p>&gt; 3rd-year B.E. Computer Science student at MSU Baroda.</p>
              <p>&gt; Passionate about OOP, full-stack AI healthcare systems, and solving real-world problems.</p>
              <p>&gt; Active member of the university's AI/ML Club and Open Source contributor.</p>
            </div>

            <div>
              <span className="text-[#22c55e]">kakakunj57@gmial.com:~$</span> <span className="text-white">neofetch</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[var(--muted-foreground)] pt-1 border-t border-[var(--border)]/30">
              <div className="space-y-1">
                <p className="text-[var(--accent)] font-bold uppercase">LANGUAGES</p>
                <p>Java, Python, C,</p>
                <p>JavaScript, HTML</p>
              </div>
              <div className="space-y-1">
                <p className="text-[var(--accent)] font-bold uppercase">TECHNOLOGIES</p>
                <p>React, Spring Boot,</p>
                <p>MongoDB, PostgreSQL,</p>
                <p>pgvector</p>
              </div>
              <div className="space-y-1">
                <p className="text-[var(--accent)] font-bold uppercase">TOOLS & AI</p>
                <p>Git, Docker/Containers,</p>
                <p>Cursor, Windsurf,</p>
                <p>TensorFlow, OpenCV</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-[#22c55e]">
              <span>visitor@portfolio:~$</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-2 h-4 bg-[#06b6d4]"
              />
            </div>
          </div>
        </motion.div>

        {/* Hero Title & Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 text-xs text-[var(--accent)] font-semibold font-sans mb-2">
            <Cpu size={14} className="animate-spin-slow" />
            <span>Available for Collaborations</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-white leading-tight">
            Building Intelligent Software & AI Systems
          </h2>

          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto font-light leading-relaxed">
            I specialize in full-stack architecture, building healthcare AI bots, Object-Oriented GUI tools, and device simulator programs.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-[var(--accent)] text-[var(--accent-foreground)] px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-[0_4px_20px_rgba(6,182,212,0.3)] font-sans"
            >
              Explore Projects
            </a>
            <a
              href="#education"
              className="border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)]/5 px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all font-sans"
            >
              Academic Stats
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
