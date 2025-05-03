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
        subtitleClassName="text-lg text-gray-700 mb-6 font-medium"
      />

      {/* Intro Section */}
      <section className="py-12 bg-[#eff1f1]">
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
      />

       {/* Global Forest Loss Impact */}
      <ContentSection
        image="/images/Forest-loss-by-driver-and-region.png"
        imageSize="full"
      />

      <ContentSection
        image="/images/Global-forest-loss-since-ice-age.png"
        imageSize="full"
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
      />

      {/* Forests support earth's biodiversity Section */}
      <ContentSection
        title="Forests support earth's biodiversity"
        description={<div>
          <p>Forests are incredibly diverse ecosystems, hosting the majority of terrestrial plant and animal species. They represent a beautifully balanced system where soil, plants, and animals all depend on each other to thrive.</p> <br />
          <p>But why does this matter for us? First, biodiverse ecosystems provide the vital materials we need for food, shelter, clothing, and more. Biodiversity also fosters resilience. Healthy, rich ecosystems make earth habitable for humans. When forests disappear, these life-supporting systems begin to fail, putting humans at significant risk.</p> <br />
          <p>According to the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES), biodiversity is now declining faster than ever before. FSC's responsible forestry initiatives protect biodiversity in forests around the world.</p>
        </div>}
        image="/images/biodiversity.png"
        imageLeft={true}
        bgColor="white"
      />

      {/*Forests are essential Section */}
      <ContentSection
        title="Forests are essential for people and communities"
        description={<div>
          <p>Forests support human life all over the world. They provide us with clean air, drinking water, and countless products we rely on every day. And for 300 million people, forests also provide a home. The communities living in and around forests depend on them for food, fuel, medicine, and their livelihoods. In turn, they make stewardship a part of everything they do.</p> <br />
          <p>Indigenous groups and local communities manage one-quarter of the world's land. Globally, indigenous land experiences up to 26 per cent less deforestation than non-protected areas. And with support from FSC, Indigenous and local communities can achieve even better outcomes.</p> <br />
        </div>}
        image="/images/communities.png"
        imageLeft={false}
        bgColor="cream"
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
      <section className="py-16 bg-[#27543a] text-white">
        <div className="orgatek-container">
          <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
          <p className="mb-6">
            Whether you're an investor, partner, or supporter, there are many ways to get involved with our work at Orgatek.
          </p>
          <a href="/get-involved" className="inline-flex items-center text-white hover:underline">
            Get involved
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      
     
      <Footer />
    </main>
  );
} 