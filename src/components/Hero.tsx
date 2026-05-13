import { motion } from "framer-motion";
import heroImg from "@/assets/hero-studio.jpg";
import logo from "@/assets/logo.png";
import { Waveform } from "./Waveform";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Studio 432 control room"
          className="w-full h-full object-cover scale-110"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(47,38,32,0.55) 0%, rgba(47,38,32,0.75) 60%, #2F2620 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(176,138,106,0.25), transparent 55%)" }} />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-sand/40"
          style={{
            width: 3 + (i % 4),
            height: 3 + (i % 4),
            left: `${(i * 7) % 100}%`,
            top: `${(i * 13) % 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center mb-10"
          >
            <img src={logo} alt="Studio 432 logo" className="h-28 md:h-36 w-auto opacity-95" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex justify-center items-center gap-6 mb-6"
          >
            <span className="h-px w-12 bg-taupe/60" />
            <span className="text-xs tracking-[0.4em] text-taupe uppercase">Multimedia Studio</span>
            <span className="h-px w-12 bg-taupe/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] text-gradient-warm"
          >
            STUDIO 432
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 font-display italic text-2xl md:text-3xl text-sand"
          >
            Music Reimagined
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-8 max-w-2xl mx-auto text-ivory/70 leading-relaxed"
          >
            Professional recording, photography, videography, and creative production
            designed for modern artists, creators, and brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#book"
              className="px-8 py-4 rounded-full bg-taupe text-espresso font-medium tracking-wide hover:bg-walnut hover:text-ivory transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(176,138,106,0.6)] hover:scale-[1.02]"
            >
              Book a Session
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-sand/30 text-ivory hover:bg-ivory/5 hover:border-sand/60 transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-16 flex justify-center"
          >
            <Waveform bars={48} className="opacity-60" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-ivory/40 text-xs tracking-[0.3em] uppercase"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
