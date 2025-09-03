import React from "react";
import { Link } from "react-router-dom";

const LookUpHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real-Time Phone Number Lookup API for Mobile KYC in India
          </h1>
          {/* <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Verify Mobile Numbers with Real-Time Identity Insights
          </h2> */}
          <p className="text-lg mb-4 text-white">
            Validate mobile numbers with enriched identity data — including VPA, UAN, and telecom  operator — in real-time.

          </p>
          <p className="mb-4 text-white">
            Perfect for platforms in India needing fast, secure mobile number verification to support KYC, fraud detection, and user onboarding.
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
           src="/public/ui/phone-number-lookup/img1_Artboard 1_Artboard 1.png"
            alt="Phone Number Lookup API Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LookUpHero;
