import Link from 'next/link';
import Image from "next/image";
import { HUB_SECTIONS } from '@/lib/data/hub';
import { Star, DollarSign, Layers, Send, Code2, Zap, Shield, FileText, GitCompare, HelpCircle, Briefcase, Wrench, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { AFFILIATE } from '@/lib/config/affiliate';

const ICONS = { Star, DollarSign, Layers, Send, Code2, Zap, Shield, FileText, GitCompare, HelpCircle, Briefcase, Wrench };

export const metadata = {
  title: 'Email Hub - Brevo, SMTP & Email Marketing Guides',
  description: 'The complete resource for learning email marketing with Brevo - reviews, pricing, features, SMTP guides, automation, deliverability, templates, comparisons and FAQs.',
  alternates: { canonical: '/email-hub' },
};

export default function EmailHubPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern radial-fade opacity-40" />
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles className="h-3 w-3" /> Email Hub
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight gradient-text">Learn email marketing, properly.</h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl">The complete reference for shipping email - Brevo guides, SMTP tutorials, deliverability, automation and honest comparisons. Everything you need in one place.</p>
          </div>
        </div>
      </section>

      {/* Brevo featured card */}
      <section className="container mt-16">
        <Link href="/tools/brevo" className="group block rounded-3xl glass-card p-8 md:p-12 relative overflow-hidden hover:bg-accent/20 transition">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl" style={{ background: '#0B996E25' }} />
          <div className="relative grid md:grid-cols-12 gap-6 items-center">

            <div className="md:col-span-2">
              <div
                className="h-20 w-20 rounded-2xl bg-white shadow-lg flex items-center justify-center p-3"
              >
                <Image
                  src="/logos/Brevo.svg"
                  alt="Brevo Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Featured Platform</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight gradient-text mb-3">Brevo - the email platform we recommend.</h2>
              <p className="text-muted-foreground text-lg">All-in-one email marketing, transactional SMTP, automation and CRM. Best pricing model for growing senders.</p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium" style={{ background: '#0B996E' }}>Read full review <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </div>
          </div>
        </Link>
      </section>

      {/* All sections */}
      <section className="container mt-16">
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Browse by topic</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {HUB_SECTIONS.map(s => {
            const Icon = ICONS[s.icon] || Sparkles;
            return (
              <Link key={s.slug} href={s.href} className="group glass-card rounded-2xl p-6 h-full hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1 relative">
                {s.tag && <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-foreground text-background">{s.tag}</span>}
                <div className="h-11 w-11 rounded-xl bg-foreground text-background flex items-center justify-center mb-5 group-hover:scale-110 transition"><Icon className="h-5 w-5" /></div>
                <h3 className="font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium">Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" /></span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="container mt-16">
        <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">{AFFILIATE.brevo.disclosure}</p>
      </section>
    </div>
  );
}
