import { Phone, Mail } from "lucide-react";
import mpsLogo from "@/assets/mps-logo-removebg-preview.png";

const Footer = () => (
  <footer className="bg-surface-dark py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <img src={mpsLogo} alt="Lucio`s Junk Removal LLC" className="h-16 w-auto mb-4" />
          <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">
            Lucio`s Junk Removal LLC — Strong service, clean results.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-surface-dark-foreground text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            <a href="#home" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">Home</a>
            <a href="#services" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">Services</a>
            <a href="#why-us" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">About</a>
            <a href="#gallery" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">Gallery</a>
            <a href="#contact" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">Contact Us</a>
          </nav>
        </div>

        <div>
          <h4 className="font-display font-bold text-surface-dark-foreground text-sm uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:8179958813" className="flex items-center gap-2 text-accent font-bold text-sm">
              <Phone className="w-4 h-4" /> 210-262-1020
            </a>
            <a href="mailto:lucio@luciojunkremoval.com" className="flex items-center gap-2 text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">
              <Mail className="w-4 h-4" /> lucio@luciojunkremoval.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-dark-foreground/10 mt-12 pt-6 text-center">
        <p className="text-surface-dark-foreground/40 text-xs">
          © {new Date().getFullYear()} Lucio`s Junk Removal LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
