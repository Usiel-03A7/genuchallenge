import React from "react";
import HeroLeft from "./components/HeroLeft";
import Sidebar from "./components/Sidebar";
import MissionSection from "./components/MissionSection";
import GlobalPresence from "./components/GlobalPresence";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sección Hero (Imagen 1) */}
      <div className="flex">
        <HeroLeft />
        <Sidebar />
      </div>

      {/* Sección Misión (Imagen 2) */}
      <MissionSection />

      {/* Sección Global (Imagen 3) */}
      <GlobalPresence />
    </div>
  );
}

export default App;
