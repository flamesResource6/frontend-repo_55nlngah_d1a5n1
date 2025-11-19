export default function Curriculum(){
  const modules = [
    { title: 'Foundations & Strategy', points: ['Growth models', 'Positioning', 'ICP mapping'] },
    { title: 'Acquisition Engines', points: ['Paid socials + search', 'SEO & content', 'Partnerships'] },
    { title: 'Lifecycle & Retention', points: ['Onboarding', 'Email & CRM', 'Activation loops'] },
    { title: 'Analytics & Experimentation', points: ['Attribution', 'AB testing', 'North-star metrics'] },
    { title: 'Brand & Creative', points: ['Narratives', 'Landing pages', 'CRO systems'] },
    { title: 'Career Outcomes', points: ['Portfolio', 'Mock interviews', 'Offer negotiation'] },
  ]

  return (
    <section id="curriculum" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Curriculum that compounds</h2>
            <p className="mt-3 text-slate-300">A comprehensive, hands-on journey that mirrors real-world marketing. Build mastery through repetition, feedback, and iteration.</p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200 text-sm">
              Weekly live sessions, async projects, peer reviews, and 1:1 mentorship.
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {modules.map((m) => (
              <div key={m.title} className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
                <h3 className="text-white font-medium">{m.title}</h3>
                <ul className="mt-3 space-y-2 text-slate-300/90 text-sm">
                  {m.points.map(p => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"/>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
