import Header from "../components/Header";
import Footer from "../components/Footer";
import DivisionHero from "../components/division/DivisionHero";
import CodesStandards from "../components/division/CodesStandards";
import ConstructionSequence from "../components/division/ConstructionSequence";
import MaintenanceRepair from "../components/division/MaintenanceRepair";
import QualityDocumentation from "../components/division/QualityDocumentation";
import DownloadCTA from "../components/division/DownloadCTA";
import ContactForm from "../components/division/ContactForm";
import WhatWeBuild from "../components/division/storage-tanks/WhatWeBuild";
import TankDiagram from "../components/division/storage-tanks/TankDiagram";
import heroPhoto from "../assets/edro/storagetank1.jpeg";
import {
  HERO,
  WHAT_WE_BUILD,
  DIAGRAM,
  STANDARDS,
  STEPS,
  MAINT,
  DOSSIERS,
  CONTACT,
  DOWNLOAD_TITLE,
} from "../data/divisions/storageTanks";

export default function StorageTanks() {
  return (
    <div className="bg-ink text-fg font-sans min-h-screen">
      <Header />
      <DivisionHero hero={HERO} photo={heroPhoto} />
      <WhatWeBuild data={WHAT_WE_BUILD} />
      <TankDiagram data={DIAGRAM} />
      <CodesStandards num="03" standards={STANDARDS} bg="ink" />
      <ConstructionSequence num="04" steps={STEPS} />
      <MaintenanceRepair
        num="05"
        title="Maintenance & Repair"
        intro="In-service and out-of-service work on existing tanks, evaluated to API 653."
        items={MAINT}
      />
      <QualityDocumentation num="06" dossiers={DOSSIERS} />
      <DownloadCTA title={DOWNLOAD_TITLE} />
      <ContactForm
        heading={CONTACT.heading}
        desc={CONTACT.desc}
        messagePlaceholder={CONTACT.messagePlaceholder}
        scopeOptions={CONTACT.scopeOptions}
      />
      <Footer />
    </div>
  );
}
