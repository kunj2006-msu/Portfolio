import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Terminal, Send, ShieldAlert } from 'lucide-react';
import TiltCard from '../../components/TiltCard';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Error submitting form", data);
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#000000] relative border-t border-[var(--border)]/20">
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
            Connection Link
          </h2>
          <p className="text-[var(--accent)] font-semibold font-sans">&gt;_ Establish secure sockets transmission</p>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Location & Info logs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TiltCard className="h-full">
              <div className="h-full p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:border-[#00FF41] hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] flex flex-col group font-mono text-left">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--border)]/30">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="text-[10px] text-[var(--muted-foreground)] ml-2 flex items-center gap-1">
                    <Terminal size={10} />
                    connection_established.log
                  </span>
                </div>

                <div className="space-y-6 flex-1">
                  <h3 className="text-xl font-bold text-[#00FF41] flex items-center gap-2 mb-4">
                    <Terminal size={18} />
                    <span>&gt; HOST_PARAMETERS</span>
                  </h3>

                  {/* Terminal Styled Output log */}
                  <div className="space-y-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    <div className="flex items-start gap-3">
                      <span className="text-[#00FF41] font-bold">&gt;_</span>
                      <p>
                        <span className="text-white font-bold">host_location:</span>{' '}
                        <span className="text-[#00FF41]">Vadodara, Gujarat, India</span>{' '}
                        <span className="text-[10px] opacity-70">[GMT+5:30]</span>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-[#00FF41] font-bold">&gt;_</span>
                      <p>
                        <span className="text-white font-bold">host_email:</span>{' '}
                        <a href="mailto:kakakunj57@gmial.com" className="text-slate-300 hover:text-[#00FF41] transition-colors underline">
                          kakakunj57@gmial.com
                        </a>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-[#00FF41] font-bold">&gt;_</span>
                      <p>
                        <span className="text-white font-bold">host_tel:</span>{' '}
                        <a href="tel:+917016455755" className="text-slate-300 hover:text-[#00FF41] transition-colors underline">
                          +91 7016455755
                        </a>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-[#00FF41] font-bold">&gt;_</span>
                      <p>
                        <span className="text-white font-bold">port_status:</span>{' '}
                        <span className="text-[#00FF41] animate-pulse">LISTENING [PORT_8080]</span>
                      </p>
                    </div>
                  </div>

                  {/* Ascii Art / Tech Specs */}
                  <div className="pt-6 border-t border-[var(--border)]/20 text-xs text-[#00FF41]/60 font-mono space-y-1 select-none">
                    <p>+----------------------------------------+</p>
                    <p>|  [AES-256] SECURE TRANSMISSION CHANNEL |</p>
                    <p>|  STATUS: AUTHENTICATED                 |</p>
                    <p>+----------------------------------------+</p>
                  </div>

                </div>

                {/* Bottom status bar */}
                <div className="pt-5 mt-5 border-t border-[var(--border)]/30 flex items-center justify-between text-[10px] text-[var(--muted-foreground)]">
                  <span className="flex items-center gap-1">
                    <MapPin size={10} className="text-[#00FF41]" />
                    VADODARA_IN
                  </span>
                  <span>SSL_ACTIVE</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Web3Forms Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <TiltCard className="h-full">
              <div className="h-full p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:border-[#00FF41] hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] flex flex-col group font-mono text-left crt-overlay">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--border)]/30">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="text-[10px] text-[var(--muted-foreground)] ml-2 flex items-center gap-1">
                    <Terminal size={10} />
                    send_transmission.sh
                  </span>
                </div>

                <form onSubmit={onSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-5">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#00FF41]">
                        visitor@portfolio:~$ enter_name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-[#00FF41]/30 focus:border-[#00FF41] focus:outline-none py-1.5 text-white font-mono text-sm transition-colors"
                        placeholder="&gt; enter name..."
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#00FF41]">
                        visitor@portfolio:~$ enter_email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-transparent border-b border-[#00FF41]/30 focus:border-[#00FF41] focus:outline-none py-1.5 text-white font-mono text-sm transition-colors"
                        placeholder="&gt; enter email..."
                      />
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#00FF41]">
                        visitor@portfolio:~$ enter_message
                      </label>
                      <textarea
                        name="message"
                        required
                        className="w-full bg-transparent border-b border-[#00FF41]/30 focus:border-[#00FF41] focus:outline-none py-1.5 text-white font-mono text-sm h-24 resize-none transition-colors"
                        placeholder="&gt; type payload..."
                      />
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full border-2 border-[#00FF41] bg-transparent text-[#00FF41] py-3 rounded-xl font-bold font-mono text-sm cursor-pointer hover:bg-[#00FF41] hover:text-[#000000] hover:shadow-[0_0_15px_#00FF41] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <Send size={14} />
                      {status === 'submitting' ? '[ SENDING_TRANSMISSION... ]' : '[ SEND_MESSAGE.sh ]'}
                    </button>

                    {/* Status Logs */}
                    {status === 'success' && (
                      <p className="text-[#00FF41] text-xs font-bold text-center mt-2 animate-pulse">
                        [ SYSTEM ]: transmission successful. payload received.
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="text-[#ff4444] text-xs font-bold text-center mt-2 flex items-center justify-center gap-1">
                        <ShieldAlert size={12} />
                        [ ERROR ]: transmission failed. check logs.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
