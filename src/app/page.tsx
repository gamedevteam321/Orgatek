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

export default function Home() {
  // Mock data for the partners section
  const partners = [
    { name: 'Johnson & Johnson', logo: 'https://ext.same-assets.com/371274525/3783633550.svg' },
    { name: 'Qantas', logo: 'https://ext.same-assets.com/371274525/2563901416.svg' },
    { name: 'Citizens Difference', logo: 'https://ext.same-assets.com/371274525/548389142.svg' },
    { name: 'Givaudan', logo: 'https://ext.same-assets.com/371274525/260646423.svg' },
    { name: 'doTERRA', logo: 'https://ext.same-assets.com/371274525/4061061103.svg' },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/hero-bg.jpg"
        title="Building Forests, Sequestering Carbon, Revitalizing Soils, Restoring Nature."
        subtitle="We successfully produce sustainable Timber, Biochar & Carbon Credits from our forestry estates"
        buttonText="Learn More"
        buttonLink="#watch-video"
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
        title="Our Process"
        description="We grow oil mallee trees on land managed by independent farmers. Agricultural carbon sequestration achieves more than just carbon offsets, generating biochar, wood vinegar and oils that have commercial applications."
        
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


      {/* What We Do Section */}
    <ContentSection
        title="What We Do"
        description="add description here"
      >
        <div className="orgatek-container">
          {/* Horizontal scrollable slider */}
          <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
            <ProcessCard
              title="Nursery"
              description="Orgatek's specialized and modern forestry nursery is where restoration begins. By cultivating resilient seedlings through organic and sustainable practices, we ensure thriving forests that sequester carbon, enrich soils, and restore biodiversity for long-term environmental sustainability."
              image="/whatwedo/nursery.jpg"
            />
            
            <ProcessCard
              title="Planting"
              description="We plant fast-growing, high-yielding trees such as Eucalyptus, Poplar, Acacia, Bamboo, Casuarina, and Gmelina Arborea to restore degraded lands and create thriving ecosystems. These species are carefully selected for their ability to replace forest timber, sequester carbon, enhance soil health, and regenerate biodiversit."
              image="/whatwedo/planting.jpg"
            />
            
            <ProcessCard
              title="Proprietary Organic Inputs"
              description="Our proprietary and in-house manufactured range of organic fertilizers, growth promoters, and natural pesticides, developed through years of R&D, enhance soil health, strengthen trees, and support biodiversity without compromising long-term sustainability."
              image="/whatwedo/organic-inputs.jpg"
            />
            
            <ProcessCard
              title="Harvesting"
              description="Details about our harvesting methods..."
              image="/whatwedo/harvesting.jpg"
            />
            
            <ProcessCard
              title="Pyrolysis"
              description="Details about our pyrolysis process..."
              image="/whatwedo/pyrolysis.jpg"
            />
            
            <ProcessCard
              title="Biochar Implementation"
              description="Details about our biochar implementation..."
              image="/whatwedo/biochar.jpg"
            />
            
            <ProcessCard
              title="Digital & Satellite Monitoring"
              description="Details about our digital & satellite monitoring..."
              image="/whatwedo/monitoring.jpg"
            />
          </div>
        </div>

        {/* Optional scroll indicator */}
        <div className="flex justify-center mt-6">
          <span className="text-sm text-gray-400">← Scroll to see more →</span>
        </div>
      </ContentSection>

      {/* Our Solutions Section */}
      <section className="py-16 md:py-24 bg-[#eff1f1]">
        <div className="orgatek-container">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#38625c] mb-4">Our Solutions</h2>
          <p className="text-gray-600 mb-12 max-w-full" >
            Orgatek cultivates its carbon production processes with the planting of oil mallee plantations on WA farms, optimizing soil carbon sequestration and creating biochar as a byproduct. These high-carbon products provide various commercial applications, from agriculture to filtration, which our research team is continuously expanding for use in many industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            <FeatureCard
              title="Timber"
              description="Sustainable timber production from our managed oil mallee plantations."
              fullDescription="Our timber production focuses on sustainable harvesting of oil mallee trees, which are specifically chosen for their rapid growth and ability to regenerate from rootstock. This allows for multiple harvests from the same trees, maximizing both environmental and economic benefits. Our timber is used in various applications, from construction to specialized products, all while maintaining our commitment to carbon sequestration and environmental sustainability."
              image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              buttonText="Learn More"
            />

            <FeatureCard
              title="Carbon Credits"
              description="Verified carbon credits from our sustainable forestry practices."
              fullDescription="Our carbon credit program generates both Australian Carbon Credit Units (ACCUs) and Carbon Offset Reduction Credits (CORCs). These credits are created through our sustainable forestry practices and biochar production. Companies can purchase these credits to offset their emissions and meet their environmental obligations. All our credits are independently verified and meet the highest standards of carbon accounting."
              image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              buttonText="Learn More"
            />
            <FeatureCard
              title="CORCS"
              description="Carbon Offset Reduction Credits for international markets."
              fullDescription="Carbon Offset Reduction Credits (CORCs) are internationally recognized carbon credits generated through our biochar production process. These credits are traded in international carbon markets and provide businesses with a verified way to offset their carbon emissions. Our CORCs meet strict international standards and are backed by our transparent carbon accounting practices."
              image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              buttonText="Learn More"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            <FeatureCard
              title="Biochar"
              description="High-quality biochar for agricultural and industrial applications."
              fullDescription="Our biochar is produced through a carefully controlled pyrolysis process, creating a stable carbon-rich material with numerous applications. In agriculture, it improves soil health, increases water retention, and enhances crop yields. Industrial applications include filtration, construction materials, and carbon sequestration. Our biochar production process is certified and meets international quality standards."
              image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              buttonText="Learn More"
            />

            <FeatureCard
              title="Wood Vinegar"
              description="Natural wood vinegar from our pyrolysis process."
              fullDescription="Wood vinegar, also known as pyroligneous acid, is a valuable byproduct of our pyrolysis process. This natural liquid contains over 200 organic compounds and has multiple applications in agriculture and industry. It serves as a natural pesticide, plant growth enhancer, and soil conditioner. Our wood vinegar is carefully collected and processed to ensure the highest quality and effectiveness."
              image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              buttonText="Learn More"
            />
            <FeatureCard
              title="Eucalyptus Oil"
              description="Premium eucalyptus oil extracted from our mallee plantations."
              fullDescription="Our premium eucalyptus oil is extracted from carefully selected oil mallee trees using sustainable steam distillation processes. The oil is known for its high cineole content and superior quality, making it ideal for pharmaceutical, aromatherapy, and industrial applications. Our extraction process maintains the oil's natural properties while ensuring environmental sustainability."
              image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              buttonText="Learn More"
            />
          </div>
        </div>
      </section>


      {/* Our Impact Section */}
      <section className="bg-[#2c7090] overflow-hidden text-white">
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white py-12 pl-12">OUR IMPACT</h2>
          
          {/* Banner image */}
          <div className="w-full h-[400px] bg-cover bg-center" style={{backgroundImage: `url('https://placeholder.com/1200x400')`}}>
            {/* Placeholder for banner image of person working with plants */}
          </div>
          
          {/* Two column section */}
          <div className="grid grid-cols-1 md:grid-cols-2">
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
            <section className="py-12 md:py-16 bg-[#38625c] text-white">
        <div className="orgatek-container">
          <h2 className="text-3xl md:text-4xl font-semibold  mb-12">Like to know more about Carbon Credits & Certification</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Carbon Credits Column */}
            <div>
              <div className="mb-4 h-64 md:h-80 bg-gray-300 overflow-hidden">
                <img src="https://placeholder.com/800x600" alt="Forest certification" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Carbon Credits</h3>
              <p className="mb-6">Orgatek has established more new forest area, on previously degraded land, than any other company on the African continent.</p>
              <a href="/carbon-credits" className="inline-block border border-white px-6 py-2 hover:bg-white hover:text-[#3c6e31] transition duration-300">Find Out More</a>
            </div>
            
            {/* Certification Column */}
            <div>
              <div className="mb-4 h-64 md:h-80 bg-gray-300 overflow-hidden">
                <img src="https://placeholder.com/800x600" alt="Aerial forest view" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Certification</h3>
              <p className="mb-6">Orgatek Forestry & Products are certified to the required industry standards.</p>
              <a href="/certification" className="inline-block border border-white px-6 py-2 hover:bg-white hover:text-[#3c6e31] transition duration-300">Find Out More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection partners={partners} />

      {/* Contact Form Section */}
      <ContactFormSection title="If you're an investor, purchaser and would like to stay informed about our projects, please subscribe to our newsletter." />

      <Footer />
    </main>
  );
}
