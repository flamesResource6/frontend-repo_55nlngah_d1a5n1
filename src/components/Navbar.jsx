import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'Programs', href: '#programs' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.35)]" />
              <span className="text-white font-semibold text-lg tracking-tight">Ascendia</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex">
              <a href="#apply" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 bg-gradient-to-br from-white to-slate-200 px-4 py-2 rounded-xl shadow hover:shadow-lg transition">
                Apply Now <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-slate-200" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#apply" className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-900 bg-gradient-to-br from-white to-slate-200 px-4 py-2 rounded-xl">
                  Apply Now <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
