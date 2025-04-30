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
              Connect: 
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
      <div className="orgatek-container py-12 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {/* Explore Column */}
          <div>
            <ul className="text-[#38625c] font-semibold mb-4" >
              <li><Link href="/why-we-exist" className="text-[#38625c] hover:text-[#915662]">Why We Exist</Link></li>
              <li><Link href="/how-we-transform-wastelands" className="text-[#38625c] hover:text-[#915662]">How We Transform Wastelands</Link></li>
              <li><Link href="/our-process" className="text-[#38625c] hover:text-[#915662]">Our Process</Link></li>
              <li><Link href="/our-solutions" className="text-[#38625c] hover:text-[#915662]">Our Solutions</Link></li>
              <li><Link href="/get-involved" className="text-[#38625c] hover:text-[#915662]">Get Involved</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-[#38625c] font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-[#38625c] hover:text-[#915662]">About Us</Link></li>
              <li><Link href="/our-team" className="text-[#38625c] hover:text-[#915662]">Our Team</Link></li>
              <li><Link href="/contact" className="text-[#38625c] hover:text-[#915662]">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-[#38625c] font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-[#38625c] hover:text-[#915662]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[#38625c] hover:text-[#915662]">Terms And Conditions</Link></li>
            </ul>
          </div>

          
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 text-sm text-[#38625c]">
          © 2024 Orgatek • Website by Lateral Aspect
        </div>
      </div>
    </footer>
  );
}
