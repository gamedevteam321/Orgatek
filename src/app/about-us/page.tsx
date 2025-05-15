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
    
    
    '/images/team/3.jpg',
    '/images/team/4.jpg',
    '/images/team/6.jpg',
    '/images/team/7.jpg',
  ];

  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[735px] w-full">
        <ImageSlideshow images={teamImages} interval={6000} />
        <div className="absolute inset-0 bg-black/30 flex items-end justify-start px-[10px] md:px-[50px] py-16 md:py-24">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white max-w-2xl font-[var(--font-montserrat)]">Our Team</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left">Who We Are</h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)] text-center md:text-left">
                We're a team of soil-obsessed scientists, forest builders, and systems thinkers, brought together by a vision to transform wastelands into productive, regenerative landscapes. At Orgatek, we combine deep-rooted farming knowledge with in-house organic chemistry, high-temperature biochar systems, precision land management, modern supply chain expertise, and digital innovation — creating the conditions for forests to thrive and soils to recover.
              </p>
              <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)] text-center md:text-left">
                From remote field plots to satellite feeds, we track every outcome, because every hectare deserves to be managed, restored, and brought back to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left">Our Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* Advisory & Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <div className="relative h-[300px] md:h-[500px] w-full mb-8">
              <Image
                src="/images/team.png"
                alt="Our Advisory Team"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <div className="w-full p-6">
                  <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white font-[var(--font-montserrat)]">Our Advisory</h2>
                </div>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)] text-center md:text-left">
                Orgatek is supported by a cross-disciplinary team of senior agronomists, soil scientists, pathologists, forestry experts, GIS analysts, carbon project managers, and machinery and automation engineers — all aligned toward one mission: restoring land, removing carbon, and building robust, verifiable climate assets.
              </p>
              <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)] text-center md:text-left">
                Together, this cohesive team ensures that every aspect of the project — from planting density to satellite mapping, from biochar application to carbon verification — is executed with technical excellence, ground truth, and environmental integrity.
              </p>
              <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)] text-center md:text-left">
                We also draw expertise from advisors in sustainable forestry, regenerative agriculture, voluntary carbon markets, and ecosystem services valuation — ensuring we stay ahead of emerging standards and science.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VideoSection />

      {/* Join Our Mission Section */}
      <section className="py-16 md:py-24 bg-[#1B5E20]">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="border-r-0 md:border-r border-white/20 pr-0 md:pr-8">
                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white font-[var(--font-montserrat)] text-center md:text-left">Join Our Mission</h2>
                <p className="text-lg md:text-xl text-white/90 font-[var(--font-poppins)] text-center md:text-left mt-4">
                  Whether you're an investor, partner, or supporter, there are many ways to get involved with our work at Orgatek.
                </p>
              </div>
              <div className="pl-0 md:pl-8 flex items-center justify-center md:justify-start">
                <Link 
                  href="/get-involved"
                  className="inline-flex items-center bg-white text-[#1B5E20] px-8 py-3 hover:bg-opacity-90 transition-colors relative group text-lg md:text-xl font-[var(--font-poppins)]"
                >
                  <span>Get involved</span>
                  <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 