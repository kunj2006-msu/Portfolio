import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Quote } from 'lucide-react';
import { myCompositions, favoritePoets } from '../../data/poetryData';

interface FullPoemViewProps {
  type: 'my' | 'fav';
}

export default function FullPoemView({ type }: FullPoemViewProps) {
  const { category, poetId, poemId } = useParams();

  let poem: any = null;
  let authorName = '';
  let backLink = '';

  if (type === 'my') {
    const foundCategory = myCompositions.find((c) => c.id === category);
    poem = foundCategory?.poems.find((p) => p.id === poemId);
    authorName = 'કાકા કુંજ સંજયકુમાર';
    backLink = `/poet/mari-rachnao/${category}`;
  } else {
    const foundPoet = favoritePoets.find((p) => p.id === poetId);
    poem = foundPoet?.poems.find((p) => p.id === poemId);
    authorName = foundPoet ? foundPoet.name : '';
    backLink = `/poet/gamti-rachnao/${poetId}`;
  }

  if (!poem) {
    return (
      <div className="py-24 text-center">
        <p className="text-xl text-red-500 font-serif">કાવ્ય મળ્યું નથી (Poem Not Found)</p>
        <Link to={backLink} className="text-[var(--accent)] hover:underline mt-4 inline-block font-serif font-medium">પાછા ફરો</Link>
      </div>
    );
  }

  return (
    <section className="py-24 bg-[var(--muted)]/20 relative min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to={backLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--foreground)] transition-colors font-serif"
          >
            <ArrowLeft size={16} />
            યાદી પર પાછા ફરો
          </Link>
        </div>

        {/* Poem Reader Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative p-5 sm:p-8 md:p-16 rounded-3xl bg-[var(--card)] border border-[var(--accent)]/15 gold-shadow text-center flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Decorative Background Icons */}
          <div className="absolute top-6 left-6 opacity-[0.03]">
            <Quote size={80} className="text-[var(--accent)]" />
          </div>
          <div className="absolute bottom-6 right-6 opacity-[0.03] rotate-180">
            <Quote size={80} className="text-[var(--accent)]" />
          </div>

          <div>
            {/* Header */}
            <div className="mb-10">
              <span className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest border border-[var(--accent)]/20 px-3 py-1 rounded-full bg-[var(--accent)]/5">
                {type === 'my' ? 'મારી રચના' : 'ગમતી રચના'}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-serif text-[var(--foreground)] mt-6 mb-4 tracking-wide">
                {poem.title}
              </h1>
              <div className="w-16 h-0.5 bg-[var(--accent)]/40 mx-auto rounded-full" />
            </div>

            <p className="whitespace-pre-line break-words font-serif text-xl md:text-2xl leading-loose text-[var(--foreground)]/90 italic text-calligraphic max-w-xl mx-auto py-8 transition-colors hover:text-[var(--accent)] duration-300">
              {poem.fullText}
            </p>
          </div>

          {/* Footer Signature */}
          <div className="mt-12 pt-6 border-t border-[var(--accent)]/10 flex justify-between items-center text-sm text-[var(--muted-foreground)]">
            <span className="font-serif">કાવ્ય પઠન 📖</span>
            <span className="text-[var(--accent)] font-bold font-serif tracking-wider">
              ✍️ {authorName}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
