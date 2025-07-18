import React from "react";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";

const FraudDetectionHero: React.FC = () => {
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
              Fraud Detection API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Stop Fraud Before It Starts – Powered by 7Unique Verify
            </h2>
            <p className="text-lg mb-4 text-white">
              Instantly screen individuals, businesses, and partners using our real-time fraud detection APIs—designed to strengthen risk and compliance operations.
            </p>
            <p className="mb-4 text-white">
              With access to behavioral data, court records, challans, and anomaly patterns, 7Unique Verify helps you identify red flags before they become liabilities.
            </p>
            <p className="mb-6 text-white">
              Trusted by fintechs, NBFCs, HR tech, and platforms across India for safe, compliant, and reliable onboarding.
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
              src="/img/Fraud Detection/Fraud Detection1.png"
              alt="Fraud Detection Illustration"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FraudDetectionHero;
