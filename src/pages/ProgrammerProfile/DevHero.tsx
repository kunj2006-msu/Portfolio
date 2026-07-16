import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import MatrixRain from '../../components/MatrixRain';

export default function DevHero() {
  const [showWhoamiOutput, setShowWhoamiOutput] = useState(false);
  const [whoamiOutputFinished, setWhoamiOutputFinished] = useState(false);
  const [showNeofetchOutput, setShowNeofetchOutput] = useState(false);
  const [neofetchOutputFinished, setNeofetchOutputFinished] = useState(false);

  return (
    <section id="developer" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      {/* Matrix Rain Background */}
      <MatrixRain />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.04)_0%,transparent_70%)] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col items-center">
        {/* Sleek Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl bg-[#030303]/90 border border-[var(--accent)]/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.15)] mb-10 crt-overlay"
        >
          {/* Terminal Title Bar */}
          <div className="bg-[#0b0c10] px-4 py-3 flex items-center justify-between border-b border-[var(--border)]">
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
          <div className="p-6 font-mono text-sm space-y-4 text-left leading-relaxed min-h-[300px]">
            <div>
              <span className="text-[#00FF41]">kakakunj57@gmial.com:~$</span>{' '}
              <span className="text-white">
                <TypeAnimation
                  sequence={[
                    500,
                    'whoami',
                    () => setShowWhoamiOutput(true)
                  ]}
                  speed={50}
                  cursor={false}
                />
                {!showWhoamiOutput && <span className="animate-cursor-blink text-[#00FF41] ml-0.5">█</span>}
              </span>
            </div>

            {showWhoamiOutput && (
              <div className="text-cyan-400 space-y-1">
                <TypeAnimation
                  sequence={[
                    `> 3rd-year B.E. Computer Science student at MSU Baroda.\n> Passionate about OOP, full-stack AI healthcare systems, and solving real-world problems.\n> Active member of the university's AI/ML Club and Open Source contributor.`,
                    () => setWhoamiOutputFinished(true)
                  ]}
                  speed={75}
                  cursor={false}
                  style={{ whiteSpace: 'pre-line', display: 'block' }}
                />
                {showWhoamiOutput && !whoamiOutputFinished && (
                  <span className="animate-cursor-blink text-[#00FF41] ml-0.5">█</span>
                )}
              </div>
            )}

            {whoamiOutputFinished && (
              <div>
                <span className="text-[#00FF41]">kakakunj57@gmial.com:~$</span>{' '}
                <span className="text-white">
                  <TypeAnimation
                    sequence={[
                      300,
                      'neofetch',
                      () => setShowNeofetchOutput(true)
                    ]}
                    speed={50}
                    cursor={false}
                  />
                  {!showNeofetchOutput && <span className="animate-cursor-blink text-[#00FF41] ml-0.5">█</span>}
                </span>
              </div>
            )}

            {showNeofetchOutput && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-cyan-400 pt-1 border-t border-[var(--border)]/30">
                <div className="space-y-1">
                  <p className="text-[var(--accent)] font-bold uppercase">LANGUAGES</p>
                  <TypeAnimation
                    sequence={["Java, Python, C,\nJavaScript, HTML"]}
                    speed={60}
                    cursor={false}
                    style={{ whiteSpace: 'pre-line', display: 'block' }}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[var(--accent)] font-bold uppercase">TECHNOLOGIES</p>
                  <TypeAnimation
                    sequence={[
                      "React, Spring Boot,\nMongoDB, PostgreSQL,\npgvector",
                      () => setNeofetchOutputFinished(true)
                    ]}
                    speed={60}
                    cursor={false}
                    style={{ whiteSpace: 'pre-line', display: 'block' }}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[var(--accent)] font-bold uppercase">TOOLS & AI</p>
                  <TypeAnimation
                    sequence={["Git, Docker/Containers,\nCursor, Windsurf,\nTensorFlow, OpenCV"]}
                    speed={60}
                    cursor={false}
                    style={{ whiteSpace: 'pre-line', display: 'block' }}
                  />
                </div>
              </div>
            )}

            {neofetchOutputFinished && (
              <div className="flex items-center gap-1 pt-2 text-[#00FF41]">
                <span>visitor@portfolio:~$</span>
                <span className="animate-cursor-blink text-[#00FF41]">█</span>
              </div>
            )}
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
              className="bg-[var(--accent)] text-[var(--accent-foreground)] px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,255,65,0.3)] font-sans animate-border-pulse"
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
