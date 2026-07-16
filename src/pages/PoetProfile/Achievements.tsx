import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award } from 'lucide-react';

const achievements = [
  {
    rank: "3rd Rank",
    title: "Gujarat-Mumbai Ghazal Writing Competition",
    description: "Secured 3rd place in the prestigious joint state competition, recognized for excellence in original Ghazal composition among hundreds of participating poets.",
    icon: Trophy,
    year: "2025"
  },
  {
    rank: "6th Rank",
    title: "Mariz Poetry Interpretation Competition",
    description: "Honored with the 6th rank in the Mariz poetry explanation and recitation tournament, showcasing deep understanding of the legendary poet Mariz's ghazals.",
    icon: Award,
    year: "2025"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 tracking-wider">સિદ્ધિઓ અને પુરસ્કાર</h2>
          <p className="text-[var(--accent)] italic font-serif">Achievements & Recognitions</p>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 p-8 rounded-3xl bg-[var(--card)] border border-[var(--accent)]/10 hover:border-[var(--accent)]/40 transition-all duration-500 gold-shadow group"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]/20 shadow-md group-hover:scale-115 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-foreground)] transition-all duration-500">
                  <item.icon size={36} />
                </div>
              </div>

              {/* Text Area */}
              <div className="flex-grow flex flex-col justify-center space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {item.year} • {item.rank}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-serif text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed font-light text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
