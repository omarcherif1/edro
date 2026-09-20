import Header from "../components/Header";
import Footer from "../components/Footer";
import HseHero from "../components/hse/HseHero";
import Commitment from "../components/hse/Commitment";
import PermitsGrid from "../components/hse/PermitsGrid";
import QaqcChain from "../components/hse/QaqcChain";
import Certifications from "../components/hse/Certifications";
import { HERO, COMMITMENT, PERMITS, QAQC, CERTS } from "../data/hseQuality";

export default function HseQuality() {
  return (
    <div className="bg-ink text-fg font-sans min-h-screen">
      <Header />
      <HseHero hero={HERO} />
      <Commitment data={COMMITMENT} />
      <PermitsGrid permits={PERMITS} />
      <QaqcChain qaqc={QAQC} />
      <Certifications certs={CERTS} />
      <Footer />
    </div>
  );
}
