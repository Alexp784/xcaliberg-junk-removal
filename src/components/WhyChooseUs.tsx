import { Clock, DollarSign, Users, Recycle, Shield, MapPin } from "lucide-react";
import { content } from "@/lib/content";

const steps = [
  { num: content.step1Num, title: content.step1Title, desc: content.step1Desc },
  { num: content.step2Num, title: content.step2Title, desc: content.step2Desc },
  { num: content.step3Num, title: content.step3Title, desc: content.step3Desc },
];

const features = [
  { icon: Clock, title: content.heroFeature1, desc: content.featureSameDayDesc },
  { icon: DollarSign, title: "Upfront Pricing", desc: content.featureUpfrontPricingDesc },
  { icon: Users, title: "Professional Crew", desc: content.featureProfessionalCrewDesc },
  { icon: Recycle, title: "Eco-Friendly Disposal", desc: content.featureEcoFriendlyDesc },
  { icon: Shield, title: "Licensed & Insured", desc: content.featureLicensedInsuredDesc },
  { icon: MapPin, title: "Locally Owned", desc: content.featureLocallyOwnedDesc },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 bg-surface-gray">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">{content.whyChooseUsTitle}</span>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground mt-3">{content.whyChooseUsSubtitle}</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          {content.whyChooseUsDescription}
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
          {content.getQuoteButton}
        </a>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
