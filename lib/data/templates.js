// Email templates - copy, customize, download. Add more here.

export const TEMPLATE_CATEGORIES = ['All', 'Onboarding', 'Marketing', 'Sales', 'Transactional', 'E-commerce'];

const html = (title, body, cta = { label: 'Get started', url: 'https://example.com' }) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,Inter,Segoe UI,Roboto,sans-serif;color:#111;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f5f7;padding:40px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="background:#fff;border-radius:16px;padding:40px;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
        <tr><td>
          <h1 style="font-size:24px;margin:0 0 16px;font-weight:600;letter-spacing:-0.01em;">${title}</h1>
          ${body}
          <div style="margin:32px 0 8px;">
            <a href="${cta.url}" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:12px 24px;border-radius:999px;font-weight:500;font-size:14px;">${cta.label}</a>
          </div>
          <p style="font-size:12px;color:#888;margin-top:32px;border-top:1px solid #eee;padding-top:16px;">You are receiving this email because you signed up at example.com. <a href="#" style="color:#888;">Unsubscribe</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

export const TEMPLATES = [
  { slug: 'welcome-email', name: 'Welcome Email', category: 'Onboarding', desc: 'A warm, on-brand welcome that introduces your product in 30 seconds.', subject: 'Welcome to {{company}} - here is what happens next', html: html('Welcome aboard, {{first_name}}', '<p style="font-size:15px;line-height:1.6;color:#333;">Thanks for signing up to {{company}}. We help {{value_prop}}.</p><p style="font-size:15px;line-height:1.6;color:#333;">Here is a 60-second guide to get you to your first win.</p>', { label: 'Get started', url: 'https://example.com/onboard' }) },
  { slug: 'newsletter', name: 'Newsletter', category: 'Marketing', desc: 'Clean newsletter format with intro, 3 stories and a CTA.', subject: 'This week: {{topic_summary}}', html: html('{{newsletter_title}}', '<p style="font-size:15px;line-height:1.6;color:#333;">Hi {{first_name}}, three quick things this week:</p><ol style="font-size:15px;line-height:1.7;color:#333;padding-left:18px;"><li><b>{{story_1_title}}</b> - {{story_1_summary}}</li><li><b>{{story_2_title}}</b> - {{story_2_summary}}</li><li><b>{{story_3_title}}</b> - {{story_3_summary}}</li></ol>', { label: 'Read on the web', url: 'https://example.com/newsletter' }) },
  { slug: 'cold-email', name: 'Cold Email', category: 'Sales', desc: 'Short, specific, no-fluff cold outreach. High reply rate.', subject: 'Quick question, {{first_name}}', html: html('Hi {{first_name}}', '<p style="font-size:15px;line-height:1.6;color:#333;">Saw that {{company}} recently {{trigger_event}} - congrats.</p><p style="font-size:15px;line-height:1.6;color:#333;">We help teams like yours {{value_prop}}. Worth a 15-min chat next week?</p>', { label: 'Book 15 min', url: 'https://example.com/book' }) },
  { slug: 'follow-up', name: 'Follow Up', category: 'Sales', desc: 'Friendly nudge that respects the recipient\'s time.', subject: 'Re: Quick question, {{first_name}}', html: html('Bumping this up', '<p style="font-size:15px;line-height:1.6;color:#333;">Hi {{first_name}}, I know inboxes are brutal so wanted to bump this up.</p><p style="font-size:15px;line-height:1.6;color:#333;">If now is not the right time, completely understand. Just hit reply with a "not now" and I will circle back next quarter.</p>') },
  { slug: 'sales-email', name: 'Sales Email', category: 'Sales', desc: 'Benefit-led pitch with clear value proposition.', subject: 'A faster way to {{job_to_be_done}}', html: html('A faster way to {{job_to_be_done}}', '<p style="font-size:15px;line-height:1.6;color:#333;">{{company}} teams using {{product}} ship {{outcome_metric}} faster.</p><p style="font-size:15px;line-height:1.6;color:#333;">Worth a look?</p>', { label: 'See it in 2 min', url: 'https://example.com/demo' }) },
  { slug: 'abandoned-cart', name: 'Abandoned Cart', category: 'E-commerce', desc: 'Friendly reminder with social proof and gentle urgency.', subject: 'Still thinking about it, {{first_name}}?', html: html('You left something behind', '<p style="font-size:15px;line-height:1.6;color:#333;">Hi {{first_name}}, your {{product_name}} is still in your cart.</p><p style="font-size:15px;line-height:1.6;color:#333;">{{social_proof_count}}+ happy customers love it. Want us to hold it for 24 more hours?</p>', { label: 'Complete order', url: 'https://example.com/checkout' }) },
  { slug: 'product-launch', name: 'Product Launch', category: 'Marketing', desc: 'Announcement template with hero image and benefits list.', subject: 'Introducing {{product_name}}', html: html('Introducing {{product_name}}', '<p style="font-size:15px;line-height:1.6;color:#333;">After 6 months of building, {{product_name}} is live today.</p><ul style="font-size:15px;line-height:1.7;color:#333;padding-left:18px;"><li>{{benefit_1}}</li><li>{{benefit_2}}</li><li>{{benefit_3}}</li></ul>', { label: 'See what is new', url: 'https://example.com/launch' }) },
  { slug: 'password-reset', name: 'Password Reset', category: 'Transactional', desc: 'Clear, secure, fast. Critical transactional email.', subject: 'Reset your {{company}} password', html: html('Reset your password', '<p style="font-size:15px;line-height:1.6;color:#333;">We got a request to reset the password for {{email}}. Click below to set a new one. This link expires in 30 minutes.</p><p style="font-size:13px;color:#888;">If you did not request this, you can safely ignore this email.</p>', { label: 'Reset password', url: 'https://example.com/reset?token=...' }) },
  { slug: 'verification-email', name: 'Verification Email', category: 'Transactional', desc: 'Single-action confirmation, optimized for deliverability.', subject: 'Verify your email for {{company}}', html: html('Verify your email', '<p style="font-size:15px;line-height:1.6;color:#333;">Welcome to {{company}}. Confirm your email to finish setting up your account.</p><p style="font-size:13px;color:#888;">This link expires in 24 hours.</p>', { label: 'Verify email', url: 'https://example.com/verify?token=...' }) },
];
