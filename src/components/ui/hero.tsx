import React from 'react';
import Image from 'next/image';
import { TextSlider } from './text-slider';
import Link from 'next/link';

interface HeroProps {
  backgroundImage: string;
  title: React.ReactNode | { title: string; subtitle: string }[];
  subtitle?: React.ReactNode;
  small?: boolean;
  buttonText?: string;
  buttonLink?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  subtitleBelowImage?: boolean;
}

export function Hero({
  backgroundImage,
  title,
  subtitle,
  small = false,
  buttonText,
  buttonLink,
  titleClassName = 'text-4xl md:text-5xl lg:text-6xl',
  subtitleClassName = 'text-xl md:text-2xl text-gray-700 font-light mb-8 max-w-full',
  subtitleBelowImage = false,
}: HeroProps) {
  return (
    <>
      <div
        className={`relative w-full ${small ? 'h-[40vh]' : 'min-h-screen'} overflow-hidden`}
      >
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-[#003714] opacity-50" />
        </div>
        
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="w-full max-w-[100%] xl:max-w-[100%] mx-auto px-[10px] md:px-12">
            <div className="w-full">
              {Array.isArray(title) ? (
                <TextSlider items={title} />
              ) : (
                <>
                  <h1 className={`${titleClassName} font-light text-white/90 leading-tight mb-6`}>
                    {title}
                  </h1>
                  {subtitle && !subtitleBelowImage && (
                    <p className={`${subtitleClassName} text-white/80`}>
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
      {subtitle && subtitleBelowImage && (
        <div className="bg-white py-16 px-[10px] md:px-[50px]">
          <div className="container mx-auto">
            <p className={subtitleClassName}>
              {subtitle}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
