import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

const stats = [
  { label: "Sessions Completed", value: 1240, suffix: "+" },
  { label: "Artists Worked With", value: 380, suffix: "+" },
  { label: "Projects Delivered", value: 560, suffix: "+" },
  { label: "Hours Recorded", value: 9800, suffix: "+" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(176,138,106,0.6), transparent 60%)", filter: "blur(80px)" }} />
      </div>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-xs tracking-[0.4em] text-taupe uppercase">The Experience</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-light text-gradient-warm leading-[1.02]">
            More Than A Studio
          </h2>
          <p className="mt-8 text-ivory/65 text-lg leading-relaxed">
            A creative ecosystem built for collaboration, freedom, and uncompromising execution.
            Every detail — from acoustics to lighting to the way coffee meets a long session —
            is designed to keep you in the flow of the work that matters.
          </p>
        </motion.div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-sand/10 rounded-3xl overflow-hidden border border-sand/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-espresso/80 p-10 text-center"
            >
              <div className="font-display text-5xl md:text-6xl text-sand">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs tracking-[0.3em] uppercase text-ivory/50">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
