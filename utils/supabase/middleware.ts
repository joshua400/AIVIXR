import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    // Use placeholders if variables are missing to prevent build-time crashes from @supabase/ssr validation
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

    const supabase = createServerClient(url, key, {
        cookies: {
            getAll() {
                return request.cookies.getAll()
            },
            setAll(cookiesToSet) {
                cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                supabaseResponse = NextResponse.next({
                    request,
                })
                cookiesToSet.forEach(({ name, value, options }) =>
                    supabaseResponse.cookies.set(name, value, options)
                )
            },
        },
    })

    // This will refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/server-side/nextjs
    try {
        // Only attempt to get user if we likely have valid credentials
        if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
            await supabase.auth.getUser()
        }
    } catch (error) {
        // If auth call fails (e.g. invalid keys), we still return the response
    }

    return supabaseResponse
}
