import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Terminal, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-[#00FF41] font-mono flex flex-col items-center justify-center p-6 border border-[#00FF41]/30 m-4 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.15)]">
        <p className="text-red-500 mb-4 animate-pulse">&gt; ERROR: PROJECT_NOT_FOUND (404)</p>
        <Link
          to="/programmer"
          className="border border-[#00FF41] text-[#00FF41] px-5 py-2.5 rounded hover:bg-[#00FF41]/10 transition-all font-bold"
        >
          [ ./return_to_home.sh ]
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-[#00FF41] font-mono py-16 px-4 md:px-8 relative selection:bg-[#00FF41] selection:text-black">
      {/* CRT scanlines effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] opacity-20" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        {/* Top Navigation */}
        <div className="flex items-center justify-between border-b border-[#00FF41]/20 pb-4">
          <Link
            to="/programmer#projects"
            className="group inline-flex items-center gap-2 border border-[#00FF41]/30 hover:border-[#00FF41] px-4 py-2 rounded hover:bg-[#00FF41]/10 transition-all duration-300 text-sm font-bold cursor-pointer"
          >
            <span className="text-[#00FF41]/60 group-hover:text-[#00FF41]">&gt;</span>
            <span>cd ../</span>
          </Link>
          <span className="text-xs text-[#00FF41]/50 hidden sm:inline-flex items-center gap-1.5">
            <Terminal size={12} className="animate-pulse" />
            session_active: {project.id}.log
          </span>
        </div>

        {/* Terminal Header Prompt */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/50 border border-[#00FF41]/20 rounded-lg p-6 shadow-[0_0_15px_rgba(0,255,65,0.05)]"
        >
          <div className="flex items-center gap-2 mb-3 text-xs text-[#00FF41]/40 border-b border-[#00FF41]/10 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2">project_inspector.sh</span>
          </div>
          <p className="text-sm md:text-base leading-relaxed break-all">
            <span className="text-emerald-400">root@kunj</span>
            <span className="text-[#00FF41]">:</span>
            <span className="text-blue-400">~/projects/{project.id}</span>
            <span className="text-[#00FF41]">$ cat profile.json</span>
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold uppercase mt-4 tracking-wider text-white">
            {project.title}
          </h1>
          {project.isHackathon && (
            <span className="mt-2 text-[10px] font-bold uppercase tracking-widest bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/40 px-2.5 py-0.5 rounded-full inline-block">
              HACKATHON_BUILD
            </span>
          )}
        </motion.div>

        {/* Media Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {project.media.map((mediaItem, i) => (
            <div
              key={i}
              className="w-full max-w-5xl mx-auto border border-[#00FF41]/30 rounded-xl overflow-hidden bg-black/60 shadow-[0_0_25px_rgba(0,255,65,0.1)] relative group"
            >
              {mediaItem.type === 'image' ? (
                <img
                  src={mediaItem.url}
                  alt={project.title}
                  className="w-full h-auto object-contain block max-h-[70vh] mx-auto filter brightness-90 contrast-105 group-hover:brightness-100 transition-all duration-300"
                />
              ) : (
                <video
                  src={mediaItem.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-contain block max-h-[70vh] mx-auto filter brightness-90 contrast-105 group-hover:brightness-100 transition-all duration-300"
                />
              )}
              {/* Green Overlay Scanner effect */}
              <div className="absolute inset-0 bg-[#00FF41]/5 opacity-30 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Detailed Content Layout */}
        <div className="space-y-10">
          {/* Section 1: Problem Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="text-sm font-bold text-[#00FF41]/60 flex items-center gap-2">
              <span>&gt; cat problem_statement.txt</span>
              <span className="w-1.5 h-4 bg-[#00FF41] animate-[pulse_1s_infinite]" />
            </div>
            <div className="bg-black/30 border border-[#00FF41]/10 rounded-lg p-6 text-gray-300 leading-relaxed text-sm md:text-base">
              {project.problemStatement}
            </div>
          </motion.div>

          {/* Section 2: Implementation Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="text-sm font-bold text-[#00FF41]/60 flex items-center gap-2">
              <span>&gt; cat implementation.md</span>
              <span className="w-1.5 h-4 bg-[#00FF41] animate-[pulse_1s_infinite]" />
            </div>
            <div className="bg-black/30 border border-[#00FF41]/10 rounded-lg p-6 text-[#e2e8f0] leading-relaxed text-sm md:text-base whitespace-pre-line">
              {project.implementationDetails}
            </div>
          </motion.div>

          {/* Section 3: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="text-sm font-bold text-[#00FF41]/60 flex items-center gap-2">
              <span>&gt; neofetch --tech-stack</span>
            </div>
            <div className="bg-black/30 border border-[#00FF41]/10 rounded-lg p-6 flex flex-wrap gap-3">
              {project.techStack.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-bold uppercase tracking-wider bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30 px-3 py-1 rounded shadow-[0_0_8px_rgba(0,255,65,0.1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Action Buttons (Footer Links) */}
        <div className="pt-8 border-t border-[#00FF41]/20 flex flex-wrap gap-6 items-center justify-center">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41]/10 px-6 py-3 rounded-lg font-bold text-sm tracking-widest transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.05)] cursor-pointer"
            >
              <Github size={16} />
              <span>[ ./view_source.sh ]</span>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00FF41] text-black border border-[#00FF41] hover:bg-black hover:text-[#00FF41] px-6 py-3 rounded-lg font-bold text-sm tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.3)] cursor-pointer"
            >
              <ExternalLink size={16} />
              <span>[ ./launch_deployment.sh ]</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
