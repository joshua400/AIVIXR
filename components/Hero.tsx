'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ScrollIndicator from './ScrollIndicator'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section ref={containerRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-white">
      {/* Background Video with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0 will-change-transform">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
          src="/hero-background.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-luxury-white/90" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-[90vw] mx-auto">
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.2 }} // Delay after preloader
            className="font-display text-[12vw] md:text-8xl lg:text-9xl font-bold tracking-tighter text-charcoal leading-[0.9] break-words"
          >
            TRANSFORMING
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.3 }}
            className="font-display text-[12vw] md:text-8xl lg:text-9xl font-bold tracking-tighter text-charcoal leading-[0.9] break-words"
          >
            VISIONS
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="text-charcoal/70 text-lg md:text-xl max-w-2xl mx-auto font-sans font-light leading-relaxed mb-12"
        >
          Engineering the Future of Digital Innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.8 }}
          className="flex justify-center"
        >
          <a href="#services" className="group inline-flex items-center gap-4 px-8 py-4 bg-charcoal text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-charcoal transition-all duration-300 rounded-full">
            Explore Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}