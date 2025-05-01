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
  imageLeft?: boolean;
  bgColor?: 'white' | 'cream' | 'green' | 'maroon';
  children?: React.ReactNode;
  imageSize?: 'default' | 'full';
  openLink?: boolean;
  pagePath?: string;
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
    if (bgColor === 'green' || bgColor === 'maroon') {
      return 'border border-white text-white hover:bg-white hover:text-[#38625c]';
    }
    return 'orgatek-button-primary';
  };

  const renderImage = () => {
    if (typeof image === 'string') {
      return (
        <div className={`relative ${imageSize === 'full' ? 'w-full h-screen' : 'w-full h-96 md:h-[300px] lg:h-[400px]'}`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
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
      <section className={`py-16 md:py-24 ${getBgColor()}`}>
        <div className="orgatek-container">
          <div className={`grid grid-cols-1 gap-8 md:gap-12 ${image ? 'lg:grid-cols-2' : ''}`}>
            {image && imageLeft && (
              <div className="w-full">
                {renderImage()}
              </div>
            )}

            <div className="flex flex-col justify-center">
              {title && <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>}
              {description && <p className="text-base md:text-lg opacity-90 mb-6">{description}</p>}

              {children}

              {buttonText && (
                <div className="mt-6">
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

            {image && !imageLeft && (
              <div className="w-full">
                {renderImage()}
              </div>
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
