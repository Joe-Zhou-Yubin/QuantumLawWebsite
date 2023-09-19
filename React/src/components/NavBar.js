import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import QLAWLogo from '../images/QLAW.png';

function NavBar() {
  const logoSize = {
    width: '260px', // Set the width of the logo
    height: 'auto', // Allow the height to adjust proportionally
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Style for the menu items (added padding)
  const menuItemStyle = {
    padding: '5px 0', // Adjust the padding as needed
  };

  

  return (
    <nav className="bg-white text-[#898989] mt-4 mb-4 relative">
      <div className="container mx-auto flex justify-center items-center"> {/* Center everything */}
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold mr-4">
          <img
            src={QLAWLogo}
            alt="QLAW"
            style={logoSize}
            className="lg:w-1/4 w-1/2" // Control logo size based on screen width
          />
        </Link>

        {/* Hamburger Menu (Mobile and Tablet) */}
        <div className="lg:hidden">
          <button
            className="text-xl"
            onClick={toggleMenu}
          >
            &#9776; {/* Hamburger menu icon */}
          </button>
        </div>

        {/* Navigation Links (Mobile and Tablet) */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 z-10 "
            style={{ top: '6rem' }}
          >
            <ul className="flex flex-col space-y-2 p-4"> 
              <li style={menuItemStyle} className=" hover:bg-gray-100">
                <Link to="/what-we-do" onClick={toggleMenu}>
                  WHAT WE DO
                </Link>
              </li>
              <li style={menuItemStyle} className=" hover:bg-gray-100">
                <Link to="/how-we-operate" onClick={toggleMenu}>
                  HOW WE OPERATE
                </Link>
              </li>
              <li style={menuItemStyle} className=" hover:bg-gray-100">
                <Link to="/insights" onClick={toggleMenu}>
                  INSIGHTS
                </Link>
              </li>
              <li style={menuItemStyle} className=" hover:bg-gray-100">
                <Link to="/our-story" onClick={toggleMenu} >
                  OUR STORY
                </Link>
              </li>
              <li style={menuItemStyle} className=" hover:bg-gray-100">
                <Link to="/friends-of-the-firm" onClick={toggleMenu}>
                  FRIENDS OF THE FIRM
                </Link>
              </li>
              <li style={menuItemStyle} className=" hover:bg-gray-100">
                <Link to="/contact-us" onClick={toggleMenu}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-6">
          <li><Link to="/what-we-do">WHAT WE DO</Link></li>
          <li><Link to="/how-we-operate">HOW WE OPERATE</Link></li>
          <li><Link to="/insights">INSIGHTS</Link></li>
          <li><Link to="/our-story">OUR STORY</Link></li>
          <li><Link to="/friends-of-the-firm">FRIENDS OF THE FIRM</Link></li>
          <li><Link to="/contact-us">CONTACT US</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
