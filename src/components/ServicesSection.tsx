import { Trash2, Home, HardHat, TreePine, Truck, Warehouse } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";
import { content } from "@/lib/content";

const services = [
  {
    id: "junk-removal",
    icon: Trash2,
    title: content.serviceJunkRemovalTitle,
    description: content.serviceJunkRemovalDesc,
  },
  {
    id: "estate-cleanouts",
    icon: Home,
    title: content.serviceEstateCleanoutsTitle,
    description: content.serviceEstateCleanoutsDesc,
  },
  {
    id: "construction-debris",
    icon: HardHat,
    title: content.serviceConstructionDebrisTitle,
    description: content.serviceConstructionDebrisDesc,
  },
  {
    id: "brush-yard",
    icon: TreePine,
    title: content.serviceBrushYardTitle,
    description: content.serviceBrushYardDesc,
  },
  {
    id: "material-hauling",
    icon: Truck,
    title: content.serviceMaterialHaulingTitle,
    description: content.serviceMaterialHaulingDesc,
  },
  {
    id: "storage-garage",
    icon: Warehouse,
    title: content.serviceStorageGarageTitle,
    description: content.serviceStorageGarageDesc,
  },
];

const ServicesSection = () => (
  <section id="services" className="relative py-20">
    <div className="absolute inset-0 z-0">
      <img src={servicesBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-surface-dark/90" />
    </div>

    <div className="container mx-auto relative z-10 px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">{content.servicesSectionTitle}</span>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-surface-dark-foreground mt-3">{content.servicesSectionSubtitle}</h2>
        <p className="text-surface-dark-foreground/70 mt-3 max-w-2xl mx-auto">
          {content.servicesSectionDescription}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ id, icon: Icon, title, description }) => (
          <div
            key={id}
            className="group bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 rounded-lg p-6 hover:border-accent/50 transition-all cursor-pointer"
          >
            <Icon className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-display font-bold text-lg text-surface-dark-foreground mb-2">{title}</h3>
            <p className="text-surface-dark-foreground/60 text-sm leading-relaxed mb-4">{description}</p>
            <span className="text-accent font-display font-bold text-sm uppercase group-hover:underline">Get a Free Quote</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <a href="#contact" className="bg-accent text-accent-foreground font-display font-bold uppercase text-sm px-6 py-3 rounded hover:brightness-110 transition-all">
          {content.viewAllServicesButton}
        </a>
        <a href="tel:8179958813" className="border-2 border-surface-dark-foreground/30 text-surface-dark-foreground font-display font-bold uppercase text-sm px-6 py-3 rounded hover:border-accent hover:text-accent transition-all">
          {content.phoneNumber}
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
