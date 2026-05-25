import { MapPin, Phone, Mail, User } from 'lucide-react'
export function ContactCard() {
  return (
    <div className="mt-12 bg-appso-dark border border-slate-800 rounded-2xl p-8">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-px bg-appso-orange"></div>
        <span className="text-appso-orange text-xs font-bold tracking-widest uppercase">
          Section 3
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">
        Contact Information
      </h3>
      <p className="text-slate-400 text-sm mb-8">
        Questions about our terms or privacy practices? Reach out anytime.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-appso-orange/10 text-appso-orange flex items-center justify-center shrink-0">
            <User size={16} />
          </div>
          <div className="min-w-0">
            <div className="text-slate-500 text-[10px] uppercase tracking-wider mb-1">
              Founder & CEO
            </div>
            <div className="text-white text-sm font-semibold">
              Tron Brothers
            </div>
            <div className="text-slate-400 text-xs">Appsoleum LLC</div>
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-appso-orange/10 text-appso-orange flex items-center justify-center shrink-0">
            <MapPin size={16} />
          </div>
          <div className="min-w-0">
            <div className="text-slate-500 text-[10px] uppercase tracking-wider mb-1">
              Address
            </div>
            <div className="text-white text-sm font-semibold">
              5141 Stone Mountain Hwy
            </div>
            <div className="text-slate-400 text-xs">
              Stone Mountain, GA 30087, United States
            </div>
          </div>
        </div>

        <a
          href="tel:+18773277762"
          className="bg-slate-900/40 border border-slate-800 hover:border-appso-orange/40 rounded-xl p-4 flex items-start gap-3 transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-appso-orange/10 text-appso-orange flex items-center justify-center shrink-0">
            <Phone size={16} />
          </div>
          <div className="min-w-0">
            <div className="text-slate-500 text-[10px] uppercase tracking-wider mb-1">
              Phone
            </div>
            <div className="text-white text-sm font-semibold group-hover:text-appso-orange transition-colors">
              +1-877-327-7762
            </div>
            <div className="text-slate-400 text-xs">
              Mon–Fri, business hours
            </div>
          </div>
        </a>

        <a
          href="mailto:info@appsoleum.org"
          className="bg-slate-900/40 border border-slate-800 hover:border-appso-orange/40 rounded-xl p-4 flex items-start gap-3 transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-appso-orange/10 text-appso-orange flex items-center justify-center shrink-0">
            <Mail size={16} />
          </div>
          <div className="min-w-0">
            <div className="text-slate-500 text-[10px] uppercase tracking-wider mb-1">
              Email
            </div>
            <div className="text-white text-sm font-semibold group-hover:text-appso-orange transition-colors break-all">
              info@appsoleum.org
            </div>
            <div className="text-slate-400 text-xs">
              We reply within 48 hours
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
