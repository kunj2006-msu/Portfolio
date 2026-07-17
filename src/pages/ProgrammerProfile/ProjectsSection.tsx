import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Database, Cpu, Network, Truck, X } from 'lucide-react';
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
    media: { type: 'image', url: 'https://res.cloudinary.com/dssflxwaq/image/upload/v1784252119/026739e8-14db-466c-a4f0-d9f0cdf43d12.png' },
    problemStatement: "Blockchain scaling concepts are notoriously difficult for beginners to grasp, and deploying testing networks involves transaction overhead and slow iterations, creating a high barrier of entry for interactive learning.",
    implementationDetails: "Designed and implemented an interactive educational environment focusing on Layer-2 scaling concepts. Developed a proof-of-work (PoW) simulator with debounced client-side SHA-256 cryptographic hashing to visualize block construction. Integrated live crypto feeds using Recharts and designed dynamic quizzes to evaluate core blockchain understanding."
  },
  {
    title: "Dhanvantari",
    description: "Bilingual AI healthcare platform with Patient Portal & Doctor Dashboard powered by a containerized RAG pipeline.",
    tech: ["Spring Boot", "pgvector", "RAG", "Docker"],
    icon: Database,
    github: "https://github.com/kunj2006-msu/Dhanvantari2.0",
    media: { type: 'video', url: 'https://res.cloudinary.com/dssflxwaq/video/upload/v1784252884/Screen_Recording_2026-07-17_070815_itga2j.mp4' },
    problemStatement: "Individuals in rural and bilingual communities struggle to access immediate, accurate healthcare advice and local home remedies in their native language, often misunderstanding complex clinical terms.",
    implementationDetails: "Engineered a containerized RAG pipeline to power a bilingual healthcare system. Designed a functional AI chatbot assistant using semantic vector matching via pgvector over Spring Boot to answer medical queries. Integrated a smart remedy feature that maps common symptoms to verified localized, traditional solutions, accessible through independent Patient and Doctor dashboards."
  },
  {
    title: "TransitOps: Fleet Operations",
    description: "A centralized, end-to-end logistics and fleet management platform featuring custom role-based dashboards, active dispatch tracking via a server-side simulation engine, and database integrity validation over Supabase PostgreSQL.",
    tech: ["React (TS)", "Express", "PostgreSQL", "Supabase"],
    icon: Truck,
    github: "https://github.com/Taksh-06/odoo-hackathon",
    isHackathon: true,
    media: { type: 'image', url: 'https://res.cloudinary.com/dssflxwaq/image/upload/v1784252191/1fbe497c-fa66-4709-959c-f5a128246efb.png' },
    problemStatement: "Logistics coordinators face extreme delays when active dispatch runs are siloed, lacking a centralized dashboard that tracks drivers, ensures prompt deliveries, and maintains system-wide data integrity.",
    implementationDetails: "Built a fleet logistics controller featuring customized role access (Dispatcher, Admin, Driver). Programmed a server-side simulator mimicking ongoing dispatches and transit runs. Deployed strict PostgreSQL transactions on Supabase to ensure data safety, keeping log tables synchronized across active routes."
  },
  {
    title: "Pavitr-Pravah",
    description: "AI-driven temple crowd management platform using real-time analytics and forecasting.",
    tech: ["React", "OpenCV", "TensorFlow", "Analytics"],
    icon: Cpu,
    github: "https://github.com/kunj2006-msu/Pavitr-Pravah",
    demo: "https://pavitr-pravah.netlify.app/",
    media: { type: 'image', url: 'https://res.cloudinary.com/dssflxwaq/image/upload/v1784252664/4003dff9-76df-4e5d-9a17-464279e88c9b.png' },
    problemStatement: "During high-traffic religious festivals, overcrowding inside narrow corridors pose safety risks. Managing crowd flows reactively leads to congestion, delays, and emergency responses.",
    implementationDetails: "Created a real-time crowd safety management system. Connected mock video feeds to OpenCV scripts to detect heads, estimate crowd density, and forecast incoming traffic using TensorFlow regression models. Integrated alerts and action workflows within a neat administrative monitoring interface."
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

interface ProjectsSectionProps {
  onModalToggle?: (isOpen: boolean) => void;
}

export default function ProjectsSection({ onModalToggle }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Set overflow hidden on body when modal is open to prevent page scroll
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      onModalToggle?.(true);
    } else {
      document.body.style.overflow = '';
      onModalToggle?.(false);
    }
    return () => {
      document.body.style.overflow = '';
      onModalToggle?.(false);
    };
  }, [selectedProject, onModalToggle]);

  return (
    <section id="projects" className="py-24 relative bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4 uppercase tracking-wider text-white">Projects</h2>
          <p className="text-[var(--accent)] font-semibold font-sans">&gt;_ Technical Creations & Codebases</p>
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
                <div
                  onClick={() => setSelectedProject(proj)}
                  className="cursor-pointer rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF41] flex flex-col justify-between items-stretch group gold-shadow h-full overflow-hidden"
                >
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
                              className="hover:text-[var(--accent)] transition-colors p-1"
                              aria-label="Github link"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={18} />
                            </a>
                          )}
                          {proj.demo && (
                            <a
                              href={proj.demo}
                              className="hover:text-[var(--accent)] transition-colors p-1"
                              aria-label="Demo link"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors flex flex-wrap items-center gap-2">
                        <span>{proj.title}</span>
                        {proj.isHackathon && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 px-2 py-0.5 rounded-full inline-block">
                            HACKATHON_BUILD
                          </span>
                        )}
                      </h3>

                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-mono mb-6">
                        {proj.description}
                      </p>
                      <span className="text-xs text-[var(--accent)]/70 font-mono block hover:underline mb-4">
                        &gt; Click to inspect source_details.log
                      </span>
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="bg-[#000000] border border-[#00FF41] rounded-2xl w-[95%] max-w-2xl overflow-hidden font-mono shadow-[0_0_30px_rgba(0,255,65,0.35)] flex flex-col max-h-[90vh] text-[#e2e8f0] crt-overlay"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Title Bar */}
              <div className="bg-[#0b0c10] px-4 py-3.5 flex items-center justify-between border-b border-[#00FF41]/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#eab308]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <span className="text-xs font-mono text-[#00FF41] font-bold flex items-center gap-1.5">
                  <Cpu size={12} className="animate-pulse" />
                  project_inspector.sh --inspect
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-[#00FF41] border border-[#00FF41]/30 hover:border-[#00FF41] hover:bg-[#00FF41]/10 px-2 py-1 rounded transition-all cursor-pointer font-bold"
                >
                  [ CLOSE ]
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-left select-none">
                {/* Media inside modal */}
                {selectedProject.media && (
                  <div className="relative w-full h-44 sm:h-60 overflow-hidden border border-[#00FF41]/20 rounded-xl mb-2">
                    {selectedProject.media.type === 'image' ? (
                      <img
                        src={selectedProject.media.url}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={selectedProject.media.url}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                )}

                {/* Title and Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[#00FF41]/10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase flex items-center gap-2">
                    <span className="text-[#00FF41]">&gt;</span> {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#00FF41] border border-[#00FF41]/40 hover:border-[#00FF41] px-3 py-1.5 rounded hover:bg-[#00FF41]/10 transition-all cursor-pointer"
                      >
                        [ GITHUB ]
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold bg-[#00FF41] text-[#000000] border border-[#00FF41] px-3 py-1.5 rounded hover:bg-[#000000] hover:text-[#00FF41] transition-all cursor-pointer shadow-[0_0_10px_rgba(0,255,65,0.4)]"
                      >
                        [ RUN_DEMO ]
                      </a>
                    )}
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-[#00FF41] uppercase tracking-wider">
                    // PROBLEM STATEMENT:
                  </h4>
                  <p className="text-sm leading-relaxed text-[#6b7c96] font-mono">
                    {selectedProject.problemStatement}
                  </p>
                </div>

                {/* Implementation Details */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-[#00FF41] uppercase tracking-wider">
                    // IMPLEMENTATION DETAILS:
                  </h4>
                  <p className="text-sm leading-relaxed text-[#e2e8f0] font-mono whitespace-pre-line">
                    {selectedProject.implementationDetails}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-[#00FF41] uppercase tracking-wider">
                    // TECH STACK:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
