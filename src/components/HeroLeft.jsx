const HeroLeft = () => {
  return (
    <div
      className='w-full p-4 lg:pl-12 relative min-h-[45vh] lg:min-h-[80vh] overflow-hidden'
      id='inicio'
    >
      <div
        className='absolute inset-0 bg-cover bg-center origin-center'
        style={{
          backgroundImage: 'url("/bg-hero.jpeg")',
          height: '120%',
          top: '-10%',
        }}
      >
        <div className='absolute inset-0 bg-black/20 lg:bg-black/30 z-0'></div>
      </div>

      <div className='relative w-full sm:w-4/5 md:w-3/5 lg:w-2/5 max-w-[600px] mx-auto bg-amber-50 rounded-4xl mt-24 lg:mt-60'>
        <div className='h-1/2 w-full bg-gradient-to-b rounded-t-2xl from-white to-purple-400 p-4 flex items-end'>
          <p className='text-lg lg:text-2xl xl:text-3xl italic text-blue-950 text-center w-full'>
            Estás a punto de iniciar un viaje hacia el universo de la{' '}
            <span className='bg-blue-950 text-amber-50 px-1'>educación digital</span>
          </p>
        </div>

        <div className='h-1/2 w-full p-4 flex flex-col justify-center items-center text-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-blue-950'>G=NUNI=</h1>
          <p className='text-lg sm:text-xl lg:text-2xl text-blue-950 mt-1'>
            <span className='text-red-600'>digital</span>school
          </p>
        </div>
      </div>

      <p className='text-sm lg:text-base text-gray-300 absolute bottom-4 left-4 lg:left-8'>
        studyajgenuine.com
      </p>
    </div>
  );
};

export default HeroLeft;
