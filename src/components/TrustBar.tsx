import { MapPin, Shield, Clock } from "lucide-react";
import { content } from "@/lib/content";

const items = [
  { icon: MapPin, label: content.trustBarLocallyOwned },
  { icon: Shield, label: content.trustBarLicensed },
  { icon: Clock, label: content.trustBarSameDay },
];

const TrustBar = () => (
  <section className="bg-surface-dark border-t border-surface-dark-foreground/10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-dark-foreground/10">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center justify-center gap-3 py-5 px-4">
          <Icon className="w-5 h-5 text-accent" />
          <span className="font-display font-bold text-sm uppercase tracking-wider text-surface-dark-foreground">{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
