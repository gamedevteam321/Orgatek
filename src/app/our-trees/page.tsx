"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { FeatureCard } from '@/components/ui/feature-card';
import { ProcessCard } from '@/components/ui/ProcessCard';
import Image from 'next/image';

export default function OurTrees() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Hero
        backgroundImage="/images/our-trees.png"
        title={
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <h2 className="block text-4xl md:text-4xl lg:text-6xl">Our Trees</h2>
          </div>
        }
        subtitle={
          <div className="text-2xl md:text-xl lg:text-2xl text-white/90 mb-6 text-center md:text-left font-[var(--font-montserrat)]">
            <h2>Restoring Ecosystems & Capturing Carbon</h2>
          </div>
        }
        titleClassName="text-2xl md:text-4xl lg:text-6xl"
        subtitleClassName="text-2xl md:text-xl lg:text-2xl text-white/90 mb-6 text-center md:text-left"
      />

      {/* Introduction Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <p className="text-lg md:text-xl text-black font-regular text-center md:text-left font-[var(--font-poppins)]">
              At Orgatek, every tree we plant serves a purpose beyond just growth—it contributes to ecosystem restoration, soil revitalization, and carbon sequestration, ensuring that degraded landscapes evolve into self-sustaining forests.
            </p>
          </div>
        </div>
      </section>

      {/* Tree Species Section */}
      <ContentSection
        title="Eucalyptus"
        description={
          <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
            A resilient, fast-growing species ideal for carbon sequestration, water conservation, and soil stabilization. Its ability to thrive in arid conditions makes it a cornerstone of land regeneration efforts.
          </p>
        }
        image="/images/eucalyptus.png"
        imageLeft={true}
        bgColor="cream"
        imageObjectFit="contain"
        imageHeight="h-[500px]"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      <ContentSection
        title="Poplar"
        description={
          <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
            With rapid growth and adaptability, poplar enhances biodiversity, prevents soil erosion, and provides valuable biomass for sustainable agroforestry solutions.
          </p>
        }
        image="/images/poplar.png"
        imageLeft={false}
        bgColor="white"
        imageObjectFit="contain"
        imageHeight="h-[500px]"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      <ContentSection
        title="Acacia"
        description={
          <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
            Known for enriching soils with nitrogen fixation, Acacia fosters healthy ecosystems while serving as a natural defense against desertification.
          </p>
        }
        image="/images/acacia.png"
        imageLeft={true}
        bgColor="cream"
        imageObjectFit="contain"
        imageHeight="h-[500px]"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      <ContentSection
        title="Bamboo"
        description={
          <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
            A versatile and renewable resource, bamboo is essential for erosion control, soil enrichment, and carbon absorption, offering a sustainable alternative to traditional timber.
          </p>
        }
        image="/images/bamboo.png"
        imageLeft={false}
        bgColor="white"
        imageObjectFit="contain"
        imageHeight="h-[500px]"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      <ContentSection
        title="Casuarina"
        description={
          <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
            Highly tolerant to saline and degraded soils, Casuarina plays a crucial role in coastal restoration, windbreaks, and carbon storage, reinforcing landscapes against climate challenges.
          </p>
        }
        image="/images/Casuarina.png"
        imageLeft={true}
        bgColor="cream"
        imageObjectFit="contain"
        imageHeight="h-[500px]"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      <ContentSection
        title="Gmelina Arborea"
        description={
          <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
            With its high-yield biomass and rapid regeneration, Gmelina supports sustainable forestry, efficient carbon sequestration, and long-term soil productivity, making it a key species for restoring deforested regions.
          </p>
        }
        image="/images/Gmelina Arborea.png"
        imageLeft={false}
        bgColor="white"
        imageObjectFit="contain"
        imageHeight="h-[500px]"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      {/* Conclusion Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <p className="text-lg md:text-xl text-black font-regular text-center font-[var(--font-poppins)]">
              Together, these species form the backbone of Orgatek's regenerative forestry efforts, rebuilding ecosystems that not only capture carbon but also sustain communities for generations to come.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 