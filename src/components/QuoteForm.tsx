import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { content } from "@/lib/content";

const QuoteForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Please call or text 727-495-4052 with photos for a free estimate. We do not use email for bookings.");
    window.location.href = "tel:7274954052";
  };

  return (
    <div className="bg-card rounded-lg shadow-2xl p-8 w-full max-w-md" id="contact">
      <div className="inline-block bg-accent/15 text-accent font-display font-bold text-xs uppercase tracking-wider px-3 py-1 rounded mb-4">
        {content.quoteFormBadge}
      </div>
      <h3 className="font-display font-800 text-2xl text-card-foreground mb-2">{content.quoteFormTitle}</h3>
      <p className="text-muted-foreground text-sm mb-6">{content.quoteFormDescription}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-1.5">{content.nameLabel}</label>
            <input
              type="text"
              placeholder={content.quoteFormNamePlaceholder}
              required
              className="w-full px-3 py-2.5 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-1.5">{content.phoneLabel}</label>
            <input
              type="tel"
              placeholder={content.quoteFormPhonePlaceholder}
              required
              className="w-full px-3 py-2.5 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="text-sm text-muted-foreground">No email needed — call or text 727-495-4052 with photos for a free quote.</div>

        <div>
          <label className="block text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Details</label>
          <textarea
            rows={3}
            placeholder="Describe your project or any details we should know..."
            className="w-full px-3 py-2.5 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-accent-foreground font-display font-bold uppercase text-sm py-3 rounded hover:brightness-110 transition-all flex items-center justify-center gap-2"
        >{content.quoteFormSubmitButton}
          <ArrowRight className="w-4 h-4" />
        </button>

        <a href="tel:8179958813" className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
          {content.quoteFormCallText} <Phone className="w-3.5 h-3.5 text-accent" /> <span className="text-accent font-bold">{content.phoneNumber}</span>
        </a>

        <p className="text-xs text-muted-foreground text-center">
          {content.quoteFormDisclaimer}
        </p>
      </form>
    </div>
  );
};

export default QuoteForm;
