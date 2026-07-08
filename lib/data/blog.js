// Blog data - edit posts here. No database, no CMS, no admin panel needed.
// content is structured blocks: { type, text, items, lang, src, alt }

export const BLOG_CATEGORIES = ['All', 'AI', 'Next.js', 'Node.js', 'MongoDB', 'Web Development', 'Blockchain', 'Web3', 'Career', 'Programming', 'Tutorials', 'Interview Prep', 'Email Marketing'];

const commonBrevoBlocks = (variant) => ({
  'complete-brevo-review-2025': [
    { type: 'p', text: 'Brevo - formerly Sendinblue - is one of the few platforms that genuinely tries to be the operating system for your customer communication. Marketing email, transactional SMTP, SMS, automation, CRM and landing pages, all in one dashboard. In this 2025 review I break down what works, what doesn\'t, and whether it deserves a slot in your stack.' },
    { type: 'h2', text: 'TL;DR' },
    { type: 'p', text: 'Brevo is the best all-in-one email platform for indie founders, developers and small businesses who care about pricing fairness (it bills by emails sent, not contacts stored). It is not the prettiest tool on the market, but it is the most economical for serious senders.' },
    { type: 'h2', text: 'What Brevo Gets Right' },
    { type: 'ul', items: ['Pricing by email volume, not list size - a huge advantage as your list grows.', 'Production-grade SMTP & REST API for transactional email, even on free.', 'Visual automation builder with conditional branches and goal tracking.', 'Built-in CRM and SMS marketing - no need to glue together five tools.', 'EU-hosted, GDPR compliant by default.'] },
    { type: 'h2', text: 'Where It Falls Short' },
    { type: 'ul', items: ['Template designer feels dated compared to Mailchimp or ConvertKit.', 'Reporting is functional but not best-in-class.', 'Advanced segmentation requires the Business plan.'] },
    { type: 'h2', text: 'Who Should Pick Brevo?' },
    { type: 'p', text: 'If you are a developer who needs solid transactional SMTP plus a marketing platform you can grow into - Brevo is the easiest choice in 2025. Solo creators with under 1,000 subscribers can run the full stack on the forever-free plan.' },
    { type: 'quote', text: 'After six months of daily use, the only reason I keep Brevo open in a pinned tab is because it is genuinely useful - no other reason.' },
    { type: 'h2', text: 'Final Verdict' },
    { type: 'p', text: 'Brevo earns a 4.7/5 in this review. It is the email platform I recommend most often when friends ask me to pick one. Start with the free plan, send your first transactional email, and you will see why.' },
  ],
  'setup-brevo-smtp': [
    { type: 'p', text: 'In this guide we will set up Brevo SMTP for transactional email in under 5 minutes - from creating the API key to sending your first test email from a Node.js script.' },
    { type: 'h2', text: 'Step 1 - Create your Brevo account' },
    { type: 'p', text: 'Sign up at brevo.com. The free plan supports up to 300 transactional emails per day, no credit card required.' },
    { type: 'h2', text: 'Step 2 - Grab your SMTP credentials' },
    { type: 'p', text: 'Open the dashboard → SMTP & API → SMTP. You will see a host, port, login and a master password. Copy them to your .env file.' },
    { type: 'code', lang: 'env', text: 'SMTP_HOST=smtp-relay.brevo.com\nSMTP_PORT=587\nSMTP_USER=your@email.com\nSMTP_PASS=xkeysib-...' },
    { type: 'h2', text: 'Step 3 - Send your first email' },
    { type: 'code', lang: 'js', text: 'import nodemailer from "nodemailer";\n\nconst transporter = nodemailer.createTransport({\n  host: process.env.SMTP_HOST,\n  port: Number(process.env.SMTP_PORT),\n  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },\n});\n\nawait transporter.sendMail({\n  from: "hello@yourdomain.com",\n  to: "recipient@example.com",\n  subject: "Hello from Brevo SMTP",\n  text: "It works!",\n});' },
    { type: 'h2', text: 'Step 4 - Authenticate your sender domain' },
    { type: 'p', text: 'Add SPF and DKIM records from the Senders & IP section. This dramatically improves deliverability and is required by Gmail and Yahoo for high-volume senders.' },
    { type: 'p', text: 'That is it - your transactional pipeline is live. Hook this into your password resets, receipts and system alerts.' },
  ],
  'brevo-vs-mailchimp': [
    { type: 'p', text: 'Brevo vs Mailchimp is one of the most-googled comparisons in email marketing. I have shipped real products on both. Here is the honest 2025 breakdown.' },
    { type: 'h2', text: 'Pricing' },
    { type: 'p', text: 'Mailchimp bills by contact count. Brevo bills by emails sent. For a 10,000-subscriber list emailing weekly, Brevo can be 50-70% cheaper. As your list grows this gap widens dramatically.' },
    { type: 'h2', text: 'Transactional email' },
    { type: 'p', text: 'Brevo wins decisively. Mailchimp\'s transactional (Mandrill) is now bundled into expensive plans, while Brevo includes solid SMTP + API on every tier including free.' },
    { type: 'h2', text: 'Template designer' },
    { type: 'p', text: 'Mailchimp wins. Its drag-and-drop is faster, its templates are more modern, and its photo library is larger.' },
    { type: 'h2', text: 'Automation' },
    { type: 'p', text: 'Both are capable. Mailchimp\'s Customer Journey Builder is slightly more polished. Brevo\'s is more transparent - you can see exactly what runs when, which I prefer as an engineer.' },
    { type: 'h2', text: 'Verdict' },
    { type: 'ul', items: ['Pick Brevo if: you care about pricing, send transactional email, or want one tool with CRM + SMS included.', 'Pick Mailchimp if: design polish matters more than cost, or your team is non-technical and lives in templates.'] },
  ],
  'best-email-marketing-tool-for-developers': [
    { type: 'p', text: 'I tested 7 email marketing platforms over the past year as a developer building SaaS side-projects. Here is what actually matters for shipping engineers and which tool wins on each axis.' },
    { type: 'h2', text: 'What developers actually need' },
    { type: 'ul', items: ['A clean transactional API (not just marketing email).', 'Webhooks for bounce, click and open events.', 'Predictable, volume-based pricing that does not punish growth.', 'Sane templating - ideally with variables and conditionals.', 'GDPR / compliance handled out of the box.'] },
    { type: 'h2', text: 'The winner: Brevo' },
    { type: 'p', text: 'Brevo edges out the rest because it nails the four things devs care about: API quality, deliverability, pricing fairness, and the rare luxury of having marketing + transactional on the same dashboard.' },
    { type: 'h2', text: 'Honorable mentions' },
    { type: 'ul', items: ['Resend - best DX of the new wave. Premium pricing.', 'Postmark - unbeatable transactional deliverability, but no marketing features.', 'SendGrid - reliable, but expensive once you scale.'] },
    { type: 'p', text: 'For most developers in 2025, Brevo is the no-regret pick. It is what I use in production.' },
  ],
  'beginners-guide-to-email-marketing': [
    { type: 'p', text: 'If you have never sent a marketing email in your life, this is the gentle introduction I wish I had when I started. By the end you will have your first list, your first welcome email and your first automation.' },
    { type: 'h2', text: 'Step 1 - Pick a platform' },
    { type: 'p', text: 'Start with Brevo. The free plan is generous, the UI is friendly, and you will not outgrow it for years.' },
    { type: 'h2', text: 'Step 2 - Set up your sender identity' },
    { type: 'p', text: 'Add a sender email and verify it. If you own a domain, configure SPF and DKIM - it takes 10 minutes and saves your future deliverability.' },
    { type: 'h2', text: 'Step 3 - Create your first list' },
    { type: 'p', text: 'Add a list called "Newsletter". This is where everyone who subscribes will land. Keep it simple at the start.' },
    { type: 'h2', text: 'Step 4 - Send your first newsletter' },
    { type: 'p', text: 'Pick a template, write something useful (not promotional), and hit send. Get the muscle memory of shipping out of the way before optimizing.' },
    { type: 'h2', text: 'Step 5 - Automate a welcome email' },
    { type: 'p', text: 'Set up a simple welcome workflow - when someone joins your list, send them an email 5 minutes later. That single automation can 2x your engagement.' },
    { type: 'p', text: 'That is the foundation. Everything else - segmentation, A/B tests, deep automation - stacks on top of these basics.' },
  ],
  'shipping-ai-products-in-2025': [
    { type: 'p', text: 'After shipping a handful of AI-first products this year - from a voice agent for crypto to RAG chatbots for businesses - I have noticed the same five patterns repeating. Here they are.' },
    { type: 'h2', text: '1. Streaming is the new loading spinner' },
    { type: 'p', text: 'Users will wait 20 seconds for a streamed answer but bounce after 3 seconds of a spinner. Always stream, even when you do not technically need to.' },
    { type: 'h2', text: '2. Pick Groq for latency, OpenAI for reasoning' },
    { type: 'p', text: 'Groq is jaw-droppingly fast for production loads. OpenAI still wins on multi-step reasoning. Use both, route per task.' },
    { type: 'h2', text: '3. Evals beat prompts' },
    { type: 'p', text: 'A 5-prompt eval suite catches more regressions than a month of prompt engineering. Set them up day one.' },
    { type: 'h2', text: '4. The killer feature is usually deterministic' },
    { type: 'p', text: 'The wow moment in most AI products is not the AI - it is the deterministic glue: a perfect form auto-fill, a flawless export, a clean handoff. Spend time there.' },
    { type: 'h2', text: '5. Latency is the new uptime' },
    { type: 'p', text: 'Slow AI is broken AI. Cache aggressively, parallelize calls, and measure p95 like your life depends on it.' },
  ],
  'why-base-chain-matters-for-web3': [
    { type: 'p', text: 'Base - Coinbase\'s L2 - has quietly become the most pragmatic chain to build consumer Web3 apps on. After deploying my prediction market dApp on Base, here is why I think it matters.' },
    { type: 'h2', text: 'Fees that finally make sense' },
    { type: 'p', text: 'Transactions on Base cost cents, not dollars. For a prediction market with high transaction volume, this is the difference between viable and dead-on-arrival.' },
    { type: 'h2', text: 'A real on-ramp' },
    { type: 'p', text: 'Because Base is by Coinbase, the fiat-to-on-chain UX is as smooth as Web3 has ever been. Users do not need a 14-step bridging tutorial.' },
    { type: 'h2', text: 'EVM-native' },
    { type: 'p', text: 'Your existing Solidity, Foundry, Hardhat and Wagmi stack just works. No new mental model to learn.' },
    { type: 'h2', text: 'The downside' },
    { type: 'p', text: 'Base is still relatively centralized in sequencing. If you are building truly trust-minimized infrastructure, you may want to wait. For consumer apps, the tradeoff is worth it.' },
  ],
  'nextjs-15-app-router-real-world-lessons': [
    { type: 'p', text: 'After shipping three production apps on Next.js 15 App Router this year, I have a list of opinions - some hot, some lukewarm. Here they are.' },
    { type: 'h2', text: 'Server Components are great. Until they aren\'t.' },
    { type: 'p', text: 'Default to server components, but be honest about the moment your tree needs interactivity. Lifting state high in a server tree is painful. Just mark the boundary "use client" and move on.' },
    { type: 'h2', text: 'Streaming + Suspense actually delivers' },
    { type: 'p', text: 'Wrap slow data with Suspense boundaries. The perceived performance gain is enormous - your above-the-fold renders instantly while the heavy stuff streams in.' },
    { type: 'h2', text: 'The metadata API is criminally underused' },
    { type: 'p', text: 'Per-page generateMetadata with dynamic OG images is one of the highest-ROI features in the framework. Set it up once and reap SEO benefits forever.' },
    { type: 'h2', text: 'Caching is the hardest part' },
    { type: 'p', text: 'Next 15 simplified things, but you still need to understand fetch caching, route segment config and revalidation. Read the docs twice.' },
  ],

  'fix-emails-going-to-spam': [
  {
    type: 'p',
    text: 'If your emails are landing in spam instead of the inbox, you are losing opens, clicks, and customers. This guide explains the real reasons emails go to spam and the exact steps to improve email deliverability.'
  },

  {
    type: 'h2',
    text: 'Why Emails Go to Spam'
  },

  {
    type: 'p',
    text: 'Spam filters look at your domain reputation, email authentication, content quality, engagement, and sending history. Even legitimate emails can land in spam if these signals are weak.'
  },

  {
    type: 'h2',
    text: '1. Authenticate Your Domain'
  },

  {
    type: 'ul',
    items: [
      'Add SPF record',
      'Enable DKIM',
      'Configure DMARC',
      'Verify your sending domain'
    ]
  },

  {
    type: 'h2',
    text: '2. Warm Up New Domains'
  },

  {
    type: 'p',
    text: 'Never send thousands of emails from a brand-new domain. Start with small volumes and increase gradually.'
  },

  {
    type: 'h2',
    text: '3. Avoid Spam Trigger Words'
  },

  {
    type: 'ul',
    items: [
      'FREE!!!',
      '100% Guaranteed',
      'Act Now',
      'Congratulations Winner',
      'Click Here'
    ]
  },

  {
    type: 'h2',
    text: '4. Keep Your Email List Clean'
  },

  {
    type: 'p',
    text: 'Remove inactive subscribers and invalid email addresses regularly to improve sender reputation.'
  },

  {
    type: 'h2',
    text: 'Final Thoughts'
  },

  {
    type: 'p',
    text: 'Good deliverability comes from proper authentication, quality content, clean email lists, and consistent sending habits.'
  }
],

//New Blog 


'email-authentication-explained': [
  {
    type: 'p',
    text: 'Email authentication helps email providers verify that your messages are legitimate. The three core technologies are SPF, DKIM, and DMARC. Together they improve email deliverability and reduce phishing.'
  },

  {
    type: 'h2',
    text: 'What is SPF?'
  },

  {
    type: 'p',
    text: 'SPF (Sender Policy Framework) tells receiving mail servers which servers are allowed to send emails on behalf of your domain.'
  },

  {
    type: 'h2',
    text: 'What is DKIM?'
  },

  {
    type: 'p',
    text: 'DKIM (DomainKeys Identified Mail) digitally signs your email so receivers can verify that the message has not been modified during delivery.'
  },

  {
    type: 'h2',
    text: 'What is DMARC?'
  },

  {
    type: 'p',
    text: 'DMARC builds on SPF and DKIM. It tells email providers what to do when authentication fails and provides reporting for domain owners.'
  },

  {
    type: 'h2',
    text: 'SPF vs DKIM vs DMARC'
  },

  {
    type: 'ul',
    items: [
      'SPF verifies the sending server.',
      'DKIM verifies the message integrity.',
      'DMARC defines the policy and reporting.',
      'Using all three together provides the best protection.'
    ]
  },

  {
    type: 'h2',
    text: 'Why Email Authentication Matters'
  },

  {
    type: 'ul',
    items: [
      'Improves inbox placement',
      'Protects against spoofing',
      'Reduces phishing attacks',
      'Builds sender reputation',
      'Required by many major email providers'
    ]
  },

  {
  type: 'h2',
  text: 'Check Your Email Authentication'
},

{
  type: 'p',
  text: 'Use our free Email Header Analyzer to check SPF, DKIM, and DMARC results from any email header.'
},

{
  type: 'h2',
  text: 'Related Resources'
},

{
  type: 'ul',
  items: [
    'How to Fix Emails Going to Spam',
    'DNS Guide: SPF, DKIM and DMARC',
    'Email Header Analyzer',
    'Spam Checker'
  ]
},

{
  type: 'h2',
  text: 'Conclusion'
},

{
  type: 'p',
  text: 'SPF, DKIM, and DMARC work together to improve email security and deliverability. Every business that sends emails should configure all three.'
},

],

//Blog Ended 


//new blog

'whatsapp-usernames-guide-2026': [

{
type:'p',
text:'WhatsApp has officially introduced Usernames, allowing people to connect without sharing their phone number. Starting June 29, 2026, users can reserve a username ahead of the global rollout. This guide explains how WhatsApp Usernames work, how to reserve yours, privacy benefits, username rules, and what this means for personal users, creators, and businesses.'
},

{
type:'h2',
text:'What are WhatsApp Usernames?'
},

{
type:'p',
text:'A WhatsApp Username is a unique identifier that allows people to contact you without knowing your phone number. Instead of sharing your mobile number, you can simply share your username once the feature becomes available in your country.'
},

{
type:'h2',
text:'Why WhatsApp Introduced Usernames'
},

{
type:'ul',
items:[
'Improve user privacy',
'Reduce sharing personal phone numbers',
'Support creators and businesses',
'Safer communication with new contacts',
'Easy to remember identity'
]
},

{
type:'h2',
text:'How to Reserve Your Username'
},

{
type:'ol',
items:[
'Update WhatsApp to the latest version.',
'Open Settings.',
'Tap Account.',
'Open Username.',
'Choose an available username.',
'Reserve it for future rollout.'
]
},

{
type:'h2',
text:'Username Features'
},

{
type:'ul',
items:[
'Unique username for every account',
'Optional feature',
'Hide phone number from first-time chats',
'No public username directory',
'Optional Username Key for extra privacy'
]
},

{
type:'h2',
text:'Benefits for Businesses'
},

{
type:'ul',
items:[
'Professional identity',
'Easy customer communication',
'Brand consistency',
'Improved privacy',
'Better trust'
]
},

{
type:'h2',
text:'Benefits for Creators'
},

{
type:'ul',
items:[
'Share username instead of phone number',
'Better privacy',
'Simple sharing across social media',
'Protect personal information'
]
},

{
type:'h2',
text:'Username Rules'
},

{
type:'ul',
items:[
'Every username must be unique.',
'Availability depends on existing reservations.',
'Some usernames may be reserved for businesses or verified organizations.',
'Instagram or Facebook usernames may be claimable where eligible.'
]
},

{
type:'h2',
text:'Privacy Improvements'
},

{
type:'p',
text:'Once usernames become available, first-time conversations can happen using your username instead of revealing your phone number if you enable the feature. WhatsApp also introduces an optional Username Key for additional control over who can message you.'
},

{
type:'h2',
text:'Frequently Asked Questions'
},

{
type:'ul',
items:[
'Is WhatsApp Username free?',
'Can I change my username later?',
'Will everyone get this feature?',
'Can someone find me without my username?',
'Can businesses reserve usernames?'
]
},

{
type:'h2',
text:'Final Thoughts'
},

{
type:'p',
text:'WhatsApp Usernames are one of the biggest privacy updates introduced by WhatsApp in years. By allowing people to connect without sharing phone numbers, the platform improves security while making communication easier for individuals, creators, and businesses. The rollout will continue gradually over the coming months.'
},

],

// new blog end


});

const all = commonBrevoBlocks();

export const POSTS = [
  { slug: 'complete-brevo-review-2025', title: 'The Complete Brevo Review (2025 Edition)', excerpt: 'A 4,000-word honest, balanced look at Brevo - features, pricing, automation, CRM, deliverability. Is it the right email platform for you in 2025?', category: 'Email Marketing', tags: ['Brevo', 'Email', 'Review'], readTime: '12 min', date: '2025-06-12', featured: true },
  { slug: 'setup-brevo-smtp', title: 'How to Set Up Brevo SMTP in 5 Minutes', excerpt: 'Step-by-step guide from creating your API key to sending your first transactional email - with Node.js example code and DKIM setup.', category: 'Tutorials', tags: ['Brevo', 'SMTP', 'Node.js'], readTime: '5 min', date: '2025-06-10' },
  { slug: 'brevo-vs-mailchimp', title: 'Brevo vs Mailchimp - The Honest 2025 Comparison', excerpt: 'Pricing, transactional email, automation, template design - the real differences between Brevo and Mailchimp, with a clear recommendation.', category: 'Email Marketing', tags: ['Brevo', 'Mailchimp', 'Comparison'], readTime: '9 min', date: '2025-06-08' },
  { slug: 'best-email-marketing-tool-for-developers', title: 'The Best Email Marketing Tool for Developers', excerpt: 'I tested 7 platforms over a year as a developer. Here is what shipping engineers should actually use and why Brevo wins on four critical axes.', category: 'Email Marketing', tags: ['Email', 'Developers', 'Tools'], readTime: '8 min', date: '2025-06-05' },
  { slug: 'beginners-guide-to-email-marketing', title: 'A Beginner\'s Guide to Email Marketing', excerpt: 'From your first list to your first welcome automation - explained simply for absolute beginners. No jargon, no fluff.', category: 'Email Marketing', tags: ['Email', 'Beginners', 'Guide'], readTime: '11 min', date: '2025-06-02' },
  { slug: 'shipping-ai-products-in-2025', title: 'Shipping AI Products in 2025 - 5 Patterns I Keep Seeing', excerpt: 'Streaming, eval suites, latency, and the deterministic features that actually wow users. Lessons from shipping voice agents, RAG bots, and AI copilots.', category: 'AI', tags: ['AI', 'LLM', 'Engineering'], readTime: '7 min', date: '2025-05-28', featured: true },
  { slug: 'why-base-chain-matters-for-web3', title: 'Why Base Chain Matters for Consumer Web3', excerpt: 'After deploying a prediction market on Base, here is why it has quietly become the most pragmatic chain to build consumer Web3 apps on in 2025.', category: 'Web3', tags: ['Base', 'Blockchain', 'L2'], readTime: '6 min', date: '2025-05-22' },
  { slug: 'nextjs-15-app-router-real-world-lessons', title: 'Next.js 15 App Router - Real-World Lessons', excerpt: 'Three production apps on App Router later, here are the opinions I have formed. Hot takes on Server Components, Suspense, Metadata API and caching.', category: 'Next.js', tags: ['Next.js', 'React', 'Performance'], readTime: '8 min', date: '2025-05-15', featured: true },
  {
  slug: 'fix-emails-going-to-spam',
  title: 'How to Fix Emails Going to Spam (Complete Guide)',
  excerpt: 'Learn why emails land in spam and how to improve inbox placement using SPF, DKIM, DMARC, domain reputation, and email best practices.',
  category: 'Email Marketing',
  tags: ['Email', 'Spam', 'Deliverability', 'SMTP'],
  readTime: '10 min',
  date: '2026-06-29'
},

//new slug 

{
  slug: 'email-authentication-explained',
  title: 'Email Authentication Explained: SPF vs DKIM vs DMARC',
  excerpt: 'Learn what SPF, DKIM, and DMARC are, how they work together, and why every business should configure them for better email security and deliverability.',
  category: 'Email Marketing',
  tags: ['SPF', 'DKIM', 'DMARC', 'Email Authentication'],
  readTime: '9 min',
  date: '2026-07-01'
},


//slug ended 

{
slug:'whatsapp-usernames-guide-2026',
title:'WhatsApp Usernames: How to Reserve, Privacy, Rules & Rollout (2026)',
excerpt:'Learn how WhatsApp Usernames work, how to reserve one, privacy benefits, business use cases, and everything announced officially by WhatsApp.',
category:'Tutorials',
tags:['WhatsApp','Usernames','Privacy','Meta'],
readTime:'8 min',
date:'2026-07-06'
},


].map(p => ({ ...p, content: all[p.slug] || [] }));

export const getPostBySlug = (slug) => POSTS.find(p => p.slug === slug);
export const getRelatedPosts = (slug, n = 3) => {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return POSTS.filter(p => p.slug !== slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t)))).slice(0, n);
};
