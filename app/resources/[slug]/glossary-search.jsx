'use client';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

export default function GlossarySearch({ entries }) {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => entries.filter(e => !q || (e.term + ' ' + e.def).toLowerCase().includes(q.toLowerCase())), [q, entries]);
  return (
    <div>
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search terms (SMTP, DKIM, DMARC...)" className="w-full pl-11 pr-4 py-3 rounded-full glass text-sm outline-none focus:border-foreground transition" />
      </div>
      {filtered.length === 0 ? (
        <p className="text-muted-foreground py-12 text-center">No matching terms.</p>
      ) : (
        <div className="divide-y divide-border">
          {filtered.map(e => (
            <div key={e.term} id={e.term.toLowerCase()} className="py-5 scroll-mt-32">
              <h3 className="font-display text-xl font-semibold mb-2">{e.term}</h3>
              <p className="text-muted-foreground leading-relaxed">{e.def}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
