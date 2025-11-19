export default function Outcomes(){
  const stats = [
    { label: 'Avg. salary uplift', value: '38%' },
    { label: 'Grads hired in 90 days', value: '71%' },
    { label: 'NPS', value: '74' },
  ]

  return (
    <section id="outcomes" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-xl p-10">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white">{s.value}</div>
                <div className="mt-2 text-slate-300/90">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
