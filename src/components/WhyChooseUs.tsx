import { Clock, DollarSign, Users, Recycle, Shield, MapPin } from "lucide-react";

const steps = [
  { num: "01", title: "Get a Quote", desc: "Call us or request a free quote online." },
  { num: "02", title: "Schedule Pickup", desc: "We arrive on time with a professional crew." },
  { num: "03", title: "We Haul It Away", desc: "You point, we load, we sweep up after." },
];

const features = [
  { icon: Clock, title: "Same Day Service", desc: "Need it gone today? We offer same-day and next-day junk removal so you're not stuck waiting around." },
  { icon: DollarSign, title: "Upfront Pricing", desc: "No hidden fees, no surprise charges. We quote before we start — prices include labor, loading, transportation, and disposal." },
  { icon: Users, title: "Professional Crew", desc: "Our team handles all the heavy lifting, loading, and hauling. You just point to what needs to go." },
  { icon: Recycle, title: "Eco-Friendly Disposal", desc: "We recycle and donate whenever possible. Responsible disposal means less waste in landfills." },
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind. Residential and commercial projects handled with care." },
  { icon: MapPin, title: "Locally Owned", desc: "Based in Fort Worth, TX. We live and work in the community we serve — our reputation depends on every job." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 bg-surface-gray">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground mt-3">The Lucio`s Difference.</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          We're not a franchise or a faceless hauling company. We're a local team that takes every job personally — fast, affordable, and always dependable.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map(({ num, title, desc }) => (
          <div key={num} className="text-center">
            <div className="text-accent font-display font-bold text-xs uppercase tracking-wider mb-2">Step {num}</div>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card rounded-lg p-6 shadow-sm">
            <Icon className="w-6 h-6 text-accent mb-3" />
            <h3 className="font-display font-bold text-base text-foreground mb-1.5">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="#contact" className="inline-block bg-accent text-accent-foreground font-display font-bold uppercase text-sm px-8 py-3 rounded hover:brightness-110 transition-all">
          Get a Free Quote
        </a>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
