import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { AlternatingSection } from '@/components/ui/alternating-section';

export default function WhatWeCreate() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/create-hero.png"
        title="What We Create"
        subtitle="We transform wastelands into valuable resources through sustainable practices, creating products that benefit both the environment and society."
        small={false}
      />

      {/* Text Section */}
      <div className="bg-white py-16 px-[50px]">
        <div className="container mx-auto px-4 text-left">
          <p className="text-[#2B5741] font-semibold text-lg leading-relaxed max-w-auto mx-auto">
          We grow short rotation, high yield  timber on regenerated lands to replace deforestation-linked wood, convert forestry biomass into high-quality biochar for permanent soil carbon storage, and generate certified carbon credits rooted in measurable, durable climate impact. Our vertically integrated model transforms degraded land into climate assets — producing nature-based solutions that are traceable, verified, and built to scale.
          </p>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-cream">
        <div className="container mx-auto px-[50px] py-16">
          

          <AlternatingSection
            title="Timber"
            description="Sustainable timber harvested from our carefully managed forests. Our timber products are certified organic and sourced from short-rotation, high-yield tree species that are specifically selected for their environmental benefits and commercial viability."
            image="/images/timber.png"
            buttonText="Learn More"
            imagePosition="left"
            pagePath="/sustainable-timber"
          />

          <AlternatingSection
            title="Biochar"
            description="High-quality biochar produced through our proprietary pyrolysis process. This carbon-rich material enhances soil fertility, improves water retention, and sequesters carbon for centuries, making it an essential tool for sustainable agriculture and carbon offset initiatives."
            image="/images/biochar.png"
            buttonText="Learn More"
            imagePosition="right"
            pagePath="/biochar"
          />

          <AlternatingSection
            title="Carbon Credits"
            description="Verifiable carbon credits generated through our sustainable forestry and biochar production processes. These credits help organizations meet their emission reduction targets while supporting environmental restoration and sustainable development."
            image="/images/carbon-credits.png"
            buttonText="Learn More"
            imagePosition="left"
            pagePath="/carbon-credits"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
} 