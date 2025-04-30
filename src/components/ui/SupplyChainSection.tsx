import React from 'react';

const SupplyChainSection = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          The Orgatek Difference
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          We are a vertically integrated timber products company, planting, growing and harvesting trees, to
          manufacture sustainable timber products. We therefore have total control over our supply chain from
          seed to tree and then from log to finished timber product.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Plantations */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 border-2 border-[#3c6e31] rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-[#3c6e31]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L4 9v12h16V9l-8-6zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 8.5 12 8.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">PLANTATIONS</h3>
            <p className="text-left text-gray-600">
              Orgatek owns and manages its own plantations which are FSC™* certified. We produce seedlings in our
              nurseries, plant them out on our land areas, and then maintain and manage these planted forests
              until harvest ready.
            </p>
          </div>

          {/* Logs */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 border-2 border-[#3c6e31] rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-[#3c6e31]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 19h10V5H7v14zm-5-2h4V7H2v10zM18 7v10h4V7h-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">LOGS</h3>
            <p className="text-left text-gray-600">
              We harvest logs from our own plantations using modern harvesting equipment and systems. These
              hardwood logs we transport to our timber products manufacturing industries efficiently located
              in and around our plantations.
            </p>
          </div>

          {/* Manufacture */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 border-2 border-[#3c6e31] rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-[#3c6e31]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">MANUFACTURE</h3>
            <p className="text-left text-gray-600">
              Our principal product which accounts for the vast majority of our turnover is plywood, but to
              maximise the value from our forests we also produce finger-jointed edge glue panels, CCA
              treated electricity transmission poles, fence posts and wood biomass.
            </p>
          </div>

          {/* Delivery */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 border-2 border-[#3c6e31] rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-[#3c6e31]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">DELIVERY</h3>
            <p className="text-left text-gray-600">
              Our forests and manufacturing facilities are strategically located with efficient access to
              Atlantic container ports. We therefore ship our products globally and cost competitively,
              helping our clients to diversify their supply chain risk with our unique, high quality, FSC™*
              supply from West Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainSection; 