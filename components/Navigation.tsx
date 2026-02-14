'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex justify-center px-4 sm:px-6 lg:px-8 py-4">
        <div className="glass rounded-full px-8 py-2.5 flex items-center gap-12 border-black/5 shadow-sm">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img src="/avixrlogo.png" alt="AVIXR Logo" className="h-7 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="/#process" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[12px] font-bold font-manrope uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-black/[0.03] border border-transparent hover:border-black/[0.05]">
              Process
            </a>
            <a href="/#services" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[12px] font-bold font-manrope uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-black/[0.03] border border-transparent hover:border-black/[0.05]">
              Services
            </a>
            <a href="/#projects" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[12px] font-bold font-manrope uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-black/[0.03] border border-transparent hover:border-black/[0.05]">
              Projects
            </a>
            <a href="/#pricing" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[12px] font-bold font-manrope uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-black/[0.03] border border-transparent hover:border-black/[0.05]">
              Pricing
            </a>
            <a href="/#contact" className="text-calisto-dark/80 hover:text-calisto-dark transition-colors text-[12px] font-bold font-manrope uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-black/[0.03] border border-transparent hover:border-black/[0.05]">
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
                <a href="/#process" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Process</a>
                <a href="/#services" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Services</a>
                <a href="/#projects" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Projects</a>
                <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-calisto-dark font-tight">Pricing</a>
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
