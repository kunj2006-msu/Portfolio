import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Terminal, Users, Cpu, Shield, X, Eye } from 'lucide-react';
import TiltCard from '../../components/TiltCard';

interface AchievementsAndCommunityProps {
  onModalToggle?: (isOpen: boolean) => void;
}

export default function AchievementsAndCommunity({ onModalToggle }: AchievementsAndCommunityProps) {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Set overflow hidden on body when modal is open to prevent page scroll
  React.useEffect(() => {
    if (isCertificateOpen) {
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
  }, [isCertificateOpen, onModalToggle]);

  return (
    <section id="achievements" className="py-24 bg-[#000000] relative border-t border-[var(--border)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4 uppercase tracking-wider text-white">
            Certifications & Clubs
          </h2>
          <p className="text-[var(--accent)] font-semibold font-sans">&gt;_ Achievements & Community Leadership</p>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">

          {/* Left Column: Achievements & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TiltCard className="h-full">
              <div className="h-full p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:border-[#00FF41] hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] flex flex-col group font-mono text-left">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--border)]/30">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="text-[10px] text-[var(--muted-foreground)] ml-2 flex items-center gap-1">
                    <Terminal size={10} />
                    certifications.log
                  </span>
                </div>

                <div className="space-y-6 flex-1">
                  <h3 className="text-xl font-bold text-[#00FF41] flex items-center gap-2 mb-4">
                    <Award size={18} />
                    <span>&gt; CERTIFICATIONS</span>
                  </h3>

                  {/* Google Career Launchpad Card - Clickable to launch Zoom modal */}
                  <div
                    onClick={() => setIsCertificateOpen(true)}
                    className="p-5 rounded-2xl border border-[#00FF41]/20 bg-[#00FF41]/5 hover:border-[#00FF41] hover:shadow-[0_0_12px_rgba(0,255,65,0.25)] transition-all duration-300 cursor-pointer group/cert"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      {/* Thumbnail Container */}
                      <div className="w-full sm:w-36 h-28 sm:h-24 rounded-lg overflow-hidden border border-[#00FF41]/20 flex-shrink-0 bg-black/40 relative">
                        <img
                          src="https://res.cloudinary.com/dssflxwaq/image/upload/v1784270217/00c078fb-7465-40f0-bb6c-2b080c1b7f0f.png"
                          alt="Google Career Launchpad Certificate Thumbnail"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/cert:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#00FF41]/10 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-[10px] bg-black/90 px-2 py-1 rounded border border-[#00FF41] text-[#00FF41] uppercase tracking-wider font-bold flex items-center gap-1">
                            <Eye size={10} /> Zoom
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1 flex-1">
                        <h4 className="text-white font-bold text-sm tracking-wide group-hover/cert:text-[#00FF41] transition-colors">
                          Google Career Launchpad Certificate
                        </h4>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          Issued by Google • Verified Credential
                        </p>
                        <p className="text-xs text-slate-300 pt-2 leading-relaxed font-light">
                          Validation of core software practices, cloud deployment architectures, networks infrastructure, and IT administration pipelines.
                        </p>
                        <div className="pt-2 flex items-center gap-1.5 text-[10px] text-[#00FF41] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] inline-block animate-pulse" />
                          <span>STATUS: SIGNED_AND_VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom status bar */}
                <div className="pt-5 mt-5 border-t border-[var(--border)]/30 flex items-center justify-between text-[10px] text-[var(--muted-foreground)]">
                  <span>ROOT_USER: kakakunj57</span>
                  <span>LOAD_TIME: 45ms</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Community & Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <TiltCard className="h-full">
              <div className="h-full p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:border-[#00FF41] hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] flex flex-col group font-mono text-left">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--border)]/30">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="text-[10px] text-[var(--muted-foreground)] ml-2 flex items-center gap-1">
                    <Terminal size={10} />
                    community_participation.sh
                  </span>
                </div>

                <div className="space-y-6 flex-1">
                  <h3 className="text-xl font-bold text-[#00FF41] flex items-center gap-2 mb-4">
                    <Users size={18} />
                    <span>&gt; COLLEGE_CLUBS</span>
                  </h3>

                  {/* Neuralize Club */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-black/50 space-y-3">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <span className="text-xs bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20 px-2.5 py-1 rounded">
                        &gt;_ active_member: Neuralize_AI
                      </span>
                      <span className="text-[10px] text-[#00FF41] uppercase tracking-widest font-bold">
                        [ AI/ML CLUB ]
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <p className="text-[var(--muted-foreground)]">
                        <strong className="text-white font-bold">// Role:</strong> Management Team & Speaker
                      </p>
                      <p className="text-slate-300 leading-relaxed">
                        Managing core club operations and actively sharing knowledge within the campus community. Recently delivered a hands-on seminar on leveraging Hugging Face with Google Colab, demonstrating how to deploy and interact with pre-trained AI models using advanced system prompts.
                      </p>
                    </div>
                  </div>

                  {/* Dev Infinity Club */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-black/50 space-y-3">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <span className="text-xs bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20 px-2.5 py-1 rounded">
                        &gt;_ active_member: Dev_Infinity
                      </span>
                      <span className="text-[10px] text-[#00FF41] uppercase tracking-widest font-bold">
                        [ WEB DEVELOPMENT ]
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <p className="text-[var(--muted-foreground)]">
                        <strong className="text-white font-bold">// Role:</strong> Web Development Team Member
                      </p>
                      <p className="text-slate-300 leading-relaxed">
                        Recently inducted into the core web development team. Actively collaborating with peers to explore modern web technologies, bringing my full-stack and React experience to campus-driven development initiatives.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Bottom status bar */}
                <div className="pt-5 mt-5 border-t border-[var(--border)]/30 flex items-center justify-between text-[10px] text-[var(--muted-foreground)]">
                  <span>TERMINAL: TTY1</span>
                  <span>LOCATION: CSE_LAB_MSU</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {isCertificateOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={() => setIsCertificateOpen(false)}
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
                  <Shield size={12} className="animate-pulse" />
                  credential_viewer.sh --full-view
                </span>
                <button
                  onClick={() => setIsCertificateOpen(false)}
                  className="text-xs text-[#00FF41] border border-[#00FF41]/30 hover:border-[#00FF41] hover:bg-[#00FF41]/10 px-2 py-1 rounded transition-all cursor-pointer font-bold"
                >
                  [ CLOSE ]
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-left select-none">
                {/* Full view image */}
                <div className="relative w-full overflow-hidden border border-[#00FF41]/30 rounded-xl bg-black mb-2 flex items-center justify-center p-1 sm:p-3">
                  <img
                    src="https://res.cloudinary.com/dssflxwaq/image/upload/v1784270217/00c078fb-7465-40f0-bb6c-2b080c1b7f0f.png"
                    alt="Google Career Launchpad Certificate Full View"
                    className="w-full h-auto object-contain max-h-[50vh] rounded-lg"
                  />
                </div>

                {/* Title */}
                <div className="pb-4 border-b border-[#00FF41]/10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase flex items-center gap-2">
                    <span className="text-[#00FF41]">&gt;</span> Google Career Launchpad
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] mt-1">
                    Issued by Google • Verified via Career Launchpad Program
                  </p>
                </div>

                {/* Credential Schematic */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-[#00FF41] uppercase tracking-wider">
                    // CREDENTIAL SCHEMATIC:
                  </h4>
                  <div className="text-sm leading-relaxed text-[#e2e8f0] font-mono space-y-1.5">
                    <p><span className="text-[#6b7c96]">// Issuer:</span> Google</p>
                    <p><span className="text-[#6b7c96]">// Scope:</span> Cloud Infrastructures, IT Operations, Networks Systems, UNIX/Linux CLI administration, & Production Deployments</p>
                    <p><span className="text-[#6b7c96]">// Verification Hash:</span> <span className="text-xs break-all bg-black px-1.5 py-0.5 border border-[#00FF41]/10 rounded select-all">SHA256: 00c078fb746540f0bb6c2b080c1b7f0f</span></p>
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
