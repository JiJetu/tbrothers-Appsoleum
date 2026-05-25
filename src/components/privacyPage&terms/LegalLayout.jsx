import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar } from 'lucide-react'
import { IMAGES } from '../../assets'

export function LegalLayout({
  badge,
  title,
  description,
  effectiveDate,
  lastUpdated,
  children,
}) {
  return (
    <div className="min-h-screen bg-[#0B1729]">
      {/* Top Nav */}
      <header className="bg-appso-navy/80 backdrop-blur-lg border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-appso-orange rounded-lg flex items-center justify-center">
              <img src={IMAGES.logo} alt="Appsoleum Logo" />
            </div>
            <span className="text-white font-bold text-lg">Appsoleum</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-appso-orange transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-appso-orange/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 py-16 md:py-20 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-appso-orange/10 border border-appso-orange/30 px-4 py-1.5 rounded-full mb-6">
            <span className="text-appso-orange text-xs font-bold tracking-widest uppercase">
              {badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            {title}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 px-3 py-1.5 rounded-full text-slate-300">
              <Calendar size={12} className="text-appso-orange" />
              Effective: {effectiveDate}
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 px-3 py-1.5 rounded-full text-slate-300">
              <Calendar size={12} className="text-appso-orange" />
              Updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-6 py-16">{children}</main>
    </div>
  )
}

export function LegalSection({ num, title, children, id }) {
  return (
    <section id={id} className="scroll-mt-24 mb-10 last:mb-0">
      <div className="flex items-start gap-4 mb-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-appso-orange/10 border border-appso-orange/20 flex items-center justify-center text-appso-orange font-bold text-sm">
          {num}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white pt-1.5">
          {title}
        </h2>
      </div>
      <div className="pl-14 text-slate-400 leading-relaxed">{children}</div>
    </section>
  )
}
