'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = {
  explore: [
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Our Process', href: '/our-process' },
    { name: 'Our Solutions', href: '/our-solutions' },
    { name: 'Get Involved', href: '/get-involved' },
  ],
  connect: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shop Our Products', href: '/shop' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms And Conditions', href: '/terms' },
  ]
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="relative">
        {/* Main header content */}
        <div className="flex items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/Logo/logo1.png" 
                alt="Orgatek Logo" 
                width={120} 
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Burger menu button for both mobile and desktop */}
          <button
            type="button"
            className="text-[#38625c]"
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Slide-out menu for both mobile and desktop */}
        {menuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Menu panel */}
            <div className="fixed inset-y-0 right-0 w-[70%] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center">
                  <Link 
                    href="/" 
                    className="flex items-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Image 
                      src="/Logo/logo1.png" 
                      alt="Orgatek Logo" 
                      width={120} 
                      height={40}
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>
                <button
                  type="button"
                  className="text-[#38625c]"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <nav className="h-[calc(100vh-80px)] flex flex-col justify-center">
                <div className="px-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Explore Section */}
                    <div>
                      <ul className="text-[#38625c] font-semibold mb-4 text-lg">
                        {navItems.explore.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-[#38625c] hover:text-[#915662] block text-[1.3em] leading-[1.4]"
                              onClick={() => setMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                      <h3 className="text-[#38625c] font-semibold mb-4 text-lg">Connect</h3>
                      <ul className="space-y-2">
                        {navItems.connect.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-[#38625c] hover:text-[#915662] block text-[1.3em] leading-[1.4]"
                              onClick={() => setMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                      <h3 className="text-[#38625c] font-semibold mb-4 text-lg">Legal</h3>
                      <ul className="space-y-2">
                        {navItems.legal.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-[#38625c] hover:text-[#915662] block text-[1.3em] leading-[1.4]"
                              onClick={() => setMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
