'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { MotionReveal } from '@/hooks/useAnimations'

const phases = [
    {
        title: 'Define',
        description: 'We identify macro-trends and structural gaps to originate scalable, high-impact digital opportunities.',
        id: '01'
    },
    {
        title: 'Develop',
        description: 'We strategize, engineer and structure projects through disciplined processes and partnerships.',
        id: '02'
    },
    {
        title: 'Derisk',
        description: 'We implement robust governance, testing, and optimization to mitigate risks and ensure long-term resilience.',
        id: '03'
    },
    {
        title: 'Deliver',
        description: 'We execute and operate with precision, delivering sustainable, high-performance digital solutions.',
        id: '04'
    },
]

export default function Process() {
    const container = useRef(null)

    return (
        <section ref={container} id="process" className="relative py-32 bg-luxury-white overflow-hidden z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionReveal className="text-center mb-24">
                    <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-charcoal tracking-tight">
                        From Vision to <span className="italic text-charcoal">Visible_</span>
                    </h2>
                    <p className="text-xl text-charcoal max-w-2xl mx-auto font-sans font-normal">
                        Our method combines strategic development, innovation, and engineering discipline.
                    </p>
                </MotionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, i) => (
                        <MotionReveal
                            key={i}
                            delay={i * 0.1}
                            className="relative group"
                        >
                            <div className="h-full bg-white text-charcoal p-8 rounded-2xl flex flex-col justify-between min-h-[300px] border border-charcoal/10 hover:border-accent-gold/50 hover:shadow-xl hover:shadow-charcoal/5 transition-all duration-500">
                                <div>
                                    <span className="text-xs font-bold text-accent-gold tracking-widest mb-4 block">{phase.id}</span>
                                    <h3 className="text-2xl font-bold font-display mb-4">{phase.title}</h3>
                                </div>
                                <p className="text-charcoal/70 font-light text-sm leading-relaxed">
                                    {phase.description}
                                </p>
                            </div>
                        </MotionReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
