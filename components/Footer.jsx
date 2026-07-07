'use client';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Shield, FileText, DollarSign, BadgeCheck } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      if (res.ok) { toast.success('Subscribed! Welcome aboard.'); setEmail(''); }
      else toast.error('Could not subscribe. Try again.');
    } catch { toast.error('Network error'); }
    setLoading(false);
  };

  return (
    <footer className="relative border-t border-border mt-32">
      <div className="absolute inset-x-0 -top-px h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--brand-emerald) / 0.5), hsl(var(--brand-purple) / 0.5), hsl(var(--brand-amber) / 0.5), transparent)' }} />
      <div className="container py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Let&apos;s build something <span className="italic font-light gradient-text-warm">extraordinary</span>.
            </h3>
            <p className="mt-4 text-muted-foreground max-w-md">Get monthly insights on AI, Web3, Next.js and modern engineering - straight to your inbox.</p>
            <form onSubmit={subscribe} className="mt-6 flex gap-2 max-w-md">
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder="you@example.com" className="flex-1 bg-background/60 border border-border rounded-full px-5 py-3 text-sm outline-none focus:border-primary transition" />
              <button disabled={loading} className="px-5 py-3 rounded-full btn-primary-gradient text-sm font-medium hover:opacity-95 transition disabled:opacity-50">
                {loading ? '...' : 'Subscribe'}
              </button>
            </form>

            <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground px-3 py-1.5 rounded-full glass">
              <BadgeCheck className="h-3.5 w-3.5" style={{ color: 'hsl(var(--brand-emerald))' }} /> Published by <span className="text-foreground font-medium">Sumitkumar Pandit</span> · real domain, real name, real GitHub.
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: 'hsl(var(--brand-emerald))' }}>Explore</p>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/#about" className="hover:text-foreground text-muted-foreground transition">About</Link></li>
                <li><Link href="/#projects" className="hover:text-foreground text-muted-foreground transition">Projects</Link></li>
                <li><Link href="/portfolio#skills" className="hover:text-foreground text-muted-foreground transition">Skills</Link></li>
                <li><Link href="/tools" className="hover:text-foreground text-muted-foreground transition">Tools</Link></li>
                <li><Link href="/portfolio#services" className="hover:text-foreground text-muted-foreground transition">Services</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: 'hsl(var(--brand-purple))' }}>Resources</p>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/free-tools" className="hover:text-foreground text-muted-foreground transition">Free Tools</Link></li>
                <li><Link href="/templates" className="hover:text-foreground text-muted-foreground transition">Templates</Link></li>
                <li><Link href="/tools/brevo" className="hover:text-foreground text-muted-foreground transition">Brevo Review</Link></li>
                <li><Link href="/blog" className="hover:text-foreground text-muted-foreground transition">Blog</Link></li>
                <li><Link href="/portfolio#contact" className="hover:text-foreground text-muted-foreground transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: 'hsl(var(--brand-amber))' }}>Legal</p>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-foreground text-muted-foreground transition inline-flex items-center gap-1.5"><Shield className="h-3 w-3" /> Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground text-muted-foreground transition inline-flex items-center gap-1.5"><FileText className="h-3 w-3" /> Terms of Service</Link></li>
                <li><Link href="/affiliate-disclosure" className="hover:text-foreground text-muted-foreground transition inline-flex items-center gap-1.5"><DollarSign className="h-3 w-3" /> Affiliate Disclosure</Link></li>
                <li><Link href="/about-author" className="hover:text-foreground text-muted-foreground transition inline-flex items-center gap-1.5"><BadgeCheck className="h-3 w-3" /> About the Author</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: 'hsl(var(--brand-cyan))' }}>Social</p>
              <ul className="space-y-2.5 text-sm">
                <li><a href="https://github.com/SUMIT4859" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground text-muted-foreground transition">GitHub <ArrowUpRight className="h-3 w-3" /></a></li>
                <li><a href="https://www.linkedin.com/in/sumit-kumar4859" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground text-muted-foreground transition">LinkedIn <ArrowUpRight className="h-3 w-3" /></a></li>
                <li><a href="https://x.com/sumitxbt" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground text-muted-foreground transition">Twitter / X <ArrowUpRight className="h-3 w-3" /></a></li>
                <li><a href="mailto:hello@codedbysumit.com" className="flex items-center gap-1.5 hover:text-foreground text-muted-foreground transition">Email <ArrowUpRight className="h-3 w-3" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Sumitkumar Pandit · codedbysumit.com. Crafted with obsession.
            <span className="block md:inline md:ml-2 text-muted-foreground/70">Contact: <a className="underline hover:text-foreground" href="mailto:hello@codedbysumit.com">hello@codedbysumit.com</a></span>
          </p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/SUMIT4859" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-accent transition"><Github className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/sumit-kumar4859" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-accent transition"><Linkedin className="h-4 w-4" /></a>
            <a href="https://x.com/sumitxbt" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-accent transition"><Twitter className="h-4 w-4" /></a>
            <a href="mailto:hello@codedbysumit.com" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-accent transition"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
