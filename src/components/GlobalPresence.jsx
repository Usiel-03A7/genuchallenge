import React from "react";

const GlobalPresence = () => {
  return (
    <div className="w-full p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">De Estados Unidos para el mundo</h2>
      <p className="text-gray-700 mb-6">
        Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el Florida Department of Education con el código 8822.
        <a href="#registro" className="text-orange-500 ml-2 hover:underline">Conoce el nuestro aquí Registro legal</a>
      </p>

      <h3 className="text-xl font-semibold mb-3">Somos del mundo</h3>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-gray-700">
          <p>Colombia, Escobar, Perú,</p>
          <p>México, Paramá, Costa Rica,</p>
          <p>Chile, Argentina, Estados</p>
          <p>Unidos, Emiratos Andes, Brasil,</p>
        </div>
        <div className="text-gray-700">
          <p>República Dominicana, Irlanda,</p>
          <p>Canadá, España, Portugal,</p>
          <p>China, Italia.</p>
        </div>
        <div className="text-gray-700">
          <p>Estados Unidos, Colombia, Perú,</p>
          <p>Brasil, Chile, México, Venezuela.</p>
        </div>
      </div>

      <div className="flex gap-8">
        <div>
          <p className="text-3xl font-bold text-orange-500">+400</p>
          <p>Estudiantes</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-orange-500">28</p>
          <p>Staff</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-orange-500">44</p>
          <p>Profesores</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
