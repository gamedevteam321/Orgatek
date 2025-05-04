"use client";

import { Footer } from '@/components/layout/footer';
import { SolutionPanel } from '@/components/ui/solution-panel';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { LeadershipCard } from '@/components/LeadershipCard';
import { ImageSlideshow } from '@/components/ImageSlideshow';
import VideoSection from '@/components/sections/video-section';

export default function AboutPage() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  const teamImages = [
    
    '/images/team/2.jpg',
    '/images/team/3.jpg',
    '/images/team/4.jpg',
    '/images/team/6.jpg',
    '/images/team/7.jpg',
  ];

  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[700px] w-full">
        <ImageSlideshow images={teamImages} interval={6000} />
        <div className="absolute inset-0 bg-black/30 flex items-end justify-start p-8 md:p-24">
          <h1 className="text-7xl font-bold text-white max-w-2xl">Our Team</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-20 px-4 md:px-24 mx-auto bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Who We Are</h2>
        <p className="text-base md:text-lg leading-relaxed">
          We're a team of soil-obsessed scientists, forest builders, and systems thinkers, brought together by a vision to transform wastelands into productive, regenerative landscapes. At Orgatek, we combine deep-rooted farming knowledge with in-house organic chemistry, high-temperature biochar systems, precision land management, modern supply chain expertise, and digital innovation — creating the conditions for forests to thrive and soils to recover.
        </p>
        <p className="text-base md:text-lg leading-relaxed mt-4">
          From remote field plots to satellite feeds, we track every outcome, because every hectare deserves to be managed, restored, and brought back to life.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50 bg-cream">
        <div className="max-w-full mx-auto px-8 md:px-24">
          <h2 className="text-3xl font-bold mb-12">Our Leadership</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <LeadershipCard
              name="Varun Mittal"
              designation="Founder & CEO"
              image="/images/Varun.png"
              description="A Chartered Accountant by training, Varun brings over 15 years of deep, hands-on experience in the agri-commodities sector. He has built and managed large-scale farm-to-fork operations, overseeing everything from production to last-mile delivery. His strength lies in understanding both the micro-level intricacies of farming and the macro dynamics of global agri-supply chains. At Orgatek, Varun brings a systems-level approach to forest-based carbon projects — ensuring operational scalability, financial discipline, and long-term value extraction across the entire supply chain."
            />
            
            <LeadershipCard
              name="Mr. Opinder Gaur"
              designation="Head of Farming & Chief Agronomic Strategist"
              image="/images/gaur.png"
              description="With over four decades of farming experience — and the last 20 years devoted entirely to organic inputs — Mr. Gaur is the agronomic brain behind Orgatek's forestry chemistry. From developing unique apple input systems in Sirmaur's orchards to achieving record-breaking tomato yields, his legacy is rooted in soil, sustainability, and science. Widely regarded as a 'tree whisperer,' his intimate understanding of plant behaviour, microclimates, and regenerative practices shapes Orgatek's organic-certified forestry model. Whether growing unique roses in polyhouses or restoring forest soils, he ensures nature leads the way."
            />
          </div>
        </div>
      </section>

      {/* Advisory & Team Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="relative h-[400px] md:h-[600px] w-full mb-8 md:mb-12 px-4 md:px-24">
          <div className="relative h-full w-full">
            <Image
              src="/images/team.png"
              alt="Our Advisory Team"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
              <div className="w-full p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Our Advisory</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-24 pb-10 md:pb-16">
          <p className="text-base md:text-lg leading-relaxed">
            Orgatek is supported by a cross-disciplinary team of senior agronomists, soil scientists, pathologists, forestry experts, GIS analysts, carbon project managers, and machinery and automation engineers — all aligned toward one mission: restoring land, removing carbon, and building robust, verifiable climate assets.
          </p>
          <p className="text-base md:text-lg leading-relaxed mt-3">
            Together, this cohesive team ensures that every aspect of the project — from planting density to satellite mapping, from biochar application to carbon verification — is executed with technical excellence, ground truth, and environmental integrity.
          </p>
          <p className="text-base md:text-lg leading-relaxed mt-3">
            We also draw expertise from advisors in sustainable forestry, regenerative agriculture, voluntary carbon markets, and ecosystem services valuation — ensuring we stay ahead of emerging standards and science.
          </p>
        </div>
      </section>

      <VideoSection />

      
      {/* Join Our Mission Section */}
      <section className="pb-16 mt-4 bg-[#1B5E20] px-[50px] relative overflow-hidden">
        {/* Curved lines background effect */}
        <div className="absolute inset-x-0 -top-12 h-48 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path d="M0,10 Q25,0 50,10 T100,10" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,15 Q25,5 50,15 T100,15" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,20 Q25,10 50,20 T100,20" stroke="white" fill="none" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className="orgatek-container relative z-10 pt-16 md:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-r-0 md:border-r border-white/20 pr-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Join Our Mission</h2>
              <p className="text-base md:text-lg text-white/90 mb-4">
                Whether you're an investor, partner, or supporter, there are many ways to get involved with our work at Orgatek.
              </p>
            </div>
            <div className="pl-0 md:pl-8 flex items-center">
              <a 
                href="/get-involved"
                className="inline-flex items-center bg-white text-[#1B5E20] px-8 py-3 hover:bg-opacity-90 transition-colors relative group"
              >
                <span>Get involved</span>
                <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 