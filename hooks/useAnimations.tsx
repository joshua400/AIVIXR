'use client'

import { useEffect, useRef, useCallback } from 'react'
import { motion, useAnimation, useInView, Variants } from 'framer-motion'

interface MotionRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
    distance?: number
    once?: boolean
    staggerChildren?: number
}

export function MotionReveal({
    children,
    className = '',
    delay = 0,
    duration = 0.5,
    direction = 'up',
    distance = 50,
    once = true,
    staggerChildren = 0
}: MotionRevealProps) {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, {
        once,
        amount: 0.1 // Trigger when 10% of element is in view
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        } else if (!once) {
            controls.start('hidden')
        }
    }, [controls, inView, once])

    const getDirectionOffset = () => {
        switch (direction) {
            case 'up': return { y: distance }
            case 'down': return { y: -distance }
            case 'left': return { x: distance }
            case 'right': return { x: -distance }
            default: return {}
        }
    }

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getDirectionOffset(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 1, 0.5, 1], // Custom easeOutExpo
                staggerChildren,
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Keep legacy ScrollReveal for backward compatibility if needed, but we'll migrate to MotionReveal
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
    return (
        <MotionReveal delay={delay} className={className}>
            {children}
        </MotionReveal>
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
