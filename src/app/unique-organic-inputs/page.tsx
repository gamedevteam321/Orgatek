import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function UniqueOrganicInputs() {
  return (
    <>
      <main className="mb-16 md:mb-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[95vh] flex items-end justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/proprietary-organic-inputs.png"
              alt="Unique organic inputs hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 md:px-[100px] relative z-10 pb-10 md:pb-20">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Proprietary Organic Inputs</h1>
            <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Proprietary Solutions Crafted In-House</h2>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 md:py-16 bg-white px-4 md:px-[100px] text-start">
          <div className="max-w-7xl mx-auto">
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Restoring wastelands demands a soil-first approach that transcends traditional tree planting. Unlike conventional forestry's dependence on chemical fertilizers, our proprietary organic inputs, developed through years of research, drive natural regeneration. These solutions enhance soil health, sequester carbon, and boost biodiversity, transforming barren landscapes into thriving, resilient forests.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Each wasteland presents unique challenges, from eroded soils to nutrient depletion or extreme conditions like salinity. Our in-house manufactured inputs, crafted with precise quality control, offer unmatched flexibility to customize solutions for specific conditions to support robust tree growth and long term soil fertility. Our Soil revitalizers and Biochar restore microbial activity and eliminate pollutants; growth promoters strengthen and push growth for superior carbon capture; natural pest controls protect forests while preserving ecological balance; and drought-resistant inputs improve water retention in arid environments.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Through short-rotation forestry and proprietary inputs, we create certified organic ecosystems that capture carbon, support biodiversity, improve agricultural potential and unlock economic opportunities through carbon credits.
            </p>
            <p className="text-base md:text-lg">
              These restored landscapes fuel a regenerative cycle, mitigating climate change and preventing further degradation while ensuring environmental and community resilience for generations.
            </p>
          </div>
        </section>
      </main>
    </>
  );
} 