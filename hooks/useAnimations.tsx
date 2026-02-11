'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export function useScrollReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null)
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true)
                    observer.unobserve(el)
                }
            },
            { threshold }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, isRevealed }
}

export function ScrollReveal({
    children,
    className = '',
    delay = 0,
    threshold = 0.15,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
    threshold?: number
}) {
    const { ref, isRevealed } = useScrollReveal(threshold)

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${isRevealed ? 'revealed' : ''} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    )
}

// Mouse-follow 3D tilt hook
export function use3DTilt() {
    const ref = useRef<HTMLDivElement>(null)

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        el.style.transform = `perspective(1200px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
    }, [])

    const handleMouseLeave = useCallback(() => {
        const el = ref.current
        if (!el) return
        el.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)'
    }, [])

    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.addEventListener('mousemove', handleMouseMove)
        el.addEventListener('mouseleave', handleMouseLeave)
        return () => {
            el.removeEventListener('mousemove', handleMouseMove)
            el.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [handleMouseMove, handleMouseLeave])

    return ref
}
