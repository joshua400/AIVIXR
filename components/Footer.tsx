import { ScrollReveal } from '@/hooks/useAnimations'

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-black/[0.03] overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-calisto-blue/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-6 scale-90 -ml-2">
              <img src="/avixrlogo.png" alt="AVIXR" className="h-10 w-auto" />
            </a>
            <p className="text-calisto-dark/50 text-base leading-relaxed font-manrope font-medium">
              Transforming visionary ideas into top-tier digital solutions with the power of modern technology.
            </p>
          </div>

          {/* Links */}
          <div className="md:pl-10">
            <h4 className="text-calisto-dark font-bold mb-6 font-tight text-lg uppercase tracking-wider text-[13px]">Company</h4>
            <ul className="space-y-4">
              <li><a href="#process" className="text-calisto-dark/50 hover:text-calisto-bright-blue transition-colors text-base font-manrope font-medium">Process</a></li>
              <li><a href="#services" className="text-calisto-dark/50 hover:text-calisto-bright-blue transition-colors text-base font-manrope font-medium">Services</a></li>
              <li><a href="#projects" className="text-calisto-dark/50 hover:text-calisto-bright-blue transition-colors text-base font-manrope font-medium">Projects</a></li>
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="text-calisto-dark font-bold mb-6 font-tight text-lg uppercase tracking-wider text-[13px]">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#pricing" className="text-calisto-dark/50 hover:text-calisto-bright-blue transition-colors text-base font-manrope font-medium">Pricing</a></li>
              <li><a href="#blog" className="text-calisto-dark/50 hover:text-calisto-bright-blue transition-colors text-base font-manrope font-medium">Blog</a></li>
              <li><a href="#contact" className="text-calisto-dark/50 hover:text-calisto-bright-blue transition-colors text-base font-manrope font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-calisto-dark font-bold mb-6 font-tight text-lg uppercase tracking-wider text-[13px]">Get in Touch</h4>
            <div className="space-y-4 mb-8">
              <a href="mailto:ceo@avixr.in" className="text-calisto-dark font-bold text-lg hover:text-calisto-bright-blue transition-colors block font-tight tracking-tight">
                ceo@avixr.in
              </a>
              <p className="text-calisto-dark/50 text-base font-manrope font-medium">Chennai, India</p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { name: 'LinkedIn', icon: '/Screenshot 2025-12-29 at 4.30.37 PM.png', url: 'https://www.linkedin.com/company/avixr-private-limited/' },
                { name: 'YouTube', icon: '/youtube.png', url: 'https://youtube.com' },
                { name: 'Instagram', icon: '/Screenshot 2025-12-29 at 4.29.26 PM.png', url: 'https://www.instagram.com/avixr_pvt_ltd/' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-calisto-gray flex items-center justify-center hover:bg-calisto-dark hover:text-white transition-all duration-300 border border-black/[0.03] shadow-sm hover:-translate-y-1"
                >
                  <img src={social.icon} alt={social.name} className="h-5 w-5 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-10 border-t border-black/[0.03] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-calisto-dark/40 text-[13px] font-manrope font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} AVIXR Technologies Pvt Ltd.
          </p>
          <p className="text-calisto-bright-blue/60 text-[12px] font-bold font-manrope uppercase tracking-[0.2em] flex items-center gap-2">
            Build for the future <span className="text-lg">🌱</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
