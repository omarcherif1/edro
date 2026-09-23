import Header from "../components/Header";
import Footer from "../components/Footer";
import DivisionHero from "../components/division/DivisionHero";
import CodesStandards from "../components/division/CodesStandards";
import ConstructionSequence from "../components/division/ConstructionSequence";
import MaintenanceRepair from "../components/division/MaintenanceRepair";
import QualityDocumentation from "../components/division/QualityDocumentation";
import DownloadCTA from "../components/division/DownloadCTA";
// import ContactForm from "../components/division/ContactForm"; // disabled until email sending is wired up
import WhatWeBuild from "../components/division/steel/WhatWeBuild";
import Software from "../components/division/steel/Software";
import heroPhoto from "../assets/edro/steelstructure3.jpeg";
import {
  HERO,
  WHAT_WE_BUILD,
  SOFTWARE,
  STANDARDS,
  STEPS,
  MAINT,
  DOSSIERS,
  CONTACT,
  DOWNLOAD_TITLE,
} from "../data/divisions/steelStructures";

export default function SteelStructures() {
  return (
    <div className="bg-ink text-fg font-sans min-h-screen">
      <Header />
      <DivisionHero hero={HERO} photo={heroPhoto} />
      <WhatWeBuild data={WHAT_WE_BUILD} />
      <Software data={SOFTWARE} />
      <CodesStandards num="03" standards={STANDARDS} bg="ink" />
      <ConstructionSequence num="04" steps={STEPS} />
      <MaintenanceRepair
        num="05"
        title="Maintenance & Rehabilitation"
        intro="Inspection, repair and strengthening of existing steel structures."
        items={MAINT}
      />
      <QualityDocumentation num="06" dossiers={DOSSIERS} />
      <DownloadCTA title={DOWNLOAD_TITLE} />
      {/* <ContactForm
        heading={CONTACT.heading}
        desc={CONTACT.desc}
        messagePlaceholder={CONTACT.messagePlaceholder}
        scopeOptions={CONTACT.scopeOptions}
      /> disabled until email sending is wired up */}
      <Footer />
    </div>
  );
}
