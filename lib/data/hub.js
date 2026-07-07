// Email Hub structure - landing topics that anchor the whole site

export const HUB_SECTIONS = [
  { slug: 'brevo-review', title: 'Brevo Review', desc: 'Honest, balanced review of Brevo - features, pricing, deliverability, automation.', icon: 'Star', href: '/tools/brevo', tag: 'Featured' },
  { slug: 'brevo-pricing', title: 'Brevo Pricing', desc: 'Every plan compared, hidden costs revealed, and which tier fits your stage.', icon: 'DollarSign', href: '/tools/brevo#pricing' },
  { slug: 'brevo-features', title: 'Brevo Features', desc: 'All 8 core features explained - email, transactional, automation, CRM, SMS, more.', icon: 'Layers', href: '/tools/brevo#features' },
  { slug: 'smtp', title: 'SMTP Guides', desc: 'Production SMTP - setup, deliverability, debugging, common gotchas.', icon: 'Send', href: '/blog/setup-brevo-smtp' },
  { slug: 'api-guides', title: 'API Guides', desc: 'REST API integration patterns for transactional and marketing email.', icon: 'Code2', href: '/blog' },
  { slug: 'automation', title: 'Email Automation', desc: 'Welcome flows, drip campaigns, behavioral triggers, lifecycle marketing.', icon: 'Zap', href: '/blog' },
  { slug: 'deliverability', title: 'Deliverability', desc: 'The 12-point system that gets your email out of spam and into the inbox.', icon: 'Shield', href: '/resources/dns-guide-spf-dkim-dmarc' },
  { slug: 'templates', title: 'Templates', desc: 'Production-ready email templates - copy, customize, ship.', icon: 'FileText', href: '/templates' },
  { slug: 'comparisons', title: 'Comparisons', desc: 'Brevo vs Mailchimp, vs SendGrid, vs Resend - real differences, not feature lists.', icon: 'GitCompare', href: '/blog/brevo-vs-mailchimp' },
  { slug: 'faqs', title: 'FAQs', desc: 'The most common questions about Brevo, SMTP and email marketing - answered.', icon: 'HelpCircle', href: '/tools/brevo#faq' },
  { slug: 'case-studies', title: 'Case Studies', desc: 'How real teams ship email - SaaS, e-commerce, indie hackers, agencies.', icon: 'Briefcase', href: '/blog' },
  { slug: 'free-tools', title: 'Free Tools', desc: 'Subject line generator, spam checker, HTML preview, send-time calculator.', icon: 'Wrench', href: '/free-tools' },
];

export const FREE_TOOLS_LIST = [
  { slug: 'subject-line-generator', title: 'Subject Line Generator', desc: 'Generate 20+ proven subject line variations from a topic - free, no signup.', icon: 'Sparkles', tag: 'Most Popular' },
  { slug: 'spam-checker', title: 'Spam Checker', desc: 'Paste your subject + body. We flag the spam triggers that hurt your inbox rate.', icon: 'ShieldAlert', tag: 'Free' },
  { slug: 'html-email-preview', title: 'HTML Email Preview', desc: 'Paste your HTML email and preview it instantly in a sandboxed frame.', icon: 'Eye', tag: 'Free' },
  { slug: 'email-timing-calculator', title: 'Send-Time Calculator', desc: 'Find the best send time for your audience across timezones.', icon: 'Clock', tag: 'Free' },
{
  slug: "email-header-analyzer",
  title: "Email Header Analyzer",
  desc: "Paste raw email headers to identify SPF, DKIM, DMARC, routing delays and authentication issues.",
  icon: "ShieldAlert",
  tag: "NEW",
}

];

export const getFreeTool = (slug) => FREE_TOOLS_LIST.find(t => t.slug === slug);
