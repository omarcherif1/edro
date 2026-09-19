import Header from "../components/Header";
import Footer from "../components/Footer";
import DivisionHero from "../components/division/DivisionHero";
import CodesStandards from "../components/division/CodesStandards";
import ConstructionSequence from "../components/division/ConstructionSequence";
import MaintenanceRepair from "../components/division/MaintenanceRepair";
import QualityDocumentation from "../components/division/QualityDocumentation";
import DownloadCTA from "../components/division/DownloadCTA";
import ContactForm from "../components/division/ContactForm";
import WhatWeBuild from "../components/division/piping/WhatWeBuild";
import Comparison from "../components/division/piping/Comparison";
import { useLanguage } from "../lib/LanguageContext";
import heroPhoto from "../assets/edro/piping5.png";
import {
  HERO,
  WHAT_WE_BUILD,
  COMPARISON,
  STANDARDS,
  STEPS,
  MAINT,
  DOSSIERS,
  CONTACT,
  DOWNLOAD_TITLE,
} from "../data/divisions/pipingPipelines";

export default function PipingAndPipelines() {
  const { dir } = useLanguage();

  return (
    <div dir={dir} className="bg-ink text-fg font-sans min-h-screen">
      <Header />
      <DivisionHero hero={HERO} photo={heroPhoto} />
      <WhatWeBuild data={WHAT_WE_BUILD} />
      <Comparison data={COMPARISON} />
      <CodesStandards num="03" standards={STANDARDS} bg="ink" />
      <ConstructionSequence num="04" steps={STEPS} />
      <MaintenanceRepair
        num="05"
        title="Maintenance & Repair"
        intro="In-service and shutdown work on existing lines, inspected and evaluated to API 570."
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
