import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactFormSection } from '@/components/sections/contact-form-section';



export default function BiocharEnrichment() {
  return (
    <>
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[95vh] flex items-end justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/test.jpeg"
              alt="Biochar enrichment hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 relative z-10 px-[100px] pb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Biochar Enrichment</h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Building Soil Health. Locking Away Carbon.</h2>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white px-[100px] text-start">
          <div className="max-w-7xl mx-auto">
            <p className="text-lg mb-6">
              Biochar soil application is an integral part of our regenerative forestry model — enhancing soil health, improving ecosystem resilience, and delivering verifiable, high-durability carbon removal.
            </p>
            <p className="text-lg mb-6">
              We establish on-site biochar production facilities at each forestry project, converting residual biomass of our projects directly into high-quality biochar using high-temperature pyrolysis processes.
            </p>
            <p className="text-lg mb-6">
              This minimizes transportation emissions (inward miles), closes the biomass loop locally, and ensures that carbon captured during tree growth is immediately stabilized and reinvested into the same soils we regenerate.
            </p>
            <p className="text-lg mb-6">
              Our pyrolysis systems operate at optimal high temperatures ({'>'}500°C), producing stable, highly porous biochar with exceptional carbon permanence characteristics.
            </p>
            <p className="text-lg mb-6">
              The degraded soils of wastelands — characterized by poor structure, low organic matter, and minimal microbial activity — are among the most responsive to biochar enrichment. Applying biochar improves soil porosity, enhances nutrient retention, balances pH, boosts microbial biodiversity, and significantly increases water holding capacity — transforming barren, degraded lands into fertile, living ecosystems capable of supporting vigorous forestry growth.
            </p>
            <p className="text-lg">
              This integrated model not only accelerates land regeneration but also creates long-term, verifiable carbon removal sinks embedded directly into the soil where the biomass emanated from, generating high-integrity carbon removal credits, providing trusted outcomes for partners seeking real, additional, scalable and durable climate solutions and biodiversity restoration.
            </p>
          </div>
        </section>
      </main>
      
      
    </>
  );
} 