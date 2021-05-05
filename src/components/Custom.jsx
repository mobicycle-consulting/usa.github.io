import React from 'react';
import { Link } from "react-router-dom";

const Custom = () => {
    return (
        <div>
          <div className="max-width: 100%; height: auto;"> 
  <nav className="relative px-10 py-8 bg-gray-500">
    <div className="flex justify-between items-center">
      <a className="text-gray-600 text-2xl leading-none" href="https://mobicycle.tech"><img src="assets/color_logo_transparent.png" alt="MobiCycle" width={80} /></a>
      <div className="lg:hidden">
        <button className="block navbar-burger text-gray-50 hover:text-gray-200 focus:outline-none">
          <svg className="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex ml-auto mr-auto items-center w-auto space-x-14">
        <li><a className="text-sm text-gray-50 hover:text-gray-200" href="https://case-studies.mobicycle.group">About</a></li>
        <li><a className="text-sm text-gray-50 hover:text-gray-200" href="https://mobicycle.tech">ewaste Apps</a></li>
        <li><a className="text-sm text-gray-50 hover:text-gray-200" href="https://bins.mobi">MobiBins</a></li>
        <li><a className="text-sm text-gray-50 hover:text-gray-200" href="https://mobicycle.games">WEEEDU</a></li>
        <li><a className="text-sm text-gray-50 hover:text-gray-200" href="https://mobicycle.marketing">Marketing</a></li>
        <li><a className="text-sm text-gray-50 hover:text-gray-200" href="https://mobicycle.news">MobiNews</a></li>
        <li><a className="text-sm text-gray-50 hover:text-gray-200" href="https://mobicycle.support">Support</a></li>
      </ul>
      <ul className="hidden lg:flex items-center w-auto space-x-12">
      <Link to="/signup">
        <li>
        <a className="block px-6 py-3 text-sm text-gray-50 hover:text-gray-200 font-bold border border-gray-100 hover:border-gray-200 rounded" href="https://mobicycle.tech">Sign up</a>
        </li>
      </Link>
      </ul>
    </div>
    <div className="hidden navbar-menu relative z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <a className="mr-auto text-2xl font-semibold leading-none" href="https://mobicycle.tech"><img src="images/swirl-removebg-preview.png" alt="MobiCycle" width={20} /></a>
          <button className="navbar-close">
            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="https://about.mobicycle.group">About</a></li>
            <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="https://careers.mobicycle.group">Careers</a></li>
            <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="https://mobicycle.tech">Tech</a></li>
            <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="https://mobicycle.games">Games</a></li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6"><a className="block px-6 py-2 mb-3 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" href="https://mobicycle.tech">Sign In</a><a className="block px-6 py-2 mb-2 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" href="https://mobicycle.tech">Contact Us</a></div>
          <p className="mt-6 mb-4 text-sm text-center text-gray-400">
            <span>© 2021 All rights reserved.</span>
          </p>
        </div>
      </nav>
    </div>
  </nav>
  <div className="relative" style={{paddingBottom: '56.25%'}}>
    <iframe src="https://player.vimeo.com/video/340108769" frameBorder={0} className="absolute w-full h-full" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='intro to MobiCycle'/>
  </div>
  <section className="py-20">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-16">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
          <div className="flex">
            <span className="mr-6">
              <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="https://mobicycle.tech67798E" />
                <circle cx={24} cy={24} r="23.5" stroke="https://mobicycle.techC2C9D2" />
              </svg>
            </span>
            <div>
              <h3 className="mb-2 text-2xl font-bold font-heading">Consulting</h3>
              <p className="text-lg leading-loose text-gray-600">Does your city have tonnes of ewaste dismantled but yet to be recycled in the formal sector? Electronic waste are often sold as junk and dismembered to salvage parts before being discarded as ordinary waste.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
          <div className="flex">
            <span className="mr-6">
              <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="https://mobicycle.tech67798E" />
                <circle cx={24} cy={24} r="23.5" stroke="https://mobicycle.techC2C9D2" />
              </svg>
            </span>
            <div>
              <h3 className="mb-2 text-2xl font-bold font-heading">WEEEDU</h3>
              <p className="text-lg leading-loose text-gray-600">Improper handling or recycling of e-waste will cause serious environmental issues if dumped in landfills or dumping grounds. WEEEDU is a game to teach us how to reclaim our waste.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
          <div className="flex">
            <span className="mr-6">
              <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="https://mobicycle.tech67798E" />
                <circle cx={24} cy={24} r="23.5" stroke="https://mobicycle.techC2C9D2" />
              </svg>
            </span>
            <div>
              <h3 className="mb-2 text-2xl font-bold font-heading">MobiBins</h3>
              <p className="text-lg leading-loose text-gray-600">Proper disposal of ewaste begins with proper waste segregation. Get data to make informed decisions. eWaste Audits can help you identify weaknesses in your supply chain. </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
          <div className="flex">
            <span className="mr-6">
              <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="https://mobicycle.tech67798E" />
                <circle cx={24} cy={24} r="23.5" stroke="https://mobicycle.techC2C9D2" />
              </svg>
            </span>
            <div>
              <h3 className="mb-2 text-2xl font-bold font-heading">eWaste Code Finder</h3>
              <p className="text-lg leading-loose text-gray-600">Regular monitoring and data collection for waste management is only a start. Incentivise your supply chain by building capacity for properly trained and equipped waste-pickers. Get help drafting effective policies to incentivise a sustainable economy.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
          <div className="flex">
            <span className="mr-6">
              <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="https://mobicycle.tech67798E" />
                <circle cx={24} cy={24} r="23.5" stroke="https://mobicycle.techC2C9D2" />
              </svg>
            </span>
            <div>
              <h3 className="mb-2 text-2xl font-bold font-heading">eWaste Standards Tool</h3>
              <p className="text-lg leading-loose text-gray-600">Hazardous materials end up in open dumps and landfill facilities, even as the national policy and regulatory framework for the management of electronic waste or e-waste have long been in place.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
          <div className="flex">
            <span className="mr-6">
              <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="https://mobicycle.tech67798E" />
                <circle cx={24} cy={24} r="23.5" stroke="https://mobicycle.techC2C9D2" />
              </svg>
            </span>
            <div>
              <h3 className="mb-2 text-2xl font-bold font-heading">Marketing</h3>
              <p className="text-lg leading-loose text-gray-600">Waste streams are expanding at a skyrocketing pace as economies advance with rapid industrialization, better standards of living and technological innovations. Support ewaste policies to ensure that by pursuing sustainability in this sector we do not create new sustainability problems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20">
    <div className="container px-4 mx-auto">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <span className="text-sm text-gray-600 uppercase">Get started</span>
        <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">tech to save the planet</h2>
        <p className="mb-6 text-lg text-gray-500 leading-loose">Prices are per user. Minimum order quantities apply.</p>
        <a className="mr-6 text-lg text-gray-900 pb-2 border-b-4 border-gray-500" href="https://mobicycle.tech">Monthly</a>
        <Link to="/yearly"><a className="text-lg text-gray-700 hover:text-gray-500 pb-2" href="https://mobicycle.tech">Yearly</a></Link>
      </div>
      <div className="flex flex-wrap items-center -mx-4 -mb-6 lg:mb-0">
        <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
          <div className="p-12 bg-gray-50 rounded lg:text-center">
            <h3 className="text-2xl font-bold text-gray-500">Small & Medium Companies</h3>
            <br></br>
            <span className="inline-block mb-6 text-5xl font-bold font-heading">$34.99</span>
            <ul className="mb-6 text-left text-lg">
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>ewaste data APIs</p>
              </li>
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>ewaste regulatory standards</p>
              </li>
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>ewaste classification codes</p>
              </li>
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>and more!</p>
              </li>
            </ul>
            <a className="block py-2 w-full text-center text-gray-50 font-semibold bg-gray-500 hover:bg-gray-600 rounded" href="https://mobicycle.tech">Order now</a>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
          <div className="p-12 bg-gray-500 rounded lg:text-center">
            <h3 className="text-2xl font-bold text-gray-50">Public Sector</h3>
            <br></br>
            <span className="inline-block mb-6 text-5xl font-bold text-white">$65.99</span>
            <ul className="mb-6 text-left text-lg">
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-white">complete waste manifests quickly</p>
              </li>
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-white">ewaste chatbots</p>
              </li>
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-white">get and share data insights</p>
              </li>
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-white">and more!</p>
              </li>
            </ul>
            <a className="block py-2 w-full text-center text-gray-800 font-semibold bg-white hover:bg-gray-50 rounded" href="https://mobicycle.tech">Order now</a>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="p-12 bg-gray-50 rounded lg:text-center">
            <h3 className="text-2xl font-bold text-gray-500">Large Corporations</h3>
            <br></br>
            <span className="inline-block mb-6 text-5xl font-bold font-heading">$99.99</span>
            <ul className="mb-6 text-left text-lg">
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>track your ewaste</p>
              </li>
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>global ewaste standards</p>
              </li>
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>specialty bins for ewaste</p>
              </li>
              <li className="mb-2 flex items-center">
                <svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>and more!</p>
              </li>
            </ul>
            <a className="block py-2 w-full text-center text-gray-50 font-semibold bg-gray-500 hover:bg-gray-600 rounded" href="https://mobicycle.tech">Order now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="py-20">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
        <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
          <a className="text-gray-600 text-2xl leading-none" href="https://mobicycle.tech"><img className="h-8" src alt="" width="auto" /></a>
          <p className="mt-5 mb-6 max-w-xs text-gray-500 leading-loose">technology to save the planet</p>
          <div>
            <a className="inline-block h-6 mr-8" href="https://mobicycle.tech"><img className="mx-auto" src="mockup-assets/socials/facebook.svg" alt="facebook" /></a>
          <a className="inline-block h-6 mr-8" href="https://mobicycle.tech"><img className="mx-auto" src="mockup-assets/socials/github.svg" alt="github" /></a>
          <a className="inline-block h-6 mr-8" href="https://mobicycle.tech"><img className="mx-auto" src="mockup-assets/socials/instagram.svg" alt="instagram" /></a>
          <a className="inline-block h-6 mr-8" href="https://mobicycle.tech"><img className="mx-auto" src="mockup-assets/socials/linkedin.svg" alt="linkedin" /></a>
          <a className="inline-block h-6" href="https://mobicycle.tech"><img className="mx-auto" src="mockup-assets/socials/twitter.svg" alt="twitter" /></a></div>
        </div>
        <div className="w-full lg:w-2/3 px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <h3 className="mb-6 text-lg font-bold font-heading">Company</h3>
              <ul className="text-sm">
                <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">About Us</a></li></Link>
                <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Careers</a></li></Link>
                <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Press</a></li></Link>
                <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Blog</a></li></Link>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <h3 className="mb-6 text-lg font-bold font-heading">Services</h3>
              <ul className="text-sm">
              <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Login</a></li></Link>
              <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Register</a></li></Link>
              <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">FAQs</a></li></Link>
              <Link><li><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Contact</a></li></Link>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="mb-6 text-lg font-bold font-heading">Legal</h3>
              <ul className="text-sm">
              <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Terms</a></li></Link>
              <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">About Us</a></li></Link>
              <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Team</a></li></Link>
              <Link><li><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Privacy</a></li></Link>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4">
              <h3 className="mb-6 text-lg font-bold font-heading">Resources</h3>
              <ul className="text-sm">
              <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Blog</a></li></Link>
              <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Service</a></li></Link>
              <Link><li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Product</a></li></Link>
              <Link><li><a className="text-gray-500 hover:text-gray-600" href="https://mobicycle.tech">Pricing</a></li></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-50 pt-8">
        <p className="lg:text-center text-sm text-gray-400">All rights reserved © MobiCycle 2021.</p>
      </div>
    </div>
  </footer>
</div>  
        </div>
    )
}

export default Custom



