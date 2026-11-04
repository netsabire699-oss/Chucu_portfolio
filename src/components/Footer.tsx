import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import { personalInfo } from '../data';

const NAV_LINKS = ['home', 'about', 'skills', 'services', 'projects', 'resume', 'contact'];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
};

export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer className={`border-t ${isDark ? 'bg-navy-900 border-white/8' : 'bg-white border-slate-200'}`}>
      <div className="section-container py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-500 to-accent-500 flex items-center justify-center text-white font-black">
                N
              </div>
              <span className={`font-display font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Netsahun<span className="gradient-text">.</span>
              </span>
            </button>
            <p className={`text-sm leading-relaxed max-w-xs mb-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Full-Stack Developer based in Wolaita Sodo, Ethiopia. Building clean, fast, and reliable digital products.
            </p>
            <div className="flex gap-2">
              {[
                { href: personalInfo.github, label: 'GitHub', icon: <FiGithub size={16} /> },
                { href: personalInfo.linkedin, label: 'LinkedIn', icon: <FiLinkedin size={16} /> },
                { href: personalInfo.telegram, label: 'Telegram', icon: <FaTelegram size={16} /> },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5 ${
                    isDark
                      ? 'border border-white/10 text-slate-400 hover:border-electric-500/30 hover:text-electric-400'
                      : 'border border-slate-200 text-slate-500 hover:border-electric-400/50 hover:text-electric-600'
                  }`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map(id => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`text-sm capitalize transition-colors hover:text-electric-400 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              More
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(4).map(id => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`text-sm capitalize transition-colors hover:text-electric-400 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
          isDark ? 'border-white/8' : 'border-slate-100'
        }`}>
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} Netsahun Birhanu. All rights reserved.
          </p>
          <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            Built with React, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ y: -2 }}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-accent-500 text-white flex items-center justify-center shadow-glow z-30"
        aria-label="Back to top"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </footer>
  );
}
