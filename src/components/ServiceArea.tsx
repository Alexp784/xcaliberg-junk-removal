import { MapPin } from "lucide-react";
import { content } from "@/lib/content";

const communities = [
  { name: content.communityTampa, tag: content.communityTampaTag },
  { name: content.communityCarrollwood, tag: content.communityCarrollwoodTag },
  { name: content.communitySaintPetersburg },
  { name: content.communityClearwater },
  { name: content.communityBrandon },
  { name: content.communityLutz },
  { name: content.communityLandOLakes },
  { name: content["communityWesley Chapel"] },
  { name: content["communityNew Tampa"] },
  { name: content.communityPlantCity },
  { name: content.communityRiverview },
];

const ServiceArea = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">{content.serviceAreaTitle}</span>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground mt-3">
          {content.serviceAreaSubtitle}
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          {content.serviceAreaDescription}
        </p>
      </div>

      <div className="bg-surface-dark rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-accent" />
          <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">{content.heroFeature1}</span>
        </div>
        <p className="text-surface-dark-foreground/60 text-sm mb-6">{content.serviceAreaAvailability}</p>

        <h3 className="font-display font-bold text-lg text-surface-dark-foreground mb-4">{content.communitiesTitle}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {communities.map(({ name, tag }) => (
            <div key={name} className="flex items-center gap-2">
              <span className="text-surface-dark-foreground text-sm font-medium">{name}</span>
              {tag && <span className="text-accent text-xs font-display font-bold uppercase">{tag}</span>}
            </div>
          ))}
        </div>
        <p className="text-surface-dark-foreground/50 text-sm mt-4">{content.communitiesSurrounding}</p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="#contact" className="bg-accent text-accent-foreground font-display font-bold uppercase text-sm px-6 py-3 rounded hover:brightness-110 transition-all">
            {content.getQuoteButton}
          </a>
          <a href="tel:8137244975" className="border-2 border-surface-dark-foreground/30 text-surface-dark-foreground font-display font-bold uppercase text-sm px-6 py-3 rounded hover:border-accent hover:text-accent transition-all">
            {content.phoneNumber}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceArea;