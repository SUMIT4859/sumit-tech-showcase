'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Image from "next/image";

const LINKS = [
  { href: '/email-hub', label: 'Email Hub' },
  { href: '/blog', label: 'Blog' },
  { href: '/free-tools', label: 'Free Tools' },
  { href: '/templates', label: 'Templates' },
  { href: '/resources', label: 'Resources' },
  { href: '/portfolio', label: 'Portfolio' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container">
        <nav className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? 'glass shadow-[0_8px_32px_rgba(0,0,0,0.12)]' : 'bg-transparent'}`}>
    

<Link href="/" className="flex items-center gap-3 group shrink-0">
  <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-white p-1 shadow-sm">
    <Image
      src="/logos/profile.png"
      alt="Sumit.dev Logo"
      fill
      className="object-contain"
      priority
    />
  </div>

  <span className="font-display font-semibold tracking-tight hidden sm:inline">
    Sumit<span className="text-muted-foreground">.dev</span>
  </span>
</Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} className={`px-3 py-1.5 text-sm transition-colors rounded-full hover:bg-accent ${pathname?.startsWith(l.href) ? 'text-foreground bg-accent/60' : 'text-muted-foreground hover:text-foreground'}`}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/portfolio#contact" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition">
              <Sparkles className="h-3.5 w-3.5" /> Hire Me
            </Link>
            <button onClick={() => setOpen(v => !v)} className="lg:hidden h-9 w-9 rounded-full glass flex items-center justify-center" aria-label="Menu">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
            >
              {LINKS.map(l => (
                <Link key={l.href} href={l.href} className="px-4 py-3 rounded-xl hover:bg-accent text-sm">
                  {l.label}
                </Link>
              ))}
              <Link href="/portfolio#contact" className="mt-2 px-4 py-3 rounded-xl bg-foreground text-background text-sm font-medium text-center">
                Hire Me
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
