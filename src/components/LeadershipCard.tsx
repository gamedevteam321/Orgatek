import { useState } from 'react';
import Image from 'next/image';

interface LeadershipCardProps {
  name: string;
  designation: string;
  image: string;
  description: string;
}

export const LeadershipCard = ({ name, designation, image, description }: LeadershipCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
      <div className="relative h-[500px] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover bg-gray-50 object-top rounded-t-2xl"
          style={{ objectPosition: '0 -30px' }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 mb-3">{designation}</p>
        
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-[60px]'}`}>
          <div className="relative">
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-blue-600 font-medium hover:underline focus:outline-none"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    </div>
  );
}; 