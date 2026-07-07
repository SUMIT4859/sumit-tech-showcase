'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import { Search, FolderGit2, Wrench, BookOpen, Mail, User, Sparkles, Briefcase, ArrowRight } from 'lucide-react';
import { PROJECTS, TOOLS } from '@/lib/data/site';
import { POSTS } from '@/lib/data/blog';

const PAGES = [
  { href: '/', label: 'Home', Icon: Sparkles },
  { href: '/#about', label: 'About', Icon: User },
  { href: '/#projects', label: 'Projects', Icon: FolderGit2 },
  { href: '/tools', label: 'Tools I Recommend', Icon: Wrench },
  { href: '/blog', label: 'Blog', Icon: BookOpen },
  { href: '/#services', label: 'Services', Icon: Briefcase },
  { href: '/#contact', label: 'Contact', Icon: Mail },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const router = useRouter();

  useEffect(() => {
    const onKey = (e) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
        setOpen(v => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (href) => { setOpen(false); router.push(href); };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center pt-[15vh] px-4" onClick={() => setOpen(false)}>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-md" />
      <Command className="relative w-full max-w-2xl rounded-2xl glass-card overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Command.Input value={q} onValueChange={setQ} placeholder="Search pages, projects, tools, articles…" className="flex-1 bg-transparent outline-none text-sm" />
          <kbd className="text-[10px] font-mono px-2 py-1 rounded-md border border-border text-muted-foreground">ESC</kbd>
        </div>
        <Command.List className="max-h-[400px] overflow-y-auto p-2">
          <Command.Empty className="p-6 text-center text-sm text-muted-foreground">No results.</Command.Empty>
          <Command.Group heading="Pages" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-3 py-2">
            {PAGES.map(p => (
              <Command.Item key={p.href} onSelect={() => go(p.href)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm aria-selected:bg-accent">
                <p.Icon className="h-4 w-4" /> {p.label} <ArrowRight className="h-3 w-3 ml-auto opacity-50" />
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Projects" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-3 py-2 mt-2">
            {PROJECTS.map(p => (
              <Command.Item key={p.slug} onSelect={() => go('/#projects')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm aria-selected:bg-accent">
                <FolderGit2 className="h-4 w-4" /> {p.title}
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Tools" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-3 py-2 mt-2">
            {TOOLS.map(t => (
              <Command.Item key={t.slug} onSelect={() => go(`/tools/${t.slug}`)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm aria-selected:bg-accent">
                <Wrench className="h-4 w-4" /> {t.name} <span className="text-xs text-muted-foreground">· {t.category}</span>
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Articles" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-3 py-2 mt-2">
            {POSTS.map(p => (
              <Command.Item key={p.slug} onSelect={() => go(`/blog/${p.slug}`)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm aria-selected:bg-accent">
                <BookOpen className="h-4 w-4" /> {p.title}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
        <div className="px-5 py-3 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
          <span>Navigate with arrow keys</span>
          <span><kbd className="font-mono px-1.5 py-0.5 rounded border border-border">⌘</kbd> + <kbd className="font-mono px-1.5 py-0.5 rounded border border-border">K</kbd></span>
        </div>
      </Command>
    </div>
  );
}
