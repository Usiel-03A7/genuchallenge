import React, { useState, useEffect } from 'react';

const GlobalPresence = () => {
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
    <div className='bg-white w-full py-12 px-4' id='somos-estadounidenses'>
      <div className='max-w-6xl mx-auto'>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-6'>
              De Estados Unidos para el mundo
            </h2>
            <p className='text-blue-900 text-lg mb-6'>
              Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el
              <span className='font-bold'> Florida Department of Education </span>
              con el código <span className='font-bold'>8822</span>.
            </p>
            <div className='flex flex-wrap gap-4'>
              <a
                href='#'
                className='px-5 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors'
              >
                Conoce el nuestro aquí
              </a>
              <a
                href='#'
                className='px-5 py-3 bg-white text-blue-900 border-2 border-blue-900 rounded-md hover:bg-blue-50 transition-colors'
              >
                Registro legal
              </a>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <img
              src='/grupo.jpeg'
              alt='Grupo de estudiantes'
              className='rounded-lg shadow-md w-full h-auto max-h-96 object-cover'
            />
          </div>
        </div>


        <div className='mt-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-8'>
            Somos<br />del mundo
          </h2>


          <div className='flex flex-wrap justify-around gap-4 mb-12'>
            <div className='bg-white border-2 border-orange-500 rounded-lg px-6 py-4 text-center min-w-48'>
              <p className='text-orange-500 text-3xl font-bold'>+ 400</p>
              <p className='text-orange-500 text-xl'>Estudiantes</p>
            </div>

            <div className='bg-white border-2 border-purple-300 rounded-lg px-6 py-4 text-center min-w-48'>
              <p className='text-purple-300 text-3xl font-bold'>28</p>
              <p className='text-purple-300 text-xl'>Staff</p>
            </div>

            <div className='bg-white border-2 border-purple-800 rounded-lg px-6 py-4 text-center min-w-48'>
              <p className='text-purple-800 text-3xl font-bold'>44</p>
              <p className='text-purple-800 text-xl'>Profesores</p>
            </div>
          </div>


          <div className='grid md:grid-cols-5 gap-6'>

            <div className='md:col-span-2'>

              <div className='bg-orange-500 text-white p-4 mb-2'>
                <p className='text-sm md:text-base'>
                  Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile, Argentina, Estados Unidos, Emiratos Árabes, Brasil, República Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.
                </p>
              </div>


              <div className='bg-purple-300 text-white p-4 mb-2'>
                <p className='text-sm md:text-base'>
                  Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.
                </p>
              </div>


              <div className='bg-purple-800 text-white p-4'>
                <p className='text-sm md:text-base'>
                  Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.
                </p>
              </div>
            </div>


            <div className='md:col-span-3 relative h-64 md:h-80 lg:h-96'>
              {isMobile ? (
                <img
                  src='/api/placeholder/600/400'
                  alt='Mapa mundial con marcadores'
                  className='w-full h-full object-contain'
                />
              ) : (
                <svg viewBox='0 0 1000 500' className='w-full h-full'>

                  <path d='M150,100 Q300,50 450,100 T750,100 T900,150 Q950,200 900,300 Q850,350 750,350 Q600,300 450,350 Q300,400 150,350 Q50,300 150,100'
                    fill='#E6F0FB' stroke='#D0E0F0' strokeWidth='2' />


                  <circle cx='200' cy='150' r='8' fill='#FF4D4D' />
                  <circle cx='250' cy='180' r='8' fill='#FF4D4D' />

                  {/* América Central */}
                  <circle cx='230' cy='220' r='8' fill='#FF4D4D' />
                  <circle cx='240' cy='240' r='8' fill='#FF4D4D' />

                  {/* América del Sur */}
                  <circle cx='280' cy='280' r='8' fill='#FF4D4D' />
                  <circle cx='260' cy='320' r='8' fill='#FF4D4D' />
                  <circle cx='240' cy='300' r='8' fill='#FF4D4D' />

                  {/* Europa */}
                  <circle cx='450' cy='150' r='8' fill='#FF4D4D' />
                  <circle cx='470' cy='140' r='8' fill='#FF4D4D' />
                  <circle cx='490' cy='160' r='8' fill='#FF4D4D' />

                  {/* Asia */}
                  <circle cx='650' cy='180' r='8' fill='#FF4D4D' />
                  <circle cx='700' cy='200' r='8' fill='#FF4D4D' />
                  <circle cx='750' cy='220' r='8' fill='#FF4D4D' />

                  {/* Oceanía */}
                  <circle cx='800' cy='300' r='8' fill='#FF4D4D' />

                  {/* África */}
                  <circle cx='500' cy='250' r='8' fill='#FF4D4D' />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
