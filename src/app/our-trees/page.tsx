import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { FeatureCard } from '@/components/ui/feature-card';

export default function OurTrees() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="Our Trees"
        subtitle="Sustainable oil mallee plantations for carbon sequestration and environmental restoration."
        small={true}
      />

      {/* Intro Section */}
      <section className="py-12 bg-[#eff1f1]">
        <div className="orgatek-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              At Orgatek, we cultivate oil mallee plantations across Western Australia, creating sustainable ecosystems that sequester carbon while providing valuable resources.
            </p>
            <p className="text-lg text-gray-700">
              Our carefully managed plantations not only contribute to carbon reduction but also support biodiversity and help restore degraded agricultural lands.
            </p>
          </div>
        </div>
      </section>

      {/* Tree Types Grid */}
      <section className="py-16 bg-white">
        <div className="orgatek-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="Oil Mallee"
              description="Eucalyptus species specifically selected for their high oil content and carbon sequestration capabilities. These trees are drought-resistant and thrive in Western Australia's climate."
              image="https://images.unsplash.com/photo-1600857544200-b2f468e9b2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              buttonText="Learn more"
              buttonLink="#oil-mallee"
            />

            <FeatureCard
              title="Biodiversity Support"
              description="Our plantations create habitats for native wildlife and support local ecosystems. We implement sustainable practices that promote biodiversity while maintaining productive land use."
              image="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              buttonText="Learn more"
              buttonLink="#biodiversity"
            />
          </div>
        </div>
      </section>

      {/* Oil Mallee Section */}
      <ContentSection
        title="Oil Mallee Plantations"
        description="Our oil mallee plantations are carefully managed to maximize carbon sequestration while producing valuable resources. These trees are specifically chosen for their ability to thrive in Western Australia's climate and their high oil content, making them perfect for both environmental and commercial purposes."
        image="https://images.unsplash.com/photo-1600857544200-b2f468e9b2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        imageLeft={true}
        bgColor="cream"
        buttonText="Learn about our plantations"
        buttonLink="/contact"
      />

      {/* Environmental Impact Section */}
      <ContentSection
        title="Environmental Impact"
        description="Our tree plantations play a crucial role in environmental restoration and carbon sequestration. By carefully managing our plantations, we create sustainable ecosystems that support biodiversity, improve soil health, and contribute to climate change mitigation."
        image="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        imageLeft={false}
        bgColor="white"
        buttonText="Our environmental commitment"
        buttonLink="/contact"
      />

      {/* Get Involved Section */}
      <section className="py-16 md:py-24 bg-[#eff1f1]">
        <div className="orgatek-container">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#38625c] mb-6 text-center">Get Involved</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
            Join us in our mission to create sustainable ecosystems and combat climate change through responsible tree cultivation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-[#38625c] mb-4">For Landowners</h3>
              <p className="text-gray-700 mb-6">
                Learn how you can integrate oil mallee plantations into your property and create additional revenue streams while benefiting the environment.
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
                Invest in sustainable tree plantations and carbon sequestration projects with proven environmental and financial returns.
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

            <div className="p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-[#38625c] mb-4">For Researchers</h3>
              <p className="text-gray-700 mb-6">
                Collaborate with our research team to advance sustainable tree cultivation and carbon sequestration technologies.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-[#38625c] hover:text-[#2e4a3d] group"
              >
                <span className="text-sm font-medium">Research partnerships</span>
                <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection title="If you're interested in learning more about our tree plantations or would like to partner with us, please get in touch." />

      <Footer />
    </main>
  );
} 