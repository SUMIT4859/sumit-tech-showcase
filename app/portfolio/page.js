'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import {
  ArrowRight, Download, FolderGit2, BookOpen, Mail, Sparkles, ArrowUpRight, Github, Linkedin, Twitter,
  Code2, Brain, Network, Boxes, User, Briefcase, Rocket, Star, Quote, MapPin, Phone, Send,
  GraduationCap, Trophy, GitBranch, Layers, Atom, Database, Terminal, Cpu, Bot, Coins
} from 'lucide-react';
import { toast } from 'sonner';
import { PROJECTS, SKILL_GROUPS, SERVICES, TIMELINE, TESTIMONIALS, TOOLS } from '@/lib/data/site';
import { CERTIFICATIONS, OPEN_SOURCE } from '@/lib/data/extras';
import { Award, Github as GithubIcon, GitFork, Star as StarIcon } from 'lucide-react';

const ICONS = { Code2, Brain, Network, Boxes, User, Briefcase, Rocket };

const TECH_ROW = [
  { name: 'React', Icon: Atom }, { name: 'Next.js', Icon: Layers }, { name: 'TypeScript', Icon: Code2 },
  { name: 'Node.js', Icon: Terminal }, { name: 'MongoDB', Icon: Database }, { name: 'Solidity', Icon: Coins },
  { name: 'Python', Icon: Cpu }, { name: 'AI / LLMs', Icon: Bot }, { name: 'Docker', Icon: Boxes },
  { name: 'Git', Icon: GitBranch },
];

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

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <Reveal>
      <div className="max-w-2xl mb-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
          <span className="h-px w-8 bg-foreground" /> {eyebrow}
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance gradient-text">{title}</h2>
        {sub && <p className="mt-4 text-muted-foreground text-lg max-w-xl">{sub}</p>}
      </div>
    </Reveal>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <motion.div style={{ y, opacity }} className="absolute inset-0 grid-pattern radial-fade opacity-60" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-foreground/[0.04] blur-3xl animate-aurora bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5" />
        <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-foreground/[0.03] blur-3xl animate-aurora bg-gradient-to-tl from-foreground/10 via-transparent to-foreground/5" />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new projects
          </motion.div>

          <h1 className="font-display text-[12vw] sm:text-7xl md:text-8xl lg:text-[8.5rem] font-semibold tracking-[-0.04em] leading-[0.95] text-balance break-words">
            <span className="block gradient-text">SUMITKUMAR</span>
            <span className="block italic font-light text-muted-foreground">PANDIT</span>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm md:text-base font-mono uppercase tracking-widest text-muted-foreground">
            <span>Full Stack</span>
            <span className="h-1 w-1 rounded-full bg-foreground/40" />
            <span>AI Engineer</span>
            <span className="h-1 w-1 rounded-full bg-foreground/40" />
            <span>Web3 Developer</span>
          </div>

          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground text-balance">
            Building intelligent software, AI solutions and Web3 experiences. M.Sc. IT student crafting scalable applications and exceptional digital products.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary-gradient text-sm font-medium hover:opacity-95 transition">
              <FolderGit2 className="h-4 w-4" /> View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a href="https://customer-assets.emergentagent.com/job_sumit-tech-showcase/artifacts/2t986lsw_Sumitkumar_Pandit_Resume.pdf" target="_blank" rel="noopener noreferrer" download className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium hover:bg-accent transition">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium hover:bg-accent transition">
              <Sparkles className="h-4 w-4" /> Hire Me
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium hover:bg-accent transition">
              <BookOpen className="h-4 w-4" /> Read Blog
            </Link>
          </div>
        </motion.div>

        {/* Tech marquee */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }} className="mt-20 relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-12 pr-12 shrink-0">
              {[...TECH_ROW, ...TECH_ROW].map(({ name, Icon }, i) => (
                <div key={i} className="flex items-center gap-2.5 text-muted-foreground whitespace-nowrap">
                  <Icon className="h-5 w-5" />
                  <span className="font-mono text-sm uppercase tracking-widest">{name}</span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee gap-12 pr-12 shrink-0" aria-hidden>
              {[...TECH_ROW, ...TECH_ROW].map(({ name, Icon }, i) => (
                <div key={i} className="flex items-center gap-2.5 text-muted-foreground whitespace-nowrap">
                  <Icon className="h-5 w-5" />
                  <span className="font-mono text-sm uppercase tracking-widest">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container">
        <SectionTitle eyebrow="About" title="Engineer by craft. Builder by obsession." />
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>I&apos;m Sumit - an M.Sc. Information Technology student with a deep passion for full-stack development, artificial intelligence and blockchain engineering. My world revolves around building scalable applications, solving real-world problems and crafting products that feel inevitable.</p>
            <p>Whether it&apos;s a decentralized prediction market on Base, a voice-first AI agent that talks to your wallet, or a hospital management system used in clinical workflows - I gravitate towards problems where rigor meets imagination.</p>
            <p className="text-foreground">My mission: build software that earns trust, scales gracefully, and ages well.</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 space-y-5">
              {[
                { label: 'Passion', value: 'Engineering products that solve real problems.' },
                { label: 'Mission', value: 'Make AI & Web3 feel as simple as opening a website.' },
                { label: 'Vision', value: 'Build the next generation of trustworthy software.' },
                { label: 'Career Goal', value: 'Ship at the intersection of AI, Web3 and product.' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground w-24 shrink-0 mt-1">{label}</span>
                  <p className="flex-1">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Education Timeline */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="h-6 w-6" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold">Education & Journey</h3>
            </div>
          </Reveal>
          <div className="relative pl-6 md:pl-8 border-l border-border">
            {TIMELINE.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[31px] md:-left-[37px] top-1.5 h-3 w-3 rounded-full bg-foreground ring-4 ring-background" />
                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h4 className="font-display text-xl font-semibold">{t.title}</h4>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{t.year}</span>
                    </div>
                    <p className="text-sm text-foreground/80 mb-2">{t.meta}</p>
                    <p className="text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container">
        <SectionTitle eyebrow="Skills" title="The toolkit behind the work." sub="A curated stack honed through shipping real products across web, AI and Web3." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_GROUPS.map((g, i) => {
            const ACC = ['emerald', 'purple', 'amber', 'cyan', 'pink', 'blue'];
            const acc = ACC[i % ACC.length];
            return (
            <Reveal key={g.name} delay={i * 0.05}>
              <div className="group glass-card rounded-2xl p-6 h-full hover:bg-accent/50 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display text-lg font-semibold" style={{ color: `hsl(var(--brand-${acc}))` }}>{g.name}</h3>
                  <span className={`font-mono text-xs px-2 py-0.5 rounded-full badge-${acc}`}>0{i + 1}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map(item => (
                    <span key={item} className={`text-xs px-3 py-1.5 rounded-full border transition-colors badge-${acc}`}>{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container">
        <SectionTitle eyebrow="Selected Work" title="Projects that shipped." sub="From decentralized markets to AI agents - a glimpse into what I build." />
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-3xl glass-card p-8 h-full hover:bg-accent/30 transition-all duration-500">
                <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-foreground/[0.04] blur-3xl group-hover:bg-foreground/[0.08] transition-all duration-700" />
                <div className="relative">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map(t => <span key={t} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-foreground/5 border border-border">{t}</span>)}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-3">{p.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-border">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map(s => <span key={s} className="text-xs text-muted-foreground">{s}</span>).reduce((a, c, i) => i ? [...a, <span key={'d' + i} className="text-muted-foreground/40 text-xs">·</span>, c] : [c], [])}
                    </div>
                    <div className="flex gap-2">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-accent transition" aria-label="GitHub"><Github className="h-4 w-4" /></a>
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-accent transition" aria-label="Live demo"><ArrowUpRight className="h-4 w-4" /></a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsPreview() {
  const featured = TOOLS.slice(0, 6);
  return (
    <section id="tools" className="py-32 relative">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              <span className="h-px w-8 bg-foreground" /> Tools I Recommend
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight gradient-text">My battle-tested stack.</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">Honest reviews of the tools I actually use to ship. No fluff, no upsell.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/tools" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition">
              Explore all tools <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.05}>
              <Link href={`/tools/${t.slug}`} className="group relative block rounded-3xl glass-card p-6 h-full hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {t.featured && <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-foreground text-background">Featured</span>}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-white border border-border flex items-center justify-center overflow-hidden p-2 shrink-0">
                    {t.logoImage ? (
                      <Image
                        src={t.logoImage}
                        alt={t.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    ) : (
                      <span
                        className="font-display font-bold text-lg"
                        style={t.brand ? { color: "#fff" } : {}}
                      >
                        {t.logo}
                      </span>
                    )}
                  </div>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container">
        <SectionTitle eyebrow="Services" title="How I can help you ship." sub="From idea to production, I take products through their entire lifecycle." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] || Sparkles;
            const ACC = ['emerald', 'purple', 'amber', 'cyan', 'pink', 'blue'];
            const acc = ACC[i % ACC.length];
            return (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="group glass-card rounded-2xl p-7 h-full hover:bg-accent/40 transition-all duration-500">
                  <div className={`h-11 w-11 rounded-xl icon-${acc} flex items-center justify-center mb-5 group-hover:scale-110 transition shadow-lg`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = Date.now();
        const dur = 1500;
        const tick = () => {
          const p = Math.min((Date.now() - start) / dur, 1);
          setVal(Math.floor(p * to * 100) / 100);
          if (p < 1) requestAnimationFrame(tick);
        };
        tick();
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{Number.isInteger(to) ? Math.floor(val) : val.toFixed(2)}{suffix}</span>;
}

function Achievements() {
  const stats = [
    { value: 25, suffix: '+', label: 'Projects Shipped' },
    { value: 1200, suffix: '+', label: 'Commits this year' },
    { value: 20, suffix: '+', label: 'Technologies Mastered' },
    { value: 9.85, suffix: '', label: 'Current CGPA' },
  ];
  return (
    <section className="py-24 relative">
      <div className="container">
        <div className="glass-card rounded-3xl p-10 md:p-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30 radial-fade" />
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="relative text-center">
              <div className="font-display text-5xl md:text-6xl font-semibold tracking-tight gradient-text">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm font-mono uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  // Trust pillars instead of fake testimonials - proves credibility without fabricated quotes.
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null;
  return (
    <section className="py-32 relative">
      <div className="container">
        <SectionTitle eyebrow="Testimonials" title="Trusted by builders & founders." />
        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass-card rounded-3xl p-7 h-full relative">
                <Quote className="h-7 w-7 text-foreground/20 mb-4" />
                <p className="text-foreground/90 mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-foreground/10 flex items-center justify-center font-display font-semibold">{t.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `New message from ${form.name}`);
    const body = encodeURIComponent(`Hi Sumit,\n\n${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:hello@sumitpandit.dev?subject=${subject}&body=${body}`;
    toast.success('Opening your email client...');
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container">
        <SectionTitle eyebrow="Contact" title="Let's work together." sub="Have a project, role or idea? Drop a message - I read every one." />
        <div className="grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-5 space-y-4">
            {[
              { Icon: Mail, label: 'Email', value: 'hello@codedbysumit.com', href: 'mailto:hello@codedbysumit.com' },
              { Icon: Phone, label: 'Phone', value: '+91 8539815985', href: 'tel:+918539815985' },
              { Icon: MapPin, label: 'Location', value: 'India · Remote-friendly', href: '#' },
              { Icon: Github, label: 'GitHub', value: '@sumit4859', href: 'https://github.com/sumit4859' },
              { Icon: Twitter, label: 'Twitter', value: '@sumitxbt', href: 'https://x.com/sumitxbt' },
              { Icon: Linkedin, label: 'LinkedIn', value: 'Sumitkumar Pandit', href: 'https://www.linkedin.com/in/sumit-kumar4859' },
            ].map(({ Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-4 glass-card rounded-2xl p-4 hover:bg-accent/40 transition group">
                <div className="h-11 w-11 rounded-xl bg-foreground/5 border border-border flex items-center justify-center"><Icon className="h-4 w-4" /></div>
                <div className="flex-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={submit} className="glass-card rounded-3xl p-7 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="bg-transparent border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground transition" />
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Your email" className="bg-transparent border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground transition" />
              </div>
              <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="Subject (project, role, idea…)" className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground transition" />
              <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project or idea…" className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground transition resize-none" />
              <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary-gradient text-sm font-medium hover:opacity-95 transition">
                Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-32 relative">
      <div className="container">
        <SectionTitle eyebrow="Certifications" title="Continuous learning, certified." sub="Selected credentials backing the work." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((c, i) => {
            const ACC = ['emerald', 'purple', 'amber', 'cyan', 'pink', 'blue'];
            const acc = ACC[i % ACC.length];
            return (
            <Reveal key={c.title} delay={i * 0.05}>
              <a href={c.credential} target="_blank" rel="noreferrer" className="group glass-card rounded-2xl p-6 h-full hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-11 w-11 rounded-xl icon-${acc} flex items-center justify-center shadow-lg`}><Award className="h-5 w-5" /></div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{c.year}</span>
                </div>
                <h3 className="font-display text-base font-semibold leading-snug mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-auto pt-3 border-t border-border flex items-center justify-between">
                  <span>{c.issuer}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition" />
                </p>
              </a>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section id="open-source" className="py-32 relative">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              <span className="h-px w-8 bg-foreground" /> Open Source
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight gradient-text">Built in public.</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">Selected repositories from my GitHub. Code, contribute, fork - it is all yours.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="https://github.com/sumit4859" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition">
              <GithubIcon className="h-4 w-4" /> @sumit4859 <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <Reveal>
          <a href="https://github.com/sumit4859" target="_blank" rel="noreferrer" className="block mb-6 glass-card rounded-3xl p-8 relative overflow-hidden hover:bg-accent/20 transition group">
            <div className="absolute inset-0 grid-pattern opacity-20 radial-fade" />
            <div className="relative grid sm:grid-cols-4 gap-6">
              {[
                { label: 'Public Repos', value: '20+' },
                { label: 'Live Projects', value: '8' },
                { label: 'Contributions', value: 'Active' },
                { label: 'Open Source', value: 'Yes' },
              ].map(s => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="font-display text-3xl md:text-4xl font-semibold tracking-tight gradient-text">{s.value}</p>
                  <p className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass-card rounded-3xl p-6 mb-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Contribution Graph</p>
              <a href="https://github.com/sumit4859" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition inline-flex items-center gap-1">View on GitHub <ArrowUpRight className="h-3 w-3" /></a>
            </div>
            <img src="https://ghchart.rshah.org/cccccc/sumit4859" alt="GitHub contribution graph for sumit4859" className="w-full opacity-90" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {OPEN_SOURCE.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <a href={r.url} target="_blank" rel="noreferrer" className="group glass-card rounded-2xl p-6 block hover:bg-accent/40 transition-all duration-500">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-mono text-base font-semibold flex items-center gap-2"><GithubIcon className="h-4 w-4" /> {r.name}</h3>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{r.desc}</p>
                <div className="flex items-center gap-5 text-xs text-muted-foreground pt-4 border-t border-border">
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-foreground/60" /> {r.lang}</span>
                  <span className="flex items-center gap-1"><StarIcon className="h-3 w-3" /> {r.stars}</span>
                  <span className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {r.forks}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ToolsPreview />
      <Services />
      <Achievements />
      <Certifications />
      <OpenSource />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
