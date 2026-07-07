'use client';
import { useState } from 'react';
import { Eye, Copy } from 'lucide-react';
import { toast } from 'sonner';

const SAMPLE = `<!DOCTYPE html>
<html><body style="font-family:Inter,sans-serif;background:#f5f5f7;margin:0;padding:32px;">
  <table width="560" cellspacing="0" cellpadding="0" style="margin:0 auto;background:#fff;border-radius:16px;padding:32px;">
    <tr><td>
      <h1 style="margin:0 0 12px;font-size:24px;">Hello from your email!</h1>
      <p style="font-size:15px;color:#555;line-height:1.6;">This is a preview of your HTML email rendered exactly as it will look in a modern client.</p>
      <a href="#" style="display:inline-block;margin-top:16px;background:#111;color:#fff;padding:12px 24px;border-radius:999px;text-decoration:none;font-size:14px;">Call to action</a>
    </td></tr>
  </table>
</body></html>`;

export default function HtmlPreview() {
  const [html, setHtml] = useState(SAMPLE);

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">HTML Source</p>
          <button onClick={() => { navigator.clipboard.writeText(html); toast.success('Copied'); }} className="text-xs inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition"><Copy className="h-3 w-3" /> Copy</button>
        </div>
        <textarea value={html} onChange={e => setHtml(e.target.value)} rows={20} className="w-full bg-foreground/5 border border-border rounded-xl p-4 text-xs font-mono outline-none focus:border-foreground transition resize-none" />
      </div>
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Live Preview</p>
          <span className="text-xs text-muted-foreground inline-flex items-center gap-1"><Eye className="h-3 w-3" /> Sandboxed</span>
        </div>
        <iframe srcDoc={html} title="Email preview" sandbox="" className="w-full h-[500px] rounded-xl border border-border bg-white" />
      </div>
    </div>
  );
}
