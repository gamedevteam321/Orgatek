import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function SustainableHarvesting() {
  return (
    <>
      <main className="mb-16 md:mb-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[95vh] flex items-end justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/sustainable-harvesting.png"
              alt="Sustainable harvesting hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 md:px-[100px] relative z-10 pb-10 md:pb-20">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Sustainable Harvesting</h1>
            <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Perpetuating Thriving Forests</h2>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 md:py-16 bg-white px-4 md:px-[100px] text-start">
          <div className="max-w-7xl mx-auto">
            <p className="text-base md:text-lg mb-4 md:mb-6">
              We practice strategic rotational cycles by planting and harvesting in carefully managed phases — establishing new areas each year while earlier phases mature. This ensures our forests remain vibrant and continuously productive, keeping large sections of the landscape actively growing at all times, sustaining carbon sequestration, preserving soil health, and maintaining lush, living ecosystems, while avoiding periods of barrenness or ecological disruption.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Our process guarantees year-round supply of sustainable timber and biomass by building resilient forests that grow, renew, and restore — season after season, generation after generation.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              We prefer tree varieties that can be coppiced—a sustainable technique where trees are harvested at ground level, enabling rapid regrowth from existing root systems. Within shorter years, these trees regenerate, enhancing carbon capture, preserving soil vitality, and yielding high-quality biomass for biochar and sustainable timber. Paired with our proprietary organic inputs, developed through years of research, each cycle strengthens forests, supporting biodiversity and long-term productivity.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Advanced mechanization optimizes efficiency without compromising sustainability. Our in-house designed equipment for shearing, debarking, and biomass processing boosts yields, reduces waste, and lowers costs. This precision ensures faster regrowth cycles, higher-quality outputs, and enhanced carbon sequestration, making forestry operations both economical and environmentally responsible.
            </p>
            <p className="text-base md:text-lg">
              By integrating rotational phasing, coppicing and advanced mechanization with sustainable harvesting, forests are not only productive but perpetually regenerating. They grow stronger with each harvest, unlocking economic opportunity while restoring degraded soils and contributing to long-term climate resilience and environmental sustainability.
            </p>
          </div>
        </section>
      </main>
    </>
  );
} 