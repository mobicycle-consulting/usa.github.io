import React from 'react'

const Logo = () => {
    return (
        <div>
      <div className="lg:hidden">
        <button className="block navbar-burger text-gray-50 hover:text-gray-200 focus:outline-none">
          <svg className="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
        </div>
    )
}

export default Logo