import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TEMPLATES } from '@/lib/data/templates';
import TemplateView from './template-view';
import { ChevronRight } from 'lucide-react';

export async function generateStaticParams() { return TEMPLATES.map(t => ({ slug: t.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = TEMPLATES.find(x => x.slug === slug);
  if (!t) return {};
  return { title: `${t.name} Template`, description: t.desc, alternates: { canonical: `/templates/${slug}` } };
}

export default async function TemplatePage({ params }) {
  const { slug } = await params;
  const t = TEMPLATES.find(x => x.slug === slug);
  if (!t) return notFound();
  const related = TEMPLATES.filter(x => x.slug !== slug && x.category === t.category).slice(0, 3);
  return (
    <div className="pt-28 pb-24">
      <div className="container">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href="/templates" className="hover:text-foreground transition">Templates</Link>
          <ChevronRight className="h-3 w-3" />
          <span>{t.category}</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{t.name}</span>
        </div>
        <TemplateView template={t} related={related} />
      </div>
    </div>
  );
}
