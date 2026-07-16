import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowLeft, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import DevHero from './DevHero';
import Education from './Education';
import ProjectsSection from './ProjectsSection';
import ParticleBackground from '../../components/ParticleBackground';

const navLinks = [
  { name: 'Developer', href: '#developer' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
];

export default function ProgrammerProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="programmer-theme min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-[var(--accent-foreground)] relative">
      <ParticleBackground />

      {/* Programmer Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-[#0b0f19]/95 backdrop-blur-lg border-b border-[var(--accent)]/20 py-3 shadow-2xl md:shadow-none md:border-b-0 md:bg-transparent md:py-6 ${
          scrolled || isOpen
            ? 'md:bg-[#0b0f19]/90 md:backdrop-blur-lg md:border-b md:border-[var(--accent)]/20 md:py-3 md:shadow-2xl'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Left side: Back to selector + title */}
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="p-2 rounded-full border border-[var(--accent)]/30 text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
                aria-label="Back to landing"
              >
                <ArrowLeft size={20} />
              </Link>
              <span className="text-xl md:text-2xl font-bold font-sans tracking-tight text-[var(--foreground)]">
                &lt;Dev.Portfolio /&gt;
              </span>
            </div>

            {/* Middle: Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--accent)] transition-all duration-300 relative group font-sans"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right Side: Switch to Poet */}
            <div className="hidden md:block">
              <Link
                to="/poet"
                className="flex items-center gap-2 border border-[var(--accent)]/40 hover:border-[var(--accent)] text-[var(--foreground)]/90 hover:text-[var(--accent)] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all hover:bg-[var(--accent)]/5 font-serif"
              >
                <BookOpen size={14} />
                <span>The Poet</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Link
                to="/poet"
                className="p-2 rounded-full border border-[var(--accent)]/30 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                aria-label="Switch to poet"
              >
                <BookOpen size={18} />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-x-0 bottom-0 top-[60px] bg-[#0b0f19]/98 backdrop-blur-xl md:hidden z-40 overflow-y-auto animate-fade-in-menu"
        >
          <div className="flex flex-col items-center justify-start py-12 px-6 space-y-8 min-h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-sans text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Switch to Poet Button (Mobile Menu) */}
            <div className="pt-6 w-full max-w-[200px] flex justify-center">
              <Link
                to="/poet"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 border border-[var(--accent)]/40 hover:border-[var(--accent)] text-[var(--foreground)]/90 hover:text-[var(--accent)] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all hover:bg-[var(--accent)]/5 font-serif w-full text-center"
              >
                <BookOpen size={14} />
                <span>The Poet</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Sections */}
      <main className="relative z-10 pt-20">
        <DevHero />
        <Education />
        <ProjectsSection />
      </main>

      {/* Currently Exploring Section */}
      <section className="py-12 border-t border-[var(--accent)]/10 bg-[var(--muted)]/5">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-3">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-bold font-sans">
            Currently Exploring
          </h4>
          <p className="text-sm md:text-base text-[var(--muted-foreground)]/90 max-w-2xl mx-auto font-mono leading-relaxed">
            Advanced Data Structures & Algorithms, building scalable full-stack utilities, and contributing to Open Source.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--accent)]/10 text-center text-sm font-sans text-[var(--muted-foreground)]">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Programmer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
