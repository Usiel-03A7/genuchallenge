import React from 'react';

const JoinTo = () => {
  return (
    <div className='relative w-dvw rounded-xl overflow-hidden' id='unete'>
      <div className='absolute inset-0 bg-cover bg-center z-0'>
        <img
          src='/joinus.jpeg'
          alt='Estudiantes de Genuine Digital School'
          className='w-dvw h-full object-cover'
        />
      </div>
      <div className='relative z-10 px-4 py-8 md:py-12'>
        <div className='absolute top-4 right-4 md:top-6 md:right-6 bg-white rounded-full py-2 px-4 shadow-md'>
          <div className='flex items-center'>
            <h4 className='text-xl font-bold text-blue-900'>G<span className='text-red-500'>E</span>NUIN<span className='text-red-500'>E</span></h4>
            <p className='text-xs text-pink-500 ml-1'>digitalschool</p>
          </div>
        </div>


        <div className='mt-20 md:mt-32 lg:mt-64 max-w-3xl mx-auto'>
          <div className='bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl text-center py-6 px-4 md:py-8 shadow-lg'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900'>
              ¡Únete a Genuine Digital School hoy!
            </h2>
          </div>

          <div className='bg-white bg-opacity-90 rounded-xl mt-4 py-6 px-4 md:px-8 text-center shadow-lg'>
            <h3 className='text-xl md:text-2xl text-blue-900 font-semibold mb-4'>
              Explora el increíble universo de la educación virtual junto a tu hijo
            </h3>

            <p className='text-blue-900 mb-6'>
              Síguenos en Redes Sociales y conoce nuestra gran comunidad digital
            </p>

            <div className='flex justify-center space-x-6'>
              <a href='#' className='text-blue-900 hover:text-blue-700 transition-colors'>
                <svg className='w-8 h-8' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z' />
                </svg>
              </a>

              <a href='#' className='text-blue-900 hover:text-blue-700 transition-colors'>
                <svg className='w-8 h-8' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.218-1.79.465-2.428.254-.66.598-1.216 1.153-1.772.5-.508 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.669.01 2.986.058 4.04.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.669 0 2.986-.01 4.04-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.054.058-1.37.058-4.04 0-2.669-.01-2.986-.058-4.04-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z' />
                </svg>
              </a>

              <a href='#' className='text-blue-900 hover:text-blue-700 transition-colors'>
                <svg className='w-8 h-8' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M16.6 5.82s.51.5.51.5v3.03s-.5-.08-.82-.08c-.67 0-1.2.33-1.2 1.18v2.43H18l-.18 2.37h-2.73v7.75h-2.87v-7.75H10V10.88h2.22V9.43c0-2.37 1.73-3.61 4.38-3.61z' />
                </svg>
              </a>

              <a href='#' className='text-blue-900 hover:text-blue-700 transition-colors'>
                <svg className='w-8 h-8' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z' />
                </svg>
              </a>

              <a href='#' className='text-blue-900 hover:text-blue-700 transition-colors'>
                <svg className='w-8 h-8' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className='absolute bottom-4 right-1/2 transform translate-x-1/2 md:right-8 md:translate-x-0 mt-8 text-center md:text-right'>
          <a href='https://studyatgenuine.com' className='text-white text-lg md:text-xl font-semibold bg-blue-900 bg-opacity-70 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors'>
            studyatgenuine.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinTo;
