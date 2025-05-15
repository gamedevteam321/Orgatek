"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { FeatureCard } from '@/components/ui/feature-card';
import { PartnersSection } from '@/components/sections/partners-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { ExpandableText } from '@/components/ui/ExpandableText';
import { ProcessCard } from '@/components/ui/ProcessCard';
import SupplyChainSection from '@/components/ui/SupplyChainSection';
import { SolutionPanel } from '@/components/ui/solution-panel';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const GetInvolved = dynamic(() => import('./get-involved/page'), {
  loading: () => <div className="animate-pulse">Loading...</div>
});

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
  const [isInvestmentPanelOpen, setIsInvestmentPanelOpen] = useState(false);

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

  const processSteps = [
    {
      text: "Soil is essential for life and a non renewable resource on a human timescale"
    },
    {
      text: "95% of the food we eat comes from the soil. (FAO, 2019)"
    },
    {
      text: "Soil is home to over a quarter of all living species on Earth. (European Union, 2010)"
    },
    {
      text: "50-70% of the carbon stored in farm soils have already been lost. (UN Environment, 2019)"
    },
    {
      text: "By 2050, 90% of Earth's soils could be degraded, unless we act now. (UNCCD, 2020)"
    },
    {
      text: "It is estimated that the total actual cost of global soil degradation is up to US$ 10.6 trillion every year. (ELD Initiative, 2015)"
    },
    {
      text: "Since the dawn of agriculture, more CO2 has been released from soil and the clearing of forests for farms than from all the world's industries in the last 250 years. (UN Environment, 2019)"
    },
    {
      text: "A study on nutrients in food concluded that we would have to eat 8 oranges to get the same amount of Vitamin A as our grandparents did with one orange, because soil depletion has caused massive drops in nutrient levels in food. (Scientific American, 2011)"
    },
    {
      text: "Fruits, vegetables, and grains like wheat have half the micronutrients they used to. If it's not in the soil, it's not in our food. (TIME, 2012)"
    },
    {
      text: "12 million hectares of topsoil are lost every year across the world. That's almost the size of the entire nation of Greece. (FAO, 2015)"
    },
    {
      text: "20 M HA of Forests are lost every year"
    },
    {
      text: "Population growth, and food and water scarcity could cause over 1 billion to migrate to other regions and countries by 2050. (Reuters, 2020)"
    },
    {
      text: "Revitalising soil can reduce humanity's current annual Greenhouse Gas emissions by 25-35%, according to UN estimates. (UN Environment, 2019)"
    }
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/hero-main.png"
        title={
          <div className="space-y-2 md:space-y-4 text-center md:text-left font-[var(--font-montserrat)]">
            <h2 className="block text-4xl md:text-4xl lg:text-6xl">Regenerating Wastelands</h2>
            <h2 className="block text-4xl md:text-4xl lg:text-6xl">Building Forests</h2>
            <h2 className="block text-4xl md:text-4xl lg:text-6xl">Empowering Communities</h2>
          </div>
        }
        subtitle="We transform wastelands into thriving ecosystems through sustainable forestry — regenerating soils and producing sustainable timber, biochar, verified carbon credits, and rural value, while restoring long-term agricultural potential for a resilient and sustainable future."
        subtitleBelowImage={true}
        subtitleClassName="text-2xl md:text-2xl lg:text-2xl text-black font-regular mb-4 md:mb-8 max-w-full text-center md:text-center mx-auto md:mx-0 font-[var(--font-poppins)]"
      />
      {/* Why Forests Matter Section */}
      <ContentSection
        title="What is Sustainable Forestry"
        description="Sustainable forestry is the practice of managing forests to meet present needs—such as biomass and carbon capture—while preserving their ecological, economic, and social functions for future generations. This approach helps maintain biodiversity, supports rural livelihoods, and mitigates climate change by ensuring that forests continue to function as vital carbon sinks. By balancing resource use with ecological restoration, sustainable forestry protects soil health, improves water retention, and builds resilience against climate impacts."
        image="/images/what-hero.jpg"
        imageLeft={false}
        bgColor="cream"
        className="px-[10px] md:px-[50px]"
        imageHeight="h-[200px] md:h-[500px]"
        imageObjectFit="cover"
        titleClassName="text-2  xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      />

      {/* Why We Exist Section */}
      <ContentSection
        title=""
        description={<>
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left">Why We Exist</h2>
            <div className=" text-white text-center md:text-left">
              <p className="text-lg md:text-xl mb-8 font-regular font-[var(--font-poppins)]">
              Soil is the foundation of life on Earth. It sustains 95% of global food production - making access to fertile soil essential to feed the growing global population. Yet this vital, finite, non renewable and irreplaceable resource on a human timescale is in crisis. Over one-third of the world's soils are already degraded, and we are losing fertile land faster than it can recover.
              </p>
              <p className="text-lg md:text-xl font-regular mb-8 font-[var(--font-poppins)]">
              Every year, more than 12 million hectares of agricultural land degrade and over 10 million hectares of forests are cleared — much of it to replace lost farmland.
              </p>
              <p className="text-lg md:text-xl font-regular mb-8 font-[var(--font-poppins)]">
              Meanwhile, over 2 billion hectares of land lie degraded and underutilized — abandoned due to exhaustion, poor management, or ecological collapse.
              </p>
              <p className="text-lg md:text-xl font-regular mb-8 font-[var(--font-poppins)]">
              We see this not as a liability, but as a strategic opportunity and untapped assets
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Link href="/why-we-exist" className="inline-block bg-[#1B5E20] text-white px-8 py-3 hover:bg-[#1B5E20]/90 transition-colors">
                  Read More
                </Link>
              </div>
            </div>
        </>}
        bgImage="/images/why-we-exist-bg.png"
        className="py-16 md:py-24 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-black/80 before:z-0"
      />

      {/* How We Transform Wastelands Section */}
    <ContentSection
        title="What We Do"
        description="We transform wastelands into thriving ecosystems, fertile soils, and productive natural capital — unlocking long-term agricultural potential through a fully integrated approach. This system rebuilds soil fertility, improves water retention, accelerates healthy tree growth, and creates high-quality, traceable, and verified carbon sinks — laying the foundation for sustainable agriculture and long term land productivity."
        bgColor="cream"
        className="text-center md:text-left py-8 md:py-12"
        titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
      >
        <div className="mt-6 md:mt-12">
          {/* Horizontal scrollable slider */}
          <div className="flex overflow-x-auto pb-8 space-x-16 md:space-x-12 scrollbar-hide">
            <div className="flex-shrink-0 w-[280px] md:w-[300px] md:min-w-[300px] md:max-w-[300px] snap-center">
              <ProcessCard
                title="Forest Establishment"
                description="Every Orgatek project begins with rigorous site selection and matching of short-rotation, high-yield tree species — based on detailed soil analysis, climatic conditions, water resource evaluation, and market proximity."
                image="/images/forest-establishment.png"
                pagePath="/forest-establishment"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 w-[280px] md:w-[300px] md:min-w-[300px] md:max-w-[300px] snap-center">
              <ProcessCard
                title="Forest Management"
                description="Efficient, professional forest management is at the heart of building high-performing regenerative ecosystems. Once planted, our forests are carefully managed through continuous field scouting, advanced digital monitoring, and skilled forestry operations and proactive interventions to ensure that our estates grow vigorously, remain healthy, and maximize carbon sequestration."
                image="/images/forest-management.jpg"
                pagePath="/forest-management"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 w-[280px] md:w-[300px] md:min-w-[300px] md:max-w-[300px] snap-center">
              <ProcessCard
                title="Sustainable Harvesting"
                description="We practice strategic rotational cycles by planting and harvesting in carefully managed phases — establishing new areas each year while earlier phases mature. This ensures our forests remain vibrant and continuously productive, keeping large sections of the landscape actively growing at all times, sustaining carbon sequestration, preserving soil health, and maintaining lush, living ecosystems, while avoiding periods of barrenness or ecological disruption."
                image="/images/sustainable-harvesting.png"
                pagePath="/sustainable-harvesting"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 w-[280px] md:w-[300px] md:min-w-[300px] md:max-w-[300px] snap-center">
              <ProcessCard
                title="Proprietary Organic Inputs"
                description="Our in-house manufactured proprietary organic inputs, developed through years of research and crafted with precise quality control, offer unmatched flexibility to customize solutions for specific conditions to support robust tree growth and long term soil fertility."
                image="/images/proprietary-organic-inputs.png"
                pagePath="/unique-organic-inputs"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 w-[280px] md:w-[300px] md:min-w-[300px] md:max-w-[300px] snap-center">
              <ProcessCard
                title="Biochar Enrichment"
                description="Biochar soil application  is an integral part of our regenerative forestry model — enhancing soil health, improving ecosystem resilience, and delivering verified, high-durability carbon removal."
                image="/images/biochar-enrichment.png"
                pagePath="/biochar-enrichment"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 w-[280px] md:w-[300px] md:min-w-[300px] md:max-w-[300px] snap-center">
              <ProcessCard
                title="Digital Monitoring & Verification"
                description="Rigorous digital monitoring and third-party verification are integral to every stage of our regenerative forestry model..."
                image="/images/digital-monitoring.png"
                pagePath="/digital-monitoring"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="mt-6 text-sm text-gray-500 text-center md:hidden px-[10px]">
            Scroll to see more →
          </div>
        </div>
      </ContentSection>

      {/* Our Solutions Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-white">
        <div className="orgatek-container">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left">What We Create</h2>
          <p className="text-base md:text-lg text-grey-700 mb-4 max-w-full font-[var(--font-poppins)] text-center md:text-left" >
          We grow short-rotation, high-yield trees that produce sustainable timber to replace deforestation-linked wood, biochar from on-site biomass for permanent soil carbon storage, and verified carbon credits rooted in measurable, durable impact.
          </p>
          <p className="text-base md:text-lg text-grey-700 mb-6 max-w-full font-[var(--font-poppins)] text-center md:text-left" > These nature-based products are traceable, verifiable, and built to scale — delivering tangible value while supporting resilient landscapes and rural communities.</p>

          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-center gap-6 md:gap-8">
            <div className="w-full md:w-[calc(50%-16px)] lg:w-[400px]">
              <FeatureCard
                title="Timber"
                description="Sustainable timber production from our short rotation, high yielding forestry plantations."
                fullDescription="Our timber production focuses on sustainable harvesting of oil mallee trees, which are specifically chosen for their rapid growth and ability to regenerate from rootstock. This allows for multiple harvests from the same trees, maximizing both environmental and economic benefits. Our timber is used in various applications, from construction to specialized products, all while maintaining our commitment to carbon sequestration and environmental sustainability."
                image="/images/timber.png"
                buttonText="Learn More"
                pagePath="/timber"
              />
            </div>

            <div className="w-full md:w-[calc(50%-16px)] lg:w-[400px]">
              <FeatureCard
                title="Biochar"
                description="High Quality Biochar for Soil Application."
                fullDescription="Our biochar is produced through a carefully controlled pyrolysis process, creating a stable carbon-rich material with numerous applications. In agriculture, it improves soil health, increases water retention, and enhances crop yields. Industrial applications include filtration, construction materials, and carbon sequestration. Our biochar production process is certified and meets international quality standards."
                image="/images/biochar.png"
                buttonText="Learn More"
                pagePath="/biochar"
              />
            </div>

            <div className="w-full md:w-[calc(50%-16px)] lg:w-[400px]">
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

      {/* Integrated Regenerative Model Section */}
      <section className="overflow-hidden">
        <ContentSection
          title="A Fully Integrated Regenerative Model"
          description={
            <>
              <p className="mb-4 text-center md:text-left font-[var(--font-poppins)]">
              Orgatek is fully integrated across the entire land regeneration cycle — from soil to seedling to supply chain.
              </p>
              <p className="mb-4 text-center md:text-left font-[var(--font-poppins)]">
              We develop and apply our own proprietary organic inputs, grow resilient saplings in our certified nurseries, and manage every phase of forest establishment on leased and partner lands. Our plantations are operated in rotational cycles to ensure consistent yield, strict quality control, and uninterrupted biomass availability.
              </p>
              <p className="text-center md:text-left font-[var(--font-poppins)]">
              With in-house logistics and delivery systems, we guarantee traceable, year-round supply of timber, biochar, and biomass — all from a controlled, regenerative platform built for scale.
              </p>
            </>
          }
          image="/images/flowchart.png"
          imageLeft={false}
          bgColor="cream"
          imageObjectFit="cover"
          imageHeight="h-96 md:h-[400px] lg:h-[500px]"
          className="text-center md:text-left"
          titleClassName="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left"
        />
      </section>

      {/* Our Impact Section */}
      <section className="overflow-hidden text-white bg-white">
        <div className="relative">
          {/* Banner image container */}
          <div className="absolute inset-0 w-full">
            <div className="relative h-[600px] md:h-[500px] w-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('/images/our-impact.jpg')`}}>
                <div className="absolute inset-0 bg-black opacity-80"></div>
              </div>
            </div>
          </div>

          <div className="relative z-10 h-[600px] md:h-[500px] flex flex-col justify-center">
            <div className="orgatek-container">
              <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left">Our Impact</h2>
              
              <div className="md:pr-12 lg:pr-24 max-w-8xl">
                <p className="text-base md:text-lg mb-6 text-white font-[var(--font-poppins)] text-center md:text-left">
                  <strong>For us, impact means delivering measurable change — through regenerative forestry, soil carbon systems, and rural value creation.</strong>
                </p>
                <p className="text-base md:text-lg mb-6 text-white font-[var(--font-poppins)] text-center md:text-left">
                We convert unutilized wastelands into high-performing natural assets through an integrated model that regenerates soils, delivers consistent biomass output, enables verified carbon removal, and creates long-term economic value for local communities.
                </p>
                <div className="flex justify-center md:justify-start mt-8">
                  <Link 
                    href="/our-impact" 
                    className="inline-block bg-[#1B5E20] text-white px-8 py-3 hover:bg-[#1B5E20]/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
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

      {/* Investment Panel */}
      <SolutionPanel
        isOpen={isInvestmentPanelOpen}
        onClose={handleInvestmentPanelClose}
        title="Get Involved"
        description="Join us in our mission to transform wastelands into thriving forests while generating sustainable returns. Our investment opportunities combine environmental impact with financial growth, offering a unique pathway to participate in the future of regenerative forestry."
        image="/images/get-involved-hero.png"
        customContent={<GetInvolved isInPanel={true} />}
      />

      {/* Investment Section */}
      <section className="pt-8 pb-16 bg-[#1B5E20] relative overflow-hidden">
      <div className="absolute inset-x-0 -top-12 h-48 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path d="M0,10 Q25,0 50,10 T100,10" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,15 Q25,5 50,15 T100,15" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,20 Q25,10 50,20 T100,20" stroke="white" fill="none" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className="orgatek-container relative z-10 pt-8 md:pt-16 lg:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-b md:border-b-0 md:border-r border-white/20 pr-0 md:pr-8 pb-8 md:pb-0">
              <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-6 font-[var(--font-montserrat)] text-center md:text-left">Investment Opportunities</h2>
              <p className="text-base md:text-lg text-white/90 pb-6 font-[var(--font-poppins)] text-center md:text-left">
              We offer investors access to high-quality, regenerative land assets and scalable natural capital.
              </p>
              
            </div>
            <div className="pl-0 md:pl-8">
              <p className="text-base md:text-lg text-white/90 pb-6 font-[var(--font-poppins)] mt-0 md:mt-[52px] text-center md:text-left">
              Our strategy is built around sustainable forestry as a nature-based solution — with operational control, circular biomass utilization, and integrated project development delivering strong, long-term returns while restoring wastelands and strengthening rural economies. </p>
              
              
              <div className="flex justify-center md:justify-start">
                <button 
                  className="inline-flex items-center bg-white text-[#1B5E20] px-6 md:px-8 py-3 hover:bg-opacity-90 transition-colors relative group text-sm md:text-base"
                  onClick={handleGetInvolvedClick}
                >
                  <span className={isLoading ? 'opacity-0' : ''}>Explore More</span>
                  {!isLoading && (
                    <svg className="ml-2 h-3 md:h-4 w-3 md:w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 md:h-5 w-4 md:w-5 border-b-2 border-[#1B5E20]"></div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="orgatek-container px-[10px] md:px-[50px]">
          <style jsx global>{`
            .swiper-pagination-bullet {
              width: 24px !important;
              height: 4px !important;
              border-radius: 2px !important;
              background: rgba(39, 84, 58, 0.3) !important;
            }
            .swiper-pagination-bullet-active {
              background: #27543a !important;
            }
            .quote-swiper {
              padding-bottom: 50px !important;
            }
            .quote-swiper .swiper-pagination {
              bottom: 0 !important;
            }
          `}</style>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            className="quote-swiper"
          >
            {processSteps.map((step, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center min-h-[120px] md:min-h-[150px]">
                  <div className="w-full max-w-5xl">
                    <p className="text-xl md:text-2xl lg:text-3xl text-black font-regular leading-relaxed font-[var(--font-poppins)] italic text-center px-4 md:px-0">
                      "{step.text}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>

      <Footer />
    </main>
  );
}
