import { motion } from "framer-motion";
import { Mic, Compass, Camera, Zap, Heart } from "lucide-react";
import portrait from "@/assets/portfolio-3.jpg";
import mixer from "@/assets/portfolio-4.jpg";

const features = [
  { icon: Mic, title: "Professional Recording", desc: "Acoustically treated rooms with industry-grade signal chains." },
  { icon: Compass, title: "Creative Direction", desc: "End-to-end vision crafted around your sound and story." },
  { icon: Camera, title: "Visual Production", desc: "Cinematic videography and editorial photography in-house." },
  { icon: Zap, title: "Fast Turnaround", desc: "Streamlined workflow without compromising craft." },
  { icon: Heart, title: "Artist-Focused", desc: "A space built around how creators actually work." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] text-taupe uppercase">About the Studio</span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-gradient-warm">
              Where Creativity Becomes Culture
            </h2>
            <p className="mt-8 text-ivory/70 text-lg leading-relaxed max-w-xl">
              Studio 432 is a modern multimedia production studio designed for musicians,
              creators, podcasters, brands, and visual storytellers. The space combines
              professional recording, rehearsal, photography, videography, and digital
              content production within one immersive creative environment.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="font-display text-4xl text-sand">10+</div>
                <div className="text-xs tracking-widest uppercase text-ivory/50 mt-1">Years of craft</div>
              </div>
              <div className="h-12 w-px bg-sand/20" />
              <div>
                <div className="font-display text-4xl text-sand">4</div>
                <div className="text-xs tracking-widest uppercase text-ivory/50 mt-1">Disciplines, one roof</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[520px]"
          >
            <div className="absolute top-0 right-0 w-2/3 h-3/4 rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <img src={portrait} alt="Artist portrait" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden border border-sand/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <img src={mixer} alt="Mixing console" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-taupe/20 blur-3xl animate-float-slow" />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-taupe/40 transition-all duration-500 group"
              style={{ background: "linear-gradient(160deg, rgba(176,138,106,0.08), rgba(47,38,32,0.4))" }}
            >
              <div className="w-11 h-11 rounded-xl bg-taupe/15 border border-taupe/30 flex items-center justify-center mb-5 group-hover:bg-taupe group-hover:text-espresso transition-all">
                <f.icon className="w-5 h-5 text-taupe group-hover:text-espresso" />
              </div>
              <h3 className="font-display text-xl text-ivory mb-2">{f.title}</h3>
              <p className="text-sm text-ivory/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
