'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Copy, Download, Eye, Code2, ArrowUpRight, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function TemplateView({ template, related }) {
  const [view, setView] = useState('preview');
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(template.html);
    setCopied(true);
    toast.success('HTML copied');
    setTimeout(() => setCopied(false), 1500);
  };

  const download = () => {
    const blob = new Blob([template.html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.slug}.html`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Downloaded');
  };

  return (
    <div>
      <div className="max-w-4xl">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">{template.category}</p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight gradient-text">{template.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{template.desc}</p>
        <div className="mt-6 p-4 rounded-2xl glass-card">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Subject Line</p>
          <p className="font-mono text-sm">{template.subject}</p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <button onClick={copy} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copied ? 'Copied' : 'Copy HTML'}
        </button>
        <button onClick={download} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent transition">
          <Download className="h-4 w-4" /> Download .html
        </button>
        <div className="inline-flex rounded-full glass p-1">
          <button onClick={() => setView('preview')} className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition ${view === 'preview' ? 'bg-foreground text-background' : 'text-muted-foreground'}`}><Eye className="h-3.5 w-3.5" /> Preview</button>
          <button onClick={() => setView('code')} className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition ${view === 'code' ? 'bg-foreground text-background' : 'text-muted-foreground'}`}><Code2 className="h-3.5 w-3.5" /> HTML</button>
        </div>
      </div>

      <div className="mt-6 glass-card rounded-2xl overflow-hidden">
        {view === 'preview' ? (
          <iframe srcDoc={template.html} title="Template preview" sandbox="" className="w-full h-[640px] bg-white" />
        ) : (
          <pre className="p-6 overflow-x-auto text-xs font-mono leading-relaxed max-h-[640px] overflow-y-auto"><code>{template.html}</code></pre>
        )}
      </div>

      <div className="mt-10 glass-card rounded-2xl p-6 max-w-4xl">
        <h3 className="font-display font-semibold mb-3">Customize this template</h3>
        <p className="text-sm text-muted-foreground mb-4">Replace these variables with your own content:</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {Array.from(new Set((template.html + ' ' + template.subject).match(/{{[^}]+}}/g) || [])).map(v => (
            <code key={v} className="text-xs px-3 py-2 rounded-lg bg-foreground/5 border border-border font-mono">{v}</code>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold mb-6">More {template.category} templates</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map(r => (
              <Link key={r.slug} href={`/templates/${r.slug}`} className="group glass-card rounded-2xl p-5 hover:bg-accent/40 transition">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{r.category}</p>
                <h3 className="font-display font-semibold mb-2">{r.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{r.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium">Open <ArrowUpRight className="h-3 w-3" /></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
