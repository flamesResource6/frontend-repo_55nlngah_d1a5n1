import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Curriculum from './components/Curriculum'
import Outcomes from './components/Outcomes'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(37,99,235,0.06),transparent_35%)] pointer-events-none" />
      <Navbar/>
      <main>
        <Hero/>
        <Features/>
        <Curriculum/>
        <Outcomes/>
        <Testimonials/>
        <CTA/>
      </main>
      <footer className="py-12 border-t border-white/10 mt-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400" />
            © {new Date().getFullYear()} Ascendia. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#apply" className="text-white">Apply</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
