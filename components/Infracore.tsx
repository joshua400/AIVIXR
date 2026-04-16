'use client'

import { motion } from 'framer-motion'
import { MotionReveal } from '@/hooks/useAnimations'

export default function Infracore() {
    return (
        <section className="relative py-32 bg-white text-charcoal overflow-hidden z-20">
            {/* Technical Atmosphere - Noise & Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none tech-grid" />
            <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <MotionReveal direction="left" className="text-left">
                        <div className="inline-flex items-center gap-2 mb-6 border border-charcoal/10 px-4 py-1 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/60 font-sans">Proprietary Technology</span>
                        </div>

                        <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-charcoal leading-none">
                            AVIXR <br />
                            <span className="text-accent-gold italic">INTELLIGENCE</span>
                        </h2>

                        <div className="bg-sand/30 p-8 rounded-3xl border border-charcoal/5 mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="px-3 py-1 bg-charcoal text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                                    Product
                                </div>
                                <h3 className="font-display font-bold text-2xl tracking-tight text-charcoal">Top of Digital Horizons</h3>
                                <span className="text-xs font-medium text-charcoal/40 uppercase tracking-widest ml-auto">Coming Soon</span>
                            </div>
                            <p className="text-lg text-charcoal/70 font-sans leading-relaxed mb-6">
                                The revolutionary simulation engine that redefines business prediction.
                                <span className="block mt-4 font-bold text-charcoal">Replacing Data Scientists with Intelligence.</span>
                            </p>
                        </div>
                    </MotionReveal>

                    {/* Visual Side - Asymmetrical Lab Representation */}
                    <MotionReveal direction="right" className="relative h-[400px] flex items-center justify-center">
                        {/* Styled "Q" Simulation Visual */}
                        <div className="relative w-64 h-64 border border-charcoal/10 rounded-full flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-t-2 border-accent-gold rounded-full opacity-40"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border-b-2 border-charcoal/20 rounded-full"
                            />
                            <motion.img
                                src="/qsimutron.png"
                                alt="Top of Digital Horizons"
                                className="w-32 h-32 object-contain brightness-[1.5] transition-all"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            />

                            {/* Floating Sim Bits */}
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0.2, 0.5, 0.2]
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        delay: i * 0.5
                                    }}
                                    className="absolute w-1 h-1 bg-accent-gold rounded-full"
                                    style={{
                                        top: `${20 + (i * 15)}%`,
                                        left: `${10 + (i * 20)}%`
                                    }}
                                />
                            ))}
                        </div>

                        {/* Lab lines */}
                        <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-charcoal/10" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-charcoal/10" />
                    </MotionReveal>
                </div>
            </div>
        </section>
    )
}
