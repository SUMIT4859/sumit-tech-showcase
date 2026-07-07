import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RESOURCES, GLOSSARY, SMTP_CHECKLIST, DEV_EMAIL_CHECKLIST, getResource } from '@/lib/data/resources';
import { ChevronRight, Check, Shield, BookOpen, CheckSquare, Code } from 'lucide-react';
import GlossarySearch from './glossary-search';

export async function generateStaticParams() { return RESOURCES.map(r => ({ slug: r.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) return {};
  return { title: r.title, description: r.desc, alternates: { canonical: `/resources/${slug}` } };
}

function GlossaryContent() {
  return <GlossarySearch entries={GLOSSARY} />;
}

function DnsGuide() {
  const records = [
    { type: 'SPF', name: '@ (root domain)', value: 'v=spf1 include:spf.brevo.com -all', desc: 'Lists which mail servers can send email from your domain. -all means strict: anything not listed is rejected.' },
    { type: 'DKIM', name: 'mail._domainkey', value: 'v=DKIM1; k=rsa; p=<public_key_from_provider>', desc: 'Cryptographic signature that proves the email was not tampered with in transit. Get the public key from your email provider dashboard.' },
    { type: 'DMARC', name: '_dmarc', value: 'v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com', desc: 'Policy + reporting. Start with p=none to monitor for 2 weeks, then move to p=quarantine, finally p=reject when confident.' },
  ];
  return (
    <div className="space-y-12">
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed">Three DNS records protect your domain reputation and stop spammers from forging email from your address. Set them up once - they pay back forever.</p>
      </div>

      {records.map(r => (
        <div key={r.type} className="glass-card rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-foreground text-background flex items-center justify-center font-display font-bold text-xs">{r.type}</div>
            <h2 className="font-display text-2xl font-semibold">{r.type}</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-5">{r.desc}</p>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Record Type</p>
              <p className="font-mono text-sm">TXT</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Name / Host</p>
              <p className="font-mono text-sm">{r.name}</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Value</p>
              <pre className="font-mono text-xs p-3 rounded-lg bg-foreground/5 border border-border overflow-x-auto">{r.value}</pre>
            </div>
          </div>
        </div>
      ))}

      <div className="glass-card rounded-2xl p-7">
        <h3 className="font-display text-xl font-semibold mb-4">Verification</h3>
        <p className="text-muted-foreground mb-4">Use these free tools to verify your records propagated correctly:</p>
        <ul className="space-y-2 text-sm">
          <li>- <a href="https://mxtoolbox.com" target="_blank" rel="noreferrer" className="underline hover:text-foreground">MXToolbox SuperTool</a> - all-in-one DNS lookup</li>
          <li>- <a href="https://www.mail-tester.com" target="_blank" rel="noreferrer" className="underline hover:text-foreground">Mail Tester</a> - send a test email and get a deliverability score</li>
          <li>- <a href="https://postmaster.google.com" target="_blank" rel="noreferrer" className="underline hover:text-foreground">Google Postmaster Tools</a> - track your sender reputation at Gmail</li>
        </ul>
      </div>
    </div>
  );
}

function Checklist({ items, hasSubtitle = true }) {
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="glass-card rounded-2xl p-5 flex items-start gap-4">
          <div className="h-7 w-7 rounded-lg border-2 border-border flex items-center justify-center shrink-0 mt-0.5"><Check className="h-4 w-4 opacity-40" /></div>
          <div className="flex-1">
            <p className="font-display font-semibold">{it.title}</p>
            {hasSubtitle && <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>}
          </div>
          <span className="text-xs font-mono text-muted-foreground shrink-0">{String(i + 1).padStart(2, '0')}</span>
        </div>
      ))}
    </div>
  );
}

export default async function ResourcePage({ params }) {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) return notFound();

  let body;
  if (slug === 'email-marketing-glossary') body = <GlossaryContent />;
  else if (slug === 'dns-guide-spf-dkim-dmarc') body = <DnsGuide />;
  else if (slug === 'smtp-setup-checklist') body = <Checklist items={SMTP_CHECKLIST} />;
  else if (slug === 'developer-email-checklist') body = <Checklist items={DEV_EMAIL_CHECKLIST} />;

  return (
    <div className="pt-28 pb-24">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href="/resources" className="hover:text-foreground transition">Resources</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{r.title}</span>
        </div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{r.type}</p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight gradient-text">{r.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{r.desc}</p>
        <div className="mt-10">{body}</div>
      </div>
    </div>
  );
}
