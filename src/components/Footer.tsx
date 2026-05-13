import logo from "@/assets/logo.png";
import { Instagram, Youtube, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-sand/10 pt-16 pb-10" style={{ background: "#2F2620" }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Studio 432" className="h-14 w-auto mb-4 opacity-90" />
            <p className="font-display italic text-sand text-lg">Music Reimagined</p>
            <p className="mt-4 text-ivory/55 max-w-sm text-sm leading-relaxed">
              A modern multimedia studio for artists, creators, and brands building work that lasts.
            </p>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-taupe mb-4">Explore</div>
            <ul className="space-y-2 text-ivory/60 text-sm">
              <li><a href="#about" className="hover:text-taupe">About</a></li>
              <li><a href="#services" className="hover:text-taupe">Services</a></li>
              <li><a href="#portfolio" className="hover:text-taupe">Portfolio</a></li>
              <li><a href="#book" className="hover:text-taupe">Book</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-taupe mb-4">Contact</div>
            <ul className="space-y-2 text-ivory/60 text-sm">
              <li>hello@studio432.com</li>
              <li>+91 00000 00000</li>
              <li>432 Creative Lane,<br />Bengaluru</li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Music2, label: "Spotify" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={`Studio 432 on ${label}`} className="w-9 h-9 rounded-full border border-sand/20 flex items-center justify-center text-ivory/70 hover:bg-taupe hover:text-espresso hover:border-taupe transition">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-sand/10 flex flex-col md:flex-row gap-3 justify-between text-xs text-ivory/40">
          <span>© {new Date().getFullYear()} Studio 432 — All rights reserved.</span>
          <span className="tracking-widest uppercase">Crafted with care</span>
        </div>
      </div>
    </footer>
  );
}
