"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import Image from 'next/image';

export default function OurImpactPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/our-impact.jpg"
        title={
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <h2 className="block text-4xl md:text-4xl lg:text-6xl">Our Impact</h2>
          </div>
        }
        subtitle={
          <div className="text-2xl md:text-xl lg:text-2xl text-white/90 mb-6 text-center md:text-left font-[var(--font-montserrat)]">
            <h2>Driving Carbon Removal and Rural Resilience</h2>
          </div>
        }
        titleClassName="text-2xl md:text-4xl lg:text-6xl"
        subtitleClassName="text-2xl md:text-xl lg:text-2xl text-white/90 mb-6 text-center md:text-left"
      />

      {/* Environmental Impact Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-1 font-[var(--font-montserrat)] text-center md:text-left">
              Environmental Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
                  Orgatek's regenerative forestry model transforms degraded wastelands into thriving ecosystems through a symbiotic process of reforestation, soil enrichment, and carbon capture.
                </p>
                <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
                  By planting short-rotation, high yield trees and enriching soils with our proprietary organic inputs and Biochar, we boost fertility, enhance water retention, and accelerate robust tree growth. Each acre of our forestry sequesters approximately 5 Mt of CO2 annually, while 2 Mt of biochar applied per acre yearly removes 5 metric tons of CO2e.
                </p>
                <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
                  Scaling to our 100,000-acre goal, this creates massive, traceable carbon sinks, revives biodiversity, fosters native habitats, and combats climate change for a healthier planet.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/why-we-exist-bg.png"
                  alt="Environmental Impact"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="bg-[#eff1f1] py-16 md:py-24">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto px-[10px] md:px-[50px]">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-[300px] md:h-[600px] w-full">
                <Image
                  src="/images/empowering-communities.png"
                  alt="Community Impact"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-black mb-2 font-[var(--font-montserrat)] text-center md:text-left">
                  Empowering Communities
                </h2>
                <h4 className="text-xl md:text-2xl font-semibold text-black mb-3 font-[var(--font-montserrat)] text-center md:text-left">
                  Empowering People. Building Futures.
                </h4>
                <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
                  We believe that regenerating degraded lands must go hand in hand with revitalizing the lives of rural communities. Our work in India's remote interiors—regions often burdened by poverty and limited opportunities—delivering economic, social, and environmental resilience through forestry-based development.
                </p>
                <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
                  We lease wastelands from landowners under long-term agreements, providing steady income from once-barren, unproductive plots. These leases provide immediate financial stability, turning dormant lands into pillars of family security.
                </p>
                <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
                  Our forestry projects generate steady employment, from land preparation and planting to estate management and biomass harvesting. By hiring and training local workers, we build green job ecosystems, equipping communities with skills and resilience in India's most underserved areas.
                </p>
                <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
                  We reinvest in village prosperity through initiatives that enhance healthcare access, support early education and promote local enterprises linked to forestry, to cultivate thriving, self-reliant communities. Micro-initiatives, like our biochar cookstove program, further augment incomes: we provide cookstoves, collect biochar for carbon credits, and share the value with communities via a digital platform, fostering self-reliance.
                </p>
                <p className="text-lg md:text-xl text-gray-700 text-center md:text-left font-[var(--font-poppins)]">
                  While restoring land lays the foundation, empowering communities builds sustainable futures and heralds transformative change that endures for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 