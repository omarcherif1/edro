import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import VisionMission from "../components/about/VisionMission";
import OrgStructure from "../components/about/OrgStructure";
import Workshop from "../components/about/Workshop";
import Certifications from "../components/about/Certifications";
import { useLanguage } from "../lib/LanguageContext";
import { HERO, MISSION, VISION, ORG, EQUIPMENT, CERTS } from "../data/about";

export default function About() {
  const { dir } = useLanguage();

  return (
    <div dir={dir} className="bg-ink text-fg font-sans min-h-screen">
      <Header />
      <AboutHero hero={HERO} />
      <VisionMission vision={VISION} mission={MISSION} />
      <OrgStructure org={ORG} />
      <Workshop equipment={EQUIPMENT} />
      <Certifications certs={CERTS} />
      <Footer />
    </div>
  );
}
