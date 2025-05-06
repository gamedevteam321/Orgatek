import React from 'react';

interface ContactFormSectionProps {
  title: string;
  subtitle?: string;
  subtitle2?: string;
  backgroundColor?: 'white' | 'cream' | 'maroon';
}

export function ContactFormSection({
  title = "INVESTMENT OPPORTUNITIES",
  subtitle = "Whether you're a carbon buyer, a landowner exploring carbon farming, or an investor seeking long-term, land-backed returns — we'd love to connect",
  subtitle2 = "Our integrated projects deliver sustainable timber, soil regeneration, and verified carbon credits while supporting circular bioeconomy goals and strengthening rural communities.",
  backgroundColor = 'white',
}: ContactFormSectionProps) {
  const getBgColor = () => {
    switch (backgroundColor) {
      case 'cream':
        return 'bg-[#eff1f1] text-[#38625c]';
      case 'white':
        return 'bg-white text-[#38625c]';
      default:
        return 'bg-[#915662] text-white';
    }
  };

  const getButtonClass = () => {
    return 'bg-green-600 text-white hover:bg-green-700';
  };

  return (
    <section className={`py-16 md:py-24 ${getBgColor()}`}>
      <div className="orgatek-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-[var(--font-montserrat)] text-black">{title}</h2>
            {subtitle && <p className="text-base md:text-lg mb-6 font-[var(--font-poppins)] text-gray-700">{subtitle}</p>}
            {subtitle2 && <p className="text-base md:text-lg mb-6 font-[var(--font-poppins)] text-gray-700">{subtitle2}</p>}
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastname" className="sr-only">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="sr-only">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                  className="w-full p-3 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full p-3 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm text-gray-700">
                  <label htmlFor="terms" className="opacity-80">
                    I agree to receive emails from Orgatek. I understand that my personal information will be processed in accordance with Orgatek's Privacy Policy.
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className={`orgatek-button ${getButtonClass()}`}
                >
                  Sign Up Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
