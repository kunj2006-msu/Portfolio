import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { publishedWorks } from '../../data/poetryData';

export default function Achievements() {
  return (
    <section className="py-24 bg-[var(--muted)]/20 relative min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/poet"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--foreground)] transition-colors font-serif"
          >
            <ArrowLeft size={16} />
            મુખ્ય પૃષ્ઠ પર પાછા ફરો
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 tracking-wider text-white">
            પ્રકાશિત કવિતાઓ અને સિદ્ધિઓ
          </h2>
          <p className="text-[#D4AF37] italic font-serif text-sm md:text-base">Published Works & Achievements</p>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {publishedWorks.map((item, index) => (
            <Link
              key={item.id}
              to={`/poet/work/${item.id}`}
              className="block no-underline"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group rounded-3xl bg-[var(--card)] border border-[var(--accent)]/10 hover:border-[var(--accent)]/40 p-8 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-500 gold-shadow flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold font-serif uppercase tracking-widest text-[#D4AF37] block">
                    {item.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-sm md:text-base leading-relaxed font-serif line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
                
                <div className="pt-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider group-hover:underline flex items-center gap-1">
                  <span>વધુ વાંચો / વિગતો જુઓ</span>
                  <span>➔</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
