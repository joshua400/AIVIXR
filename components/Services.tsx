'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MotionReveal } from '@/hooks/useAnimations'

const services = [
  {
    icon: '/software.png',
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies.',
    color: '#FFFFFF'
  },
  {
    icon: '/mobile.png',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications designed for impact.',
    color: '#FAFAFA'
  },
  {
    icon: '/soft.png',
    title: 'Software Development',
    description: 'Custom software solutions tailored specifically to your business needs.',
    color: '#F5F5F5'
  },
  {
    icon: '/la.png',
    title: 'UI/UX & Graphic Designing',
    description: 'Beautiful, user-friendly designs that engage and convert visitors.',
    color: '#F0F0F0'
  },
  {
    icon: '/technical.png',
    title: 'Technical Consulting',
    description: 'Expert guidance for your architecture and technology stack decisions.',
    color: '#FFFFFF'
  },
  {
    icon: '/lms.png',
    title: 'LMS & ERP Solutions',
    description: 'Comprehensive systems for learning and enterprise resource management.',
    color: '#FAFAFA'
  },
  {
    icon: '/auto.png',
    title: 'Automation',
    description: 'Streamline your operations with intelligent, automated workflows.',
    color: '#F5F5F5'
  },
  {
    icon: '/soft.png',
    title: 'ML & Web3',
    description: 'Next-generation technologies for building future-ready digital solutions.',
    color: '#F0F0F0'
  },
  {
    icon: '/digi.png',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to amplify your online presence.',
    color: '#FFFFFF'
  },
]

function ServiceCard({ service, index, range, targetScale, progress }: any) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `var(--card-top)`, '--service-bg': service.color } as any}
        className="relative flex flex-col w-[90vw] md:w-[70vw] max-w-4xl h-[60vh] rounded-3xl p-8 md:p-16 border border-charcoal/5 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] origin-top bg-white [--card-top:calc(5vh+${index*25}px)]"
      >
        {/* Background Backdrop */}
        <div
          className="absolute inset-0 rounded-3xl -z-10 transition-colors duration-500 bg-[var(--service-bg)]"
        />

        <div className="flex flex-col justify-between h-full relative z-10">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-bold tracking-widest uppercase text-charcoal font-sans">0{index + 1}</span>
              <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-none mb-8 break-words">
              {service.title}
            </h2>
          </div>

          <p className="text-lg md:text-2xl text-charcoal font-normal leading-relaxed font-sans max-w-2xl">
            {service.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function Services() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={container} id="services" className="relative pt-32 pb-32 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <MotionReveal className="text-center">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">Our Expertise</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-charcoal tracking-tight leading-[0.9]">
            Digital
            <span className="italic text-charcoal/70 block">Horizons</span>
          </h2>
        </MotionReveal>
      </div>

      <div className="relative">
        {services.map((service, index) => {
          const targetScale = 1 - ((services.length - index) * 0.03)
          return (
            <ServiceCard
              key={index}
              index={index}
              service={service}
              range={[index * (1 / services.length), 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          )
        })}
      </div>
    </section>
  )
}
