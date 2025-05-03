"use client";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { useState, useEffect, useCallback } from 'react';

export default function WhatWeDo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const SLIDE_INTERVAL = 5000; // 5 seconds per slide

  const processSteps = [
    {
      image: "/images/land-preparation.png",
      text: "Our team of experts locate and identify land perfect for being replanted with oil mallee seedlings in environmental plantings which regenerate landscapes, reduce salinity and prevent erosion."
    },
    {
      image: "/images/our-impact.jpg",
      text: "We transform these lands through sustainable forestry practices, implementing advanced planting techniques and careful management to ensure optimal growth and environmental impact."
    },
    {
      image: "/images/biochar-enrichment.png",
      text: "Through our innovative processing methods, we convert harvested biomass into valuable products while maintaining the ecological balance and creating sustainable carbon sinks."
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % processSteps.length);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [processSteps.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + processSteps.length) % processSteps.length);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [processSteps.length]);

  // Auto-advance slides
  useEffect(() => {
    let slideTimer: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      slideTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % processSteps.length);
      }, SLIDE_INTERVAL);
    }

    return () => {
      if (slideTimer) {
        clearInterval(slideTimer);
      }
    };
  }, [isAutoPlaying, processSteps.length]);

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/what-hero.jpg"
        title="What We Do"
        subtitle=""
        small={false}
      />

      {/* Intro Section */}
      <section className="py-12 bg-[#eff1f1]">
        <div className="orgatek-container">
          <div className="max-w-full mx-auto">
            <p className="text-lg text-gray-700">
            We transform wastelands into thriving ecosystems through a symbiotic process of planting short-rotation high-yield trees and enriching the soil with Biochar made from their waste biomass. This combination enhances soil fertility, improves water retention, accelerates healthy tree growth, and creates high-quality, traceable, and verifiable carbon sinks.
            </p>
          </div>
        </div>
      </section>
       {/* Production Cycle Section */}
      <section className="py-10 bg-white">
        <div className="orgatek-container">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 h-full">
              <div className="h-full">
                <img 
                  src="/images/production-cycle.png" 
                  alt="Production cycle process" 
                  className="w-full h-[100%] object-contain rounded-lg"
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-semibold text-[#27543a] mb-8">The Production Cycle</h2>
              <div className="space-y-6">
                <p className="text-[#27543a] text-2xl font-medium leading-relaxed">
                  Our plantation management includes planting new seedlings to expand our plantations, harvesting mature trees, coppicing (to produce regenerative growth, increased biomass and multiple trunk development) and processing the harvested plant biomass.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Forest Establishment Section */}
      <ContentSection
        title="Forest Establishment"
        description="India has over 55 million hectares classified as wastelands, with nearly 24 million hectares identified as having viable forestry potential. At Orgatek, every project begins with rigorous site and connected short-rotation, high yield tree species selection, based on detailed soil analysis, climatic assessment, water resource evaluation and market proximity. We plant high-yielding, short-rotation species such as Eucalyptus, Poplar, Acacia, Bamboo, Casuarina, and Gmelina Arborea, selected for their adaptability to local conditions and ability to deliver maximum environmental impact."
        image="/images/forest-establishment.png"
        imageLeft={false}
        buttonText="Read More"
        buttonLink="#"
        pagePath="/forest-establishment"
        bgColor="cream"
      />

      {/* Forest Management Section */}
      <ContentSection
        title="Forest Management"
        description="Efficient, professional forest management is at the heart of building high-performing regenerative ecosystems. Once planted, our forests are carefully managed through continuous field scouting, advanced digital monitoring, and skilled forestry operations and proactive interventions to ensure that our estates grow vigorously, remain healthy, and maximize carbon sequestration."
        image="/images/forest-management.jpg"
        imageLeft={true}
        buttonText="Read More"
        buttonLink="#"
        pagePath="/forest-management"
        bgColor="white"
      />

      {/* Sustainable Harvesting Section */}
      <ContentSection
        title="Sustainable Harvesting"
        description="We practice strategic rotational cycles by planting and harvesting in carefully managed phases — establishing new areas each year while earlier phases mature. This ensures our forests remain vibrant and continuously productive, keeping large sections of the landscape actively growing at all times, sustaining carbon sequestration, preserving soil health, and maintaining lush, living ecosystems, while avoiding periods of barrenness or ecological disruption."
        image="/images/sustainable-harvesting.png"
        imageLeft={false}
        buttonText="Read More"
        buttonLink="#"
        pagePath="/sustainable-harvesting"
        bgColor="cream"
      />

      {/* Proprietary Organic Inputs Section */}
      <ContentSection
        title="Proprietary Organic Inputs"
        description="Restoring wastelands demands a soil-first approach that transcends traditional tree planting. Our in-house manufactured proprietary organic inputs, developed through years of research and crafted with precise quality control, offer unmatched flexibility to customize solutions for specific conditions to support robust tree growth and long term soil fertility."
        image="/images/proprietary-organic-inputs.png"
        imageLeft={true}
        buttonText="Read More"
        buttonLink="#"
        pagePath="/unique-organic-inputs"
        bgColor="white"
      />

      {/* Biochar Enrichment Section */}
      <ContentSection
        title="Biochar Enrichment"
        description="At Orgatek, we convert forestry biomass into high-quality biochar through on-site, high-temperature pyrolysis — permanently removing carbon while enriching degraded soils. Our biochar practices close the carbon loop locally, rebuild ecosystem resilience, and deliver durable, verifiable climate impact at scale."
        image="/images/biochar-enrichment.png"
        imageLeft={false}
        buttonText="Read More"
        buttonLink="#"
        pagePath="/biochar-enrichment"
        bgColor="cream"
      />

      {/* Digital Monitoring Section */}
      <ContentSection
        title="Digital Monitoring & Verification"
        description="We integrate the best digital technologies including IoT sensors, computer vision and satellite imagery, to monitor and verify every aspect of forest establishment, management, harvesting and carbon sequestration. Our digital platform ensures real-time visibility, transparent reporting, and third-party validated impact across all our projects."
        image="/images/digital-monitoring.png"
        imageLeft={true}
        buttonText="Read More"
        buttonLink="#"
        pagePath="/digital-monitoring"
        bgColor="white"
      />

      {/* Full Circle Process Section */}
      <section className="py-16 bg-[#eff1f1]">
        <div className="orgatek-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            {/* Content */}
            <div className="flex-1 max-w-4xl mx-auto">
              {/* Image and Arrows Container */}
              <div className="relative flex items-center justify-center mb-8 md:mb-0">
                {/* Left Arrow */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 md:-left-16 w-12 h-12 flex items-center justify-center bg-[#27543a] text-white rounded-lg hover:bg-[#1e3f2c] transition-colors z-10"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Circular Image */}
                <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#27543a]">
                    <img 
                      src={processSteps[currentSlide].image}
                      alt={`Process step ${currentSlide + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                  </div>
                </div>

                {/* Right Arrow */}
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 md:-right-16 w-12 h-12 flex items-center justify-center bg-[#27543a] text-white rounded-lg hover:bg-[#1e3f2c] transition-colors z-10"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Text Content */}
              <div className="text-center md:text-center mt-8 md:mt-12">
                <p className="text-[#27543a] text-lg leading-relaxed transition-opacity duration-500">
                  {processSteps[currentSlide].text}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 flex justify-center gap-4">
            {processSteps.map((_, index) => (
              <div 
                key={index}
                className={`w-12 md:w-16 h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide ? 'bg-[#27543a]' : 'bg-[#27543a]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      

      

      <Footer />
    </main>
  );
}
