'use client'

import { Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-luxury-white border-t border-charcoal/5 overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <span className="font-display font-bold text-2xl tracking-tighter text-charcoal">AVIXR.</span>
            <p className="mt-4 text-sm text-charcoal/60 leading-relaxed font-sans">
              Simplifying the complex through elegant digital solutions.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-24 w-full md:w-auto">
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-6 text-charcoal">Explore</h4>
              <ul className="space-y-4">
                {['Process', 'Services', 'Projects'].map((item) => (
                  <li key={item}>
                    <a href={`/#${item.toLowerCase()}`} className="text-sm text-charcoal/60 hover:text-charcoal transition-colors font-sans block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-6 text-charcoal">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:ceo@avixr.in" className="flex items-center gap-2 text-sm text-charcoal/60 hover:text-charcoal transition-colors font-sans">
                    <Mail className="w-4 h-4" /> ceo@avixr.in
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/avixr-private-limited/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-charcoal/60 hover:text-charcoal transition-colors font-sans">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/avixr_pvt_ltd/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-charcoal/60 hover:text-charcoal transition-colors font-sans">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-charcoal/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal/40 font-sans">
            © {new Date().getFullYear()} AVIXR Technologies Pvt Ltd.
          </p>
          <p className="text-xs text-charcoal/40 font-sans flex items-center gap-2">
            Chennai, India <span className="w-1 h-1 rounded-full bg-accent-gold" /> Est. 2022
          </p>
        </div>
      </div>
    </footer>
  )
}
