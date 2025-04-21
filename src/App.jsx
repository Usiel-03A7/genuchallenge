import React from "react";
import HeroLeft from "./components/HeroLeft";
import Sidebar from "./components/Sidebar";
import MissionSection from "./components/MissionSection";
import GlobalPresence from "./components/GlobalPresence";

function App() {
  return (
    <div className="min-h-screen bg-white">

      <div className="flex">
        <HeroLeft />
        <Sidebar />
      </div>


      <MissionSection />


      <GlobalPresence />
    </div>
  );
}

export default App;
