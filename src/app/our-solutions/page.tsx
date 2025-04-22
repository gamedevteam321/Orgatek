import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { FeatureCard } from '@/components/ui/feature-card';

export default function OurSolutions() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="Our Solutions"
        subtitle="Sustainable carbon products and services for a better future."
        small={true}
      />

      {/* Intro Section */}
      <section className="py-12 bg-[#eff1f1]">
        <div className="orgatek-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Orgatek cultivates its carbon production processes with the planting of oil mallee plantations on WA farms, optimizing soil carbon sequestration and creating biochar as a byproduct.
            </p>
            <p className="text-lg text-gray-700">
              These high-carbon products provide various commercial applications, from agriculture to filtration, which our research team is continuously expanding for use in many industries.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="orgatek-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="Biochar"
              description="A high-carbon product created through pyrolysis that can be used in agriculture to improve soil health. Biochar is a highly porous charcoal-like substance that increases nutrient retention, improves soil structure, and enhances microbial activity."
              image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              buttonText="Find out more"
              buttonLink="#biochar"
            />

            <FeatureCard
              title="Carbon Credits"
              description="Our sustainable processes create verifiable carbon credits that help organizations meet emission reduction targets. Orgatek produces both Australian Carbon Credit Units (ACCUs) and Carbon Offset Reduction Credits (CORCs) that are traded in carbon markets."
              image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              buttonText="Find out more"
              buttonLink="#carbon-credits"
            />

            <FeatureCard
              title="Wood Vinegar"
              description="A liquid by-product of the pyrolysis process with applications in agriculture as a natural pesticide and plant growth enhancer. Wood vinegar contains over 200 organic compounds that can improve plant health and yield."
              image="https://images.unsplash.com/photo-1567306295427-94503f8300d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              buttonText="Find out more"
              buttonLink="#wood-vinegar"
            />

            <FeatureCard
              title="Eucalyptus Oil"
              description="Premium eucalyptus oil extracted from our mallee plantations, used in aromatherapy, cleaning products, and pharmaceuticals. Our oil extraction process is sustainable and maintains high quality standards."
              image="https://images.unsplash.com/photo-1600857544200-b2f468e9b2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              buttonText="Find out more"
              buttonLink="#eucalyptus-oil"
            />
          </div>
        </div>
      </section>

      {/* Biochar Section */}
      <ContentSection
        title="Biochar"
        description="Biochar is a stable, carbon-rich product created when biomass is heated under limited oxygen conditions. It can significantly improve soil properties, increase agricultural productivity, and sequester carbon for hundreds to thousands of years."
        image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        imageLeft={true}
        bgColor="cream"
        buttonText="Contact us about biochar"
        buttonLink="/contact"
      />

      {/* Carbon Credits Section */}
      <ContentSection
        title="Carbon Credits"
        description="Our carbon credit solutions allow businesses to offset their unavoidable emissions while supporting sustainable agriculture and carbon sequestration projects. We offer both compliance and voluntary market credits with full transparency and verification."
        image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        imageLeft={false}
        bgColor="white"
        buttonText="Learn about our carbon markets"
        buttonLink="/contact"
      />

      {/* Wood Vinegar Section */}
      <ContentSection
        title="Wood Vinegar"
        description="Wood vinegar, also known as pyroligneous acid, is a natural by-product of our pyrolysis process. It contains organic acids, phenols, and other compounds that make it effective as a natural pesticide, soil enhancer, and plant growth promoter."
        image="https://images.unsplash.com/photo-1567306295427-94503f8300d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        imageLeft={true}
        bgColor="cream"
        buttonText="Inquire about wood vinegar"
        buttonLink="/contact"
      />

      {/* Eucalyptus Oil Section */}
      <ContentSection
        title="Eucalyptus Oil"
        description="Our premium eucalyptus oil is steam-distilled from the leaves of our sustainably grown mallee plantations. Known for its therapeutic properties, our oil is used in aromatherapy, pharmaceuticals, and cleaning products around the world."
        image="https://images.unsplash.com/photo-1600857544200-b2f468e9b2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        imageLeft={false}
        bgColor="white"
        buttonText="Learn about our oils"
        buttonLink="/contact"
      />

      {/* Get Involved Section */}
      <section className="py-16 md:py-24 bg-[#eff1f1]">
        <div className="orgatek-container">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#38625c] mb-6 text-center">Get Involved</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
            Discover how your business can benefit from our sustainable carbon solutions while making a positive environmental impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-[#38625c] mb-4">For Businesses</h3>
              <p className="text-gray-700 mb-6">
                Offset your carbon emissions, improve your ESG ratings, or source sustainable materials for your operations.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-[#38625c] hover:text-[#2e4a3d] group"
              >
                <span className="text-sm font-medium">Contact our business team</span>
                <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-[#38625c] mb-4">For Farmers</h3>
              <p className="text-gray-700 mb-6">
                Learn how you can integrate carbon farming into your existing operations and create additional revenue streams.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-[#38625c] hover:text-[#2e4a3d] group"
              >
                <span className="text-sm font-medium">Partner with us</span>
                <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-[#38625c] mb-4">For Investors</h3>
              <p className="text-gray-700 mb-6">
                Invest in sustainable agriculture and carbon markets with proven environmental and financial returns.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-[#38625c] hover:text-[#2e4a3d] group"
              >
                <span className="text-sm font-medium">Investment opportunities</span>
                <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection title="If you're an investor, purchaser and would like to stay informed about our projects, please subscribe to our newsletter." />

      <Footer />
    </main>
  );
}
