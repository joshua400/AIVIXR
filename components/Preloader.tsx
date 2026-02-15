'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = ["AVIXR", "TECHNOLOGIES"]

export default function Preloader() {
    const [index, setIndex] = useState(0)
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        // Prevent scrolling during preloader
        document.body.style.overflow = 'hidden'

        const timer = setTimeout(() => {
            setComplete(true)
            document.body.style.overflow = 'unset'
        }, 2500)

        return () => {
            clearTimeout(timer)
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] bg-charcoal flex items-center justify-center"
                >
                    <div className="relative overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                            className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter"
                        >
                            AVIXR
                        </motion.h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-0 left-0 w-full h-1 bg-accent-gold origin-left"
                        />
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}
