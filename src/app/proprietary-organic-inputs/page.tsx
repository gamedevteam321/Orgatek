import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContentSection } from '@/components/ui/content-section';

export default function ProprietaryOrganicInputs() {
  return (
    <main>
      <Header />

      <ContentSection
        title="Proprietary Organic Inputs"
        description={
          <>
            <p className="mb-4">
              Restoring wastelands demands a soil-first approach that transcends traditional tree planting.
            </p>
            <p className="mb-4">
              Our in-house manufactured proprietary organic inputs, developed through years of research and crafted with precise quality control, offer unmatched flexibility to customize solutions for specific conditions to support robust tree growth and long term soil fertility.
            </p>
            <h3 className="text-xl font-semibold text-[#38625c] mt-6 mb-4">Our Organic Inputs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customized soil enrichment solutions</li>
              <li>Research-backed organic formulations</li>
              <li>Precision quality control</li>
              <li>Site-specific adaptation</li>
              <li>Long-term soil fertility enhancement</li>
              <li>Sustainable growth support</li>
            </ul>
          </>
        }
        image="/images/test.jpeg"
        bgColor="cream"
      />

      <Footer />
    </main>
  );
} 