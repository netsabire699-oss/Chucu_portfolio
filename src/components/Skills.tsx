import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data';

function SkillBar({ name, level, gradient, inView, delay }: {
  name: string;
  level: number;
  gradient: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300">{name}</span>
        <span className="text-xs font-mono text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className={`section-padding ${isDark ? 'bg-navy-900' : 'bg-slate-50'}`}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className={`font-mono text-sm mb-2 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>Technical Skills</p>
          <h2 className={`font-display text-4xl lg:text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            My Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.08 }}
              className={`p-6 rounded-2xl border ${
                isDark ? 'border-white/8 bg-white/3' : 'border-slate-200 bg-white'
              }`}
            >
              <h3 className={`font-semibold mb-5 text-sm uppercase tracking-wide ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {cat.category}
              </h3>
              {cat.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  gradient={cat.color}
                  inView={inView}
                  delay={catIdx * 0.08 + skillIdx * 0.07}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tools row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <p className={`text-xs font-mono uppercase tracking-wider mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {['Git', 'GitHub', 'Figma', 'Photoshop', 'Illustrator', 'Linux', 'VS Code', 'Postman'].map(tech => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                  isDark
                    ? 'border-white/10 text-slate-400 hover:border-electric-500/40 hover:text-electric-400'
                    : 'border-slate-200 text-slate-500 hover:border-electric-400/50 hover:text-electric-600'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
