import { useEffect, useState } from "react";

const MissionSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-blue-50 w-full py-12 px-4" id="quienes-somos">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12 relative">
          {isMobile ? (

            <div className="mb-8">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-64 md:h-auto"
                  src="https://www.youtube.com/embed/0IlUVfWThdo?si=LAckK1FnP9DlIiHv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (

            <div className="h-32 md:h-40 mb-4 flex justify-center">
              <svg viewBox="0 0 200 160" className="h-full">

                <path d="M30,60 Q40,50 50,60 T70,60 T90,60" fill="none" stroke="#D6E6F9" strokeWidth="4" />
                <path d="M120,40 Q130,30 140,40 T160,40" fill="none" stroke="#D6E6F9" strokeWidth="4" />
                <path d="M140,90 Q150,80 160,90 T180,90" fill="none" stroke="#D6E6F9" strokeWidth="4" />

                <rect x="85" y="70" width="18" height="35" rx="3" fill="#E0E0E0" />
                <rect x="85" y="75" width="18" height="5" rx="1" fill="#D0D0D0" />

                <path d="M85,105 L85,125 Q90,120 95,125 L95,105 Z" fill="url(#flame1)" />
                <path d="M103,105 L103,125 Q108,120 113,125 L113,105 Z" fill="url(#flame2)" />

                <circle cx="98" cy="60" r="12" fill="#4A3533" />
                <rect x="90" y="68" width="16" height="25" rx="5" fill="#F4F0ED" />

                <path d="M90,75 L65,60 L60,65 L85,80 Z" fill="#F4F0ED" />
                <path d="M106,75 L135,60 L140,65 L110,80 Z" fill="#F4F0ED" />

                <circle cx="62.5" cy="62.5" r="5" fill="url(#glove1)" />
                <circle cx="137.5" cy="62.5" r="5" fill="url(#glove2)" />

                <defs>
                  <linearGradient id="flame1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="50%" stopColor="#99CCFF" />
                    <stop offset="100%" stopColor="white" />
                  </linearGradient>
                  <linearGradient id="flame2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="50%" stopColor="#99CCFF" />
                    <stop offset="100%" stopColor="white" />
                  </linearGradient>
                  <linearGradient id="glove1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="50%" stopColor="#FFFFFF" />
                  </linearGradient>
                  <linearGradient id="glove2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="50%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
            Nuestra misión en el mundo y lo que soñamos para tus hijos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-8 border border-blue-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3 text-blue-900">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L4.5 9.5L7 12L12 7L17 12L19.5 9.5L12 2Z" fill="currentColor" />
                  <path d="M12 7L7 12V22H17V12L12 7Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Nuestra misión</h3>
            </div>
            <p className="text-blue-900 text-lg">
              Educar, empoderar y conectar a nuestros estudiantes mediante experiencias de aprendizaje remoto que
              trascienden las fronteras geográficas e idiomáticas.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-blue-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3 text-blue-900">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <path d="M3 12L5 12" stroke="currentColor" strokeWidth="2" />
                  <path d="M19 12L21 12" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 3L12 5" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 19L12 21" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Nuestra visión</h3>
            </div>
            <p className="text-blue-900 text-lg">
              Visualizamos un mundo donde miles de jóvenes y niños usen sus habilidades para transformar sus comunidades y
              regiones por medio del emprendimiento, la tecnología y la innovación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
