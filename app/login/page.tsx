import AuthForm from '@/components/AuthForm'
import { AlertCircle, CheckCircle } from 'lucide-react'

export default function LoginPage({
    searchParams,
}: {
    searchParams: { message: string; error: string }
}) {
    return (
        <main className="min-h-screen bg-navy-darkest flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Glimmer */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-purple/10 blur-[100px]" />

            <div className="w-full max-w-md relative z-10 space-y-4">
                {/* Messages */}
                {searchParams.message && (
                    <div className="glass p-4 rounded-xl flex items-center gap-3 text-sm text-accent-light-blue border-accent-blue/20">
                        <CheckCircle size={18} />
                        {searchParams.message}
                    </div>
                )}

                {searchParams.error && (
                    <div className="glass p-4 rounded-xl flex items-center gap-3 text-sm text-red-400 border-red-500/20">
                        <AlertCircle size={18} />
                        {searchParams.error}
                    </div>
                )}

                <AuthForm type="login" />

                <div className="text-center">
                    <a href="/" className="text-white/30 hover:text-white/60 text-sm transition-colors">
                        ← Back to Home
                    </a>
                </div>
            </div>
        </main>
    )
}
