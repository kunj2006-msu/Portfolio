import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { myCompositions } from '../../data/poetryData';

export default function MyCompositions() {
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
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 tracking-wider">મારી રચનાઓ</h2>
          <p className="text-[var(--accent)] italic font-serif">મારા હૃદયના ભાવો અને મૌનની અભિવ્યક્તિ</p>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4" />
        </div>

        {/* 2 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {myCompositions.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group relative"
            >
              <Link
                to={`/poet/mari-rachnao/${category.id}`}
                className="block p-6 sm:p-10 rounded-3xl bg-[var(--card)] border border-[var(--accent)]/10 hover:border-[var(--accent)]/40 transition-all duration-500 gold-shadow"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-[var(--accent)]/5 border border-[var(--accent)]/10 group-hover:bg-[var(--accent)]/10 group-hover:border-[var(--accent)]/30 transition-all duration-300">
                    <BookOpen size={32} className="text-[var(--accent)]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] border border-[var(--accent)]/20 px-3 py-1 rounded-full bg-[var(--accent)]/5">
                    {category.poems.length} રચનાઓ
                  </span>
                </div>

                <h3 className="text-3xl font-bold font-serif mb-4 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-[var(--muted-foreground)] font-serif text-lg leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] group-hover:translate-x-2 transition-transform duration-300 font-serif">
                  સંગ્રહ જુઓ →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
