import React from 'react';

interface ContactFormSectionProps {
  title: string;
  subtitle?: string;
  subtitle2?: string;
  backgroundColor?: 'white' | 'cream' | 'maroon';
}

export function ContactFormSection({
  title = "INVESTMENT OPPORTUNITIES",
  subtitle = "We provide investors exposure to regional investment opportunities in real assets and natural capital.",
  subtitle2 = "Our investment strategies support the role of forests as nature-based solutions, provide sustainable wood fibre for the growing circular bioeconomy, and contribute to the sustainable development of regional economies and rural communities.",
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
    if (backgroundColor === 'maroon') {
      return 'bg-white text-[#915662] hover:bg-gray-100';
    }
    return 'bg-[#38625c] text-white hover:bg-[#2e4a3d]';
  };

  return (
    <section className={`py-16 md:py-24 ${getBgColor()}`}>
      <div className="orgatek-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
            {subtitle && <p className="text-base md:text-lg opacity-90 mb-6">{subtitle}</p>}
            {subtitle2 && <p className="text-base md:text-lg opacity-90 mb-6">{subtitle2}</p>}
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
                <div className="ml-3 text-sm">
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
