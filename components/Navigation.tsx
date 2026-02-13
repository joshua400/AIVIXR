'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="glass rounded-full px-8 py-3 flex items-center justify-between border-black/5 shadow-sm">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/avixrlogo.png"
              alt="AVIXR Logo"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="/#process" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[13px] font-semibold font-manrope uppercase tracking-wider">
              Process
            </a>
            <a href="/#services" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[13px] font-semibold font-manrope uppercase tracking-wider">
              Services
            </a>
            <a href="/#projects" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[13px] font-semibold font-manrope uppercase tracking-wider">
              Projects
            </a>
            <a href="/#pricing" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[13px] font-semibold font-manrope uppercase tracking-wider">
              Pricing
            </a>
            <a href="/#blog" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[13px] font-semibold font-manrope uppercase tracking-wider">
              Blog
            </a>
            <a href="/#contact" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[13px] font-semibold font-manrope uppercase tracking-wider">
              Contact
            </a>
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/#contact"
              className="btn-primary text-sm py-2.5 px-6 shadow-lg shadow-calisto-bright-blue/10"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-calisto-dark/70 hover:text-calisto-dark transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-6 animate-fade-in-up border-black/5">
            <div className="flex flex-col gap-4">
              <a href="/#process" onClick={() => setIsOpen(false)} className="text-calisto-dark/70 hover:text-calisto-dark transition-colors font-semibold">Process</a>
              <a href="/#services" onClick={() => setIsOpen(false)} className="text-calisto-dark/70 hover:text-calisto-dark transition-colors font-semibold">Services</a>
              <a href="/#projects" onClick={() => setIsOpen(false)} className="text-calisto-dark/70 hover:text-calisto-dark transition-colors font-semibold">Projects</a>
              <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-calisto-dark/70 hover:text-calisto-dark transition-colors font-semibold">Pricing</a>
              <a href="/#blog" onClick={() => setIsOpen(false)} className="text-calisto-dark/70 hover:text-calisto-dark transition-colors font-semibold">Blog</a>
              <a href="/#contact" onClick={() => setIsOpen(false)} className="text-calisto-dark/70 hover:text-calisto-dark transition-colors font-semibold">Contact</a>
              <div className="pt-4 border-t border-black/5">
                <a
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center text-sm py-3 px-6 flex items-center justify-center gap-2"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
