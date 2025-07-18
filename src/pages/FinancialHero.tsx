import React from "react";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";

const FinancialHero: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left: Text content */}
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Checks API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Power Smarter Lending with 7Unique Verify’s Financial APIs
            </h2>
            <p className="text-lg mb-4 text-white">
              Looking to automate financial verification, reduce manual errors, and enhance decision-making?
            </p>
            <p className="mb-4 text-white">
              7Unique Verify’s Financial Checks API enables you to instantly retrieve and validate financial details like ITR, credit score, bank account info, and more.
            </p>
            <p className="mb-4 text-white">
              Whether you're a lender, NBFC, insurance company, or fintech startup — our API suite helps assess creditworthiness, minimize fraud risk, and stay compliant.
            </p>
            <p className="mb-6 text-white">
              Integrate in minutes. Make informed decisions. Go beyond legacy processes and unlock faster onboarding, safer underwriting, and seamless customer journeys.
            </p>
            <a
              href="#"
              className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/img/Financial Checks API/Financial1.png"
              alt="Financial API Illustration"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialHero;
