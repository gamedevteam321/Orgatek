import React from 'react';
import Image from 'next/image';
import { TextSlider } from './text-slider';

interface HeroProps {
  backgroundImage: string;
  title: string | { title: string; subtitle: string }[];
  subtitle?: string;
  small?: boolean;
}

export function Hero({
  backgroundImage,
  title,
  subtitle,
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
      
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-[90%] xl:max-w-[1200px] mx-auto px-4 pb-16">
          <div className="w-full">
            {Array.isArray(title) ? (
              <TextSlider items={title} />
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-[700px]">
                    {subtitle}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
