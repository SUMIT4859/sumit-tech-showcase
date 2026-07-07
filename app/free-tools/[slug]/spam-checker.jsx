'use client';
import { useMemo, useState } from 'react';
import { ShieldAlert, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const SPAM_WORDS = ['free', 'guarantee', 'winner', 'win', 'click here', 'cash', 'cheap', 'urgent', 'act now', 'limited time', 'no risk', 'risk-free', '100% free', 'amazing', 'congratulations', 'increase sales', 'lowest price', 'order now', 'buy now', 'special promotion', 'opportunity', 'as seen on', 'double your', 'eliminate debt', 'extra income', 'fast cash', 'investment', 'make money', 'best price', 'discount', 'incredible deal'];

export default function SpamChecker() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const analysis = useMemo(() => {
    const text = (subject + ' ' + body).toLowerCase();
    if (!text.trim()) return null;
    const triggers = SPAM_WORDS.filter(w => text.includes(w));
    const allCapsRatio = subject ? (subject.replace(/[^A-Z]/g, '').length / Math.max(subject.replace(/\s/g, '').length, 1)) : 0;
    const exclamations = (subject.match(/!/g) || []).length;
    const subjectLen = subject.length;
    const hasLink = /https?:\/\//i.test(body);
    const wordCount = body.trim().split(/\s+/).filter(Boolean).length;

    const issues = [];
    if (triggers.length > 0) issues.push({ level: 'warn', msg: `${triggers.length} spam trigger word(s): ${triggers.slice(0, 5).join(', ')}${triggers.length > 5 ? '...' : ''}` });
    if (allCapsRatio > 0.4) issues.push({ level: 'warn', msg: 'Subject has too many ALL CAPS letters' });
    if (exclamations > 1) issues.push({ level: 'warn', msg: `Subject has ${exclamations} exclamation marks - reduce to 0 or 1` });
    if (subjectLen > 70) issues.push({ level: 'warn', msg: `Subject is ${subjectLen} chars - keep under 50 for mobile` });
    if (subjectLen > 0 && subjectLen < 10) issues.push({ level: 'warn', msg: 'Subject is very short - may look low-effort' });
    if (wordCount > 0 && wordCount < 30) issues.push({ level: 'info', msg: 'Body is short - consider adding context' });
    if (!hasLink && wordCount > 50) issues.push({ level: 'info', msg: 'No link found - add a clear CTA' });

    const score = Math.max(0, 100 - triggers.length * 7 - exclamations * 5 - (allCapsRatio > 0.4 ? 15 : 0) - (subjectLen > 70 ? 10 : 0));
    return { score, issues, triggers, wordCount };
  }, [subject, body]);

  return (
    <div>
      <div className="glass-card rounded-2xl p-6 space-y-4">
        <div>
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Subject Line</label>
          <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="e.g. WIN $1000 NOW - act fast!" className="mt-2 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground transition" />
        </div>
        <div>
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email Body</label>
          <textarea value={body} onChange={e => setBody(e.target.value)} rows={8} placeholder="Paste your email body here..." className="mt-2 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground transition resize-none" />
        </div>
      </div>

      {analysis && (
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="glass-card rounded-2xl p-6 md:col-span-1">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Deliverability Score</p>
            <p className="font-display text-6xl font-semibold gradient-text">{analysis.score}<span className="text-muted-foreground text-2xl">/100</span></p>
            <p className="mt-3 text-sm text-muted-foreground">{analysis.score >= 85 ? 'Excellent - low spam risk.' : analysis.score >= 65 ? 'Decent - some risk, review issues below.' : 'High spam risk - rewrite recommended.'}</p>
          </div>
          <div className="glass-card rounded-2xl p-6 md:col-span-2">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Issues found</p>
            {analysis.issues.length === 0 ? (
              <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4" /> No major issues detected.</div>
            ) : (
              <ul className="space-y-2">
                {analysis.issues.map((iss, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    {iss.level === 'warn' ? <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" /> : <ShieldAlert className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />}
                    <span className={iss.level === 'warn' ? '' : 'text-muted-foreground'}>{iss.msg}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
