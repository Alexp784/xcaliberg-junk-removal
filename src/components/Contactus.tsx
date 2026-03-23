import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { content } from "@/lib/content";

const ContactQuoteForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your request! Please call or text 727-495-4052 with photos for a free estimate.\nWe do not use email for booking.");
    window.location.href = "tel:7274954052";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="text-xs font-display font-bold uppercase text-muted-foreground">
          {content.nameLabel}
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 w-full rounded-lg border border-input px-3 py-2 text-sm focus:ring-2 focus:ring-accent"
          />
        </label>
        <label className="text-xs font-display font-bold uppercase text-muted-foreground">
          {content.phoneLabel}
          <input
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1 w-full rounded-lg border border-input px-3 py-2 text-sm focus:ring-2 focus:ring-accent"
          />
        </label>
      </div>
      <div className="text-sm text-muted-foreground">We do not require email. Please call or text 727-495-4052 with photos for a free quote.</div>
      <label className="text-xs font-display font-bold uppercase text-muted-foreground block">
        {content.detailsLabel}
        <textarea
          required
          rows={4}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="mt-1 w-full rounded-lg border border-input px-3 py-2 text-sm focus:ring-2 focus:ring-accent resize-none"
        />
      </label>
      <button className="w-full bg-accent text-accent-foreground font-bold uppercase py-2.5 rounded-lg hover:brightness-110 transition-all">
        {content.sendRequestButton}
      </button>
    </form>
  );
};

const ContactUs = () => {
  return (
    <section id="contact" className="bg-surface py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto max-w-2xl mb-10">
          <p className="text-xs uppercase tracking-[0.28em] font-display font-bold text-accent mb-2">{content.contactSectionTitle}</p>
          <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground">{content.contactSectionSubtitle}</h2>
          <p className="text-muted-foreground mt-3">
            {content.contactSectionDescription}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-6 shadow-md">
            <p className="text-sm uppercase tracking-[0.28em] font-display font-bold text-accent mb-2">{content.quickContactTitle}</p>
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">{content.bookPickupTitle}</h3>
            <p className="text-muted-foreground mb-5">{content.bookPickupDescription}</p>
            <div className="space-y-3 text-sm text-foreground">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> {content.phoneNumber}</div>
              
              <div className="rounded-lg bg-surface-dark/10 p-3 text-xs text-muted-foreground">{content.operatingHours}</div>
            </div>
          </div>
          <ContactQuoteForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
