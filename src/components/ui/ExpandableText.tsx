'use client';

import { useState } from 'react';

interface ExpandableTextProps {
  children: React.ReactNode;
  onExpand?: (isExpanded: boolean) => void;
  hideButton?: boolean;
}

export const ExpandableText = ({ children, onExpand, hideButton = false }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    onExpand?.(newExpandedState);
  };

  return (
    <div>
      <p className={`text-gray-600 text-sm ${!isExpanded && 'line-clamp-3'}`}>
        {children}
      </p>
      {!hideButton && (
        <button
          onClick={handleExpand}
          className="text-[#38625c] text-sm mt-2 hover:underline focus:outline-none"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}; 