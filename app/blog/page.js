'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowUpRight, Sparkles, Calendar, Tag } from 'lucide-react';
import { POSTS, BLOG_CATEGORIES } from '@/lib/data/blog';

const ACCENTS = ['emerald', 'purple', 'amber', 'cyan', 'pink', 'blue'];
const accentFor = (i) => ACCENTS[i % ACCENTS.length];

export default function BlogIndex() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => POSTS.filter(p =>
    (cat === 'All' || p.category === cat) &&
    (q === '' || (p.title + ' ' + p.excerpt + ' ' + p.tags.join(' ')).toLowerCase().includes(q.toLowerCase()))
  ), [q, cat]);

  const featured = POSTS.filter(p => p.featured)[0];

  return (
    <div className="pt-32 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-60" />
        <div className="absolute inset-0 grid-pattern radial-fade opacity-30" />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-purple text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="h-3 w-3" /> The Journal
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight gradient-text break-words">Writing on craft.</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">Notes on AI engineering, Web3, Next.js, the email stack, and the craft of shipping software that lasts.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-10 max-w-3xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search articles…" className="w-full pl-11 pr-4 py-3 rounded-full glass text-sm outline-none focus:border-primary transition" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((c, i) => {
                const acc = accentFor(i);
                const active = cat === c;
                return (
                  <button key={c} onClick={() => setCat(c)} className={`px-4 py-1.5 rounded-full text-xs font-medium border transition ${active ? `badge-${acc} font-semibold` : 'border-border hover:border-foreground/50 text-muted-foreground'}`}>{c}</button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      {featured && cat === 'All' && q === '' && (
        <section className="container mt-16">
          <Link href={`/blog/${featured.slug}`} className="group block rounded-3xl glass-card-glow p-8 md:p-12 relative overflow-hidden hover:bg-accent/20 transition-all">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl" style={{ background: 'hsl(var(--brand-purple) / 0.25)' }} />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full blur-3xl" style={{ background: 'hsl(var(--brand-emerald) / 0.18)' }} />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest mb-3 inline-block px-2 py-0.5 rounded-full badge-amber">Featured</p>
                <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4 mt-2 gradient-text">{featured.title}</h2>
                <p className="text-muted-foreground text-lg mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {new Date(featured.date).toLocaleDateString('en', { dateStyle: 'medium' })}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {featured.readTime}</span>
                  <span className="flex items-center gap-1.5"><Tag className="h-3 w-3" /> {featured.category}</span>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full btn-primary-gradient text-sm font-medium">Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </div>
            </div>
          </Link>
        </section>
      )}

      <section className="container mt-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">No articles match your search.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => {
              const acc = accentFor(i);
              return (
                <motion.div key={p.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }}>
                  <Link href={`/blog/${p.slug}`} className="group block rounded-2xl glass-card p-6 h-full hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1">
                    <p className={`text-xs font-mono uppercase tracking-widest mb-3 inline-block px-2 py-0.5 rounded-full badge-${acc}`}>{p.category}</p>
                    <h3 className="font-display text-xl font-semibold mb-3 mt-2 group-hover:text-foreground transition leading-snug">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">{p.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {p.readTime}</span>
                      <span className="flex items-center gap-1">Read <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
