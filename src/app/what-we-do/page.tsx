"use client";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { useState, useEffect } from 'react';

export default function WhatWeDo() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/what-hero.jpg"
        title={
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <h2 className="block text-4xl md:text-4xl lg:text-6xl">What We Do</h2>
          </div>
        }
        subtitle="Regenerate Soils to Secure Land, Food, and Climate"
        titleClassName="text-2xl md:text-4xl lg:text-6xl"
        subtitleClassName="text-2xl md:text-xl lg:text-2xl text-white/90 mb-6 text-center md:text-left"
        subtitleBelowImage={false}
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-[#eff1f1]">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left mb-4 font-[var(--font-poppins)]">
            We transform wastelands into thriving ecosystems, fertile soils, and productive natural capital — unlocking long-term agricultural potential through a fully integrated approach. From seedling production and forest management to proprietary inputs, biochar application, digital transparency, and sustainable harvesting, we ensure that degraded lands can once again support future food production and economic value.
            </p>
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left font-[var(--font-poppins)]">
            This system rebuilds soil fertility, improves water retention, accelerates healthy tree growth, and creates high-quality, traceable, and verified carbon sinks — laying the foundation for sustainable agriculture and long term land productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Production Cycle Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="orgatek-container px-[10px] md:px-[50px]">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 h-full">
              <div className="h-full">
                <img 
                  src="/images/flowchart.png" 
                  alt="Production cycle process" 
                  className="w-full h-[100%] object-cover rounded-lg"
                  style={{ minHeight: '500px' }}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-8 text-center md:text-left font-[var(--font-montserrat)]">The Production Cycle</h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-grey-700  leading-relaxed text-center md:text-left font-[var(--font-poppins)]">
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
        description={
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)]">
            India has over 55 million hectares classified as wastelands, with nearly 24 million hectares identified as having viable forestry potential. Every Orgatek project begins with rigorous site selection and matching of short-rotation, high-yield tree species — based on detailed soil analysis, climatic conditions, water resource evaluation, and market proximity.
            </p>
          </div>
        }
        image="/images/forest-establishment.png"
        imageLeft={false}
        bgColor="cream"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
        buttonText="Read More"
        buttonStyle="solid-green"
        openLink={false}
        pagePath="/forest-establishment"
      />

      {/* Forest Management Section */}
      <ContentSection
        title="Forest Management"
        description={
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)]">
            Efficient, professional forest management is at the heart of building high-performing regenerative ecosystems.
            </p>
            <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)]">
            <br/>Once planted, our forests are carefully managed through continuous field scouting, advanced digital monitoring, and skilled forestry operations and proactive interventions  to ensure that our estates grow vigorously, remain healthy, and maximize carbon sequestration.
            </p>
          </div>
        }
        image="/images/forest-management.jpg"
        imageLeft={true}
        bgColor="white"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
        buttonText="Read More"
        buttonStyle="solid-green"
        openLink={false}
        pagePath="/forest-management"
      />

      {/* Sustainable Harvesting Section */}
      <ContentSection
        title="Sustainable Harvesting"
        description={
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)]">
              We practice strategic rotational cycles by planting and harvesting in carefully managed phases — establishing new areas each year while earlier phases mature. This ensures our forests remain vibrant and continuously productive, keeping large sections of the landscape actively growing at all times, sustaining carbon sequestration, preserving soil health, and maintaining lush, living ecosystems, while avoiding periods of barrenness or ecological disruption.
            </p>
          </div>
        }
        image="/images/sustainable-harvesting.png"
        imageLeft={false}
        bgColor="cream"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
        buttonText="Read More"
        buttonStyle="solid-green"
        openLink={false}
        pagePath="/sustainable-harvesting"
      />

      {/* Proprietary Organic Inputs Section */}
      <ContentSection
        title="Proprietary Organic Inputs"
        description={
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)]">
            Restoring wastelands demands a soil-first approach that transcends traditional tree planting. Unlike conventional forestry's dependence on chemical fertilizers, our proprietary organic inputs, developed through years of research, drive natural regeneration. These solutions enhance soil health, sequester carbon, and boost biodiversity, transforming barren landscapes into thriving, resilient forests.
            </p>
          </div>
        }
        image="/images/proprietary-organic-inputs.png"
        imageLeft={true}
        bgColor="white"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
        buttonText="Read More"
        buttonStyle="solid-green"
        openLink={false}
        pagePath="/unique-organic-inputs"
      />

      {/* Biochar Enrichment Section */}
      <ContentSection
        title="Biochar Enrichment"
        description={
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)]">
            Biochar soil application  is an integral part of our regenerative forestry model — enhancing soil health, improving ecosystem resilience, and delivering verified, high-durability carbon removal.
            <br/> <br/>We establish on-site biochar production facilities at each forestry project, converting residual biomass of our projects directly into high-quality biochar using high-temperature pyrolysis processes.
            </p>
          </div>
        }
        image="/images/biochar-enrichment.png"
        imageLeft={false}
        bgColor="cream"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
        buttonText="Read More"
        buttonStyle="solid-green"
        openLink={false}
        pagePath="/biochar-enrichment"
      />

      {/* Digital Monitoring Section */}
      <ContentSection
        title="Digital Monitoring & Verification"
        description={
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 font-[var(--font-poppins)]">
            Rigorous digital monitoring and third-party verification are integral to every stage of our regenerative forestry model.
            <br/> <br/>We combine ground-level expertise with advanced technologies to track, measure, and validate carbon sequestration, soil regeneration, and biodiversity recovery with precision and transparency.

            </p>
          </div>
        }
        image="/images/digital-monitoring.png"
        imageLeft={true}
        bgColor="white"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
        buttonText="Read More"
        buttonStyle="solid-green"
        openLink={false}
        pagePath="/digital-monitoring"
      />

      <Footer />
    </main>
  );
}
