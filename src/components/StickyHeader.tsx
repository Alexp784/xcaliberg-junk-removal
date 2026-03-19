import { Phone } from "lucide-react";
import mpsLogo from "@/assets/mps-logo-removebg-preview.png";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-sm border-b border-surface-dark">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center">
          <img src={mpsLogo} alt="Lucio`s Junk Removal LLC" className="h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-display text-sm font-bold uppercase tracking-wider text-surface-dark-foreground">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#why-us" className="hover:text-accent transition-colors">About</a>
          <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact Us</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:8179958813" className="hidden sm:flex items-center gap-2 text-accent font-display font-bold text-sm">
            <Phone className="w-4 h-4" />
            210-262-1020
          </a>
          <a
            href="#contact"
            className="bg-accent text-accent-foreground font-display font-bold text-sm uppercase px-5 py-2.5 rounded hover:brightness-110 transition-all"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
