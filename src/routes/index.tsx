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

const SITE_URL = "https://studio-432-reimagined.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio 432 — Music Reimagined" },
      { name: "description", content: "Premium multimedia studio in Bengaluru offering recording, photography, videography, and creative production for modern artists and brands." },
      { property: "og:title", content: "Studio 432 — Music Reimagined" },
      { property: "og:description", content: "Professional recording, photography, videography, and creative production for modern artists, creators, and brands." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Studio 432",
          description: "Premium multimedia studio for recording, photography, videography, and creative production.",
          url: SITE_URL,
          slogan: "Music Reimagined",
          address: {
            "@type": "PostalAddress",
            streetAddress: "432 Creative Lane",
            addressLocality: "Bengaluru",
            addressCountry: "IN",
          },
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recording" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rehearsal" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Production" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photography" } },
          ],
        }),
      },
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
