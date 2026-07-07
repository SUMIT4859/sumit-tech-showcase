import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FREE_TOOLS_LIST, getFreeTool } from '@/lib/data/hub';
import SubjectLineGenerator from './subject-line-generator';
import SpamChecker from './spam-checker';
import HtmlPreview from './html-preview';
import TimingCalculator from './timing-calculator';
import { ChevronRight } from 'lucide-react';
import EmailHeaderAnalyzer from './email-header-analyzer';

export async function generateStaticParams() { return FREE_TOOLS_LIST.map(t => ({ slug: t.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = getFreeTool(slug);
  if (!t) return {};
  return { title: t.title, description: t.desc, alternates: { canonical: `/free-tools/${slug}` } };
}

const COMPONENTS = {
  'subject-line-generator': SubjectLineGenerator,
  'spam-checker': SpamChecker,
  'html-email-preview': HtmlPreview,
  'email-timing-calculator': TimingCalculator,
  'email-header-analyzer': EmailHeaderAnalyzer,
};

export default async function FreeToolPage({ params }) {
  const { slug } = await params;
  const tool = getFreeTool(slug);
  if (!tool) return notFound();
  const Component = COMPONENTS[slug];
  return (
    <div className="pt-28 pb-24">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href="/free-tools" className="hover:text-foreground transition">Free Tools</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{tool.title}</span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight gradient-text">{tool.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{tool.desc}</p>
        <div className="mt-10">
          {Component ? <Component /> : <div className="text-muted-foreground">Coming soon.</div>}
        </div>
      </div>
    </div>
  );
}
