import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../data';

const CATEGORIES = ['All', 'Full-Stack', 'Mobile', 'Frontend'];

function ProjectCard({ project, isDark }: { project: Project; isDark: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer ${
        isDark
          ? 'border-white/8 bg-white/3 hover:border-electric-500/30'
          : 'border-slate-200 bg-white hover:border-electric-400/40 hover:shadow-sm'
      }`}
      onClick={() => setExpanded(e => !e)}
    >
      {/* Color bar top */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`font-display text-base font-bold group-hover:text-electric-400 transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {project.title}
          </h3>
          {project.featured && (
            <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ml-2 ${
              isDark ? 'border-electric-500/30 text-electric-400' : 'border-electric-400/40 text-electric-600'
            }`}>
              Featured
            </span>
          )}
        </div>

        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`text-sm leading-relaxed mb-4 pt-3 border-t ${
                isDark ? 'text-slate-300 border-white/8' : 'text-slate-600 border-slate-100'
              }`}
            >
              {project.longDescription}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
          {project.tags.map(tag => (
            <span key={tag} className={`text-xs px-2 py-0.5 rounded-full border ${
              isDark
                ? 'border-white/10 text-slate-400'
                : 'border-slate-200 text-slate-500'
            }`}>
              {tag}
            </span>
          ))}
        </div>

        <div className={`flex items-center justify-between pt-3 border-t text-xs ${
          isDark ? 'border-white/8 text-slate-500' : 'border-slate-100 text-slate-400'
        }`}>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="hover:text-electric-400 transition-colors"
            >
              View on GitHub →
            </a>
          ) : (
            <span>Private repository</span>
          )}
          <span>{expanded ? 'Collapse' : 'Read more'}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className={`section-padding ${isDark ? 'bg-navy-900' : 'bg-slate-50'}`}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className={`font-mono text-sm mb-2 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>Portfolio</p>
          <h2 className={`font-display text-4xl lg:text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Projects
          </h2>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-electric-500 text-white'
                  : isDark
                  ? 'text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
                  : 'text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} isDark={isDark} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/netsabire699-oss/Netsahun-Birhanu-Gebeyehu-"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
