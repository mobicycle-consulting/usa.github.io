import React from 'react';
import '../index.css';

const Home = () => {
    return (<div>
  <div classname="max-width: 100%; height: auto;"> 
    <nav classname="relative px-10 py-8 bg-gray-500">
      <div classname="flex justify-between items-center">
        <a classname="text-gray-600 text-2xl leading-none"><img src="./assets/images/swirl-removebg-preview.png" alt="MobiCycle" width="{10}" /></a>
        <div classname="lg:hidden">
          <button classname="block navbar-burger text-gray-50 hover:text-gray-200 focus:outline-none">
            <svg classname="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul classname="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex ml-auto mr-auto items-center w-auto space-x-12">
          <li><a classname="text-sm text-gray-50 hover:text-gray-200" href="https://about.mobicycle.group">Why ewaste?</a></li>
          <li><a classname="text-sm text-gray-50 hover:text-gray-200" href="https://mobicycle.group">Who we are</a></li>
          <li><a classname="text-sm text-gray-50 hover:text-gray-200" href="https://mobicycle.group">What we do</a></li>
          <li><a classname="text-sm text-gray-50 hover:text-gray-200" href="https://mobicycle.group">Where we work</a></li>
        </ul>
        <ul classname="hidden lg:flex items-center w-auto space-x-12">
          <li><a classname="text-sm text-gray-50 hover:text-gray-200" href="#">Sign in</a></li>
          <li><a classname="block px-6 py-3 text-sm text-gray-50 hover:text-gray-200 font-bold border border-gray-100 hover:border-gray-200 rounded" href="#">Sign up</a></li>
        </ul>
      </div>
      <div classname="hidden navbar-menu relative z-50">
        <div classname="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25">
          <nav classname="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div classname="flex items-center mb-8">
              <a classname="mr-auto text-2xl font-semibold leading-none" href="#"><img src="images/swirl-removebg-preview.png" alt="MobiCycle" width="{20}" /></a>
              <button classname="navbar-close">
                <svg classname="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li classname="mb-1"><a classname="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="https://mobicycle.group">About</a></li>
                <li classname="mb-1"><a classname="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="https://mobicycle.group">Company</a></li>
                <li classname="mb-1"><a classname="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="https://mobicycle.group">Services</a></li>
                <li classname="mb-1"><a classname="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="https://mobicycle.group">Case Studies</a></li>
              </ul>
            </div>
            <div classname="mt-auto">
              <div classname="pt-6"><a classname="block px-6 py-2 mb-3 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" href="#">Sign In</a><a classname="block px-6 py-2 mb-2 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" href="#">Contact Us</a></div>
              <p classname="mt-6 mb-4 text-sm text-center text-gray-400">
                <span>© 2021 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      </div></nav>
    <div classname="relative" style={{paddingbottom: ''}}/>
      <iframe src="https://player.vimeo.com/video/340108769" frameBorder="{0}" classname="absolute w-full h-full" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        &lt;/div&gt;
        &lt;section className="py-20"&gt;
        &lt;div className="container px-4 mx-auto"&gt;
        &lt;div className="flex flex-wrap -mx-4 -mb-16"&gt;
        &lt;div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16"&gt;
        &lt;div className="flex"&gt;
        &lt;span className="mr-6"&gt;
        &lt;svg width={'{'}48{'}'} height={'{'}48{'}'} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="#67798E" /&gt;
        &lt;circle cx={'{'}24{'}'} cy={'{'}24{'}'} r="23.5" stroke="#C2C9D2" /&gt;
        &lt;/svg&gt;
        &lt;/span&gt;
        &lt;div&gt;
        &lt;h3 className="mb-2 text-2xl font-bold font-heading"&gt;Security in saving&lt;/h3&gt;
        &lt;p className="text-lg leading-loose text-gray-300"&gt;Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.&lt;/p&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16"&gt;
        &lt;div className="flex"&gt;
        &lt;span className="mr-6"&gt;
        &lt;svg width={'{'}48{'}'} height={'{'}48{'}'} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="#67798E" /&gt;
        &lt;circle cx={'{'}24{'}'} cy={'{'}24{'}'} r="23.5" stroke="#C2C9D2" /&gt;
        &lt;/svg&gt;
        &lt;/span&gt;
        &lt;div&gt;
        &lt;h3 className="mb-2 text-2xl font-bold font-heading"&gt;No errors&lt;/h3&gt;
        &lt;p className="text-lg leading-loose text-gray-300"&gt;Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.&lt;/p&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16"&gt;
        &lt;div className="flex"&gt;
        &lt;span className="mr-6"&gt;
        &lt;svg width={'{'}48{'}'} height={'{'}48{'}'} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="#67798E" /&gt;
        &lt;circle cx={'{'}24{'}'} cy={'{'}24{'}'} r="23.5" stroke="#C2C9D2" /&gt;
        &lt;/svg&gt;
        &lt;/span&gt;
        &lt;div&gt;
        &lt;h3 className="mb-2 text-2xl font-bold font-heading"&gt;Change of access&lt;/h3&gt;
        &lt;p className="text-lg leading-loose text-gray-300"&gt;Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.&lt;/p&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16"&gt;
        &lt;div className="flex"&gt;
        &lt;span className="mr-6"&gt;
        &lt;svg width={'{'}48{'}'} height={'{'}48{'}'} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="#67798E" /&gt;
        &lt;circle cx={'{'}24{'}'} cy={'{'}24{'}'} r="23.5" stroke="#C2C9D2" /&gt;
        &lt;/svg&gt;
        &lt;/span&gt;
        &lt;div&gt;
        &lt;h3 className="mb-2 text-2xl font-bold font-heading"&gt;Weekly email updates&lt;/h3&gt;
        &lt;p className="text-lg leading-loose text-gray-300"&gt;Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.&lt;/p&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16"&gt;
        &lt;div className="flex"&gt;
        &lt;span className="mr-6"&gt;
        &lt;svg width={'{'}48{'}'} height={'{'}48{'}'} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="#67798E" /&gt;
        &lt;circle cx={'{'}24{'}'} cy={'{'}24{'}'} r="23.5" stroke="#C2C9D2" /&gt;
        &lt;/svg&gt;
        &lt;/span&gt;
        &lt;div&gt;
        &lt;h3 className="mb-2 text-2xl font-bold font-heading"&gt;Frequent authentication&lt;/h3&gt;
        &lt;p className="text-lg leading-loose text-gray-300"&gt;Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.&lt;/p&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16"&gt;
        &lt;div className="flex"&gt;
        &lt;span className="mr-6"&gt;
        &lt;svg width={'{'}48{'}'} height={'{'}48{'}'} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="#67798E" /&gt;
        &lt;circle cx={'{'}24{'}'} cy={'{'}24{'}'} r="23.5" stroke="#C2C9D2" /&gt;
        &lt;/svg&gt;
        &lt;/span&gt;
        &lt;div&gt;
        &lt;h3 className="mb-2 text-2xl font-bold font-heading"&gt;List of regular users&lt;/h3&gt;
        &lt;p className="text-lg leading-loose text-gray-300"&gt;Take care to develop resources continually and integrity them with previous projects. More interesting writings for your customers.&lt;/p&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/section&gt;
        &lt;section className="py-20"&gt;
        &lt;div className="container px-4 mx-auto"&gt;
        &lt;div className="max-w-2xl mx-auto mb-12 text-center"&gt;
        &lt;span className="text-sm text-gray-200 uppercase"&gt;Lorem Ipsum&lt;/span&gt;
        &lt;h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading"&gt;Lorem ipsum dolor sit amet consectutar domor at elis&lt;/h2&gt;
        &lt;p className="mb-6 text-lg text-gray-500 leading-loose"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.&lt;/p&gt;
        &lt;a className="mr-6 text-lg text-gray-900 pb-2 border-b-4 border-gray-500" href="#"&gt;Monthly&lt;/a&gt;&lt;a className="text-lg text-gray-700 hover:text-gray-500 pb-2" href="#"&gt;Yearly&lt;/a&gt;
        &lt;/div&gt;
        &lt;div className="flex flex-wrap items-center -mx-4 -mb-6 lg:mb-0"&gt;
        &lt;div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0"&gt;
        &lt;div className="p-12 bg-gray-50 rounded lg:text-center"&gt;
        &lt;h3 className="text-2xl font-bold text-gray-500"&gt;Starter&lt;/h3&gt;
        &lt;span className="inline-block mb-6 text-6xl font-bold font-heading"&gt;$34.99&lt;/span&gt;
        &lt;ul className="mb-6 text-left text-lg"&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p&gt;Complete documentation&lt;/p&gt;
        &lt;/li&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p&gt;Working materials in Figma&lt;/p&gt;
        &lt;/li&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p&gt;100GB cloud storage&lt;/p&gt;
        &lt;/li&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p&gt;500 team members&lt;/p&gt;
        &lt;/li&gt;
        &lt;/ul&gt;
        &lt;a className="block py-2 w-full text-center text-gray-50 font-semibold bg-gray-500 hover:bg-gray-600 rounded" href="#"&gt;Action&lt;/a&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0"&gt;
        &lt;div className="p-12 bg-gray-500 rounded lg:text-center"&gt;
        &lt;h3 className="text-2xl font-bold text-gray-50"&gt;Pro&lt;/h3&gt;
        &lt;span className="inline-block mb-6 text-6xl font-bold text-white"&gt;$65.99&lt;/span&gt;
        &lt;ul className="mb-6 text-left text-lg"&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p className="text-lg text-white"&gt;Complete documentation&lt;/p&gt;
        &lt;/li&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p className="text-lg text-white"&gt;Working materials in Figma&lt;/p&gt;
        &lt;/li&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p className="text-lg text-white"&gt;100GB cloud storage&lt;/p&gt;
        &lt;/li&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p className="text-lg text-white"&gt;500 team members&lt;/p&gt;
        &lt;/li&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p className="text-lg text-white"&gt;Premium support&lt;/p&gt;
        &lt;/li&gt;
        &lt;/ul&gt;
        &lt;a className="block py-2 w-full text-center text-gray-800 font-semibold bg-white hover:bg-gray-50 rounded" href="#"&gt;Action&lt;/a&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="w-full lg:w-1/3 px-4"&gt;
        &lt;div className="p-12 bg-gray-50 rounded lg:text-center"&gt;
        &lt;h3 className="text-2xl font-bold text-gray-500"&gt;Premium&lt;/h3&gt;
        &lt;span className="inline-block mb-6 text-6xl font-bold font-heading"&gt;$99.99&lt;/span&gt;
        &lt;ul className="mb-6 text-left text-lg"&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p&gt;Complete documentation&lt;/p&gt;
        &lt;/li&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p&gt;Working materials in Figma&lt;/p&gt;
        &lt;/li&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p&gt;100GB cloud storage&lt;/p&gt;
        &lt;/li&gt;
        &lt;li className="mb-2 flex items-center"&gt;
        &lt;svg className="mr-2 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={'{'}2{'}'} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /&gt;
        &lt;/svg&gt;
        &lt;p&gt;500 team members&lt;/p&gt;
        &lt;/li&gt;
        &lt;/ul&gt;
        &lt;a className="block py-2 w-full text-center text-gray-50 font-semibold bg-gray-500 hover:bg-gray-600 rounded" href="#"&gt;Action&lt;/a&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/section&gt;
        &lt;footer className="py-20"&gt;
        &lt;div className="container px-4 mx-auto"&gt;
        &lt;div className="flex flex-wrap -mx-4 mb-8 lg:mb-16"&gt;
        &lt;div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0"&gt;
        &lt;a className="text-gray-600 text-2xl leading-none" href="#"&gt;&lt;img className="h-8" src="./assets/images/swirl-removebg-preview.png" alt width="auto" /&gt;&lt;/a&gt;
        &lt;p className="mt-5 mb-6 max-w-xs text-gray-500 leading-loose"&gt;Technology to save the planet&lt;/p&gt;
        &lt;div&gt;&lt;a className="inline-block h-6 mr-8" href="#"&gt;&lt;img className="mx-auto" src="mockup-assets/socials/facebook.svg" /&gt;&lt;/a&gt;&lt;a className="inline-block h-6 mr-8" href="#"&gt;&lt;img className="mx-auto" src="mockup-assets/socials/github.svg" /&gt;&lt;/a&gt;&lt;a className="inline-block h-6 mr-8" href="#"&gt;&lt;img className="mx-auto" src="mockup-assets/socials/instagram.svg" /&gt;&lt;/a&gt;&lt;a className="inline-block h-6 mr-8" href="#"&gt;&lt;img className="mx-auto" src="mockup-assets/socials/linkedin.svg" /&gt;&lt;/a&gt;&lt;a className="inline-block h-6" href="#"&gt;&lt;img className="mx-auto" src="mockup-assets/socials/twitter.svg" /&gt;&lt;/a&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="w-full lg:w-2/3 px-4"&gt;
        &lt;div className="flex flex-wrap justify-between"&gt;
        &lt;div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0"&gt;
        &lt;h3 className="mb-6 text-lg font-bold font-heading"&gt;MobiCycle&lt;/h3&gt;
        &lt;ul className="text-sm"&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;About Us&lt;/a&gt;&lt;/li&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Careers&lt;/a&gt;&lt;/li&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Press&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Blog&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0"&gt;
        &lt;h3 className="mb-6 text-lg font-bold font-heading"&gt;Register&lt;/h3&gt;
        &lt;ul className="text-sm"&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Login&lt;/a&gt;&lt;/li&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Register&lt;/a&gt;&lt;/li&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;FAQs&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0"&gt;
        &lt;h3 className="mb-6 text-lg font-bold font-heading"&gt;Legal&lt;/h3&gt;
        &lt;ul className="text-sm"&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Terms&lt;/a&gt;&lt;/li&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;About Us&lt;/a&gt;&lt;/li&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Team&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Privacy&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div className="w-1/2 lg:w-1/4"&gt;
        &lt;h3 className="mb-6 text-lg font-bold font-heading"&gt;Resources&lt;/h3&gt;
        &lt;ul className="text-sm"&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Blog&lt;/a&gt;&lt;/li&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Service&lt;/a&gt;&lt;/li&gt;
        &lt;li className="mb-4"&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Product&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a className="text-gray-500 hover:text-gray-600" href="#"&gt;Pricing&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="border-t border-gray-50 pt-8"&gt;
        &lt;p className="lg:text-center text-sm text-gray-400"&gt;All rights reserved © MobiCycle 2021&lt;/p&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;/footer&gt;
        &lt;/div&gt;
      </iframe></div></div>
    )
}

export default Home
