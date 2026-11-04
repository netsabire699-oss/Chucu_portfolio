import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, skillCategories } from '../data';

export default function Resume({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className={`section-padding ${isDark ? 'bg-navy-900' : 'bg-slate-50'}`}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className={`font-mono text-sm mb-2 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>Resume</p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <h2 className={`font-display text-4xl lg:text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Curriculum Vitae
            </h2>
            <a
              href={personalInfo.cvUrl}
              download
              className="btn-primary sm:mb-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className={`max-w-4xl rounded-2xl border overflow-hidden ${
            isDark ? 'border-white/8 bg-navy-800' : 'border-slate-200 bg-white'
          }`}
        >
          {/* Header */}
          <div className="p-8 bg-gradient-to-r from-electric-600 to-accent-600">
            <h3 className="font-display text-2xl font-black text-white">{personalInfo.name}</h3>
            <p className="text-electric-100 font-medium mb-3">{personalInfo.title}</p>
            <div className={`flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/80`}>
              <span>{personalInfo.email}</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-8">
            {/* Left */}
            <div className="space-y-8">
              <section>
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>
                  Education
                </h4>
                <div className={`p-4 rounded-xl border ${isDark ? 'border-white/8 bg-white/3' : 'border-slate-100 bg-slate-50'}`}>
                  <p className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    B.Sc. Computer Science
                  </p>
                  <p className={`text-sm ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>
                    {personalInfo.university}
                  </p>
                  <p className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    2021 — Present · 4th Year
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {['Algorithms', 'Data Structures', 'Software Engineering', 'Databases', 'Networks'].map(c => (
                      <span key={c} className={`text-xs px-2 py-0.5 rounded border ${
                        isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
                      }`}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>
                  Core Competencies
                </h4>
                <ul className="space-y-2">
                  {[
                    'Full-Stack Web Development',
                    'Mobile App Development (Android/iOS)',
                    'UI/UX Design & Prototyping',
                    'Database Design & Administration',
                    'System Analysis & Design',
                    'Graphic Design',
                    'Technical Documentation',
                  ].map(skill => (
                    <li key={skill} className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <span className="w-1 h-1 rounded-full bg-electric-400 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right */}
            <div className="space-y-8">
              <section>
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>
                  Technical Skills
                </h4>
                <div className="space-y-4">
                  {skillCategories.map(cat => (
                    <div key={cat.category}>
                      <p className={`text-xs font-medium mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {cat.category}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {cat.skills.slice(0, 3).map(s => (
                          <span key={s.name} className={`text-xs px-2 py-0.5 rounded border ${
                            isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
                          }`}>
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>
                  Languages
                </h4>
                <div className="space-y-3">
                  {[
                    { lang: 'Amharic', level: 'Native', percent: 100 },
                    { lang: 'English', level: 'Fluent', percent: 88 },
                  ].map(l => (
                    <div key={l.lang}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{l.lang}</span>
                        <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{l.level}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-electric-500 to-accent-500"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${l.percent}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>
                  Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Open Source', 'AI/ML', 'System Design', 'Startups', 'Tech Writing'].map(i => (
                    <span key={i} className={`text-xs px-2 py-1 rounded border ${
                      isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
                    }`}>
                      {i}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
