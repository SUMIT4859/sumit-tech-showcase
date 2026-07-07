import Link from 'next/link';
import { DollarSign, Mail, Check } from 'lucide-react';

export const metadata = {
  title: 'Affiliate Disclosure',
  description: 'How affiliate links work on codedbysumit.com - full transparency, no hidden endorsements.',
  alternates: { canonical: '/affiliate-disclosure' },
};

const updated = 'June 2025';

export default function AffiliateDisclosurePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-amber text-xs font-mono uppercase tracking-widest mb-6"><DollarSign className="h-3 w-3" /> Legal &amp; Transparency</div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight gradient-text break-words mb-4">Affiliate Disclosure</h1>
        <p className="text-muted-foreground">Last updated: {updated}</p>

        <div className="glass-card-glow rounded-3xl p-6 md:p-8 mt-10">
          <p className="text-lg text-foreground leading-relaxed">
            <b>codedbysumit.com</b> participates in affiliate programs. This means we <b>may earn a commission</b> when you sign up for or purchase a product through certain outbound links on this site — <b>at no additional cost to you</b>.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">Our promise</h2>
            <ul className="space-y-2.5">
              {[
                'We only link to products we have used personally or tested extensively.',
                'Affiliate commission never changes our opinion. A bad product does not become good because it pays a commission.',
                'Where a product has an affiliate program and a superior competitor does not, we still recommend the better product.',
                'All review pages carry a visible disclosure notice near the top.',
                'Sponsored posts, if any, are labelled clearly as “Sponsored” and never disguised as organic reviews.',
              ].map(t => (
                <li key={t} className="flex items-start gap-2.5 text-muted-foreground"><Check className="h-4 w-4 mt-1 shrink-0" style={{ color: 'hsl(var(--brand-emerald))' }} /> {t}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">Programs we participate in</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">As of {updated}, we may earn a commission from the following (list is updated when it changes):</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><b>Brevo</b> - email marketing &amp; transactional platform</li>
              <li>Other developer &amp; SaaS tools (Namecheap, Cloudflare, Hostinger and similar) are being evaluated — clearly labelled if/when active.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">Why we do this</h2>
            <p className="text-muted-foreground leading-relaxed">Running this site costs money (domain, hosting, tools, time). Affiliate commissions let us keep every article, tool and template <b>100% free with no paywall</b>. If you find our content useful, using our affiliate links is a free way to support the work — and we appreciate it.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">FTC compliance</h2>
            <p className="text-muted-foreground leading-relaxed">This disclosure is provided in accordance with the U.S. Federal Trade Commission&apos;s 16 CFR, Part 255: “Guides Concerning the Use of Endorsements and Testimonials in Advertising.”</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">Questions?</h2>
            <p className="text-muted-foreground leading-relaxed">If anything above is unclear, or you want to know whether a specific link is an affiliate link, email us at <a href="mailto:hello@codedbysumit.com" className="underline">hello@codedbysumit.com</a>.</p>
          </section>

          <div className="glass-card rounded-2xl p-6 mt-6 flex gap-4 items-start">
            <div className="h-10 w-10 rounded-xl icon-amber flex items-center justify-center shrink-0"><Mail className="h-4 w-4" /></div>
            <div>
              <p className="font-medium">Prefer to skip the affiliate link?</p>
              <p className="text-sm text-muted-foreground">You are always welcome to Google the product name directly and sign up organically. Our content remains the same either way.</p>
            </div>
          </div>

          <div className="pt-8 text-sm">
            See also: <Link href="/privacy-policy" className="underline">Privacy Policy</Link> · <Link href="/terms" className="underline">Terms</Link> · <Link href="/about-author" className="underline">About the Author</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
