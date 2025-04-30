"use client";

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SolutionPanel } from './solution-panel';

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  icon?: React.ReactNode;
  fullDescription?: string | React.ReactNode;
  pagePath?: string;
}

export function FeatureCard({
  title,
  description,
  image,
  imageAlt = 'Feature image',
  buttonText = 'Find out more',
  buttonLink = '#',
  icon,
  fullDescription,
  pagePath,
}: FeatureCardProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-[#38625c] shadow-lg h-full rounded-[10px] overflow-hidden">
        {image && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          {icon && (
            <div className="mb-4 text-white">
              {icon}
            </div>
          )}

          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

          <p className="text-white/80 mb-6 flex-grow">{description}</p>

          {buttonText && (
            <div className="mt-auto">
              <button
                onClick={() => setIsPanelOpen(true)}
                className="flex items-center text-white hover:text-white/80 group"
              >
                <span className="text-sm font-medium">{buttonText}</span>
                <svg
                  className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      <SolutionPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        title={title}
        description={fullDescription || description}
        image={image || ''}
        pagePath={pagePath}
      />
    </>
  );
}
