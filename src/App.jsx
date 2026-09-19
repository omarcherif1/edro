import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
// import Projects from "./pages/Projects"; // hidden until real project data is ready — keep for later reactivation
import HseQuality from "./pages/HseQuality";
import StorageTanks from "./pages/StorageTanks";
import PipingAndPipelines from "./pages/PipingAndPipelines";
import SteelStructures from "./pages/SteelStructures";
import { LanguageProvider } from "./lib/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/projects" element={<Projects />} /> hidden until real project data is ready */}
        <Route path="/hse-quality" element={<HseQuality />} />
        <Route path="/storage-tanks" element={<StorageTanks />} />
        <Route path="/piping-and-pipelines" element={<PipingAndPipelines />} />
        <Route path="/steel-structures" element={<SteelStructures />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
