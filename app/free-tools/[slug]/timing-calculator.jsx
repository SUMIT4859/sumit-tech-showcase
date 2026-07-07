'use client';
import { useMemo, useState } from 'react';
import { Clock } from 'lucide-react';

const TIMEZONES = [
  { tz: 'America/Los_Angeles', label: 'Los Angeles (PT)' },
  { tz: 'America/New_York', label: 'New York (ET)' },
  { tz: 'Europe/London', label: 'London (GMT)' },
  { tz: 'Europe/Berlin', label: 'Berlin (CET)' },
  { tz: 'Asia/Kolkata', label: 'India (IST)' },
  { tz: 'Asia/Singapore', label: 'Singapore (SGT)' },
  { tz: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { tz: 'Australia/Sydney', label: 'Sydney (AEDT)' },
];

// Best send-time windows by audience type (in audience-local hours, 24h).
const WINDOWS = {
  b2b: [{ start: 9, end: 11 }, { start: 14, end: 16 }],
  consumer: [{ start: 8, end: 10 }, { start: 17, end: 21 }],
  newsletter: [{ start: 7, end: 9 }, { start: 19, end: 21 }],
};

function whenInMyTime(targetTz, targetHour) {
  // Build a Date for today at targetHour in targetTz, then format it in user's local tz.
  try {
    const now = new Date();
    // Use formatter trick to figure out offset of targetTz for today.
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: targetTz }));
    const localDate = new Date(now.toLocaleString('en-US'));
    const offsetMs = tzDate.getTime() - localDate.getTime();
    const target = new Date(now);
    target.setHours(targetHour, 0, 0, 0);
    const localEquivalent = new Date(target.getTime() - offsetMs);
    return localEquivalent.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch { return '-'; }
}

export default function TimingCalculator() {
  const [tz, setTz] = useState('America/New_York');
  const [audience, setAudience] = useState('b2b');

  const myWindows = useMemo(() => WINDOWS[audience].map(w => ({
    label: `${String(w.start).padStart(2, '0')}:00 - ${String(w.end).padStart(2, '0')}:00 ${tz}`,
    mineStart: whenInMyTime(tz, w.start),
    mineEnd: whenInMyTime(tz, w.end),
  })), [tz, audience]);

  return (
    <div>
      <div className="glass-card rounded-2xl p-6 grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Audience timezone</label>
          <select value={tz} onChange={e => setTz(e.target.value)} className="mt-2 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground transition">
            {TIMEZONES.map(t => <option key={t.tz} value={t.tz} className="bg-background">{t.label}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Audience type</label>
          <select value={audience} onChange={e => setAudience(e.target.value)} className="mt-2 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground transition">
            <option value="b2b" className="bg-background">B2B / Professional</option>
            <option value="consumer" className="bg-background">B2C / Consumer</option>
            <option value="newsletter" className="bg-background">Newsletter</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {myWindows.map((w, i) => (
          <div key={i} className="glass-card rounded-2xl p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Window {i + 1}</p>
            <p className="font-display text-2xl font-semibold mb-1">{w.label}</p>
            <p className="text-sm text-muted-foreground">In your local time: <span className="text-foreground font-medium">{w.mineStart} - {w.mineEnd}</span></p>
          </div>
        ))}
      </div>

      <div className="mt-8 glass-card rounded-2xl p-6">
        <h3 className="font-display font-semibold mb-2 flex items-center gap-2"><Clock className="h-4 w-4" /> Why these windows?</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">These are the highest-engagement windows observed across major email benchmarks. <b className="text-foreground">B2B</b> peaks mid-morning and early afternoon when professionals check inboxes between meetings. <b className="text-foreground">B2C</b> peaks during commute and evening leisure hours. <b className="text-foreground">Newsletters</b> perform best at the bookends of the workday. Always test against your own list - your audience is unique.</p>
      </div>
    </div>
  );
}
