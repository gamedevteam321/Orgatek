import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { FeatureCard } from '@/components/ui/feature-card';
import { PartnersSection } from '@/components/sections/partners-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import Image from 'next/image';
import { ExpandableText } from '@/components/ui/ExpandableText';
import { ProcessCard } from '@/components/ui/ProcessCard';
import SupplyChainSection from '@/components/ui/SupplyChainSection';

export default function Home() {
  // Mock data for the partners section
  const partners = [
    { name: 'Orgatek', logo: '/logo/logo1.png', width: 100, height: 100 },
    { name: 'Orgatek', logo: '/logo/logo1.png', width: 100, height: 100 },
    { name: 'Orgatek', logo: '/logo/logo1.png', width: 100, height: 100 },
    { name: 'Orgatek', logo: '/logo/logo1.png', width: 100, height: 100 },
    { name: 'Orgatek', logo: '/logo/logo1.png', width: 100, height: 100 },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/hero-bg.jpg"
        title={
          <div className="space-y-4">
            <p className="block">Transforming Wastelands.</p>
            <p className="block">Growing Forests.</p>
            <p className="block">Reviving Nature.</p>
          </div>
        }
        subtitle="We transform degraded landscapes into  organic-certified thriving forests, producing sustainable timber, biochar, and verifiable carbon credits for a climate-positive future"
        buttonText="Why We Exist"
        buttonLink="/why-we-exist"
      />
      {/* Why Forests Matter Section */}
      <ContentSection
        title="Why Forests Matter"
        description="Forests are vital ecosystems that play a crucial role in carbon sequestration, biodiversity preservation, and maintaining ecological balance. Our sustainable forestry practices ensure these benefits while providing valuable resources for future generations."
        image="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
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
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="relative w-20 h-20 mx-auto mb-2">
            <Image
              src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              alt="Planting"
              fill
              className="rounded-full object-fill"
            />
          </div>
          <div className="relative w-20 h-20 mx-auto mb-2">
            <Image
              src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              alt="Harvesting"
              fill
              className="rounded-full object-fill"
            />
          </div>
          <div className="relative w-20 h-20 mx-auto mb-2">
            <Image
              src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="Processing"
              fill
              className="rounded-full object-fill"
            />
          </div>
        </div>
      </ContentSection>


      {/* How We Transform Wastelands Section */}
    <ContentSection
        title="How we Regenerate Land"
        description="We transform wastelands into thriving ecosystems through a symbiotic process of planting short-rotation high-yield trees and enriching the soil with Biochar made from their waste biomass. This combination enhances soil fertility, improves water retention, accelerates healthy tree growth, and creates high-quality, traceable, and verifiable carbon sinks."
        bgColor="cream"
      >
        <div className="">
          {/* Horizontal scrollable slider */}
          <div className="flex overflow-x-auto pb-6 space-x-16 scrollbar-hide">
            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Forest Establishment"
                description="India has over 55 million hectares classified as wastelands, with nearly 24 million hectares identified as having viable forestry potential. At Orgatek, every project begins with rigorous site and connected short-rotation, high yield tree species selection, based on detailed soil analysis, climatic assessment, water resource evaluation and market proximity. We plant high-yielding, short-rotation species such as Eucalyptus, Poplar, Acacia, Bamboo, Casuarina, and Gmelina Arborea, selected for their adaptability to local conditions and ability to deliver maximum environmental impact."
                image="/images/test.jpeg"
                pagePath="/forest-establishment"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Forest Management"
                description="Efficient, professional forest management is at the heart of building high-performing regenerative ecosystems. Once planted, our forests are carefully managed through continuous field scouting, advanced digital monitoring, and skilled forestry operations and proactive interventions to ensure that our estates grow vigorously, remain healthy, and maximize carbon sequestration."
                image="/images/test.jpeg"
                pagePath="/forest-management"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Sustainable Harvesting"
                description="We practice strategic rotational cycles by planting and harvesting in carefully managed phases — establishing new areas each year while earlier phases mature. This ensures our forests remain vibrant and continuously productive, keeping large sections of the landscape actively growing at all times, sustaining carbon sequestration, preserving soil health, and maintaining lush, living ecosystems, while avoiding periods of barrenness or ecological disruption."
                image="/images/test.jpeg"
                pagePath="/sustainable-harvesting"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Proprietary Organic Inputs"
                description="Restoring wastelands demands a soil-first approach that transcends traditional tree planting. Our in-house manufactured proprietary organic inputs, developed through years of research and crafted with precise quality control, offer unmatched flexibility to customize solutions for specific conditions to support robust tree growth and long term soil fertility."
                image="/images/test.jpeg"
                pagePath="/unique-organic-inputs"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Biochar Enrichment"
                description="Building Soil Health. Locking Away Carbon. At Orgatek, we convert forestry biomass into high-quality biochar through on-site, high-temperature pyrolysis — permanently removing carbon while enriching degraded soils. Our biochar practices close the carbon loop locally, rebuild ecosystem resilience, and deliver durable, verifiable climate impact at scale."
                image="/images/test.jpeg"
                pagePath="/biochar-enrichment"
                useSidePanel={true}
                hideTextExpander={true}
              />
            </div>

            <div className="flex-shrink-0 min-w-[280px] max-w-[280px]">
              <ProcessCard
                title="Digital Monitoring & Verification"
                description="We integrate the best digital technologies including IoT sensors, computer vision and satellite imagery, to monitor and verify every aspect of forest establishment, management, harvesting and carbon sequestration. Our digital platform ensures real-time visibility, transparent reporting, and third-party validated impact across all our projects."
                image="/images/test.jpeg"
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
      <section className="py-16 md:py-24 bg-white">
        <div className="orgatek-container">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#38625c] mb-4">What we Create</h2>
          <p className="text-gray-600 mb-12 max-w-full" >
            Orgatek cultivates its carbon production processes with the planting of oil mallee plantations on WA farms, optimizing soil carbon sequestration and creating biochar as a byproduct. These high-carbon products provide various commercial applications, from agriculture to filtration, which our research team is continuously expanding for use in many industries.
          </p>

          <div className="flex flex-wrap md:flex-nowrap md:justify-center gap-8 md:gap-12 overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex-shrink-0 w-full md:w-[400px] min-w-[280px]">
              <FeatureCard
                title="Timber"
                description="Sustainable timber production from our managed oil mallee plantations."
                fullDescription="Our timber production focuses on sustainable harvesting of oil mallee trees, which are specifically chosen for their rapid growth and ability to regenerate from rootstock. This allows for multiple harvests from the same trees, maximizing both environmental and economic benefits. Our timber is used in various applications, from construction to specialized products, all while maintaining our commitment to carbon sequestration and environmental sustainability."
                image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                buttonText="Learn More"
              />
            </div>

            <div className="flex-shrink-0 w-full md:w-[400px] min-w-[280px]">
              <FeatureCard
                title="Carbon Credits"
                description="Verified carbon credits from our sustainable forestry practices."
                fullDescription="Our carbon credit program generates both Australian Carbon Credit Units (ACCUs) and Carbon Offset Reduction Credits (CORCs). These credits are created through our sustainable forestry practices and biochar production. Companies can purchase these credits to offset their emissions and meet their environmental obligations. All our credits are independently verified and meet the highest standards of carbon accounting."
                image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                buttonText="Learn More"
              />
            </div>

            <div className="flex-shrink-0 w-full md:w-[400px] min-w-[280px]">
              <FeatureCard
                title="Biochar"
                description="High-quality biochar for agricultural and industrial applications."
                fullDescription="Our biochar is produced through a carefully controlled pyrolysis process, creating a stable carbon-rich material with numerous applications. In agriculture, it improves soil health, increases water retention, and enhances crop yields. Industrial applications include filtration, construction materials, and carbon sequestration. Our biochar production process is certified and meets international quality standards."
                image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                buttonText="Learn More"
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
      <section className=" overflow-hidden text-white  ">
        <div className="relative ">
          <h2 className="text-3xl md:text-4xl font-bold text-white py-12 pl-12 relative z-10">OUR IMPACT</h2>
          
          <div className="relative z-10 pl-12 pr-12 md:pr-24 max-w-8xl">
            <p className="text-lg mb-6">
              At Orgatek, impact means delivering measurable change — for the climate, for ecosystems, and for communities.
            </p>
            <p className="text-lg mb-6">
              Through regenerative forestry, soil carbon innovation, and rural development initiatives, we transform degraded lands into high-performing natural assets.
            </p>
            <p className="text-lg">
              Our integrated model generates verifiable carbon removal, restores biodiversity, strengthens local economies, and builds sustainable futures — creating lasting environmental and social value at scale.
            </p>
          </div>
          
          {/* Banner image */}
          <div className="absolute inset-0 w-full h-[650px] bg-cover bg-center" style={{backgroundImage: `url('/images/test.jpeg')`}}>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          
          {/* Two column section */}
          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 absolute bottom-[-90px] w-full py-16">
            {/* Environment column */}
            <div className="bg-[#2c7090] p-12" >
              <h3 className="text-2xl font-bold mb-6">ENVIRONMENT</h3>
              <p className="mb-4">
                One pongamia tree removes one tonne of carbon in its first 20 
                years. Each acre of pongamia orchard removes on average 5 tonnes 
                of carbon per year.
              </p>
              <p>
                Not all trees are nitrogen fixing, but pongamia is one of them. It 
                can sink both carbon and nitrogen into the ground and replenish 
                soil health.
              </p>
            </div>
            
            {/* Community column */}
            <div className="bg-[#38625c] p-12">
              <h3 className="text-2xl font-bold mb-6">COMMUNITY</h3>
              <p className="mb-4">
                In India, over 290 women community leaders manage wild 
                harvesting and bean collection with over 40,000 lives impacted 
                through our 2023 harvest.
              </p>
              <p>
                We pay 30-65% over the minimum government support price for 
                wild harvest pongamia beans across India, improving bean 
                collectors livelihoods by almost 50%
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Carbon Credits & Certification Section */}
            <section className="py-12 md:py-16 bg-white text-white">
        <div className="orgatek-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12">Like to know more about Carbon Credits & Certification</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Carbon Credits Column */}
            <div>
              <div className="mb-4 h-64 md:h-80 bg-gray-300 overflow-hidden">
                <img src="/images/test.jpeg" alt="Orgatek" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Carbon Credits</h3>
              <p className="mb-6 text-black">Orgatek has established more new forest area, on previously degraded land, than any other company on the African continent.</p>
              <a href="/carbon-credits" className="text-black inline-block border border-black px-6 py-2 hover:bg-white hover:text-[#3c6e31] transition duration-300">Find Out More</a>
            </div>
            
            {/* Certification Column */}
            <div>
              <div className="mb-4 h-64 md:h-80 bg-gray-300 overflow-hidden">
                <img src="/images/test.jpeg" alt="Orgatek" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Certification</h3>
              <p className="mb-6 text-black">Orgatek Forestry & Products are certified to the required industry standards.</p>
              <a href="/certification" className="text-black inline-block border border-black px-6 py-2 hover:bg-white hover:text-[#3c6e31] transition duration-300">Find Out More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <SupplyChainSection />

      {/* Partners Section */}
      <PartnersSection partners={partners} />

      {/* Contact Form Section */}
      <ContactFormSection title="If you're an investor, purchaser and would like to stay informed about our projects, please subscribe to our newsletter." />

      <Footer />
    </main>
  );
}
