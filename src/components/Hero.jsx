import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-[44rem] h-[44rem] rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-3xl"/>
        <div className="absolute -bottom-24 -left-24 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-400/20 blur-3xl"/>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 text-xs text-cyan-300/90 bg-cyan-400/10 ring-1 ring-cyan-400/20 px-3 py-1 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                Cohort-based digital marketing programs
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
                Become a top 1% digital marketer
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-xl">
                Ascendia is where ambitious professionals master performance marketing, brand strategy, and analytics to accelerate their careers.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#apply" className="inline-flex items-center justify-center gap-2 text-slate-900 font-medium bg-gradient-to-br from-white to-slate-200 rounded-xl px-5 py-3 shadow hover:shadow-lg transition">
                  Start your application <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#curriculum" className="inline-flex items-center justify-center gap-2 text-white/90 font-medium ring-1 ring-white/20 rounded-xl px-5 py-3 hover:bg-white/5 transition">
                  View curriculum
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-slate-300/90">
                <div className="flex -space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 border border-white/10" />
                  ))}
                </div>
                <p>Trusted by 2,000+ marketers</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-4">
                <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.18),transparent_35%)]"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 leading-none">A</div>
                      <div className="mt-2 text-slate-300/90">Ascend your marketing career</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
