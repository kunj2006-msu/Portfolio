import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Cpu, Network, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../../components/TiltCard';
import { projects } from '../../data/projectsData';

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

const getProjectIcon = (id: string) => {
  switch (id) {
    case 'l2-architect':
      return Network;
    case 'dhanvantari':
      return Database;
    case 'transitops':
      return Truck;
    case 'pavitr-pravah':
      return Cpu;
    default:
      return Network;
    }
};

interface ProjectsSectionProps {
  onModalToggle?: (isOpen: boolean) => void;
}

export default function ProjectsSection({ onModalToggle }: ProjectsSectionProps) {
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
          <p className="text-[#00FF41] font-semibold font-sans">&gt;_ Technical Creations & Codebases</p>
          <div className="w-24 h-1 bg-[#00FF41] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, index) => {
            const ProjectIcon = getProjectIcon(proj.id);
            const firstMedia = proj.media && proj.media[0];

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <TiltCard className="h-full">
                  <Link
                    to={`/programmer/project/${proj.id}`}
                    className="block rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF41] flex flex-col justify-between items-stretch group h-full overflow-hidden no-underline"
                  >
                    {/* Top Section: Media Thumbnail with green multiplier overlay */}
                    {firstMedia && (
                      <div className="relative w-full h-48 md:h-52 overflow-hidden border-b border-gray-800 rounded-t-[22px]">
                        {/* Green Hacker Overlay, cleared on hover */}
                        <div className="absolute inset-0 bg-[#00FF41]/15 mix-blend-color group-hover:bg-transparent transition-all duration-300 pointer-events-none z-10" />
                        
                        {firstMedia.type === 'image' ? (
                          <img
                            src={firstMedia.url}
                            alt={proj.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video
                            src={firstMedia.url}
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
                          <div className="w-12 h-12 rounded-xl bg-[#00FF41]/10 text-[#00FF41] flex items-center justify-center border border-[#00FF41]/20 shadow-sm group-hover:scale-110 group-hover:bg-[#00FF41] group-hover:text-black transition-all duration-500">
                            <ProjectIcon size={22} />
                          </div>
                          
                          {/* Inner custom span tags to prevent nested anchor tag warnings in browser */}
                          <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                            {proj.links.github && (
                              <span
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  window.open(proj.links.github, '_blank', 'noopener,noreferrer');
                                }}
                                className="hover:text-[#00FF41] transition-colors p-1 cursor-pointer z-20"
                                aria-label="Github link"
                              >
                                <Github size={18} />
                              </span>
                            )}
                            {proj.links.live && (
                              <span
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  window.open(proj.links.live, '_blank', 'noopener,noreferrer');
                                }}
                                className="hover:text-[#00FF41] transition-colors p-1 cursor-pointer z-20"
                                aria-label="Demo link"
                              >
                                <ExternalLink size={18} />
                              </span>
                            )}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00FF41] transition-colors flex flex-wrap items-center gap-2">
                          <span>{proj.title}</span>
                          {proj.isHackathon && (
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30 px-2 py-0.5 rounded-full inline-block">
                              HACKATHON_BUILD
                            </span>
                          )}
                        </h3>

                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-mono mb-6">
                          {proj.shortDescription}
                        </p>
                        
                        <span className="text-xs text-[#00FF41]/70 font-mono block group-hover:underline mb-4">
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
                          {proj.techStack.map((tag, i) => (
                            <motion.span
                              key={i}
                              variants={tagVariants}
                              className="text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00FF41]/5 text-[#00FF41] border border-[#00FF41]/10 px-2 py-0.5 rounded-md"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
