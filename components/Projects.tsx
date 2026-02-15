'use client'

import { MotionReveal } from '@/hooks/useAnimations'

const clients = [
  { name: 'Atribs Global', logo: '/img6.png', url: 'https://www.atribsglobal.com/' },
  { name: 'BrumBella', logo: '/brumbella-logo.png', url: 'https://www.brumbella.com' },
  { name: 'Q Simutron', logo: '/qsimutron.png', url: 'https://tiny-croquembouche-2814e3.netlify.app/' },
  { name: 'Astrosolstice', logo: '/img2.png', url: 'https://www.astrosolstice.com' },
  { name: 'introto.in', logo: '/img5.png', url: 'https://www.introto.in' },
  { name: 'SEIKO MARAICA', logo: '/img4.png' },
]

export default function Projects() {
  return (
    <section id="clients" className="relative py-32 overflow-hidden bg-white text-charcoal">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">Our Clients</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-charcoal tracking-tight">
              Successful <span className="italic text-charcoal/70">collaborations</span>
            </h2>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {clients.map((client, index) => {
            const Card = (
              <div className="group flex flex-col items-center justify-center p-12 bg-sand/20 hover:bg-white border border-transparent hover:border-charcoal/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-charcoal/5 h-64">
                <div className="h-16 flex items-center justify-center mb-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-auto object-contain transition-all duration-500"
                  />
                </div>
                <h3 className="text-[10px] font-bold text-charcoal/40 transition-colors font-sans uppercase tracking-[0.2em] transform translate-y-0 duration-300">
                  {client.name}
                </h3>
              </div>
            );

            return (
              <MotionReveal key={index} delay={index * 0.05}>
                {client.url ? (
                  <a href={client.url} target="_blank" rel="noopener noreferrer" className="block">
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  )
}
