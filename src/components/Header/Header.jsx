import React from 'react'
import { useState } from 'react'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
  return (
    <main className=' flex z-40 border bg-white fixed p-4 px-4 md:[px-5rem] shadow w-full justify-between items-center'>
        <div className='logo'>
            <img src="https://res.cloudinary.com/drphumgcb/image/upload/v1722260853/cover-removebg-preview_nhgfi2.png" alt="logo" className='h-12'/>
        </div> 
        <nav className='heading hidden lg:flex space-x-8 items-center text-[14px] font-medium'>
            <a href="#">Destination</a>
            <a href="#">Packages</a>
            <a href="#">About Us</a>
            <a href="" id="/FAQSection">FAQ</a>
            <a href="#" className='bg-blue px-4 py-2 flex text-white hover:bg-white hover:text-blue border border-blue justify-center items-center rounded-[8px]'>Book A Travel</a>
        </nav>
        {/* Mobile Menu Buttons*/}
        <div className='logo flex items-center lg:hidden '>
            <button
                id="mobile-menu-button"
                className="focus:outline-none"
                onClick={toggleMobileMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
          </button>
        </div> 
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden mobile-menu-container ${isMobileMenuOpen ? "open" : ""}`}
        >
          <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
          <div className="mobile-menu-content">
            {/* Close icon */}
            <button className="close-button" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Menu items */}
            
                <a href="#" className='block'>Destination</a>
                <a href="#" className="block">Packages</a>
                <a href="#" className="block">About Us</a>
                <a href="#" className="block">FAQ</a>
                <a href="#" className="bg-blue hover:bg-white hover:text-blue border border-blue px-4 py-2 flex text-white justify-center items-center rounded-[8px]">Book A Travel</a>
            
            </div>
          </div>
      
    </main>
  )
}

export default Header