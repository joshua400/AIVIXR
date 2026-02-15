'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

const projects = [
  { name: 'BrumBella', logo: '/brumbella-logo.png', url: 'https://www.brumbella.com' },
  { name: 'Q Simutron', logo: '/qsimutron.png', url: 'https://tiny-croquembouche-2814e3.netlify.app/' },
  { name: 'Astrosolstice', logo: '/img2.png', url: 'https://www.astrosolstice.com' },
  { name: 'ATRIBS', logo: '/img6.png', url: 'https://www.atribs.com' },
  { name: 'introto.in', logo: '/img5.png', url: 'https://www.introto.in' },
  { name: 'SEIKO MARAICA', logo: '/img4.png' },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/40 font-sans block mb-6">Selected Works</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-charcoal tracking-tight">
              Successful <span className="italic text-charcoal/70">collaborations</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => {
            const Card = (
              <div className="group flex flex-col items-center justify-center p-12 bg-sand/20 hover:bg-white border border-transparent hover:border-charcoal/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-charcoal/5 h-64">
                <div className="h-16 flex items-center justify-center mb-6">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="h-full w-auto object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <h3 className="text-[10px] font-bold text-charcoal/0 group-hover:text-charcoal/40 transition-colors font-sans uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  {project.name}
                </h3>
              </div>
            );

            return (
              <ScrollReveal key={index} delay={index * 0.05}>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  )
}
