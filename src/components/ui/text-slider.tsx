'use client';

import { useState, useEffect, useRef, TouchEvent } from 'react';

interface TextSliderProps {
  items: {
    title: string;
    subtitle: string;
  }[];
  interval?: number;
}

export function TextSlider({ items, interval = 5000 }: TextSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  const startDrag = (e: TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const onDrag = (e: TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    setTranslateX(-currentIndex * 100 + (-diff / (sliderRef.current?.offsetWidth || 1)) * 100);
  };

  const endDrag = (e: TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const currentX = e.changedTouches[0].clientX;
    const diff = startX - currentX;
    const threshold = (sliderRef.current?.offsetWidth || 1) * 0.2;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
    setTranslateX(-currentIndex * 100);
    startTimer();
  };

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [items.length, interval]);

  useEffect(() => {
    setTranslateX(-currentIndex * 100);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full flex flex-col">
      <div 
        ref={sliderRef}
        className="flex-1 overflow-hidden"
        onTouchStart={startDrag}
        onTouchMove={onDrag}
        onTouchEnd={endDrag}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-in-out',
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                {item.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-[700px]">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-6 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              if (timerRef.current) {
                clearInterval(timerRef.current);
              }
              startTimer();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 