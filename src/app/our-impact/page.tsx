"use client";

import Image from 'next/image';
import { Footer } from '@/components/layout/footer';

export default function OurImpactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[750px] w-full">
        <Image
          src="/images/our-impact.jpg"
          alt="Our Impact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#003714] opacity-70 flex items-end justify-start p-4 md:p-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl">Our Impact: Driving Carbon Removal and Rural Resilience</h1>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-10 md:py-20 px-4 md:px-20 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Environmental Impact</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg leading-relaxed">
              Orgatek's regenerative forestry model transforms degraded wastelands into thriving ecosystems through a symbiotic process of reforestation, soil enrichment, and carbon capture.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              By planting short-rotation, high yield trees and enriching soils with our proprietary organic inputs and Biochar, we boost fertility, enhance water retention, and accelerate robust tree growth. Each acre of our forestry sequesters approximately 5 Mt of CO2 annually, while 2 Mt of biochar applied per acre yearly removes 5 metric tons of CO2e.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Scaling to our 100,000-acre goal, this creates massive, traceable carbon sinks, revives biodiversity, fosters native habitats, and combats climate change for a healthier planet.
            </p>
          </div>
          <div className="relative h-[250px] md:h-[400px] w-full">
            <Image
              src="/images/why-we-exist-bg.png"
              alt="Environmental Impact"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-10 md:py-20 bg-gray-50 mb-16">
        <div className="px-4 md:px-20 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[400px] md:h-[1000px] w-full">
              <Image
                src="/images/empowering-communities.png"
                alt="Community Impact"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold ">Empowering Communities</h2>
              <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8">Empowering People. Building Futures.</h4>
              <p className="text-base md:text-lg leading-relaxed">
                We believe that regenerating degraded lands must go hand in hand with revitalizing the lives of rural communities. Our work in India's remote interiors—regions often burdened by poverty and limited opportunities—delivering economic, social, and environmental resilience through forestry-based development.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                We lease wastelands from landowners under long-term agreements, providing steady income from once-barren, unproductive plots. These leases provide immediate financial stability, turning dormant lands into pillars of family security.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Our forestry projects generate steady employment, from land preparation and planting to estate management and biomass harvesting. By hiring and training local workers, we build green job ecosystems, equipping communities with skills and resilience in India's most underserved areas.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                We reinvest in village prosperity through initiatives that enhance healthcare access, support early education and promote local enterprises linked to forestry, to cultivate thriving, self-reliant communities. Micro-initiatives, like our biochar cookstove program, further augment incomes: we provide cookstoves, collect biochar for carbon credits, and share the value with communities via a digital platform, fostering self-reliance.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                While restoring land lays the foundation, empowering communities builds sustainable futures and heralds transformative change that endures for generations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 