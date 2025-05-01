import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function SustainableTimber() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative h-[95vh] flex items-end justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/test.jpeg"
              alt="Sustainable timber hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 relative z-10 px-[100px] pb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Sustainable Timber</h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Reducing Pressure on Natural Forests</h2>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white px-[100px] text-start">
          <div className="max-w-7xl mx-auto">
            <p className="text-lg mb-6">
              We recognize that rising global timber demand is a major driver of deforestation and biodiversity loss. We address this challenge by cultivating high-yield, fast-growing tree species on regenerated lands — supplying sustainable timber while reducing the extraction pressure on natural forests.
            </p>
            <p className="text-lg mb-6">
              Our trees are carefully selected to match local soil and climate conditions, producing strong, versatile wood for industries such as plywood, MDF, furniture, and construction.
            </p>
            <p className="text-lg mb-6">
              Lower-grade wood and biomass are directed into pulp, paper, or biochar production — maximizing resource efficiency and closing the material loop.
            </p>
            <p className="text-lg mb-6">
              Every ton of timber we grow offsets the need to harvest from old-growth forests, helping safeguard critical ecosystems and support global conservation efforts.
            </p>
            <p className="text-lg mb-6">
              Through this model, we deliver a dual climate benefit: restoring degraded lands into productive ecosystems and reducing the drivers of deforestation by supplying verified, sustainable timber to the market.
            </p>
            <p className="text-lg">
              By changing how the world sources timber, we contribute not only to carbon removal but to global forest conservation at scale.
            </p>
          </div>
        </section>
      </main>
    </>
  );
} 