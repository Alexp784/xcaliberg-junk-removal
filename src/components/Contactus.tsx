import { Phone, Mail } from "lucide-react";
import { useState } from "react";

const ContactQuoteForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDetails: ${formData.details}`
    );
    window.location.href = `mailto:lucio@luciojunkremoval.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="text-xs font-display font-bold uppercase text-muted-foreground">
          Name
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 w-full rounded-lg border border-input px-3 py-2 text-sm focus:ring-2 focus:ring-accent"
          />
        </label>
        <label className="text-xs font-display font-bold uppercase text-muted-foreground">
          Phone
          <input
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1 w-full rounded-lg border border-input px-3 py-2 text-sm focus:ring-2 focus:ring-accent"
          />
        </label>
      </div>
      <label className="text-xs font-display font-bold uppercase text-muted-foreground block">
        Email
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 w-full rounded-lg border border-input px-3 py-2 text-sm focus:ring-2 focus:ring-accent"
        />
      </label>
      <label className="text-xs font-display font-bold uppercase text-muted-foreground block">
        Details
        <textarea
          required
          rows={4}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="mt-1 w-full rounded-lg border border-input px-3 py-2 text-sm focus:ring-2 focus:ring-accent resize-none"
        />
      </label>
      <button className="w-full bg-accent text-accent-foreground font-bold uppercase py-2.5 rounded-lg hover:brightness-110 transition-all">
        Send Request
      </button>
    </form>
  );
};

const ContactUs = () => {
  return (
    <section id="contact" className="bg-surface py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto max-w-2xl mb-10">
          <p className="text-xs uppercase tracking-[0.28em] font-display font-bold text-accent mb-2">Contact</p>
          <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground">Need Junk Gone? Contact Lucio’s Team</h2>
          <p className="text-muted-foreground mt-3">
            Strong service, clean results. We handle residential and commercial cleanouts in Fort Worth and the DFW area.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-6 shadow-md">
            <p className="text-sm uppercase tracking-[0.28em] font-display font-bold text-accent mb-2">Quick Contact</p>
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">Book a Pickup</h3>
            <p className="text-muted-foreground mb-5">Fill out the form and we’ll call or text to confirm your appointment.</p>
            <div className="space-y-3 text-sm text-foreground">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> 740-357-5167</div>
              
              <div className="rounded-lg bg-surface-dark/10 p-3 text-xs text-muted-foreground">Operating hours: Mon-Sat 8am-7pm</div>
            </div>
          </div>
          <ContactQuoteForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
