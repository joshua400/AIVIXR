'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        // @ts-ignore - smoothTouch is valid in Lenis but missing in React types
        <ReactLenis root options={{ lerp: 0.15, smoothWheel: true, smoothTouch: false }}>
            {children}
        </ReactLenis>
    )
}
