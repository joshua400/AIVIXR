'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
            <a href="/#about" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[13px] font-semibold font-manrope uppercase tracking-wider">
              About
            </a>
            <a href="/#services" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[13px] font-semibold font-manrope uppercase tracking-wider">
              Services
            </a>
            <a href="/#process" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[13px] font-semibold font-manrope uppercase tracking-wider">
              Process
            </a>
            <a href="/#digital-marketing" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[13px] font-semibold font-manrope uppercase tracking-wider">
              Digital Marketing
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
            className="lg:hidden p-2 text-calisto-dark/60 hover:text-calisto-dark transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-black/5 overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                <a href="/#about" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">About</a>
                <a href="/#services" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Services</a>
                <a href="/#process" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Process</a>
                <a href="/#digital-marketing" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Digital Marketing</a>
                <a href="/#projects" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Projects</a>
                <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Pricing</a>
                <a href="/#blog" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Blog</a>
                <a href="/#contact" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Contact</a>
                <a href="/#contact" onClick={() => setIsOpen(false)} className="btn-primary w-full py-4 text-center mt-4">Book a Call</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
