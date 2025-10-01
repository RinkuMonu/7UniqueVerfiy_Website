import React, { useContext } from "react";
import KycHero from "../../pages/KycHero";
import KycCards from "../../pages/KycCards";
import KycFeatures from "../../pages/KycFeatures";
import APIsUnderKyc from "../../pages/KycAPIs";
import HomeFAQ from "../../pages/HomeFAQ";
import SEO from "../Helmet/helment";
import { ContextData } from "../../config/context";

// Define the type for your SEO data
interface SEOData {
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  canonical_tag?: string;
  og_type?: string;
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_site_name?: string;
  og_image?: string;
}

// Define the context type
interface AppContext {
  seo: SEOData;
  // Add other context properties if they exist
}

const KycPage: React.FC = () => {
  const { seo } = useContext(ContextData) as AppContext;

  return (
    <>
      <SEO seo={seo} />
      <KycHero />
      <KycCards />
      <KycFeatures />
      <APIsUnderKyc />

      {/* seo content */}
      <section className="py-10 px-5 bg-gradient-to-br from-[#b7603d] via-[#c87a5d] to-[#9f4a2a] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              Trust & Security
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">

              Reasons to Afford Us a Trusted Partner for KYC Verification API's Solutions

            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">
              Secure, reliable, and lightning-fast verification solutions built for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mr-4 group-hover:bg-white/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-white/90">
                  In providing the most trusted KYC verification API, 7uniqueverify puts businesses in a position of uninterrupted and safer know-your-customer verification. We have built our API with safety mechanisms that verify compliance with applicable regulations while protecting your business from fraud risk.                                            </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mr-4 group-hover:bg-white/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-white/90">

                  Customer identity verification is easy and real-time with our KYC API; businesses can add it to their systems fast and easily. Customers, if you need transitional or advanced verification functionality, our solutions can develop to meet your needs.                                                  </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mr-4 group-hover:bg-white/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-white/90">

                  We specialize in the KYC verification API in India to ensure businesses are compliant with the regulation, receiving KYC services while providing a seamless customer onboarding experience.                        </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mr-4 group-hover:bg-white/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-white/90">
                  As a trusted KYC verification API, we want to bring you devices that enhance security, reduce risk, and add efficiency to the verification process. Partner with <a href="https://www.7uniqueverfiy.com" className="font-bold  underline"> 7uniqueverify </a>  to ensure your business has safe, compliant, and low-risk operations.                              </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href="/contact-us">
              <button className="px-8 py-3 bg-white text-[#b7603d] font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
            </a>
          </div>

        </div>
      </section>

      <HomeFAQ />
    </>
  );
};

export default KycPage;