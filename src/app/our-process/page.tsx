import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContentSection } from '@/components/ui/content-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import Image from 'next/image';

export default function OurProcess() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="Our Process"
        subtitle="The journey from seedling through to sustainable carbon products and renewable energy."
        small={true}
      />

      {/* Intro Section */}
      <section className="py-12 bg-[#eff1f1]">
        <div className="orgatek-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              The oil mallee's specialty is reaching maturity, to harvesting and then coppices so that it continues to regenerate in an ongoing harvest cycle, increasing its capacity for removal of atmospheric carbon without the root stock and leaf structure that through our processes will be sequestered for centuries to come.
            </p>
          </div>
        </div>
      </section>

      {/* Production Cycle Section */}
      <section className="py-16 bg-[#eff1f1]">
        <div className="orgatek-container">
          <h2 className="text-2xl font-semibold text-[#38625c] mb-6">The Production Cycle</h2>

          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0 relative w-20 h-20">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/images/test.jpeg"
                  alt="Planting"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="mb-8 md:mb-0 relative w-20 h-20">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/images/test.jpeg"
                  alt="Harvesting"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="relative w-20 h-20">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/images/test.jpeg"
                  alt="Processing"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Process Diagram */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="text-center">
              <div className="border border-[#38625c] p-3 mb-2">
                <h3 className="text-sm font-semibold text-[#38625c]">Planting</h3>
              </div>
              <div className="h-8 border-l border-[#38625c] mx-auto w-0" />
            </div>

            <div className="text-center">
              <div className="border border-[#38625c] p-3 mb-2">
                <h3 className="text-sm font-semibold text-[#38625c]">Growing</h3>
              </div>
              <div className="h-8 border-l border-[#38625c] mx-auto w-0" />
            </div>

            <div className="text-center">
              <div className="border border-[#38625c] p-3 mb-2">
                <h3 className="text-sm font-semibold text-[#38625c]">Harvesting</h3>
              </div>
              <div className="h-8 border-l border-[#38625c] mx-auto w-0" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="text-center">
              <div className="border border-[#38625c] p-3 mb-2">
                <h3 className="text-sm font-semibold text-[#38625c]">Biomass</h3>
              </div>
            </div>

            <div className="text-center">
              <div className="border border-[#38625c] p-3 mb-2">
                <h3 className="text-sm font-semibold text-[#38625c]">Pyrolysis</h3>
              </div>
            </div>

            <div className="text-center">
              <div className="border border-[#38625c] p-3 mb-2">
                <h3 className="text-sm font-semibold text-[#38625c]">Biochar</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tree Harvesting Section */}
      <section className="py-16 bg-white">
        <div className="orgatek-container">
          <h2 className="text-2xl font-semibold text-[#38625c] mb-6">There are 3 scenarios for tree harvesting:</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-t">
                  <th className="py-3 px-4 text-left font-semibold text-[#38625c]">Step #</th>
                  <th className="py-3 px-4 text-left font-semibold text-[#38625c]">Standard Protocol</th>
                  <th className="py-3 px-4 text-left font-semibold text-[#38625c]">Conventional Mallee Farms</th>
                  <th className="py-3 px-4 text-left font-semibold text-[#38625c]">Regenerated Mallee Farms</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 text-[#38625c] font-medium">Step 1</td>
                  <td className="py-3 px-4">Planting seedlings per hectare</td>
                  <td className="py-3 px-4">After planting the seedling grows for 10+ years</td>
                  <td className="py-3 px-4">After harvesting, the mallee tree regrows from its rootstock</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 text-[#38625c] font-medium">Step 2</td>
                  <td className="py-3 px-4">Trees are harvested by cutting at ground level</td>
                  <td className="py-3 px-4">Trees are harvested by cutting at ground level. Mallee root remains intact</td>
                  <td className="py-3 px-4">Trees are harvested by cutting at ground level. Mallee root remains intact</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 text-[#38625c] font-medium">Step 3</td>
                  <td className="py-3 px-4">Harvested material is processed into biochar and other products</td>
                  <td className="py-3 px-4">Harvested material is processed into biochar and other products</td>
                  <td className="py-3 px-4">Harvested material is processed into biochar and other products</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Carbon Benefits Section */}
      <ContentSection
        title="Studies show significant higher carbon benefits"
        description="Orgatek pioneered the planting, growing, and harvesting of trees, specially selecting an Australian plant known for its already evolved capacity to not only survive, but to thrive in the harsh conditions of WA. This is because the trees have evolved over millions of years to understand their environment and have developed unique means of survival. The process of coppicing cannot exceed the trial amount of carbon that a tree has in its means to survive by in its DNA."
        bgColor="white"
        buttonText="Learn more"
        buttonLink="#"
      >
        <p className="text-gray-700 mb-6">
          The process also reduces the use of the loss of captured carbon in the event of a fire. By harvesting a tree before it's lost to nature, the captured carbon is placed into use for the benefit of enhancing soil carbon stores, while creating a product that will improve growth for the future.
        </p>
      </ContentSection>

      {/* Our Farms Section */}
      <section className="py-16 bg-[#27543a] text-white">
        <div className="orgatek-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Farms</h2>
              <p className="mb-6">
                Orgatek owns two flagship farms, both part of our estate.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Newport Estate, North Buntine</h3>
                <p className="text-sm mb-4">
                  The Newport Estate (Buntine) is on the outskirts of a small town in the Wheatbelt region of Western Australia. It's the entry road into Buntine, known by the locals as the Buntine highway. This farm consists of 412 hectares of which 162 hectares is devoted to agricultural carbon sequestration. The remaining is dedicated to traditional farming.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Canterbury Farm, Kojonup</h3>
                <p className="text-sm">
                  Canterbury Farm (Kojonup) consists of 626 hectares, with 190 hectares currently used for planted tree carbon farming. This farm is located in the south-west region of Western Australia at the upper part of the Great Southern agricultural region, and is a key sheep-growing area. The Orgatek operation is based around the existing natural remnant vegetation of the region.
                </p>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/images/test.jpeg"
                alt="Australian farm landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-[#eff1f1]">
        <div className="orgatek-container">
          <h2 className="text-2xl font-semibold text-[#38625c] mb-6">Get Involved</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex space-x-4 items-start">
              <div className="h-8 w-8 flex-shrink-0">
                <Image
                  src="/images/test.jpeg"
                  alt="Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#38625c] mb-2">Acknowledgement of country</h3>
                <p className="text-xs text-gray-600">
                  We respect the traditional and enduring connections of First Australian peoples to Country and acknowledge the expertise of our Aboriginal partners. We acknowledge that Australia's First Nations peoples occupied and cared for this continent for millennia. We recognise the ongoing intellectual property of Aboriginal peoples in Australia in continuing to develop new ways of managing our iconic Australian flora.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 items-start">
              <div className="h-8 w-8 flex-shrink-0">
                <Image
                  src="/images/test.jpeg"
                  alt="Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#38625c] mb-2">ACFi Certificate Number: 10121</h3>
                <p className="text-xs text-gray-600">
                  Verified for Certification:
                </p>
              </div>
            </div>

            <div className="flex space-x-4 items-start">
              <div className="h-8 w-8 flex-shrink-0">
                <Image
                  src="/images/test.jpeg"
                  alt="Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#38625c] mb-2">Find out more</h3>
                <p className="text-xs text-gray-600">
                  Want to learn more about our process? Contact us to learn about our operations and how you can be involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection title="If you're an investor, purchaser and would like to stay informed about our projects, please subscribe to our newsletter." />

      <Footer />
    </main>
  );
}
