import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail, GraduationCap, Code2, Sparkles, MapPin, ArrowUpRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'About the Author',
  description: 'Sumitkumar Pandit - M.Sc. IT student, Full Stack Developer, AI Engineer &amp; Web3 Builder. Author of codedbysumit.com.',
  alternates: { canonical: '/about-author' },
};

export default function AboutAuthorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sumitkumar Pandit',
    jobTitle: 'Full Stack Developer, AI Engineer, Web3 Developer',
    url: 'https://codedbysumit.com/about-author',
    email: 'hello@codedbysumit.com',
    sameAs: [
      'https://github.com/SUMIT4859',
      'https://www.linkedin.com/in/sumit-kumar4859',
      'https://x.com/sumitxbt',
    ],
    alumniOf: 'M.Sc. Information Technology',
    description: 'Independent developer publishing honest reviews, tutorials and free tools on email marketing, AI and web development.'
  };

  return (
    <div className="pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-blue text-xs font-mono uppercase tracking-widest mb-6"><Sparkles className="h-3 w-3" /> About the Author</div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <div className="glass-card-glow rounded-3xl p-2">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                <Image src="/logos/profile.png" alt="Sumitkumar Pandit" fill className="object-cover" priority />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="https://github.com/SUMIT4859" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs hover:bg-accent transition"><Github className="h-3.5 w-3.5" /> GitHub</a>
              <a href="https://www.linkedin.com/in/sumit-kumar4859" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs hover:bg-accent transition"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a>
              <a href="https://x.com/sumitxbt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs hover:bg-accent transition"><Twitter className="h-3.5 w-3.5" /> X / Twitter</a>
              <a href="mailto:hello@codedbysumit.com" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs hover:bg-accent transition"><Mail className="h-3.5 w-3.5" /> Email</a>
            </div>
          </div>

          <div className="md:col-span-8">
            <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight gradient-text mb-3">Sumitkumar Pandit</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">Full Stack Developer · AI Engineer · Web3 Builder</p>
            <p className="mt-2 text-sm text-muted-foreground inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> India · Publishing under my real name at <b className="text-foreground">codedbysumit.com</b></p>

            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>I&apos;m an M.Sc. Information Technology student (current CGPA <b className="text-foreground">9.85</b>, B.Sc. IT CGPA <b className="text-foreground">9.73</b>) and an independent full-stack developer. I ship dApps on Base, AI agents with Groq and OpenAI, and production Next.js applications.</p>
              <p>I started <b className="text-foreground">codedbysumit.com</b> because most tutorials and “reviews” on the internet are either paid puff pieces or content-farm rewrites. I wanted a single place where developers, indie hackers and small SaaS founders can get straight answers on email marketing, SMTP, and the modern web stack — written by someone who actually builds and ships.</p>
              <p>Every review here is based on personal usage. Every code snippet has been run. Every free tool works in the browser with no signup and no email wall.</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5">
                <div className="h-10 w-10 rounded-xl icon-emerald flex items-center justify-center mb-3"><GraduationCap className="h-5 w-5" /></div>
                <p className="font-display font-semibold">Education</p>
                <p className="text-sm text-muted-foreground mt-1">M.Sc. Information Technology (in progress · CGPA 9.85)<br />B.Sc. Information Technology (CGPA 9.73)</p>
              </div>
              <div className="glass-card rounded-2xl p-5">
                <div className="h-10 w-10 rounded-xl icon-purple flex items-center justify-center mb-3"><Code2 className="h-5 w-5" /></div>
                <p className="font-display font-semibold">Stack</p>
                <p className="text-sm text-muted-foreground mt-1">Next.js · React · Node.js · Python · Solidity · MongoDB · Tailwind</p>
              </div>
              <div className="glass-card rounded-2xl p-5">
                <div className="h-10 w-10 rounded-xl icon-amber flex items-center justify-center mb-3"><Sparkles className="h-5 w-5" /></div>
                <p className="font-display font-semibold">Focus areas</p>
                <p className="text-sm text-muted-foreground mt-1">Email infra &amp; deliverability, AI agents, Web3 on Base, developer education.</p>
              </div>
              <div className="glass-card rounded-2xl p-5">
                <div className="h-10 w-10 rounded-xl icon-cyan flex items-center justify-center mb-3"><BookOpen className="h-5 w-5" /></div>
                <p className="font-display font-semibold">On this site</p>
                <p className="text-sm text-muted-foreground mt-1">12 in-depth guides · 9 email templates · 4 free tools · 1 honest Brevo review.</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-primary-gradient text-sm font-medium hover:opacity-95 transition">See my work <ArrowUpRight className="h-4 w-4" /></Link>
              <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition">Read the blog</Link>
              <Link href="/portfolio#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition">Get in touch</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
