import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(l => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-900/90 backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        } ${!isDark && scrolled ? '!bg-white/90 border-slate-200/50' : ''}`}
      >
        <nav className="section-container flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric-500 to-accent-500 flex items-center justify-center text-white font-black text-lg shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
              N
            </div>
            <span className={`font-display font-bold text-lg hidden sm:block transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Netsahun<span className="gradient-text">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`nav-link px-3 py-2 rounded-lg hover:bg-white/5 transition-all ${
                    activeSection === link.id ? 'active text-electric-400' : ''
                  } ${!isDark ? '!text-slate-600 hover:!text-slate-900' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${
                !isDark ? 'hover:bg-slate-100 text-slate-600' : 'text-slate-400'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.36-.71.71M6.34 17.66l-.71.71m12.02 0-.71-.71M6.34 6.34l-.71-.71M12 7a5 5 0 100 10A5 5 0 0012 7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className={`lg:hidden w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 transition-all ${
                !isDark ? 'hover:bg-slate-100' : ''
              }`}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-slate-700'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-slate-700'} ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-slate-700'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-16 left-0 right-0 z-40 lg:hidden border-b shadow-xl ${
              isDark
                ? 'bg-navy-800/95 backdrop-blur-xl border-white/10'
                : 'bg-white/95 backdrop-blur-xl border-slate-200'
            }`}
          >
            <ul className="section-container py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeSection === link.id
                        ? 'bg-electric-500/10 text-electric-400'
                        : isDark
                        ? 'text-slate-300 hover:bg-white/5 hover:text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
