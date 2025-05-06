'use client';

import { useState } from 'react';

interface VideoCardProps {
  videoId: string;
  title: string;
  description: string;
}

function VideoCard({ videoId, title, description }: VideoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Only load the iframe when the thumbnail is clicked
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="bg-white p-4 shadow-sm rounded-lg">
      <div className="aspect-video w-full mb-4 relative">
        {!isPlaying ? (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-full h-full relative group"
            aria-label={`Play ${title} video`}
          >
            {/* Thumbnail */}
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        ) : (
          <iframe
            className={`w-full h-full absolute inset-0 transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </div>
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default function VideoSection() {
  const videos = [
    {
      videoId: 'your-video-id-1',
      title: 'Carbon Farming Projects',
      description: 'Discover how our carbon farming initiatives are transforming landscapes and communities.',
    },
    {
      videoId: 'your-video-id-2',
      title: 'Sustainable Forestry',
      description: "See how we're managing forests for both environmental and economic benefits.",
    },
    {
      videoId: 'your-video-id-3',
      title: 'Community Impact',
      description: 'Learn about the positive impact our projects have on rural communities.',
    },
  ];

  return (
    <section className="py-16 bg-[#eff1f1]">
      <div className="orgatek-container">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center font-[var(--font-montserrat)]">
          Our Impact in Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {videos.map((video) => (
            <VideoCard key={video.videoId} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
} 