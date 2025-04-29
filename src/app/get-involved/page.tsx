import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/ui/hero';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import Image from 'next/image';

export default function GetInvolved() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        title="Get Involved"
        subtitle="Join us in our mission to create a more sustainable future through carbon sequestration."
        small={true}
      />

      {/* Partnership Options Section */}
      <section className="py-16 bg-[#eff1f1]">
        <div className="orgatek-container">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#38625c] mb-8 text-center">Partner With Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#38625c] mb-4">For Businesses</h3>
              <p className="text-gray-700 mb-6">
                Partner with Orgatek to offset your carbon footprint, enhance your ESG credentials, and source sustainable materials for your products.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#38625c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Carbon credit purchasing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#38625c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sustainable materials sourcing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#38625c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">ESG reporting support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#38625c] mb-4">For Landowners</h3>
              <p className="text-gray-700 mb-6">
                Turn your land into a carbon asset by partnering with Orgatek to establish oil mallee plantations that generate ongoing revenue.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#38625c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Carbon farming opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#38625c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Land management expertise</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#38625c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Long-term revenue streams</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#38625c] mb-4">For Investors</h3>
              <p className="text-gray-700 mb-6">
                Invest in a sustainable future with competitive returns through Orgatek's carbon farming, biochar production, and carbon credit projects.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#38625c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Impact investment opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#38625c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Carbon credit market exposure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#38625c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Environmental and financial returns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-white">
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
      </section>

      {/* Acknowledgement Section */}
      <section className="py-16 bg-[#27543a] text-white">
        <div className="orgatek-container">
          <h2 className="text-2xl font-semibold mb-6">Acknowledgement of Country</h2>
          <div className="max-w-3xl">
            <p className="mb-6">
              We respect the traditional and enduring connections of First Australian peoples to Country and acknowledge the expertise of our Aboriginal partners.
            </p>
            <p className="mb-6">
              We acknowledge that Australia's First Nations peoples occupied and cared for this continent for millennia. We recognise the ongoing intellectual property of Aboriginal peoples in Australia in continuing to develop new ways of managing our iconic Australian flora.
            </p>
            <p>
              Our work takes place on the traditional lands of many Aboriginal nations, and we pay our respects to Elders past, present and emerging.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection
        title="Let's discuss how we can work together"
        subtitle="Whether you're a business looking to offset carbon, a landowner interested in carbon farming, or an investor seeking sustainable returns, we'd love to hear from you."
        backgroundColor="cream"
      />

      <Footer />
    </main>
  );
}
