import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Free Quote Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDetails: ${formData.details}`
    );
    window.location.href = `mailto:lucio@luciojunkremoval.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-card rounded-lg shadow-2xl p-8 w-full max-w-md" id="contact">
      <div className="inline-block bg-accent/15 text-accent font-display font-bold text-xs uppercase tracking-wider px-3 py-1 rounded mb-4">
        Free Quote
      </div>
      <h3 className="font-display font-800 text-2xl text-card-foreground mb-2">Get Your Free Quote</h3>
      <p className="text-muted-foreground text-sm mb-6">Tell us what needs to go — we'll get back to you fast.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2.5 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Phone</label>
            <input
              type="tel"
              placeholder="(555) 555-5555"
              required
              className="w-full px-3 py-2.5 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-3 py-2.5 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

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
        >
          Get My Free Quote
          <ArrowRight className="w-4 h-4" />
        </button>

        <a href="tel:8179958813" className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
          Prefer to talk? <Phone className="w-3.5 h-3.5 text-accent" /> <span className="text-accent font-bold">210-262-1020</span>
        </a>

        <p className="text-xs text-muted-foreground text-center">
          By submitting, you agree to receive a call or text for your quote.
        </p>
      </form>
    </div>
  );
};

export default QuoteForm;
