'use client'

import { ScrollReveal } from '@/hooks/useAnimations'

const projects = [
  { name: 'BrumBella', logo: '/brumbella-logo.png' },
  { name: 'Q Simutron', logo: '/qsimutron.png' },
  { name: 'Akasaperna', logo: '/img.png' },
  { name: 'Astrosolstice', logo: '/img2.png' },
  { name: 'ATRIBS', logo: '/img6.png' },
  { name: 'introto.in', logo: '/img5.png' },
  { name: 'SEIKO MARAICA', logo: '/img4.png' },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4">OUR PROJECTS</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Key <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Explore some of our successful collaborations
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="glass-card p-8 text-center group perspective-container">
                <div className="tilt-3d">
                  <div className="mb-4 flex justify-center h-16 items-center">
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="h-14 w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white/80 group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
