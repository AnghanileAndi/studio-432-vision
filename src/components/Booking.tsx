import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="book" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] text-taupe uppercase">Book a Session</span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl font-light text-gradient-warm leading-[1.05]">
              Let's Make Something Worth Hearing
            </h2>
            <p className="mt-6 text-ivory/65 text-lg max-w-md">
              Tell us about your project. We'll get back within 24 hours with availability and a tailored quote.
            </p>

            <div className="mt-10 space-y-5">
              <a href="https://wa.me/919211257104" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-taupe/15 border border-taupe/30 flex items-center justify-center group-hover:bg-taupe transition">
                  <MessageCircle className="w-4 h-4 text-taupe group-hover:text-espresso" />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-ivory/40">WhatsApp</div>
                  <div className="text-ivory">+91 92112 57104</div>
                </div>
              </a>
              <a href="mailto:stu6io432@gmail.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-taupe/15 border border-taupe/30 flex items-center justify-center group-hover:bg-taupe transition">
                  <Mail className="w-4 h-4 text-taupe group-hover:text-espresso" />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-ivory/40">Email</div>
                  <div className="text-ivory">stu6io432@gmail.com</div>
                </div>
              </a>
              <a href="https://instagram.com/studio432" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-taupe/15 border border-taupe/30 flex items-center justify-center group-hover:bg-taupe transition">
                  <Instagram className="w-4 h-4 text-taupe group-hover:text-espresso" />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-ivory/40">Instagram</div>
                  <div className="text-ivory">@studio432</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-taupe/15 border border-taupe/30 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-taupe" />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-ivory/40">Studio</div>
                  <div className="text-ivory">Studio 432, H-93, Block H, Beta II, Greater Noida, Uttar Pradesh 201306</div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden border border-sand/10 h-56">
              <iframe
                title="Studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.5ptr%2C28.46%2C77.54%2C28.49&layer=mapnik&marker=28.4744,77.5040"
                className="w-full h-full grayscale-[40%] opacity-80"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="glass rounded-3xl p-8 md:p-10 space-y-5"
            style={{ background: "linear-gradient(160deg, rgba(216,195,165,0.06), rgba(47,38,32,0.7))" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Service" name="service" as="select" options={["Recording", "Jampad", "Video", "Photography"]} />
              <Field label="Preferred Date" name="date" type="date" />
            </div>
            <Field label="Message" name="message" as="textarea" />

            <button
              type="submit"
              disabled={submitted}
              className="w-full mt-2 py-4 rounded-full bg-taupe text-espresso font-medium tracking-wide hover:bg-walnut hover:text-ivory transition-all duration-300 shadow-[0_15px_50px_-15px_rgba(176,138,106,0.7)]"
            >
              {submitted ? "Thank you — we'll be in touch" : "Book Your Session"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", as, options = [],
}: { label: string; name: string; type?: string; as?: "select" | "textarea"; options?: string[] }) {
  const base =
    "w-full bg-transparent border-b border-sand/20 focus:border-taupe outline-none py-3 text-ivory placeholder:text-ivory/30 transition-colors";
  return (
    <label className="block">
      <span className="text-xs tracking-[0.3em] uppercase text-ivory/50">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} rows={3} className={base} required />
      ) : as === "select" ? (
        <select name={name} className={`${base} bg-espresso`} required>
          <option value="">Select…</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input name={name} type={type} className={base} required />
      )}
    </label>
  );
}
