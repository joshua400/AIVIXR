'use client'

import { Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-luxury-white border-t border-charcoal/5 overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Unified Action Box */}
        <div className="glass px-10 py-16 mb-12 rounded-3xl border border-charcoal/5 shadow-2xl shadow-charcoal/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">

            {/* Brand Information */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src="/logo.png"
                alt="AVIXR"
                className="h-24 md:h-28 w-auto object-contain mb-6 transition-all hover:scale-105 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] brightness-110 contrast-110"
              />
              <p className="text-sm text-charcoal/60 leading-relaxed font-sans max-w-xs">
                Simplifying the complex through elegant digital solutions.
              </p>
            </div>

            {/* Consolidated Links: Explore */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-8 text-charcoal flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-accent-gold" /> Explore
              </h4>
              <ul className="space-y-4 text-center md:text-left">
                {['Process', 'Services', 'Projects'].map((item) => (
                  <li key={item}>
                    <a href={`/#${item.toLowerCase()}`} className="text-sm text-charcoal/60 hover:text-charcoal transition-colors font-sans block group">
                      <span className="relative">
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-charcoal transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consolidated Links: Connect */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-8 text-charcoal flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-accent-gold" /> Connect
              </h4>
              <ul className="space-y-4 text-center md:text-left">
                <li>
                  <a href="mailto:ceo@avixr.in" className="flex items-center gap-3 text-sm text-charcoal/60 hover:text-charcoal transition-colors font-sans group">
                    <div className="w-8 h-8 rounded-full bg-white border border-charcoal/5 flex items-center justify-center group-hover:border-charcoal/20 transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    ceo@avixr.in
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/avixr-private-limited/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-charcoal/60 hover:text-charcoal transition-colors font-sans group">
                    <div className="w-8 h-8 rounded-full bg-white border border-charcoal/5 flex items-center justify-center group-hover:border-charcoal/20 transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </div>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/avixr_pvt_ltd/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-charcoal/60 hover:text-charcoal transition-colors font-sans group">
                    <div className="w-8 h-8 rounded-full bg-white border border-charcoal/5 flex items-center justify-center group-hover:border-charcoal/20 transition-colors">
                      <Instagram className="w-3.5 h-3.5" />
                    </div>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Vertical Established Tag (Desktop) */}
          <div className="hidden md:absolute right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
            <span className="text-[10px] font-bold tracking-[0.8em] uppercase text-charcoal font-sans [writing-mode:vertical-rl] rotate-180">
              ESTABLISHED MMXXII
            </span>
          </div>
        </div>

        {/* Bottom Bar: Minimal info outside the box */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-charcoal/5">
          <p className="text-[10px] text-charcoal/30 font-sans tracking-widest uppercase">
            © {new Date().getFullYear()} AVIXR Technologies Pvt Ltd
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-charcoal/30 font-sans tracking-widest uppercase">Chennai, India</span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/20" />
            <span className="text-[10px] text-charcoal/30 font-sans tracking-widest uppercase flex items-center gap-2">
              Deep-Tech <span className="w-1 h-1 rounded-full bg-accent-gold" /> Global
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
