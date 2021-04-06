import React from 'react'

const Home = () => {
    return (
        <div>
<div className> 
  <div className="bg-white">
    <div className="bg-indigo-900">
      {/* Header*/}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b border-indigo-400 border-opacity-25 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-orange-400-to-pink-500-gradient.svg" alt />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button className="bg-indigo-900 rounded-md p-2 inline-flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" type="button">
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: menu*/}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
                {/* Item active: "text-white", Item inactive: "text-indigo-300"*/}
                <button className="group bg-indigo-900 rounded-md inline-flex items-center text-base font-medium text-indigo-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white" type="button">
                  <span>Solutions</span>
                  {/* Heroicon name: chevron-down Item active: "text-white", Item inactive: "text-indigo-300" */}
                  <svg className="ml-2 h-5 w-5 text-indigo-300 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* 'Solutions' flyout menu, show/hide based on flyout menu state. Entering: "transition ease-out duration-200" From: "opacity-0 translate-y-1" To: "opacity-100 translate-y-0" Leaving: "transition ease-in duration-150" From: "opacity-100 translate-y-0" To: "opacity-0 translate-y-1" */}
                <div className="hidden absolute z-10 -ml-4 mt-3 transform w-screen max-w-md px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative bg-white py-6 px-5 grid gap-6 sm:gap-8 sm:p-8">
                      <a className="-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50" href="#">
                        {/* Heroicon name: chart-bar*/}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Analytics</p>
                          <p className="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
                        </div>
                      </a>
                      <a className="-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50" href="#">
                        {/* Heroicon name: cursor-click*/}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Engagement</p>
                          <p className="mt-1 text-sm text-gray-500">Speak directly to your customers in a more meaningful way.</p>
                        </div>
                      </a>
                      <a className="-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50" href="#">
                        {/* Heroicon name: shield-check*/}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Security</p>
                          <p className="mt-1 text-sm text-gray-500">Your customers' data will be safe and secure.</p>
                        </div>
                      </a>
                      <a className="-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50" href="#">
                        {/* Heroicon name: view-grid*/}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Integrations</p>
                          <p className="mt-1 text-sm text-gray-500">Connect with third-party tools that you're already using.</p>
                        </div>
                      </a>
                      <a className="-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50" href="#">
                        {/* Heroicon name: refresh*/}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Automations</p>
                          <p className="mt-1 text-sm text-gray-500">Build strategic funnels that will drive your customers to convert</p>
                        </div>
                      </a>
                    </div>
                    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div className="flow-root">
                        <a className="-m-3 rounded-md p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100" href="#">
                          {/* Heroicon name: play*/}
                          <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="ml-3">Watch Demo</span>
                        </a>
                      </div>
                      <div className="flow-root">
                        <a className="-m-3 rounded-md p-3 flex items-center text-base font-medium text-gray-900 hover:bg-gray-100" href="#">
                          {/* Heroicon name: phone*/}
                          <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="ml-3">Contact Sales</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="text-base font-medium text-indigo-300 hover:text-white" href="#">Pricing</a><a className="text-base font-medium text-indigo-300 hover:text-white" href="#">Docs</a>
              <div className="relative">
                {/* Item active: "text-white", Item inactive: "text-indigo-300"*/}
                <button className="group bg-indigo-900 rounded-md inline-flex items-center text-base font-medium text-indigo-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white" type="button">
                  <span>More</span>
                  {/* Heroicon name: chevron-down Item active: "text-white", Item inactive: "text-indigo-300" */}
                  <svg className="ml-2 text-indigo-300 h-5 w-5 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* 'More' flyout menu, show/hide based on flyout menu state. Entering: "transition ease-out duration-200" From: "opacity-0 translate-y-1" To: "opacity-100 translate-y-0" Leaving: "transition ease-in duration-150" From: "opacity-100 translate-y-0" To: "opacity-0 translate-y-1" */}
                <div className="hidden absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative bg-white py-6 px-5 grid gap-6 sm:gap-8 sm:p-8">
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                        {/* Heroicon name: support*/}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Help Center</p>
                          <p className="mt-1 text-sm text-gray-500">Get all of your questions answered in our forums or contact support.</p>
                        </div>
                      </a>
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                        {/* Heroicon name: bookmark-alt*/}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Guides</p>
                          <p className="mt-1 text-sm text-gray-500">Learn how to maximize our platform to get the most out of it.</p>
                        </div>
                      </a>
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                        {/* Heroicon name: calendar*/}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Events</p>
                          <p className="mt-1 text-sm text-gray-500">See what meet-ups and other events we might be planning near you.</p>
                        </div>
                      </a>
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                        {/* Heroicon name: shield-check*/}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Security</p>
                          <p className="mt-1 text-sm text-gray-500">Understand how we take your privacy seriously.</p>
                        </div>
                      </a>
                    </div>
                    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                      <div>
                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                        <ul className="mt-4 space-y-4">
                          <li className="text-base truncate"><a className="font-medium text-gray-900 hover:text-gray-700" href="#">Boost your conversion rate</a></li>
                          <li className="text-base truncate"><a className="font-medium text-gray-900 hover:text-gray-700" href="#">How to use search engine optimization to drive traffic to your site</a></li>
                          <li className="text-base truncate"><a className="font-medium text-gray-900 hover:text-gray-700" href="#">Improve your customer experience</a></li>
                        </ul>
                      </div>
                      <div className="mt-5 text-sm">
                        <a className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                          View all posts
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0"><a className="whitespace-nowrap text-base font-medium text-indigo-300 hover:text-white" href="#">Sign in</a><a className="whitespace-nowrap bg-white border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex items-center justify-center text-base font-medium text-indigo-600 hover:bg-indigo-50" href="#">Sign up</a></div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on mobile menu state. Entering: "duration-200 ease-out" From: "opacity-0 scale-95" To: "opacity-100 scale-100" Leaving: "duration-100 ease-in" From: "opacity-100 scale-100" To: "opacity-0 scale-95" */}
        <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="flex items-center justify-between">
                <div><img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-orange-400-to-pink-500-gradient.svg" alt="Workflow" /></div>
                <div className="-mr-2">
                  <button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" type="button">
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: x*/}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="#">
                    {/* Heroicon name: chart-bar*/}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Analytics</span>
                  </a>
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="#">
                    {/* Heroicon name: cursor-click*/}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Engagement</span>
                  </a>
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="#">
                    {/* Heroicon name: shield-check*/}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Security</span>
                  </a>
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="#">
                    {/* Heroicon name: view-grid*/}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Integrations</span>
                  </a>
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="#">
                    {/* Heroicon name: refresh*/}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Automations</span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8"><a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">Pricing</a><a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">Docs</a><a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">Enterprise</a><a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">Blog</a><a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">Help Center</a><a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">Guides</a><a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">Security</a><a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">Events</a></div>
              <div>
                <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" href="#">Sign up</a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">Existing customer?<a className="text-indigo-600 hover:text-indigo-500" href="#">Sign in</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header section with select menu*/}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Pricing Plans</h2>
            <p className="mt-5 text-xl text-indigo-300">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
          </div>
          <div className="mt-10 w-full max-w-xs lg:mt-0">
            <label className="block text-base font-medium text-indigo-300" htmlFor="currency">Currency</label>
            <div className="mt-1.5 relative">
              <select className="block w-full bg-none bg-indigo-400 bg-opacity-25 border border-transparent text-white focus:ring-white focus:border-white rounded-md" id="currency" name="currency">
                <option className="bg-gray-900">Argentina (ARS)</option>
                <option className="bg-gray-900">Australia (AUD)</option>
                <option className="bg-gray-900" selected>United States (USD)</option>
                <option className="bg-gray-900">Canada (CAD)</option>
                <option className="bg-gray-900">France (EUR)</option>
                <option className="bg-gray-900">Japan (JPY)</option>
                <option className="bg-gray-900">Nigeria (NGN)</option>
                <option className="bg-gray-900">Switzerland (CHF)</option>
                <option className="bg-gray-900">United Kingdom (GBP)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                {/* Heroicon name: chevron-down*/}
                <svg className="h-4 w-4 text-indigo-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Comparison table*/}
    <div className="max-w-2xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {/* xs to lg*/}
      <div className="space-y-24 lg:hidden">
        <div>
          <div className="px-4">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Basic</h2>
            <p className="mt-4">
              <span className="text-4xl font-extrabold text-gray-900">$9</span>
              <span className="text-base font-medium text-gray-500">/mo</span>
            </p>
            <p className="mt-4 text-sm text-gray-500">Quis suspendisse ut fermentum neque vivamus non tellus.</p>
            <a className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Basic</a>
          </div>
          <table className="mt-8 w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">Features</caption>
            <thead>
              <tr><th className="sr-only" scope="col">Feature</th><th className="sr-only" scope="col">Included</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Molestie lobortis massa.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Urna purus felis.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tellus pulvinar sit dictum.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Convallis.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">Reporting</caption>
            <thead>
              <tr><th className="sr-only" scope="col">Feature</th><th className="sr-only" scope="col">Included</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Adipiscing.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Eget risus integer.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Gravida leo urna velit.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Elementum ut dapibus mi feugiat cras nisl.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">Support</caption>
            <thead>
              <tr><th className="sr-only" scope="col">Feature</th><th className="sr-only" scope="col">Included</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Sit dignissim.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Congue at nibh et.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Volutpat feugiat mattis.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tristique pellentesque ornare diam sapien.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border-t border-gray-200 px-4 pt-5"><a className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Basic</a></div>
        </div>
        <div>
          <div className="px-4">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Essential</h2>
            <p className="mt-4">
              <span className="text-4xl font-extrabold text-gray-900">$29</span>
              <span className="text-base font-medium text-gray-500">/mo</span>
            </p>
            <p className="mt-4 text-sm text-gray-500">Quis eleifend a tincidunt pellentesque. A tempor in sed.</p>
            <a className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Essential</a>
          </div>
          <table className="mt-8 w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">Features</caption>
            <thead>
              <tr><th className="sr-only" scope="col">Feature</th><th className="sr-only" scope="col">Included</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Molestie lobortis massa.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Urna purus felis.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tellus pulvinar sit dictum.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Convallis.</th>
                <td className="py-5 pr-4">
                  <span className="block text-sm text-gray-700 text-right">Up to 20 users</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">Reporting</caption>
            <thead>
              <tr><th className="sr-only" scope="col">Feature</th><th className="sr-only" scope="col">Included</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Adipiscing.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Eget risus integer.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Gravida leo urna velit.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Elementum ut dapibus mi feugiat cras nisl.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">Support</caption>
            <thead>
              <tr><th className="sr-only" scope="col">Feature</th><th className="sr-only" scope="col">Included</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Sit dignissim.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Congue at nibh et.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Volutpat feugiat mattis.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tristique pellentesque ornare diam sapien.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus*/}
                  <svg className="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border-t border-gray-200 px-4 pt-5"><a className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Essential</a></div>
        </div>
        <div>
          <div className="px-4">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Premium</h2>
            <p className="mt-4">
              <span className="text-4xl font-extrabold text-gray-900">$59</span>
              <span className="text-base font-medium text-gray-500">/mo</span>
            </p>
            <p className="mt-4 text-sm text-gray-500">Orci volutpat ut sed sed neque, dui eget. Quis tristique non.</p>
            <a className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Premium</a>
          </div>
          <table className="mt-8 w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">Features</caption>
            <thead>
              <tr><th className="sr-only" scope="col">Feature</th><th className="sr-only" scope="col">Included</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Molestie lobortis massa.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Urna purus felis.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tellus pulvinar sit dictum.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Convallis.</th>
                <td className="py-5 pr-4">
                  <span className="block text-sm text-gray-700 text-right">Up to 50 users</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">Reporting</caption>
            <thead>
              <tr><th className="sr-only" scope="col">Feature</th><th className="sr-only" scope="col">Included</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Adipiscing.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Eget risus integer.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Gravida leo urna velit.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Elementum ut dapibus mi feugiat cras nisl.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">Support</caption>
            <thead>
              <tr><th className="sr-only" scope="col">Feature</th><th className="sr-only" scope="col">Included</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Sit dignissim.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Congue at nibh et.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Volutpat feugiat mattis.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tristique pellentesque ornare diam sapien.</th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check*/}
                  <svg className="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border-t border-gray-200 px-4 pt-5"><a className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Premium</a></div>
        </div>
      </div>
      {/* lg+*/}
      <div className="hidden lg:block">
        <table className="w-full h-px table-fixed">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th className="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left" scope="col">
                <span className="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              <th className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left" scope="col">Basic</th><th className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left" scope="col">Essential</th><th className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left" scope="col">Premium</th>
            </tr>
          </thead>
          <tbody className="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th className="py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left" scope="row">Pricing</th>
              <td className="h-full py-8 px-6 align-top">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p>
                      <span className="text-4xl font-extrabold text-gray-900">$9</span>
                      <span className="text-base font-medium text-gray-500">/mo</span>
                    </p>
                    <p className="mt-4 text-sm text-gray-500">Quis suspendisse ut fermentum neque vivamus non tellus.</p>
                  </div>
                  <a className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Basic</a>
                </div>
              </td>
              <td className="h-full py-8 px-6 align-top">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p>
                      <span className="text-4xl font-extrabold text-gray-900">$29</span>
                      <span className="text-base font-medium text-gray-500">/mo</span>
                    </p>
                    <p className="mt-4 text-sm text-gray-500">Quis eleifend a tincidunt pellentesque. A tempor in sed.</p>
                  </div>
                  <a className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Essential</a>
                </div>
              </td>
              <td className="h-full py-8 px-6 align-top">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p>
                      <span className="text-4xl font-extrabold text-gray-900">$59</span>
                      <span className="text-base font-medium text-gray-500">/mo</span>
                    </p>
                    <p className="mt-4 text-sm text-gray-500">Orci volutpat ut sed sed neque, dui eget. Quis tristique non.</p>
                  </div>
                  <a className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Premium</a>
                </div>
              </td>
            </tr>
            <tr><th className="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left" colSpan={4} scope="colgroup">Features</th></tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Molestie lobortis massa.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Urna purus felis.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Tellus pulvinar sit dictum.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Convallis.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Basic</span>
              </td>
              <td className="py-5 px-6">
                <span className="block text-sm text-gray-700">Up to 20 users</span>
              </td>
              <td className="py-5 px-6">
                <span className="block text-sm text-gray-700">Up to 50 users</span>
              </td>
            </tr>
            <tr><th className="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left" colSpan={4} scope="colgroup">Reporting</th></tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Adipiscing.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Eget risus integer.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Gravida leo urna velit.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Elementum ut dapibus mi feugiat cras nisl.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr><th className="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left" colSpan={4} scope="colgroup">Support</th></tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Sit dignissim.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Congue at nibh et.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Volutpat feugiat mattis.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr>
              <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Tristique pellentesque ornare diam sapien.</th>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Basic</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: minus*/}
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Not included in Essential</span>
              </td>
              <td className="py-5 px-6">
                {/* Heroicon name: check*/}
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Included in Premium</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-200">
              <th className="sr-only" scope="row">Choose your plan</th>
              <td className="pt-5 px-6"><a className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Basic</a></td>
              <td className="pt-5 px-6"><a className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Essential</a></td>
              <td className="pt-5 px-6"><a className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600" href="#">Buy Premium</a></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    {/* Logo cloud*/}
    <div className="max-w-7xl mx-auto border-t border-gray-200 py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"><img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" /></div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"><img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" /></div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"><img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" /></div>
        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"><img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" /></div>
        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1"><img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" /></div>
      </div>
    </div>
    <div className="bg-gray-50">
      {/* FAQ*/}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            <div className="space-y-2"><dt className="text-lg leading-6 font-medium text-gray-900">What's the best thing about Switzerland?</dt><dd className="text-base text-gray-500">I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd></div>
            <div className="space-y-2"><dt className="text-lg leading-6 font-medium text-gray-900">How do you make holy water?</dt><dd className="text-base text-gray-500">You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd></div>
            <div className="space-y-2"><dt className="text-lg leading-6 font-medium text-gray-900">Why do you never see elephants hiding in trees?</dt><dd className="text-base text-gray-500">Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd></div>
            <div className="space-y-2"><dt className="text-lg leading-6 font-medium text-gray-900">What do you call someone with no body and no nose?</dt><dd className="text-base text-gray-500">Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd></div>
            <div className="space-y-2"><dt className="text-lg leading-6 font-medium text-gray-900">Why can't you hear a pterodactyl go to the bathroom?</dt><dd className="text-base text-gray-500">Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd></div>
            <div className="space-y-2"><dt className="text-lg leading-6 font-medium text-gray-900">Why did the invisible man turn down the job offer?</dt><dd className="text-base text-gray-500">He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd></div>
          </dl>
        </div>
      </div>
    </div>
    {/* Feature section with brand panel*/}
    <div className="relative">
      <div className="absolute inset-0 flex flex-col" aria-hidden="true">
        <div className="flex-1 bg-gray-50" />
        <div className="flex-1" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-red-900">Start your free trial today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-orange-50">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
              <a className="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500" href="#">Sign up for free</a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1"><img className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg" alt="App screenshot" /></div>
        </div>
      </div>
    </div>
    {/* Footer*/}
    <footer className="mt-12 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="sr-only">Footer</h2>
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h4>
              <ul className="mt-4 space-y-4">
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Marketing</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Analytics</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Commerce</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Insights</a></li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h4>
              <ul className="mt-4 space-y-4">
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Pricing</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Documentation</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Guides</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">API Status</a></li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h4>
              <ul className="mt-4 space-y-4">
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">About</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Blog</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Jobs</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Press</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Partners</a></li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h4>
              <ul className="mt-4 space-y-4">
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Claim</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Privacy</a></li>
                <li><a className="text-base text-gray-500 hover:text-gray-900" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 xl:mt-0">
          <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Subscribe to our newsletter</h4>
          <p className="mt-4 text-gray-500 text-base">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form className="mt-4 sm:flex sm:max-w-md">
            <label className="sr-only" htmlFor="emailAddress">Email address</label>
            <input className="min-w-0 w-full bg-white shadow-sm py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" id="emailAddress" type="email" name="emailAddress" autoComplete="email" required placeholder="Enter your email" />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="w-full bg-orange-100 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-red-600 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
        <div className="flex space-x-6 md:order-2">
          <a className="text-gray-400 hover:text-gray-500" href="#">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a className="text-gray-400 hover:text-gray-500" href="#">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a className="text-gray-400 hover:text-gray-500" href="#">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a className="text-gray-400 hover:text-gray-500" href="#">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a className="text-gray-400 hover:text-gray-500" href="#">
            <span className="sr-only">Dribbble</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">© 2020 Workflow, Inc. All rights reserved.</p>
      </div>
    </footer>
  </div>
</div>

        </div>
    )
}

export default Home