import { useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || ''

export default function CTA(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${apiBase}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, source: 'ascendia-website' })
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus('success')
      setName(''); setEmail(''); setMessage('')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="apply" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Apply for the next cohort</h3>
            <p className="mt-3 text-slate-300">Limited seats. Tell us about your goals and we’ll send the full program guide, dates and scholarships.</p>
            <ul className="mt-6 space-y-2 text-slate-300/90 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-300"/>Career consult within 48h</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-300"/>Scholarships for high-potential talent</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-300"/>Risk-free: full refund before week 2</li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Full name</label>
                  <input value={name} onChange={e=>setName(e.target.value)} required placeholder="Jane Doe" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Email</label>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="jane@company.com" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-slate-300 mb-2">Goals (optional)</label>
                <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us where you want to be in 6 months..." rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <button disabled={status==='loading'} className="inline-flex items-center justify-center gap-2 text-slate-900 font-medium bg-gradient-to-br from-white to-slate-200 rounded-xl px-5 py-3 shadow hover:shadow-lg transition">
                  {status==='loading' ? 'Submitting…' : 'Request program guide'}
                </button>
                {status==='success' && <span className="text-emerald-300 text-sm">Thanks! We’ll be in touch shortly.</span>}
                {status && status!=='success' && status!=='loading' && <span className="text-rose-300 text-sm">{status}</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
