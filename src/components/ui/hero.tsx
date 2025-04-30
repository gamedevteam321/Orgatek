import React from 'react';
import Image from 'next/image';
import { TextSlider } from './text-slider';
import Link from 'next/link';

interface HeroProps {
  backgroundImage: string;
  title: React.ReactNode | { title: string; subtitle: string }[];
  subtitle?: string;
  small?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

export function Hero({
  backgroundImage,
  title,
  subtitle,
  small = false,
  buttonText,
  buttonLink,
}: HeroProps) {
  return (
    <div
      className={`relative w-full ${small ? 'h-[40vh]' : 'min-h-screen'} overflow-hidden bg-[#38625c]`}
    >
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 flex items-center ">
        <div className="w-full max-w-[90%] xl:max-w-[1200px] mx-auto px-4">
          <div className="w-full">
            {Array.isArray(title) ? (
              <TextSlider items={title} />
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90 leading-tight mb-6">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xl md:text-2xl text-white/70 font-light mb-8 max-w-full ">
                    {subtitle}
                  </p>
                )}
                {buttonText && buttonLink && (
                  <Link 
                    href={buttonLink}
                    className="inline-block bg-white text-[#38625c] px-8 py-3 rounded-[7px] font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    {buttonText}
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
