import Link from 'next/link';
import { FileText, Mail } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service',
  description: 'The rules for using codedbysumit.com - our email marketing hub, free tools and content.',
  alternates: { canonical: '/terms' },
};

const updated = 'June 2025';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-purple text-xs font-mono uppercase tracking-widest mb-6"><FileText className="h-3 w-3" /> Legal</div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight gradient-text mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {updated}</p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">1. Acceptance</h2>
            <p className="text-muted-foreground leading-relaxed">By accessing or using <b>codedbysumit.com</b> (“the site”), you agree to these Terms of Service. If you do not agree, please do not use the site.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">2. Content &amp; intellectual property</h2>
            <p className="text-muted-foreground leading-relaxed">All original articles, guides, code snippets, tools and images on this site are the intellectual property of Sumitkumar Pandit unless stated otherwise. You may quote short excerpts with credit and a link back. Republishing full articles without written permission is not permitted.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">3. Free tools</h2>
            <p className="text-muted-foreground leading-relaxed">Our free tools (Spam Score Checker, Send-Time Calculator, HTML Preview, Subject Line Generator) run entirely in your browser and are provided “as is” without warranty. We are not liable for decisions you make based on their output.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">4. Affiliate links</h2>
            <p className="text-muted-foreground leading-relaxed">Some outbound links on this site are affiliate links. We may earn a commission at no extra cost to you when you sign up through them. See our <Link href="/affiliate-disclosure" className="underline">Affiliate Disclosure</Link> for full details.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">5. Third-party services</h2>
            <p className="text-muted-foreground leading-relaxed">Reviews and tutorials reference third-party platforms (Brevo, Vercel, GitHub, etc.). We are not affiliated with those companies except where explicitly stated, and we are not responsible for their pricing, features or policies changing over time.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">6. No professional advice</h2>
            <p className="text-muted-foreground leading-relaxed">Content on this site is educational. It does not constitute legal, financial, or professional advice. Always verify critical decisions with a qualified expert.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">7. Limitation of liability</h2>
            <p className="text-muted-foreground leading-relaxed">To the fullest extent permitted by law, Sumitkumar Pandit is not liable for any indirect, incidental, or consequential damages arising from your use of the site or its content.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">8. Changes to these terms</h2>
            <p className="text-muted-foreground leading-relaxed">We may update these terms at any time. Continued use of the site after changes means you accept the updated version.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">9. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">Questions about these terms? Email <a href="mailto:hello@codedbysumit.com" className="underline">hello@codedbysumit.com</a>.</p>
          </section>

          <div className="glass-card rounded-2xl p-6 mt-10 flex gap-4 items-start">
            <div className="h-10 w-10 rounded-xl icon-purple flex items-center justify-center shrink-0"><Mail className="h-4 w-4" /></div>
            <div>
              <p className="font-medium">Need clarification?</p>
              <p className="text-sm text-muted-foreground">Write to <a href="mailto:hello@codedbysumit.com" className="underline">hello@codedbysumit.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
