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
    <section id="projects" className="relative py-24 overflow-hidden bg-white">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-calisto-blue/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 bg-calisto-gray border border-black/5 px-4 py-1.5 rounded-full">
              <span className="text-[11px] font-bold tracking-widest uppercase text-calisto-dark/50 font-manrope">Successful Collaborations</span>
            </div>
            <h2 className="font-tight text-4xl md:text-6xl font-bold mb-6 text-calisto-dark tracking-tight">
              Our <span className="bg-gradient-to-r from-calisto-blue to-calisto-bright-blue bg-clip-text text-transparent">projects</span>
            </h2>
            <p className="text-calisto-dark/50 text-lg max-w-2xl mx-auto font-manrope font-medium">
              Explore some of our successful collaborations and high-impact digital solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            const Card = (
              <div className={`glass-card p-12 text-center group bg-calisto-gray/20 border-black/[0.03] transition-all duration-300 shadow-none ${project.url ? 'hover:bg-white hover:shadow-xl hover:shadow-calisto-bright-blue/5' : ''}`}>
                <div className="mb-6 flex justify-center h-20 items-center">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="h-14 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                  />
                </div>
                <h3 className="text-base font-bold text-calisto-dark/40 group-hover:text-calisto-dark transition-colors font-tight uppercase tracking-widest text-[12px]">
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
