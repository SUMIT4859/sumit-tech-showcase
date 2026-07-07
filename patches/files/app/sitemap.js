// Sitemap - all routes for SEO. Add new ones here.
import { TOOLS } from '@/lib/data/site';
import { POSTS } from '@/lib/data/blog';
import { FREE_TOOLS_LIST } from '@/lib/data/hub';
import { TEMPLATES } from '@/lib/data/templates';
import { RESOURCES } from '@/lib/data/resources';

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://codedbysumit.com';
  const now = new Date();
  const route = (path, priority = 0.7, freq = 'weekly') => ({ url: `${base}${path}`, lastModified: now, changeFrequency: freq, priority });

  return [
    route('', 1.0, 'daily'),
    route('/email-hub', 0.9, 'weekly'),
    route('/blog', 0.8, 'weekly'),
    route('/free-tools', 0.8, 'monthly'),
    route('/templates', 0.8, 'monthly'),
    route('/resources', 0.8, 'monthly'),
    route('/tools', 0.7, 'monthly'),
    route('/portfolio', 0.7, 'monthly'),
    // Trust & legal (Brevo requires these):
    route('/about-author', 0.85, 'monthly'),
    route('/privacy-policy', 0.5, 'yearly'),
    route('/terms', 0.5, 'yearly'),
    route('/affiliate-disclosure', 0.7, 'yearly'),
    ...TOOLS.map(t => route(`/tools/${t.slug}`, t.slug === 'brevo' ? 0.95 : 0.6, 'monthly')),
    ...POSTS.map(p => route(`/blog/${p.slug}`, 0.7, 'monthly')),
    ...FREE_TOOLS_LIST.map(t => route(`/free-tools/${t.slug}`, 0.75, 'monthly')),
    ...TEMPLATES.map(t => route(`/templates/${t.slug}`, 0.65, 'monthly')),
    ...RESOURCES.map(r => route(`/resources/${r.slug}`, 0.7, 'monthly')),
  ];
}
