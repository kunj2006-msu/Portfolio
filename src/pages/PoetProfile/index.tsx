import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PoetHero from './PoetHero';
import Achievements from './Achievements';
import Contact from './Contact';
import ParticleBackground from '../../components/ParticleBackground';
import MyCompositions from './MyCompositions';
import FavoritePoets from './FavoritePoets';
import PoemListView from './PoemListView';
import FullPoemView from './FullPoemView';
import WorkDetail from './WorkDetail';

const navLinks = [
  { name: 'પરિચય', path: '#bio', isHash: true },
  { name: 'મારી રચનાઓ', path: '/poet/mari-rachnao', isHash: false },
  { name: 'મને ગમતી રચનાઓ', path: '/poet/gamti-rachnao', isHash: false },
  { name: 'સિદ્ધિઓ', path: '/poet/siddhio', isHash: false },
  { name: 'સંપર્ક', path: '#contact', isHash: true },
];

export default function PoetProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/poet' || location.pathname === '/poet/';

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

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="poet-theme min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-[var(--accent-foreground)] relative">
      <ParticleBackground />

      {/* Poet Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-[#0a0908]/95 backdrop-blur-lg border-b border-[var(--accent)]/20 py-3 shadow-2xl md:shadow-none md:border-b-0 md:bg-transparent md:py-6 ${
          scrolled || isOpen
            ? 'md:bg-[#0a0908]/90 md:backdrop-blur-lg md:border-b md:border-[var(--accent)]/20 md:py-3 md:shadow-2xl'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Left side: Back to selector + profile name */}
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="p-2 rounded-full border border-[var(--accent)]/30 text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
                aria-label="Back to landing"
              >
                <ArrowLeft size={20} />
              </Link>
              <span className="text-xl md:text-2xl font-bold font-serif tracking-tight text-[var(--foreground)]">
                કાવ્ય-કુંજ
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const toTarget = link.isHash
                  ? (isHomePage ? link.path : `/poet${link.path}`)
                  : link.path;
                return (
                  <Link
                    key={link.name}
                    to={toTarget}
                    className="text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--accent)] transition-all duration-300 relative group font-serif"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </div>

            {/* Right Side: Switch to Programmer */}
            <div className="hidden md:block">
              <Link
                to="/programmer"
                className="flex items-center gap-2 border border-[var(--accent)]/40 hover:border-[var(--accent)] text-[var(--foreground)]/90 hover:text-[var(--accent)] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all hover:bg-[var(--accent)]/5"
              >
                <Terminal size={14} />
                <span>Programmer</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Link
                to="/programmer"
                className="p-2 rounded-full border border-[var(--accent)]/30 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                aria-label="Switch to programmer"
              >
                <Terminal size={18} />
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
          className="fixed inset-x-0 bottom-0 top-[60px] bg-[#0a0908]/98 backdrop-blur-xl md:hidden z-40 overflow-y-auto animate-fade-in-menu"
        >
          <div className="flex flex-col items-center justify-start py-12 px-6 space-y-8 min-h-full">
            {navLinks.map((link) => {
              const toTarget = link.isHash
                ? (isHomePage ? link.path : `/poet${link.path}`)
                : link.path;
              return (
                <Link
                  key={link.name}
                  to={toTarget}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Switch to Programmer Button (Mobile Menu) */}
            <div className="pt-6 w-full max-w-[200px] flex justify-center">
              <Link
                to="/programmer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 border border-[var(--accent)]/40 hover:border-[var(--accent)] text-[var(--foreground)]/90 hover:text-[var(--accent)] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all hover:bg-[var(--accent)]/5 font-sans w-full text-center"
              >
                <Terminal size={14} />
                <span>Programmer</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="relative z-10 pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PoetHero />
                <Contact />
              </>
            }
          />
          <Route path="mari-rachnao" element={<MyCompositions />} />
          <Route path="siddhio" element={<Achievements />} />
          <Route path="mari-rachnao/:category" element={<PoemListView type="my" />} />
          <Route path="mari-rachnao/:category/:poemId" element={<FullPoemView type="my" />} />
          <Route path="gamti-rachnao" element={<FavoritePoets />} />
          <Route path="gamti-rachnao/:poetId" element={<PoemListView type="fav" />} />
          <Route path="gamti-rachnao/:poetId/:poemId" element={<FullPoemView type="fav" />} />
          <Route path="work/:id" element={<WorkDetail />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--accent)]/10 text-center text-sm font-serif text-[var(--muted-foreground)]">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} કવિ પોર્ટફોલિયો. તમામ હક અબાધિત.</p>
        </div>
      </footer>
    </div>
  );
}
