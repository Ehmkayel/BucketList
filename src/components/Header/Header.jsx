import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMobileMenuOpen(false);
      
    };

    return (
        <main className='flex z-40 border bg-white fixed p-4 px-4 md:px-20 shadow w-full justify-between items-center'>
            <div className='logo cursor-pointer'>
                <img
                    src="https://res.cloudinary.com/drphumgcb/image/upload/v1722427128/cover-removebg-preview_1_eczrt3.png"
                    alt="logo"
                    className='h-12'
                />
            </div>
            <nav className='heading hidden lg:flex space-x-8 items-center text-[14px] font-medium'>
                <a
                    href="/"
                    className={`hover:text-blue ${activeLink === '/' ? 'text-blue' : ''}`}
                    onClick={() => handleLinkClick('/')}
                >
                    Home
                </a>
                <a
                    href="#destination"
                    className={`hover:text-blue ${activeLink === '#destination' ? 'text-blue' : ''}`}
                    onClick={() => handleLinkClick('#destination')}
                >
                    Destination
                </a>
                <a
                    href="/package"
                    className={`hover:text-blue ${activeLink === '/package' ? 'text-blue' : ''}`}
                    onClick={() => handleLinkClick('/package')}
                >
                    Packages
                </a>
                <a
                    href="#"
                    className={`hover:text-blue ${activeLink === '#' ? 'text-blue' : ''}`}
                    onClick={() => handleLinkClick('#')}
                >
                    Favourite
                </a>
                <a
                    href="#faq"
                    className={`hover:text-blue ${activeLink === '#faq' ? 'text-blue' : ''}`}
                    onClick={() => handleLinkClick('#faq')}
                >
                    FAQ
                </a>
                <Link to="/booking"
                    className='bg-blue px-4 py-2 flex text-white hover:bg-white hover:text-blue border border-blue justify-center items-center rounded-[8px]'
                >
                    Book A Travel
                </Link>
            </nav>
            {/* Mobile Menu Buttons */}
            <div className='logo flex items-center lg:hidden'>
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
                className={`lg:hidden mobile-menu-container ${isMobileMenuOpen ? 'open' : ''}`}
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
                    <a
                        href="/"
                        className={`hover:text-blue ${activeLink === '/' ? 'text-blue' : ''} block`}
                        onClick={() => handleLinkClick('/')}
                    >
                        Home
                    </a>
                    <a
                        href="#destination"
                        className={`hover:text-blue ${activeLink === '#destination' ? 'text-blue' : ''} block`}
                        onClick={() => handleLinkClick('#destination')}
                    >
                        Destination
                    </a>
                    <a
                        href="/package"
                        className={`hover:text-blue ${activeLink === '/package' ? 'text-blue' : ''} block`}
                        onClick={() => handleLinkClick('/package')}
                    >
                        Packages
                    </a>
                    <a
                        href="#"
                        className={`hover:text-blue ${activeLink === '#' ? 'text-blue' : ''} block`}
                        onClick={() => handleLinkClick('#')}
                    >
                        Favourite
                    </a>
                    <a
                        href="#faq"
                        className={`hover:text-blue ${activeLink === '#faq' ? 'text-blue' : ''} block`}
                        onClick={() => handleLinkClick('#faq')}
                    >
                        FAQ
                    </a>
                    <Link to="/booking"
                        className='bg-blue hover:bg-white hover:text-blue border border-blue px-4 py-2 flex text-white justify-center items-center rounded-[8px]'
                    >
                        Book A Travel
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Header;
