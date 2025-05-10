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
        subtitle="Nature Based Products With Verified Climate Impact"
        titleClassName="text-2xl md:text-4xl lg:text-6xl"
        subtitleClassName="text-2xl md:text-xl lg:text-2xl text-white/90 mb-6 text-center md:text-left"
      />

      {/* Text Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left font-[var(--font-poppins)]">
            Our regenerative process yields high-quality, sustainable outputs that address climate and resource challenges.
            </p>
            <p className="text-lg md:text-xl text-black font-regular text-center md:text-left font-[var(--font-poppins)]">
            We plant short-rotation, high-yield trees that produce sustainable timber to replace deforestation-linked wood, biochar from on-site biomass for permanent soil carbon storage, and verified carbon credits rooted in measurable, durable impact.
            <br/> <br/>These nature-based products are traceable, verifiable, and built to scale — delivering tangible value while supporting resilient landscapes and rural communities.
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
              description="We recognize that rising global timber demand is a major driver of deforestation and biodiversity loss. We address this challenge by cultivating high-yield, fast-growing tree species on regenerated lands — supplying sustainable timber while reducing the extraction pressure on natural forests."
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
              description="We produce high-quality biochar from sustainably harvested forestry biomass through controlled, high-temperature pyrolysis. Our process transforms residual biomass into a stable, carbon-rich material that locks atmospheric carbon into a solid form for centuries — delivering measurable, verified CO₂ removal aligned with global certification standards, methodologies and verification."
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
              description="We generate high-quality, verified afforestation credits through carbon sequestration in fast-growing, sustainably managed forests — and carbon removal credits by locking carbon into soils through high-integrity biochar application."
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