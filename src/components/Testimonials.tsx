import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    quote: "Studio 432 doesn't feel like a studio — it feels like a creative home. The team understood my vision from the first hour.",
    name: "Aria Mehra",
    role: "Independent Artist",
  },
  {
    quote: "The cinematic quality of our music video exceeded every expectation. Every frame felt intentional, every cut deliberate.",
    name: "Karan Velluri",
    role: "Director, Northlight Films",
  },
  {
    quote: "From recording to photography, the consistency of taste across disciplines is what sets this place apart.",
    name: "Maya Iyer",
    role: "Founder, Verse Collective",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, []);
  const item = items[i];

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.4em] text-taupe uppercase">Voices</span>
          <h2 className="mt-6 font-display text-5xl md:text-6xl font-light text-gradient-warm">
            What Artists Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <Quote className="absolute -top-8 -left-2 w-20 h-20 text-taupe/15" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-10 md:p-14 text-center"
              style={{ background: "linear-gradient(160deg, rgba(216,195,165,0.08), rgba(47,38,32,0.6))" }}
            >
              <p className="font-display italic text-2xl md:text-3xl text-ivory leading-relaxed">
                "{item.quote}"
              </p>
              <div className="mt-8">
                <div className="text-sand font-medium">{item.name}</div>
                <div className="text-xs tracking-widest uppercase text-ivory/40 mt-1">{item.role}</div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button onClick={() => setI((i - 1 + items.length) % items.length)} aria-label="Prev" className="w-10 h-10 rounded-full border border-sand/20 flex items-center justify-center text-ivory/70 hover:bg-taupe hover:text-espresso transition">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "bg-taupe w-8" : "bg-sand/25 w-2"}`}
                  aria-label={`Go to ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={() => setI((i + 1) % items.length)} aria-label="Next" className="w-10 h-10 rounded-full border border-sand/20 flex items-center justify-center text-ivory/70 hover:bg-taupe hover:text-espresso transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
