'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExpandableText } from './ExpandableText';
import { useRouter } from 'next/navigation';
import { SolutionPanel } from './solution-panel';

interface ProcessCardProps {
  title: string;
  description: string;
  image: string;
  pagePath?: string;
  useSidePanel?: boolean;
  hideTextExpander?: boolean;
}

export const ProcessCard = ({ title, description, image, pagePath, useSidePanel = false, hideTextExpander = false }: ProcessCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const router = useRouter();

  const handleReadMore = () => {
    if (useSidePanel) {
      setIsPanelOpen(true);
    } else if (pagePath) {
      router.push(pagePath);
    }
  };

  return (
    <>
      <div 
        className={`flex-shrink-0 bg-white rounded-[30px] shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out ${
          isExpanded ? 'min-w-[400px] max-w-[400px]' : 'min-w-[320px] max-w-[320px]'
        }`}
      >
        <div className="p-6">
          <h3 className="text-lg font-semibold text-[#38625c] mb-4">{title}</h3>
          <div className="relative w-full h-60 mb-4 rounded-[20px] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
          <ExpandableText onExpand={setIsExpanded} hideButton={hideTextExpander}>
            {description}
          </ExpandableText>
          {pagePath && (
            <button
              onClick={handleReadMore}
              className="mt-4 text-[#38625c] hover:text-[#2e4a3d] font-medium flex items-center group"
            >
              Read More
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
          )}
        </div>
      </div>

      {useSidePanel && (
        <SolutionPanel
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
          title={title}
          description={description}
          image={image}
          pagePath={pagePath}
        />
      )}
    </>
  );
}; 