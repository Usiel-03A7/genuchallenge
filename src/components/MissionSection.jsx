import React from "react";

const MissionSection = () => {
  return (
    <div className="w-full p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Nuestra misión en el mundo y lo que soñamos para tus hijos</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nuestra misión</h2>
        <p className="text-gray-700">
          Educar, empoderar y conectar a nuestras estudiantes mediante experiencias de aprendizaje remoto que trasciendan las fronteras geográficas e idiomáticas.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nuestra visión</h2>
        <p className="text-gray-700">
          Visualizamos un mundo donde miles de jóvenes y niños usen sus habilidades para transformar sus comunidades y regiones por medio del emprendimiento, la tecnología y la innovación.
        </p>
      </div>
    </div>
  );
};

export default MissionSection;
