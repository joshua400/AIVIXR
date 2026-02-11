import { ScrollReveal } from '@/hooks/useAnimations'

export default function Footer() {
  return (
    <footer className="relative border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img src="/avixrlogo.png" alt="AVIXR" className="h-10 w-auto" />
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Transforming visionary ideas into top-tier digital solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/40 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-white/40 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#projects" className="text-white/40 hover:text-white transition-colors text-sm">Projects</a></li>
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#digital-marketing" className="text-white/40 hover:text-white transition-colors text-sm">Digital Marketing</a></li>
              <li><a href="#founder" className="text-white/40 hover:text-white transition-colors text-sm">Founder</a></li>
              <li><a href="#contact" className="text-white/40 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <a href="mailto:ceo@avixr.in" className="text-white/40 hover:text-white transition-colors text-sm block">
                ceo@avixr.in
              </a>
              <p className="text-white/40 text-sm">Chennai, India</p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/avixr-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-accent-blue/10 transition-colors"
              >
                <img src="/Screenshot 2025-12-29 at 4.30.37 PM.png" alt="LinkedIn" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-accent-blue/10 transition-colors"
              >
                <img src="/youtube.png" alt="YouTube" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="https://www.instagram.com/avixr_pvt_ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-accent-blue/10 transition-colors"
              >
                <img src="/Screenshot 2025-12-29 at 4.29.26 PM.png" alt="Instagram" className="h-5 w-5 object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Avixr Technologies Pvt Ltd. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Avixr contributes to building a greener future 🌱
          </p>
        </div>
      </div>
    </footer>
  )
}
