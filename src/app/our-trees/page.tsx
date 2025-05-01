import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { FeatureCard } from '@/components/ui/feature-card';
import { ProcessCard } from '@/components/ui/ProcessCard';
import Image from 'next/image';

export default function OurTrees() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <div className="relative h-[95vh] w-full">
          <Image
            src="/images/test.jpeg"
            alt="Forest Landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="absolute bottom-10 left-0 p-8 md:p-12 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Our Trees</h1>
              <p className="text-xl md:text-2xl text-white">
                Restoring Ecosystems & Capturing Carbon
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Orgatek, every tree we plant serves a purpose beyond just growth—it contributes to ecosystem restoration, soil revitalization, and carbon sequestration, ensuring that degraded landscapes evolve into self-sustaining forests.
          </p>
        </div>

        {/* Tree Species Section */}
        <ContentSection
          title="Eucalyptus"
          description="A resilient, fast-growing species ideal for carbon sequestration, water conservation, and soil stabilization. Its ability to thrive in arid conditions makes it a cornerstone of land regeneration efforts."
          image="/images/test.jpeg"
          imageLeft={true}
          bgColor="cream"
        />

        <ContentSection
          title="Poplar"
          description="With rapid growth and adaptability, poplar enhances biodiversity, prevents soil erosion, and provides valuable biomass for sustainable agroforestry solutions."
          image="/images/test.jpeg"
          imageLeft={false}
          bgColor="white"
        />

        <ContentSection
          title="Acacia"
          description="Known for enriching soils with nitrogen fixation, Acacia fosters healthy ecosystems while serving as a natural defense against desertification."
          image="/images/test.jpeg"
          imageLeft={true}
          bgColor="cream"
        />

        <ContentSection
          title="Bamboo"
          description="A versatile and renewable resource, bamboo is essential for erosion control, soil enrichment, and carbon absorption, offering a sustainable alternative to traditional timber."
          image="/images/test.jpeg"
          imageLeft={false}
          bgColor="white"
        />

        <ContentSection
          title="Casuarina"
          description="Highly tolerant to saline and degraded soils, Casuarina plays a crucial role in coastal restoration, windbreaks, and carbon storage, reinforcing landscapes against climate challenges."
          image="/images/test.jpeg"
          imageLeft={true}
          bgColor="cream"
        />

        <ContentSection
          title="Gmelina Arborea"
          description="With its high-yield biomass and rapid regeneration, Gmelina supports sustainable forestry, efficient carbon sequestration, and long-term soil productivity, making it a key species for restoring deforested regions."
          image="/images/test.jpeg"
          imageLeft={false}
          bgColor="white"
        />

        {/* Conclusion Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Together, these species form the backbone of Orgatek's regenerative forestry efforts, rebuilding ecosystems that not only capture carbon but also sustain communities for generations to come.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
} 