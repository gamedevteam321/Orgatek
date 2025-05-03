import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function CarbonCredits() {
  return (
    <>
      <main className="mb-16 md:mb-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[95vh] flex items-end justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/carbon-credits.png"
              alt="Carbon credits hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 md:px-[100px] relative z-10 pb-10 md:pb-20">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Verified Carbon Credits</h1>
            <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Real, Measurable, and Permanent Carbon Removal</h2>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 md:py-16 bg-white px-4 md:px-[100px] text-start">
          <div className="max-w-7xl mx-auto">
            <p className="text-base md:text-lg mb-4 md:mb-6">
              We generate high-quality, verifiable afforestation-based carbon credits by restoring degraded lands into vibrant, sustainably managed forests, and carbon removal credits by locking carbon into soils through biochar integration.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Through this combination of above-ground carbon capture with durable soil carbon removal, our projects deliver both immediate climate benefits and long-term carbon permanence.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Every credit we produce represents real, measurable, and permanent carbon removal from the atmosphere, verified through rigorous methodologies and standards and is fully traceable from project to marketplace.
            </p>
            <p className="text-base md:text-lg">
              Through our carbon initiatives, companies and individuals can invest directly in planet-positive outcomes — while supporting local communities and ecosystems.
            </p>
          </div>
        </section>
      </main>
    </>
  );
} 