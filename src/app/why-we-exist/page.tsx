"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import ShareDegradedLandChart from '@/components/charts/ShareDegradedLandChart';
import Image from 'next/image';
import { useState } from 'react';
import { SolutionPanel } from '@/components/ui/solution-panel';
import dynamic from 'next/dynamic';

const GetInvolved = dynamic(() => import('@/app/get-involved/page'), {
  loading: () => <div className="animate-pulse">Loading...</div>
});

export default function WhyWeDoIt() {
  const [isInvestmentPanelOpen, setIsInvestmentPanelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetInvolvedClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsInvestmentPanelOpen(true);
    }, 500);
  };

  const handleInvestmentPanelClose = () => {
    setIsInvestmentPanelOpen(false);
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/hero-why.png"
        title={
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <h2 className="block text-4xl md:text-4xl lg:text-6xl">Why We Exist</h2>
          </div>
        }
        subtitle=" Breaking the Degraded Land–Food Security–Deforestation Cycle"
        titleClassName="text-2xl md:text-4xl lg:text-6xl"
        subtitleClassName="text-2xl md:text-xl lg:text-2xl text-white/90 mb-6 text-center md:text-left"
        subtitleBelowImage={false}
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-[#eff1f1]">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left">
              Soil is the foundation of life on Earth. It sustains 95% of global food production - making access to fertile soil essential to feed the growing global population, supports nearly all terrestrial biodiversity, stores & clean our water, filters pollutants, does flood regulation, nutrient cycling, waste decomposition and stores more carbon than all vegetation combined.
            </p>
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left">
              Yet this vital, finite, non renewable and irreplaceable resource on a human timescale is in crisis. Over one-third of the world's soils are already degraded, and we are losing fertile land faster than it can recover.
            </p>
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left">
              Every year, more than 12 million hectares of agricultural land degrade due to erosion, nutrient depletion, salinisation, and intensive land use. At the same time, over 10 million hectares of forests are cleared — much of it to replace lost farmland. This creates a compounding cycle: degraded soils reduce yields, pushing agriculture into forests, which further accelerates deforestation and long-term soil collapse.
            </p>
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left">
              Meanwhile, over 2 billion hectares of land lie degraded and underutilized — abandoned due to exhaustion, poor management, or ecological collapse. We see this not as a liability, but as a strategic opportunity and untapped assets.
            </p>
            <p className="text-lg md:text-xl text-black font-regular text-center md:text-left">
              We break this cycle at the root — regenerating degraded soils through sustainable forestry supported by biochar, proprietary organic inputs and processes. We rebuild soil fertility, restore carbon, and create future agricultural potential at scale that is productive, resilient, and ready for long-term use.
            </p>
          </div>
        </div>
      </section>

      {/* Hidden Costs Section */}
      <section className="py-16 md:py-16 bg-white">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-8 text-center md:text-left font-[var(--font-montserrat)]">
              The Hidden Costs of Land Degradation
            </h2>
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left">
              The hidden costs of Land degradation — environmental, health, social, and economic often go unnoticed, but True Cost Accounting reveals the real impact on ecosystems and communities. It is estimated that the global cost of lost ecosystem services due to degradation may be even upto $10.6 trillion USD per year.
            </p>
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left">
              These lost ecosystem services include water filtration and retention, flood regulation, nutrient cycling, and waste decomposition. As soils degrade, their ability to perform these essential functions diminishes, leading to increased vulnerability to floods, reduced water quality, and declining agricultural productivity.
            </p>
            <p className="text-lg md:text-xl mb-8 text-black font-regular text-center md:text-left">
              Degraded land also poses serious risks to human health. As productivity drops and water sources dry up, communities face increased food insecurity and malnutrition. This cycle of loss is not isolated — it affects every continent, driven by human activities such as deforestation, poor agricultural practices, and urban expansion.
            </p>
            <p className="text-lg md:text-xl text-black font-regular text-center md:text-left">
              Reversing land degradation is not just an environmental goal — it is a global imperative to secure ecosystems, sustain food systems, and support human well-being.
            </p>

            {/* Stats/Info Block - Single Row */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Left Stat */}
              <div className="bg-[#f5f5f5] flex flex-col items-center justify-center p-8 rounded">
                <span className="text-5xl font-bold text-[#f9a825] leading-none">1.56</span>
                <span className="text-xl font-semibold text-[#f9a825] mb-2">billion ha</span>
                <span className="text-base text-gray-700 text-center">of degraded land reported</span>
              </div>

              {/* Land Degradation Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Land degradation is increasing at a steady rate</h3>
                <p className="text-base md:text-lg text-black mb-2">15.4 % of the reported land is degraded, an increase of 4 % in four years.</p>
                
              </div>

              {/* Right Stat */}
              <div className="bg-[#f5f5f5] flex flex-col items-center justify-center p-8 rounded">
                <span className="text-5xl font-bold text-[#f9a825] leading-none">15</span>
                <span className="text-xl font-semibold text-[#f9a825] mb-2">countries</span>
                <span className="text-base text-gray-700 text-center">severely affected by drought</span>
              </div>

              {/* Drought Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Drought's hazard is far reaching</h3>
                <p className="text-base md:text-lg text-black mb-2">Out of 98 countries affected by drought, 15 have experienced severe or extreme drought over some or all of their territory.</p>
                
              </div>
            </div>
            <p className="text-lg md:text-xl mt-8 text-black font-regular text-center md:text-left">
              Between 2015 and 2019, at least 100 million hectares of healthy and productive land were degraded every year, affecting food and water security globally. The loss is equivalent to twice the size of Greenland, impacting the lives of 1.3 billion people, who are estimated to be directly exposed to land degradation.
            </p>

            {/* Full-width images */}
            <div className="w-full mt-8 space-y-8">
              <Image
                src="/images/land-degrade-image.png"
                alt="Degraded land aerial view"
                width={1920}
                height={600}
                className="w-full h-auto object-cover rounded"
                priority={false}
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <ContentSection
        title="The world has lost one-third of its forest, but an end of deforestation is possible"
        description="Over the last 10,000 years the world has lost one-third of its forests. An area twice the size of the United States. Half occurred in the last century."
        image={
          <ShareDegradedLandChart />
        }
        imageLeft={false}
        bgColor="white"
        className="px-[10px] md:px-[50px] pb-8 md:pb-12 py-16 md:py-16"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      

      {/* Global Forest Loss since Ice Age */}
      <ContentSection
        className="px-[10px] md:px-[50px] py-8 md:py-12"
      >
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <Image 
              src="/images/Global-forest-loss-since-ice-age.png"
              alt="Global Forest Loss since Ice Age"
              width={1200}
              height={500}
              className="object-contain w-full h-[250px] md:h-[500px]"
            />
            <p className="text-lg md:text-xl text-black font-regular text-center md:text-left py-4"><p>Almost 10 M HA of Forests are completely destroyed and occupied every year for Agriculture & Forestry Products Globally
            </p></p>
          </div>
        </div>
      </ContentSection>

      {/* Global Forest Loss Impact */}
      <ContentSection
        className="px-[10px] md:px-[50px] py-8 md:py-12"
      >
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <Image 
              src="/images/Forest-loss-by-driver-and-region.png"
              alt="Global Forest Loss Impact"
              width={1200}
              height={500}
              className="object-contain w-full h-[250px] md:h-[700px]"
            />
          </div>
          
        </div>
      </ContentSection>

      {/* Healthy forests Section */}
      <ContentSection
        title="Healthy forests enable humanity to thrive"
        description={<div className="text-center md:text-left">
          <p className="text-lg md:text-xl font-semibold mb-8">Forests: A natural solution for climate change</p>
          <p className="text-lg md:text-xl mb-8">Climate change is a defining challenge of our time. One of the most effective ways to combat climate change is with healthy, resilient forests.</p>
          <p className="text-lg md:text-xl mb-8">Forests help regulate our climate by absorbing and retaining carbon dioxide from the atmosphere. The healthier the forest, the more carbon it can capture and store.</p>
          <p className="text-lg md:text-xl">But today, the destruction of forests accounts for at least 10 per cent of annual carbon emissions. When forests are responsibly managed so biodiversity is maintained, the plants and trees within them can extract more carbon dioxide from the atmosphere and slow climate change.</p>
        </div>}
        image="/images/forest.png"
        imageLeft={false}
        bgColor="cream"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      {/* Forests support earth's biodiversity Section */}
      <ContentSection
        title="Forests support earth's biodiversity"
        description={<div className="text-center md:text-left">
          <p className="text-lg md:text-xl mb-8">Forests are incredibly diverse ecosystems, hosting the majority of terrestrial plant and animal species. They represent a beautifully balanced system where soil, plants, and animals all depend on each other to thrive.</p>
          <p className="text-lg md:text-xl mb-8">But why does this matter for us? First, biodiverse ecosystems provide the vital materials we need for food, shelter, clothing, and more. Biodiversity also fosters resilience. Healthy, rich ecosystems make earth habitable for humans. When forests disappear, these life-supporting systems begin to fail, putting humans at significant risk.</p>
          <p className="text-lg md:text-xl">According to the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES), biodiversity is now declining faster than ever before.</p>
        </div>}
        image="/images/biodiversity.png"
        imageLeft={true}
        bgColor="white"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      {/*Forests are essential Section */}
      <ContentSection
        title="Forests are essential for people and communities"
        description={<div className="text-center md:text-left">
          <p className="text-lg md:text-xl">Forests support human life all over the world. They provide us with clean air, drinking water, and countless products we rely on every day. And for 300 million people, forests also provide a home. The communities living in and around forests depend on them for food, fuel, medicine, and their livelihoods. In turn, they make stewardship a part of everything they do.</p>
        </div>}
        image="/images/communities.png"
        imageLeft={false}
        bgColor="cream"
        className="px-[10px] md:px-[50px]"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      {/* Join Our Mission Section */}
      <section className="pt-4 pb-16 mt-4 bg-[#1B5E20] relative overflow-hidden">
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
              <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white text-center md:text-left">Join Our Mission</h2>
              <p className="text-lg md:text-xl text-white/90 mb-4 text-center md:text-left">
                Whether you're an investor, partner, or supporter, there are many ways to get involved with our work at Orgatek.
              </p>
            </div>
            <div className="pl-0 md:pl-8 flex items-center justify-center md:justify-start">
              <button 
                className="inline-flex items-center bg-white text-[#1B5E20] px-8 py-3 hover:bg-opacity-90 transition-colors relative group"
                onClick={handleGetInvolvedClick}
              >
                <span className={isLoading ? 'opacity-0' : ''}>Get involved</span>
                {!isLoading && (
                  <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#1B5E20]"></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Panel */}
      <SolutionPanel
        isOpen={isInvestmentPanelOpen}
        onClose={handleInvestmentPanelClose}
        title="Get Involved"
        description="Join us in our mission to transform wastelands into thriving forests while generating sustainable returns. Our investment opportunities combine environmental impact with financial growth, offering a unique pathway to participate in the future of regenerative forestry."
        image="/images/get-involved-hero.png"
        customContent={<GetInvolved isInPanel={true} />}
      />

      <Footer />
    </main>
  );
} 