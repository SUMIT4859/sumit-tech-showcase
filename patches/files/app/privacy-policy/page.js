import Link from 'next/link';
import { Shield, Mail } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Sumitkumar Pandit\'s email marketing hub (codedbysumit.com) collects, uses and protects your data.',
  alternates: { canonical: '/privacy-policy' },
};

const updated = 'June 2025';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-emerald text-xs font-mono uppercase tracking-widest mb-6"><Shield className="h-3 w-3" /> Legal</div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight gradient-text mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {updated}</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none mt-10 space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">1. Who we are</h2>
            <p className="text-muted-foreground leading-relaxed">This website (<b>codedbysumit.com</b>) is owned and operated by <b>Sumitkumar Pandit</b>, an independent developer based in India. You can reach us at <a className="underline" href="mailto:hello@codedbysumit.com">hello@codedbysumit.com</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">2. What we collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><b>Email address</b> - only if you voluntarily subscribe to our newsletter.</li>
              <li><b>Analytics data</b> - anonymous page views, referrers and device info via Google Analytics, Microsoft Clarity and Vercel Analytics.</li>
              <li><b>Cookies</b> - required for theme preferences and analytics. No third-party ad cookies are set.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">3. How we use it</h2>
            <p className="text-muted-foreground leading-relaxed">Emails are used solely to send our monthly newsletter about email marketing, Brevo, developer tools and product updates. Analytics data is used to understand which content is useful and to improve the site. We never sell your data.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">4. Third-party services</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><b>Brevo</b> - newsletter delivery.</li>
              <li><b>Vercel</b> - hosting &amp; analytics.</li>
              <li><b>Google Analytics</b> &amp; <b>Microsoft Clarity</b> - anonymous usage analytics.</li>
              <li><b>Affiliate networks</b> - some outbound links (see our <Link href="/affiliate-disclosure" className="underline">affiliate disclosure</Link>).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">5. Your rights (GDPR &amp; CCPA)</h2>
            <p className="text-muted-foreground leading-relaxed">You may request access to, correction of, or deletion of your personal data at any time by emailing <a className="underline" href="mailto:hello@codedbysumit.com">hello@codedbysumit.com</a>. Newsletter subscribers can unsubscribe with one click from any email we send.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">6. Data retention</h2>
            <p className="text-muted-foreground leading-relaxed">Newsletter data is kept until you unsubscribe. Analytics data is retained for 14 months (Google Analytics default). No sensitive personal data is stored on this site.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">7. Children</h2>
            <p className="text-muted-foreground leading-relaxed">This site is not directed at children under 13, and we do not knowingly collect any information from children.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">8. Changes</h2>
            <p className="text-muted-foreground leading-relaxed">We may update this policy periodically. The “Last updated” date at the top always reflects the latest version.</p>
          </section>

          <div className="glass-card rounded-2xl p-6 mt-10 flex gap-4 items-start">
            <div className="h-10 w-10 rounded-xl icon-emerald flex items-center justify-center shrink-0"><Mail className="h-4 w-4" /></div>
            <div>
              <p className="font-medium">Questions about your data?</p>
              <p className="text-sm text-muted-foreground">Write to <a href="mailto:hello@codedbysumit.com" className="underline">hello@codedbysumit.com</a> - we typically reply within 48 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
