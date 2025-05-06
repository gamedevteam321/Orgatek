"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { AlternatingSection } from '@/components/ui/alternating-section';

export default function WhatWeCreate() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/create-hero.png"
        title={
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <h2 className="block text-4xl md:text-4xl lg:text-6xl">What We Create</h2>
          </div>
        }
        subtitle="Built from Soil, Made to Matter"
        titleClassName="text-2xl md:text-4xl lg:text-6xl"
        subtitleClassName="text-2xl md:text-xl lg:text-2xl text-white/90 mb-6 text-center md:text-left"
      />

      {/* Text Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left font-[var(--font-poppins)]">
              We grow short rotation, high yield timber on regenerated lands to replace deforestation-linked wood, convert forestry biomass into high-quality biochar for permanent soil carbon storage, and generate certified carbon credits rooted in measurable, durable climate impact. Our vertically integrated model transforms degraded land into climate assets — producing nature-based solutions that are traceable, verified, and built to scale.
            </p>
            <p className="text-lg md:text-xl text-black font-regular text-center md:text-left font-[var(--font-poppins)]">
            Our vertically integrated model turns degraded land into productive natural capital — producing nature-based solutions that are traceable, verified, and built to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-[#eff1f1] py-16 md:py-24">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <AlternatingSection
              title="Sustainable Timber"
              description="Sustainable timber harvested from our carefully managed forests. Our timber products are certified organic and sourced from short-rotation, high-yield tree species that are specifically selected for their environmental benefits and commercial viability."
              image="/images/timber.png"
              buttonText="Read More"
              imagePosition="left"
              pagePath="/sustainable-timber"
              titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
              descriptionClassName="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]"
              buttonStyle="solid-green"
            />

            <AlternatingSection
              title="Biochar"
              description="High-quality biochar produced through our proprietary pyrolysis process. This carbon-rich material enhances soil fertility, improves water retention, and sequesters carbon for centuries, making it an essential tool for sustainable agriculture and carbon offset initiatives."
              image="/images/biochar.png"
              buttonText="Read More"
              imagePosition="right"
              pagePath="/biochar"
              titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
              descriptionClassName="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]"
              buttonStyle="solid-green"
            />

            <AlternatingSection
              title="Carbon Credits"
              description="Verifiable carbon credits generated through our sustainable forestry and biochar production processes. These credits help organizations meet their emission reduction targets while supporting environmental restoration and sustainable development."
              image="/images/carbon-credits.png"
              buttonText="Read More"
              imagePosition="left"
              pagePath="/carbon-credits"
              titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
              descriptionClassName="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]"
              buttonStyle="solid-green"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 