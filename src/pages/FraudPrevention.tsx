import React from "react";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";

const FraudPrevention: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <section className="bg-white pb-10 pt-8 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Content */}
          <div className="w-full lg:w-1/2 order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Smarter <span className="text-[#b7603d]">Fraud Prevention</span> Starts with 7uniqueverify
            </h2>

            <p className="text-gray-600 mb-4">
              Stay steps ahead of fraud with 7uniqueverify’s intelligent API ecosystem. From customer onboarding to transaction monitoring, our solutions deliver real-time insights for faster, safer decision-making.
            </p>

            <p className="text-gray-600">
              Designed for banks, NBFCs, fintechs, and digital platforms across India, our APIs scale effortlessly with your business—powered by automation, risk intelligence, and compliance-ready architecture that fits right into your existing systems.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 order-2 flex justify-center">
            <img
               src="../../../public/ui/Fraud Detection/IMG5_Artboard 1.png"
              alt="Fraud Prevention Illustration"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FraudPrevention;
