import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, timeline } from '../data';

const typeBorder = {
  education: 'border-electric-400',
  project: 'border-accent-400',
  achievement: 'border-emerald-400',
};

const typeDot = {
  education: 'bg-electric-400',
  project: 'bg-accent-400',
  achievement: 'bg-emerald-400',
};

export default function About({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className={`section-padding ${isDark ? 'bg-navy-800/40' : 'bg-white'}`}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className={`font-mono text-sm mb-2 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>About Me</p>
          <h2 className={`font-display text-4xl lg:text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className={`leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{personalInfo.bio}</p>
            <p className={`leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{personalInfo.bio2}</p>

            <div className="space-y-4">
              {[
                { label: 'Education', value: `${personalInfo.year} — ${personalInfo.university}` },
                { label: 'Location', value: personalInfo.location },
                { label: 'Email', value: personalInfo.email },
                { label: 'Languages', value: 'Amharic (native), English (fluent)' },
              ].map(fact => (
                <div key={fact.label} className="flex gap-4">
                  <span className={`text-sm font-medium w-24 flex-shrink-0 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {fact.label}
                  </span>
                  <span className={`text-sm ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className={`font-display text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Journey
            </h3>
            <div className="relative">
              <div className={`absolute left-3 top-0 bottom-0 w-px ${isDark ? 'bg-white/8' : 'bg-slate-200'}`} />
              <div className="space-y-5">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="relative pl-10"
                  >
                    <div className={`absolute left-1.5 top-2 w-3 h-3 rounded-full border-2 border-navy-900 ${typeDot[item.type]}`} />
                    <div className={`p-4 rounded-xl border ${
                      isDark
                        ? `border-white/8 bg-white/3 border-l-2 ${typeBorder[item.type]}`
                        : `border-slate-200 bg-white border-l-2 ${typeBorder[item.type]}`
                    }`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-mono text-xs font-bold ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>
                          {item.year}
                        </span>
                        <span className={`text-xs capitalize ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          {item.type}
                        </span>
                      </div>
                      <p className={`font-semibold text-sm mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</p>
                      <p className={`text-xs mb-1 ${isDark ? 'text-electric-400/80' : 'text-electric-600'}`}>{item.subtitle}</p>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
