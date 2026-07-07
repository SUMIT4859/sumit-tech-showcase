'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, ArrowUpRight, Sparkles } from 'lucide-react';
import { TOOLS, TOOL_CATEGORIES } from '@/lib/data/site';

export default function ToolsIndexPage() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => {
    return TOOLS.filter(t =>
      (cat === 'All' || t.category === cat) &&
      (q === '' || (t.name + ' ' + t.tagline + ' ' + t.category).toLowerCase().includes(q.toLowerCase()))
    );
  }, [q, cat]);

  return (
    <div className="pt-32 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern radial-fade opacity-40" />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="h-3 w-3" /> Curated by Sumit
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight gradient-text">Tools I Recommend</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">A handpicked stack of platforms, tools and services I personally use to build, ship and scale. Honest, balanced, and updated regularly.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-10 flex flex-col md:flex-row gap-3 max-w-3xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search tools…" className="w-full pl-11 pr-4 py-3 rounded-full glass text-sm outline-none focus:border-foreground transition" />
            </div>
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-2">
            {TOOL_CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-1.5 rounded-full text-xs font-medium border transition ${cat === c ? 'bg-foreground text-background border-foreground' : 'border-border hover:border-foreground/50'}`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="container mt-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">No tools match your search.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((t, i) => (
              <motion.div key={t.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Link href={`/tools/${t.slug}`} className="group block rounded-3xl glass-card p-6 h-full hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                  {t.featured && <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-foreground text-background">Featured</span>}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl border border-border flex items-center justify-center font-display font-bold" style={t.brand ? { background: t.brand, color: '#fff', borderColor: 'transparent' } : { background: 'hsl(var(--foreground) / 0.05)' }}>{t.logo}</div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{t.name}</h3>
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.category}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{t.tagline}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-3.5 w-3.5 ${i < Math.round(t.rating) ? 'fill-foreground text-foreground' : 'text-muted-foreground/40'}`} />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">{t.rating}</span>
                    </div>
                    <span className="text-xs font-medium opacity-70 group-hover:opacity-100 inline-flex items-center gap-1">Read review <ArrowUpRight className="h-3 w-3" /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
