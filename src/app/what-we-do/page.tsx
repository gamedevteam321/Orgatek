import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function WhatWeDo() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        title="What We Do"
        subtitle="At Orgatek, we are revolutionizing the sustainable agricultural carbon landscape."
        small={true}
      />

      {/* Intro Section */}
      <section className="py-12 bg-[#eff1f1]">
        <div className="orgatek-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Our plantation management includes planting new seedlings to expand our plantations, harvesting (development) and processing the harvested plant biomass.
            </p>
            <p className="text-lg text-gray-700">
              Biomass processing for clean definitions, pyrolysis and carbonization (generally our over-arching term within the organisation) is the core of our business. We transform surplus biomass into high-value carbon products. The use of pyrolysis, creates speciality carbon products that include biochar, wood vinegar (liquid), wood gas, and carbon materials for industrial use and other co-products. This enables the commercial by-products to add to the overall value proposition of our activities, in establishing nature-based carbon sequestration, and reducing waste levels and pollution.
            </p>
          </div>
        </div>
      </section>

      {/* Planting Section */}
      <ContentSection
        title="Planting"
        description="We plant mallee trees and other eucalyptus which are suited to Australian farming practices, making them an ideal and highly adaptive to extreme weather irregularities and regional environmental adaptations of the region."
        image="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        imageLeft={true}
        buttonText="Find out more"
        buttonLink="#"
        bgColor="white"
      />

      {/* Harvesting Section */}
      <ContentSection
        title="Harvesting"
        description="Mature trees (mallee) are harvested at ground level. Coppicing is the regrown from the lignotuber which increases biomass production and rapid regrowth after harvesting, supporting regenerative farming methods."
        image="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        imageLeft={false}
        buttonText="Find out more"
        buttonLink="#"
        bgColor="cream"
      />

      {/* Oil Production Section */}
      <ContentSection
        title="Oil Production"
        description="We use traditional steam distillation to extract oil from mallee biomass to produce extract oils at a higher yield than conventional oil distillation equipment. Our oil is then ready packaged for sale."
        image="https://images.unsplash.com/photo-1627467959547-215e15205eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        imageLeft={true}
        buttonText="Find out more"
        buttonLink="#"
        bgColor="white"
      />

      {/* Pyrolysis Section */}
      <ContentSection
        title="Pyrolysis"
        description="Pyrolysis is the thermal decomposition – or burning/heating – of organic raw biomass at high temperatures in an inert atmosphere (without oxygen). Byproducts from this process include biochar, wood vinegar, and a variety of organic vapors – all of which have various commercial uses."
        image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        imageLeft={false}
        buttonText="Find out more"
        buttonLink="#"
        bgColor="cream"
      />

      {/* ACCUs Section */}
      <ContentSection
        title="ACCUs (Carbon Credits)"
        description="Orgatek produces Australian Carbon Credit Units, or 'ACCUs'. Financial instruments provided by eligible carbon projects for the Commonwealth Government's Emissions Reduction Fund via approved methodologies. We sell ACCUs to companies seeking to offset the carbon emissions that they cannot reduce."
        image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        imageLeft={true}
        buttonText="Find out more"
        buttonLink="#"
        bgColor="white"
      />

      {/* CORCs Section */}
      <ContentSection
        title="CORCs (Carbon Credits)"
        description="Our biochar production generates CORCs which are traded in international carbon offset markets. We are committed to transitioning to net-zero carbon emissions. Using CORCs enables businesses to meet regulatory requirements or demonstrate their commitment to more sustainable practices."
        image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        imageLeft={false}
        buttonText="Find out more"
        buttonLink="#"
        bgColor="cream"
      />

      {/* Full Circle Process Section */}
      <section className="py-16 bg-[#eff1f1]">
        <div className="orgatek-container">
          <h2 className="text-2xl font-semibold text-[#38625c] mb-6">How they fit together</h2>
          <h3 className="text-xl font-semibold text-[#2e4a3d] mb-8">The Full-Circle Process</h3>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 relative w-20 h-20">
              <div className="rounded-full bg-[#38625c] w-20 h-20 flex items-center justify-center">
                <span className="text-white text-3xl">1</span>
              </div>
            </div>

            <div className="hidden md:block w-24 h-1 bg-[#38625c]" />

            <div className="mb-8 md:mb-0 relative w-20 h-20">
              <div className="rounded-full bg-[#38625c] w-20 h-20 flex items-center justify-center">
                <span className="text-white text-3xl">2</span>
              </div>
            </div>

            <div className="hidden md:block w-24 h-1 bg-[#38625c]" />

            <div className="relative w-20 h-20">
              <div className="rounded-full bg-[#38625c] w-20 h-20 flex items-center justify-center">
                <span className="text-white text-3xl">3</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-700 max-w-3xl mx-auto text-center">
              Our chain of benefits forms and ideally runs perfectly for the transition of our carbon materials: planting trees, harvesting them, transforming biomass into useful by-products, and selling carbon credits.
            </p>
          </div>
        </div>
      </section>

      {/* Our Farms Section */}
      <section className="py-16 bg-[#27543a] text-white">
        <div className="orgatek-container">
          <h2 className="text-2xl font-semibold mb-4">Our Farms</h2>
          <p className="mb-6">
            Orgatek owns two flagship farms located in North Buntine and Kojonup, Western Australia.
          </p>
          <a href="/our-farms" className="inline-flex items-center text-white hover:underline">
            Learn more
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection title="If you're an investor, purchaser and would like to stay informed about our projects, please subscribe to our newsletter." />

      <Footer />
    </main>
  );
}
