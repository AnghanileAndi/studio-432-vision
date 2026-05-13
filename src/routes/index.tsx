import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio 432 — Music Reimagined" },
      { name: "description", content: "Studio 432 is a premium multimedia studio for recording, photography, videography, and creative production. Music Reimagined." },
      { property: "og:title", content: "Studio 432 — Music Reimagined" },
      { property: "og:description", content: "Professional recording, photography, videography, and creative production for modern artists, creators, and brands." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
