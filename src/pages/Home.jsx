import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import StandardsBand from "../components/home/StandardsBand";
import Divisions from "../components/home/Divisions";
import Execution from "../components/home/Execution";
import SitePhotography from "../components/home/SitePhotography";
import Contact from "../components/home/Contact";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <div className="bg-ink text-fg font-sans min-h-screen">
      <Header />
      <Hero />
      <StandardsBand />
      <Divisions />
      <Execution />
      <SitePhotography />
      <Contact />
      <Footer />
    </div>
  );
}
