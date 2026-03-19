import { Trash2, Home, HardHat, TreePine, Truck, Warehouse } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Trash2,
    title: "Junk Removal",
    description: "Fast, reliable removal of unwanted items from homes, garages, basements, businesses, and properties throughout the DFW Metroplex. We handle the heavy lifting so you don't have to.",
  },
  {
    icon: Home,
    title: "Estate & Property Cleanouts",
    description: "Complete cleanouts for homes and properties. Whether you're handling an estate, preparing a property for sale, or downsizing, our crew removes everything fast.",
  },
  {
    icon: HardHat,
    title: "Construction Debris Removal",
    description: "Light demolition and construction debris removal for residential projects. From shed teardowns to full renovation cleanups, we haul away debris so your project can move forward.",
  },
  {
    icon: TreePine,
    title: "Brush & Yard Debris Removal",
    description: "Yard and brush cleanup services for homeowners and contractors. We haul away tree limbs, brush piles, yard waste, storm debris, and old fencing.",
  },
  {
    icon: Truck,
    title: "Material Hauling",
    description: "Transportation and hauling services for bulk landscaping and construction materials. Whether you need materials delivered or hauled away, we've got the capacity.",
  },
  {
    icon: Warehouse,
    title: "Storage Unit & Garage Cleanouts",
    description: "Quick cleanouts for storage units, garages, sheds, and rental properties. We clear the space fast so it's ready for reuse.",
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
        <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">What We Do</span>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-surface-dark-foreground mt-3">Our Services</h2>
        <p className="text-surface-dark-foreground/70 mt-3 max-w-2xl mx-auto">
          Junk removal, property cleanouts, hauling, and more for homeowners, contractors & businesses in Fort Worth, TX.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 rounded-lg p-6 hover:border-accent/50 transition-all cursor-pointer"
          >
            <Icon className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-display font-bold text-lg text-surface-dark-foreground mb-2">{title}</h3>
            <p className="text-surface-dark-foreground/60 text-sm leading-relaxed mb-4">{description}</p>
            <span className="text-accent font-display font-bold text-sm uppercase group-hover:underline">Get a Free Quote →</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <a href="#contact" className="bg-accent text-accent-foreground font-display font-bold uppercase text-sm px-6 py-3 rounded hover:brightness-110 transition-all">
          View All Services
        </a>
        <a href="tel:8179958813" className="border-2 border-surface-dark-foreground/30 text-surface-dark-foreground font-display font-bold uppercase text-sm px-6 py-3 rounded hover:border-accent hover:text-accent transition-all">
          210-262-1020
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
