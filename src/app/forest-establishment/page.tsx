import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function ForestEstablishment() {
  return (
    <>
      <main className="mb-16 md:mb-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[95vh] flex items-end justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/forest-establishment.png"
              alt="Forest establishment hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 md:px-[100px] relative z-10 pb-10 md:pb-20">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Forest Establishment</h1>
          </div>
        </section>

        {/* Hero Subheading Section */}
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-[100px]">
            <p className="text-base md:text-xl max-w-6xl text-gray-700 mb-4">
            Every Orgatek project begins with rigorous site selection and matching of short-rotation, high-yield tree species — based on detailed soil analysis, climatic conditions, water resource evaluation, and market proximity.
            </p>
            <p className="text-base md:text-xl max-w-6xl text-gray-700">
              India has over 55 million hectares classified as wastelands, with nearly 24 million hectares identified as having viable forestry potential. At Orgatek, every project begins with rigorous site and connected short-rotation, high yield tree species selection, based on detailed soil analysis, climatic assessment, water resource evaluation and market proximity.
            </p>
          </div>
        </section>

        {/* Leasing Section */}
        <section className="py-10 md:py-16 bg-white px-4 md:px-[100px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Leasing</h2>
              <p className="mb-4">
                Most of these lands are currently completely un-utilized, offering little to no rental value. Our leasing teams engage directly with landowners and village authorities to secure long-term access, structuring agreements that deliver steady lease income with predictable cash flows, while their land is organically restored, enhancing future agricultural viability without the use of chemical inputs.
              </p>
              <p>
                This approach aligns environmental regeneration with economic value creation, enabling scalable, verified carbon removal and long-term asset enhancement across rural landscapes.
              </p>
            </div>
            <div className="relative h-[250px] md:h-[400px]">
              <Image
                src="/images/leasing.png"
                alt="Forest establishment process"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Species Selection Section */}
        <section className="py-10 md:py-16 bg-gray-50 px-4 md:px-[100px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[250px] md:h-[400px] order-2 md:order-1">
              <Image
                src="/images/species-selection.png"
                alt="Species selection"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Species Selection</h2>
              <p>
                We plant high-yielding, short-rotation species such as Eucalyptus, Poplar, Acacia, Bamboo, Casuarina, and Gmelina Arborea, selected for their adaptability to local conditions and ability to deliver maximum environmental impact. These species produce sustainable timber, accelerate carbon sequestration, enhance soil fertility, and support ecosystem regeneration.
              </p>
            </div>
          </div>
        </section>

        {/* Nursery Management Section */}
        <section className="py-10 md:py-16 bg-white px-4 md:px-[100px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Nursery Management</h2>
              <p className="mb-4">
                Orgatek's specialized forestry nurseries are where regeneration begins. We cultivate high-quality, resilient seedlings using organic-certified practices, ensuring strong root systems, genetic vigor, and adaptation to local soil and climate conditions.
              </p>
              <p>
                By focusing on early-stage health and biodiversity resilience, we establish the biological foundation necessary for high survival rates, rapid canopy development, and long-term carbon sequestration performance.
              </p>
            </div>
            <div className="relative h-[250px] md:h-[400px]">
              <Image
                src="/images/nursery-management.png"
                alt="Nursery management"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Land Preparation Section */}
        <section className="py-10 md:py-16 bg-gray-50 px-4 md:px-[100px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[250px] md:h-[400px] order-2 md:order-1">
              <Image
                src="/images/land-preparation.png"
                alt="Land preparation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Land Preparation</h2>
              <p className="mb-4">
                Following land acquisition, we implement comprehensive land preparation to optimize conditions for plantation success. Activities include site leveling, primary and secondary tilling using modern mechanized equipment, detailed land planning for irrigation and operational access, and — where appropriate — the installation of drip irrigation systems.
              </p>
              <p>
                At this stage, the first application of biochar is incorporated into the soil to enhance fertility, water retention, and early-stage soil carbon enrichment.
              </p>
            </div>
          </div>
        </section>

        {/* Planting Plan Section */}
        <section className="py-10 md:py-16 bg-white px-4 md:px-[100px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Planting Plan</h2>
              <p className="mb-4">
                At Orgatek, precision planting establishes the foundation for continuous forest productivity and carbon sequestration. We deploy mechanical pit-digging equipment to ensure uniform depth, spacing, and alignment based on species-specific requirements and site conditions.
              </p>
              <p>
                Planting is executed in phased rotations, with different sections of land planted sequentially over time — maintaining active forest cover, optimizing growth cycles, and ensuring year-round ecosystem vitality. Each seedling is placed during optimal soil moisture windows and supported with a proprietary organic basal nutrient application to promote rapid establishment, early resilience, and healthy long-term development.
              </p>
            </div>
            <div className="relative h-[250px] md:h-[400px]">
              <Image
                src="/images/planting-plan.png"
                alt="Planting plan"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 