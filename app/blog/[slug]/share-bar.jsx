'use client';
import { Twitter, Linkedin, Link2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ShareBar({ title }) {
  const share = (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (platform === 'copy') { navigator.clipboard.writeText(url); toast.success('Link copied'); return; }
    const links = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    window.open(links[platform], '_blank');
  };
  return (
    <div className="flex gap-2">
      <button onClick={() => share('twitter')} className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-accent transition" aria-label="Share on Twitter"><Twitter className="h-4 w-4" /></button>
      <button onClick={() => share('linkedin')} className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-accent transition" aria-label="Share on LinkedIn"><Linkedin className="h-4 w-4" /></button>
      <button onClick={() => share('copy')} className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-accent transition" aria-label="Copy link"><Link2 className="h-4 w-4" /></button>
    </div>
  );
}
