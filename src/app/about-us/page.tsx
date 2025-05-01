"use client";

import { Footer } from '@/components/layout/footer';
import { SolutionPanel } from '@/components/ui/solution-panel';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Header } from '@/components/layout/header';

export default function AboutPage() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[700px] w-full">
        <Image
          src="/images/test.jpeg"
          alt="Our Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-end justify-start p-8 md:p-16">
          <h1 className="text-7xl font-bold text-white max-w-2xl">Our Team</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Who We Are</h2>
        <p className="text-lg leading-relaxed">
          We're a team of soil-obsessed scientists, forest builders, and systems thinkers, brought together by a vision to transform wastelands into productive, regenerative landscapes. At Orgatek, we combine deep-rooted farming knowledge with in-house organic chemistry, high-temperature biochar systems, precision land management, modern supply chain expertise, and digital innovation — creating the conditions for forests to thrive and soils to recover.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          From remote field plots to satellite feeds, we track every outcome, because every hectare deserves to be managed, restored, and brought back to life.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Leadership</h2>
          
          {/* Varun Mittal */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/test.jpeg"
                alt="Varun Mittal"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Varun Mittal</h3>
              <h4 className="text-xl text-black-600">Founder & CEO</h4>
              <p className="text-lg leading-relaxed">
                A Chartered Accountant by training, Varun brings over 15 years of deep, hands-on experience in the agri-commodities sector. He has built and managed large-scale farm-to-fork operations, overseeing everything from production to last-mile delivery. His strength lies in understanding both the micro-level intricacies of farming and the macro dynamics of global agri-supply chains. At Orgatek, Varun brings a systems-level approach to forest-based carbon projects — ensuring operational scalability, financial discipline, and long-term value extraction across the entire supply chain.
              </p>
            </div>
          </div>
          
          {/* Mr. Opinder Gaur */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-3xl font-bold">Mr. Opinder Gaur</h3>
              <h4 className="text-xl text-black-600">Head of Farming & Chief Agronomic Strategist</h4>
              <p className="text-lg leading-relaxed">
                With over four decades of farming experience — and the last 20 years devoted entirely to organic inputs — Mr. Gaur is the agronomic brain behind Orgatek's forestry chemistry. From developing unique apple input systems in Sirmaur's orchards to achieving record-breaking tomato yields, his legacy is rooted in soil, sustainability, and science. Widely regarded as a "tree whisperer," his intimate understanding of plant behaviour, microclimates, and regenerative practices shapes Orgatek's organic-certified forestry model. Whether growing unique roses in polyhouses or restoring forest soils, he ensures nature leads the way.
              </p>
            </div>
            <div className="relative h-[400px] w-full order-1 md:order-2">
              <Image
                src="/images/test.jpeg"
                alt="Mr. Opinder Gaur"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advisory & Team Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Advisory & Team</h2>
        <div className="relative h-[400px] w-full mb-12">
          <Image
            src="/images/test.jpeg"
            alt="Our Advisory Team"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-lg leading-relaxed">
          Orgatek is supported by a cross-disciplinary team of senior agronomists, soil scientists, pathologists, forestry experts, GIS analysts, carbon project managers, and machinery and automation engineers — all aligned toward one mission: restoring land, removing carbon, and building robust, verifiable climate assets.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Together, this cohesive team ensures that every aspect of the project — from planting density to satellite mapping, from biochar application to carbon verification — is executed with technical excellence, ground truth, and environmental integrity.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          We also draw expertise from advisors in sustainable forestry, regenerative agriculture, voluntary carbon markets, and ecosystem services valuation — ensuring we stay ahead of emerging standards and science.
        </p>
      </section>

      {/* Impact Section */}
      <section className="relative h-[400px] w-full mb-16">
        <Image
          src="/images/test.jpeg"
          alt="Our Impact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center p-8 md:p-16">
          <h2 className="text-5xl font-bold text-white mb-12 max-w-2xl">Our Impact</h2>
          <button 
            onClick={() => setIsPanelOpen(true)}
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Learn More
          </button>
        </div>
      </section>

      <Footer />

      {/* Solution Panel */}
      <SolutionPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        title="Our Impact"
        description="Discover how Orgatek is making a difference in transforming wastelands into productive, regenerative landscapes. Learn about our innovative approaches to forest management, carbon sequestration, and sustainable development."
        image="/images/test.jpeg"
        pagePath="/our-impact"
      />
    </div>
  );
} 