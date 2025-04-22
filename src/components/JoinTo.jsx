import React from 'react';

export default function JoinTo() {
  return (
    <div className="relative w-[90vw] sm:w-[85vw] mx-auto rounded-xl overflow-hidden my-8" id='unete'>
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <img
          src="/joinus.jpeg"
          alt="Estudiantes de Genuine Digital School"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 px-4 py-8 md:py-12 w-full">
        {/* Logo */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white rounded-full py-2 px-4 shadow-md">
          <div className="flex items-center">
            <h4 className="text-lg sm:text-xl font-bold text-blue-900">G<span className="text-red-500">E</span>NUIN<span className="text-red-500">E</span></h4>
            <p className="text-[0.6rem] sm:text-xs text-pink-500 ml-1">digitalschool</p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="mt-16 sm:mt-20 md:mt-32 lg:mt-40 xl:mt-48 w-full max-w-4xl mx-auto px-2 sm:px-4">
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl text-center py-4 sm:py-6 px-4 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              ¡Únete a Genuine Digital School hoy!
            </h2>
          </div>

          {/* Tarjeta blanca */}
          <div className="bg-white bg-opacity-90 rounded-xl mt-4 py-4 sm:py-6 px-4 sm:px-6 text-center shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl text-blue-900 font-semibold mb-3 sm:mb-4 leading-snug">
              Explora el increíble universo de la educación virtual junto a tu hijo
            </h3>

            <p className="text-blue-900 mb-4 sm:mb-6 text-sm sm:text-base">
              Síguenos en Redes Sociales y conoce nuestra gran comunidad digital
            </p>

            {/* Iconos de redes sociales */}
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <a key={item} href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                    {/* Icono genérico - reemplaza con tus SVGs */}
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Botón inferior */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:right-8 md:left-auto md:transform-none mt-4 sm:mt-8 text-center">
          <a href="https://studyatgenuine.com" className="text-white text-sm sm:text-lg font-semibold bg-blue-900 bg-opacity-70 px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-opacity-90 transition-colors">
            studyatgenuine.com
          </a>
        </div>
      </div>
    </div>
  );
};
