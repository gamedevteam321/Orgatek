'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SolutionPanel } from './solution-panel';

interface AlternatingSectionProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  imagePosition: 'left' | 'right';
  pagePath?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonStyle?: 'default' | 'solid-green';
}

export function AlternatingSection({
  title,
  description,
  image,
  buttonText,
  imagePosition,
  pagePath,
  titleClassName = 'text-3xl font-bold text-[#2B5741] mb-4',
  descriptionClassName = 'text-gray-600 mb-8',
  buttonStyle = 'default'
}: AlternatingSectionProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const getButtonClass = () => {
    if (buttonStyle === 'solid-green') {
      return 'bg-[#1B5E20] text-white hover:bg-[#154a19] px-16 py-3 text-base font-medium transition-colors duration-200';
    }
    return 'bg-[#2B5741] text-white px-6 py-3 rounded-lg hover:bg-[#1e3f2d] transition-colors';
  };

  return (
    <>
      <div className="py-16">
        <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[400px] w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <h2 className={titleClassName}>{title}</h2>
            <p className={descriptionClassName}>{description}</p>
            <div className="flex justify-center md:justify-start mt-8">
              <button
                onClick={() => setIsPanelOpen(true)}
                className={getButtonClass()}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      <SolutionPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        title={title}
        description={description}
        image={image}
        pagePath={pagePath}
      />
    </>
  );
} 