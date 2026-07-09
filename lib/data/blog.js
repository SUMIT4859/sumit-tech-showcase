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

//new



'html-email-testing-checklist-2025': [

{
type:'p',
text:'Sending an HTML email without testing is one of the biggest mistakes businesses make. A single broken button, missing image, or spam trigger can reduce open rates, lower conversions, and damage your sender reputation. This complete HTML Email Testing Checklist helps you verify every important element before pressing the Send button.'
},

{
type:'h2',
text:'Why HTML Email Testing Matters'
},

{
type:'p',
text:'Unlike websites, HTML emails render differently in every email client. Gmail, Outlook, Apple Mail, Yahoo Mail, and mobile apps all display HTML differently. Proper testing ensures your campaign looks professional everywhere while improving deliverability and engagement.'
},

{
type:'h2',
text:'1. Verify Your Subject Line'
},

{
type:'ul',
items:[
'Keep it under 60 characters.',
'Avoid spam trigger words.',
'Create curiosity without misleading readers.',
'Include personalization when appropriate.'
]
},

{
type:'h2',
text:'2. Review Preview Text'
},

{
type:'p',
text:'Preview text appears beside the subject line in most inboxes. Make sure it complements your subject line and encourages recipients to open the email.'
},

{
type:'h2',
text:'3. Test From Name & Email Address'
},

{
type:'ul',
items:[
'Use a recognizable brand name.',
'Send from your own domain instead of free email providers.',
'Verify SPF, DKIM and DMARC before sending.'
]
},

{
type:'h2',
text:'4. Check Every Link'
},

{
type:'ul',
items:[
'Homepage',
'Product pages',
'Blog articles',
'Affiliate links',
'Contact page',
'Privacy policy'
]
},

{
type:'h2',
text:'5. Test Call-to-Action Buttons'
},

{
type:'p',
text:'Every CTA button should work correctly on desktop and mobile devices. Verify colours, spacing, hover effects and destination URLs.'
},

{
type:'h2',
text:'6. Optimize Images'
},

{
type:'ul',
items:[
'Compress images.',
'Use descriptive ALT text.',
'Avoid oversized files.',
'Ensure images load correctly.'
]
},

{
type:'h2',
text:'7. Mobile Responsiveness'
},

{
type:'p',
text:'More than half of marketing emails are opened on smartphones. Test font sizes, buttons, spacing and layouts on multiple screen sizes.'
},

{
type:'h2',
text:'8. Test Dark Mode'
},

{
type:'ul',
items:[
'Logo visibility.',
'Button colours.',
'Text readability.',
'Background contrast.'
]
},

{
type:'h2',
text:'9. Test Across Different Email Clients'
},

{
type:'p',
text:'Always preview your campaign in multiple email clients. Gmail, Outlook, Apple Mail, Yahoo Mail and Thunderbird all render HTML differently.'
},

{
type:'h2',
text:'10. Outlook Compatibility'
},

{
type:'ul',
items:[
'Use table-based layouts.',
'Avoid unsupported CSS.',
'Test buttons in Outlook desktop.',
'Check font rendering.'
]
},

{
type:'h2',
text:'11. Accessibility'
},

{
type:'ul',
items:[
'Add ALT text to every image.',
'Maintain good color contrast.',
'Use readable font sizes.',
'Keep heading hierarchy logical.'
]
},

{
type:'h2',
text:'12. Spam Score'
},

{
type:'p',
text:'Before sending, review your spam score. Too many promotional words, broken HTML, missing authentication records or excessive image-to-text ratios can reduce inbox placement.'
},

{
type:'quote',
text:'Good email deliverability starts before you click Send.'
},

{
type:'h2',
text:'13. Verify SPF, DKIM & DMARC'
},

{
type:'ul',
items:[
'SPF configured correctly.',
'DKIM enabled.',
'DMARC policy published.',
'DNS records propagated.'
]
},

{
type:'h2',
text:'14. Personalization'
},

{
type:'p',
text:'Verify merge tags such as {{FIRSTNAME}} or custom variables. Broken personalization looks unprofessional and can reduce trust.'
},

{
type:'h2',
text:'15. Email Size'
},

{
type:'p',
text:'Keep HTML emails below approximately 102KB to reduce the risk of clipping in Gmail.'
},

{
type:'h2',
text:'16. Unsubscribe Link'
},

{
type:'ul',
items:[
'Visible.',
'Working correctly.',
'Easy to locate.',
'Complies with email regulations.'
]
},

{
type:'h2',
text:'17. Footer Information'
},

{
type:'ul',
items:[
'Business name.',
'Contact information.',
'Privacy Policy.',
'Terms.',
'Company address.'
]
},

{
type:'h2',
text:'18. Send Test Emails'
},

{
type:'p',
text:'Always send multiple test emails to yourself and teammates before launching a campaign. Open the email on desktop, mobile and different inbox providers.'
},


{
type:'h2',
text:'19. Verify Tracking & Analytics'
},

{
type:'ul',
items:[
'Google Analytics UTM parameters.',
'Brevo campaign tracking.',
'Conversion tracking.',
'Affiliate links.'
]
},

{
type:'h2',
text:'20. Review Grammar & Content'
},

{
type:'p',
text:'Read the email one final time. Correct spelling mistakes, grammar issues, inconsistent formatting and outdated information before sending.'
},

{
type:'h2',
text:'21. Check Reply-To Address'
},

{
type:'ul',
items:[
'Reply email works.',
'Inbox is monitored.',
'Auto replies are configured if required.'
]
},

{
type:'h2',
text:'22. Verify Email Authentication'
},

{
type:'p',
text:'Proper SPF, DKIM and DMARC authentication significantly improves email deliverability and protects your domain from spoofing.'
},

{
type:'h2',
text:'23. Test Loading Speed'
},

{
type:'ul',
items:[
'Compress images.',
'Avoid unnecessary GIFs.',
'Minify HTML.',
'Reduce external assets.'
]
},

{
type:'h2',
text:'24. Send Final Internal Test'
},

{
type:'p',
text:'Before scheduling a campaign, send one final version to yourself and team members using different devices and email clients.'
},

{
type:'h2',
text:'25. Final Approval Checklist'
},

{
type:'ul',
items:[
'Subject line checked.',
'Preview text verified.',
'All links working.',
'Images optimized.',
'Buttons tested.',
'Responsive design verified.',
'Spam score reviewed.',
'SPF/DKIM/DMARC configured.',
'Tracking enabled.',
'Footer completed.',
'Unsubscribe link tested.'
]
},

{
type:'h2',
text:'Recommended Tools'
},

{
type:'ul',
items:[
'Brevo',
'Mail Tester',
'Litmus',
'Email on Acid',
'Google Postmaster Tools'
]
},


{
type:'h2',
text:'Related Resources'
},

{
type:'links',
items:[
{
title:'Fix Emails Going to Spam',
href:'/blog/fix-emails-going-to-spam'
},
{
title:'Email Authentication Explained',
href:'/blog/email-authentication-explained'
},
{
title:'Brevo Review',
href:'/tools/brevo'
},
{
title:'Email Header Analyzer',
href:'/free-tools/email-header-analyzer'
},
{
title:'SMTP Setup Checklist',
href:'/resources/smtp-setup-checklist'
}
]
},

{
type:'h2',
text:'Frequently Asked Questions'
},

{
type:'faq',
items:[
{
q:'Why should I test HTML emails before sending?',
a:'Testing ensures your email displays correctly across different email clients, improves deliverability and reduces broken links or formatting issues.'
},
{
q:'Which email clients should I test?',
a:'At minimum test Gmail, Outlook, Apple Mail, Yahoo Mail and mobile email apps.'
},
{
q:'How do I reduce spam score?',
a:'Configure SPF, DKIM and DMARC correctly, avoid spam trigger words, keep clean HTML and always test before sending.'
}
]
},

{
type:'h2',
text:'Final Thoughts'
},

{
type:'p',
text:'Following this HTML Email Testing Checklist before every campaign helps improve deliverability, increase click-through rates and provide a better experience for subscribers. Spending a few extra minutes testing can prevent costly mistakes after your campaign goes live.'
}],



//new 
'brevo-transactional-vs-marketing-email': [
{
type:'p',
text:'Transactional emails and marketing emails serve different purposes, but both are essential for modern businesses. Understanding the difference helps improve deliverability, customer engagement and compliance. Brevo supports both email types from a single platform, making it easier to manage all your email communication.'
},

{
type:'h2',
text:'What is a Transactional Email?'
},

{
type:'p',
text:'Transactional emails are automatically triggered by a user action. They provide important information such as password resets, account verification, order confirmations or shipping updates.'
},

{
type:'ul',
items:[
'Password Reset',
'Email Verification',
'OTP Codes',
'Order Confirmation',
'Shipping Updates',
'Invoice Emails',
'Account Notifications'
]
},

{
type:'h2',
text:'What is a Marketing Email?'
},

{
type:'p',
text:'Marketing emails are promotional messages sent to subscribers. Their purpose is to increase engagement, sales, brand awareness or customer retention.'
},

{
type:'ul',
items:[
'Newsletters',
'Product Launches',
'Discount Campaigns',
'Holiday Offers',
'Welcome Series',
'Customer Surveys'
]
},

{
type:'h2',
text:'Key Differences'
},

{
type:'table',
headers:['Transactional','Marketing'],
rows:[
['Triggered automatically','Sent manually or scheduled'],
['One recipient','Many recipients'],
['Critical information','Promotional content'],
['Higher open rate','Lower open rate'],
['No unsubscribe required in many jurisdictions for purely transactional content','Usually requires unsubscribe option']
]
},

{
type:'h2',
text:'Why Brevo Supports Both'
},

{
type:'p',
text:'Brevo combines transactional SMTP, email marketing, automation, CRM and analytics into a single platform. Businesses can manage customer communication without switching providers.'
},

{
type:'quote',
text:'Using one platform for both transactional and marketing emails simplifies management and improves reporting.'
},

{
type:'h2',
text:'When Should You Use Transactional Emails?'
},

{
type:'p',
text:'Transactional emails should only be sent after a user performs a specific action. They are expected by the recipient and usually have significantly higher open rates than promotional emails.'
},

{
type:'ul',
items:[
'User registration',
'Password reset requests',
'Purchase confirmation',
'Payment receipts',
'Shipping notifications',
'Login verification',
'Security alerts'
]
},

{
type:'h2',
text:'When Should You Use Marketing Emails?'
},

{
type:'p',
text:'Marketing emails are designed to build relationships, increase engagement and generate sales. These campaigns are usually scheduled or automated for subscriber lists.'
},

{
type:'ul',
items:[
'Weekly newsletters',
'Product announcements',
'Special discounts',
'Seasonal campaigns',
'Educational content',
'Customer retention campaigns'
]
},

{
type:'h2',
text:'Brevo Features for Transactional Emails'
},

{
type:'ul',
items:[
'SMTP Relay',
'Transactional Email API',
'Email Templates',
'Real-time delivery tracking',
'Webhook support',
'Detailed analytics',
'High deliverability infrastructure'
]
},

{
type:'h2',
text:'Brevo Features for Marketing Emails'
},

{
type:'ul',
items:[
'Drag & Drop Email Builder',
'Marketing Automation',
'Segmentation',
'A/B Testing',
'Campaign Scheduling',
'Email Personalization',
'Contact Management'
]
},

{
type:'h2',
text:'Best Practices'
},

{
type:'ul',
items:[
'Never mix promotional content inside transactional emails.',
'Authenticate your domain using SPF, DKIM and DMARC.',
'Keep transactional emails short and action-focused.',
'Personalize marketing emails whenever possible.',
'Always include an unsubscribe link in marketing campaigns.',
'Monitor open rate, CTR and bounce rate.'
]
},

{
type:'h2',
text:'Deliverability Tips'
},

{
type:'p',
text:'Regardless of the email type, deliverability depends on sender reputation, authentication, content quality and list hygiene. Regularly clean inactive subscribers and monitor spam complaints to maintain inbox placement.'
},

{
type:'quote',
text:'The right email at the right time is more important than sending more emails.'
},

{
type:'h2',
text:'Transactional vs Marketing Email Comparison'
},

{
type:'table',
headers:['Feature','Transactional Email','Marketing Email'],
rows:[
['Purpose','Complete a user action','Promote products or content'],
['Trigger','Automatic','Manual or scheduled'],
['Audience','Individual user','Subscriber list'],
['Content','Important information','Promotional'],
['Open Rate','Very High','Moderate'],
['CTA','Complete an action','Drive engagement or sales'],
['Unsubscribe','Generally not required for purely transactional emails','Required for promotional campaigns']
]
},

{
type:'h2',
text:'Common Mistakes to Avoid'
},

{
type:'ul',
items:[
'Using promotional content inside password reset emails.',
'Sending marketing emails without user consent.',
'Ignoring SPF, DKIM and DMARC.',
'Using the same template for every campaign.',
'Not monitoring delivery reports.',
'Never cleaning inactive subscribers.'
]
},

{
type:'h2',
text:'Which One Should You Choose?'
},

{
type:'p',
text:'Most businesses need both transactional and marketing emails. Transactional emails keep customers informed after important actions, while marketing emails help grow revenue and customer engagement. Using Brevo allows you to manage both from a single dashboard.'
},

{
type:'h2',
text:'Related Guides'
},

{
type:'links',
items:[
{
title:'Complete Brevo Review',
href:'/tools/brevo'
},
{
title:'Setup Brevo SMTP',
href:'/blog/setup-brevo-smtp'
},
{
title:'Fix Emails Going To Spam',
href:'/blog/fix-emails-going-to-spam'
},
{
title:'Email Authentication Explained',
href:'/blog/email-authentication-explained'
},
{
title:'Email Header Analyzer',
href:'/free-tools/email-header-analyzer'
}
]
},

{
type:'h2',
text:'Frequently Asked Questions'
},

{
type:'faq',
items:[
{
q:'Can transactional emails contain marketing content?',
a:'Purely transactional emails should focus on completing the requested action. Adding promotional material may affect compliance and deliverability depending on applicable laws and the email purpose.'
},
{
q:'Which has a higher open rate?',
a:'Transactional emails generally achieve much higher open rates because recipients expect them immediately after performing an action.'
},
{
q:'Does Brevo support both email types?',
a:'Yes. Brevo provides transactional SMTP, Email API, marketing campaigns, automation and analytics from one platform.'
}
]
},

{
type:'h2',
text:'Final Thoughts'
},

{
type:'p',
text:'Choosing the right email type improves customer experience, inbox placement and overall campaign performance. Use transactional emails for essential user communications and marketing emails for newsletters, promotions and customer engagement.'
}],


// new
'brevo-webhooks-and-event-tracking': [
{
type:'p',
text:'Brevo Webhooks allow developers to receive real-time notifications whenever important email events occur. Instead of manually checking campaign reports, your application instantly receives updates such as delivered emails, opens, clicks, bounces and unsubscribes.'
},

{
type:'h2',
text:'What Are Brevo Webhooks?'
},

{
type:'p',
text:'A webhook is an HTTP callback sent automatically when an event happens. Brevo sends a POST request to your server whenever a selected email event occurs, allowing your application to react immediately.'
},

{
type:'h2',
text:'Why Use Webhooks?'
},

{
type:'ul',
items:[
'Real-time email tracking.',
'Automate workflows.',
'Update CRM records instantly.',
'Track customer engagement.',
'Reduce manual reporting.',
'Trigger notifications automatically.'
]
},

{
type:'h2',
text:'Common Brevo Webhook Events'
},

{
type:'table',
headers:['Event','Description'],
rows:[
['Delivered','Email successfully delivered.'],
['Opened','Recipient opened the email.'],
['Clicked','User clicked a tracked link.'],
['Hard Bounce','Permanent delivery failure.'],
['Soft Bounce','Temporary delivery issue.'],
['Spam','Recipient marked email as spam.'],
['Unsubscribed','User unsubscribed from emails.'],
['Blocked','Delivery blocked by recipient server.']
]
},

{
type:'h2',
text:'How Webhooks Work'
},

{
type:'ol',
items:[
'Your application registers a webhook URL.',
'Brevo monitors email events.',
'When an event occurs, Brevo sends a POST request.',
'Your backend receives the JSON payload.',
'Your application stores or processes the event.'
]
},

{
type:'quote',
text:'Webhooks eliminate polling by sending data only when something important happens.'
},

{
type:'h2',
text:'Typical Use Cases'
},

{
type:'ul',
items:[
'Update CRM automatically.',
'Track customer activity.',
'Send Slack notifications.',
'Create analytics dashboards.',
'Trigger marketing automation.',
'Update user accounts instantly.'
]
},

{
type:'h2',
text:'Setting Up Brevo Webhooks'
},

{
type:'p',
text:'Creating a webhook in Brevo takes only a few minutes. After configuring the webhook URL, Brevo automatically sends event notifications whenever selected email events occur.'
},

{
type:'ol',
items:[
'Log in to your Brevo account.',
'Navigate to SMTP & API.',
'Open Webhooks.',
'Click Create a Webhook.',
'Enter your server endpoint URL.',
'Select the events you want to receive.',
'Save the webhook.'
]
},

{
type:'h2',
text:'Example Webhook Payload'
},

{
type:'code',
language:'json',
code:`{
  "event":"delivered",
  "email":"user@example.com",
  "messageId":"abc123",
  "date":"2026-07-09T10:15:00Z",
  "ts":1783572900
}`
},

{
type:'p',
text:'Every webhook request contains structured JSON that your backend can process to update databases, trigger notifications or create analytics reports.'
},

{
type:'h2',
text:'Security Best Practices'
},

{
type:'ul',
items:[
'Always use HTTPS endpoints.',
'Validate incoming webhook requests.',
'Verify request signatures if available.',
'Reject unknown IP addresses when possible.',
'Store webhook logs for troubleshooting.',
'Never expose secret API keys.'
]
},

{
type:'h2',
text:'Handling Failed Requests'
},

{
type:'p',
text:'If your server is unavailable, webhook delivery may fail. Your application should always return proper HTTP status codes and implement retry handling to avoid losing important events.'
},

{
type:'ul',
items:[
'Return HTTP 200 after successful processing.',
'Log failed requests.',
'Retry temporary failures.',
'Queue events for background processing.',
'Monitor server uptime.'
]
},

{
type:'h2',
text:'Integrating With Your Backend'
},

{
type:'p',
text:'Brevo webhooks can be integrated with Node.js, Express, Next.js API Routes, Laravel, Django, Flask, Spring Boot and many other backend frameworks. Store incoming events inside a database to build reporting dashboards or trigger additional automation.'
},

{
type:'quote',
text:'Webhooks transform email events into real-time business automation.'
},

{
type:'h2',
text:'Advanced Webhook Use Cases'
},

{
type:'ul',
items:[
'Update CRM contact status automatically.',
'Trigger Slack or Discord notifications after email delivery.',
'Send follow-up emails after link clicks.',
'Track campaign performance in real time.',
'Synchronize customer activity with your database.',
'Power custom analytics dashboards.'
]
},

{
type:'h2',
text:'Common Webhook Mistakes'
},

{
type:'ul',
items:[
'Using unsecured HTTP endpoints.',
'Ignoring failed webhook requests.',
'Not validating incoming payloads.',
'Processing events synchronously causing slow responses.',
'Not logging webhook activity.',
'Missing duplicate event handling.'
]
},

{
type:'h2',
text:'Best Practices'
},

{
type:'ul',
items:[
'Respond quickly with HTTP 200.',
'Process heavy tasks in background queues.',
'Store webhook history for debugging.',
'Monitor webhook failures.',
'Secure endpoints with HTTPS.',
'Regularly review delivery logs.'
]
},

{
type:'h2',
text:'Related Guides'
},

{
type:'links',
items:[
{
title:'Complete Brevo Review',
href:'/tools/brevo'
},
{
title:'Setup Brevo SMTP',
href:'/blog/setup-brevo-smtp'
},
{
title:'Transactional vs Marketing Email',
href:'/blog/brevo-transactional-vs-marketing-email'
},
{
title:'Email Header Analyzer',
href:'/free-tools/email-header-analyzer'
},
{
title:'SMTP Setup Checklist',
href:'/resources/smtp-setup-checklist'
}
]
},

{
type:'h2',
text:'Frequently Asked Questions'
},

{
type:'faq',
items:[
{
q:'What is a Brevo webhook?',
a:'A Brevo webhook is an HTTP callback that sends real-time email events such as deliveries, opens, clicks, bounces and unsubscribes to your application.'
},
{
q:'Do I need a backend server?',
a:'Yes. Your application needs an endpoint capable of receiving POST requests from Brevo and processing JSON payloads.'
},
{
q:'Can webhooks improve automation?',
a:'Yes. They allow your application to instantly react to customer activity and automate workflows without polling the API.'
}
]
},

{
type:'h2',
text:'Final Thoughts'
},

{
type:'p',
text:'Brevo Webhooks are one of the most powerful features for developers building modern email applications. By combining real-time event tracking with automation, analytics and CRM integrations, businesses can create faster, smarter and more reliable email workflows.'
}],



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

//new

{
slug:'html-email-testing-checklist-2025',
title:'HTML Email Testing Checklist: 25 Things to Verify Before Sending',
excerpt:'Learn how to test HTML emails before sending. Improve deliverability, responsiveness, spam score, Outlook compatibility and user experience with this complete checklist.',
category:'Email Marketing',
date:'2026-07-09',
readTime:'10 min',
tags:[
'HTML Email',
'Email Testing',
'Email Deliverability',
'SMTP',
'Email Marketing',
'Brevo'
],
cover:'/blog/html-email-testing-checklist.webp'
},


//new

{
slug:'brevo-transactional-vs-marketing-email',
title:'Brevo Transactional vs Marketing Email: What Is the Difference?',
excerpt:'Learn the difference between transactional and marketing emails, when to use each one, and how Brevo helps manage both from a single platform.',
category:'Email Marketing',
date:'2026-07-09',
readTime:'9 min',
tags:[
'Brevo',
'Transactional Email',
'Marketing Email',
'SMTP',
'Email Marketing',
'Email Deliverability'
],
cover:'/blog/brevo-transactional-vs-marketing-email.webp'
},

// new

{
slug:'brevo-webhooks-and-event-tracking',
title:'Brevo Webhooks and Event Tracking: Complete Developer Guide',
excerpt:'Learn how to use Brevo Webhooks for real-time email tracking, automation, analytics and backend integrations with practical examples and best practices.',
category:'Email Marketing',
date:'2026-07-09',
readTime:'9 min',
tags:[
'Brevo',
'Webhooks',
'Event Tracking',
'SMTP',
'API',
'Email Automation'
],
cover:'/blog/brevo-webhooks-and-event-tracking.webp'
},




].map(p => ({ ...p, content: all[p.slug] || [] }));

export const getPostBySlug = (slug) => POSTS.find(p => p.slug === slug);
export const getRelatedPosts = (slug, n = 3) => {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return POSTS.filter(p => p.slug !== slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t)))).slice(0, n);
};
