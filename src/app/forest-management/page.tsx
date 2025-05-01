import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactFormSection } from '@/components/sections/contact-form-section';



export default function ForestManagement() {
  return (
    <>
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[95vh] flex items-end justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/forest-management.png"
              alt="Forest management hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 relative z-10 px-[100px] pb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Forest Management</h1>
            <p className="text-lg md:text-xl max-w-6xl">
              Smart Monitoring. Skilled Management. Sustainable Growth
            </p>
          </div>
        </section>

        {/* Text Section */}
        <section className="py-16 bg-white px-[100px] text-start">
          <div className="max-w-7xl mx-auto">
            <p className="text-lg mb-6">
              Once planted, our forests are carefully managed through continuous field scouting, advanced digital monitoring, and skilled forestry operations and proactive interventions to ensure that our estates grow vigorously, remain healthy, and maximize carbon sequestration.
            </p>
            <p className="text-lg">
              All activities are tracked and optimized through our centralized Forestry Operations Platform — driving operational excellence, transparency, and long-term ecosystem resilience.
            </p>
          </div>
        </section>

        {/* Growth and Health Monitoring Section */}
        <section className="py-16 bg-gray-50 px-[100px]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Growth and Health Monitoring</h2>
              <p className="text-lg">
                Maintaining vigorous forest growth and ecosystem resilience requires continuous monitoring throughout the plantation lifecycle. We implement a dual approach of combining on-ground field scouting with advanced digital monitoring technologies to ensure timely interventions and optimize forest productivity.
              </p>
            </div>

            {/* Field Scouting */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px]">
                <Image
                  src="/images/field-scouting.png"
                  alt="Field scouting"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Field Scouting</h3>
                <p className="mb-4">
                  Our field teams conduct regular physical inspections across estates, evaluating tree growth rates, canopy development, soil conditions, and identifying early signs of pest pressure, disease, or environmental stress.
                </p>
                <p>
                  Human scouting provides critical ground-truth data and enables rapid response actions to maintain forest health and carbon capture performance.
                </p>
              </div>
            </div>

            {/* Digital Monitoring */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Digital Monitoring</h3>
                <p>
                  We complement field activities with a suite of digital monitoring tools, including IoT sensors, remote sensing devices, and satellite imagery. These systems deliver real-time data on key parameters such as soil moisture, growth dynamics, and canopy health, enabling continuous oversight across large-scale projects with improved precision and early risk detection.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/digital-monitoring-1.png"
                  alt="Digital monitoring"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Forestry Operations Section */}
        <section className="py-16 bg-white px-[100px]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px]">
                <Image
                  src="/images/forestry-operations.png"
                  alt="Forestry operations"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Forestry Operations</h2>
                <h4 className="text-lg mb-6">
                  Sustaining healthy, high-performing forests requires continuous operational management.
                </h4>
                <p className="mb-6">
                  Our experienced teams execute critical activities such as pruning to optimize tree form and light penetration, deweeding to minimize competition for nutrients, soil management through organic amendments like biochar to enhance fertility, thinning to strengthen stand structure, irrigation management to maintain optimal water supply, and pest and disease control using integrated organic practices.
                </p>
                <p>
                  All activities are performed by skilled personnel using specialized tools and modern machinery — including mechanized pruners, brush cutters, soil conditioners, drip irrigation systems, and biological sprayers — ensuring operational efficiency, forest resilience, and maximum carbon sequestration potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coppicing Management Section */}
        <section className="py-16 bg-gray-50 px-[100px]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Coppicing Management</h2>
                <h4 className="text-lg mb-6">
                  Accelerating Forest Regrowth
                </h4>
                <p className="mb-6">
                  We utilize coppicing as a sustainable forest management technique for selected tree species with strong regenerative characteristics, such as Eucalyptus.
                </p>
                <p className="mb-6">
                  Through controlled cutting at harvest, we stimulate multiple new shoots from the original tree base, which are later pruned to retain the best stands, and help maximize future yields without the need for replanting.
                </p>
                <p className="mb-6">
                  Coppicing extends the productive life of forestry estates, increases carbon sequestration rates by maintaining continuous rapid growth phases, and enhances soil health through sustained organic matter deposition. It also optimizes resource efficiency by reducing nursery propagation, planting costs, and land preparation cycles.
                </p>
                <p className="mb-6">
                  Our coppicing practices are tailored species-by-species based on biological responsiveness, soil condition, and rotation strategy — ensuring that only eligible and high-performing stands are managed under this system.
                </p>
                <p>
                  Non-coppicing species are managed through traditional rotational harvest and replanting cycles, maintaining overall estate diversity and resilience.
                </p>
              </div>
              <div className="relative h-[600px]">
                <Image
                  src="/images/coppicing-management.png"
                  alt="Coppicing management"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Digital Platform and Data Integration Section */}
        <section className="py-16 bg-white px-[100px]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/images/digital-platform.png"
                  alt="Digital platform and data integration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Digital Platform and Data Integration</h2>
                <p className="mb-6">
                  All monitoring data — from field scouting and digital systems — is consolidated into Orgatek's proprietary Forestry Operations Platform.
                </p>
                <p>
                  This centralized system manages the planning, scheduling, and execution of all forestry activities, enabling real-time visibility, streamlined operations, and full traceability for internal governance, investor reporting, and third-party carbon verification.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 