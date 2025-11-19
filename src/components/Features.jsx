import { Rocket, BarChart3, Target, LineChart, Users2, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Career Acceleration',
    desc: 'Structured learning paths with mentorship to 10x your trajectory.',
  },
  {
    icon: BarChart3,
    title: 'Performance-First',
    desc: 'Master acquisition, retention and lifecycle with real projects.',
  },
  {
    icon: Target,
    title: 'Strategic Thinking',
    desc: 'Build the mindset of a CMO: brand, narrative, positioning, and pricing.',
  },
  {
    icon: LineChart,
    title: 'Analytics Mastery',
    desc: 'Attribution, experimentation, and dashboards to drive decisions.',
  },
  {
    icon: Users2,
    title: 'Elite Community',
    desc: 'Learn alongside high-caliber peers, operators and hiring managers.',
  },
  {
    icon: ShieldCheck,
    title: 'Job-Ready Outcomes',
    desc: 'Portfolio-worthy work, certifications and interview prep.',
  },
]

export default function Features(){
  return (
    <section id="programs" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Programs designed for impact</h2>
          <p className="mt-3 text-slate-300">Practical, mentor-led and outcomes-focused. Built for working professionals.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 hover:bg-slate-900/60 transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-cyan-300">
                <f.icon className="w-5 h-5"/>
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
