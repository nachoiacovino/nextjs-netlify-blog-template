const Header = () => {
  return (
    <header>
      <div className='relative bg-trueGray-700'>
        <div className='flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#'>
              <span className='sr-only'>Workflow</span>
              <img
                className='w-auto h-8 sm:h-10'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt=''
              />
            </a>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
            >
              <span className='sr-only'>Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <nav className='hidden space-x-10 md:flex'>
            <a
              href='/maps'
              className='text-base font-medium text-gray-100 hover:text-gray-400'
            >
              Projects
            </a>
            <a
              href='#'
              className='text-base font-medium text-gray-100 hover:text-gray-400'
            >
              Contact
            </a>
          </nav>
        </div>

        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}
        <div className='absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden'>
          <div className='bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='w-auto h-8'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='-mr-2'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  >
                    <span className='sr-only'>Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className='w-6 h-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid grid-cols-1 gap-7'>
                  <a
                    href='#'
                    className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                  >
                    <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-600 rounded-md'>
                      {/* Heroicon name: outline/inbox */}
                      <svg
                        className='w-6 h-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                        />
                      </svg>
                    </div>
                    <div className='ml-4 text-base font-medium text-gray-900'>
                      Inbox
                    </div>
                  </a>

                  <a
                    href='#'
                    className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                  >
                    <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-600 rounded-md'>
                      {/* Heroicon name: outline/annotation */}
                      <svg
                        className='w-6 h-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
                        />
                      </svg>
                    </div>
                    <div className='ml-4 text-base font-medium text-gray-900'>
                      Messaging
                    </div>
                  </a>

                  <a
                    href='#'
                    className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                  >
                    <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-600 rounded-md'>
                      {/* Heroicon name: outline/chat-alt-2 */}
                      <svg
                        className='w-6 h-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
                        />
                      </svg>
                    </div>
                    <div className='ml-4 text-base font-medium text-gray-900'>
                      Live Chat
                    </div>
                  </a>

                  <a
                    href='#'
                    className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                  >
                    <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-600 rounded-md'>
                      {/* Heroicon name: outline/question-mark-circle */}
                      <svg
                        className='w-6 h-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <div className='ml-4 text-base font-medium text-gray-900'>
                      Knowledge Base
                    </div>
                  </a>
                </nav>
              </div>
            </div>
            <div className='px-5 py-6'>
              <div className='grid grid-cols-2 gap-4'>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Pricing
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Partners
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Company
                </a>
              </div>
              <div className='mt-6'>
                <a
                  href='#'
                  className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700'
                >
                  Sign up
                </a>
                <p className='mt-6 text-base font-medium text-center text-gray-500'>
                  Existing customer?
                  <a href='#' className='text-gray-900'>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
