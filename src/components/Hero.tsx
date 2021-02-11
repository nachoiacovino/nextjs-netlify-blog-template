const Hero = () => {
  return (
    <div className='min-h-screen '>
      <main>
        <div>
          {/* Hero card */}
          <div className='relative'>
            <div className='absolute inset-x-0 bottom-0 h-1/2'></div>
            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
                <div className='absolute inset-0'>
                  <img
                    className='object-cover w-full h-full'
                    src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
                    alt='People working on laptops'
                  />
                  <div
                    className='absolute inset-0 bg-indigo-700'
                    style={{ mixBlendMode: 'multiply' }}
                  ></div>
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                  <h1 className='text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-8xl'>
                    <span className='block text-white'>We are</span>
                    <span className='block text-indigo-200'>Team Steel</span>
                  </h1>
                  <p className='max-w-lg mx-auto mt-6 text-xl text-center text-indigo-200 sm:max-w-3xl'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className='max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center'>
                    <div className='space-y-4 sm:space-y-0 sm:mx-auto'>
                      <a
                        href='/maps'
                        className='flex items-center justify-center px-4 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 sm:px-8'
                      >
                        Projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className=''>
            <div className='px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <p className='text-sm font-semibold tracking-wide text-center text-gray-500 uppercase'>
                Trusted by over 5 very average small businesses
              </p>
              <div className='grid grid-cols-2 gap-8 mt-6 md:grid-cols-6 lg:grid-cols-5'>
                <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-1'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                    alt='Tuple'
                  />
                </div>
                <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-1'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
                    alt='Mirage'
                  />
                </div>
                <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-1'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                    alt='StaticKit'
                  />
                </div>
                <div className='flex justify-center col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
                    alt='Transistor'
                  />
                </div>
                <div className='flex justify-center col-span-2 md:col-span-2 md:col-start-4 lg:col-span-1'>
                  <img
                    className='h-12'
                    src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                    alt='Workcation'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
};

export default Hero;
