"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

interface SolutionPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string | React.ReactNode;
  image: string;
  pagePath?: string;
}

// Pre-define all possible page imports
const pageComponents = {
  'forest-establishment': dynamic(() => import('@/app/forest-establishment/page')),
  'forest-management': dynamic(() => import('@/app/forest-management/page')),
  'sustainable-harvesting': dynamic(() => import('@/app/sustainable-harvesting/page')),
  'unique-organic-inputs': dynamic(() => import('@/app/unique-organic-inputs/page')),
  'biochar-enrichment': dynamic(() => import('@/app/biochar-enrichment/page')),
  'digital-monitoring': dynamic(() => import('@/app/digital-monitoring/page')),
  'sustainable-timber': dynamic(() => import('@/app/sustainable-timber/page')),
  'biochar': dynamic(() => import('@/app/biochar/page')),
  'carbon-credits': dynamic(() => import('@/app/carbon-credits/page')),
  'our-impact': dynamic(() => import('@/app/our-impact/page')),
};

export function SolutionPanel({
  isOpen,
  onClose,
  title,
  description,
  image,
  pagePath,
}: SolutionPanelProps) {
  const [pageContent, setPageContent] = useState<React.ReactNode>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && pagePath) {
      setIsLoading(true);
      // Dynamically import the page component
      const loadPageContent = async () => {
        try {
          // Remove leading slash and convert to module path
          const modulePath = pagePath.replace(/^\//, '');
          const PageComponent = pageComponents[modulePath as keyof typeof pageComponents];
          if (PageComponent) {
            setPageContent(<PageComponent />);
          } else {
            console.error('Page component not found for path:', modulePath);
            setPageContent(null);
          }
        } catch (error) {
          console.error('Error loading page content:', error);
          setPageContent(null);
        } finally {
          setIsLoading(false);
        }
      };
      loadPageContent();
    }
  }, [isOpen, pagePath]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 w-[80%] h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="h-full overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#38625c]"></div>
            </div>
          ) : pageContent ? (
            <div className="">
              {pageContent}
            </div>
          ) : (
            <div className="flex flex-col gap-6 p-8">
              {image && (
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
              <div className="text-gray-600 text-lg leading-relaxed">
                {description}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 