'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      <div className="mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
        <div className={`
          relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500
          ${scrolled
            ? 'glass shadow-sm bg-white/80 w-full max-w-5xl'
            : 'w-full max-w-7xl bg-transparent'
          }
        `}>

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group z-50">
            {/* Using text logo for maximalism/minimalism until image is fixed or preferred */}
            <span className="font-display font-bold text-xl tracking-tighter text-charcoal">AVIXR.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {['Process', 'Services', 'Projects'].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-sm font-medium text-charcoal/60 hover:text-charcoal transition-colors tracking-wide font-sans"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a
              href="/#contact"
              className="hidden md:flex bg-charcoal text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-accent-gold transition-colors duration-300"
            >
              Let's Talk
            </a>

            <button
              className="md:hidden p-2 text-charcoal/80 hover:text-charcoal transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 bg-white rounded-3xl shadow-xl border border-charcoal/5 md:hidden flex flex-col gap-4 items-center justify-center text-center"
              >
                {['Process', 'Services', 'Projects', 'Pricing', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-charcoal/80 hover:text-charcoal font-display"
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}
