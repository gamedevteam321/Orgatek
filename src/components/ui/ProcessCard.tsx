'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExpandableText } from './ExpandableText';

interface ProcessCardProps {
  title: string;
  description: string;
  image: string;
}

export const ProcessCard = ({ title, description, image }: ProcessCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`flex-shrink-0 bg-white rounded-[30px] shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out ${
        isExpanded ? 'min-w-[364px] max-w-[364px]' : 'min-w-[280px] max-w-[280px]'
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
            sizes="(max-width: 364px) 100vw, 364px"
          />
        </div>
        <ExpandableText onExpand={setIsExpanded}>
          {description}
        </ExpandableText>
      </div>
    </div>
  );
}; 