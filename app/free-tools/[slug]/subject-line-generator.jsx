'use client';
import { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

const FORMULAS = [
  (t) => `${t}: the 5-minute guide`,
  (t) => `How I solved ${t} (after 12 failed attempts)`,
  (t) => `${t} - what nobody tells you`,
  (t) => `Stop doing ${t} wrong`,
  (t) => `${t} in 2025: the honest review`,
  (t) => `The ${t} mistake costing you customers`,
  (t) => `${t}: a no-BS walkthrough`,
  (t) => `Why ${t} is broken (and how to fix it)`,
  (t) => `Quick question about ${t}`,
  (t) => `Inside: my ${t} playbook`,
  (t) => `${t} - is it worth it?`,
  (t) => `7 ${t} lessons I learned the hard way`,
  (t) => `The future of ${t}`,
  (t) => `${t} cheat sheet (free download)`,
  (t) => `${t} - one weird trick that actually works`,
  (t) => `What ${t} taught me about shipping`,
  (t) => `${t} in 60 seconds`,
  (t) => `Should you care about ${t}?`,
  (t) => `${t}: 3 things to try this week`,
  (t) => `My honest take on ${t}`,
];

export default function SubjectLineGenerator() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState([]);
  const [copied, setCopied] = useState(null);

  const generate = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;
    const t = topic.trim();
    const shuffled = [...FORMULAS].sort(() => Math.random() - 0.5).slice(0, 12);
    setResults(shuffled.map(f => f(t)));
  };

  const copy = (text, i) => {
    navigator.clipboard.writeText(text);
    setCopied(i);
    toast.success('Copied');
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div>
      <form onSubmit={generate} className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row gap-3">
        <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Your topic e.g. email marketing, Brevo, SMTP" className="flex-1 bg-transparent border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground transition" />
        <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
          <Sparkles className="h-4 w-4" /> Generate
        </button>
      </form>

      {results.length > 0 && (
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          {results.map((r, i) => (
            <div key={i} className="group glass-card rounded-xl p-4 flex items-center gap-3 hover:bg-accent/40 transition">
              <span className="flex-1 text-sm">{r}</span>
              <button onClick={() => copy(r, i)} className="h-8 w-8 rounded-lg glass flex items-center justify-center hover:bg-accent transition shrink-0" aria-label="Copy">
                {copied === i ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 glass-card rounded-2xl p-6">
        <h3 className="font-display font-semibold mb-2">Tips for high open rates</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>- Keep it under 50 characters - mobile clients truncate longer.</li>
          <li>- Use numbers, questions, or specifics to spark curiosity.</li>
          <li>- Avoid spammy words: free, win, urgent, act now.</li>
          <li>- Test 2-3 variants per send to find what works for your list.</li>
        </ul>
      </div>
    </div>
  );
}
