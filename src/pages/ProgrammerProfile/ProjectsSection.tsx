import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Cpu, Sparkles, Network } from 'lucide-react';
import TiltCard from '../../components/TiltCard';

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

const tagContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4 uppercase tracking-wider">Projects</h2>
          <p className="text-[var(--accent)] font-semibold font-sans">Technical Creations & Codebases</p>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <TiltCard className="h-full">
                <div className="p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF41] flex flex-col justify-between items-stretch group gold-shadow h-full">
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
                    <motion.div
                      className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]/30"
                      variants={tagContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {proj.tech.map((tag, i) => (
                        <motion.span
                          key={i}
                          variants={tagVariants}
                          className="text-[10px] font-mono font-bold tracking-wider uppercase bg-[var(--accent)]/5 text-[var(--accent)] border border-[var(--accent)]/10 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
