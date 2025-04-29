import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ContentSectionProps {
  title?: string;
  description?: string;
  image?: string | React.ReactNode;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  imageLeft?: boolean;
  bgColor?: 'white' | 'cream' | 'green' | 'maroon';
  children?: React.ReactNode;
  imageSize?: 'default' | 'full';
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
}: ContentSectionProps) {
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
        <div className={`relative ${imageSize === 'full' ? 'w-full h-screen' : 'w-full h-64 md:h-80 lg:h-full'}`}>
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

            {buttonText && buttonLink && (
              <div className="mt-6">
                <Link href={buttonLink} className={`orgatek-button ${getButtonClass()}`}>
                  {buttonText}
                </Link>
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
  );
}
