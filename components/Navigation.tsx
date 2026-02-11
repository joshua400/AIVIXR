'use client'

import { useState, useEffect } from 'react'
import { LogOut, User, LogIn, UserPlus } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { signOut } from '@/app/auth/actions'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => subscription.unsubscribe()
  }, [supabase.auth])

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
            <a href="/#home" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Home
            </a>
            <a href="/#services" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Services
            </a>
            <a href="/#about" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            <a href="/#projects" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Projects
            </a>
            <a href="/#contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Auth State */}
          <div className="hidden lg:flex items-center gap-4">
            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-white/70 text-sm font-medium bg-white/5 px-3 py-1.5 rounded-lg border border-glass-border">
                      <User size={16} />
                      {user.email?.split('@')[0]}
                    </div>
                    <form action={signOut}>
                      <button
                        type="submit"
                        className="btn-outline text-sm py-2 px-4 flex items-center gap-2"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <a
                      href="/login"
                      className="text-white/70 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
                    >
                      <LogIn size={16} />
                      Login
                    </a>
                    <a
                      href="/signup"
                      className="btn-primary text-sm py-2 px-6 flex items-center gap-2"
                    >
                      <UserPlus size={16} />
                      Sign Up
                    </a>
                  </div>
                )}
              </>
            )}

            {loading && (
              <div className="h-10 w-32 bg-white/5 animate-pulse rounded-lg" />
            )}
          </div>

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
              <a href="/#home" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors font-medium">Home</a>
              <a href="/#services" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors font-medium">Services</a>
              <a href="/#about" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors font-medium">About</a>
              <a href="/#projects" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors font-medium">Projects</a>
              <div className="pt-4 border-t border-glass-border flex flex-col gap-4">
                {user ? (
                  <>
                    <div className="flex items-center gap-2 text-white/70 font-medium">
                      <User size={18} />
                      {user.email}
                    </div>
                    <form action={signOut}>
                      <button
                        type="submit"
                        className="btn-outline w-full py-2.5 flex items-center justify-center gap-2"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <a href="/login" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors font-medium flex items-center gap-2">
                      <LogIn size={18} />
                      Login
                    </a>
                    <a href="/signup" onClick={() => setIsOpen(false)} className="btn-primary text-center text-sm py-2.5 px-6 flex items-center justify-center gap-2">
                      <UserPlus size={18} />
                      Sign Up
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
