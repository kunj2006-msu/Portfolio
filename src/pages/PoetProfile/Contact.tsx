import React, { useState } from 'react';
import { Mail, Phone, Send, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "34e9b12e-6223-440e-81c7-8091b33e3742");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        event.currentTarget.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Error", data);
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] border-t border-[var(--accent)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-[var(--foreground)]">સંપર્ક કરો</h2>
              <p className="text-lg text-[var(--muted-foreground)] font-light italic leading-relaxed font-serif">
                મુશાયરા, કાર્યક્રમ આમંત્રિતો અથવા સાહિત્યિક ચર્ચા માટે નિઃસંકોચ સંપર્ક કરો.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, text: "+91 7016455755", label: "ફોન" },
                { icon: Mail, text: "kakakunj57@gmial.com", label: "ઈમેઈલ" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="p-3.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-foreground)] transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-0.5 opacity-70">
                      {item.label}
                    </span>
                    <span className="text-base md:text-lg text-[var(--foreground)]/80 hover:text-[var(--accent)] transition-colors font-serif">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social channels */}
            <div className="pt-6 border-t border-[var(--accent)]/10">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-4 opacity-70">
                સોશિયલ મીડિયા
              </span>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/1EFYkrKA9T/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/bhudev_kaka_kunj?igsh=MTQ3Z2Y5cTAwNXZ4cw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl hover:bg-[#FF0000] hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-3xl bg-white/5 border border-[var(--accent)]/10 gold-shadow">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[var(--foreground)]/60 font-serif ml-1">નામ</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-[var(--accent)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-white text-sm"
                    placeholder="તમારું નામ"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[var(--foreground)]/60 font-serif ml-1">ઈમેઈલ / ફોન</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    className="w-full bg-white/5 border border-[var(--accent)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-white text-sm"
                    placeholder="ઈમેઈલ અથવા નંબર"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-[var(--foreground)]/60 font-serif ml-1">વિષય</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-white/5 border border-[var(--accent)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-white text-sm"
                  placeholder="મેસેજનો વિષય"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-[var(--foreground)]/60 font-serif ml-1">સંદેશ</label>
                <textarea
                  name="message"
                  required
                  className="w-full bg-white/5 border border-[var(--accent)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-white h-28 resize-none text-sm"
                  placeholder="તમારો સંદેશ..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[var(--accent)] text-[var(--accent-foreground)] py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform gold-shadow disabled:opacity-70 disabled:hover:scale-100 font-serif text-sm cursor-pointer"
                >
                  <Send size={16} />
                  {status === 'submitting' ? 'મોકલાઈ રહ્યું છે...' : 'સંદેશ મોકલો'}
                </button>

                {status === 'success' && (
                  <p className="text-[#4ade80] text-xs text-center mt-3 font-serif">તમારો સંદેશ સફળતાપૂર્વક મોકલવામાં આવ્યો છે. આભાર!</p>
                )}
                {status === 'error' && (
                  <p className="text-[#f87171] text-xs text-center mt-3 font-serif font-semibold">ભૂલ થઈ છે, કૃપા કરીને ફરી પ્રયાસ કરો.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
