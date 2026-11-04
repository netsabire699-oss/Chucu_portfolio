import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '../data';

export default function Services({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className={`section-padding ${isDark ? 'bg-navy-800/40' : 'bg-white'}`}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className={`font-mono text-sm mb-2 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>What I Offer</p>
          <h2 className={`font-display text-4xl lg:text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className={`group p-6 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? 'border-white/8 bg-white/3 hover:border-electric-500/30 hover:bg-white/5'
                  : 'border-slate-200 bg-slate-50 hover:border-electric-400/40 hover:bg-white'
              }`}
            >
              <h3 className={`font-display text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="w-1 h-1 rounded-full bg-electric-400 flex-shrink-0" />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
