"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useState } from 'react';
import Link from 'next/link';

import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { FeatureCard } from '@/components/ui/feature-card';
import { PartnersSection } from '@/components/sections/partners-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import Image from 'next/image';

import { ExpandableText } from '@/components/ui/ExpandableText';
import { ProcessCard } from '@/components/ui/ProcessCard';
import SupplyChainSection from '@/components/ui/SupplyChainSection';
import { SolutionPanel } from '@/components/ui/solution-panel';

export default function Home() {
  // Mock data for the partners section
  const partners = [
    { name: 'Orgatek', logo: '/logo/logo1.png', width: 100, height: 100 },
    { name: 'Orgatek', logo: '/logo/logo1.png', width: 100, height: 100 },
    { name: 'Orgatek', logo: '/logo/logo1.png', width: 100, height: 100 },
    { name: 'Orgatek', logo: '/logo/logo1.png', width: 100, height: 100 },
    { name: 'Orgatek', logo: '/logo/logo1.png', width: 100, height: 100 },
  ];

  const [isImpactPanelOpen, setIsImpactPanelOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProductClick = (product: string) => {
    setSelectedProduct(product);
    setIsImpactPanelOpen(false);
  };

  const handleClosePanel = () => {
    setSelectedProduct(null);
  };

  const handleImpactPanelClose = () => {
    setIsImpactPanelOpen(false);
    setSelectedProduct(null);
  };

  // Add loading state handler
  const handleGetInvolvedClick = () => {
    setIsLoading(true);
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/hero-main.png"
        title={
          <div className="space-y-4">
            <p className="block">Transforming Wastelands.</p>
            <p className="block">Growing Forests.</p>
            <p className="block">Reviving Nature.</p>
          </div>
        }
        subtitle="We transform degraded landscapes into thriving organic forests — producing sustainable timber, biochar, and certified carbon credits for a regenerative future."
        
      />
      {/* Why Forests Matter Section */}
      <ContentSection
        title="Why Forests Matter"
        description="Forests are vital ecosystems that play a crucial role in carbon sequestration, biodiversity preservation, and maintaining ecological balance. Our sustainable forestry practices ensure these benefits while providing valuable resources for future generations."
        image="/images/what-hero.jpg"
        imageLeft={false}
        bgColor="cream" 
      />


{/* Our Process Section */}
<ContentSection
        title="Why We Exist"
        description={<><p>Each year, over 10 million hectares of natural forest are lost globally  due to unsustainable timber harvesting and agricultural expansion, putting immense pressure on ecosystems, accelerating climate change, and destroying vital biodiversity.</p><br />
        <p>
        Meanwhile, 2 billion hectares of wastelands—barren, unproductive, and ecologically poor—lie abandoned.
        </p></>}
        buttonText="Read More"
        buttonLink="/why-we-exist"
        openLink={true}
        bgImage="/images/why-we-exist-bg.png"
      >
        
      </ContentSection>


      {/* How We Transform Wastelands Section */}
    <ContentSection
        title="How we Regenerate Land"
        description="We transform wastelands into thriving ecosystems through a symbiotic process of planting short-rotation high-yield trees and enriching the soil with Biochar made from their waste biomass. This combination enhances soil fertility, improves water retention, accelerates healthy tree growth, and creates high-quality, traceable, and verified carbon sinks."
        bgColor="cream"
      >
        <div className="">
          {/* Horizontal scrollable slider */}
          <div className="flex overflow-x-auto pb-6 space-x-16 scrollbar-hide">
            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Forest Establishment"
                description="India has over 55 million hectares classified as wastelands, with nearly 24 million hectares identified as having viable forestry potential. At Orgatek, every project begins with rigorous site and connected short-rotation, high yield tree species selection, based on detailed soil analysis, climatic assessment, water resource evaluation and market proximity. We plant high-yielding, short-rotation species such as Eucalyptus, Poplar, Acacia, Bamboo, Casuarina, and Gmelina Arborea, selected for their adaptability to local conditions and ability to deliver maximum environmental impact."
                image="/images/forest-establishment.png"
                pagePath="/forest-establishment"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Forest Management"
                description="Efficient, professional forest management is at the heart of building high-performing regenerative ecosystems. Once planted, our forests are carefully managed through continuous field scouting, advanced digital monitoring, and skilled forestry operations and proactive interventions to ensure that our estates grow vigorously, remain healthy, and maximize carbon sequestration."
                image="/images/forest-management.jpg"
                pagePath="/forest-management"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Sustainable Harvesting"
                description="We practice strategic rotational cycles by planting and harvesting in carefully managed phases — establishing new areas each year while earlier phases mature. This ensures our forests remain vibrant and continuously productive, keeping large sections of the landscape actively growing at all times, sustaining carbon sequestration, preserving soil health, and maintaining lush, living ecosystems, while avoiding periods of barrenness or ecological disruption."
                image="/images/sustainable-harvesting.png"
                pagePath="/sustainable-harvesting"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Proprietary Organic Inputs"
                description="Restoring wastelands demands a soil-first approach that transcends traditional tree planting. Our in-house manufactured proprietary organic inputs, developed through years of research and crafted with precise quality control, offer unmatched flexibility to customize solutions for specific conditions to support robust tree growth and long term soil fertility."
                image="/images/proprietary-organic-inputs.png"
                pagePath="/unique-organic-inputs"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Biochar Enrichment"
                description="At Orgatek, we convert forestry biomass into high-quality biochar through on-site, high-temperature pyrolysis — permanently removing carbon while enriching degraded soils."
                image="/images/biochar-enrichment.png"
                pagePath="/biochar-enrichment"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Digital Monitoring & Verification"
                description="We integrate the best digital technologies including IoT sensors, computer vision and satellite imagery, to monitor and verify every aspect of forest establishment, management, harvesting and carbon sequestration. Our digital platform ensures real-time visibility, transparent reporting, and third-party validated impact across all our projects."
                image="/images/digital-monitoring.png"
                pagePath="/digital-monitoring"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>
          </div>
        </div>

        {/* Optional scroll indicator */}
        <div className="flex justify-center mt-6">
          <span className="text-sm text-gray-400">← Scroll to see more →</span>
        </div>
      </ContentSection>

      {/* Our Solutions Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-white px-4 md:px-8 lg:px-20">
        <div className="orgatek-container">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#38625c] mb-3 md:mb-4">What we Create</h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-12 max-w-full" >
          We grow short rotation, high yield  timber on regenerated lands to replace deforestation-linked wood, convert forestry biomass into high-quality biochar for permanent soil carbon storage, and generate certified carbon credits rooted in measurable, durable climate impact. Our vertically integrated model transforms degraded land into climate assets — producing nature-based solutions that are traceable, verified, and built to scale.
          </p>

          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 md:pb-6 scrollbar-hide">
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[400px] min-w-[280px]">
              <FeatureCard
                title="Timber"
                description="Sustainable timber production from our short rotation, high yielding forestry plantations."
                fullDescription="Our timber production focuses on sustainable harvesting of oil mallee trees, which are specifically chosen for their rapid growth and ability to regenerate from rootstock. This allows for multiple harvests from the same trees, maximizing both environmental and economic benefits. Our timber is used in various applications, from construction to specialized products, all while maintaining our commitment to carbon sequestration and environmental sustainability."
                image="/images/timber.png"
                buttonText="Learn More"
                pagePath="/timber"
              />
            </div>

            <div className="w-full md:w-[calc(50%-12px)] lg:w-[400px] min-w-[280px]">
              <FeatureCard
                title="Biochar"
                description="High Quality Biochar for Soil Application."
                fullDescription="Our biochar is produced through a carefully controlled pyrolysis process, creating a stable carbon-rich material with numerous applications. In agriculture, it improves soil health, increases water retention, and enhances crop yields. Industrial applications include filtration, construction materials, and carbon sequestration. Our biochar production process is certified and meets international quality standards."
                image="/images/biochar.png"
                buttonText="Learn More"
                pagePath="/biochar"
              />
            </div>

            <div className="w-full md:w-[calc(50%-12px)] lg:w-[400px] min-w-[280px]">
              <FeatureCard
                title="Carbon Credits"
                description="Verified aforestation and carbon removal credits from our plantations and Biochar produced from and applied into the same wastelands."
                fullDescription="Our carbon credit program generates both Australian Carbon Credit Units (ACCUs) and Carbon Offset Reduction Credits (CORCs). These credits are created through our sustainable forestry practices and biochar production. Companies can purchase these credits to offset their emissions and meet their environmental obligations. All our credits are independently verified and meet the highest standards of carbon accounting."
                image="/images/carbon-credits.png"
                buttonText="Learn More"
                pagePath="/carbon-credits"
              />
            </div>
          </div>

          {/* Optional scroll indicator */}
          <div className="flex justify-center mt-6">
            {/* <span className="text-sm text-gray-400">← Scroll to see more →</span> */}
          </div>
        </div>
      </section>


      {/* Our Impact Section */}
      <section className="overflow-hidden text-white bg-white">
        <div className="relative py-4 sm:py-4 md:py-12">
          {/* Banner image container */}
          <div className="absolute inset-0 w-full">
            <div className="relative h-[500px] md:h-[500px] w-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('/images/our-impact.jpg')`}}>
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="relative z-10 h-[500px] flex flex-col">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white py-6 md:py-12 px-4 md:pl-16">OUR IMPACT</h2>
            
            <div className="flex-1 px-4 md:pl-16 md:pr-12 lg:pr-24 max-w-8xl overflow-y-auto pb-20 md:pb-0">
              <p className="text-base md:text-lg mb-4 md:mb-6">
                At Orgatek, impact means delivering measurable change — for the climate, for ecosystems, and for communities.
              </p>
              <p className="text-base md:text-lg mb-4 md:mb-6">
                Through regenerative forestry, soil carbon innovation, and rural development initiatives, we transform degraded lands into high-performing natural assets.
              </p>
              <p className="text-base md:text-lg mb-6 md:mb-8">
                Our integrated model generates verifiable carbon removal, restores biodiversity, strengthens local economies, and builds sustainable futures — creating lasting environmental and social value at scale.
              </p>
              <div className="hidden md:block">
                <button
                  onClick={() => setIsImpactPanelOpen(true)}
                  className="text-white border border-white px-4 md:px-6 py-2 hover:bg-white hover:text-[#38625c] transition duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Mobile Learn More button */}
            <div className="md:hidden absolute bottom-8 left-4 z-20">
              <button
                onClick={() => setIsImpactPanelOpen(true)}
                className="text-white border border-white px-8 py-2 hover:bg-white hover:text-[#38625c] transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Panel */}
      <SolutionPanel
        isOpen={selectedProduct !== null}
        onClose={handleClosePanel}
        title={selectedProduct ? selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1) : ''}
        description=""
        image="/images/test.jpeg"
        pagePath={selectedProduct ? `/${selectedProduct}` : ''}
      />

      {/* Impact Panel */}
      <SolutionPanel
        isOpen={isImpactPanelOpen}
        onClose={handleImpactPanelClose}
        title="Our Impact"
        description="At Orgatek, we're committed to creating measurable positive change through our integrated approach to land regeneration and sustainable forestry. Our impact spans environmental restoration, carbon sequestration, biodiversity enhancement, and community development."
        image="/images/our-impact.jpg"
        pagePath="/our-impact"
      />

      {/* Supply Chain Section */}
      <SupplyChainSection />

      

      {/* Investment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="orgatek-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-r-0 md:border-r-2 border-gray-200 pr-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">INVESTMENT CAPABILITIES</h2>
              <p className="text-base md:text-lg opacity-90">
                We provide investors exposure to regional investment opportunities in real assets and natural capital.
              </p>
            </div>
            <div className="pl-0 md:pl-8">
              <p className="text-base md:text-lg opacity-90 mb-8">
                Our investment strategies support the role of forests as nature-based solutions, provide sustainable wood fibre for the growing circular bioeconomy, and contribute to the sustainable development of regional economies and rural communities.
              </p>
              <Link 
                href="/get-involved"
                className="inline-flex items-center bg-[#38625c] text-white px-8 py-3 rounded-lg hover:bg-[#2e4a3d] transition-colors relative"
                onClick={handleGetInvolvedClick}
              >
                <span className={isLoading ? 'opacity-0' : ''}>Explore Now</span>
                {!isLoading && (
                  <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
