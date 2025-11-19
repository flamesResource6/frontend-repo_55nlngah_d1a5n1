export default function Testimonials(){
  const items = [
    {
      quote: 'Ascendia taught me to think like a growth leader. I went from channel specialist to owning the entire funnel.',
      name: 'Priya S',
      role: 'Growth Lead, SaaS',
    },
    {
      quote: 'The accountability and feedback were game-changing. I doubled pipeline in 4 months at my company.',
      name: 'Daniel K',
      role: 'Head of Demand Gen',
    },
    {
      quote: 'Finally, a program that blends brand and performance. I landed a Senior PMM role after graduating.',
      name: 'Laura M',
      role: 'Senior PMM, Fintech',
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.name} • {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
