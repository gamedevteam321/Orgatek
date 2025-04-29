import React from 'react';
import Image from 'next/image';

// Define types for partners
interface Partner {
  name: string;
  logo: string;
}

interface PartnersSectionProps {
  title?: string;
  description?: string;
  partners: Partner[];
}

export function PartnersSection({
  title = 'Our Partners',
  description = 'We are proud to partner with a range of exceptional and transformative brands, pushing carbon markets and carbon innovation to the next level.',
  partners = [{ name: 'Orgatek', logo: '/images/test.jpeg' }],
}: PartnersSectionProps) {
  return (
    <section className="bg-[#2c7090] text-white py-16 md:py-24">
      <div className="orgatek-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
          {description && (
            <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <div className="relative h-12 w-32">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }} // Make logo white
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
