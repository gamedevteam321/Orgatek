'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = {
  main: [
    { name: 'Why we exist', href: '/why-we-exist' },
    { name: 'What we do', href: '/what-we-do' },
    { name: 'What we create', href: '/what-we-create' },
    { name: 'Our Trees', href: '/our-trees' },
    { name: 'Our Impact', href: '/our-impact' },
  ],
  connect: [
    { name: 'About Us', href: '/about-us' },
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

  // Add effect to handle body overflow
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

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
            className="fixed inset-0 bg-black/40 z-[9999] transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          ></div>
          
          {/* Menu panel */}
          <div className="fixed inset-0 bg-[#DFECE1] z-[9999] shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="flex items-center justify-between px-12 py-8">
              <Link 
                href="/" 
                className="flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <Image 
                  src="/Logo/leaf-logo.png" 
                  alt="Orgatek Logo" 
                  width={160} 
                  height={80}
                  className="h-14 w-auto"
                />
              </Link>
              <button
                type="button"
                className="text-[#005133] hover:text-[#5E9F69] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            
            <nav className="px-12 py-10">
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-16">
                {/* Main Navigation */}
                <div>
                  <ul className="space-y-0">
                    {navItems.main.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-[#005133] hover:text-[#5E9F69] block text-[42px] font-medium py-5 border-b border-[#005133]/60 transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Secondary Navigation */}
                <div className="pt-8">
                  <div className="grid grid-cols-2 gap-24">
                    {/* Connect Section */}
                    <div>
                      <div className="border-t border-[#005133]/60 mb-6"></div>
                      <ul className="space-y-4">
                        {navItems.connect.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-[#005133] hover:text-[#5E9F69] block text-lg"
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
                      <div className="border-t border-[#005133]/60 mb-6"></div>
                      <ul className="space-y-4">
                        {navItems.legal.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-[#005133] hover:text-[#5E9F69] block text-lg"
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
