'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/avixrlogo.png"
              alt="AVIXR Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Projects
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-6"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
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
          <div className="lg:hidden mt-2 glass rounded-2xl p-6 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors font-medium">Home</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors font-medium">Services</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors font-medium">About</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors font-medium">Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary text-center text-sm py-2.5 px-6">Get in Touch</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
