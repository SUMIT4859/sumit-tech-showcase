'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { TEMPLATES, TEMPLATE_CATEGORIES } from '@/lib/data/templates';

const ACCENTS = ['emerald', 'purple', 'amber', 'cyan', 'pink', 'blue'];
const accentFor = (i) => ACCENTS[i % ACCENTS.length];

export default function TemplatesPage() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const filtered = useMemo(() => TEMPLATES.filter(t =>
    (cat === 'All' || t.category === cat) &&
    (q === '' || (t.name + t.desc + t.subject).toLowerCase().includes(q.toLowerCase()))
  ), [q, cat]);

  return (
    <div className="pt-32 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-60" />
        <div className="absolute inset-0 grid-pattern radial-fade opacity-30" />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-cyan text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="h-3 w-3" /> Email Templates
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight gradient-text">Production-ready emails.</h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl">9 battle-tested HTML email templates. Copy, customize, ship. All variables documented and works in every client.</p>
          </motion.div>

          <div className="mt-10 max-w-3xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search templates..." className="w-full pl-11 pr-4 py-3 rounded-full glass text-sm outline-none focus:border-primary transition" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {TEMPLATE_CATEGORIES.map((c, i) => {
                const acc = accentFor(i);
                const active = cat === c;
                return (
                  <button key={c} onClick={() => setCat(c)} className={`px-4 py-1.5 rounded-full text-xs font-medium border transition ${active ? `badge-${acc} font-semibold` : 'border-border hover:border-foreground/50 text-muted-foreground'}`}>{c}</button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((t, i) => {
            const acc = accentFor(i);
            return (
              <motion.div key={t.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }}>
                <Link href={`/templates/${t.slug}`} className="group block rounded-2xl glass-card p-6 h-full hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded-full badge-${acc}`}>{t.category}</span>
                    <div className={`h-8 w-8 rounded-lg icon-${acc} flex items-center justify-center shadow-md`}><FileText className="h-4 w-4" /></div>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{t.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{t.desc}</p>
                  <p className="text-xs font-mono text-muted-foreground border-t border-border pt-3 truncate">Subject: {t.subject}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium">Open template <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
