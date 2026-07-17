import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Github, Linkedin, Mail } from 'lucide-react';
import TiltCard from '../../components/TiltCard';

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

                  <div className="space-y-4 font-mono text-sm leading-relaxed text-[var(--muted-foreground)]">
                    <p className="text-cyan-400 font-semibold text-base border-b border-[var(--border)]/20 pb-2 mb-3">
                      Software Engineer | AI Enthusiast | Poet
                    </p>
                    <p>
                      Currently navigating my <span className="text-white font-semibold">3rd year of B.E. CSE</span> at{' '}
                      <span className="text-[#00FF41] font-semibold">MSU Baroda</span>. I specialize in building{' '}
                      <span className="text-cyan-400 font-semibold">robust full-stack applications</span> and{' '}
                      <span className="text-cyan-400 font-semibold">AI-driven healthcare platforms</span>. From optimizing database queries to deploying intelligent systems, I thrive on solving real-world architectural challenges.
                    </p>
                    <p>
                      Offline, I balance my highly logical daily routine by contributing to{' '}
                      <span className="text-[#00FF41] font-semibold">open-source communities</span> and writing{' '}
                      <span className="text-[#00FF41] font-semibold">Gujarati & Hindi Ghazals</span>.
                    </p>
                  </div>

                  {/* Neofetch Output */}
                  <div className="pt-5 mt-5 border-t border-[var(--border)]/20 space-y-3">
                    <div className="text-[#00FF41] font-bold text-xs flex items-center gap-1.5">
                      <span>kakakunj57@gmial.com:~$</span>
                      <span className="text-white font-normal">neofetch</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-cyan-400 font-mono">
                      <div className="space-y-1">
                        <p className="text-[var(--accent)] font-bold uppercase">LANGUAGES</p>
                        <p className="text-[var(--muted-foreground)] leading-relaxed">
                          Java, Python, C,<br />JavaScript, HTML
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[var(--accent)] font-bold uppercase">TECHNOLOGIES</p>
                        <p className="text-[var(--muted-foreground)] leading-relaxed">
                          React, Spring Boot,<br />MongoDB, PostgreSQL,<br />pgvector
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[var(--accent)] font-bold uppercase">TOOLS & AI</p>
                        <p className="text-[var(--muted-foreground)] leading-relaxed">
                          Git, Docker/Containers,<br />Cursor, Antigravity,<br />TensorFlow, OpenCV
                        </p>
                      </div>
                    </div>
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

          {/* Right Column — Profile Image & Name Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="h-full flex flex-col justify-center"
          >
            <TiltCard className="h-full">
              <div className="h-full min-h-[480px] p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF41] flex flex-col items-center justify-center gold-shadow group">
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl border-2 border-[#00FF41]/30 overflow-hidden bg-[#0a0d14] flex items-center justify-center group-hover:border-[#00FF41]/60 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,65,0.08)]">
                    <img
                      src="https://res.cloudinary.com/dssflxwaq/image/upload/v1784292254/copy_of_3de2728a-a133-4548-9365-b00e5c81b540.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                      }}
                    />
                  </div>
                  {/* Glow ring */}
                  <div className="absolute -inset-1 rounded-2xl bg-[#00FF41]/5 -z-10 group-hover:bg-[#00FF41]/10 transition-all duration-500 blur-sm" />
                </div>

                {/* Developer Name */}
                <h3 className="text-2xl font-bold font-mono tracking-wider text-white uppercase group-hover:text-[#00FF41] transition-colors duration-300 select-none mb-4">
                  Kunj Kaka
                </h3>

                {/* Social Links */}
                <div className="flex gap-4 items-center mt-2">
                  <a
                    href="https://github.com/kunj2006-msu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-[#00FF41]/20 bg-[#00FF41]/5 text-[#00FF41] hover:bg-[#00FF41] hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kunj-kaka-263997359/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-[#00FF41]/20 bg-[#00FF41]/5 text-[#00FF41] hover:bg-[#00FF41] hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:kakakunj57@gmial.com"
                    className="p-2.5 rounded-xl border border-[#00FF41]/20 bg-[#00FF41]/5 text-[#00FF41] hover:bg-[#00FF41] hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
