import Link from 'next/link';
import { RESOURCES } from '@/lib/data/resources';
import { BookOpen, Shield, CheckSquare, Code, ArrowUpRight, Sparkles, Clock } from 'lucide-react';

const ICONS = { BookOpen, Shield, CheckSquare, Code };

export const metadata = {
  title: 'Email Marketing Resources - Glossary, Checklists & DNS Guides',
  description: 'Curated email marketing references - glossary, SMTP setup checklist, DNS authentication guide (SPF, DKIM, DMARC) and developer email checklist.',
  alternates: { canonical: '/resources' },
};

export default function ResourcesPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern radial-fade opacity-40" />
        <div className="container relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="h-3 w-3" /> Resources
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight gradient-text">Reference, not fluff.</h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground">The definitions, checklists and authentication guides you will actually bookmark and use.</p>
        </div>
      </section>

      <section className="container mt-16">
        <div className="grid md:grid-cols-2 gap-4">
          {RESOURCES.map(r => {
            const Icon = ICONS[r.icon] || BookOpen;
            return (
              <Link key={r.slug} href={`/resources/${r.slug}`} className="group glass-card rounded-2xl p-8 hover:bg-accent/40 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-foreground text-background flex items-center justify-center"><Icon className="h-5 w-5" /></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{r.type}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5"><Clock className="h-3 w-3" /> {r.readTime}</span>
                  <span className="text-xs font-medium inline-flex items-center gap-1">Open <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
