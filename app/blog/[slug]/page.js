import { notFound } from 'next/navigation';
import Link from 'next/link';
import { POSTS, getPostBySlug, getRelatedPosts } from '@/lib/data/blog';
import { Clock, Calendar, ArrowUpRight, Tag, ChevronRight } from 'lucide-react';
import ShareBar from './share-bar';

export async function generateStaticParams() { return POSTS.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date, authors: ['Sumitkumar Pandit'], tags: post.tags },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, creator: '@sumit4859' },
  };
}

function Block({ block }) {
  if (block.type === 'p') return <p className="text-lg text-muted-foreground leading-relaxed mb-6">{block.text}</p>;
  if (block.type === 'h2') return <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mt-12 mb-5 gradient-text">{block.text}</h2>;
  if (block.type === 'h3') return <h3 className="font-display text-xl font-semibold mt-8 mb-3">{block.text}</h3>;
  if (block.type === 'ul') return (
    <ul className="space-y-2.5 mb-6 ml-1">
      {block.items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
          <span className="leading-relaxed">{it}</span>
        </li>
      ))}
    </ul>
  );
  if (block.type === 'quote') return (
    <blockquote className="my-8 pl-6 border-l-2 border-foreground italic text-xl text-foreground/90 font-display">{block.text}</blockquote>
  );
if (block.type === 'code') return (
  <pre className="my-6 p-5 rounded-2xl bg-foreground/5 border border-border overflow-x-auto text-sm font-mono leading-relaxed">
    {(block.language || block.lang) && (
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
        {block.language || block.lang}
      </div>
    )}

    <code className="text-foreground whitespace-pre-wrap">
      {block.code || block.text}
    </code>
  </pre>
);
  if (block.type === 'faq') return (
  <div className="space-y-4 my-8">
    {block.items.map((item, i) => (
      <details
        key={i}
        className="rounded-xl border border-border bg-foreground/5 p-5 group"
      >
        <summary className="cursor-pointer font-semibold text-lg">
          {item.q}
        </summary>

        <p className="mt-3 text-muted-foreground leading-relaxed">
          {item.a}
        </p>
      </details>
    ))}
  </div>
);

if (block.type === 'links') return (
  <div className="grid gap-3 my-8">
    {block.items.map((item, i) => (
      <Link
        key={i}
        href={item.href}
        className="rounded-xl border border-border p-4 hover:bg-accent transition"
      >
        {item.title}
      </Link>
    ))}
  </div>
);

if (block.type === 'ol') return (
  <ol className="list-decimal pl-6 space-y-2 my-6">
    {block.items.map((item, i) => (
      <li key={i} className="text-muted-foreground">
        {item}
      </li>
    ))}
  </ol>
);

if (block.type === 'table') return (
  <div className="overflow-x-auto my-8">
    <table className="w-full border border-border">
      <thead>
        <tr>
          {block.headers.map((h, i) => (
            <th
              key={i}
              className="border border-border p-3 text-left font-semibold"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {block.rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td
                key={j}
                className="border border-border p-3"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


  return null;
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();
  const related = getRelatedPosts(slug, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: 'Sumitkumar Pandit', url: 'https://github.com/sumit4859' },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };

  return (
    <article className="pt-28 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container max-w-3xl">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link href="/blog" className="hover:text-foreground transition">Blog</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{post.category}</span>
        </div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{post.category}</p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight gradient-text text-balance mb-6">{post.title}</h1>
        <p className="text-xl text-muted-foreground mb-8 text-balance">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center font-display font-semibold text-xs">SP</div>
            <span className="text-foreground">Sumitkumar Pandit</span>
          </div>
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString('en', { dateStyle: 'medium' })}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
        </div>

        <div className="mt-10">
  {post.content.map((b, i) => <Block key={i} block={b} />)}
</div>

<section className="mt-16 rounded-2xl border border-border p-8 bg-foreground/5">
  <h2 className="font-display text-2xl font-semibold mb-4">
    Useful Free Tools
  </h2>

  <p className="text-muted-foreground mb-6">
    Improve your email deliverability, authentication, and campaign performance using these free tools.
  </p>

  <div className="grid md:grid-cols-2 gap-4">

    <Link
      href="/free-tools/email-header-analyzer"
      className="glass-card rounded-xl p-5 hover:bg-accent/40 transition"
    >
      <h3 className="font-semibold mb-2">Email Header Analyzer</h3>
      <p className="text-sm text-muted-foreground">
        Analyze SPF, DKIM, DMARC, sender IP and email authentication.
      </p>
    </Link>

    <Link
      href="/free-tools/spam-checker"
      className="glass-card rounded-xl p-5 hover:bg-accent/40 transition"
    >
      <h3 className="font-semibold mb-2">Spam Checker</h3>
      <p className="text-sm text-muted-foreground">
        Check your email content before sending.
      </p>
    </Link>

    <Link
      href="/free-tools/subject-line-generator"
      className="glass-card rounded-xl p-5 hover:bg-accent/40 transition"
    >
      <h3 className="font-semibold mb-2">Subject Line Generator</h3>
      <p className="text-sm text-muted-foreground">
        Generate engaging subject lines that improve open rates.
      </p>
    </Link>

    <Link
      href="/free-tools/html-email-preview"
      className="glass-card rounded-xl p-5 hover:bg-accent/40 transition"
    >
      <h3 className="font-semibold mb-2">HTML Email Preview</h3>
      <p className="text-sm text-muted-foreground">
        Preview and validate HTML emails before sending.
      </p>
    </Link>

  </div>
</section>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(t => <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-border bg-foreground/5"><Tag className="h-3 w-3 inline mr-1" />{t}</span>)}
            </div>
            <ShareBar title={post.title} />
          </div>
          
        </div>
      </div>

      {related.length > 0 && (
        <section className="container max-w-5xl mt-24">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Keep reading</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map(r => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="group glass-card rounded-2xl p-5 hover:bg-accent/40 transition">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">{r.category}</p>
                <h3 className="font-display font-semibold mb-2 group-hover:text-foreground transition leading-snug">{r.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
                <span className="mt-4 text-xs font-medium inline-flex items-center gap-1">Read <ArrowUpRight className="h-3 w-3" /></span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
