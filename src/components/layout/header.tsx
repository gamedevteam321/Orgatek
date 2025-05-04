'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = {
  main: [
    { name: 'Why we Exist', href: '/why-we-exist' },
    { name: 'What we do', href: '/what-we-do' },
    { name: 'What we create', href: '/what-we-create' },
    { name: 'Our Trees', href: '/our-trees' },
    { name: 'Our Impact', href: '/our-impact' },
  ],
  connect: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Contact', href: '/get-involved' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms And Conditions', href: '/terms' },
  ]
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 border-b border-white/20 ${
        isScrolled ? 'bg-gradient-to-b from-white/80 to-white/50 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        {/* Main header content */}
        <div className="flex items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={isScrolled ? "/Logo/logo1.png" : "/Logo/logo-white.png"} 
                alt="Orgatek Logo" 
                width={160} 
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Burger menu button for both mobile and desktop */}
          <button
            type="button"
            className={`${isScrolled ? 'text-[#38625c]' : 'text-white'}`}
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Slide-out menu for both mobile and desktop */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[9999]"
            onClick={() => setMenuOpen(false)}
          ></div>
          
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-[96%] bg-white/65 backdrop-blur-sm z-[9999] shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between px-10 py-10">
              <div className="flex items-center">
                <Link 
                  href="/" 
                  className="flex items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <Image 
                    src="/Logo/logo1.png" 
                    alt="Orgatek Logo" 
                    width={160} 
                    height={80}
                    className="h-16 w-full"
                  />
                </Link>
              </div>
              <button
                type="button"
                className="text-[#38625c]"
                onClick={() => setMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            
            <nav className="h-full flex flex-col justify-start py-10 px-10">
              <div className="px-6">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-12 lg:gap-24">
                  {/* Main Navigation - Left Column */}
                  <div>
                    <ul className="space-y-0">
                      {navItems.main.map((item, index) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={`text-[#38625c] hover:text-[#915662] block text-4xl font-medium tracking-tight py-4 ${index !== 0 ? 'border-t border-[#38625c]/20' : ''}`}
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li className="border-t border-[#38625c]/40"></li>
                    </ul>
                  </div>

                  {/* Right Column - Connect and Legal */}
                  <div className="space-y-12 pt-16">
                    {/* Connect Section */}
                    <div>
                      <ul className="space-y-4 border-t border-[#38625c]/40 pt-4">
                        {navItems.connect.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-[#38625c] hover:text-[#915662] block text-xl whitespace-nowrap"
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
                      <ul className="space-y-4 border-t border-[#38625c]/40 pt-4">
                        {navItems.legal.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-[#38625c] hover:text-[#915662] block text-xl whitespace-nowrap"
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
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
