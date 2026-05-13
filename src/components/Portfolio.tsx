import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

type Cat = "All" | "Recording" | "Photography" | "Videography" | "Behind The Scenes";

const items = [
  { src: p1, cat: "Recording" as Cat, title: "Vocal Session", span: "row-span-2" },
  { src: p2, cat: "Behind The Scenes" as Cat, title: "Camera Rig", span: "" },
  { src: p3, cat: "Photography" as Cat, title: "Editorial Portrait", span: "" },
  { src: p4, cat: "Recording" as Cat, title: "Console Detail", span: "" },
  { src: p5, cat: "Videography" as Cat, title: "Music Video Set", span: "row-span-2" },
  { src: p6, cat: "Photography" as Cat, title: "Studio Shoot", span: "" },
];

const cats: Cat[] = ["All", "Recording", "Photography", "Videography", "Behind The Scenes"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="portfolio" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] text-taupe uppercase">Selected Work</span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl font-light text-gradient-warm leading-[1.05]">
              From the Studio Floor
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all border ${
                  active === c
                    ? "bg-taupe text-espresso border-taupe"
                    : "border-white/10 text-ivory/60 hover:border-taupe/40 hover:text-ivory"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.button
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5 }}
                onClick={() => setLightbox(item.src)}
                className={`group relative overflow-hidden rounded-2xl ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-left translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[10px] tracking-[0.3em] text-taupe uppercase">{item.cat}</div>
                  <div className="font-display text-xl text-ivory mt-1">{item.title}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] bg-espresso/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-ivory/70 hover:text-ivory">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={lightbox}
              alt="Preview"
              className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
