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
}

export function AlternatingSection({
  title,
  description,
  image,
  buttonText,
  imagePosition,
  pagePath,
}: AlternatingSectionProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
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
              <h2 className="text-3xl font-bold text-[#2B5741] mb-4">{title}</h2>
              <p className="text-gray-600 mb-8">{description}</p>
              <button
                onClick={() => setIsPanelOpen(true)}
                className="inline-block bg-[#2B5741] text-white px-6 py-3 rounded-lg hover:bg-[#1e3f2d] transition-colors"
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