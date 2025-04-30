import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { FeatureCard } from '@/components/ui/feature-card';

export default function WhatWeCreate() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/test.jpeg"
        title="Our Solutions"
        subtitle="Our product range provides diverse global and sustainable solutions for the gardener, farmer or for carbon offset. For better tomorrow."
        small={false}
      />

      {/* Text Section */}
      <div className="bg-white py-16 px-[50px]">
        <div className="container mx-auto px-4 text-left">
          <p className="text-[#2B5741] font-semibold text-lg leading-relaxed max-w-auto mx-auto">
            Orgatek is a leader in carbon sequestration through its managed estates of Australian Oil Mallee and other Eucalyptus trees, producing a range of products with a sustainable production cycle to generate increasing yields, enhance ecosystems, and lock carbon in soils for millennia. Our products provide diverse benefits, such as carbon offsets/credits and agricultural, pharmaceutical, industrial and other applications.
          </p>
        </div>
      </div>

      {/* Solutions Cards Section */}
      <ContentSection
        title="What We Create"
        description="We transform wastelands into valuable resources through sustainable practices, creating products that benefit both the environment and society."
        bgColor="cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          <FeatureCard
            title="Timber"
            description="Sustainable timber harvested from our carefully managed forests. Our timber products are certified organic and sourced from short-rotation, high-yield tree species that are specifically selected for their environmental benefits and commercial viability."
            image="/images/test.jpeg"
            buttonText="Learn More"
          />
          
          <FeatureCard
            title="Biochar"
            description="High-quality biochar produced through our proprietary pyrolysis process. This carbon-rich material enhances soil fertility, improves water retention, and sequesters carbon for centuries, making it an essential tool for sustainable agriculture and carbon offset initiatives."
            image="/images/test.jpeg"
            buttonText="Learn More"
          />
          
          <FeatureCard
            title="Carbon Credits"
            description="Verifiable carbon credits generated through our sustainable forestry and biochar production processes. These credits help organizations meet their emission reduction targets while supporting environmental restoration and sustainable development."
            image="/images/test.jpeg"
            buttonText="Learn More"
          />
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
} 