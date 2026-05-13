import { motion } from "framer-motion";
import { Mic2, Users, Video, Camera, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Mic2,
    title: "Recording",
    price: "₹1,500",
    unit: "/ hour",
    desc: "Professional vocal and instrument recording in a fully treated studio environment with premium signal chains.",
    tags: ["Vocals", "Instruments", "Mixing"],
  },
  {
    icon: Users,
    title: "Jampad / Rehearsal",
    price: "₹600",
    unit: "/ hour",
    desc: "Spacious rehearsal room equipped for full bands. Tiered pricing built for crews of every size.",
    tags: ["Up to 6 — ₹600/hr", "Up to 10 — ₹800/hr", "10+ — ₹1000/hr"],
  },
  {
    icon: Video,
    title: "Video Production",
    price: "₹18,000",
    unit: "/ 6-hour shoot",
    desc: "Music videos, live sessions, interviews, reels, podcasts, and promotional content shot to cinematic standards.",
    tags: ["Music Videos", "Live Sessions", "Podcasts"],
  },
  {
    icon: Camera,
    title: "Photography",
    price: "On Request",
    unit: "",
    desc: "Editorial photography for artists, creators, portraits, branding campaigns, and visual identity work.",
    tags: ["Portraits", "Branding", "Campaigns"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-xs tracking-[0.4em] text-taupe uppercase">What We Do</span>
          <h2 className="mt-6 font-display text-5xl md:text-6xl font-light text-gradient-warm leading-[1.05]">
            Services Crafted for Creators
          </h2>
          <p className="mt-6 text-ivory/65 text-lg">
            Four disciplines, one production house. Transparent pricing, premium execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl p-10 border border-white/5 hover:border-taupe/40 transition-all duration-500"
              style={{ background: "linear-gradient(160deg, rgba(176,138,106,0.06), rgba(47,38,32,0.6) 60%, rgba(123,90,67,0.08))" }}
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-taupe/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex items-start justify-between mb-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-espresso border border-taupe/30 flex items-center justify-center group-hover:bg-taupe transition-colors duration-500">
                  <s.icon className="w-6 h-6 text-taupe group-hover:text-espresso transition-colors" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-ivory/30 group-hover:text-taupe group-hover:rotate-12 transition-all" />
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-ivory mb-3">{s.title}</h3>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-display text-3xl text-taupe">{s.price}</span>
                <span className="text-sm text-ivory/50">{s.unit}</span>
              </div>
              <p className="text-ivory/65 leading-relaxed mb-6">{s.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-ivory/5 border border-sand/15 text-ivory/70">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#book"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-sand hover:text-taupe transition-colors"
              >
                Book Now
                <span className="h-px w-8 bg-current group-hover:w-14 transition-all" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
