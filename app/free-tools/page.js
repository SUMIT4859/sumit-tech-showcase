import Link from 'next/link';
import { FREE_TOOLS_LIST } from '@/lib/data/hub';
import { Sparkles, ShieldAlert, Eye, Clock, Wrench, ArrowRight } from 'lucide-react';

const ICONS = { Sparkles, ShieldAlert, Eye, Clock, Wrench };

export const metadata = {
  title: 'Free Email Marketing Tools',
  description: 'Free, no-signup tools for email senders - subject line generator, spam checker, HTML email preview and send-time calculator. All run in your browser.',
  alternates: { canonical: '/free-tools' },
};

export default function FreeToolsPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern radial-fade opacity-40" />
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest mb-6">
              <Wrench className="h-3 w-3" /> Free Tools
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight gradient-text">Tools that ship faster.</h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl">Free, fast, no signup. Built for email senders who want answers in seconds, not signups.</p>
          </div>
        </div>
      </section>

      <section className="container mt-16">
        <div className="grid md:grid-cols-2 gap-4">
          {FREE_TOOLS_LIST.map(t => {
            const Icon = ICONS[t.icon] || Wrench;
            return (
              <Link key={t.slug} href={`/free-tools/${t.slug}`} className="group glass-card rounded-2xl p-8 hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                {t.tag && <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-foreground text-background">{t.tag}</span>}
                <div className="h-12 w-12 rounded-xl bg-foreground text-background flex items-center justify-center mb-5 group-hover:scale-110 transition"><Icon className="h-5 w-5" /></div>
                <h3 className="font-display text-xl font-semibold mb-2">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium">Open tool <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
