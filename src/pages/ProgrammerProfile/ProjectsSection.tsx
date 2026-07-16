import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Database, Cpu, Sparkles, Network } from 'lucide-react';

const projects = [
  {
    title: "L2_ARCHITECT: Scaling Ethereum",
    description: "An educational Web3 platform explaining blockchain mechanics and L2 scaling (Arbitrum). Features interactive diagnostic quizzes, real-time CoinGecko crypto data visualizers using Recharts, and a modular PoW cryptographic blockchain simulator with debounced hashing.",
    tech: ["Next.js 16", "React 19", "Web3 / Blockchain", "APIs"],
    icon: Network,
    github: "https://github.com/kunj2006-msu/l2-architect",
    demo: "https://l2-architect.vercel.app/",
    isHackathon: true
  },
  {
    title: "Dhanvantari",
    description: "Full-stack healthcare AI platform offering active remedies, symptom analysis, and clinical advice.",
    tech: ["React", "Python", "MongoDB", "NLP"],
    icon: Sparkles,
    github: "https://github.com/kunj2006-msu/Dhanvatari",
  },
  {
    title: "Pavitr-Pravah",
    description: "AI-driven temple crowd management platform using real-time analytics and forecasting.",
    tech: ["React", "OpenCV", "TensorFlow", "Analytics"],
    icon: Cpu,
    github: "https://github.com/kunj2006-msu/Pavitr-Pravah",
    demo: "https://pavitr-pravah.netlify.app/"
  },
  {
    title: "Dhanvantari 2.0",
    description: "Bilingual AI healthcare platform with Patient Portal & Doctor Dashboard powered by a containerized RAG pipeline.",
    tech: ["Spring Boot", "pgvector", "RAG", "Docker"],
    icon: Database,
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4 uppercase tracking-wider">Projects</h2>
          <p className="text-[var(--accent)] font-semibold font-sans">Technical Creations & Codebases</p>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all duration-500 flex flex-col justify-between items-stretch group hover:-translate-y-2 gold-shadow"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]/20 shadow-sm group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-foreground)] transition-all duration-500">
                    <proj.icon size={22} />
                  </div>
                  <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                    <a href={proj.github} className="hover:text-[var(--accent)] transition-colors" aria-label="Github link">
                      <Github size={18} />
                    </a>
                    <a href={proj.demo} className="hover:text-[var(--accent)] transition-colors" aria-label="Demo link">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors flex flex-wrap items-center gap-2">
                  <span>{proj.title}</span>
                  {proj.isHackathon && (
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 px-2 py-0.5 rounded-full inline-block">
                      Hackathon Build
                    </span>
                  )}
                </h3>

                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-light mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]/30">
                  {proj.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono font-bold tracking-wider uppercase bg-[var(--accent)]/5 text-[var(--accent)] border border-[var(--accent)]/10 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
