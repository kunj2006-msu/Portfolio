import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Cpu, Sparkles, Network, Truck } from 'lucide-react';
import TiltCard from '../../components/TiltCard';

const projects = [
  {
    title: "L2_ARCHITECT: Scaling Ethereum",
    description: "An educational Web3 platform explaining blockchain mechanics and L2 scaling (Arbitrum). Features interactive diagnostic quizzes, real-time CoinGecko crypto data visualizers using Recharts, and a modular PoW cryptographic blockchain simulator with debounced hashing.",
    tech: ["Next.js 16", "React 19", "Web3 / Blockchain", "APIs"],
    icon: Network,
    github: "https://github.com/kunj2006-msu/l2-architect",
    demo: "https://l2-architect.vercel.app/",
    isHackathon: true,
    media: { type: 'image', url: 'https://res.cloudinary.com/dssflxwaq/image/upload/v1784252119/026739e8-14db-466c-a4f0-d9f0cdf43d12.png' }
  },
  {
    title: "Dhanvantari",
    description: "Bilingual AI healthcare platform with Patient Portal & Doctor Dashboard powered by a containerized RAG pipeline.",
    tech: ["Spring Boot", "pgvector", "RAG", "Docker"],
    icon: Database,
    github: "https://github.com/kunj2006-msu/Dhanvantari2.0",
    media: { type: 'video', url: 'https://res.cloudinary.com/dssflxwaq/video/upload/v1784252884/Screen_Recording_2026-07-17_070815_itga2j.mp4' }
  },
  {
    title: "TransitOps: Fleet Operations",
    description: "A centralized, end-to-end logistics and fleet management platform featuring custom role-based dashboards, active dispatch tracking via a server-side simulation engine, and database integrity validation over Supabase PostgreSQL.",
    tech: ["React (TS)", "Express", "PostgreSQL", "Supabase"],
    icon: Truck,
    github: "https://github.com/Taksh-06/odoo-hackathon",
    isHackathon: true,
    media: { type: 'image', url: 'https://res.cloudinary.com/dssflxwaq/image/upload/v1784252191/1fbe497c-fa66-4709-959c-f5a128246efb.png' }
  },
  {
    title: "Pavitr-Pravah",
    description: "AI-driven temple crowd management platform using real-time analytics and forecasting.",
    tech: ["React", "OpenCV", "TensorFlow", "Analytics"],
    icon: Cpu,
    github: "https://github.com/kunj2006-msu/Pavitr-Pravah",
    demo: "https://pavitr-pravah.netlify.app/",
    media: { type: 'image', url: 'https://res.cloudinary.com/dssflxwaq/image/upload/v1784252664/4003dff9-76df-4e5d-9a17-464279e88c9b.png' }
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
                <div className="rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF41] flex flex-col justify-between items-stretch group gold-shadow h-full overflow-hidden">

                  {/* Top Section: Media Thumbnail */}
                  {proj.media && (
                    <div className="relative w-full h-48 md:h-52 overflow-hidden border-b border-gray-800 rounded-t-[22px]">
                      {proj.media.type === 'image' ? (
                        <img
                          src={proj.media.url}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={proj.media.url}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  )}

                  {/* Bottom Section: Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]/20 shadow-sm group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-foreground)] transition-all duration-500">
                          <proj.icon size={22} />
                        </div>
                        <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                          {proj.github && (
                            <a
                              href={proj.github}
                              className="hover:text-[var(--accent)] transition-colors"
                              aria-label="Github link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={18} />
                            </a>
                          )}
                          {proj.demo && (
                            <a
                              href={proj.demo}
                              className="hover:text-[var(--accent)] transition-colors"
                              aria-label="Demo link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
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
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
