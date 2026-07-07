// Central affiliate configuration - swap links here, propagates everywhere.
// Add new providers (Resend, Mailchimp, etc.) without touching components.

export const AFFILIATE = {
  brevo: {
    name: 'Brevo',
    url: '#', // Replace with affiliate link when available
    disclosure: 'Some links on this page are affiliate links. We may earn a commission - at no extra cost to you - if you sign up. This does not influence our review.',
    brandColor: '#0B996E',
    category: 'Email Marketing',
  },
  // Add future affiliates here:
  // resend: { name: 'Resend', url: '#', brandColor: '#000000' },
  // mailchimp: { name: 'Mailchimp', url: '#', brandColor: '#FFE01B' },
  // mailerlite: { name: 'MailerLite', url: '#', brandColor: '#0096FF' },
  // cloudflare: { name: 'Cloudflare', url: '#', brandColor: '#F38020' },
  // vercel: { name: 'Vercel', url: '#', brandColor: '#000000' },
};

export const getAffiliate = (slug) => AFFILIATE[slug] || { name: slug, url: '#', disclosure: '', brandColor: '#000' };
