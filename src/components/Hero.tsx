import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import { personalInfo } from '../data';

const TAGLINES = personalInfo.taglines;

export default function Hero({ isDark }: { isDark: boolean }) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const target = TAGLINES[taglineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= target.length) {
      setDisplayed(target.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!isDeleting && charIndex > target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayed(target.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else {
      setIsDeleting(false);
      setTaglineIndex(i => (i + 1) % TAGLINES.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, taglineIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDark ? 'bg-navy-900' : 'bg-slate-50'
      }`}
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-electric-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`font-mono text-sm mb-4 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`font-display text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Netsahun
              <br />
              <span className="gradient-text">Birhanu</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-6 h-8"
            >
              <span className={`text-xl font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {displayed}
              </span>
              <span className="inline-block w-0.5 h-6 bg-electric-400 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-lg leading-relaxed mb-8 max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                View Projects
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-outline">
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <FiGithub className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <FiLinkedin className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <FaTelegram className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-electric-500 to-accent-500 opacity-30 blur-lg" />

              {/* Photo */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-electric-500/30">
                <img
                  src="/images/profile.jpg"
                  alt="Netsahun Birhanu"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Status badge */}
              <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border ${
                isDark
                  ? 'bg-navy-800 border-white/10 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
