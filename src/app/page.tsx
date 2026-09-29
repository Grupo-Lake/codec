import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Days } from "@/components/sections/Days";
import { About } from "@/components/sections/About";
import { Solidarity } from "@/components/sections/Solidarity";
import { Schedule } from "@/components/sections/Schedule";
import { Speakers } from "@/components/sections/Speakers";
import { Organization } from "@/components/sections/Organization";
import { MissionVision } from "@/components/sections/MissionVision";
import { Locations } from "@/components/sections/Locations";
import { Partners } from "@/components/sections/Partners";
import { Faq } from "@/components/sections/Faq";
import { Register } from "@/components/sections/Register";
import { days } from "@/data/event";
import {
  EVENT_FULL_NAME,
  EVENT_NAME,
  REGISTRATION_URL,
  SITE_URL,
} from "@/lib/config";

const jsonLd = days.map((d) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: `${EVENT_NAME} — ${d.tag}`,
  description: EVENT_FULL_NAME,
  startDate: d.start,
  endDate: d.end,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: d.place,
    address: d.addr,
  },
  image: `${SITE_URL}/opengraph-image`,
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "BRL",
    url: REGISTRATION_URL,
    availability: "https://schema.org/InStock",
  },
  organizer: {
    "@type": "Organization",
    name: "OPAM — Organização Paulista de Artes Marciais",
  },
}));

export default function Home() {
  return (
    <>
      <a href="#top" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Days />
        <About />
        <Solidarity />
        <Schedule />
        <Speakers />
        <Organization />
        <MissionVision />
        <Locations />
        <Partners />
        <Faq />
        <Register />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
