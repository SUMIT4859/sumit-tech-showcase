import { NextResponse } from 'next/server';

// Stateless API - no database, no admin panel. Production-ready for static / serverless deploy.
// Contact form uses mailto on the client. Newsletter endpoint just acknowledges -
// wire it to Brevo (or your provider of choice) later via a single fetch call.

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const json = (data, status = 200) => NextResponse.json(data, { status, headers: CORS });

export async function OPTIONS() { return new NextResponse(null, { status: 204, headers: CORS }); }

async function route(request, path) {
  const method = request.method;
  const p = (path || []).join('/');

  if (method === 'GET' && p === '') return json({ message: 'Sumit Portfolio API', ok: true });
  if (method === 'GET' && p === 'health') return json({ status: 'ok', timestamp: new Date().toISOString() });

  // POST /api/newsletter - stateless. Wire to Brevo / ConvertKit / etc. when ready.
  if (method === 'POST' && p === 'newsletter') {
    const body = await request.json().catch(() => ({}));
    const { email } = body;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return json({ error: 'valid email required' }, 400);
    // TODO: forward to Brevo API once affiliate / API key is available.
    console.log('[newsletter] new subscriber:', email);
    return json({ success: true });
  }

  return json({ error: 'Not found', path: p }, 404);
}

export async function GET(request, { params }) { const { path } = await params; return route(request, path); }
export async function POST(request, { params }) { const { path } = await params; return route(request, path); }
