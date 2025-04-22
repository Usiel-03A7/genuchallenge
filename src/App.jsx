import React from 'react';
import HeroLeft from './components/HeroLeft';
import Sidebar from './components/Sidebar';
import MissionSection from './components/MissionSection';
import GlobalPresence from './components/GlobalPresence';
import JoinTo from './components/JoinTo';

function App() {
  return (
    <div className='min-h-screen bg-white'>

      <div className='flex'>
        <HeroLeft />
        <Sidebar />
      </div>


      <MissionSection />


      <GlobalPresence />
      <JoinTo />
    </div>
  );
}

export default App;
