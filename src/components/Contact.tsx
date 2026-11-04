import { useRef, useState, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data';

const EMAILJS_SERVICE  = 'service_byx0dwl';
const EMAILJS_TEMPLATE = 'template_hw1x5b2';
const EMAILJS_KEY      = '38nH3VpFpMSI6s7QD';

type FormState = { from_name: string; from_email: string; subject: string; message: string };
type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact({ isDark }: { isDark: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState<FormState>({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) return;

    setStatus('sending');
    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        name:    form.from_name,
        email:   form.from_email,
        title:   form.subject || 'New message from portfolio',
        message: form.message,
      }, EMAILJS_KEY);

      setStatus('success');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const CONTACT_INFO = [
    { label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}`, icon: <FiMail size={16} /> },
    { label: 'Telegram', value: '@chu12e',              href: personalInfo.telegram,          icon: <FaTelegram size={16} /> },
    { label: 'GitHub',   value: 'netsabire699-oss',     href: personalInfo.github,            icon: <FiGithub size={16} /> },
    { label: 'LinkedIn', value: 'netsahunbirhanu',      href: personalInfo.linkedin,          icon: <FiLinkedin size={16} /> },
  ];

  return (
    <section id="contact" className={`section-padding ${isDark ? 'bg-navy-800/40' : 'bg-white'}`}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className={`font-mono text-sm mb-2 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>Get In Touch</p>
          <h2 className={`font-display text-4xl lg:text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Contact
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <p className={`leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Have a project in mind or just want to say hello? Feel free to reach out — I typically respond within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {CONTACT_INFO.map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className={`flex-shrink-0 ${isDark ? 'text-electric-400' : 'text-electric-600'}`}>
                    {item.icon}
                  </span>
                  <span className={`text-sm w-16 flex-shrink-0 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm hover:text-electric-400 transition-colors ${isDark ? 'text-slate-200' : 'text-slate-700'}`}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance &amp; full-time opportunities
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Name <span className="text-electric-400">*</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="input-field"
                />
              </div>
              <div>
                <label className={`block text-sm mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Email <span className="text-electric-400">*</span>
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="input-field"
              />
            </div>

            <div>
              <label className={`block text-sm mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Message <span className="text-electric-400">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="input-field resize-none"
              />
            </div>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-emerald-400 p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5"
              >
                Message sent successfully. I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-red-400 p-3 rounded-lg border border-red-500/20 bg-red-500/5"
              >
                Failed to send. Please email me directly at {personalInfo.email}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
