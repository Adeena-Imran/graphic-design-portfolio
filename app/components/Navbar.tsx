'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-5 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-black text-2xl font-bold">
          Pixel Craft
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-lg font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-lg font-medium">
            About
          </Link>
          <Link href="/portfolio" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-lg font-medium">
            Portfolio
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-lg font-medium">
            Contact
          </Link>
          <Link href="/certification" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-lg font-medium">
            Certifications
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close Icon (X)
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 pb-4 px-2 space-y-2 bg-white border-t border-gray-100">
          <Link 
            href="/" 
            className="block text-gray-900 hover:bg-gray-100 hover:text-gray-500 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block text-gray-900 hover:bg-gray-100 hover:text-gray-500 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/portfolio" 
            className="block text-gray-900 hover:bg-gray-100 hover:text-gray-500 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            href="/contact" 
            className="block text-gray-900 hover:bg-gray-100 hover:text-gray-500 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/certification" 
            className="block text-gray-900 hover:bg-gray-100 hover:text-gray-500 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Certifications
          </Link>
        </div>
      )}
    </nav>
  );
}
