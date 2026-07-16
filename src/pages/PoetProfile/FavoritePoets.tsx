import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { favoritePoets } from '../../data/poetryData';

export default function FavoritePoets() {
  const [showAll, setShowAll] = useState(false);

  const displayedPoets = showAll ? favoritePoets : favoritePoets.slice(0, 3);

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
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 tracking-wider">મને ગમતી રચનાઓ</h2>
          <p className="text-[var(--accent)] italic font-serif">પ્રિય કવિઓ અને તેમનો સાહિત્ય વારસો</p>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4" />
        </div>

        {/* Poets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
          {displayedPoets.map((poet, index) => (
            <motion.div
              key={poet.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group w-full max-w-[280px]"
            >
              <Link
                to={`/poet/gamti-rachnao/${poet.id}`}
                className="block text-center p-6 rounded-3xl bg-[var(--card)] border border-[var(--accent)]/10 hover:border-[var(--accent)]/40 transition-all duration-500 gold-shadow"
              >
                {/* Square Image with Golden Frame */}
                <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-2xl border-2 border-[var(--accent)]/20 group-hover:border-[var(--accent)] transition-all duration-500">
                  <img
                    src={poet.imageUrl}
                    alt={poet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-xs font-serif text-[var(--accent)] tracking-wider">રચનાઓ જુઓ</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-serif text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {poet.name}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] font-serif mt-1">
                  {poet.poems.length} સંગ્રહિત કાવ્યો
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        {favoritePoets.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 border border-[var(--accent)]/40 hover:border-[var(--accent)] text-[var(--foreground)]/90 hover:text-[var(--accent)] px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all hover:bg-[var(--accent)]/5 font-serif cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>ઓછું જુઓ (See Less)</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span>વધુ જુઓ (See More)</span>
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
