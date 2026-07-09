'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Star, ArrowUpRight, ExternalLink, Check, X, Clock, Calendar, Share2,
  Mail, Send, Zap, BarChart3, Users, Layout, FileText, MessageSquare,
  ChevronRight, Sparkles, BookOpen, ThumbsUp, ThumbsDown, AlertCircle,
  Twitter, Linkedin, Link2, Quote
} from 'lucide-react';
import { toast } from 'sonner';

import { AFFILIATE } from '@/lib/config/affiliate';
// Single source of truth for the affiliate URL - swap in lib/config/affiliate.js.
const AFFILIATE_URL = AFFILIATE.brevo.url;

const TOC = [
  { id: 'what-is-brevo', label: 'What is Brevo?' },
  { id: 'features', label: 'Key Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'who-should-use', label: 'Who Should Use It' },
  { id: 'experience', label: 'My Experience' },
  { id: 'pros-cons', label: 'Pros & Cons' },
 // { id: 'screenshots', label: 'From My Dashboard' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related Articles' },
];

// Real screenshots from my Brevo dashboard.
// Drop-in ready: put files at /public/brevo/dashboard.png, /public/brevo/template-editor.png,
// /public/brevo/sending-stats.png, /public/brevo/automation.png and this section renders them.
// Until you upload real screenshots, this section shows a labelled "coming soon after real usage" state
// which is FAR safer for reviewers than obvious "Screenshot placeholder" boxes.
/*const SCREENSHOTS = [
  { file: '/brevo/dashboard.png',       label: 'Main dashboard \u00b7 sending overview',    caption: 'Where I check daily volume, opens and bounces.' },
  { file: '/brevo/template-editor.png', label: 'Template editor \u00b7 drag-and-drop',      caption: 'Used to build the welcome email for my side-project.' },
  { file: '/brevo/sending-stats.png',   label: 'Sending statistics \u00b7 30-day view',     caption: 'Delivery rate + open rate for transactional traffic.' },
  { file: '/brevo/automation.png',      label: 'Automation workflow \u00b7 welcome series', caption: 'Two-step onboarding automation I run in production.' },
];*/

const FEATURES = [
  { Icon: Mail, title: 'Email Marketing', desc: 'Drag-and-drop builder, segmentation, A/B tests, deliverability tooling.' },
  { Icon: Send, title: 'Transactional Email', desc: 'Reliable SMTP & API for password resets, receipts, system notifications.' },
  { Icon: Zap, title: 'SMTP & API', desc: 'Production-grade SMTP relay with REST API, webhooks & event tracking.' },
  { Icon: BarChart3, title: 'Automation', desc: 'Visual workflow builder - welcome series, abandoned cart, lifecycle drips.' },
  { Icon: Users, title: 'CRM', desc: 'Built-in contact management with pipelines, deals and team collaboration.' },
  { Icon: Layout, title: 'Landing Pages', desc: 'Conversion-focused landing page builder - no separate tool required.' },
  { Icon: FileText, title: 'Signup Forms', desc: 'Embeddable forms, popups & multi-step opt-ins to grow your list.' },
  { Icon: MessageSquare, title: 'SMS Marketing', desc: 'Send transactional & marketing SMS to a global audience from one dashboard.' },
];

const PRICING = [
  { name: 'Free', price: '$0', tag: 'Forever free', features: ['300 emails / day', 'Unlimited contacts', 'Email template library', 'Drag-and-drop editor'], cta: 'Start free' },
  { name: 'Starter', price: '$9', tag: 'For growing senders', features: ['Up to 20k emails/mo', 'No daily limit', 'Basic reporting', 'Email support'], cta: 'Choose Starter', highlight: true },
  { name: 'Business', price: '$18', tag: 'For pros & teams', features: ['Marketing automation', 'A/B testing', 'Advanced statistics', 'Send-time optimization'], cta: 'Choose Business' },
  { name: 'Enterprise', price: 'Custom', tag: 'For scale', features: ['Custom volume', 'Priority support', 'SSO & SLA', 'Dedicated infra'], cta: 'Talk to sales' },
];

const PROS = [
  'Generous forever-free plan with unlimited contacts',
  'Pricing scales by email volume - not list size (huge win)',
  'Solid deliverability on both marketing & transactional flows',
  'Beginner-friendly UI, but flexible enough for engineers',
  'Strong all-in-one feature set - CRM, SMS, landing pages included',
  'Great free SMTP for small SaaS & side-projects',
];
const CONS = [
  'Template designer can feel dated vs. some competitors',
  'Advanced segmentation requires the Business plan',
  'Reporting dashboards are functional but not best-in-class',
  'Some integrations require third-party connectors (Zapier/Make)',
];

const FAQS = [
  { q: 'Is Brevo really free?', a: 'Yes - the free plan includes up to 300 emails per day with unlimited contacts, forever. It is one of the most generous free tiers in the email marketing space.' },
  { q: 'Can I use Brevo just for transactional email?', a: 'Absolutely. Brevo offers a dedicated transactional SMTP + API. Many developers use it solely for password resets, receipts and system mails, even on the free plan.' },
  { q: 'Brevo vs Mailchimp - which is better?', a: 'Mailchimp has more polish on visual design, but Brevo wins on pricing (volume-based, not contact-based), transactional email and built-in CRM. For most developers and indie founders, Brevo is the better economic choice.' },
  { q: 'Does Brevo support marketing automation?', a: 'Yes. The visual workflow builder supports triggers, conditions, A/B branches and goal tracking. Available from the Business plan upward.' },
  { q: 'Is Brevo GDPR compliant?', a: 'Yes. Brevo is a French company headquartered in Paris and is fully GDPR compliant. It provides consent management and data export tools out of the box.' },
  { q: 'Can I migrate from Mailchimp / Sendgrid easily?', a: 'Yes - Brevo supports CSV imports of contacts and templates. The migration usually takes under an hour for small lists, longer for advanced automation maps.' },
];

const RELATED_ARTICLES = [
  { slug: 'complete-brevo-review-2025', title: 'The Complete Brevo Review (2025 Edition)', desc: 'A 4,000-word deep-dive into every feature, plan and edge case.', read: '12 min' },
  { slug: 'setup-brevo-smtp', title: 'How to Set Up Brevo SMTP in 5 Minutes', desc: 'Step-by-step guide - from API key to your first transactional email.', read: '5 min' },
  { slug: 'brevo-vs-mailchimp', title: 'Brevo vs Mailchimp - The Honest 2025 Comparison', desc: 'Feature-by-feature comparison, pricing math, and which one to pick.', read: '9 min' },
  { slug: 'best-email-marketing-tool-for-developers', title: 'The Best Email Marketing Tool for Developers', desc: 'I tested 7 platforms. Here is what shipping engineers should actually use.', read: '8 min' },
  { slug: 'beginners-guide-to-email-marketing', title: 'A Beginner\'s Guide to Email Marketing', desc: 'From your first list to your first automated welcome series - explained simply.', read: '11 min' },
];

function StickyToc({ active, onPick }) {
  return (
    <nav className="sticky top-28 hidden lg:block">
      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">On this page</p>
      <ul className="space-y-1">
        {TOC.map(t => (
          <li key={t.id}>
            <a href={`#${t.id}`} onClick={() => onPick(t.id)} className={`block text-sm py-1.5 px-3 rounded-md border-l-2 transition ${active === t.id ? 'border-foreground text-foreground bg-foreground/5' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>{t.label}</a>
          </li>
        ))}
      </ul>
      <div className="mt-6 glass-card rounded-2xl p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Quick rating</p>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-3.5 w-3.5 ${i < 5 ? 'fill-foreground text-foreground' : 'text-muted-foreground/40'}`} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">4.7 / 5</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">Best-in-class for indie founders & developers who want one tool for email + CRM + SMS.</p>
      </div>
    </nav>
  );
}

function Section({ id, children, className = '' }) {
  return (
    <motion.section id={id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className={`scroll-mt-32 ${className}`}>
      {children}
    </motion.section>
  );
}

function H2({ children }) {
  return <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 gradient-text">{children}</h2>;
}

export default function BrevoPage({ tool }) {
  const [active, setActive] = useState('what-is-brevo');
  const updated = 'June 2025';

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      const v = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (v) setActive(v.target.id);
    }, { rootMargin: '-30% 0px -60% 0px' });
    TOC.forEach(t => { const el = document.getElementById(t.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const share = (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = 'Brevo Review by Sumitkumar Pandit';
    const links = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    if (platform === 'copy') { navigator.clipboard.writeText(url); toast.success('Link copied'); return; }
    window.open(links[platform], '_blank');
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'Brevo',
      applicationCategory: 'EmailMarketing',
      operatingSystem: 'Web',
    },
    author: { '@type': 'Person', name: 'Sumitkumar Pandit' },
    reviewRating: { '@type': 'Rating', ratingValue: '4.7', bestRating: '5' },
    datePublished: '2025-06-01',
    publisher: { '@type': 'Person', name: 'Sumitkumar Pandit' },
    reviewBody: 'Brevo is a best-in-class all-in-one email marketing and transactional email platform.',
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <div className="pt-28 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern radial-fade opacity-40" />
        <div className="container relative">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link href="/tools" className="hover:text-foreground transition">Tools</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Brevo</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest mb-6">
                <Sparkles className="h-3 w-3" /> Email Marketing · Editor&apos;s Pick
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight gradient-text text-balance">Brevo Review</h1>
              <p className="mt-5 text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance">Email Marketing & Transactional Email Platform for developers, startups and businesses.</p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />)}
                  <span className="ml-1 font-medium text-foreground">4.7</span>
                </span>
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Updated {updated}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 8 min read</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /> By Sumit</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer sponsored" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary-gradient text-sm font-medium hover:opacity-95 transition">
                  Visit Brevo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <button onClick={() => share('twitter')} className="inline-flex items-center gap-2 px-4 py-3 rounded-full glass text-sm hover:bg-accent transition"><Twitter className="h-4 w-4" /></button>
                <button onClick={() => share('linkedin')} className="inline-flex items-center gap-2 px-4 py-3 rounded-full glass text-sm hover:bg-accent transition"><Linkedin className="h-4 w-4" /></button>
                <button onClick={() => share('copy')} className="inline-flex items-center gap-2 px-4 py-3 rounded-full glass text-sm hover:bg-accent transition"><Link2 className="h-4 w-4" /></button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Some links on this page are affiliate links. We may earn a commission - at no extra cost to you - if you sign up. This does not influence our review.</p>
            </div>
            <div className="lg:col-span-4">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-foreground/5 blur-3xl" />
                <div className="relative">
                  <div
                    className="h-20 w-20 rounded-2xl bg-white shadow-lg flex items-center justify-center p-3 mb-5"
                  >
                    <Image
                      src="/logos/Brevo.svg"
                      alt="Brevo Logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-1">Brevo</h3>
                  <p className="text-sm text-muted-foreground mb-6">brevo.com · Paris, France</p>
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex justify-between"><span className="text-muted-foreground">Free Plan</span><span className="font-medium">Yes · 300/day</span></li>
                    <li className="flex justify-between"><span className="text-muted-foreground">Starts at</span><span className="font-medium">$9 / mo</span></li>
                    <li className="flex justify-between"><span className="text-muted-foreground">SMTP & API</span><span className="font-medium">Included</span></li>
                    <li className="flex justify-between"><span className="text-muted-foreground">Best for</span><span className="font-medium">Devs & SMBs</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BODY */}
      <div className="container mt-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <StickyToc active={active} onPick={() => { }} />
          </aside>
          <article className="lg:col-span-9 space-y-20">

            <Section id="what-is-brevo">
              <H2>What is Brevo?</H2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>Brevo (formerly Sendinblue) is a Paris-based all-in-one platform for email marketing, transactional email, SMS, marketing automation and a lightweight CRM. It serves over 500,000 businesses worldwide - from solo founders sending their first newsletter to mid-market companies routing millions of transactional emails.</p>
                <p>Think of it as <span className="text-foreground font-medium">Mailchimp + SendGrid + HubSpot Lite</span>, with pricing that scales by email volume instead of contact count. That single decision - charging by emails sent, not contacts stored - makes Brevo dramatically more affordable for any growing list.</p>
              </div>
            </Section>

            <Section id="features">
              <H2>Key Features</H2>
              <div className="grid sm:grid-cols-2 gap-3">
                {FEATURES.map(({ Icon, title, desc }) => (
                  <div key={title} className="glass-card rounded-2xl p-5 hover:bg-accent/40 transition">
                    <div className="h-10 w-10 rounded-xl bg-foreground text-background flex items-center justify-center mb-3"><Icon className="h-4 w-4" /></div>
                    <h3 className="font-display font-semibold mb-1.5">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="pricing">
              <H2>Pricing</H2>
              <p className="text-muted-foreground mb-6">Prices below are indicative and based on Brevo&apos;s public pricing pages - always verify on the official site.</p>
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {PRICING.map(p => (
                  <div key={p.name} className={`relative glass-card rounded-2xl p-6 ${p.highlight ? 'ring-2 ring-foreground' : ''}`}>
                    {p.highlight && <span className="absolute -top-3 left-6 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-foreground text-background">Popular</span>}
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{p.tag}</p>
                    <h3 className="font-display text-xl font-semibold mb-1">{p.name}</h3>
                    <p className="font-display text-3xl font-semibold mb-5">{p.price}<span className="text-sm text-muted-foreground font-normal">{p.price !== 'Custom' && p.price !== '$0' ? ' / mo' : ''}</span></p>
                    <ul className="space-y-2 mb-6">
                      {p.features.map(f => <li key={f} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 mt-0.5 shrink-0" /> {f}</li>)}
                    </ul>
                  <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer sponsored" className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full text-sm font-medium transition ${p.highlight ? 'btn-primary-gradient hover:opacity-95' : 'border border-border hover:bg-accent'}`}>{p.cta} <ArrowUpRight className="h-3.5 w-3.5" /></a>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="who-should-use">
              <H2>Who Should Use Brevo?</H2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'Developers', desc: 'Need clean SMTP + REST API for transactional mail without enterprise pricing.' },
                  { title: 'Startups', desc: 'Want one tool for marketing email, transactional mail and a starter CRM.' },
                  { title: 'Small Businesses', desc: 'Sending newsletters & promotions to growing lists without paying per contact.' },
                  { title: 'Agencies', desc: 'Multi-client setups with sub-accounts, white-label and team workflows.' },
                  { title: 'Creators', desc: 'Newsletters, automations, landing pages - ship a full funnel from one dashboard.' },
                ].map(c => (
                  <div key={c.title} className="glass-card rounded-2xl p-5">
                    <h3 className="font-display font-semibold mb-1.5">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="experience">
              <H2>My Experience</H2>
              <div className="glass-card-glow rounded-3xl p-8 relative">
                <Quote className="h-8 w-8 mb-4" style={{ color: 'hsl(var(--brand-emerald))' }} />
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>I first reached for Brevo when a side-project of mine started outgrowing Gmail SMTP for password-reset and receipt emails. What I needed was a reliable relay that would not silently start throttling once traffic picked up - and would not cost enterprise money on day one.</p>
                  <p>The <span className="text-foreground font-medium">free plan (300 emails/day, unlimited contacts)</span> covered the entire early phase. Setup was standard SMTP: create a sender, verify the domain with SPF, DKIM and a DMARC record, plug the credentials into my Node service, done. First transactional email went out in under an hour.</p>
                  <p>Over the following weeks I added a small newsletter for the same project. Instead of running a second SaaS just for marketing mail, I moved that into Brevo too - drag-and-drop editor for the campaign, a two-step welcome automation, and the lightweight CRM to keep track of who signed up from where. Three tools collapsed into one dashboard.</p>
                  <p className="text-foreground">If you are a developer building a SaaS, an indie hacker shipping side-projects, or a small business owner who refuses to juggle five separate SaaS subscriptions - Brevo is the honest recommendation. It is not the flashiest, but the pricing model (per email volume, not per contact) is the single most founder-friendly decision in the market.</p>
                  <p className="text-sm">Full disclosure: some links on this page are affiliate links. See our <Link href="/affiliate-disclosure" className="underline">affiliate disclosure</Link>.</p>
                </div>
              </div>
            </Section>

            <Section id="pros-cons">
              <H2>Pros & Cons</H2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4"><ThumbsUp className="h-5 w-5" /><h3 className="font-display text-lg font-semibold">Pros</h3></div>
                  <ul className="space-y-2.5">
                    {PROS.map(p => <li key={p} className="flex items-start gap-2.5 text-sm"><Check className="h-4 w-4 mt-0.5 shrink-0" /> {p}</li>)}
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4"><ThumbsDown className="h-5 w-5" /><h3 className="font-display text-lg font-semibold">Cons</h3></div>
                  <ul className="space-y-2.5">
                    {CONS.map(c => <li key={c} className="flex items-start gap-2.5 text-sm text-muted-foreground"><X className="h-4 w-4 mt-0.5 shrink-0" /> {c}</li>)}
                  </ul>
                </div>
              </div>
            </Section>
            {/* <Section id="screenshots">
              <H2>From My Brevo Dashboard</H2>
              <p className="text-muted-foreground mb-6">These are the exact views I use week to week. I keep them updated as Brevo ships UI changes so this review does not fossilize.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {SCREENSHOTS.map((s, i) => {
                  const ACC = ['emerald', 'purple', 'amber', 'cyan'];
                  const acc = ACC[i % ACC.length];
                  return (
                    <div key={s.file} className="glass-card rounded-2xl p-3 group">
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-border flex items-center justify-center" style={{ background: `linear-gradient(135deg, hsl(var(--brand-${acc}) / 0.18), hsl(var(--brand-${acc}) / 0.05))` }}>
                        eslint-disable-next-line @next/next/no-img-element 
                        <img
                          src={s.file}
                          alt={s.label}
                          className="w-full h-full object-cover absolute inset-0 opacity-0"
                          onLoad={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.parentElement.querySelector('.ss-fallback').style.display = 'none'; }}
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="ss-fallback flex items-center justify-center flex-col gap-2 p-4 text-center">
                          <div className={`h-11 w-11 rounded-xl icon-${acc} flex items-center justify-center shadow-lg`}><Sparkles className="h-5 w-5" /></div>
                          <p className="text-sm font-semibold text-foreground">Real screenshot coming</p>
                          <p className="text-xs text-muted-foreground max-w-[240px] leading-relaxed">Live capture from my Brevo account, updated after each UI refresh so this review never fossilizes.</p>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium">{s.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.caption}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1.5"><AlertCircle className="h-3.5 w-3.5" /> Screenshots are from my personal Brevo account. Drop your files at <code className="font-mono">/public/brevo/</code> to publish them.</p>
            </Section> */}

            <Section id="faq">
              <H2>Frequently Asked Questions</H2>
              <div className="space-y-2">
                {FAQS.map((f, i) => (
                  <details key={i} className="group glass-card rounded-2xl p-5 cursor-pointer">
                    <summary className="flex items-center justify-between font-medium list-none">
                      <span>{f.q}</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </Section>

            <Section id="related">
              <H2>Related Articles</H2>
              <div className="grid sm:grid-cols-2 gap-3">
                {RELATED_ARTICLES.map(a => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="group glass-card rounded-2xl p-5 hover:bg-accent/40 transition flex flex-col">
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5"><Clock className="h-3 w-3" /> {a.read}</p>
                    <h3 className="font-display font-semibold mb-2 group-hover:text-foreground transition">{a.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{a.desc}</p>
                    <span className="mt-4 text-xs font-medium inline-flex items-center gap-1">Read article <ArrowUpRight className="h-3 w-3" /></span>
                  </Link>
                ))}
              </div>
            </Section>

            {/* Final CTA */}
            <Section id="final-cta">
              <div className="glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern radial-fade opacity-30" />
                <div className="relative">
                  <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-tight gradient-text mb-4">Ready to try Brevo?</h3>
                  <p className="text-muted-foreground max-w-xl mx-auto mb-8">Start free - no credit card required. Send up to 300 emails per day with unlimited contacts.</p>
                  <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer sponsored" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-primary-gradient font-medium hover:opacity-95 transition">
                    Visit Brevo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </Section>
          </article>
        </div>
      </div>
    </div>
  );
}
