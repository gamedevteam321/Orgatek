import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import ShareDegradedLandChart from '@/components/charts/ShareDegradedLandChart';

export default function WhyWeDoIt() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/hero-why.png"
        title="Why We Exist"
         subtitle="A Growing Crisis — and a Missed Opportunity"
        titleClassName="text-5xl md:text-7xl lg:text-7xl"
        subtitleClassName="text-lg text-white mb-6 font-medium"
      />

      {/* Intro Section */}
      <section className="py-12 bg-[#eff1f1] px-[50px]">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto">
           
            <p className="text-lg text-gray-700 mb-6">
              Each year, over 10 million hectares of natural forest are lost globally due to unsustainable timber harvesting and agricultural expansion, putting immense pressure on ecosystems, accelerating climate change, and destroying vital biodiversity.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Meanwhile, 2 billion hectares of wastelands—barren, unproductive, and ecologically poor—lie abandoned.
            </p>
            <p className="text-lg text-gray-700">
              We see these lands not as liabilities, but as climate solutions waiting to be unlocked. Through the integration of regenerative forestry and biochar made from our forest residues, our mission is to transform them into thriving ecosystems, growing sustainable timber, restoring soils empowering communities,and capturing carbon at scale.
            </p>
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
        imageLeft={true}
        bgColor="white"
        className="px-[50px]"
      />

       {/* Global Forest Loss Impact */}
      <ContentSection
        image="/images/Forest-loss-by-driver-and-region.png"
        imageSize="full"
        className="px-[50px]"
      />

      <ContentSection
        image="/images/Global-forest-loss-since-ice-age.png"
        imageSize="full"
        className="px-[50px]"
      />

      {/* Healthy forests Section */}
      <ContentSection
        title="Healthy forests enable humanity to thrive"
        description={<div>
          <p className="font-semibold mb-4">Forests: A natural solution for climate change</p> <br />
          <p>Climate change is a defining challenge of our time. One of the most effective ways to combat climate change is with healthy, resilient forests.</p> <br />
          <p>Forests help regulate our climate by absorbing and retaining carbon dioxide from the atmosphere. The healthier the forest, the more carbon it can capture and store. </p> <br />
          <p>But today, the destruction of forests accounts for at least 10 per cent of annual carbon emissions. When forests are responsibly managed so biodiversity is maintained, the plants and trees within them can extract more carbon dioxide from the atmosphere and slow climate change.</p> 
        </div>}
        image="/images/forest.png"
        imageLeft={false}
        bgColor="cream"
        className="px-[50px]"
      />

      {/* Forests support earth's biodiversity Section */}
      <ContentSection
        title="Forests support earth's biodiversity"
        description={<div>
          <p>Forests are incredibly diverse ecosystems, hosting the majority of terrestrial plant and animal species. They represent a beautifully balanced system where soil, plants, and animals all depend on each other to thrive.</p> <br />
          <p>But why does this matter for us? First, biodiverse ecosystems provide the vital materials we need for food, shelter, clothing, and more. Biodiversity also fosters resilience. Healthy, rich ecosystems make earth habitable for humans. When forests disappear, these life-supporting systems begin to fail, putting humans at significant risk.</p> <br />
          <p>According to the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES), biodiversity is now declining faster than ever before.</p>
        </div>}
        image="/images/biodiversity.png"
        imageLeft={true}
        bgColor="white"
        className="px-[50px]"
      />

      {/*Forests are essential Section */}
      <ContentSection
        title="Forests are essential for people and communities"
        description={<div>
          <p>Forests support human life all over the world. They provide us with clean air, drinking water, and countless products we rely on every day. And for 300 million people, forests also provide a home. The communities living in and around forests depend on them for food, fuel, medicine, and their livelihoods. In turn, they make stewardship a part of everything they do.</p> <br />
        </div>}
        image="/images/communities.png"
        imageLeft={false}
        bgColor="cream"
        className="px-[50px]"
      />

      {/* Our Values Section
      <section className="py-16 bg-[#eff1f1]">
        <div className="orgatek-container">
          <h2 className="text-2xl font-semibold text-[#38625c] mb-6">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2e4a3d] mb-4">Sustainability</h3>
              <p className="text-gray-700">
                We prioritize environmental sustainability in everything we do, ensuring our practices contribute to a healthier planet.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2e4a3d] mb-4">Innovation</h3>
              <p className="text-gray-700">
                We continuously seek new and better ways to enhance our carbon sequestration methods and maximize our positive impact.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2e4a3d] mb-4">Community</h3>
              <p className="text-gray-700">
                We believe in creating value for all stakeholders, from local communities to global partners working toward climate solutions.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Join Our Mission Section */}
      <section className="pt-4 pb-16 mt-4 bg-[#1B5E20] px-[50px] relative overflow-hidden">
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Join Our Mission</h2>
              <p className="text-base md:text-lg text-white/90 mb-4">
                Whether you're an investor, partner, or supporter, there are many ways to get involved with our work at Orgatek.
              </p>
            </div>
            <div className="pl-0 md:pl-8 flex items-center">
              <a 
                href="/get-involved"
                className="inline-flex items-center bg-white text-[#1B5E20] px-8 py-3 hover:bg-opacity-90 transition-colors relative group"
              >
                <span>Get involved</span>
                <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      
     
      <Footer />
    </main>
  );
} 