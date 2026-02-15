'use client'

import { useRef } from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
    useMotionValue
} from 'framer-motion'
import { wrap } from '@motionone/utils'

interface ParqueeProps {
    children: React.ReactNode
    baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParqueeProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

    const directionFactor = useRef<number>(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    return (
        <div className="parallax flex whitespace-nowrap flex-nowrap overflow-hidden">
            <motion.div className="scroller flex whitespace-nowrap flex-nowrap" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    )
}

export default function Marquee() {
    const topItems = [
        'Web Development',
        'Mobile Apps',
        'Machine Learning',
        'Cloud Solutions',
        'UI/UX Design',
        'Custom Software',
        'Digital Marketing',
        'Technical Consulting',
    ]

    const bottomItems = [
        'Real-Time Insights',
        'LMS & ERP Systems',
        'Automation',
        'Scalable Architecture',
        'Web3 Solutions',
        'Data Analytics',
        'Innovation',
        'Strategic Growth',
    ]

    const renderItems = (items: string[], color: string) => (
        <>
            {items.map((item, i) => (
                <span
                    key={i}
                    className="inline-flex items-center gap-4 px-12 text-xs font-bold uppercase tracking-[0.2em] font-sans text-charcoal/40 hover:text-charcoal transition-colors cursor-default"
                >
                    <span className={`w-1 h-1 rounded-full ${color}`} />
                    {item}
                </span>
            ))}
        </>
    )

    return (
        <section className="py-20 overflow-hidden border-y border-charcoal/5 bg-luxury-white">
            <div className="relative mb-8">
                <ParallaxText baseVelocity={-2}>
                    {renderItems(topItems, 'bg-accent-gold')}
                </ParallaxText>
            </div>

            <div className="relative">
                <ParallaxText baseVelocity={2}>
                    {renderItems(bottomItems, 'bg-charcoal/20')}
                </ParallaxText>
            </div>
        </section>
    )
}

