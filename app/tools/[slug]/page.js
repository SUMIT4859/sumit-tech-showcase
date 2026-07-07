import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TOOLS } from '@/lib/data/site';
import BrevoPage from './brevo-page';
import GenericToolPage from './generic-tool-page';

export async function generateStaticParams() {
  return TOOLS.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = TOOLS.find(t => t.slug === slug);
  if (!tool) return {};
  const isBrevo = slug === 'brevo';
  return {
    title: isBrevo ? 'Brevo Review - Email Marketing & Transactional Email Platform' : `${tool.name} Review - ${tool.category}`,
    description: isBrevo
      ? 'A balanced, honest review of Brevo - email marketing, transactional SMTP, automation, CRM and SMS for developers, startups and businesses.'
      : `${tool.name} - ${tool.tagline} Honest review, features, pricing, pros & cons, and who should use it.`,
    alternates: { canonical: `/tools/${slug}` },
    openGraph: {
      title: `${tool.name} Review`,
      description: tool.tagline,
      type: 'article',
      url: `/tools/${slug}`,
    },
    twitter: { card: 'summary_large_image', title: `${tool.name} Review`, description: tool.tagline },
  };
}

export default async function ToolPage({ params }) {
  const { slug } = await params;
  const tool = TOOLS.find(t => t.slug === slug);
  if (!tool) return notFound();
  if (slug === 'brevo') return <BrevoPage tool={tool} />;
  return <GenericToolPage tool={tool} />;
}
