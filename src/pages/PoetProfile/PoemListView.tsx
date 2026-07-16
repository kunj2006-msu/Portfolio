import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Quote } from 'lucide-react';
import { myCompositions, favoritePoets } from '../../data/poetryData';

interface PoemListViewProps {
  type: 'my' | 'fav';
}

export default function PoemListView({ type }: PoemListViewProps) {
  const { category, poetId } = useParams();

  let title = '';
  let subtitle = '';
  let backLink = '';
  let poems: any[] = [];
  let name = '';

  if (type === 'my') {
    const foundCategory = myCompositions.find((c) => c.id === category);
    if (!foundCategory) {
      return (
        <div className="py-24 text-center">
          <p className="text-xl text-red-500 font-serif">વિભાગ મળ્યો નથી (Category Not Found)</p>
          <Link to="/poet/mari-rachnao" className="text-[var(--accent)] hover:underline mt-4 inline-block font-serif">મારી રચનાઓ પર પાછા જાઓ</Link>
        </div>
      );
    }
    title = foundCategory.name;
    subtitle = foundCategory.description;
    backLink = '/poet/mari-rachnao';
    poems = foundCategory.poems;
    name = foundCategory.name;
  } else {
    const foundPoet = favoritePoets.find((p) => p.id === poetId);
    if (!foundPoet) {
      return (
        <div className="py-24 text-center">
          <p className="text-xl text-red-500 font-serif">કવિ મળ્યા નથી (Poet Not Found)</p>
          <Link to="/poet/gamti-rachnao" className="text-[var(--accent)] hover:underline mt-4 inline-block font-serif">મને ગમતી રચનાઓ પર પાછા જાઓ</Link>
        </div>
      );
    }
    title = `${foundPoet.name} ની રચનાઓ`;
    subtitle = `કવિશ્રી ${foundPoet.name} ના કાવ્ય સંગ્રહમાંથી પસંદગીની કૃતિઓ`;
    backLink = '/poet/gamti-rachnao';
    poems = foundPoet.poems;
    name = foundPoet.name;
  }

  return (
    <section className="py-24 bg-[var(--muted)]/20 relative min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to={backLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--foreground)] transition-colors font-serif"
          >
            <ArrowLeft size={16} />
            પાછા ફરો
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 tracking-wider">{title}</h2>
          <p className="text-[var(--accent)] italic font-serif">{subtitle}</p>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4" />
        </div>

        {/* Poems Grid */}
        {poems.length === 0 ? (
          <div className="text-center py-12 text-[var(--muted-foreground)] font-serif">
            હજુ સુધી કોઈ કાવ્યો ઉમેરાયા નથી.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {poems.map((poem, index) => (
              <motion.div
                key={poem.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 sm:p-8 rounded-3xl bg-[var(--card)] border border-[var(--accent)]/10 hover:border-[var(--accent)]/40 transition-all duration-500 group gold-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] border border-[var(--accent)]/20 px-3 py-1 rounded-full bg-[var(--accent)]/5">
                      {name}
                    </span>
                    <Quote size={20} className="text-[var(--accent)]/30 group-hover:text-[var(--accent)] transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold font-serif mb-4 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {poem.title}
                  </h3>

                  <p className="font-serif text-lg leading-relaxed text-[var(--foreground)]/80 italic mb-6 border-l-2 border-[var(--accent)]/30 pl-4 py-1">
                    "{poem.snippet}"
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[var(--accent)]/5 flex justify-end">
                  <Link
                    to={type === 'my' ? `/poet/mari-rachnao/${category}/${poem.id}` : `/poet/gamti-rachnao/${poetId}/${poem.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--accent)] hover:text-[var(--foreground)] transition-colors font-serif"
                  >
                    વિગતવાર વાંચો (Read More) →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
