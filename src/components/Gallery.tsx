import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data';

const GALLERY_CATEGORIES = ['All', 'UI/UX', 'Mobile', 'Graphic Design', 'Frontend'];

export default function Gallery({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeFilter);

  const selectedItem = galleryItems.find(g => g.id === selected);

  return (
    <section id="gallery" className={`section-padding ${isDark ? 'bg-navy-800/40' : 'bg-white'}`}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className={`font-mono text-sm mb-2 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>Creative Work</p>
          <h2 className={`font-display text-4xl lg:text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Gallery
          </h2>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-electric-500 text-white'
                  : isDark
                  ? 'text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
                  : 'text-slate-500 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(item.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  i % 5 === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'
                }`}
              >
                <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <p className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className={`text-center text-xs font-mono mt-6 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
          Replace gradient placeholders with real screenshots in <code>/public/gallery/</code>
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
            >
              <div className={`w-full aspect-video bg-gradient-to-br ${selectedItem.gradient}`} />
              <div className={`p-4 ${isDark ? 'bg-navy-800' : 'bg-white'}`}>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedItem.title}</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{selectedItem.category}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white text-sm hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
