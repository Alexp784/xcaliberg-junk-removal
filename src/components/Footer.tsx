import { Phone, Mail } from "lucide-react";
import mpsLogo from "@/assets/image_2026-03-23_14-11-26.png";
import { content } from "@/lib/content";

const Footer = () => (
  <footer className="bg-surface-dark py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <img src={mpsLogo} alt="JB Junk Removal" className="h-16 w-auto mb-4" />
          <p className="text-accent font-display font-bold text-lg leading-tight mb-1">{content.brandName}</p>
          <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">{content.brandTagline}</p>
        </div>

        <div>
          <h4 className="font-display font-bold text-surface-dark-foreground text-sm uppercase tracking-wider mb-4">{content.navServices}</h4>
          <nav className="flex flex-col gap-2">
            <a href="#home" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">{content.navHome}</a>
            <a href="#services" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">{content.navServices}</a>
            <a href="#why-us" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">{content.navAbout}</a>
            <a href="#gallery" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">{content.navGallery}</a>
            <a href="#contact" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">{content.navContact}</a>
          </nav>
        </div>

        <div>
          <h4 className="font-display font-bold text-surface-dark-foreground text-sm uppercase tracking-wider mb-4">{content.navContact}</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:8179958813" className="flex items-center gap-2 text-accent font-bold text-sm">
              <Phone className="w-4 h-4" /> {content.phoneNumber}
            </a>
            <a href="mailto:randallsjunkremovalllc@gmail.com" className="flex items-center gap-2 text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">
              <Mail className="w-4 h-4" /> randallsjunkremovalllc@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-dark-foreground/10 mt-12 pt-6 text-center">
        <p className="text-surface-dark-foreground/40 text-xs">
          {content.footerCopyright}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
