'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight, ChevronRight, Sparkles, Clock, Calendar } from 'lucide-react';
import { TOOLS } from '@/lib/data/site';

export default function GenericToolPage({ tool }) {
  const related = TOOLS.filter(t => t.slug !== tool.slug && t.category === tool.category).slice(0, 3);
  return (
    <div className="pt-28 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern radial-fade opacity-40" />
        <div className="container relative">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link href="/tools" className="hover:text-foreground transition">Tools</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{tool.name}</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest mb-6">
                <Sparkles className="h-3 w-3" /> {tool.category}
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight gradient-text">{tool.name} Review</h1>
              <p className="mt-5 text-xl md:text-2xl text-muted-foreground max-w-2xl">{tool.tagline}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.round(tool.rating) ? 'fill-foreground text-foreground' : 'text-muted-foreground/40'}`} />)}
                  <span className="ml-1 font-medium text-foreground">{tool.rating}</span>
                </span>
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Updated June 2025</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 6 min read</span>
              </div>
              <div className="mt-8">
                <a href="#" target="_blank" rel="noopener noreferrer sponsored" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
                  Visit {tool.name} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="glass-card rounded-3xl p-8">
                <div className="h-20 w-20 rounded-2xl bg-foreground text-background flex items-center justify-center font-display font-bold text-3xl mb-5">{tool.logo}</div>
                <h3 className="font-display text-2xl font-semibold mb-1">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tool.category}</p>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex justify-between"><span className="text-muted-foreground">Rating</span><span className="font-medium">{tool.rating} / 5</span></li>
                  <li className="flex justify-between"><span className="text-muted-foreground">Best for</span><span className="font-medium">Developers</span></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mt-20 space-y-12">
        <div className="glass-card rounded-3xl p-8 max-w-3xl">
          <h2 className="font-display text-3xl font-semibold mb-4 gradient-text">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">A detailed review of {tool.name} is coming soon. This page is fully editable from the admin panel - description, features, ratings, pros &amp; cons, FAQs and screenshots can be managed without touching code.</p>
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-semibold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map(t => (
                <Link key={t.slug} href={`/tools/${t.slug}`} className="group glass-card rounded-2xl p-5 hover:bg-accent/40 transition">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center font-display font-bold">{t.logo}</div>
                    <div>
                      <h3 className="font-display font-semibold">{t.name}</h3>
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.category}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
