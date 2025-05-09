import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function Biochar() {
  return (
    <>
      <main className="mb-16 md:mb-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[95vh] flex items-end justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/biochar.png"
              alt="Biochar hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 md:px-[100px] relative z-10 pb-10 md:pb-20">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Biochar</h1>
            <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Building Soil Health. Locking Away Carbon</h2>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 md:py-16 bg-white px-4 md:px-[100px] text-start">
          <div className="max-w-7xl mx-auto">
            <p className="text-base md:text-lg mb-4 md:mb-6">
              We produce high-quality biochar from sustainably harvested forestry biomass through controlled, high-temperature pyrolysis. Our process transforms residual biomass into a stable, carbon-rich material that locks atmospheric carbon into a solid form for centuries — delivering measurable, verifiable CO₂ removal aligned with global certification standards, methodologies and verification.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              The integrity of our biochar is rooted in three fundamentals: <b>carbon permanence</b>, <b>soil enhancement capability</b>, and <b>circular economy integration</b>.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Produced at optimal pyrolysis temperatures between 500°C and 700°C, our biochar exhibits high fixed carbon content, low volatile organic compounds, and a porous structure ideal for soil applications. These properties enable biochar to serve as both a long-term carbon sink and a catalyst for land regeneration.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Applied to degraded or marginal soils, biochar dramatically improves soil structure, increases nutrient retention, boosts microbial biodiversity, and enhances water-holding capacity. This results in healthier, more resilient ecosystems — critical for forestry and sustainable agriculture projects aiming to adapt to climate stresses.
            </p>
            <p className="text-base md:text-lg">
              Whether deployed within our regenerative forestry estates or supplied to external partners in agriculture, land restoration, and carbon markets, our biochar delivers verifiable climate and soil impact — creating durable carbon sinks, restoring degraded lands, and advancing global decarbonization efforts.
            </p>
          </div>
        </section>
      </main>
    </>
  );
} 