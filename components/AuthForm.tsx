'use client'

import { useState } from 'react'
import { Mail, Lock, Loader2, AlertCircle } from 'lucide-react'
import { login, signup } from '@/app/auth/actions'

interface AuthFormProps {
    type: 'login' | 'signup'
}

export default function AuthForm({ type }: AuthFormProps) {
    const [loading, setLoading] = useState(false)
    const isLogin = type === 'login'

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        // The form will be submitted using the native form action (Server Action)
        // but we use state to show loading spinner
    }

    return (
        <div className="glass-card p-8 md:p-10 w-full max-w-md mx-auto perspective-container">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3 font-display">
                    {isLogin ? (
                        <>Welcome <span className="gradient-text">Back</span></>
                    ) : (
                        <>Create an <span className="gradient-text">Account</span></>
                    )}
                </h2>
                <p className="text-white/50">
                    {isLogin
                        ? 'Sign in to access your business tools'
                        : 'Join 15,000+ business owners growing with Avixr'}
                </p>
            </div>

            <form action={isLogin ? login : signup} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 ml-2" htmlFor="email">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/30">
                            <Mail size={18} />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@company.com"
                            required
                            className="w-full bg-white/5 border border-glass-border focus:border-accent-blue/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/20 transition-all outline-none"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 ml-2" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/30">
                            <Lock size={18} />
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            className="w-full bg-white/5 border border-glass-border focus:border-accent-blue/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/20 transition-all outline-none"
                        />
                    </div>
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed group transition-all"
                >
                    {loading ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <>
                            {isLogin ? 'Login' : 'Create Account'}
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </>
                    )}
                </button>
            </form>

            <div className="mt-8 text-center pt-6 border-t border-glass-border">
                <p className="text-white/50">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                    <a
                        href={isLogin ? '/signup' : '/login'}
                        className="text-accent-light-blue hover:text-white font-semibold transition-colors"
                    >
                        {isLogin ? 'Sign up' : 'Login'}
                    </a>
                </p>
            </div>
        </div>
    )
}
