import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#DFECE1]">
      {/* Top Contact Bar */}
      <div className="border-t border-[#005133]/60">
        <div className="orgatek-container grid grid-cols-1 md:grid-cols-3 py-3">
          <div className="text-center md:text-left">
            <p className="text-[#005133] text-center md:text-left">Email: info@orgatek.net</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[#005133]">
              <Link href="https://facebook.com" className="ml-2 hover:text-[#5E9F69]">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="https://instagram.com" className="ml-4 hover:text-[#5E9F69]">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="https://linkedin.com" className="ml-4 hover:text-[#5E9F69]">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="orgatek-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8 lg:gap-16">
          {/* Main Navigation - Left Column */}
          <div className="text-center md:text-left">
            <ul className="space-y-0">
              <li>
                <Link href="/why-we-exist" className="text-[#005133] hover:text-[#5E9F69] block text-3xl font-medium py-3 border-b border-[#005133]/60">
                  Why we Exist
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-[#005133] hover:text-[#5E9F69] block text-3xl font-medium py-3 border-b border-[#005133]/60">
                  What we do
                </Link>
              </li>
              <li>
                <Link href="/what-we-create" className="text-[#005133] hover:text-[#5E9F69] block text-3xl font-medium py-3 border-b border-[#005133]/60">
                  What we create
                </Link>
              </li>
              <li>
                <Link href="/our-trees" className="text-[#005133] hover:text-[#5E9F69] block text-3xl font-medium py-3 border-b border-[#005133]/60">
                  Our Trees
                </Link>
              </li>
              <li>
                <Link href="/our-impact" className="text-[#005133] hover:text-[#5E9F69] block text-3xl font-medium py-3 border-b border-[#005133]/60">
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Connect and Legal */}
          <div className="pt-4">
            <div className="grid grid-cols-2 gap-16">
              {/* Connect Section */}
              <div className="text-center md:text-left">
                <div className="border-t border-[#005133]/60 mb-4"></div>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about-us" className="text-[#005133] hover:text-[#5E9F69] block text-lg">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/get-involved" className="text-[#005133] hover:text-[#5E9F69] block text-lg">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Section */}
              <div className="text-center md:text-left">
                <div className="border-t border-[#005133]/60 mb-4"></div>
                <ul className="space-y-3">
                  <li>
                    <Link href="/privacy-policy" className="text-[#005133] hover:text-[#5E9F69] block text-lg">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-[#005133] hover:text-[#5E9F69] block text-lg">
                      Terms And Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-sm text-[#005133] mt-4">
          © 2024 Orgatek 
        </div>
      </div>
    </footer>
  );
}
