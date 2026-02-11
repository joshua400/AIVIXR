import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    // Use placeholders if variables are missing to prevent build-time crashes from @supabase/ssr validation
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

    return createBrowserClient(url, key)
}
