import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function WhyWeDoIt() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
        title="FOCUS ON"
         subtitle={<>Degraded Land<br />Availability Deforestation<br />Importance of Forests</>}
      />

      {/* Intro Section */}
      <section className="py-12 bg-[#eff1f1]">
        <div className="orgatek-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
            Wastelands represent one of the world's most underutilized and degraded resources, often characterized by barren soil, low productivity, and limited biodiversity. At Orgatek, we see these lands not as liabilities, but as opportunities to create thriving ecosystems. Through the power of agroforestry and biochar integration, we are transforming these neglected areas into fertile, carbon-sequestering landscapes.
            </p>
            <p className="text-lg text-gray-700">
            By planting carefully selected tree species and enhancing the soil with biochar, we not only restore ecological balance but also unlock the potential for sustainable agricultural practices. Our mission is to breathe life back into these forgotten lands, turning them into vibrant hubs of environmental and economic resilience for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <ContentSection
        title="The world has lost one-third of its forest, but an end of deforestation is possible"
        description="Over the last 10,000 years the world has lost one-third of its forests. An area twice the size of the United States. Half occurred in the last century."
        image={
          <iframe 
            src="https://ourworldindata.org/grapher/share-degraded-land?tab=chart" 
            loading="lazy" 
            style={{ width: '100%', height: '350px', border: '0px none' }} 
            allow="web-share; clipboard-write"
            disable
          />
        }
        imageLeft={true}
        bgColor="white"
      />

        {/* Community Benefits Section */}
      <ContentSection
        title="Community Benefits"
        description="Our work extends beyond environmental impact. We create jobs, support local economies, and provide sustainable income streams for farmers and communities engaged in our carbon sequestration projects."
        image="https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
        imageLeft={true}
        buttonText="Learn more"
        buttonLink="#"
        bgColor="white"
      />

      {/* Climate Impact Section */}
      <ContentSection
        title="Climate Impact"
        description="With rising global temperatures and increasing carbon emissions, our work in carbon sequestration provides a meaningful pathway to mitigate climate change effects while creating sustainable solutions."
        image="https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80"
        imageLeft={false}
        buttonText="Our impact"
        buttonLink="#"
        bgColor="cream"
      />

      {/* Innovation Section */}
      <ContentSection
        title="Innovation"
        description="We're constantly pushing the boundaries of what's possible in carbon sequestration technology. Our research and development efforts focus on maximizing efficiency and impact while reducing costs."
        image="https://images.unsplash.com/photo-1581093458791-9ea52e4516b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80"
        imageLeft={false}
        buttonText="Our innovations"
        buttonLink="#"
        bgColor="cream"
      />

      {/* Sustainable Future Section */}
      <ContentSection
        title="Building a Sustainable Future"
        description="We believe that businesses have a responsibility to lead the transition to a sustainable future. Through our work, we're demonstrating that environmental stewardship and economic prosperity can go hand in hand."
        image="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
        imageLeft={true}
        buttonText="Join our mission"
        buttonLink="#"
        bgColor="white"
      />

      {/* Global Forest Loss Impact */}
      <ContentSection
        title="Global Forest Loss Impact"
        description="Forest loss is a critical environmental challenge, with 20.93 Mha of annual tree loss globally. This includes both deforestation (27% permanent loss) and forest degradation through wildfires (23%), forestry products (26%), and shifting agriculture (24%). Our efforts focus on combating these losses through sustainable practices and community engagement."
        image="/images/global-forest-loss.png"
        imageLeft={true}
        buttonText="Learn More About Our Impact"
        buttonLink="#"
        bgColor="white"
      />

      {/* Our Values Section */}
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
      </section>

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

      {/* Contact Form Section */}
      <ContactFormSection title="Want to learn more about why we do what we do? Subscribe to our newsletter for updates on our mission and impact." />

      <Footer />
    </main>
  );
} 