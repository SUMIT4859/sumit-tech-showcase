'use client';

import { useState } from 'react';

export default function EmailHeaderAnalyzer() {
  const [headers, setHeaders] = useState('');
  const [result, setResult] = useState(null);

  const analyze = () => {
    const text = headers.toLowerCase();

    setResult({
      spf: text.includes('spf=pass')
        ? 'PASS'
        : text.includes('spf=fail')
        ? 'FAIL'
        : 'Not Found',

      dkim: text.includes('dkim=pass')
        ? 'PASS'
        : text.includes('dkim=fail')
        ? 'FAIL'
        : 'Not Found',

      dmarc: text.includes('dmarc=pass')
        ? 'PASS'
        : text.includes('dmarc=fail')
        ? 'FAIL'
        : 'Not Found',

      ip:
        headers.match(
          /\b(?:\d{1,3}\.){3}\d{1,3}\b/
        )?.[0] || 'Not Found',
    });
  };

  return (
    <div className="space-y-6">
      <textarea
        value={headers}
        onChange={(e) => setHeaders(e.target.value)}
        placeholder="Paste complete email headers here..."
        className="w-full h-80 rounded-xl border bg-background p-4"
      />

      <button
        onClick={analyze}
        className="px-6 py-3 rounded-xl bg-white text-black font-medium"
      >
        Analyze Headers
      </button>

      {result && (
        <div className="grid md:grid-cols-2 gap-4">

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">SPF</h3>
            <p>{result.spf}</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">DKIM</h3>
            <p>{result.dkim}</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">DMARC</h3>
            <p>{result.dmarc}</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Sender IP</h3>
            <p>{result.ip}</p>
          </div>

        </div>
      )}
    </div>
  );
}