import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import video section to reduce initial bundle size
const VideoSection = dynamic(() => import('@/components/sections/video-section'), {
  loading: () => (
    <div className="py-16 bg-[#eff1f1] animate-pulse">
      <div className="orgatek-container">
        <div className="h-8 w-64 bg-gray-200 rounded mb-8 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-4 shadow-sm rounded-lg">
              <div className="aspect-video w-full mb-4 bg-gray-200"></div>
              <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
});

export default function GetInvolved() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        backgroundImage="/images/test.jpeg"
        title="Nature-based investments for a sustainable future"
        subtitle="We provide investors exposure to regional investment opportunities in real assets and natural capital."
        small={false}
      />

      {/* Investment Strategy Section */}
      <section className="py-12 bg-white">
        <div className="orgatek-container">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Our investment strategies support the role of forests as nature-based solutions, provide sustainable wood fibre for the growing circular bioeconomy, and contribute to the sustainable development of regional economies and rural communities.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - Dynamically loaded */}
      <VideoSection />

      {/* Certification Section */}
      {/* <section className="py-16 bg-white">
        <div className="orgatek-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-[#38625c] mb-6">Our Certifications</h2>
              <p className="text-gray-700 mb-6">
                Orgatek adheres to the highest standards of carbon accounting and verification. Our projects are certified by recognized international bodies to ensure transparency and credibility.
              </p>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4">
                    <Image
                      src="/images/test.jpeg"
                      alt="Certification Icon"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#38625c]">ACFi Certificate Number: 10121</h3>
                    <p className="text-xs text-gray-600">Verified for Carbon Farming Initiative</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4">
                    <Image
                      src="/images/test.jpeg"
                      alt="Certification Icon"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#38625c]">ACCU Provider</h3>
                    <p className="text-xs text-gray-600">Registered Australian Carbon Credit Unit Provider</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4">
                    <Image
                      src="/images/test.jpeg"
                      alt="Certification Icon"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#38625c]">ISO 14064-2 Compliant</h3>
                    <p className="text-xs text-gray-600">Greenhouse Gas Accounting and Verification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#eff1f1] flex items-center justify-center">
                <Image
                  src="/images/test.jpeg"
                  alt="Partner Logo"
                  width={120}
                  height={60}
                />
              </div>
              <div className="p-4 bg-[#eff1f1] flex items-center justify-center">
                <Image
                  src="/images/test.jpeg"
                  alt="Partner Logo"
                  width={120}
                  height={60}
                />
              </div>
              <div className="p-4 bg-[#eff1f1] flex items-center justify-center">
                <Image
                  src="/images/test.jpeg"
                  alt="Partner Logo"
                  width={120}
                  height={60}
                />
              </div>
              <div className="p-4 bg-[#eff1f1] flex items-center justify-center">
                <Image
                  src="/images/test.jpeg"
                  alt="Partner Logo"
                  width={120}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Acknowledgement Section */}
      {/* <section className="py-16 bg-[#27543a] text-white  text-center">
        <div className="orgatek-container">
          <h2 className="text-2xl font-semibold mb-6">Acknowledgement of Country</h2>
          <div className="max-w-7xl">
            <p className="mb-6 text-center">
              We respect the traditional and enduring connections of First Australian peoples to Country and acknowledge the expertise of our Aboriginal partners.
            </p>
            <p className="mb-6 text-center">
              We acknowledge that Australia's First Nations peoples occupied and cared for this continent for millennia. We recognise the ongoing intellectual property of Aboriginal peoples in Australia in continuing to develop new ways of managing our iconic Australian flora.
            </p>
            <p className="mb-6 text-center">
              Our work takes place on the traditional lands of many Aboriginal nations, and we pay our respects to Elders past, present and emerging.
            </p>
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <ContactFormSection
        title="Let's discuss how we can work together"
        subtitle="Whether you're a business looking to offset carbon, a landowner interested in carbon farming, or an investor seeking sustainable returns, we'd love to hear from you."
        backgroundColor="white"
      />

      <Footer />
    </main>
  );
}
