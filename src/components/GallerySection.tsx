import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import servicesBg from "@/assets/services-bg.jpg";
import { content } from "@/lib/content";

const images = [
  { src: heroBg, alt: content.galleryAlt1 },
  { src: servicesBg, alt: content.galleryAlt2 },
  { src: gallery3, alt: content.galleryAlt3 },
  { src: gallery2, alt: content.galleryAlt4 },
  { src: gallery4, alt: content.galleryAlt5 },
  { src: gallery1, alt: content.galleryAlt6 },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-surface-gray">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">{content.gallerySectionTitle}</span>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground mt-3">{content.gallerySectionSubtitle}</h2>
        <p className="text-muted-foreground mt-3">{content.gallerySectionDescription}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map(({ src, alt }) => (
          <div key={alt} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
            <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="absolute inset-0 bg-surface-dark/0 group-hover:bg-surface-dark/50 transition-all flex items-end p-4">
              <p className="text-surface-dark-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
