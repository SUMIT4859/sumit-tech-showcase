'use client';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="absolute inset-0 grid-pattern radial-fade opacity-40" />
      <div className="container relative text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Error 404</p>
        <h1 className="font-display text-[20vw] md:text-[14rem] font-semibold tracking-tight leading-none gradient-text">404</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-md mx-auto">This page slipped through the cracks. Let&apos;s get you back.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition"><Home className="h-4 w-4" /> Home</Link>
          <button onClick={() => history.back()} className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium hover:bg-accent transition"><ArrowLeft className="h-4 w-4" /> Back</button>
        </div>
      </div>
    </div>
  );
}
