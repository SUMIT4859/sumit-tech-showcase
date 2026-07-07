'use client';
import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Star, Sparkles, Mail, Send, Zap, Shield, BookOpen, Wrench,
  FileText, Code2, Eye, Clock, ShieldAlert, Briefcase, Layers, GitCompare, HelpCircle,
  DollarSign, CheckCircle2, BadgeCheck, ShieldCheck, Github, Linkedin
} from 'lucide-react';
import { toast } from 'sonner';
import { POSTS } from '@/lib/data/blog';
import { FREE_TOOLS_LIST, HUB_SECTIONS } from '@/lib/data/hub';
import { TEMPLATES } from '@/lib/data/templates';
import { RESOURCES } from '@/lib/data/resources';
import { PROJECTS, TRUST_PILLARS } from '@/lib/data/site';
import { AFFILIATE } from '@/lib/config/affiliate';

const ICONS = { Star, Mail, Send, Zap, Shield, BookOpen, Wrench, FileText, Code2, Eye, Clock, ShieldAlert, Briefcase, Layers, GitCompare, HelpCircle, DollarSign, Sparkles, BadgeCheck, ShieldCheck };

// Accent rotation for colorful cards
const ACCENT_CYCLE = ['emerald', 'purple', 'amber', 'cyan', 'pink', 'blue'];
const accentFor = (i) => ACCENT_CYCLE[i % ACCENT_CYCLE.length];

function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, sub, action, eyebrowAccent = 'emerald' }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
      <Reveal>
        <div>
          <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 badge-${eyebrowAccent}`}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'currentColor' }} /> {eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance gradient-text max-w-2xl">{title}</h2>
          {sub && <p className="mt-4 text-muted-foreground text-lg max-w-xl">{sub}</p>}
        </div>
      </Reveal>
      {action && <Reveal delay={0.1}>{action}</Reveal>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-70" />
      <div className="absolute inset-0 grid-pattern radial-fade opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full blur-3xl animate-aurora" style={{ background: 'radial-gradient(circle, hsl(var(--brand-emerald) / 0.25), transparent 70%)' }} />
        <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full blur-3xl animate-aurora" style={{ background: 'radial-gradient(circle, hsl(var(--brand-purple) / 0.22), transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full blur-3xl animate-aurora" style={{ background: 'radial-gradient(circle, hsl(var(--brand-amber) / 0.15), transparent 70%)' }} />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-5xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-emerald text-xs font-mono uppercase tracking-widest mb-8">
            <Mail className="h-3 w-3" /> Email Marketing Hub <span className="opacity-60">+</span> Developer Portfolio
          </motion.div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-[-0.04em] leading-[1.05] text-balance break-words">
            <span className="block gradient-text">Master Email Marketing</span>
            <span className="block text-muted-foreground italic font-light">with <span className="not-italic font-semibold gradient-text-cool">Brevo</span> while building</span>
            <span className="block gradient-text-warm">modern software.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-balance">
            In-depth tutorials, honest reviews, free tools, templates and developer resources for founders and developers. Built by <span className="text-foreground font-medium">Sumitkumar Pandit</span> - Full Stack, AI & Web3 engineer.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/email-hub" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary-gradient text-sm font-medium hover:opacity-95 transition">
              <BookOpen className="h-4 w-4" /> Start Learning <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/tools/brevo" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full btn-cool-gradient text-sm font-medium hover:opacity-95 transition">
              <Star className="h-4 w-4" /> Read Brevo Review <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/free-tools" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium hover:bg-accent transition">
              <Wrench className="h-4 w-4" /> Free Tools
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium hover:bg-accent transition">
              Portfolio
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5" style={{ color: 'hsl(var(--brand-emerald))' }} /> 14+ In-Depth Guides</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5" style={{ color: 'hsl(var(--brand-purple))' }} /> 9 Templates</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5" style={{ color: 'hsl(var(--brand-amber))' }} /> 5 Free Tools</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5" style={{ color: 'hsl(var(--brand-cyan))' }} /> Honest Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedBrevo() {
  return (
    <section className="py-24">
      <div className="container">
        <Reveal>
          <Link href="/tools/brevo" className="group block rounded-3xl glass-card-glow p-8 md:p-12 relative overflow-hidden hover:bg-accent/20 transition-all">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl" style={{ background: 'hsl(var(--brand-emerald) / 0.25)' }} />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-3xl" style={{ background: 'hsl(var(--brand-cyan) / 0.18)' }} />
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="h-20 w-20 rounded-2xl bg-white shadow-lg flex items-center justify-center p-3">
                <Image src="/logos/Brevo.svg" alt="Brevo" width={56} height={56} className="object-contain" />
              </div>
              <div className="md:col-span-7">
                <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--brand-emerald))' }}>Featured Review · Editor&apos;s Pick</p>
                <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight gradient-text mb-3">Brevo - The Complete Review</h2>
                <p className="text-muted-foreground text-lg">All-in-one email marketing, transactional SMTP, automation, CRM &amp; SMS. The best-priced platform for developers and startups in 2025.</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5" style={{ color: 'hsl(var(--brand-amber))', fill: 'hsl(var(--brand-amber))' }} />)}<span className="ml-1 font-medium text-foreground">4.7</span></span>
                  <span>· 8 min read</span>
                  <span>· Updated June 2025</span>
                </div>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full btn-primary-gradient text-sm font-medium">Read review <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function LatestTutorials() {
  const latest = POSTS.slice(0, 6);
  return (
    <section className="py-24">
      <div className="container">
        <SectionTitle eyebrowAccent="purple" eyebrow="Latest Tutorials" title="Writing on email, code & craft." sub="Honest, in-depth articles on email marketing, Brevo, SMTP, AI and modern web development." action={
          <Link href="/blog" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition">Browse blog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
        } />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link href={`/blog/${p.slug}`} className="group glass-card rounded-2xl p-6 h-full block hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1">
                <p className={`text-xs font-mono uppercase tracking-widest mb-3 inline-block px-2 py-0.5 rounded-full badge-${accentFor(i)}`}>{p.category}</p>
                <h3 className="font-display text-lg font-semibold mb-3 mt-2 leading-snug group-hover:text-foreground transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">{p.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {p.readTime}</span>
                  <span className="flex items-center gap-1">Read <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FreeToolsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionTitle eyebrowAccent="amber" eyebrow="Free Tools" title="Free, fast, no signup." sub="Interactive tools that solve real problems for email senders. All in your browser." action={
          <Link href="/free-tools" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition">All tools <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
        } />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FREE_TOOLS_LIST.map((t, i) => {
            const Icon = ICONS[t.icon] || Wrench;
            const acc = accentFor(i);
            return (
              <Reveal key={t.slug} delay={i * 0.05}>
                <Link href={`/free-tools/${t.slug}`} className="group glass-card rounded-2xl p-6 h-full block hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                  {t.tag && <span className={`absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full badge-${acc}`}>{t.tag}</span>}
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition icon-${acc} shadow-lg`}><Icon className="h-5 w-5" /></div>
                  <h3 className="font-display font-semibold mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TemplatesSection() {
  const preview = TEMPLATES.slice(0, 6);
  return (
    <section className="py-24">
      <div className="container">
        <SectionTitle eyebrowAccent="cyan" eyebrow="Templates" title="Production-ready email templates." sub="9 battle-tested HTML email templates. Copy, customize, ship. All variables documented." action={
          <Link href="/templates" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition">All templates <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
        } />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {preview.map((t, i) => {
            const acc = accentFor(i);
            return (
              <Reveal key={t.slug} delay={i * 0.04}>
                <Link href={`/templates/${t.slug}`} className="group glass-card rounded-2xl p-6 h-full block hover:bg-accent/40 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded-full badge-${acc}`}>{t.category}</span>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{t.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{t.desc}</p>
                  <p className="text-xs font-mono text-muted-foreground border-t border-border pt-3 truncate">Subject: {t.subject}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionTitle eyebrowAccent="pink" eyebrow="Developer Resources" title="Reference, not fluff." sub="Glossaries, checklists and authentication guides. Bookmark them - you will need them." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESOURCES.map((r, i) => {
            const Icon = { BookOpen, Shield, CheckCircle2, Code2 }[r.icon] || BookOpen;
            const acc = accentFor(i);
            return (
              <Reveal key={r.slug} delay={i * 0.05}>
                <Link href={`/resources/${r.slug}`} className="group glass-card rounded-2xl p-6 h-full block hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-11 w-11 rounded-xl flex items-center justify-center icon-${acc} shadow-lg`}><Icon className="h-5 w-5" /></div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{r.type}</span>
                  </div>
                  <h3 className="font-display font-semibold mb-2 leading-snug">{r.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{r.desc}</p>
                  <p className="mt-4 text-xs text-muted-foreground pt-3 border-t border-border flex items-center gap-1.5"><Clock className="h-3 w-3" /> {r.readTime}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutBrief() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 badge-blue">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'currentColor' }} /> About
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight gradient-text mb-6">Built by an engineer who ships.</h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">I&apos;m <span className="text-foreground font-medium">Sumitkumar Pandit</span> - M.Sc. IT student (CGPA 9.85), Full Stack Developer, AI Engineer and Web3 builder. I write about the tools I actually use and the email infrastructure I run in production.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Everything on this site - the reviews, the templates, the tools - is shaped by real shipping experience. No fluff, no hype, no invented social proof.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about-author" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-primary-gradient text-sm font-medium hover:opacity-95 transition">About the Author <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition">My Portfolio</Link>
              <a href="https://github.com/SUMIT4859" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition"><Github className="h-4 w-4" /> GitHub</a>
              <a href="https://www.linkedin.com/in/sumit-kumar4859" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="glass-card-glow rounded-3xl p-7 grid grid-cols-2 gap-6">
              {[
                { label: 'M.Sc. CGPA', value: '9.85', accent: 'emerald' },
                { label: 'B.Sc. CGPA', value: '9.73', accent: 'purple' },
                { label: 'Live Projects', value: '8', accent: 'amber' },
                { label: 'Open Source', value: '20+', accent: 'cyan' },
              ].map(s => (
                <div key={s.label}>
                  <p className={`font-display text-4xl font-semibold`} style={{ color: `hsl(var(--brand-${s.accent}))` }}>{s.value}</p>
                  <p className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <SectionTitle eyebrowAccent="emerald" eyebrow="Projects" title="Recent work." action={
          <Link href="/portfolio#projects" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition">All projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
        } />
        <div className="grid md:grid-cols-3 gap-4">
          {featured.map((p, i) => {
            const acc = accentFor(i);
            return (
              <Reveal key={p.slug} delay={i * 0.05}>
                <div className="group glass-card rounded-2xl p-6 h-full hover:bg-accent/40 transition-all duration-500">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map(t => <span key={t} className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md badge-${acc}`}>{t}</span>)}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// REPLACED fake testimonials with honest trust pillars.
function TrustPillarsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionTitle
          eyebrowAccent="emerald"
          eyebrow="Why This Hub"
          title="Trust signals, not fake testimonials."
          sub="This site does not fake social proof. Instead, here is exactly what you get - and what we promise."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {TRUST_PILLARS.map((p, i) => {
            const Icon = ICONS[p.icon] || BadgeCheck;
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div className="glass-card rounded-3xl p-7 h-full flex gap-5">
                  <div className={`shrink-0 h-12 w-12 rounded-xl icon-${p.accent} flex items-center justify-center shadow-lg`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
            <Link href="/affiliate-disclosure" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass hover:bg-accent transition text-muted-foreground hover:text-foreground">Affiliate Disclosure</Link>
            <Link href="/privacy-policy" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass hover:bg-accent transition text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass hover:bg-accent transition text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link href="/about-author" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass hover:bg-accent transition text-muted-foreground hover:text-foreground">About the Author</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const sub = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      if (res.ok) { toast.success('Subscribed! Welcome aboard.'); setEmail(''); }
      else toast.error('Could not subscribe.');
    } catch { toast.error('Network error'); }
    setLoading(false);
  };
  return (
    <section className="py-24">
      <div className="container">
        <Reveal>
          <div className="glass-card-glow rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 aurora-bg opacity-70" />
            <div className="absolute inset-0 grid-pattern radial-fade opacity-20" />
            <div className="relative max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-emerald text-xs font-mono uppercase tracking-widest mb-6"><Mail className="h-3 w-3" /> Newsletter</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight gradient-text mb-4">Email tips you will actually use.</h2>
              <p className="text-muted-foreground mb-8">One email per month on Brevo, SMTP, deliverability and shipping software. No spam - the irony would be too much.</p>
              <form onSubmit={sub} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder="you@example.com" className="flex-1 bg-background/60 border border-border rounded-full px-5 py-3 text-sm outline-none focus:border-primary transition" />
                <button disabled={loading} className="px-6 py-3 rounded-full btn-primary-gradient text-sm font-medium hover:opacity-95 transition disabled:opacity-50">{loading ? '...' : 'Subscribe'}</button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Hero />
      <FeaturedBrevo />
      <LatestTutorials />
      <FreeToolsSection />
      <TemplatesSection />
      <ResourcesSection />
      <AboutBrief />
      <ProjectsPreview />
      <TrustPillarsSection />
      <NewsletterCTA />
    </>
  );
}

export default App;
