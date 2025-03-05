"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaCoins } from "react-icons/fa6";

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* منوی عادی */}
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* لوگو */}
          <div className="flex-shrink-0 absolute sm:relative inset-y-0 right-36 sm:my-0 sm:right-0 my-4 ">
            <Link href="/" className="flex items-center gap-1 justify-center text-gray-800 font-bold">
              {/* نمایش آیکون و متن ریسپانسیو */}
              <FaCoins className={`text-2xl sm:text-2xl md:text-2xl ${isOpen ? 'mt-0' : 'mt-1'}`} />
              <p className="text-lg sm:text-md md:text-lg lg:text-xl">Crypto Tracking</p>
            </Link>
          </div>
          {/* دکمه منوی موبایل */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
