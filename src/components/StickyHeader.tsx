import { Phone } from "lucide-react";
import mpsLogo from "@/assets/image_2026-03-23_13-44-55.png";
import { content } from "@/lib/content";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-sm border-b border-surface-dark">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={mpsLogo} alt="Randalls Junk Removal logo" className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-accent leading-tight">{content.brandName}</span>
            <span className="font-body text-xs text-accent-foreground">{content.brandTagline}</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-display text-sm font-bold uppercase tracking-wider text-surface-dark-foreground">
          <a href="#home" className="hover:text-accent transition-colors">{content.navHome}</a>
          <a href="#services" className="hover:text-accent transition-colors">{content.navServices}</a>
          <a href="#why-us" className="hover:text-accent transition-colors">{content.navAbout}</a>
          <a href="#gallery" className="hover:text-accent transition-colors">{content.navGallery}</a>
          <a href="#contact" className="hover:text-accent transition-colors">{content.navContact}</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:8179958813" className="hidden sm:flex items-center gap-2 text-accent font-display font-bold text-sm">
            <Phone className="w-4 h-4" />
            {content.phoneNumber}
          </a>
          <a
            href="#contact"
            className="bg-accent text-accent-foreground font-display font-bold text-sm uppercase px-5 py-2.5 rounded hover:brightness-110 transition-all"
          >
            {content.getQuoteButton}
          </a>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
