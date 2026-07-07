// Resources - glossary, checklists, DNS guides. No DB, just data.

export const GLOSSARY = [
  { term: 'SMTP', def: 'Simple Mail Transfer Protocol. The standard protocol for sending email between servers. Used by transactional email providers like Brevo, SendGrid and Postmark.' },
  { term: 'SPF', def: 'Sender Policy Framework. A DNS TXT record that lists which mail servers are authorized to send email from your domain.' },
  { term: 'DKIM', def: 'DomainKeys Identified Mail. A cryptographic signature added to outgoing email so receiving servers can verify the message was not tampered with.' },
  { term: 'DMARC', def: 'Domain-based Message Authentication, Reporting and Conformance. A policy that tells receiving servers what to do with email failing SPF or DKIM checks.' },
  { term: 'Bounce Rate', def: 'Percentage of sent emails that could not be delivered. Hard bounces are permanent failures, soft bounces are temporary.' },
  { term: 'Open Rate', def: 'Percentage of recipients who opened an email. Note: less reliable since Apple Mail Privacy Protection masks opens by default.' },
  { term: 'CTR', def: 'Click-Through Rate. Percentage of recipients who clicked at least one link in your email.' },
  { term: 'CTOR', def: 'Click-To-Open Rate. Clicks divided by opens. A purer engagement signal than CTR.' },
  { term: 'Deliverability', def: 'Whether your email reaches the inbox vs the spam folder. Influenced by sender reputation, content, authentication and engagement.' },
  { term: 'Sender Reputation', def: 'A score mailbox providers (Gmail, Outlook, Yahoo) assign to your sending domain and IP based on past behavior.' },
  { term: 'Warm-up', def: 'The process of gradually increasing sending volume from a new domain or IP to build sender reputation safely.' },
  { term: 'Transactional Email', def: 'Email triggered by a user action - password reset, receipt, verification. Distinct from marketing email.' },
  { term: 'Marketing Email', def: 'Promotional or informational email sent to a list, typically requires explicit consent (opt-in).' },
  { term: 'Double Opt-in', def: 'A subscription flow where a confirmation email is sent before adding the user to the list. Improves list quality.' },
  { term: 'List Segmentation', def: 'Splitting your subscriber list into groups based on attributes or behavior to send more relevant emails.' },
  { term: 'Drip Campaign', def: 'A sequence of pre-written emails sent on a schedule or triggered by user actions.' },
  { term: 'A/B Test', def: 'Sending two variants of an email to a small portion of your list to determine which performs better before sending to the rest.' },
  { term: 'Webhook', def: 'A real-time HTTP callback from your email provider to your app when events happen (delivered, opened, bounced).' },
  { term: 'API Key', def: 'A secret token used to authenticate requests to an email provider\'s API. Keep it server-side only.' },
  { term: 'Suppression List', def: 'A list of email addresses that should never be emailed - unsubscribes, bounces, complaints.' },
  { term: 'CAN-SPAM', def: 'US law governing commercial email. Requires accurate headers, identifying subject lines, postal address and an unsubscribe mechanism.' },
  { term: 'GDPR', def: 'EU regulation governing personal data including email. Requires explicit consent for marketing email.' },
  { term: 'Hard Bounce', def: 'A permanent delivery failure - invalid address, blocked domain. Should never be retried.' },
  { term: 'Soft Bounce', def: 'A temporary delivery failure - mailbox full, server down. Safe to retry.' },
  { term: 'Spam Trap', def: 'An email address used by ISPs and blocklists to identify senders with poor list hygiene.' },
  { term: 'Plain Text Email', def: 'An email with no HTML formatting. Often has better deliverability for transactional emails.' },
  { term: 'MTA', def: 'Mail Transfer Agent. The server software that actually sends and routes email (Postfix, Brevo\'s relay, etc.).' },
  { term: 'IP Reputation', def: 'How mailbox providers score the sending IP address based on past behavior.' },
  { term: 'Dedicated IP', def: 'An IP address used exclusively by one sender. Recommended for high-volume sending.' },
  { term: 'Shared IP', def: 'An IP address used by multiple senders, common on starter email plans. Reputation is collective.' },
];

export const RESOURCES = [
  { slug: 'email-marketing-glossary', title: 'Email Marketing Glossary', desc: '30+ essential email marketing terms explained simply - from SMTP to DMARC.', icon: 'BookOpen', type: 'Glossary', readTime: '12 min' },
  { slug: 'dns-guide-spf-dkim-dmarc', title: 'DNS Guide: SPF, DKIM and DMARC', desc: 'Complete email authentication setup walkthrough. The 3 DNS records every sender needs.', icon: 'Shield', type: 'Guide', readTime: '15 min' },
  { slug: 'smtp-setup-checklist', title: 'SMTP Setup Checklist', desc: 'A 12-point checklist for shipping transactional email correctly the first time.', icon: 'CheckSquare', type: 'Checklist', readTime: '6 min' },
  { slug: 'developer-email-checklist', title: 'Developer Email Checklist', desc: 'Everything a dev needs to remember when integrating email - templates, webhooks, retries.', icon: 'Code', type: 'Checklist', readTime: '8 min' },
];

export const SMTP_CHECKLIST = [
  { title: 'Pick an SMTP provider', desc: 'Brevo, Postmark, Resend or AWS SES depending on volume and budget.', done: false },
  { title: 'Verify your sending domain', desc: 'Add the domain inside your provider dashboard and trigger verification.', done: false },
  { title: 'Configure SPF record', desc: 'Add a TXT record to your DNS listing your provider as authorized to send.', done: false },
  { title: 'Configure DKIM record', desc: 'Add the provider\'s DKIM public key as a TXT record. Enables signature verification.', done: false },
  { title: 'Configure DMARC record', desc: 'Start with p=none for monitoring, move to p=quarantine then p=reject as you gain confidence.', done: false },
  { title: 'Set up a dedicated subdomain', desc: 'Use mail.yourdomain.com for sending - keeps marketing and transactional reputations separate.', done: false },
  { title: 'Implement webhooks', desc: 'Listen for delivered, opened, bounced and complained events to keep your list clean.', done: false },
  { title: 'Add an unsubscribe link', desc: 'Required for marketing email. One-click unsubscribe is now mandatory per Gmail / Yahoo rules.', done: false },
  { title: 'Configure bounce handling', desc: 'Auto-suppress hard bounces. Retry soft bounces 1-3 times then suppress.', done: false },
  { title: 'Plan IP warm-up', desc: 'If on a dedicated IP, ramp volume gradually over 2-4 weeks to build reputation.', done: false },
  { title: 'Test deliverability', desc: 'Use Mail Tester or Postmark Spam Check before each major campaign.', done: false },
  { title: 'Monitor reputation', desc: 'Watch Google Postmaster Tools and your provider\'s reputation dashboard weekly.', done: false },
];

export const DEV_EMAIL_CHECKLIST = [
  { title: 'Server-side only API keys', desc: 'Never expose SMTP credentials or API keys in client code. Use env vars on the backend only.' },
  { title: 'Use templates, not string concatenation', desc: 'Server-rendered templates with variables. Easier to maintain, harder to break.' },
  { title: 'Implement retry logic', desc: 'Wrap sends in exponential backoff. Email providers go down briefly - your app should not.' },
  { title: 'Queue heavy sends', desc: 'Welcome flows, password resets - send via a job queue (BullMQ, Inngest) so HTTP requests stay fast.' },
  { title: 'Subscribe to webhooks', desc: 'Track delivered, opened, clicked, bounced, complained events. Feed back into your DB.' },
  { title: 'Honor unsubscribes immediately', desc: 'Even on the free tier - remove suppressed contacts from your active list within minutes.' },
  { title: 'Test in staging with a real provider', desc: 'Use a separate sub-account or sandbox - never send tests to real customers.' },
  { title: 'Plaintext fallback', desc: 'Always include a text/plain version. Improves deliverability and accessibility.' },
  { title: 'Inline CSS', desc: 'Gmail strips style blocks. Use a tool like Juice or your provider\'s template inliner.' },
  { title: 'Set Reply-To headers', desc: 'noreply@ kills reputation. Use a real, monitored address that humans can reply to.' },
];

export const getResource = (slug) => RESOURCES.find(r => r.slug === slug);
