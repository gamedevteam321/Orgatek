import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#eff1f1]">
      {/* Top Contact Bar */}
      <div className="border-y border-[#38625c]/20">
        <div className="orgatek-container grid grid-cols-1 md:grid-cols-3 py-4">
          <div className="text-center md:text-left">
            <p className="text-[#38625c]">Email: info@orgatek.net</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[#38625c]">
              <Link href="https://facebook.com" className="ml-2 hover:text-[#915662]">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="https://instagram.com" className="ml-4 hover:text-[#915662]">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="https://linkedin.com" className="ml-4 hover:text-[#915662]">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="orgatek-container py-2">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-12 lg:gap-24">
          {/* Main Navigation - Left Column */}
          <div>
            <ul className="space-y-0">
              <li>
                <Link href="/why-we-exist" className="text-[#38625c] hover:text-[#915662] block text-3xl font-medium tracking-tight py-4">
                  Why we Exist
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-[#38625c] hover:text-[#915662] block text-3xl font-medium tracking-tight py-4 border-t border-[#38625c]/20">
                  What we do
                </Link>
              </li>
              <li>
                <Link href="/what-we-create" className="text-[#38625c] hover:text-[#915662] block text-3xl font-medium tracking-tight py-4 border-t border-[#38625c]/20">
                  What we create
                </Link>
              </li>
              <li>
                <Link href="/our-trees" className="text-[#38625c] hover:text-[#915662] block text-3xl font-medium tracking-tight py-4 border-t border-[#38625c]/20">
                  Our Trees
                </Link>
              </li>
              <li>
                <Link href="/our-impact" className="text-[#38625c] hover:text-[#915662] block text-3xl font-medium tracking-tight py-4 border-t border-[#38625c]/20">
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Connect and Legal */}
          <div className="space-y-12 pt-16">
            {/* Connect Section */}
            <div>
              <ul className="space-y-4">
                <li>
                  <Link href="/about-us" className="text-[#38625c] hover:text-[#915662] block text-xl whitespace-nowrap">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-[#38625c] hover:text-[#915662] block text-xl whitespace-nowrap">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="text-[#38625c] hover:text-[#915662] block text-xl whitespace-nowrap">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy-policy" className="text-[#38625c] hover:text-[#915662] block text-xl whitespace-nowrap">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#38625c] hover:text-[#915662] block text-xl whitespace-nowrap">
                    Terms And Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className=" pt-4 text-sm text-[#38625c] border-t border-[#38625c]/20">
          © 2024 Orgatek 
        </div>
      </div>
    </footer>
  );
}
