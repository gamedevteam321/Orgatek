import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  small?: boolean;
}

export function Hero({
  backgroundImage,
  title,
  subtitle,
  buttonText = "Watch video",
  buttonLink = "#",
  small = false,
}: HeroProps) {
  return (
    <div
      className={`relative w-full ${small ? 'h-[40vh]' : 'min-h-screen'} overflow-hidden bg-[#38625c]`}
    >
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-[90%] xl:max-w-[1200px] mx-auto px-4">
          <div className="max-w-[800px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-[700px]">
                {subtitle}
              </p>
            )}
            {buttonText && buttonLink && (
              <div>
                <Link
                  href={buttonLink}
                  className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-[#38625c] transition-colors duration-200"
                >
                  {buttonText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
