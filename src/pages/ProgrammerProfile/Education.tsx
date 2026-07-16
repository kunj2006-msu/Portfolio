import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Percent, BookOpen } from 'lucide-react';

const stats = [
  {
    value: "98.06%",
    label: "Boards Percentile",
    description: "HSC Board Examination, showcasing consistent academic excellence.",
    icon: Percent
  },
  {
    value: "98.86%",
    label: "GUJCET Percentile",
    description: "State-level competitive entrance test for engineering admissions.",
    icon: Award
  },
  {
    value: "100/100",
    label: "Mathematics Score",
    description: "Perfect score in high school mathematics evaluation.",
    icon: BookOpen
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[var(--muted)]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4 uppercase tracking-wider">Education & Academics</h2>
          <p className="text-[var(--accent)] font-semibold font-sans">Academic Qualifications & Merits</p>
          <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Main College Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="lg:col-span-1 p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF41] flex flex-col justify-between gold-shadow group"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]/20 shadow-md group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-foreground)] transition-all duration-500">
                <GraduationCap size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-bold">Currently Enrolled</span>
                <h3 className="text-2xl font-bold text-white">B.E. Computer Science & Engineering</h3>
                <p className="text-sm text-[var(--accent)] font-medium">Maharaja Sayajirao University of Baroda (MSU Baroda)</p>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-light">
                Pursuing standard rigorous study in algorithms, data structures, software engineering, databases, and computer systems. Currently in 3rd year.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border)]/30 mt-6 text-xs text-[var(--muted-foreground)] flex justify-between">
              <span>Duration: 2024 - 2028</span>
              <span className="text-[var(--accent)] font-semibold">GPA: 8.86</span>
            </div>
          </motion.div>

          {/* Academic Highlights Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF41] flex flex-col justify-between items-start text-left group gold-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/5 text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]/10 shadow-sm group-hover:bg-[var(--accent)]/20 transition-all duration-300 mb-6">
                  <stat.icon size={20} />
                </div>

                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-extrabold text-[var(--accent)] tracking-tight font-sans">
                    {stat.value}
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
