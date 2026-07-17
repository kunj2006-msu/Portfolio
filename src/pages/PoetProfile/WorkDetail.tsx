import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { publishedWorks } from '../../data/poetryData';

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const work = publishedWorks.find((w) => w.id === id);

  // Scroll to top when work page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!work) {
    return (
      <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-6 font-serif">
        <h2 className="text-2xl font-bold text-red-500 mb-4">કૃતિ મળી નથી.</h2>
        <Link
          to="/poet/siddhio"
          className="flex items-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-full hover:bg-[#D4AF37]/10 transition-all font-semibold"
        >
          <ArrowLeft size={16} />
          પાછા જાઓ
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white py-16 px-4 md:px-8 relative overflow-hidden font-serif selection:bg-[var(--accent)] selection:text-[var(--accent-foreground)]">
      <div className="max-w-5xl mx-auto">
        {/* Top Back Navigation Button */}
        <div className="mb-12">
          <Link
            to="/poet/siddhio"
            className="inline-flex items-center gap-2 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] px-5 py-2.5 rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300 font-semibold text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            પાછા જાઓ
          </Link>
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.2em] font-bold text-xs sm:text-sm block">
            {work.tag}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-3 mb-6 tracking-wide">
            {work.title}
          </h1>
          <div className="w-32 h-[1px] bg-[#D4AF37]/30 mx-auto" />
        </motion.div>

        {/* Stacked Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10 mb-16"
        >
          {work.images.map((imgUrl, index) => (
            <div
              key={index}
              className="w-full max-w-4xl mx-auto border border-[#D4AF37]/20 rounded-3xl overflow-hidden bg-black/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <img
                src={imgUrl}
                alt={`${work.title} - Page ${index + 1}`}
                className="w-full h-auto object-contain block mx-auto"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* Content Section (Poem Text) */}
        {work.fullText && !work.fullText.startsWith("http") && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-stone-200 leading-[2.2] font-serif text-base sm:text-xl whitespace-pre-line text-center py-10 sm:py-16 bg-[#0f0d0a] border border-[#D4AF37]/20 rounded-3xl px-6 sm:px-12 shadow-[0_15px_40px_rgba(0,0,0,0.8)] italic">
              {work.fullText}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
