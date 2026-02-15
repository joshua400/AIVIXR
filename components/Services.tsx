'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const services = [
  {
    icon: '/software.png',
    title: 'Web & Mobile Development',
    description: 'Building the digital foundation for your enterprise with cutting-edge web technologies and cross-platform mobile applications.',
    color: '#f5f5f5' // Sand
  },
  {
    icon: '/ai.png',
    title: 'AI & Automation',
    description: 'Leveraging next-generation artificial intelligence and machine learning to streamline operations and create predictive systems.',
    color: '#e5e5e5' // Darker Sand
  },
  {
    icon: '/digi.png',
    title: 'Digital Transformation',
    description: 'Strategic consulting and implementation of digital workflows to modernize legacy systems and improved business agility.',
    color: '#d4d4d4' // Gray
  },
  {
    icon: '/technical.png',
    title: 'Technical Consulting',
    description: 'Expert guidance on architecture, tech stack selection, and scalability planning for high-growth enterprises.',
    color: '#c4c4c4' // Darker Gray
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
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        className="relative flex flex-col w-[90vw] md:w-[70vw] max-w-4xl h-[60vh] rounded-3xl p-12 md:p-16 border border-charcoal/10 shadow-2xl origin-top"
      >
        {/* Background Backdrop */}
        <div
          className="absolute inset-0 rounded-3xl -z-10 bg-white/80 backdrop-blur-xl transition-colors duration-500"
          style={{ backgroundColor: service.color }}
        />

        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-bold tracking-widest uppercase text-charcoal/40 font-sans">0{index + 1}</span>
              <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain opacity-80" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-charcoal tracking-tight leading-none mb-8">
              {service.title}
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed font-sans font-light max-w-2xl">
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">Our Expertise</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-charcoal tracking-tight leading-[0.9]">
            Digital
            <span className="italic text-charcoal/70 block">Horizons</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        {services.map((service, index) => {
          const targetScale = 1 - ((services.length - index) * 0.05)
          return (
            <ServiceCard
              key={index}
              index={index}
              service={service}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          )
        })}
      </div>
    </section>
  )
}
