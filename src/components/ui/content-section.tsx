"use client";

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SolutionPanel } from './solution-panel';

interface ContentSectionProps {
  title?: string;
  description?: string | React.ReactNode;
  image?: string | React.ReactNode;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  imageLeft?: boolean | { mobile: boolean; desktop: boolean };
  bgColor?: 'white' | 'cream' | 'green' | 'maroon';
  children?: React.ReactNode;
  imageSize?: 'default' | 'full';
  openLink?: boolean;
  pagePath?: string;
  bgImage?: string;
  imageObjectFit?: 'cover' | 'contain';
  imageHeight?: string;
  className?: string;
  buttonStyle?: 'default' | 'solid-green';
  titleClassName?: string;
}

export function ContentSection({
  title,
  description,
  image,
  imageAlt = 'Orgatek content image',
  buttonText,
  buttonLink,
  imageLeft = false,
  bgColor = 'white',
  children,
  imageSize = 'default',
  openLink = false,
  pagePath,
  bgImage,
  imageObjectFit = 'cover',
  imageHeight = 'h-96 md:h-[300px] lg:h-[400px]',
  className = '',
  buttonStyle = 'default',
  titleClassName = 'text-3xl md:text-4xl font-bold mb-4',
}: ContentSectionProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const getBgColor = () => {
    switch (bgColor) {
      case 'cream':
        return 'bg-[#eff1f1]';
      case 'green':
        return 'bg-[#38625c] text-white';
      case 'maroon':
        return 'bg-[#915662] text-white';
      default:
        return 'bg-white';
    }
  };

  const getButtonClass = () => {
    if (buttonStyle === 'solid-green') {
      return 'bg-[#1B5E20] text-white hover:bg-[#154a19] px-16 py-3 text-base font-medium transition-colors duration-200';
    }
    if (bgColor === 'green' || bgColor === 'maroon') {
      return 'border border-white text-white hover:bg-white hover:text-[#38625c]';
    }
    return 'orgatek-button-primary';
  };

  const renderImage = () => {
    if (typeof image === 'string') {
      return (
        <div className={`relative ${imageSize === 'full' ? 'w-full h-screen' : `w-full ${imageHeight}`}`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`object-${imageObjectFit}`}
          />
        </div>
      );
    }
    return image;
  };

  if (imageSize === 'full') {
    return (
      <section className={`py-[50px] ${getBgColor()}`}>
        <div className="relative w-full h-[calc(100vh-100px)]">
          <Image
            src={image as string}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
      </section>
    );
  }

  return (
    <>
      <section className={`py-16 md:py-24 ${getBgColor()} relative ${className}`}>
        {bgImage && (
          <>
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={bgImage}
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
          </>
        )}
        <div className="orgatek-container relative z-10">
          <div className={`grid grid-cols-1 gap-8 md:gap-12 ${image && !bgImage ? 'lg:grid-cols-2' : ''}`}>
            {image && !bgImage && (
              <>
                {/* Mobile Image (Always First) */}
                <div className="block lg:hidden w-full">
                  {renderImage()}
                </div>

                {/* Desktop Image (Position Based on imageLeft) */}
                {typeof imageLeft === 'object' ? (
                  imageLeft.desktop && (
                    <div className="hidden lg:block w-full">
                      {renderImage()}
                    </div>
                  )
                ) : (
                  imageLeft && (
                    <div className="hidden lg:block w-full">
                      {renderImage()}
                    </div>
                  )
                )}
              </>
            )}

            <div className="flex flex-col justify-center">
              {title && <h2 className={`${titleClassName} ${bgImage ? 'text-white' : ''} font-[var(--font-montserrat)]`}>{title}</h2>}
              {description && <div className={`text-base md:text-lg opacity-90 mb-6 ${bgImage ? 'text-white' : ''} font-[var(--font-poppins)]`}>{description}</div>}

              {children}

              {buttonText && (
                <div className="mt-6 flex justify-center md:justify-start">
                  {openLink && buttonLink ? (
                    <Link href={buttonLink} className={`orgatek-button ${getButtonClass()}`}>
                      {buttonText}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setIsPanelOpen(true)}
                      className={`orgatek-button ${getButtonClass()}`}
                    >
                      {buttonText}
                    </button>
                  )}
                </div>
              )}
            </div>

            {image && !bgImage && (
              <>
                {/* Desktop Image (Position Based on imageLeft) */}
                {typeof imageLeft === 'object' ? (
                  !imageLeft.desktop && (
                    <div className="hidden lg:block w-full">
                      {renderImage()}
                    </div>
                  )
                ) : (
                  !imageLeft && (
                    <div className="hidden lg:block w-full">
                      {renderImage()}
                    </div>
                  )
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <SolutionPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        title={title || ''}
        description={typeof description === 'string' ? description : ''}
        image={typeof image === 'string' ? image : ''}
        pagePath={pagePath}
      />
    </>
  );
}
