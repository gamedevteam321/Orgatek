import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function DigitalMonitoring() {
  return (
    <>
      <main className="mb-16 md:mb-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[95vh] flex items-end justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/digital-monitoring.png"
              alt="Digital monitoring hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 md:px-[100px] relative z-10 pb-10 md:pb-20">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Digital Monitoring and Verification</h1>
            <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-6">Building Transparency, Trust, and Scalable Climate Impact</h2>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 md:py-16 bg-white px-4 md:px-[100px] text-start">
          <div className="max-w-7xl mx-auto">
            <p className="text-base md:text-lg mb-4 md:mb-6">
              At Orgatek, rigorous digital monitoring and third-party verification are integral to every stage of our regenerative forestry model.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              We combine ground-level expertise with advanced technologies to track, measure, and validate carbon sequestration, soil regeneration, and biodiversity recovery with precision and transparency.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Our approach integrates field-based IoT devices, including soil moisture sensors, biomass growth trackers, and microclimate monitors, providing real-time data on environmental and biological performance across all forestry estates.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              This data is continuously fed into Orgatek's centralized Forestry Operations Platform, enabling precise scheduling, operational optimization, and early detection of environmental stress factors.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Beyond ground-level monitoring, we employ remote sensing technologies — including high-resolution satellite imagery, drone-based aerial surveys, and multispectral analysis — to independently map biomass accumulation, canopy development, and landscape restoration progress at scale.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Satellite data is cross-referenced with field data to build a comprehensive, verifiable digital record of carbon stock changes over time.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Soil carbon dynamics are monitored through structured sampling and analysis campaigns, with datasets anchored to internationally recognized standards to ensure traceable, auditable carbon removal claims.
            </p>
            <p className="text-base md:text-lg">
              Through this integrated, multi-layered digital monitoring system, we ensure that every hectare planted, every ton of biomass grown, and every ton of carbon sequestered is measurable, transparent, and verifiable — building the trust foundation required for certified carbon credits, sustainable land asset valuation, and long-term environmental impact.
            </p>
          </div>
        </section>
      </main>
    </>
  );
} 