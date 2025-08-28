import React from "react";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import { Link } from "react-router-dom";

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
              Real-Time Fraud Detection API for Smarter Onboarding

            </h1>

            <p className="text-lg mb-4 text-white">
              Screen users and businesses instantly with access to court records, challans, and behavioral data.
            </p>
            <p className="mb-4 text-white">
              Prevent fraud, reduce risk, and stay compliant with trusted verification built for platforms across the country.

            </p>
            <p className="mb-6 text-white">
              Widely used by fintechs, NBFCs, and digital businesses in growing tech hubs like Jaipur and beyond.

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={"/contact-us"}
                className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
              >
                Get Started
              </Link>
              <Link
                to="https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
              >
                View API Docs
              </Link>
            </div>
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
