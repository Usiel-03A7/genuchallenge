export default function HeroLeft() {
  return (
    <div className='w-[90vw] sm:w-[85vw] mx-auto p-4 lg:pl-8 relative min-h-[50vh] lg:min-h-[80vh] overflow-hidden' id='inicio'>
      {/* Fondo de imagen */}
      <div className='absolute inset-0 bg-cover bg-center origin-center' style={{
        backgroundImage: "url('/bg-hero.jpeg')",
        height: "120%",
        top: "-10%",
      }}>
        <div className='absolute inset-0 bg-black/20 lg:bg-black/30 z-0'></div>
      </div>

      {/* Tarjeta cuadrada responsive */}
      <div className='relative w-full max-w-xs sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white rounded-2xl flex flex-col justify-start mt-12 sm:mt-20 lg:mt-32 mx-auto sm:ml-8 lg:ml-12 overflow-hidden border border-gray-200'>
        {/* Parte superior con degradado */}
        <div className='h-1/2 w-full bg-gradient-to-b rounded-t-2xl from-white to-purple-400 p-4 flex items-end'>
          <p className='text-lg sm:text-xl lg:text-2xl xl:text-3xl italic text-blue-950 text-center w-full leading-tight'>
            Estás a punto de iniciar un viaje hacia el universo de la{' '}
            <span className='bg-blue-950 text-amber-50 px-1'>educación digital</span>
          </p>
        </div>

        {/* Parte inferior */}
        <div className='h-1/2 w-full p-4 flex flex-col justify-center items-center text-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950'>G=NUN=</h1>
          <p className='text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-950 mt-1'>
            <span className='text-red-600'>digital</span>school
          </p>
        </div>
      </div>

      {/* Texto del footer */}
      <p className='text-xs sm:text-sm lg:text-base text-gray-300 absolute bottom-4 left-4 lg:left-8'>
        studyajgenuine.com
      </p>
    </div>
  );
};
